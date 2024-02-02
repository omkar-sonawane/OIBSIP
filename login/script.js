function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("errorMessage");
  
    if (username === "" || password === "") {
      errorMessage.textContent = "";
      alert("Both fields are required!")
    } else if (username !== "omkar" || password !== "password123") {
      errorMessage.textContent = "";
      alert("Invalid username or password!")
    } else {
      errorMessage.textContent = "";
      alert("Login successfull!");
    }
  }
  