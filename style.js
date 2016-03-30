
$(document).ready(function() {
	$('#submit_item').on('click', function (){
		event.preventDefault();
		var text = $('#item_form').val();
		console.log(text);
		$newItem = $('<li>' + text + ' <button>X</button></li>');
		$newItem.appendTo('#list');
		$('#item_form').val('');
		});

	});



$('#list').on('click', '*', function(){
	$(this).remove()
});


