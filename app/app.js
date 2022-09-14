
/*
function route() {
    let hashTag = window.location.hash;
    let pageID = hashTag.replace("#/", "");
    
    if(!pageID) {
        navToPage("home");
    }
    else {
        navToPage(pageID);
    }
}

function navToPage(pageName) {
    $.get(`pages/${pageName}.html`, function(data) {
        $("#app").html(data);
    });
} 
*/


var Users = [];

function initSite() {
    if (localStorage) {
        /*
        localStorage.setItem("street", "123 Main");
        console.log(localStorage.getItem("street"));

        localStorage.setItem(("Example"), JSON.stringify({name: "Todd"}));
        console.log(localStorage.getItem("Example"));

        localStorage.setItem(("Person"), JSON.stringify(userObj));
        console.log(localStorage.getItem("Person"));

        let retrievedObj = JSON.parse(localStorage.getItem("Person"));
        console.log(retrievedObj);
        */
        if (localStorage.getItem("Person")) {
            console.log("yea");
            let person = JSON.parse(localStorage.getItem("Person"));
            
        }
        else {
            //localStorage.setItem(("Person"), []);
            alert("nah, no people yet");
        }

    } else {
        console.log("No local Storage!");
    }
}

function initListeners() {
    $("#submit").click((e) => {
        e.preventDefault();

        let fn = $("#firstname").val();
        let ln = $("#lastname").val();
        let a = $("#age").val();
        let em = $("#email").val();
        let ph = $("#phone").val();

        let cl = $("#classes").val();
        let cl_array = cl.split(", ");
        console.log(cl_array);

        let userObj = {
            fname: fn, 
            lname: ln, 
            age: a,
            email: em,
            phone: ph,
            classes: cl_array
        };

        Users.push(userObj);


        localStorage.setItem(("Person"), JSON.stringify(Users));
        console.log(localStorage.getItem("Person"));

        $("#firstname").val("");
        $("#lastname").val("");
        $("#age").val("");
        $("#email").val("");
        $("#phone").val("");
        $("#classes").val("");
    });


    $("#getNames").click((e) => {
        e.preventDefault(); //prevents button from reloading page
        $("#app").empty();

        let allUsers = JSON.parse(localStorage.getItem("Person"));
        console.log(allUsers);

        $.each(allUsers, function(index, user) {
            console.log(user.fname);
            console.log(user.lname);
            
            $("#app").append(`
            <div class="line"></div>
            <h1>New Profile:</h1>
            <h1>Hello, ${user.fname} ${user.lname}!</h1>
            <p>Age: ${user.age}</p>
            <p>Email: ${user.email}</p>
            <p>Phone Number: ${user.phone}</p>
            <br/>
            <p>Your Classes are:</p>
            `);

            $.each(user.classes, function(ind, cls){
                $("#app").append(`
                    <p>${cls}</p>
                `);
            });
            
            $("#app").append(`
                <div class="line"></div>
            `);
            
        });
    });
}

$(document).ready(function() {
    initListeners();
    initSite();
});