var onMouseMove = function () {
  console.log("la souris a bougé");
};

var onMouseMove = function () {
  console.log("la souris a bougé");
};

document.addEventListener("mousemove", onMouseMove);
var onMouseMove = function (event) {
  cursor.style.top = event.y + "px";
  cursor.style.left = event.x + "px";
};

document.addEventListener("mousemove", onMouseMove);

var cursor = document.querySelector(".cursor");
