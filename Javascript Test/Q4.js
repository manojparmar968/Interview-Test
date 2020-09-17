// Assume we have a form e.g
// <form>
//    <input type=”text” name=”firstname” />
//    <input type=”check” name=”checkme” />
//    <input type=”submit” value=”submit”
// </form>
// For the above form, write validation in javascript so that if the firstname is empty or if checkme is not checked, 
// it will not allow the form to submit.

<script>
function validateForm() {
  var x = document.forms["myForm"]["”firstname”"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}

function myFunction() {
  var x = document.getElementById("myCheck").checked;
  document.getElementById("”checkme”").innerHTML = x;
}

</script>
</head>
<body>

<form name="myForm" action="/action_page.php" onsubmit="return validateForm()" method="post">
  <input type="text" name="”firstname”">
  <input type=”check” name=”checkme” id="myCheck"/>
  <input type="submit" value="Submit">
</form>
