// JavaScript Document
/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "100px";
    document.getElementById("main").style.marginLeft = "100px";
	document.body.style.backgroundColor = "rgba(0,0,0,0.6)";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
	document.body.style.backgroundColor = "white";
};

$(document).ready(function() {
   $('.thumbnailImages').mouseenter(function() {
       $(this).animate({
           height: '+=10px'
       });
   });
   $('.thumbnailImages').mouseleave(function() {
       $(this).animate({
           height: '-=10px'
       }); 
   });
   $('div').click(function() {
       $(this).toggle(1000);
   }); 
});

$(document).ready(main);