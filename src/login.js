// login.js
$(document).ready(function() {
  $("#loginBtn").click(function() {
    // Collect login form data
    var formData = $("#loginForm").serialize();

    // AJAX request to login.php
    $.ajax({
      type: "POST",
      url: "login.php",
      data: formData,
      success: function(response) {
        alert(response); // Display the response (you may redirect to the profile page based on the response)
      }
    });
  });
});
