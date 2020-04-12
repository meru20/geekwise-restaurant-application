function login() {
    var user = document.getElementById('loginEmail').value;
    var password = document.getElementById('loginPassword').value;
    if (user == "mera@gmail.com" && password == "pass123") {
        window.location.replace("order.html");
    } else {
        alert("Incorrect Username and/or Password");
    }
    return false;
}

function order() {
    var orderItem = document.getElementById('orderItem').value;
    var orderQty = document.getElementById('orderQty').value;
    var orderCustomer = document.getElementById('orderCustomer').value;
    var newOrder = {
        orderItem: orderItem,
        orderDate: new Date().toLocaleString(),
        orderQty: orderQty,
        orderCustomer: orderCustomer || "Unknown"
    }

    var orderCart = localStorage.getItem("orderCart");
    if(!orderCart) {
        localStorage.setItem("orderCart", JSON.stringify([newOrder]));
    } else {
        var orderCartList = JSON.parse(orderCart);
        var newOrderCartList = [...orderCartList, newOrder];
        localStorage.setItem("orderCart", JSON.stringify(newOrderCartList));
    }
    alert("Your " + orderQty + " " + orderItem + " have been ordered!")
    return false;
}

function loadOrders() {
    var orderCart = localStorage.getItem("orderCart");
    var orderCartList = JSON.parse(orderCart);
    var orderTable = "";

    for(var i=0; i<orderCartList.length; i++) {
        orderTable = orderTable + 
            `<div class="row border-bottom border-top">
                <div class="col-4 pt-4">
                    <h2>${orderCartList[i].orderItem}</h2>
                    <p>Ordered by: ${orderCartList[i].orderCustomer}</p>
                </div>
                <div class="col-4 text-center pt-5">
                    <p>Ordered at: ${orderCartList[i].orderDate}</p>
                    <p>Quantity: ${orderCartList[i].orderQty}</p>
                </div>
                <div class="col-4 text-center pt-5">
                    <span class="mr-4"><button class="btn btn-success">Edit</button></span>
                    <span class="mr-2"><button class="btn btn-danger" onclick="deleteItem(${i})">Delete</button></span>
                </div>
            </div>`
    }

    document.getElementById("orderTable").innerHTML = orderTable;
}

function deleteItem(index) {
    var orderCart = localStorage.getItem("orderCart");
    var orderCartList = JSON.parse(orderCart);
    orderCartList.splice(index, 1);
    localStorage.setItem("orderCart", JSON.stringify(orderCartList));
    loadOrders();
}