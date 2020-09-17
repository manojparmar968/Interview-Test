// Write css to center a box on the page. 
// Let’s see we have a blank empty page and we want to create a box of size 100px x 100px and it should be the center of the page always. 
// How will you do it?

<!DOCTYPE html>
<html>
<head>
<style>
.container {
  ...
  position: relative;
}

.child {
  width: 100px;
  height: 100px;
  background-color: red;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -25px 0 0 -25px;
}
</style>
</head>
<body>

<div class="container">
  <div class="child"></div>
</div>

</body>
</html>
