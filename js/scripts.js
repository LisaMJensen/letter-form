$(function(){
  $("#formOne").submit(function(event){
    var personName = $("input#nameInput").val();

    $(".nameInput").text(personName);

    $(".letter").show();

    event.preventDefault();
  })
});
