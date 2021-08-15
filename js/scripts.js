function surveyTotal(val1, val2, val3, val4, val5) {
  return val1 + val2 + val3 + val4 + val5;
}


$(document).ready(function() {
  $("form#survey").submit(function(event) {
    event.preventDefault();
    const val1 = parseInt($("#question1").val());
    const val2 = parseInt($("#question2").val());
    const val3 = parseInt($("#question3").val());
    const val4 = parseInt($("#question4").val());
    const val5 = parseInt($("#question5").val());
    let total = surveyTotal(val1, val2, val3, val4, val5);
    let result;

    if (total === 0) {
      result = ("We can't help you if you don't make any selections.");
    } else if (val1 === 2) {
      $("#up, #java").show();
    } else if (val1 === 3) {
      $("#up, #cSharp").show();
    } else if (val1 === 4) {
      $("#up, #ruby").show();
    } else if (total <= 7) {
      $("#java").show();
    } else if (total > 7 && total <= 13) {
      $("#cSharp").show();
    } else if (total > 13 && total <= 19) {
      $("#ruby").show();
    } else if (total > 999) {
      result =("If you know every language, why are you here?");
    }

    $("#submitButton, .form").hide();
    $("#resetButton").show();
    $("#output").text(result);
  });
});