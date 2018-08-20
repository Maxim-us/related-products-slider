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

			'numberVisibleItems'	: 3,	/*
											* 	SET THE NUMBER OF VISIBLE SLIDES
											* 	Type: 		Number 
											* 	Default: 	3
											*/

			'slideSpeed'			: 1000 /*
											* 	SLIDER SCROLLING SPEED
											* 	Type: 		Number 
											* 	Default: 	1000
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
				'slideClass'		: 'mx-related-product-slide',

				// navigation
				'nextButton'		: 'mx-next-button-relation-slider',
				'prevButton'		: 'mx-prev-button-relation-slider'

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
			'numberAllItems'		: 0,

			// variable navigation buttons
			'saveDias'				: 0,

			'countSteps'			: 0,

			'currentStep'			: 0,			

			'slideKey'				: true

		};

		// saveData.numberVisibleItems

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

				// get the number of steps to slip
				this.getCountSteps();

				// navigation event
				this.navigationEvents();

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

				// set navigation
				if( saveData.numberAllItems > saveData.numberVisibleItems ) {

					this.setNavBtnNext();
					this.setNavBtnPrev();

				}

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

			// set the navigation of slider
			setNavBtnNext: 		function() {

				// append next button
				$( root ).append( '<nav class="' + saveData.classes.nextButton + '"><button>Next</button></nav>' );
				
			},

			setNavBtnPrev: 		function() {

				// append prev buttton
				$( root ).append( '<nav class="' + saveData.classes.prevButton + ' mx-display-none"><button>Prev</button></nav>' );

			},

			/***************************
			*
			* INTERACTION WITH THE USER
			*
			***************************/
			navigationEvents: 		function() {

				this.nextSlideEvent();

				this.prevSlideEvent();

			},

				nextSlideEvent: 		function() {

					$( root ).on( 'click', '.' + saveData.classes.nextButton, function() {

						if( saveData.slideKey === true ) {

							saveData.slideKey = false;

							ENGINECHILDPLUGIN.scrollForward();

							ENGINECHILDPLUGIN.checkVisibleButtons();

						}						

					} );

				},

				prevSlideEvent: 		function() {

					$( root ).on( 'click', '.' + saveData.classes.prevButton, function() {

						if( saveData.slideKey === true ) {

							saveData.slideKey = false;

							ENGINECHILDPLUGIN.scrollBack();

							ENGINECHILDPLUGIN.checkVisibleButtons();

						}

					} );

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

				},

				// get the number of steps to slip
				getCountSteps: 		function() {

					saveData.countSteps = saveData.numberAllItems - saveData.numberVisibleItems;

				},

				// navigation events
				scrollForward: 		function() {					

					if( saveData.currentStep < saveData.countSteps ) {

						saveData.currentStep += 1;

						saveData.saveDias = saveData.saveDias - saveData.saveWidthOneSlide;						

						$( root ).find( '.' + saveData.classes.slidesWrapper )
						.animate( { 'margin-left': saveData.saveDias + 'px' }, settings.slideSpeed, function() {

							saveData.slideKey = true;

						} );

					}							

				},

				scrollBack: 		function() {

					if( saveData.currentStep > 0 ) {

						saveData.currentStep -= 1;

						saveData.saveDias = saveData.saveDias + saveData.saveWidthOneSlide;

						$( root ).find( '.' + saveData.classes.slidesWrapper )
						.animate( { 'margin-left': saveData.saveDias + 'px' }, settings.slideSpeed, function() {

							saveData.slideKey = true;

						} );

					}

				},

				checkVisibleButtons: 	function() {

					setTimeout( function() {

						if( saveData.currentStep === saveData.countSteps ) {

							$( root ).find( '.' + saveData.classes.nextButton ).addClass( 'mx-display-none' );

						}	else {

							$( root ).find( '.' + saveData.classes.nextButton ).removeClass( 'mx-display-none' );

						}
						if( saveData.currentStep === 0 ) {

							$( root ).find( '.' + saveData.classes.prevButton ).addClass( 'mx-display-none' );

						} else {

							$( root ).find( '.' + saveData.classes.prevButton ).removeClass( 'mx-display-none' );

						}

					}, settings.slideSpeed - 100 );					

				},

		};

		/***************************
		*
		*        RUN PLUGIN
		*
		***************************/
		ENGINECHILDPLUGIN.init();



	}

} )( jQuery );