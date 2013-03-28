(function( $ ){

	$.fn.bootstrapUpload = function() {		

		$(this).each(function(){
			var targetedItem = $(this);

			if($(this).get(0).tagName == 'INPUT' && $(this).attr('type').toLowerCase() == 'file')
			{
				$(this).css('display' , 'none');

				var mainContainer = $(document.createElement('DIV')).addClass('input-append');

				var buttonBrowse = $(document.createElement('BUTTON')).addClass('btn').attr('type' , 'button').text(targetedItem.attr('text')).click(function() {
					targetedItem.click();
				});

				var displayTextbox = $(document.createElement('INPUT')).attr('disabled' , 'disabled').addClass(targetedItem.attr('class')).attr('type' , 'text');


				targetedItem.change(function(){
					var toto = targetedItem;
					console.log(targetedItem.attr('value'));
					displayTextbox.attr('value' , targetedItem.get(0).value);
				});

				mainContainer.append(displayTextbox);
				mainContainer.append(buttonBrowse);				
				mainContainer.insertBefore(targetedItem);
			}
		});

		return this;
	};
})( jQuery );
