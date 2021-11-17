for (var i = 1; i <= 3; i++) {
    DisplayDetails();
}

function DisplayDetails() {
    var name = prompt("Enter Name " + i.toString());
    var address = prompt("Enter Address " + i.toString());
    var work_num = prompt("Enter Work Number " + i.toString());
    var home_num = prompt("Enter Home Number " + i.toString());
    var email = prompt("Enter Email " + i.toString());

    var p = document.getElementById('container');
    
    var toAdd = 
    "<b>Name:</b> " + name + "<br>" +
    "<b>Address:</b> " + address + "<br>" +
    "<b>Work Phone:</b> " + work_num + "<br>" +
    "<b>Home Phone:</b> " + home_num + "<br>" +
    "<b>Email:</b> " + email +
    "<hr>";

    p.innerHTML += toAdd;
}