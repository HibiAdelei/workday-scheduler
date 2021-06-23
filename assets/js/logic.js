var now = moment();
var hour7 = $("hour-7");
var hour8 = $("hour-8");
var hour9 = $("hour-9");
var hour10 = $("hour-10");
var hour11 = $("hour-11");
var hour12 = $("hour-12");
var hour13 = $("hour-13");
var hour14 = $("hour-14");
var hour15 = $("hour-15");
var hour16 = $("hour-16");
var hour17 = $("hour-17");
var hour18 = $("hour-18");
var hour19 = $("hour-19");

function initialise() {
    $("currentDay").text(moment().format("dddd, MMM YYYY"));
}

initialise();