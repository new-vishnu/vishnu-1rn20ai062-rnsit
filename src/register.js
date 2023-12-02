// register.js
$(document).ready(function() {
  $("#registerBtn").click(function() {
    // Collect registration form data
    var formData = $("#registrationForm").serialize();

    // AJAX request to register.php
    $.ajax({
      type: "POST",
      url: "register.php",
      data: formData,
      success: function(response) {
        alert(response); // Display the response (you may redirect to login page or profile page based on the response)
      }
    });
  });
});
