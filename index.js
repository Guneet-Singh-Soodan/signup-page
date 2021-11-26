function getInputValue(){
  var fname = document.getElementById("fname").value;
  var mname = document.getElementById("mname").value;
  var lname = document.getElementById("lname").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  if(fname==""){
    alert("*First Name cannot be empty.");
  }
  if(mname==""){
    alert("*Middle Name cannot be empty.");
  }if(lname==""){
    alert("*Last Name cannot be empty.");
  }if(email==""){
    alert("*Email cannot be empty.");
  }if(password==""){
    alert("*Password : Minimum 8 character required.");
  }
}
