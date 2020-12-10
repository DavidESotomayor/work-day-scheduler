$(document).ready(function() {

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