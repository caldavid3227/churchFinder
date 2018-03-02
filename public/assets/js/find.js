$( document ).ready(function() {
  $("#submit").on("click", function(event) {
    event.preventDefault();
      name = $('#name').val().trim(),
      zip = $('#Zip_Code').val().trim(),
      denomination = $('#Denomination').val().trim(),
     console.log(zip);
      vali();
      function vali(){
        if (zip == "") {
          alert("Zip must be filled out");
          return false;
          }
            if (denomination == "") {
          alert("Denomination must be filled out");
          return false;
          }
     };     
     emtpy();

     function emtpy(){
      $("#name").val("");
      $("#Zip_Code").val("");       
      $("#Denomination").val("");
    }
    //making sure it matches table 
     zip = zip.replace(/\s+/g, "").toLowerCase();
     denomination = denomination.replace(/\s+/g, "").toLowerCase();

    $.get("/api/" + zip + "/" + denomination, function(data) {
      console.log(data);
      if(data != 0){
      for (var i = 0; i < data.length; i++) {
        // console.log(req);
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
            // $("#well-section").href=data[i].url
            $("#well-section").append("<h3>website: <a href='" + data[i].url + "' target='#'>" +data[i].url +"</a> </h3>");
            //adding size 
            $("#well-section").append("<h3>Size of Church: " + data[i].size + "</h3>");
            //adding denomination
            $("#well-section").append("<h3>Denomination of Church: " + data[i].denomination + "</h3>");
            //under line
            $("#well-section").append("<hr>")
            };      
      }else{
          $("#well-section").append("<h3> No Churches Were Found in That Area</h3>");
      }
    }); 
  });
});