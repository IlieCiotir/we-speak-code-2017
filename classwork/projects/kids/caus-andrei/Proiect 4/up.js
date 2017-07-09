function inchide() { 
	ascundElement("sidebar");
	arataElement("meniux2");
	}
	
function deschide() {
	arataElement("sidebar");
	ascundElement("meniux2");
}
function ascundElement(id){
	var sidebar=document.getElementById(id);
	sidebar.style.display="none";
}

function arataElement (id) {
	var sidebar=document.getElementById(id);
	sidebar.style.display="block";
}
function  runOnScroll (evt) {
	var scrollTop = evt.target.scrollingElement.scrollTop;
	var body = document.getElementById("body");
	
	if(scrollTop < 500){
		body.classList=[];
	}
	if (scrollTop >500 ){
		
		
		body.classList.add("fundal1");
	}
	console.log(evt.target.scrollingElement.scrollTop);
}




window.addEventListener("scroll", runOnScroll);
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex> slides.length) {slideIndex = 1} 
    slides[slideIndex-1].style.display = "block"; 
    setTimeout(showSlides, 5000); // Change image every 2 seconds
}