
//Place images interaction

const images = [
  "img/random-generator/showroom-1.jpg",
  "img/random-generator/showroom-2.jpg",
  "img/random-generator/showroom-3.jpg",
  "img/random-generator/showroom-4.jpg",
  "img/random-generator/showroom-5.jpg",
  "img/random-generator/showroom-6.jpg",
  "img/random-generator/showroom-7.jpg",
  "img/random-generator/showroom-8.jpg",
  "img/random-generator/showroom-9.jpg",
  "img/random-generator/showroom-10.jpg",
  "img/random-generator/showroom-11.jpg",
  "img/random-generator/showroom-12.jpg",
  "img/random-generator/showroom-13.jpg",
  "img/random-generator/showroom-14.jpg",
  "img/random-generator/showroom-15.jpg",
  "img/random-generator/showroom-16.jpg",
]

let i = 0

function placeImage(x, y) {
  const nextSrc = images[i]

  const img = document.createElement("img")
  img.setAttribute("src", nextSrc)
  img.setAttribute("draggable", "false")
  img.classList.add("img-animation")

  img.style.left = x + "px"
  img.style.top = y + "px"
  img.style.transform = "translate(-50%, -50%) scale(0.5) rotate(" + (Math.random() * 20 - 10) + "deg)"

  document.getElementById("right").appendChild(img)
  i = i + 1
  if (i >= images.length) {
    i = 0
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

function placeImageTouch(x, y) {
  const nextSrc = images[i]

  const img = document.createElement("img")
  img.setAttribute("src", nextSrc)
  img.setAttribute("draggable", "true")
  img.classList.add("img-animation")

  img.style.left = Math.random() * (+100 - +10) + "%"
  img.style.top = Math.random() * (+100 - +10) + "%"
  img.style.transform = "translate(-50%, -50%) scale(0.5) rotate(" + (Math.random() * 40 - 10) + "deg)"

  document.getElementById("right").appendChild(img)
  i = i + 1
  if (i >= images.length) {
    i = 0
  }
}


document.getElementById("right").addEventListener("touchstart", function (event) {
  $('.hover-img').fadeOut();
  event.preventDefault()
  placeImageTouch();
  $('.img-animation').delay(5000).fadeOut(4000, function () {
    $(this).remove();
  });
})


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