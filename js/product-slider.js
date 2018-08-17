/****************************************************
* ###################################################
* #                                                 #
* #                                                 #
* M                                                 M
* #             RELATED PRODUCTS SLIDER             #  
* #                                                 #
* X                                                 X
* #                                                 #
* #                                                 #
* ###################################################
*/
;( function( $ ) {

	/***************************
	* Plugin for related products.
	* var options - accepts arguments when activating a plugin.
	*/
	$.fn.childrenProductSlider = function( options ) {

		$.defaultConfigChild = {
			'position' 		: 'bottomRight',/*
											* 	SET THE SLIDER POSITION
											* 	Type: 				String 
											* 	Default: 			'topRight'
											*
											* 	Possible options : 	'topLeft'
											*						'topRight'
											*						'bottomLeft'
											*						'bottomRight'
											*/

			'widthSlider'			: 900,	/*
											* 	SET THE WIDTH OF THE SLIDER
											* 	Type: 		Number 
											* 	Default: 	900
											*	Units of measurement - pixels
											*		(Default width = 900px)
											*	If 0 is set, the width will be 100%.
											*/

			'numberVisibleItems'	: 3		/*
											* 	SET THE NUMBER OF VISIBLE SLIDES
											* 	Type: 		Number 
											* 	Default: 	3
											*/

		};

		var settings = $.extend( {}, $.defaultConfigChild, options );

		// each element
		return this.each( function() {

			// run function
			MxChildrenProductSlider( this, settings );

		}  );

	}

	/***************************
	* Main function.
	* The essence of the slider.
	* var root 		- the main element for which the plugin starts
	* 	use the "root" as jQuery object. For example $( root )
	* 
	* var settings 	- settings list
	*/
	function MxChildrenProductSlider( root, settings ){

		// save the data object
		var saveData = {

			// list of classes used in a slider
			'classes': {

				// position classes
				'position'		: {

					'topLeft' 		: 'mx-related-product-top-left',
					'topRight' 		: 'mx-related-product-top-right',
					'bottomLeft'	: 'mx-related-product-bottom-left',
					'bottomRight' 	: 'mx-related-product-bottom-right'

				},

				// wrapper
				'slidesWrapper'		: 'mx-related-product-wrap-box',

				// class for everyone slide
				'slideClass'		: 'mx-related-product-slide'

			},

			// set the width of the slider
			'widthSlider'			: 900,

			// save slider width
			'saveWidthSlider'		: 0,

			// keep width of wrap of slides
			'saveWidthSlidesWrap'	: 0,

			// keep width of wrap of slides
			'saveWidthOneSlide'		: 0,

			// number of visible items
			'numberVisibleItems'	: 3,

			// number of all items
			'numberAllItems'	: 0

		};

		// saveData.classes.slideClass

		/***************************
		*
		*  == ENGINE OF PLUGIN ==
		*
		***************************/
		var ENGINECHILDPLUGIN = {

			// initialize
			init: 				function() {

				// get the number of all slides
				this.getNumberAllItems();

				// run the skeleton construction
				this.skeletonChildSlider();

			},

			/***************************
			*
			* BUILD THE SLIDER SKELETON
			*
			***************************/
			skeletonChildSlider: 	function() {

				// set position
				this.setPosition();

				// set width of slider
				this.setWidthSlider();

				// wrap slide
				this.wrapSlides();

				// everyone slide
				this.everySlide();

			},

			// set position
			setPosition: 			function() {

				var positionClassSlider = saveData.classes.position.bottomRight;

				$.each( saveData.classes.position, function( key, value ) {

					if( key === settings.position ) {

						positionClassSlider = value;

					}

				} );

				// set position class
				$( root ).addClass( positionClassSlider );

			},

			setWidthSlider: 		function() {

				// width of dots wrap
				var widthSlider = saveData.widthSlider + 'px';

				// check is number
				if( $.isNumeric( settings.widthSlider ) ) {

					if( settings.widthSlider === 0 ) {

						widthSlider 			= '100%';

						// save data
						saveData.widthSlider 	= '100%';

					} else {

						widthSlider 			= settings.widthSlider + 'px';

						// save data
						saveData.widthSlider 	= settings.widthSlider

					}

				}

				// add style
				$( root ).css( 'max-width', widthSlider );

				// set width of slide
				this.setWidthSlides();

			},

			// wrap slides
			wrapSlides: 			function() {

				$( root ).children( 'li' ).wrapAll( '<div class="' + saveData.classes.slidesWrapper + '"></div>' );

			},

			// everyone slide
			everySlide: 			function() {

				$( root ).find( 'li' ).addClass( saveData.classes.slideClass );

			},

			// get the number of all slides
			getNumberAllItems: 		function() {

				saveData.numberAllItems = $( root ).find( 'li' ).length;

			},

			/***************************
			*
			*      HELP FUNCTIONS
			*
			***************************/
				// width of slides
				setWidthSlides: 		function() {

					// check is number
					if( $.isNumeric( settings.numberVisibleItems ) ) {


						saveData.numberVisibleItems = settings.numberVisibleItems;


					}

					// if width 100%
					if( saveData.widthSlider === '100%' ) {

						saveData.saveWidthSlider = $( root ).innerWidth();

					} else {

						saveData.saveWidthSlider = saveData.widthSlider;

					}					

					// width of everyone slides
					saveData.saveWidthOneSlide = saveData.saveWidthSlider / saveData.numberVisibleItems;

					// width of wrapper of slides
					saveData.saveWidthSlidesWrap = saveData.saveWidthOneSlide * saveData.numberAllItems;

					// wrap is ready
					$( root ).find( '.' + saveData.classes.slidesWrapper ).ready( function() {

						// width of slides wrap
						$( root ).find( '.' + saveData.classes.slidesWrapper ).css( 'width', saveData.saveWidthSlidesWrap + 'px' );
											
					} );

					// slides is ready
					$( root ).find( '.' + saveData.classes.slidesWrapper ).ready( function() {

						// width of evaryone slide
						$( root ).find( '.' + saveData.classes.slideClass ).css( 'width', saveData.saveWidthOneSlide + 'px' );

					} );					

				}

		};

		/***************************
		*
		*        RUN PLUGIN
		*
		***************************/
		ENGINECHILDPLUGIN.init();



	}

} )( jQuery );