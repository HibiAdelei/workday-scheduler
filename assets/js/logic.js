//js logic for scheduler
//initialise global variables
var time = moment();
var saveBtn = $(".saveBtn");
var hour7 = $("7");
var hour8 = $("8");
var hour9 = $("9");
var hour10 = $("10");
var hour11 = $("11");
var hour12 = $("12");
var hour13 = $("13");
var hour14 = $("14");
var hour15 = $("15");
var hour16 = $("16");
var hour17 = $("17");
var hour18 = $("18");
var hour19 = $("19");

//function to display formatted date and time, also increments time foward
function initialiseTime() {
    $("#currentDay").text(moment().format("dddd, MMM Do, YYYY, HH:mm:ss"));
    setTimeout(initialiseTime, 1000);
     
}

//function to call the saved content from each box when the page is loaded
function boxes() {

 $(".time-block").each(function() {
     var id = $(this).attr("id");
     var description = localStorage.getItem(id);

        if (description !== null) {
         $(this).children(".description").val(description);
         var description = localStorage.getItem(id);
        }

    });
}
//calls each function
boxes();
initialiseTime();

//logic for 'save' buttons; saves box input to local storage
saveBtn.on("click", function () {
 var time = $(this).parent().attr("id");
 var description = $(this).siblings(".description").val();

    localStorage.setItem(time, description);
});

//styles each box based on the current time; gray for past, red for present, and green for future
function timeStyleBoxes() {
    hour = time.hours();
    $(".time-block").each(function () {
        var now = parseInt($(this).attr("id"));

        if (now > hour) {
            $(this).addClass("future");
            $(this).removeClass("present");
            $(this).removeClass("past");
        }
        else if (now === hour) {
            $(this).addClass("present");
            $(this).removeClass("future");
            $(this).removeClass("past")
        }
        else {
            $(this).addClass("past");
            $(this).removeClass("present");
            $(this).removeClass("future");
        }
    })
}
//calls the function above
timeStyleBoxes();