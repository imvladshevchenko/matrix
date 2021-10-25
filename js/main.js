var woman = document.getElementById("woman");
var bluePill = document.getElementById("bluePill");
var redPill = document.getElementById("redPill");
var main = document.getElementById("main");
var popupTry = document.getElementById("popupTry");
var popupGet = document.getElementById("popupGet");
var closePopup = document.getElementById("closePopup");
var tryButton = document.getElementById("tryButton");

bluePill.onclick = function() {
  main.style.opacity = "0";
  woman.style.opacity = "0";
  popupTry.style.display = "flex";
};

closePopup.onclick = function() {
  main.style.opacity = "1";
  woman.style.opacity = "1";
  popupTry.style.display = "none";
};

tryButton.onclick = function() {
  main.style.opacity = "1";
  woman.style.opacity = "1";
  popupTry.style.display = "none";
};

redPill.onclick = function() {
  main.style.opacity = "0";
  woman.style.opacity = "0";
  popupGet.style.display = "flex";
};
