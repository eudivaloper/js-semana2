$(document).ready(function() {
  $("#text-field").val("");


$("#btn-submit").click(function(event){
    event.preventDefault();
    appendTweetToList($("#text-field").val());
    $("#text-field").val("");
    resetNumberOfChars();
  });

  function appendTweetToList(tweet) {
    $("#tweets").prepend(
      `<div class="tweet bg-light mt-3 p-3">
        <p class="tweet-text h3">${tweet}</p>
        <span id="span-date" class="small">${appendDateToTweet()}</span>
      </div>`
      )
  }

  function appendDateToTweet(){
    return formatDate(new Date());
  }

  function formatDate(date) {
    const monthNames = ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out","nov", "dez"];
    let day = date.getDate();
    let monthIndex = date.getMonth();
    let year = date.getFullYear();
    return `${day} de ${monthNames[monthIndex]} de ${year}`;
  }

  function changeRemainingText() {
    let remaining = 280 - $("#text-field").val().length;
    return $("#char-count").text(`você ainda tem ${remaining} caracteres`);
}

  $("#text-field").keyup(function(){
      changeRemainingText();
      changeColorChars();
      disableTweetButton();
  });

  $("#text-field").change(function(){
      changeRemainingText();
  });

  function resetNumberOfChars(){
    $("#char-count").text(`você ainda tem 280 caracteres`);
  }

  function changeColorChars(){
    if($("#text-field").val().length >= 240) {
      $("#text-field").removeClass("text-warning");
      $("#text-field").addClass("text-danger");
    } else if($("#text-field").val().length >= 200 && $("#text-field").val().length < 240) {
      $("#text-field").addClass("text-warning");
      $("#text-field").removeClass("text-danger");
    } else {
      $("#text-field").removeClass("text-danger text-warning");
    }
  }

  function disableTweetButton(){
    if($("#text-field").val().length > 280){
      $("#btn-submit").addClass("disabled");
      $("#btn-submit").attr("disabled", true);
      console.log("disabled");
    } else {
      $("#btn-submit").removeClass("disabled");
      $("#btn-submit").attr("disabled", false);
    }
  }
});
  




