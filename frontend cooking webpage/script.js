// hide and show paragraph text
$(document).ready(function(){
  $("#hide").click(function(){
    $(document.getElementById("hiden")).hide("slow", function(){
      alert("The paragraph is now hidden");
    });
    $("#show").click(function(){
    $(document.getElementById("hiden")).show();
  });
  });
});