$(document).ready(function(){


	$('#paymentCardRadio').change(function(){
		if($(this).is(":checked")) {

			$('#paymentBitcoin').hide();
			$('#paymentCard').show();
			
			$('.price-bitcoin').hide();
			$('.price-usd').show();
		}
	});


	$('#paymentBitcoinRadio').change(function(){
		if($(this).is(":checked")) {

			$('#paymentCard').hide();
			$('#paymentBitcoin').show();

			$('.price-usd').hide();
			$('.price-bitcoin').show();

		}
	});


	// $('.mapLabel').hover(
	// 	// on hover
	// 	function(){
	// 		var toShow = '#' + $(this).attr('mapLoc');
	// 		// hiding the current location
	// 		$('.map-current').hide();
	// 		// showing what the select one
	// 		$(toShow).show();
	// 	},
	// 	// on mouse out
	// 	function(){
	// 		$(this).css('background', 'transparent');
	// 	}
	// );


	$('.mapLabel').on('click mouseover',
		function(){
			var toShow = '#' + $(this).attr('mapLoc');
			$('.map-current').hide();
			$(toShow).show();
		}
	);


});


function copy(selector){
  var $temp = $("<div>");
  $("body").prepend($temp);
  $temp.attr("contenteditable", true)
       .html($(selector).html()).select()
       .on("focus", function() { document.execCommand('selectAll',false,null) })
       .focus();
  document.execCommand("copy");
  $temp.remove();
}
