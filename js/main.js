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
    var newOrder = {
        orderItem: orderItem,
        orderQty: orderQty
    }

    var orderCart = localStorage.getItem("orderCart");
    if(!orderCart) {
        localStorage.setItem("orderCart", JSON.stringify([newOrder]));
    } else {
        orderCartList = JSON.parse(orderCart);
        newOrderCartList = [...orderCartList, newOrder];
        localStorage.setItem("orderCart", JSON.stringify(newOrderCartList));
    }
    alert("Your " + orderQty + " " + orderItem + " have been ordered!")
    return false;
}