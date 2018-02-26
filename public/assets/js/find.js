$( document ).ready(function() {
  $("#submit").on("click", function(event) {
    event.preventDefault();
      name = $('#name').val().trim(),
      zip = $('#Zip_Code').val().trim(),
      denomination = $('#Denomination').val().trim(),
     console.log(zip);

      $("#name").val("");
      $("#Zip_Code").val("");       
      $("#Denomination").val("");
     zip = zip.replace(/\s+/g, "").toLowerCase();
     denomination = denomination.replace(/\s+/g, "").toLowerCase();


    $.get("/api/" + zip + "/" + denomination, function(data) {
        console.log(data)
      $("#well-section").empty();
      // if the data is not there, then return an error message
      if (data) {

        for (var i = 0; i < data.length; i++) {
          //over line
          $("#well-section").append("<hr>")

          // append the  name
          $("#well-section").append("<h2>" + data[i].name + "</h2>");
          // the address
          $("#well-section").append("<h3>Address: " + data[i].address + "</h3>");
          // the city
          $("#well-section").append("<h3>City: " + data[i].city + "</h3>");
          //adding state
          $("#well-section").append("<h3>State: " + data[i].state + "</h3>");
          //adding zip 
          $("#well-section").append("<h3>Zip:" + data[i].zip + "</h3>");
          //adding url
          $("#well-section").append('<h3>Website: <a class="jMyLink">' + data[i].url + "</a></h3>");
          //adding size 
          $("#well-section").append("<h3>Size of Church: " + data[i].size + "</h3>");
          //adding denomination
          $("#well-section").append("<h3>Denomination of Church: " + data[i].denomination + "</h3>");
          //under line
          $("#well-section").append("<hr>")
          };
        }
      else {
        // otherwise
         $("#well-section").append("<h2> Their wasn't any Church found in that area!!</h2>");
      };
    });
  });
});