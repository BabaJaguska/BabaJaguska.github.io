

$(".nav a").on("click", function(){
  $('.navbar-toggle').click()
}) // makes the navbar collapse move once you click something
// instead of staying on top as is default

$("#linkedin").on("click",function(){
  window.open("https://www.linkedin.com/in/minja-beli%C4%87-226a43b6/");
})

$("#codepen").on("click",function(){
  window.open("http://codepen.io/BabaJaguska/")
})

$("#github").on("click",function(){window.open("https://github.com/BabaJaguska")})

$("#twitter").on("click",function(){window.open("https://twitter.com/MyLateManager")})

$("#youtube").on("click",function(){window.open("https://www.youtube.com/channel/UCY-P5lDQ0xRyZ5_6Za5D2mQ")})

function parallaxCherry(){

     $("#plovi").css('top',-($(document).scrollTop())/6+'px');
 
     $("#plovi2").css('top',-($(document).scrollTop())/3+'px');}




window.addEventListener("scroll",parallaxCherry,false);
