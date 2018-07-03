console.log("extension loaded");
var injectTemplate = function() {
  console.log("injecting");
  var description = $("#xDescIn .editable");
  description.focus();
  description.append(`Meeting Goals:\n
    Agenda:\n
  `);
};

var doBetterMeetings = function () {
  console.log("timeout");
  $("#tabEventDetails").prepend('<button id="betterMeetings">Inject Template</button>');
  $('#betterMeetings').click(injectTemplate);
};

window.onload = doBetterMeetings;
