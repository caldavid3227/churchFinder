$( document ).ready(function() {
  $("#submit").on("click", function(event) {
    event.preventDefault();
      name = $('#name').val().trim(),
      zip = $('#Zip_Code').val().trim(),
      denomination = $('#Denomination').val().trim(),
     console.log(zip);

     zip = zip.replace(/\s+/g, "").toLowerCase();
     denomination = denomination.replace(/\s+/g, "").toLowerCase();


    $.get("api/", function(data) {
      console.log(data)
    $("#well-section").empty();
    // if the data is not there, then return an error message
    if (!data) {
       $("#well-section").append("<h2> Their wasn't any Church found in that area!!</h2>");
    }
    else {
      // otherwise
      // append the  name
      $("#well-section").append("<h2>" + data.name + "</h2>");
      // the address
      $("#well-section").append("<h3>Address: " + data.address + "</h3>");
      // the city
      $("#well-section").append("<h3>City: " + data.city + "</h3>");
      //adding state
      $("#well-section").append("<h3>State: " + data.state + "</h3>");
      //adding zip 
      $("#well-section").append("<h3>Zip: " + data.zip + "</h3>");
      //adding url
      $("#well-section").append("<h3>Picture:" + data.url + "</h3>");
      //adding size 
      $("#well-section").append("<h3>Size of Church: " + data.size + "</h3>");
      //adding denomination
      $("#well-section").append("<h3>Denomination of Church: " + data.size + "</h3>");

    };

    });

  });
});