var Nightmare = require("nightmare");

var nightmare = Nightmare({ show: true });

nightmare
  .goto("https://tranquil-atoll-37047.herokuapp.com/findChurch.html")
  .type("#Zip_Code", "85234")
  .type("#Denomination", "christian")
  .click("#submit")
  .wait(3000)
  .evaluate(function() {
    return document.querySelector("#links a").href;
  })
  .end()
  .then(function(result) {
    console.log(result);
  })
  .catch(function(error) {
    console.error("Search failed:", error);
  });

