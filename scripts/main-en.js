new WOW().init();
const observer = lozad();
observer.observe();
var rellax = new Rellax('.rellax');
window.addEventListener("load", function(){
  window.cookieconsent.initialise({
    "palette": {
      "popup": {
        "background": "#ffffff",
        "text": "#000000",
      },
      "button": {
        "background": "#ffffff",
        "text": "#000000"
      }
    },
    "content": {
      "message": "This site uses technical cookies to provide a better user experience, analytics cookies to collect data in aggregate form, and third-party cookies to provide user additional services. By clicking “I accept”, scrolling through this page, navigating or using our services, you agree to our use of cookies.",
      "dismiss": "<span style='text-decoration: underline;'>I accept</span>",
      "link": "view our cookie policy",
      "href": "/en/privacy.html"
    }
  })
});

$(document).ready(function() {
  $(".navbar-burger").click(function() {
      $(".navbar-burger").toggleClass("is-active");
      $(".mobile-nav").toggleClass("is-active");
  });
});






