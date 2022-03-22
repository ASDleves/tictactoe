window.addEventListener("load", init);

function ID(elem) {
  return document.getElementById(elem);
}
function CLASS(elem) {
  return document.getElementsByClassName(elem);
}
function $(elem) {
  return document.querySelectorAll(elem);
}

var jatek = [];

function init() {
  var div = "";
  for (let index = 0; index < 9; index++) {
    div += '<div class="grid-item"></div>';
  }
  console.log(CLASS("grid-container")[0])
  CLASS("grid-container")[0].innerHTML = div;
}
