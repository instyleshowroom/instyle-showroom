
//Place images interaction

const images = [
  new Image(),
  new Image(),
  new Image(),
  new Image(),
  new Image(),
  new Image(),
  new Image(),
  new Image(),
  new Image(),
  new Image(),
  new Image(),
  new Image(),
  new Image(),
  new Image(),
  new Image(),
  new Image(),
]

images[0].src = "img/random-generator/showroom-1.jpg"
images[1].src = "img/random-generator/showroom-2.jpg"
images[2].src = "img/random-generator/showroom-3.jpg"
images[3].src = "img/random-generator/showroom-4.jpg"
images[4].src = "img/random-generator/showroom-5.jpg"
images[5].src = "img/random-generator/showroom-6.jpg"
images[6].src = "img/random-generator/showroom-7.jpg"
images[7].src = "img/random-generator/showroom-8.jpg"
images[8].src = "img/random-generator/showroom-9.jpg"
images[9].src = "img/random-generator/showroom-10.jpg"
images[10].src = "img/random-generator/showroom-11.jpg"
images[11].src = "img/random-generator/showroom-12.jpg"
images[12].src = "img/random-generator/showroom-13.jpg"
images[13].src = "img/random-generator/showroom-14.jpg"
images[14].src = "img/random-generator/showroom-15.jpg"
images[15].src = "img/random-generator/showroom-16.jpg"


let i = 0


function placeImage(x, y) {
  const nextImage = images[i].cloneNode();

  nextImage.setAttribute("draggable", "false");
  nextImage.classList.add("img-animation");

  nextImage.style.left = x + "px";
  nextImage.style.top = y + "px";
  nextImage.style.transform = "translate(-50%, -50%) scale(0.5) rotate(" + (Math.random() * 20 - 10) + "deg)";

  document.getElementById("right").appendChild(nextImage);
  i = i + 1;
  if (i >= images.length) {
    i = 0;
  }
}

let mouse = 0

document.getElementById("right").addEventListener("mousemove", function (event) {
  $('.hover-img').fadeOut();
  event.preventDefault()
  mouse = mouse + 1
  if (mouse % 20 == 0) {
    placeImage(event.pageX, event.pageY)
    $('.img-animation').delay(5000).fadeOut(4000, function () {
      $(this).remove();
    });
  }
})

function placeImageTouch() {
  const nextImage = images[i].cloneNode();

  nextImage.setAttribute("draggable", "true");
  nextImage.classList.add("img-animation");

  nextImage.style.left = Math.random() * (+100 - +10) + "%";
  nextImage.style.top = Math.random() * (+100 - +10) + "%";
  nextImage.style.transform = "translate(-50%, -50%) scale(0.5) rotate(" + (Math.random() * 40 - 10) + "deg)";

  document.getElementById("right").appendChild(nextImage);
  i = i + 1;
  if (i >= images.length) {
    i = 0;
  }
}

document.getElementById("right").addEventListener("touchstart", function (event) {
  $('.hover-img').fadeOut();
  event.preventDefault();
  placeImageTouch();
  $('.img-animation').delay(5000).fadeOut(4000, function () {
    $(this).remove();
  });
});


$(document).ready(function () {
  $(".navbar-burger").click(function () {
    $(".navbar-burger").toggleClass("is-active");
    $(".mobile-nav").toggleClass("is-active");
  });
  $(".mobile-nav a").click(function () {
    $(".mobile-nav").removeClass("is-active");
    $(".navbar-burger").removeClass("is-active");
  });
});