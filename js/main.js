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