


$(document).ready(function() {
	$('#submit_item').on('click', function (){
		event.preventDefault();
		var text = $('#item_form').val();
		console.log(text);
		$newItem = $('<li>' + text + ' <button>Delete</button></li>');
		$newItem.appendTo('#list');
		});
	});

// <li> <input type="radio">
//         <button>Delete</button> </li>

	// $(this).children('input:text').each(function(index, elem) {
	// 	var value = $(elem).val()
	// 	$('body').append('<h2>' + value + '</h2>');
	// 	$(elem).val('');