function validate(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if ( username == "st001" && password == "pass123"){
        alert ("Student Login successfully");
        window.location = "C:/Users/Aditya Sharma/Desktop/HackIndore/stdashboard.html"; 
        return false;
    }
    else if(username == "ma001" && password == "admin123"){
        alert (" Mess Admin Login successfully");
        window.location = "C:/Users/Aditya Sharma/Desktop/HackIndore/mdashboard.html"; 
        return false;
        }
    else{
        alert (" Invalid credentials! Please try again.");
    }
}
}
