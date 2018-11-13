function loadContent(page, link) {
	var e = document.getElementById('source2');
	
	for (i = 1;i <= 3;i++){
		
		document.getElementById(i).className = document.getElementById(i).className.replace(/(?:^|\s)completed-step(?!\S)/, 'normal-step');
	}
				
	if(page == '1') {

		e.innerHTML='<iframe class="welcomePage" src="../../People/t_People_Adding_Contacts.htm" width="100%" height="1000px" scrolling="no" frameborder="no"></iframe>';
		document.getElementById('1').className = document.getElementById('1').className.replace(/(?:^|\s)normal-step(?!\S)/, 'completed-step');

	} else if(page == '2') {
		
		e.innerHTML='<iframe class="welcomePage" src="../../Security/Object_Sharing/t_Assigning_Roles_onEntity.htm" width="100%" height="2000px" scrolling="no" frameborder="no"></iframe>';
		document.getElementById('2').className = document.getElementById('2').className.replace(/(?:^|\s)normal-step(?!\S)/, 'completed-step');

	} else if(page == '3') {
			
		e.innerHTML='<iframe class="welcomePage" src="../../Security/Object_Sharing/t_Assigning_Roles_onItem.htm" width="100%" height="5000px" scrolling="no" frameborder="no"></iframe>';
		document.getElementById('3').className = document.getElementById('3').className.replace(/(?:^|\s)normal-step(?!\S)/, 'completed-step');

	}
}