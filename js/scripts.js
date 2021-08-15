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
      result = ("We can't help you if you don't make any selections.")
    } else if (total <= 8) {
      // $("#languageResult").clear();
      $("#java").show();
    } else if (total > 8 && total <= 12) {
      // $("#languageResult").clear();
      $("#cSharp").show();
    } else {
      result = ("not ready yet");
    }
    $("#submitButton").hide();
    $("#resetButton").show();

    $("#output").text(result);
  });
});