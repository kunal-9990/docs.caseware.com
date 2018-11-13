function loadContent(page, link) {
	var e = document.getElementById('source');
	
	for (i = 1;i <= 5;i++){
		
		document.getElementById(i).className = document.getElementById(i).className.replace(/(?:^|\s)completed-step(?!\S)/, 'normal-step');
	}
				
	if(page == '1') {

		e.innerHTML='<iframe class="welcomePage" src="Sub/page1.htm" width="100%" height="100%" scrolling="no" frameborder="no"></iframe>';
		document.getElementById('1').className = document.getElementById('1').className.replace(/(?:^|\s)normal-step(?!\S)/, 'completed-step');

	} else if(page == '2') {
		
		e.innerHTML='<iframe class="welcomePage" src="Sub/page2.htm" width="100%" height="2000px" scrolling="no" frameborder="no"></iframe>';
		document.getElementById('2').className = document.getElementById('2').className.replace(/(?:^|\s)normal-step(?!\S)/, 'completed-step');

	} else if(page == '3') {
			
		e.innerHTML='<iframe class="welcomePage" src="Sub/page3.htm" width="100%" height="5000px" scrolling="no" frameborder="no"></iframe>';
		document.getElementById('3').className = document.getElementById('3').className.replace(/(?:^|\s)normal-step(?!\S)/, 'completed-step');

	} else if(page == '4') {
		
		e.innerHTML='<iframe class="welcomePage" src="Sub/page4.htm" width="100%" height="2000px" scrolling="no" frameborder="no"></iframe>';
		document.getElementById('4').className = document.getElementById('4').className.replace(/(?:^|\s)normal-step(?!\S)/, 'completed-step');

	} else if(page == '5') {
		
		e.innerHTML='<iframe class="welcomePage" src="Sub/page5.htm" width="100%" height="5000px" scrolling="no" frameborder="no"></iframe>';
		document.getElementById('5').className = document.getElementById('5').className.replace(/(?:^|\s)normal-step(?!\S)/, 'completed-step');

	}
}