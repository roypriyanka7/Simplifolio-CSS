// NAVBAR SCROLLING SECTION

$(document).ready(function(){
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 30) {
	    $(".navbar").css("background" , "#dc143c");
	  }
    else {
      $(".navbar").css("background" , "black");
    }
  })
})


// HOME SECTION

const exploreBtn = document.getElementById("exploreBtn");
function redirectToGithub() {
  //open in a new tab
  window.open('https://github.com/roypriyanka7', '_blank'); 
  
  //replace the current window location and set it to URL
  // window.location = "https://github.com/roypriyanka7"; 
}
exploreBtn.addEventListener("click", redirectToGithub);