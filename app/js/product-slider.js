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
											*						'topCenter'
											*						'bottomCenter'
											*/


			'widthSlider'			: 900,	/*
											* 	SET THE WIDTH OF THE SLIDER
											* 	Type: 		Number 
											* 	Default: 	900
											*	Units of measurement - pixels
											*		(Default width = 900px)
											*	If 0 is set, the width will be 100%.
											*/

			'heightSlider'			: 290,	/*
											* 	SET THE WIDTH OF THE SLIDER
											* 	Type: 		Number 
											* 	Default: 	290
											*	Units of measurement - pixels
											*		(Default width = 290px)
											*	If 0 is set, the width will be 100%.
											*/

			'numberVisibleItems'	: 3,	/*
											* 	SET THE NUMBER OF VISIBLE SLIDES
											* 	Type: 		Number 
											* 	Default: 	3
											*/

			'slideSpeed'			: 600 /*
											* 	SLIDER SCROLLING SPEED
											* 	Type: 		Number 
											* 	Default: 	600
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
					'bottomRight' 	: 'mx-related-product-bottom-right',
					'topCenter'		: 'mx-related-product-top-center',
					'bottomCenter'	: 'mx-related-product-bottom-center'

				},

				// wrapper
				'slidesWrapper'		: 'mx-related-product-wrap-box',

				// class for everyone slide
				'slideClass'		: 'mx-related-product-slide',

				// navigation
				'nextButton'		: 'mx-next-button-relation-slider',
				'prevButton'		: 'mx-prev-button-relation-slider',

				// HELPERS
				// display none
				'displayNone' 		: 'mx-display-none',
				'opacity0'	 		: 'mx-opacity-0'

			},

			// set the width of the slider
			'widthSlider'			: 900,			

			// save slider width
			'saveWidthSlider'		: 0,

			// set the height of the slider
			'heightSlider'			: 290,

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

			'slideKey'				: true,

			// perion resize
			'setTimeOut'			: null

		};

		// saveData.classes.slidesWrapper

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

				// set width of slider
				this.setWidthSlider();

				// set position
				this.setPosition();

				// set height of slider
				this.setHeightSlider();

				// wrap slide
				this.wrapSlides();

				// everyone slide
				this.everySlide();

				// set navigation
				if( saveData.numberAllItems > saveData.numberVisibleItems ) {

					this.setNavBtnNext();
					this.setNavBtnPrev();

				}

				// set style
				this.setStyle();

				// resize window
				// this.resizeWindow();

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

				// centering
				if( settings.position === 'topCenter' || settings.position === 'bottomCenter' ) {

					var _marginLeft = $( root ).width() / 2;
					
					$( root ).css( 'margin-left', '-' + _marginLeft + 'px' );

				}

			},

			// set width
			setWidthSlider: 		function() {

				// width of dots wrap
				var widthSlider = saveData.widthSlider + 'px';

				if( $( window ).innerWidth() <= saveData.widthSlider ) {

					widthSlider = $( window ).innerWidth() + 'px';

					saveData.widthSlider = $( window ).innerWidth();

				}

				// check is number
				if( $.isNumeric( settings.widthSlider ) ) {

					if( settings.widthSlider === 0 ) {

						widthSlider 			= '100%';

						// save data
						saveData.widthSlider 	= '100%';

					} else {

						if( $( window ).innerWidth() <= settings.widthSlider ) {

							widthSlider 			= $( window ).innerWidth() + 'px';

							// save data
							saveData.widthSlider 	= $( window ).innerWidth();

						} else {

							widthSlider 			= settings.widthSlider + 'px';

							// save data
							saveData.widthSlider 	= settings.widthSlider;

						}						

					}

				}

				// add style
				$( root ).css( 'max-width', widthSlider );

				// set width of slide
				this.setWidthSlides();

			},

			// set height
			setHeightSlider: 		function() {

				// width of dots wrap
				var heightSlider = saveData.heightSlider + 'px';

				if( $( window ).innerHeight() <= saveData.heightSlider ) {

					heightSlider = $( window ).innerHeight() + 'px';

					saveData.heightSlider = $( window ).innerHeight();

				}

				// check is number
				if( $.isNumeric( settings.heightSlider ) ) {

					if( settings.heightSlider === 0 ) {

						heightSlider 			= '100%';

						// save data
						saveData.heightSlider 	= '100%';

					} else {

						if( $( window ).innerHeight() <= settings.heightSlider ) {

							heightSlider 			= $( window ).innerHeight() + 'px';

							// save data
							saveData.heightSlider 	= $( window ).innerHeight();

						} else {

							heightSlider 			= settings.heightSlider + 'px';

							// save data
							saveData.heightSlider 	= settings.heightSlider;

						}						

					}

				}

				// add style
				$( root ).css( 'height', heightSlider );

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
				$( root ).append( '<nav class="' + saveData.classes.nextButton + ' ' + saveData.classes.opacity0 + '"><button>Next</button></nav>' );
				
			},

			setNavBtnPrev: 		function() {

				// append prev buttton
				$( root ).append( '<nav class="' + saveData.classes.prevButton + ' ' + saveData.classes.displayNone + ' ' + saveData.classes.opacity0 + '"><button>Prev</button></nav>' );

			},

			// set style
			setStyle: 			function() {

				var styleTagInit = '<style>';

					styleTagInit 	+= '.' + saveData.classes.slidesWrapper + '{';

						styleTagInit 	+= '-webkit-transition: ' + settings.slideSpeed + 'ms all ease;';
    					styleTagInit 	+= 'transition: ' + settings.slideSpeed + 'ms all ease;';
    					styleTagInit 	+= '-o-transition: ' + settings.slideSpeed + 'ms all ease;';

					styleTagInit 	+= '}';

				styleTagInit 	+= '</style>';

				$( 'body' ).append( styleTagInit );

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

							$( root ).find( '.' + saveData.classes.prevButton ).removeClass( saveData.classes.displayNone );

							setTimeout( function() {

								saveData.slideKey = true;

							},settings.slideSpeed );

						}						

					} );

				},

				prevSlideEvent: 		function() {

					$( root ).on( 'click', '.' + saveData.classes.prevButton, function() {

						if( saveData.slideKey === true ) {

							saveData.slideKey = false;

							ENGINECHILDPLUGIN.scrollBack();

							ENGINECHILDPLUGIN.checkVisibleButtons();

							setTimeout( function() {

								saveData.slideKey = true;

							},settings.slideSpeed );

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

					} else if( typeof settings.numberVisibleItems === 'object' ){						

						$.each( settings.numberVisibleItems, function( key, value ) {

							if( $( window ).innerWidth() >= key ) {

								saveData.numberVisibleItems = value.items;

							}

						} )

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
					
						setTimeout( function() {
												
							// width of evaryone slide
							$( root ).find( '.' + saveData.classes.slideClass ).css( 'width', saveData.saveWidthOneSlide + 'px' );

						},500 );						
						

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
						.css( { 'margin-left': saveData.saveDias + 'px' } );						
						
					}							

				},

				scrollBack: 		function() {

					if( saveData.currentStep > 0 ) {

						saveData.currentStep -= 1;

						saveData.saveDias = saveData.saveDias + saveData.saveWidthOneSlide;

						$( root ).find( '.' + saveData.classes.slidesWrapper )
						.css( { 'margin-left': saveData.saveDias + 'px' } );						

					}

				},

				checkVisibleButtons: 	function() {

					setTimeout( function() {

						if( saveData.currentStep === saveData.countSteps ) {

							$( root ).find( '.' + saveData.classes.nextButton ).addClass( saveData.classes.opacity0 );

						}	else {

							$( root ).find( '.' + saveData.classes.nextButton ).removeClass( saveData.classes.opacity0 );

						}
						if( saveData.currentStep === 0 ) {

							$( root ).find( '.' + saveData.classes.prevButton ).addClass( saveData.classes.opacity0 );

						} else {

							$( root ).find( '.' + saveData.classes.prevButton ).removeClass( saveData.classes.opacity0 );

						}

					}, settings.slideSpeed / 2 );					

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