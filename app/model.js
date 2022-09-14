var baseURL = "http://api.weatherapi.com/v1/";
var key = "2af2ca9438e742d1be7202359222908";

function getCurrentDate() {
    //console.log(utility(name));

    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDay();

    return `${year}-${month}-${day}`;
}

function getCurrentWeather(location) {
    //$("#app").empty();
    //For looping local json
    /*

    $.getJSON("../app/data/data.json", function(items) {
        $.each(items.LISTOFDATA, function(index, item) {
            $("#app").append(`<p>${item.name}</p>`);
        });
    }).fail(function (e) {
        alert("Sorry Data did not load!");
        console.log(e); 
    });
    console.log("ok");
    */

    //for retrieving api info
    const currentDate = getCurrentDate()
    $.get(`${baseURL}astronomy.json?key=${key}&q=${location}&dt=${currentDate}`,
    (data) => {
        console.log(data);
        console.log(currentDate);

        //console.log(data.location.etc);

        console.log(Date());
    }).fail(function (e) {
        alert("Sorry Data did not load!");
        console.log(e); 
    });
    

}

function utility(name) {
    return name + " Howdy Pard!";
}

export { getCurrentDate, getCurrentWeather };