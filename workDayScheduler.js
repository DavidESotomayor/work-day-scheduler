$(document).ready(function() {

    // Current Time
    function liveTime() {
        $('#currentDay').text(moment().format('MMMM YYYY H:mm:ss a'));
      }
      setInterval(liveTime, 1000);

      }































    })