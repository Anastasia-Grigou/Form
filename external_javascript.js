function my_date () {
  var d = new Date();
  var day = d.getDay();
  if (day == 0) {
      return "Κυριακή";
  }
  else if(day == 1) {
      return "Δευτέρα";
  }
  else if(day == 2) {
      return "Τρίτη";
  }
  else if(day == 3) {
      return "Τετάρτη";
  }
  else if(day == 4) {
      return "Πέμπτη";
  }
  else if(day == 5) {
      return "Παρασκευή";
  }
  else if(day == 6) {
      return "Σαββάτο";
  }
}

function changeText(id) {
  alert("Θα μεταφερθείτε σε άλλη σελίδα");
  }

  function mOver(obj) {
    obj.innerHTML = "Eισαγωγή"
  }
  
  function mOut(obj) {
    obj.innerHTML = "Υπολογιστική Γλωσσολογία"
  }

  function myFunction() {
    var inpObj = document.getElementById("id1");
    if (!inpObj.checkValidity()) {
      document.getElementById("last").innerHTML = "Παρακαλώ συμπληρώστε τα απαιτούμενα πεδία";
    } else {
      document.getElementById("last").innerHTML = "";
      alert("Σας ευχαριστούμε!")
    } 
  } 

function setPasswordConfirmValidity() {
  const password1 = document.getElementById('password');
  const password2 = document.getElementById('confirm_password');

  if (password1.value === password2.value) {
         password2.setCustomValidity('');
         document.getElementById("pass").innerHTML = "";
    } else {
      document.getElementById("pass").innerHTML = "Οι κωδικοί δεν ταιριάζουν";
    }
    console.log('password2 customError ', document.getElementById('password2').validity.customError);
    console.log('password2 validationMessage ', document.getElementById('password2').validationMessage);
}

function AgeValidator() {
  var inpObj = document.getElementById("age");
  if (!inpObj.checkValidity()) {
    document.getElementById("result").innerHTML = "Δεν επιτρέπεται η εγγραφή σε άτομα κάτω των 16 ετών";
  } else {
    document.getElementById("result").innerHTML = "";
  }
}
