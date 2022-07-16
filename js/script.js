// NAVBAR SCROLLING SECTION

$("document").ready(function () {
  var lastScrollTop = 0;

  $(window).scroll(function (event) {
    var scroll = $(this).scrollTop();

    if (scroll > lastScrollTop && scroll > 50) {
      $(".navbar").css("background", "#dc143c");
    } else {
      $(".navbar").css("background", "rgba(0, 0, 0, 0.8)");
    }

    lastScrollTop = scroll;
  });
});

// HOME SECTION

const exploreBtn = document.getElementById("exploreBtn");
function redirectToGithub() {
  //open in a new tab
  window.open("https://github.com/roypriyanka7", "_blank");

  //replace the current window location and set it to URL
  // window.location = "https://github.com/roypriyanka7";
}
exploreBtn.addEventListener("click", redirectToGithub);

