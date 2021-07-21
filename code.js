function myFunction() {
    var person = prompt("Please enter your login");
    if (person === "user") {
        var password = prompt("Please enter your password");
        if (password.length === 0) {
            alert("Canceled.");
        }
        else if (password === "userpass") {
            var time = new Date().getHours();
            if(time < 20) {
                alert("Good day, dear User!");
            }
            if(time >= 20) {
                alert("Good evening, dear User!");
            }
        }
        else {
            alert("Wrong answer.");
        }
    }
    else if (person === "admin") {
        var pasword = prompt("Please enter your password");
        if (pasword.length === 0) {
            alert("Canceled.");
        }
        else if (pasword === "adminpass") {
          var time = new Date().getHours();
            if(time < 20) {
                alert("Good day, dear Admin!");
            }
            if(time >= 20) {
                alert("Good evening, dear Admin!");
            }
        }
        else {
            alert("Wrong answer.");
        }
    }
    else if (person.length === 0) {
        alert("Canceled.");
    }
    else if (person.length < 4) {
        alert("I don't know any users having name length less than 4 symbols");
    }
    else {
        alert("I don’t know you");
    }
}