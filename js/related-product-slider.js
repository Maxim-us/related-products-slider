/****************************************************
* ###################################################
* #                                                 #
* #              Author: Marko Maksym               #
* M                                                 M
* #               MAIN PRODUCT SLIDER               #
* #            This plugin is a container           #
* X               of all child plugins              X
* #                                                 #
* #                                                 #
* ###################################################
*/
;( function( $ ) {

	/***************************
	* Default configuration of the slider.
	*/
	$.defaultConfig = {

		'nav'				: true, 		/*
											* 	SET THE "NEXT" AND "PREVIOUS" ARROWS
											* 	Type: 		Boolean 
											* 	Default: 	true
											*/

		'autoplay'			: true,			/*
											* 	SCROLL SLIDER AUTOMATICALLY
											* 	Type: 		Boolean 
											* 	Default: 	true
											*/

		'slideInterval'		: 8000,			/*
											* 	SLIDER SCROLL INTERVAL
											* 	Type: 		Number 
											* 	Default: 	8000
											*/ 

		'slideSpeed'		: 1000,			/*
											* 	SLIDER SCROLLING SPEED
											* 	Type: 		Number 
											* 	Default: 	1000
											*/

		'vertical'			: false,		/*
											* 	VERTICAL MOVEMENT
											* 	Type: 		Boolean 
											* 	Default: 	false
											*/

		// Dots
		'dots'				: true,			/*
											* 	SET THE DOTS
											* 	Type: 		Boolean 
											* 	Default: 	true
											*/

		'dotsColor'			: '#ffffff',	/*
											* 	SET THE DOTS COLOR
											* 	Type: 		String 
											* 	Default: 	'#ffffff'
											*/

		'dotsActiveColor'	: '#757373',	/*
											* 	SET THE COLOR OF THE ACTIVE POINT
											* 	Type: 		String 
											* 	Default: 	'#757373'
											*/

		'dotsPosition' 		: 'bottomLeft',/*
											* 	SET THE POSITION OF THE POINTS
											* 	Type: 				String 
											* 	Default: 			'bottomLeft'
											*
											* 	Possible options : 	'topLeft'
											*						'topCenter'
											*						'topRight'
											*						'bottomLeft'
											*						'bottomCenter'
											*						'bottomRight'
											*/

		'dotsWrapWidth' 	: 400,			/*
											* 	SET THE WIDTH OF THE WRAPPER DOTS
											* 	Type: 		Number 
											* 	Default: 	400
											*	Units of measurement - pixels
											*		(Default width = 400px)
											*	If 0 is set, the width will be 100%.
											*	In this case, the points will always be centered
											*/

		// MouseDrag
		'mouseDrag'			: true,			/*
											* 	MOUSE DRAG ENABLED
											* 	Type: 		Boolean 
											* 	Default: 	true
											*/

		/***************************
		* Banner settings
		*/
			'bannerEnable'			: true,			/*
													* 	ENABLE BANNERS
													* 	Type: 		Boolean 
													* 	Default: 	true
													*/

			'bannerPosition' 		: '', 			/*
													* 	SET THE BANNER POSITION
													* 	Type: 				String 
													* 	Default: 			'topRight'
													*
													* 	Possible options : 	'topLeft'
													*						'topRight'
													*						'bottomLeft'
													*						'bottomRight'
													*/

			'bannerAnimated'		: 'slideInUp',	/*
													* 	SET THE TYPE OF ANIMATION
													* 	Type: 				String 		| Bollean
													* 	Default: 			'slideInUp' | false
													*	More animation types can be found
													*	on the official site:
													*	https://daneden.github.io/animate.css/
													*/

			'eachBannerAnimated' : [				/*
													*	SET A SPECIFIC ANIMATION FOR EACH SLIDE 		*/
				/*1 slide has:*/ 'slideInDown',		/*	Type: 				Array 						*/
				/*2 slide has:*/ 'slideInLeft'		/*	Specify a specific animation for each slide.	*/
													/*	The names of the animations are 				*/
			],										/*	comma separated. For example:					*/
													/*	'eachBannerAnimated' : ['slideInDown',			*/
													/*		'slideInLeft',								*/
													/*		'slideInRight']								*/				

			'bannerDurationAnimation' 	: 'fast',	/*
													* 	SET ANIMATION DURATION
													* 	Type: 				String 
													* 	Default: 			'fast'
													*
													*	Possible options : 	'slow'		= 2s
													*						'slower'	= 3s
													*						'fast'		= 800ms
													*						'faster'	= 500ms
													*/

			'bannerDelayAnimation'		: 500,		/*
													* 	SET ANIMATION DELAY
													* 	Type: 				Number 
													* 	Default: 			500
													*/

			'bannerInfiniteAnimation' 	: false,	/*
													* 	SET AN ENDLESS ANIMATION CYCLE
													* 	Type: 				Boolean 
													* 	Default: 			false
													*/

			'bannerWrapWidth'			: 900,		/*
													* 	SET THE WIDTH OF THE WRAPPER DOTS
													* 	Type: 		Number 
													* 	Default: 	900
													*	Units of measurement - pixels
													*		(Default width = 900px)
													*	If 0 is set, the width will be 100%.
													*	In this case, the points will always be centered
													*/

		/***************************
		* Related products slider 
		*/
			'productSliderEnable'		: true,		/*
													* 	Enable child slider products 
													* 	Type: 				Boolean 
													* 	Default: 			true
													*/

			'productPositionSlider' : 'bottomRight',/*
													* 	SET THE SLIDER POSITION
													* 	Type: 				String 
													* 	Default: 			'topRight'
													*
													* 	Possible options : 	'topLeft'
													*						'topRight'
													*						'bottomLeft'
													*						'bottomRight'
													*/

			'productSlideSpeed'			: 600, 	/*
													* 	SLIDER SCROLLING SPEED
													* 	Type: 		Number 
													* 	Default: 	600
													*/

			'productNumberVisible'		: 3,		/*
													* 	SET THE NUMBER OF VISIBLE SLIDES
													* 	Type: 		Number | Object
													* 	Default: 	3
													*
													*	Possible options :
													*	'productNumberVisible' : {
													*		// breakpoint from 0 up
													*		0	: 	{
													*			'items': 1
													*		},
													*
													*		// breakpoint from 768 up
													*		768	: 	{
													*			'items': 2
													*		},
													*
													*		// breakpoint from 992 up
													*		992	: 	{
													*			'items': 3
													*		}
													*	},
													*/

			'productSliderAnimated'		: 'rotateIn',/*
													* 	SET THE TYPE OF ANIMATION
													* 	Type: 				String 		| Bollean
													* 	Default: 			'slideInUp' | false
													*	More animation types can be found
													*	on the official site:
													*	https://daneden.github.io/animate.css/
													*/

			'productDurationAnimation' 	: 'fast',	/*
													* 	SET ANIMATION DURATION
													* 	Type: 				String 
													* 	Default: 			'fast'
													*
													*	Possible options : 	'slow'		= 2s
													*						'slower'	= 3s
													*						'fast'		= 800ms
													*						'faster'	= 500ms
													*/

			'productDelayAnimation'		: 500,		/*
													* 	SET ANIMATION DELAY
													* 	Type: 				Number 
													* 	Default: 			500
													*/

			'productEachSliderAnimated'  : [		/*
													*	SET A SPECIFIC ANIMATION FOR EACH SLIDER		*/
				/*1 slide has:*/ 'slideInDown',		/*	Type: 				Array 						*/
				/*2 slide has:*/ 'slideInLeft'		/*	Specify a specific animation for each slide.	*/
													/*	The names of the animations are 				*/
			],										/*	comma separated. For example:					*/
													/*	'eachBannerAnimated' : ['slideInDown',			*/
													/*		'slideInLeft',								*/
													/*		'slideInRight']								*/	

			'productInfiniteAnimation' 	: false,		/*
													* 	SET AN ENDLESS ANIMATION CYCLE
													* 	Type: 				Boolean 
													* 	Default: 			false
													*/

			'productWidthSlider'		: 900,		/*
													* 	SET THE WIDTH OF THE SLIDER
													* 	Type: 		Number 
													* 	Default: 	900
													*	Units of measurement - pixels
													*		(Default width = 900px)
													*	If 0 is set, the width will be 100%.
													*/

			'responsive'				: {}		/*
													* 	SET CERTAIN STYLES DEPENDING ON SCREEN SIZE
													* 	Type: 		Object 
													* 	Default: 	{}
													*	Note: An object must have at least one property.
													*/

	};

	// settings.dotsActiveColor

	/***************************
	* Basic Plugin Authoring.
	* var options - accepts arguments when activating a plugin.
	*/
	$.fn.relatedProducts = function( options ) {

		var settings = $.extend( {}, $.defaultConfig, options );

		// each element
		return this.each( function() {

			// run function
			MxRelatedProducts( this, settings );

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
	function MxRelatedProducts( root, settings ) {

		// save the data object
		var saveData = {

			// list of classes used in the plugin
			'classes': {
				// general
				'mainClass'			: 'mx-related-products-slider',
				'slideItem'			: 'mx-slide-item',

				// visible item
				'visibleItem' 		: 'mx-visible-slide',
				'nextVisibleItem'	: 'mx-visible-next-slide',

				// owerflow class
				'overflowHide'		: 'mx-overflow-hidden',

				// navigation
				'navigationWrapPrev': 'mx-navigation-wrap-prev',
				'navigationWrapNext': 'mx-navigation-wrap-next',
				'prevBtn'			: 'mx-navigation-arrow-prev',
				'nextBtn'			: 'mx-navigation-arrow-next',

				// dots
				'dotsWrap'			: 'mx-dots-wrap',
				'dotItem'			: 'mx-dot-item',
				'dotItemActive'		: 'mx-dot-item-active',
				'dotsPosition'		: {

					'topLeft'			: 'mx-dots-position-top-left',
					'topCenter'			: 'mx-dots-position-top-center',
					'topRight'			: 'mx-dots-position-top-right',
					'bottomLeft'		: 'mx-dots-position-bottom-left',
					'bottomCenter'		: 'mx-dots-position-bottom-center',
					'bottomRight'		: 'mx-dots-position-bottom-right'

				},

				// mouseDrag
				'mouseDragClass'		: 'mx-mouse-drag-slide',

				// HELPERS
				// display none
				'displayNone' 		: 'mx-display-none'

			},

			'dotsWrapWidth'			: 400,

			// number of slides
			'countElems'			: 0,

			// Check whether the slide moves
			'keySlideMotion'		: true,

			// set up vertical scroll slider
			'direction'				: 'left',

			// interval movement
			'interval'				: null,

			/*
			* Banners
			*/
			// banner wrap class
			'bannerItemClass' 		: 'mx-slide-banner',

			/*
			* Related products slider 
			*/
			'childSliderClass' 		: 'mx-related-products',

			'enableScroll' 			: true,

			'widthOfSlider'			: 0,

			'heightOfSlider'		: 0,

			/*
			* mouseDrag
			*/
			'mouseDragOptions'		: {

				'boundingClient'		: {},

				'mouseDragKey'			: false,

				'startPointX'			: 0,

				// set up vertical scroll slider
				'direction'				: 'left',

				'offsetElement'			: 'clientX',

			},

			/*
			* Style wraps
			*/
			'styleTagId'				: {

				// dots
				'dots'				: 'mxDotsStyle'


			},

			// perion resize
			'setTimeOut'			: null

		};

		/***************************
		*
		*  == ENGINE OF PLUGIN ==
		*
		***************************/
		var ENGINEPLUGIN = {
			
			/*****************************************************************
			*
			* INITIALIZE THE SLIDER AND CHECK WHICH FEATURES WILL BE ENABLED
			*
			******************************************************************/
			// initialize
			init: 			function() {

				// overwrite variables
				this.overwriteVariables();

				// run the skeleton construction
				this.skeletonSlider();

				// number of slides
				this.countElements();			

				// set slider direction
				this.setSliderDirection();

				// create navigation arrows
				this.navigationArrows();

				// set autoplay
				if( settings.autoplay && saveData.countElems > 1 ) {

					this.autoplay();

				}

				// resize function
				this.resizeWindow();

				// Mouse drag enabled
				if( settings.mouseDrag ) {

					this.mouseDragSlider();

				}

				/*
				* Banners
				*/
				if( settings.bannerEnable ) {

					// enable banners
					this.enableBanners();

					// animation activation
					if( settings.bannerAnimated ) {

						this.initAnimation();						

						setTimeout( function() {

							ENGINEPLUGIN.enableBannerAnimated( $( '.' + saveData.classes.visibleItem ) );

						},settings.bannerDelayAnimation );

					}

				} else {

					$( root ).find( '.' + saveData.bannerItemClass ).addClass( saveData.classes.displayNone );

				}

				/*
				* Related products slider
				*/
				if( settings.productSliderEnable ) {

					this.enableRelatedProductsSlider();

				} else {

					$( root ).find( '.' + saveData.childSliderClass ).addClass( saveData.classes.displayNone );
					
				}

				// check mouse enter
				this.mouseEnterOnElements();				

			},

			// get the number of items
			countElements: 		function() {

				saveData.countElems = $( root ).find( '.' + saveData.classes.slideItem ).length;				

			},

			/***************************
			*
			* BUILD THE SLIDER SKELETON
			*
			***************************/
			skeletonSlider: 	function() {

				// add classes
				$( root ).addClass( saveData.classes.mainClass ).children( 'div' ).addClass( saveData.classes.slideItem );
				
				// set the visible slide
				$( root ).children( 'div' ).first().addClass( saveData.classes.visibleItem );

				// check number of elements
				saveData.countElems = $( root ).find( '.' + saveData.classes.slideItem ).length;				

				// set dots
				if( settings.dots && saveData.countElems > 1 ) {

					this.dotsBox();

				}				

				// set slider height
				this.setSliderHeight();

			},

			// navigation arrows
			navigationArrows: 	function() {

				// dynamic remove
				$( root ).find( '.' + saveData.classes.navigationWrapPrev ).remove();

				$( root ).find( '.' + saveData.classes.navigationWrapNext ).remove();

				if( saveData.nav && saveData.countElems > 1 ) {

					// create wrap
					$( root ).append( '<nav class="' + saveData.classes.navigationWrapPrev + '"></nav>' );

					$( root ).append( '<nav class="' + saveData.classes.navigationWrapNext + '"></nav>' );

					// create btns
					$( '.' + saveData.classes.navigationWrapPrev ).ready( function() {

						// create prev button
						ENGINEPLUGIN.prevBtn();

					} );

					// create btns
					$( '.' + saveData.classes.navigationWrapNext ).ready( function() {

						// create next button
						ENGINEPLUGIN.nextBtn();

					} );					

					// events
					// prev slide
					this.prevSlideEvent();

					// next slide
					this.nextSlideEvent();

				}

			},

			// create dots
			dotsBox: 			function() {

				// create style wrap
				$( root ).before( '<style id="' + saveData.styleTagId.dots + '"></style>' );

				$( '#' + saveData.styleTagId.dots ).ready( function() {

					// create style

						// active class
						var styleDots = '.' + saveData.classes.dotItemActive + '{';

							styleDots += 'border: 2px solid ' + settings.dotsActiveColor + ' !important;';

						styleDots += '}';

						styleDots += 'button.' + saveData.classes.dotItem + '{';

							styleDots += 'border: 2px solid ' + settings.dotsColor + ';';

						styleDots += '}';					

					$( '#' + saveData.styleTagId.dots ).append( styleDots );

				} );				

				// $( '.' + saveData.classes.dotItemActive ).
				// .css( 'border', '2px solid ' + settings.dotsActiveColor );

				// position of wrap of dots
				var positionDots = saveData.classes.dotsPosition.bottomLeft;

				$.each( saveData.classes.dotsPosition, function( key, value ) {

					if( key === settings.dotsPosition ) {

						positionDots = value;

					}

				} );

				// width of dots wrap
				var widthDotsWrap = saveData.dotsWrapWidth + 'px';

				// check is number
				if( $.isNumeric( settings.dotsWrapWidth ) ) {

					if( settings.dotsWrapWidth === 0 ) {

						widthDotsWrap = '100%';

					} else {

						widthDotsWrap = settings.dotsWrapWidth + 'px';

					}

				}

				// create dots wrap
				$( root ).append( '<nav class="' + saveData.classes.dotsWrap + ' ' + positionDots + '" style="max-width:' + widthDotsWrap + ';"></nav>' );

				// create btns
				$( '.' + saveData.classes.dotsWrap ).ready( function() {

					for( var i = 1; i <= saveData.countElems; i++ ) {

						var activeItem = '';

						if( i === 1 ) {

							activeItem = saveData.classes.dotItemActive;

						}

						$( '.' + saveData.classes.dotsWrap ).append( ENGINEPLUGIN.dotBtn( i, activeItem ) );

					}

				} );

				// events
				this.clickOnDot();

			},

			/*
			* Create skeleton objects
			*/
			// "previous" button
			prevBtn: 			function() {

				$( '.' + saveData.classes.navigationWrapPrev ).append( '<button class="' + saveData.classes.prevBtn + '">Prev</button>' );

			},

			// "next" button
			nextBtn: 			function() {

				$( '.' + saveData.classes.navigationWrapNext ).append( '<button class="' + saveData.classes.nextBtn + '">Next</button>' );
				
			},			

			// create dot
			dotBtn: 			function( number, activeItem ) {

				return '<button class="' + saveData.classes.dotItem + ' ' + activeItem + '">' + number + '</button>';

			},
			
			/***************************
			*
			* INTERACTION WITH THE USER
			*
			***************************/
			// Mouse drag enabled
			mouseDragSlider: 	function() {

				// get bounding client rect
				$( root ).ready( function() {

					ENGINEPLUGIN.initMouseDrag();

				} );

				// add mouseDrag class
				$( root ).find( '.' + saveData.classes.slideItem ).addClass( saveData.classes.mouseDragClass );

				// mouse down
				$( root ).on( 'mousedown', function( e ) {

					// clear the interval and run a new one
					// if autorun is stop
					if( settings.autoplay ) {

						clearInterval( saveData.interval );

					}

					saveData.mouseDragOptions.mouseDragKey = true;

					// save the first position of the cursor
					saveData.mouseDragOptions.startPointX = e[saveData.mouseDragOptions.offsetElement] - saveData.mouseDragOptions.boundingClient[saveData.mouseDragOptions.direction];

					// mouse move
					$( root ).on( 'mousemove', ENGINEPLUGIN.slideMotionDrag );


				} );

				// mouse up
				$( document ).on( 'mouseup', function() {
				
					$( root ).off( 'mousemove', ENGINEPLUGIN.slideMotionDrag );

					saveData.mouseDragOptions.mouseDragKey = false;					

					// save the first position of the cursor
					saveData.mouseDragOptions.startPointX = 0;

					// if autorun is activated
					if( settings.autoplay ) {
						
						clearInterval( saveData.interval );

						ENGINEPLUGIN.autoplay();

					}

				} );

			},

			// click the "Next" button
			nextSlideEvent: 	function() {								

				$( root ).on( 'click', '.' + saveData.classes.nextBtn, function( e ) {

					e.preventDefault();

					// Scroll the slider forward
					ENGINEPLUGIN.scrollForward( ENGINEPLUGIN );					

				} );

			},

			// click the "Previous" button
			prevSlideEvent: 	function() {

				$( root ).on( 'click', '.' + saveData.classes.prevBtn, function( e ) {

					e.preventDefault();

					// Scroll the slider backwards
					ENGINEPLUGIN.scrollBack( ENGINEPLUGIN );									

				} );

			},			

			// click on the dot
			clickOnDot: 	function() {								

				$( root ).on( 'click', '.' + saveData.classes.dotItem, function( e ) {

					e.preventDefault();

					if( !$( this ).hasClass( saveData.classes.dotItemActive ) ) {

						var indexSlide = $( this ).index();

						// find a certain slide
						ENGINEPLUGIN.findSlide( indexSlide );

						// clear the interval and run a new one
						// if autorun is activated
						if( settings.autoplay ) {

							clearInterval( saveData.interval );
							
							ENGINEPLUGIN.autoplay();

						}

					}					

				} )

			},			

			/***************************
			*
			*      HELP FUNCTIONS
			*
			***************************/

				/*
				* Calculate the height of the slider
				*/
				setSliderHeight: 		function() {

					var heightSlider = $( '.' + saveData.classes.slideItem ).first().find( 'img' ).innerHeight();

					var heightWindow = $( window ).innerHeight();

					// check height of the window
					if( heightWindow >= 650 && heightSlider > heightWindow ) {						

						$( root ).css( 'height', heightWindow + 'px' );

					} else {

						$( root ).css( 'height', heightSlider + 'px' );

					}

				},

				/*
				* find the previous slide
				* var slide - the current slide
				* 	use: $( slide )
				*/
				findPrevSlide: 		function( slide ) {

					var indexCurrentElem 	= $( slide ).index();

					var returnElement 		= $( slide ).prev( '.' + saveData.classes.slideItem );				

					if( indexCurrentElem === 0 ) {

						returnElement 		= $( root ).find( '.' + saveData.classes.slideItem ).eq( saveData.countElems - 1 );

					} else{

						returnElement 		= $( slide ).prev( '.' + saveData.classes.slideItem );

					}

					return returnElement;				

				},

				/*
				* find the next slide
				* var slide - the current slide
				* 	use: $( slide )
				*/ 
				findNextSlide: 		function( slide ) {

					var indexCurrentElem 	= $( slide ).index();

					var returnElement 		= $( slide ).next( '.' + saveData.classes.slideItem );

					if( saveData.countElems === indexCurrentElem + 1 ) {

						returnElement 		= $( root ).find( '.' + saveData.classes.slideItem ).eq(0);

					} else{

						returnElement 		= $( slide ).next( '.' + saveData.classes.slideItem );

					}

					// return next slide
					return returnElement;

				},

				/*
				* Treat the event
				*/
				scrollForward: 		function( ENGINEPLUGIN ) {

					// set up animation function
					var optionsAmimateCurrentSlide 	= {};
					var optionsAmimateNextSlide 	= {};

					if( saveData.keySlideMotion === true ) {

						// disable nav
						saveData.keySlideMotion 	= false;						

						// move the current slide
						optionsAmimateCurrentSlide[saveData.direction] = '-100%';

						$( root ).find( '.' + saveData.classes.visibleItem )
						.animate( optionsAmimateCurrentSlide, settings.slideSpeed, function() {

							$( this ).removeClass( saveData.classes.visibleItem );

							$( this ).attr( 'style', '' );

							// enable nav
							saveData.keySlideMotion = true;

						} );
				
						// find next slide and move it
						var nextSlide = ENGINEPLUGIN.findNextSlide( '.' + saveData.classes.visibleItem );

						nextSlide.css( saveData.direction, '50%' );

						nextSlide.addClass( saveData.classes.nextVisibleItem );					

						optionsAmimateNextSlide[saveData.direction] = '0';
						nextSlide.animate( optionsAmimateNextSlide, settings.slideSpeed - 100, function() {

							$( this ).removeClass( saveData.classes.nextVisibleItem )
							.addClass( saveData.classes.visibleItem );

							$( this ).attr( 'style', '' );

							// if dots are enabled
							if( settings.dots ) {

								ENGINEPLUGIN.setActiveDot( nextSlide.index() );

							}

							/*
							* animation banner
							*/
							if( settings.bannerEnable && settings.bannerAnimated ) {

								setTimeout( function() {

									ENGINEPLUGIN.enableBannerAnimated( nextSlide );

								},settings.bannerDelayAnimation );

							}

							/*
							* run product animation
							*/
							if( settings.productSliderEnable && settings.productSliderAnimated ) {


								setTimeout( function() {

									var productSlider = nextSlide.find( '.' + saveData.childSliderClass );

									ENGINEPLUGIN.enableProductsAnimated( productSlider );

								},settings.productDelayAnimation );

							}

						} );

					}

				},

				scrollBack: 		function( ENGINEPLUGIN ) {

					// set up animation function
					var optionsAmimateCurrentSlide 	= {};
					var optionsAmimateNextSlide 	= {};

					if( saveData.keySlideMotion === true ) {						

						// disable nav
						saveData.keySlideMotion 	= false;						

						// move the current slide
						optionsAmimateCurrentSlide[saveData.direction] = '100%';

						$( root ).find( '.' + saveData.classes.visibleItem )
						.animate( optionsAmimateCurrentSlide, settings.slideSpeed, function() {

							$( this ).removeClass( saveData.classes.visibleItem );

							$( this ).attr( 'style', '' );

							// enable nav
							saveData.keySlideMotion = true;

						} );

						// find prev slide and move it
						var prevSlide = ENGINEPLUGIN.findPrevSlide( '.' + saveData.classes.visibleItem );

						prevSlide.css( saveData.direction, '-50%' );

						prevSlide.addClass( saveData.classes.nextVisibleItem );					

						optionsAmimateNextSlide[saveData.direction] = '0';
						prevSlide.animate( optionsAmimateNextSlide, settings.slideSpeed - 100, function() {

							$( this ).removeClass( saveData.classes.nextVisibleItem )
							.addClass( saveData.classes.visibleItem );

							$( this ).attr( 'style', '' );

							// if dots are enabled
							if( settings.dots ) {

								ENGINEPLUGIN.setActiveDot( prevSlide.index() );

							}

							/*
							* animation banner
							*/						
							if( settings.bannerEnable && settings.bannerAnimated ) {			

								setTimeout( function() {

									ENGINEPLUGIN.enableBannerAnimated( prevSlide );

								},settings.bannerDelayAnimation );

							}

							/*
							* run product animation
							*/
							if( settings.productSliderEnable && settings.productSliderAnimated ) {


								setTimeout( function() {

									var productSlider = prevSlide.find( '.' + saveData.childSliderClass );

									ENGINEPLUGIN.enableProductsAnimated( productSlider );
								
								},settings.productDelayAnimation );

							}

						} );

					}

				},

				// autoplay
				autoplay: 			function() {					

					saveData.interval = setInterval( function() {						

						// Verify that the cursor is pointing to the slider on related products
						if( saveData.enableScroll === true ) {

							if( saveData.keySlideMotion === true ) {

								ENGINEPLUGIN.scrollForward( ENGINEPLUGIN );

							}							

						}

					}, settings.slideInterval );					

				},

				// resize window
				resizeWindow: 	function() {				

					$( window ).resize( function() {

						clearTimeout( saveData.setTimeOut );

						clearInterval( saveData.interval );						

						saveData.setTimeOut = setTimeout( function() {

							/*
							* Systems
							*/
							// overwrite variables
							ENGINEPLUGIN.overwriteVariables();

							/*
							* Building
							*/
								// set slider height
								ENGINEPLUGIN.setSliderHeight();

								// navigation
								ENGINEPLUGIN.navigationArrows();

								// direction
								ENGINEPLUGIN.setSliderDirection();

							// autoplay
							ENGINEPLUGIN.autoplay();

						},500 );

					} );

				},

				// overwrite variables depending on the size of the window
				overwriteVariables: 	function() {

					var arrayOptions = [
						'nav',
						'vertical'
					];
				
					if( typeof settings.responsive === 'object' ) {

						if( Object.keys( settings.responsive ).length > 0 ) {

							$.each( settings.responsive, function( _key, _object ) {

								var _key = parseInt( _key );	

								if( $( window ).innerWidth() >= _key ) {						

									// if object has props
									if( Object.keys( _object ).length > 0 ) {

										$.each( _object, function( key, prop ) {

											for( var i = 0; i < arrayOptions.length; i++ ) {
												
												if( _object.hasOwnProperty( arrayOptions[i] ) ) {

													saveData[key] = prop;

												} else {

													saveData[arrayOptions[i]] = settings[arrayOptions[i]];

												}

											}
											
										} );

									// if object has no props
									} else {

										for( var i = 0; i < arrayOptions.length; i++ ) {												
											
											saveData[arrayOptions[i]] = settings[arrayOptions[i]];
											
										}

									}

									// console.log( saveData.nav, saveData.vertical );

								}

							} );

						// if responsive is an empty object
						}  else {

							for( var i = 0; i < arrayOptions.length; i++ ) {												
								
								saveData[arrayOptions[i]] = settings[arrayOptions[i]];
								
							}

						}

					// if responsive not object
					} else {

						for( var i = 0; i < arrayOptions.length; i++ ) {												
							
							saveData[arrayOptions[i]] = settings[arrayOptions[i]];
							
						}

					}

					console.log( saveData.nav, saveData.vertical );

					// console.log( saveData.nav );

				},

				// check mouse enter
				mouseEnterOnElements: 	function() {

					if( settings.autoplay ) {

						$( root ).find( '.' + saveData.childSliderClass )
						.mouseenter( function() {

							saveData.enableScroll = false;

						} )
						.mouseleave( function() {

							clearInterval( saveData.interval );

							saveData.enableScroll = true;

							ENGINEPLUGIN.autoplay();

						} );

					}

				},

				/*
				* Dots settings
				*/
				/*
				* set an active dot
				* var currentSlide - slide index
				*/ 
				setActiveDot: 		function( currentSlide ) {

					$( '.' + saveData.classes.dotItem )
					.removeClass( saveData.classes.dotItemActive )
					.eq( currentSlide )
					.addClass( saveData.classes.dotItemActive );

				},

				// get a certain slide
				findSlide: 			function( index ) {								

					// set up animation function
					var optionsAmimateCurrentSlide 	= {};
					var optionsAmimateNextSlide 	= {};

					if( saveData.keySlideMotion === true ) {

						// disable nav
						saveData.keySlideMotion 	= false;						

						// move the current slide
						optionsAmimateCurrentSlide[saveData.direction] = '-100%';

						$( root ).find( '.' + saveData.classes.visibleItem )
						.animate( optionsAmimateCurrentSlide, settings.slideSpeed, function() {

							$( this ).removeClass( saveData.classes.visibleItem );

							$( this ).attr( 'style', '' );

							// enable nav
							saveData.keySlideMotion = true;

						} );
				
						// find certain slide and move it
						var certainSlide = $( root ).find( '.' + saveData.classes.slideItem ).eq( index );

						certainSlide.css( saveData.direction, '50%' );

						certainSlide.addClass( saveData.classes.nextVisibleItem );					

						optionsAmimateNextSlide[saveData.direction] = '0';
						certainSlide.animate( optionsAmimateNextSlide, settings.slideSpeed - 100, function() {

							$( this ).removeClass( saveData.classes.nextVisibleItem )
							.addClass( saveData.classes.visibleItem );

							$( this ).attr( 'style', '' );
							
							// set the active class to the dot
							ENGINEPLUGIN.setActiveDot( certainSlide.index() );

							/*
							* animation banner
							*/
							if( settings.bannerEnable && settings.bannerAnimated ) {

								setTimeout( function() {

									ENGINEPLUGIN.enableBannerAnimated( certainSlide );

								},settings.bannerDelayAnimation );

							}

							/*
							* run product animation
							*/
							if( settings.productSliderEnable && settings.productSliderAnimated ) {


								setTimeout( function() {

									var productSlider = certainSlide.find( '.' + saveData.childSliderClass );

									ENGINEPLUGIN.enableProductsAnimated( productSlider );
								
								},settings.productDelayAnimation );

							}

						} );

					}

				},

			
			/***************************************************************
			*
			*    TURN ON THE BANNESR
			*
			***************************/
			enableBanners: 	function() {

				$( root ).find( '.' + saveData.bannerItemClass ).bannerProduct( {

					'position'	: settings.bannerPosition,

					'wrapWidth'	: settings.bannerWrapWidth

				} );

			},

			/*
			* Enable animation of banners
			* var element - This is a certain slide
			* 	use: element.find()
			*/
			enableBannerAnimated: function( element ) {

				// set a specific animation for each slide
				if( Array.isArray( settings.eachBannerAnimated ) ) {

					var index = element.index();

					// if index exists
					if( settings.eachBannerAnimated[index] !== undefined ) {

						// set infinite animation
						if( settings.bannerInfiniteAnimation ) {

							$( root ).find( '.' + saveData.bannerItemClass + ' img' )
							.removeClass( settings.eachBannerAnimated[index] );

							$( root ).find( '.' + saveData.bannerItemClass + ' img' )
							.addClass( saveData.classes.displayNone );
					
						}

						element.find( '.' + saveData.bannerItemClass + ' img' )
						.removeClass( saveData.classes.displayNone );
						
						element.find( '.' + saveData.bannerItemClass + ' img' )
						.addClass( settings.eachBannerAnimated[index] );

					// if index does not exist
					} else {

						// set infinite animation
						if( settings.bannerInfiniteAnimation ) {

							$( root ).find( '.' + saveData.bannerItemClass + ' img' )
							.removeClass( settings.bannerAnimated );

							$( root ).find( '.' + saveData.bannerItemClass + ' img' )
							.addClass( saveData.classes.displayNone );
					
						}

						element.find( '.' + saveData.bannerItemClass + ' img' )
						.removeClass( saveData.classes.displayNone );
						
						element.find( '.' + saveData.bannerItemClass + ' img' )
						.addClass( settings.bannerAnimated );							

					}

				} else {

					// set infinite animation
					if( settings.bannerInfiniteAnimation ) {

						$( root ).find( '.' + saveData.bannerItemClass + ' img' )
						.removeClass( settings.bannerAnimated );

						$( root ).find( '.' + saveData.bannerItemClass + ' img' )
						.addClass( saveData.classes.displayNone );
				
					}

					element.find( '.' + saveData.bannerItemClass + ' img' )
					.removeClass( saveData.classes.displayNone );
					
					element.find( '.' + saveData.bannerItemClass + ' img' )
					.addClass( settings.bannerAnimated );

				}	

			},

			initAnimation: function() {

				$( root ).find( '.' + saveData.bannerItemClass + ' img' )
				.addClass( saveData.classes.displayNone + ' animated ' + settings.bannerDurationAnimation );

			},

			/*****************************
			*
			* TURN ON THE CHILDREN SLIDER
			*
			*****************************/
			enableRelatedProductsSlider: 	function() {

				$( root ).find( '.' + saveData.childSliderClass ).childrenProductSlider( {

					'numberVisibleItems': 	settings.productNumberVisible,
					'widthSlider' 		: 	settings.productWidthSlider,
					'position' 			: 	settings.productPositionSlider,
					'slideSpeed'		: 	settings.productSlideSpeed

				} );

				if( settings.productSliderEnable && settings.productSliderAnimated ) {	

					// initialization
					this.initProductsAnimation();

					// animation
					var findFirstSlide = $( root ).find( '.' + saveData.classes.slideItem ).first();

					var firstElement = findFirstSlide.find( '.' + saveData.childSliderClass );

					// run product animation
					setTimeout( function() {

						ENGINEPLUGIN.enableProductsAnimated( firstElement );
					
					},settings.productDelayAnimation );

				}

			},

			/*
			* Enable animation of related products
			* var element - This is a certain slide
			* 	use: element.find()
			*/
			enableProductsAnimated: 		function( element ) {

				var delay = 400;

				var el = 0;

				// set a specific animation for each product slider
				if( Array.isArray( settings.productEachSliderAnimated ) ) {

					var index = element.parent().index();

					// if index exists
					if( settings.productEachSliderAnimated[index] !== undefined ) {

						// set infinite animation
						if( settings.productInfiniteAnimation ){

							$( root ).find( '.' + saveData.childSliderClass + ' img' )
							.removeClass( settings.productEachSliderAnimated[index] );

							$( root ).find( '.' + saveData.childSliderClass + ' img' )
							.addClass( saveData.classes.displayNone );

						}

						element.find( 'img' ).each( function() {

							setTimeout( function() {

								element.find( 'img' ).eq( el ).removeClass( saveData.classes.displayNone );

								element.find( 'img' ).eq( el ).addClass( settings.productEachSliderAnimated[index] );

								el += 1;

							}, delay );

							delay += 400;

						} );


					// if index does not exist
					} else {

						// set infinite animation
						if( settings.productInfiniteAnimation ){

							$( root ).find( '.' + saveData.childSliderClass + ' img' )
							.removeClass( settings.productSliderAnimated );

							$( root ).find( '.' + saveData.childSliderClass + ' img' )
							.addClass( saveData.classes.displayNone );

						}

						element.find( 'img' ).each( function() {

							setTimeout( function() {

								element.find( 'img' ).eq( el ).removeClass( saveData.classes.displayNone );

								element.find( 'img' ).eq( el ).addClass( settings.productSliderAnimated );

								el += 1;

							}, delay );

							delay += 400;

						} );

					}

				} else {

					element.find( 'img' ).each( function() {

						setTimeout( function() {

							element.find( 'img' ).eq( el ).removeClass( saveData.classes.displayNone );

							element.find( 'img' ).eq( el ).addClass( settings.productSliderAnimated );

							el += 1;

						}, delay );

						delay += 400;

					} );

				}

				// animate arrow
				this.animationNavArrow( element );

			},

			// initialization animation
			initProductsAnimation: 			function() {

				$( root ).find( '.' + saveData.childSliderClass + ' img')
				.addClass( saveData.classes.displayNone + ' animated ' + settings.productDurationAnimation );

			},

			// animation for nav arrow
			animationNavArrow: 				function( element ) {

				// set infinite animation
				if( settings.productInfiniteAnimation ){

					$( root ).find( '.mx-next-button-relation-slider' ).addClass( 'mx-opacity-0' );

					$( root ).find( '.mx-prev-button-relation-slider' ).addClass( 'mx-opacity-0' );

				}

				setTimeout( function() {

					element.find( '.mx-next-button-relation-slider' )
					.removeClass( 'mx-opacity-0' )
					.addClass( 'animated fast slideInRight' );

					element.find( '.mx-prev-button-relation-slider' )
					.removeClass( 'mx-opacity-0' )
					.addClass( 'animated fast slideInLeft' );

				}, settings.productDelayAnimation );

			},

			/*
			* Mouse drag
			*/
			// User move the slider with the mouse cursor
			slideMotionDrag: 			function( e ) {

				if( saveData.keySlideMotion === true ) {

					if( saveData.mouseDragOptions.mouseDragKey === true ) {

						var getSizeSlider = 'widthOfSlider';

						if( saveData.mouseDragOptions.direction === 'top' ) {

							getSizeSlider = 'heightOfSlider';

						}

						var currentPosition = e[saveData.mouseDragOptions.offsetElement] - saveData.mouseDragOptions.boundingClient[saveData.mouseDragOptions.direction];

						if( currentPosition > saveData.mouseDragOptions.startPointX ) {

							var percentPosition = ( 100 * ( currentPosition - saveData.mouseDragOptions.startPointX ) ) / saveData[getSizeSlider];

							if( percentPosition > 40 ) {

								// Scroll the slider backwards
								ENGINEPLUGIN.scrollBack( ENGINEPLUGIN );

								percentPosition = 0;

								saveData.mouseDragOptions.startPointX = currentPosition;

							}					

						} else if( currentPosition < saveData.mouseDragOptions.startPointX ) {

							var percentPosition = ( 100 * ( saveData.mouseDragOptions.startPointX - currentPosition ) ) / saveData[getSizeSlider];

							if( percentPosition > 40 ) {

								// Scroll the slider forward
								ENGINEPLUGIN.scrollForward( ENGINEPLUGIN );

								percentPosition = 0;

								saveData.mouseDragOptions.startPointX = currentPosition;						

							}

						} else {
							// ...
						}
					}

				}

			},

			// Get bounding client rect
			initMouseDrag: 		function() {

				// get offset
				saveData.mouseDragOptions.boundingClient = $( root ).offset();

				// get width of slide
				saveData.widthOfSlider = $( root ).innerWidth();

				// get height of slide
				saveData.heightOfSlider = $( '.' + saveData.classes.slideItem ).first().find( 'img' ).innerHeight();

				// set slider direction
				this.setSliderDirection();	

			},

			/*
			* Resize
			*/ 
			setSliderDirection: 		function() {

				if( saveData.vertical ) {

					saveData.direction = 'top';

					saveData.mouseDragOptions.offsetElement = 'clientY';

					saveData.mouseDragOptions.direction 	= 'top';

				} else {

					saveData.direction = 'left';

					saveData.mouseDragOptions.offsetElement = 'clientX';

					saveData.mouseDragOptions.direction 	= 'left';

				}

			}

		};

		

		/***************************
		*
		*        RUN PLUGIN
		*
		***************************/
		ENGINEPLUGIN.init();

	}

} )( jQuery );