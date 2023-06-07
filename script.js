document.addEventListener("DOMContentLoaded", function() {
    var overlay = document.getElementById("blur-overlay");
    var button = document.getElementById("botao");
  
    button.addEventListener("click", function() {
      overlay.style.display = "none";
    });
  });
