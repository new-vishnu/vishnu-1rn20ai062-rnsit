// profile.js
$(document).ready(function() {
  // Function to fetch and display user profile details
  function fetchUserProfile() {
    // AJAX request to profile.php
    $.ajax({
      type: "GET",
      url: "profile.php",
      dataType: "json",
      success: function(userDetails) {
        // Assuming you have HTML elements with IDs to display user details
        $("#name").text("Name: " + userDetails.name);
        $("#usn").text("USN: " + userDetails.usn);
        $("#age").text("Age: " + userDetails.age);
        $("#dob").text("Date of Birth: " + userDetails.dob);
        $("#contact").text("Contact Number: " + userDetails.contact);
        // Add other details as needed
      },
      error: function(xhr, status, error) {
        console.error("Error fetching user profile:", status, error);
      }
    });
  }

  // Initial fetch and display user profile details
  fetchUserProfile();

  // Example of handling a button click to update some profile details
  $("#updateProfileBtn").click(function() {
    // Perform some client-side validations and collect updated data
    var updatedData = {
      // Collect updated data from form elements or other UI components
      // Example: updatedField: $("#updatedField").val(),
    };

    // AJAX request to update-profile.php or a similar endpoint
    $.ajax({
      type: "POST",
      url: "update-profile.php",
      data: updatedData,
      success: function(response) {
        // Handle the response, display messages, or update UI accordingly
        console.log(response);
        // Optionally, fetch and display the updated user profile
        fetchUserProfile();
      },
      error: function(xhr, status, error) {
        console.error("Error updating profile:", status, error);
      }
    });
  });
});
