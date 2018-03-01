$( document ).ready(function() {
  $("#add-btn").on("click", function(event) {
      event.preventDefault();
      var NewChurch = {
      name : $('#name').val().trim(),
      address : $('#address').val().trim(),
      city : $('#city').val().trim(),
      state : $('#state').val().trim(),
      zip : $('#zip').val().trim(),
      url : $('#url').val().trim(),
      size : $('#size').val().trim(),
      denomination : $('#denomination').val().trim(),
     };
        if (NewChurch.name === "") {
          alert("Name must be filled out");
          return false;
        }
        if (NewChurch.address === "") {
          alert("Address must be filled out");
          return false;
        }
        if (NewChurch.city === "") {
          alert("City must be filled out");
          return false;
        }
        if (NewChurch.state === "") {
          alert("State must be filled out");
          return false;
        }    
        if (NewChurch.zip === "") {
          alert("Zip must be filled out");
          return false;
        }
        if (NewChurch.url === "") {
          alert("website Url must be filled out");
          return false;
        }
        if (NewChurch.size === "") {
          alert("Size must be filled out");
          return false;
        }
        if (NewChurch.denomination === "") {
          alert("Denomination must be filled out");
          return false;
        }        
      alert("We Added Your Church"); 
     clear();
     function clear(){
      $('#name').val('');
      $('#address').val('');
      $('#city').val('');
      $('#state').val('');
      $('#zip').val('');
      $('#url').val('');
      $('#size').val('');
      $('#denomination').val('');
     }
    $.post("/church/new", NewChurch)
      .then(function(data){
      console.log(data);
      });
  });  
  
});
