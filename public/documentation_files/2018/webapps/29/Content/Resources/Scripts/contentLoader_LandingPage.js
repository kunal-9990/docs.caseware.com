function loadContent(page, link) {
	var e = document.getElementById('source');
	
	for (i = 1;i <= 4;i++){
		
		document.getElementById(i).className = document.getElementById(i).className.replace(/(?:^|\s)selected(?!\S)/, '');
	}
				
	if(page == '1') {

		e.innerHTML='<iframe class="welcomePage" src="w_Default_Page1.htm" width="100%" height="850px" scrolling="no" frameborder="no"></iframe>';
		link.className += "selected";

	} else if(page == '2') {
		
		e.innerHTML='<iframe class="welcomePage" src="w_Default_Page2.htm" width="100%" height="1250px" scrolling="no" frameborder="no"></iframe>';
		link.className += "selected";

	} else if(page == '3') {
			
		e.innerHTML='<iframe class="welcomePage" src="w_Default_Page3.htm" width="100%" height="900px" scrolling="no" frameborder="no"></iframe>';
		link.className += "selected";

	} else if(page == '4') {
		
		e.innerHTML='<iframe class="welcomePage" src="w_Default_Page4.htm" width="100%" height="1100px" scrolling="no" frameborder="no"></iframe>';
		link.className += "selected";

	}
}