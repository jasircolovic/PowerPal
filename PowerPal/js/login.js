function validateForm() {
    var username = document.getElementById("usernameL").value;
    var password = document.getElementById("passwordL").value;

    

    if (username == "admin" && password == "1234") {
        location.href="index.html";
        
    } else {
        alert("Invalid login information. Please try again.");
    }
}

