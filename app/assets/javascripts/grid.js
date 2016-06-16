$(document).ready(function() {
	$('.grid-cell').click(function() {
		if($(this).hasClass('blue-cell')) {
			//remove the class
			//remove the text 
			$(this).text('').removeClass('blue-cell'); 
		} else {
			// add the class
			// add the text 
			$(this).text('').addClass('blue-cell'); 
		}

		// $(this).text('clicked').addClass('blue-cell'); 
	}); 


	$('#show-text').click(function() {
		var button = $(this); 
		$('#fake-text').slideToggle(700, function() {
			if($(this).is(':hidden')) {
				// button text should be show text 
				button.text('Show Text'); 
			} else {	
				// button text should be hide text 
				button.text('Hide Text'); 
			} 
		});  
	});

}); 