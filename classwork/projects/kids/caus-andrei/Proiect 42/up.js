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
