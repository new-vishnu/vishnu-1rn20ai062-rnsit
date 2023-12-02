import logo from './logo.svg';
import './App.css';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 align ="center">Register to the page!!</h1>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    <title>User Registration</title>
  </head>
<div class="container mt-5">
  <form id="registrationForm">
    <div class="form-group">
      <label for="name">Name:</label>
      <input type="text" class="form-control" id="name" name="name" required>
    </div>
    <div class="form-group">
      <label for="usn">USN:</label>
      <input type="text" class="form-control" id="usn" name="usn" required>
    </div>
    <div class="form-group">
      <label for="age">Age:</label>
      <input type="number" class="form-control" id="age" name="age" required>
    </div>
    <div class="form-group">
      <label for="dob">Date of Birth:</label>
      <input type="date" class="form-control" id="dob" name="dob" required>
    </div>
    <div class="form-group">
      <label for="contact">Contact Number:</label>
      <input type="tel" class="form-control" id="contact" name="contact" required>
    </div>
    <!-- Add other necessary fields (username, password, etc.) here -->

    <button type="button" id="registerBtn" class="btn btn-primary">Register</button>
  </form>
</div>
      </header>
    </div>
  );
}

export default App;
