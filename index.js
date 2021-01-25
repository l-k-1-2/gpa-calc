var button = document.getElementById('change');
var image = document.getElementById('img');
console.log(button);
console.log(image);

image.style.display="none";

function change() {
  image.setAttribute("src","p2.webp");
  image.style.display="initial";
}
