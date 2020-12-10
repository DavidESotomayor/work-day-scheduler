$(document).ready(function() {

//setting up global variables  
var currentHour = moment().format("HH") // current time to check against past, present, and future

// array of objects that correspond to scheduler rows
// objects hold the hour, the corresponding hour in universal time, and an empty appointment
var hourIntervals = [
  {
    hour: 8,
    appointment: "",
    universalTime: 8
  },
  {
    hour: 9,
    appointment: "",
    universalTime: 9
  },
  {
    hour: 10,
    appointment: "",
    universalTime: 10
  },
  {
    hour: 11,
    appointment: "",
    universalTime: 11
  },
  {
    hour: 12,
    appointment: "",
    universalTime: 12
  },
  {
    hour: 1,
    appointment: "",
    universalTime: 13
  },
  {
    hour: 2,
    appointment: "",
    universalTime: 14
  },
  {
    hour: 3,
    appointment: "",
    universalTime: 15
  },
  {
    hour: 4,
    appointment: "",
    universalTime: 16
  },
  {
    hour: 5,
    appointment: "",
    universalTime: 17
  }
]



  // Current Time
  function liveTime() {
      $('#currentDay').text(moment().format('dddd, MMMM YYYY H:mm:ss a'));
    }
    setInterval(liveTime, 1000);

  // creates rows for scheduler dynamically
  function scheduleLayout() {
    var timeBlock = $("<div>", { "class": "time-block "});
    var rowBlock = $("<div>", { "class": "row" });
    var hourBlock = $("<div>", { "class": "hour" });
    var inputBlock = $("<input>", { "type": "text" });
    var saveBtnBlock = $("<div>", { "class": "saveBtn" });
    var saveBtnIcon = $("<i>", { "class": "fas fa-lock fa-2x"})
    inputBlock.addClass("textInput");
    saveBtnBlock.append(saveBtnIcon);
    rowBlock.append(hourBlock, inputBlock, saveBtnBlock);
    timeBlock.append(rowBlock);
    $(".time").append(timeBlock);
  }

  scheduleLayout()
  })