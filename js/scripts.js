$(document).ready(function () {
  //Call Function to Get Data using AJAX
  getJokes();
});

//Building URL path
var baseURL = "https://sv443.net/jokeapi/v2";
var categories = ["Programming"];
var params = [
     "blacklistFlags=nsfw,religious,racist,sexist",
     "type=twopart",
     "amount=9"
];
var url = baseURL + "/joke/" + categories.join(",") + "?" + params.join("&");

// //Execute AJAX to get data from Jokes
function getJokes() {
    $.ajax({
        url: url,
        dataType: 'json',
        success: function (data) {
            //Call function to create Cards using data from AJAX results
            createCard(data.jokes);
            console.log(data.jokes);
        }
    });
}

//Function to create Cards with data received from AJAX
function createCard(randomJoke) {
    $(randomJoke).each(function (index) {
      let createJoke = `<div class="card">
        <p><b> ${randomJoke[index].setup}</b>
          <br><br>
        Delivery: ${randomJoke[index].delivery}</li></p></div>`;
      $('.gallery').append(createJoke);
    });
}
