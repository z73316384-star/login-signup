<<<<<<< HEAD
$(document).ready(function(){
    // sign up 

    $("#signupForm").on("submit", function (event) {
        event.preventDefault();

        let name = $("#signupName").val().trim();
        let email = $("#signupEmail").val().trim().toLowerCase();
        let password = $("#signupPassword").val();
        let message = $("#signupMessage");

        let users = JSON.parse(localStorage.getItem("users")) || [];

        let existingUser = users.find(function (user) {
            return user.email === email;
        });

        if (existingUser) {
            message.text("This email is already registered.")
                   .css("color", "#ff7777");
            return;
        }

        let newUser = {
            name: name,
            email: email,
            password: password
        };

        users.push(newUser);

        localStorage.setItem("users", JSON.stringify(users));

        message.text("Account created successfully!")
               .css("color", "#7ee787");

        $("#signupForm")[0].reset();

        setTimeout(function () {
            window.location.href = "login.html";
        }, 1000);
    });
    
    // LOGIN
    $("#loginForm").on("submit", function(event) {
        event.preventDefault();

        let email = $("#loginEmail").val().trim().toLowerCase();
        let password = $("#loginPassword").val();
        let message = $("#loginMessage");

        let users = JSON.parse(localStorage.getItem("users")) || [];

        let user = users.find(function(user) {
            return user.email === email &&
                   user.password === password;
        });

        if (user) {
            sessionStorage.setItem("currentUser", user.email);
            window.location.href = "welcome.html";
        } else {
            message.text("Invalid email or password.")
                   .css("color", "#ff7777");
        }
    });
   
    // WELCOME
    if ($("#welcomeMessage").length) {
        let currentEmail = sessionStorage.getItem("currentUser");
        let users = JSON.parse(localStorage.getItem("users")) || [];

        let user = users.find(function(user) {
            return user.email === currentEmail;
        });

        if (user) {
            $("#welcomeMessage").text(
                "Hello, " + user.name +
                "! You are successfully logged in 🎉"
            );
        } else {
            window.location.replace("login.html");
        }
    }


    // logout
    $("#logoutButton").on("click",function(){

        sessionStorage.removeItem("currentUser");
        window.location.href = "login.html";
    });
=======
$(document).ready(function(){
    // sign up 

    $("#signupForm").on("submit", function (event) {
        event.preventDefault();

        let name = $("#signupName").val().trim();
        let email = $("#signupEmail").val().trim().toLowerCase();
        let password = $("#signupPassword").val();
        let message = $("#signupMessage");

        let users = JSON.parse(localStorage.getItem("users")) || [];

        let existingUser = users.find(function (user) {
            return user.email === email;
        });

        if (existingUser) {
            message.text("This email is already registered.")
                   .css("color", "#ff7777");
            return;
        }

        let newUser = {
            name: name,
            email: email,
            password: password
        };

        users.push(newUser);

        localStorage.setItem("users", JSON.stringify(users));

        message.text("Account created successfully!")
               .css("color", "#7ee787");

        $("#signupForm")[0].reset();

        setTimeout(function () {
            window.location.href = "login.html";
        }, 1000);
    });
    
    // LOGIN
    $("#loginForm").on("submit", function(event) {
        event.preventDefault();

        let email = $("#loginEmail").val().trim().toLowerCase();
        let password = $("#loginPassword").val();
        let message = $("#loginMessage");

        let users = JSON.parse(localStorage.getItem("users")) || [];

        let user = users.find(function(user) {
            return user.email === email &&
                   user.password === password;
        });

        if (user) {
            sessionStorage.setItem("currentUser", user.email);
            window.location.href = "welcome.html";
        } else {
            message.text("Invalid email or password.")
                   .css("color", "#ff7777");
        }
    });
   
    // WELCOME
    if ($("#welcomeMessage").length) {
        let currentEmail = sessionStorage.getItem("currentUser");
        let users = JSON.parse(localStorage.getItem("users")) || [];

        let user = users.find(function(user) {
            return user.email === currentEmail;
        });

        if (user) {
            $("#welcomeMessage").text(
                "Hello, " + user.name +
                "! You are successfully logged in 🎉"
            );
        } else {
            window.location.replace("login.html");
        }
    }


    // logout
    $("#logoutButton").on("click",function(){

        sessionStorage.removeItem("currentUser");
        window.location.href = "login.html";
    });
>>>>>>> cd2f863d4a30be52fbf0fd84004e0917f71db230
});