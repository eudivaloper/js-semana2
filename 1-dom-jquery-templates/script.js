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
  });

  $("#text-field").change(function(){
      changeRemainingText();
  });

  function resetNumberOfChars(){
    $("#char-count").text(`você ainda tem 280 caracteres`)
  }

  function changeColorChars(){
    if($("#text-field").val().length >= 150) {
      $("#text-field").addClass("text-danger");
    } else {
        $("#text-field").removeClass("text-danger");
    }

    if($("#text-field").val().length >= 100 && $("#text-field").val().length < 150 ) {
      $("#text-field").addClass("text-warning");
    } else {
      $("#text-field").removeClass("text-warning");
    }
  }

});
  




