(function( $ ){

	$.fn.bootstrapUpload = function(settings) {		
		var targetedItem = $(this);

		settings = settings?settings:{};

		//------- SETTINGS ------------
		if(!settings.text)
		{
			settings.text = "Browse";
		}
		if(!settings.size)
		{
			settings.size = 2;
		}
		//-----------------------------

		if($(this).tagName == 'input' && $(this).attr('type') == 'file')
		{
			$(this).style('display' , 'none');

			var mainContainer = $(document.createElement('DIV')).addClass('input-append');

			var buttonBrowse = $(document.createElement('BUTTON')).addClass('btn').attr('type' , 'button').text(buttonText).click(function() {
				targetedItem.click();
			});

			var displayTextbox = $(document.createElement('INPUT')).addClass('span'+settings.size).attr('type' , 'text');


			targetedItem.change(function(){
				displayTextbox.attr('value' , targetedItem.value);
			});

			mainContainer.append(buttonBrowse);
			mainContainer.append(displayTextbox);
			mainContainer.insertBefore(targetedItem);
		}

		return targetedItem;
	};
})( jQuery );
