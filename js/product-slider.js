/****************************************************
* ###################################################
* #                                                 #
* #                                                 #
* M                                                 M
* #             Children Product Slider             #  
* #                                                 #
* X                                                 X
* #                                                 #
* #                                                 #
* ###################################################
*/
;( function( $ ) {

	$.fn.childrenProductSlider = function( options ) {

		$.defaultConfigChild = {};

		var settings = $.extend( {}, $.defaultConfigChild, options );

		// each element
		return this.each( function() {

			// run function
			MxChildrenProductSlider( this, settings );

		}  );

	}

	function MxChildrenProductSlider( root, settings ){

	}

} )( jQuery );