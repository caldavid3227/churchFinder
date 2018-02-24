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
      $.post("/church/new", NewChurch)
      .then(function(data){
       console.log(data);
       alert("We Added Your Church")
    })
  });  
});
