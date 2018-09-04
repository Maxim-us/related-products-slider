/****************************************************
* ###################################################
* #                                                 #
* #         	     MAIN SLIDER                    #
* M           This plugin is a container            M
* #            of all support programs              #
* #                                                 #
* #             Author: Marko Maksym                X
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
											* 	SET "NEXT" AND "PREVIOUS" ARROWS
											* 	Type: 		Boolean 
											* 	Default: 	true
											*/

		'autoplay'			: true,			/*
											* 	SET AUTOPLAY
											* 	Type: 		Boolean 
											* 	Default: 	true
											*/

		'slideInterval'		: 8000,			/*
											* 	SCROLL SLIDER INTERVAL
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
											*		(Default max-width = 400px)
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

			'bannerPosition' 		: 'topRight', 	/*
													* 	SET THE BANNER POSITION
													* 	Type: 				String 
													* 	Default: 			'topRight'
													*
													* 	Possible options : 	'topLeft'
													*						'topRight'
													*						'topCenter'
													*						'bottomLeft'
													*						'bottomRight'
													*						'bottomCenter'
													*/

			'bannerAnimated'		: 'slideInUp',	/*
													* 	SET THE TYPE OF ANIMATION
													* 	Type: 				String 		| Bollean
													* 	Default: 			'slideInUp' | false
													*	More animation types can be found
													*	on the official site:
													*	https://daneden.github.io/animate.css/
													*/

			'bannerEachAnimated' : [				/*													*/
													/*	SET A SPECIFIC ANIMATION FOR EACH SLIDE 		*/
				/*1 slide has:*/ 'slideInDown',		/*	Type: 				Array 						*/
				/*2 slide has:*/ 'slideInLeft'		/*	Specify a specific animation for each slide.	*/
													/*	The names of the animations are 				*/
			],										/*	comma separated. For example:					*/
													/*	'bannerEachAnimated' : 							*/
													/*	['slideInDown','slideInLeft','slideInRight']	*/			

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
													* 	SET THE WIDTH OF THE WRAPPER TO THE BANNER
													* 	Type: 		Number 
													* 	Default: 	900
													*	Units of measurement - pixels
													*		(Default max-width = 900px)
													*	If 0 is set, the width will be 100%.
													*	In this case, the points will always be centered
													*/

			'bannerWrapHeight'			: 400,		/*
													* 	SET THE HEIGHT OF THE WRAPPER TO THE BANNER
													* 	Type: 		Number 
													* 	Default: 	400
													*	Units of measurement - pixels
													*		(Default max-width = 400px)
													*	If 0 is set, the width will be 100%.
													*	In this case, the points will always be centered
													*/

			'bannerSpaceAround'			: 30,		/*
													*	SET THE SPACE AROUND THE BANNER
													*	Type: 		Number 
													* 	Default: 	30
													*/
													

		/***************************
		* Related products slider 
		*/
			'productSliderEnable'		: true,		/*
													* 	ENABLE SLIDER WITH PRODUCTS
													* 	Type: 				Boolean 
													* 	Default: 			true
													*/

			'productPositionSlider' : 'bottomRight',/*
													* 	SET THE POSITION OF THE SLIDER WITH THE PRODUCTS
													* 	Type: 				String 
													* 	Default: 			'bottomRight'
													*
													* 	Possible options : 	'topLeft'
													*						'topRight'
													*						'topCenter'
													*						'bottomLeft'
													*						'bottomRight'
													*						'bottomCenter'
													*/

			'productSlideSpeed'			: 600, 	/*
													* 	SLIDER SCROLLING SPEED
													* 	Type: 		Number 
													* 	Default: 	600
													*/

			'productNumberVisible'		: 3,		/*
													* 	SET THE NUMBER OF VISIBLE SLIDES
													* 	Type: 		Number
													* 	Default: 	3													*
													*/

			'productSliderAnimated'		: 'slideInUp',/*
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
													/*	'productEachSliderAnimated' : 					*/
													/*	['slideInDown','slideInLeft','slideInRight']	*/

			'productInfiniteAnimation' 	: false,	/*
													* 	SET AN ENDLESS ANIMATION CYCLE
													* 	Type: 				Boolean 
													* 	Default: 			false
													*/

			'productWidthSlider'		: 900,		/*
													* 	SET THE WIDTH OF THE SLIDER
													* 	Type: 		Number 
													* 	Default: 	900
													*	Units of measurement - pixels
													*		(Default max-width = 900px)
													*	If 0 is set, the width will be 100%.
													*/

			'productHeightSlider'		: 290,		/*
													* 	SET SLIDER HEIGHT
													* 	Type: 		Number 
													* 	Default: 	290
													*	Units of measurement - pixels
													*		(Default max-width = 290px)
													*	If 0 is set, the width will be 100%.
													*/

			'responsive'				: {}		/*
													* 	SET CERTAIN STYLES DEPENDING ON SCREEN SIZE
													* 	Type: 		Object 
													* 	Default: 	{}
													*	Note: An object must have at least one property.
													*/

	};

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
			'setTimeOut'			: null,

			// change img array
			'changeImgObj' 			: {},

			// resize window (save width of window)
			'windowWidth'			: 0

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

				// width of window
				this.preventVerticalResize();			

				// overwrite variables
				this.overwriteVariables();

				// get size of window
				this.getSizeWindow();

				// run the skeleton construction
				this.skeletonSlider();

				// number of slides
				this.countElements();

				// set slider direction
				this.setSliderDirection();

				// create navigation arrows
				this.navigationArrows();

				// set dots
				this.dotsBox();

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
				this.bannersBeing();

				/*
				* Related products slider
				*/
				this.relatedProductsSliderBeing();

				// check mouse enter
				this.mouseEnterOnElements();

				// change image
				this.changeImageSmallScreen();

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

				// get src img slides
				this.getSrcImg();

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

				$( root ).find( '.' + saveData.classes.dotsWrap ).remove();

				if( saveData.dots && saveData.countElems > 1 ) {

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

						var activeDotIndex = $( root ).find( '.' + saveData.classes.visibleItem ).index();

						for( var i = 1; i <= saveData.countElems; i++ ) {

							var activeItem = '';

							if( i === activeDotIndex + 1 ) {

								activeItem = saveData.classes.dotItemActive;

							}

							$( '.' + saveData.classes.dotsWrap ).append( ENGINEPLUGIN.dotBtn( i, activeItem ) );

						}

					} );

					// events
					this.clickOnDot();

				}

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
				$( root ).on( 'mousedown touchstart', function( e ) {

					// clear the interval and run a new one
					// if autorun is stop
					if( settings.autoplay ) {

						clearInterval( saveData.interval );

					}

					saveData.mouseDragOptions.mouseDragKey = true;

					// save the first position of the cursor
					if( e.touches === undefined ) {

						saveData.mouseDragOptions.startPointX = e[saveData.mouseDragOptions.offsetElement] - saveData.mouseDragOptions.boundingClient[saveData.mouseDragOptions.direction];

					} else {

						saveData.mouseDragOptions.startPointX = e.touches[0][saveData.mouseDragOptions.offsetElement] - saveData.mouseDragOptions.boundingClient[saveData.mouseDragOptions.direction];

					}

					// mouse move
					$( root ).on( 'mousemove touchmove', ENGINEPLUGIN.slideMotionDrag );

				} );

				// mouse up
				$( document ).on( 'mouseup touchend', function() {

					$( root ).off( 'mousemove touchmove', ENGINEPLUGIN.slideMotionDrag );

					// save the first position of the cursor
					saveData.mouseDragOptions.startPointX = 0;

					// if autorun is activated
					if( settings.autoplay && saveData.countElems > 1 ) {
						
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

				// get image src
				getSrcImg: 			function() {

					// check data attr
					var slides 		= $( root ).find( '.' + saveData.classes.slideItem );

					slides.each( function() {

						var _index 	= $( this ).index();

						var _src 	= $( this ).children( 'img' ).attr( 'src' )

						saveData.changeImgObj[_index] = _src;

					} );

				},

				// get size of window
				getSizeWindow: 		function() {

					// get width of slide
					saveData.widthOfSlider = $( root ).innerWidth();					

					// get height of slide
					saveData.heightOfSlider = $( '.' + saveData.classes.slideItem ).first().find( 'img' ).innerHeight();

				},


				/*
				* Calculate the height of the slider
				*/
				setSliderHeight: 		function() {

					var heightSlider = $( '.' + saveData.classes.slideItem ).first().find( 'img' ).innerHeight();

					saveData.heightOfSlider = heightSlider;
					
					$( root ).css( 'height', heightSlider + 'px' );

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
							if( saveData.bannerEnable && settings.bannerAnimated ) {

								setTimeout( function() {

									ENGINEPLUGIN.enableBannerAnimated( nextSlide );

								},settings.bannerDelayAnimation );

							}

							/*
							* run product animation
							*/
							if( saveData.productSliderEnable && settings.productSliderAnimated ) {

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
							if( saveData.bannerEnable && settings.bannerAnimated ) {

								setTimeout( function() {

									ENGINEPLUGIN.enableBannerAnimated( prevSlide );

								},settings.bannerDelayAnimation );

							}

							/*
							* run product animation
							*/
							if( saveData.productSliderEnable && settings.productSliderAnimated ) {

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

								if( saveData.countElems > 1 ) {

									ENGINEPLUGIN.scrollForward( ENGINEPLUGIN );

								}

							}

						}

					}, settings.slideInterval );

				},

				// resize window
				resizeWindow: 	function() {

					$( window ).resize( function() {						

						// current width of window
						var widthOfWindow = $( window ).innerWidth();

						if( saveData.windowWidth !== widthOfWindow ) {

							// save width of window
							ENGINEPLUGIN.preventVerticalResize();

							// get size of window
							ENGINEPLUGIN.getSizeWindow();

							clearTimeout( saveData.setTimeOut );

							if( settings.autoplay && saveData.countElems > 1 ) {

								clearInterval( saveData.interval );

							}

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

									// set dots
									ENGINEPLUGIN.dotsBox();

									// banners
									ENGINEPLUGIN.bannersBeing();

									// related slider
									ENGINEPLUGIN.relatedProductsSliderBeing();

										// help for relatedProductsSlider
										ENGINEPLUGIN.prouctResizeShow();

								// autoplay
								if( settings.autoplay && saveData.countElems > 1 ) {

									ENGINEPLUGIN.autoplay();

								}

								// change img
								ENGINEPLUGIN.changeImageSmallScreen();

							},1000 );

						}						

					} );

				},

				// prevent vertical resize
				preventVerticalResize: 	function() {

					// get size window
					saveData.windowWidth = $( window ).innerWidth();										

				},

				// overwrite variables depending on the size of the window
				overwriteVariables: 	function() {					

					// available props
					var arrayOptions = [
						'nav',
						'vertical',
						'dots',
						'bannerEnable',
						'bannerPosition',,
						'bannerWrapWidth',
						'bannerWrapHeight',
						'bannerSpaceAround',
						'productSliderEnable',
						'productNumberVisible',
						'productWidthSlider',
						'productHeightSlider',
						'productPositionSlider'
					];
				
					if( typeof settings.responsive === 'object' ) {

						if( Object.keys( settings.responsive ).length > 0 ) {

							$.each( settings.responsive, function( _key, _object ) {

								var _key = parseInt( _key );

								if( $( root ).innerWidth() >= _key ) {

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
							if( saveData.bannerEnable && settings.bannerAnimated ) {

								setTimeout( function() {

									ENGINEPLUGIN.enableBannerAnimated( certainSlide );

								},settings.bannerDelayAnimation );

							}

							/*
							* run product animation
							*/
							if( saveData.productSliderEnable && settings.productSliderAnimated ) {

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

					'position'		: saveData.bannerPosition,

					'wrapWidth'		: saveData.bannerWrapWidth,

					'wrapHeight' 	: saveData.bannerWrapHeight,

					'spaceAround' 	: saveData.bannerSpaceAround

				} );

			},

			// This feature will help the slider when resizing.
			bannersBeing: 		function() {

				if( saveData.bannerEnable ) {

					// destroy banner
					$( root ).find( '.' + saveData.bannerItemClass ).attr( 'class', '' )
					.addClass( saveData.bannerItemClass );

					$( root ).find( '.' + saveData.bannerItemClass + ' img' ).attr( 'class', '' );

					$( root ).find( '.' + saveData.bannerItemClass ).removeAttr( 'style' );

					setTimeout( function() {

						// enable banners
						ENGINEPLUGIN.enableBanners();

						// animation activation
						if( settings.bannerAnimated ) {

							ENGINEPLUGIN.initAnimation();

							setTimeout( function() {

								ENGINEPLUGIN.enableBannerAnimated( $( '.' + saveData.classes.visibleItem ) );

							},settings.bannerDelayAnimation );

						}

					},500 );
					

				} else {

					$( root ).find( '.' + saveData.bannerItemClass ).addClass( saveData.classes.displayNone );

				}

			},

			/*
			* Enable animation of banners
			* var element - This is a certain slide
			* 	use: element.find()
			*/
			enableBannerAnimated: function( element ) {

				// set a specific animation for each slide
				if( Array.isArray( settings.bannerEachAnimated ) ) {

					var index = element.index();

					// if index exists
					if( settings.bannerEachAnimated[index] !== undefined ) {

						// set infinite animation
						if( settings.bannerInfiniteAnimation ) {

							$( root ).find( '.' + saveData.bannerItemClass + ' img' )
							.removeClass( settings.bannerEachAnimated[index] );

							$( root ).find( '.' + saveData.bannerItemClass + ' img' )
							.addClass( saveData.classes.displayNone );
					
						}

						element.find( '.' + saveData.bannerItemClass + ' img' )
						.removeClass( saveData.classes.displayNone );
						
						element.find( '.' + saveData.bannerItemClass + ' img' )
						.addClass( settings.bannerEachAnimated[index] );

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

					'numberVisibleItems': 	saveData.productNumberVisible,
					'widthSlider' 		: 	saveData.productWidthSlider,
					'heightSlider' 		: 	saveData.productHeightSlider,
					'position' 			: 	saveData.productPositionSlider,
					'slideSpeed'		: 	settings.productSlideSpeed

				} );

				if( saveData.productSliderEnable && settings.productSliderAnimated ) {

					// initialization
					this.initProductsAnimation();

					// animation
					var findFirstSlide = $( root ).find( '.' + saveData.classes.slideItem ).first();

					var firstElement = findFirstSlide.find( '.' + saveData.childSliderClass );

					// run product animation
					setTimeout( function() {

						ENGINEPLUGIN.enableProductsAnimated( firstElement );
					
					},settings.productDelayAnimation );

				} else {

					$( '.' + saveData.childSliderClass ).find( 'nav' ).removeClass( 'mx-opacity-0' );

				}

			},

			// This feature will help the slider when resizing.
			relatedProductsSliderBeing: 	function() {

				if( saveData.productSliderEnable ) {

					// destroy slider
					// class
					$( root ).find( '.' + saveData.childSliderClass )
					.attr( 'class', '' )
					.addClass( saveData.childSliderClass );

					// style attr
					$( root ).find( '.' + saveData.childSliderClass )
					.removeAttr( 'style' );

					// navigation
					$( root ).find( '.' + saveData.childSliderClass + ' nav' ).remove();

					// style attr for li tag
					$( root ).find( '.' + saveData.childSliderClass + ' li').removeAttr( 'style' );

					// class attr for li tag
					$( root ).find( '.' + saveData.childSliderClass + ' li').removeAttr( 'class' );

					// clear wrapper
					$( root ).find( '.mx-related-product-wrap-box' ).removeAttr( 'style' );

					// clear images
					$( root ).find( '.' + saveData.childSliderClass + ' img' ).removeAttr( 'class' );

					// create slider
					setTimeout( function() {

						ENGINEPLUGIN.enableRelatedProductsSlider();

					},500 );

				} else {

					$( root ).find( '.' + saveData.childSliderClass ).addClass( saveData.classes.displayNone );
					
				}

			},

			// this function helps to display the corresponding product slider on the screen when resizing
			prouctResizeShow: 				function() {

				setTimeout( function() {

					$( '.' + saveData.classes.visibleItem )
					.find( '.' + saveData.childSliderClass + ' nav' )
					.removeClass( 'mx-opacity-0' );

					$( '.' + saveData.classes.visibleItem )
					.find( '.' + saveData.childSliderClass + ' img' )
					.removeAttr( 'class' );

					$( '.' + saveData.classes.visibleItem )
					.find( '.' + saveData.childSliderClass + ' img' )
					.parent().find( 'span' )
					.removeClass( saveData.classes.displayNone );

				}, settings.productDelayAnimation + 2000 );

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
						if( settings.productInfiniteAnimation ) {

							$( root ).find( '.' + saveData.childSliderClass + ' img' )
							.removeClass( settings.productEachSliderAnimated[index] );

							$( root ).find( '.' + saveData.childSliderClass + ' img' )
							.addClass( saveData.classes.displayNone );

							// price
							$( root ).find( '.' + saveData.childSliderClass + ' img' ).parent()
							.find( 'span' ).removeClass( settings.productEachSliderAnimated[index] );

							$( root ).find( '.' + saveData.childSliderClass + ' img' ).parent()
							.find( 'span' ).addClass( saveData.classes.displayNone );

						}

						element.find( 'img' ).each( function() {

							setTimeout( function() {

								element.find( 'img' ).eq( el ).removeClass( saveData.classes.displayNone );

								element.find( 'img' ).eq( el ).addClass( settings.productEachSliderAnimated[index] );

								// price
								element.find( 'img' ).eq( el ).parent()
								.find( 'span' ).removeClass( saveData.classes.displayNone );

								element.find( 'img' ).eq( el ).parent()
								.find( 'span' ).addClass( settings.productEachSliderAnimated[index] );

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

							// price
							$( root ).find( '.' + saveData.childSliderClass + ' img' ).parent()
							.find( 'span' ).removeClass( settings.productSliderAnimated );

							$( root ).find( '.' + saveData.childSliderClass + ' img' ).parent()
							.find( 'span' ).addClass( saveData.classes.displayNone );

						}

						element.find( 'img' ).each( function() {

							setTimeout( function() {

								element.find( 'img' ).eq( el ).removeClass( saveData.classes.displayNone );

								element.find( 'img' ).eq( el ).addClass( settings.productSliderAnimated );

								// price
								element.find( 'img' ).eq( el ).parent()
								.find( 'span' ).removeClass( saveData.classes.displayNone );

								element.find( 'img' ).eq( el ).parent()
								.find( 'span' ).addClass( settings.productSliderAnimated );

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

							// price
							element.find( 'img' ).eq( el ).parent()
							.find( 'span' ).removeClass( saveData.classes.displayNone );

							element.find( 'img' ).eq( el ).parent()
							.find( 'span' ).addClass( settings.productSliderAnimated );

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

				$( root ).find( '.' + saveData.childSliderClass + ' img' ).parent()
				.find( 'span' ).addClass( saveData.classes.displayNone + ' animated ' + settings.productDurationAnimation );

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

				if( saveData.keySlideMotion === true && saveData.countElems > 1 ) {

					if( saveData.mouseDragOptions.mouseDragKey === true ) {

						var getSizeSlider = 'widthOfSlider';

						if( saveData.mouseDragOptions.direction === 'top' ) {

							getSizeSlider = 'heightOfSlider';

						}

						// custom position
						var currentPosition = e[saveData.mouseDragOptions.offsetElement] - saveData.mouseDragOptions.boundingClient[saveData.mouseDragOptions.direction];

						if( e.touches !== undefined ) {

							currentPosition = e.touches[0][saveData.mouseDragOptions.offsetElement] - saveData.mouseDragOptions.boundingClient[saveData.mouseDragOptions.direction];

						}						

						if( currentPosition > saveData.mouseDragOptions.startPointX ) {

							var percentPosition = ( 100 * ( currentPosition - saveData.mouseDragOptions.startPointX ) ) / saveData[getSizeSlider];

							if( percentPosition > 40 ) {

								// Scroll the slider backwards
								ENGINEPLUGIN.scrollBack( ENGINEPLUGIN );

								percentPosition = 0;

								saveData.mouseDragOptions.startPointX = currentPosition;

								saveData.mouseDragOptions.mouseDragKey = false;

							}

						} else if( currentPosition < saveData.mouseDragOptions.startPointX ) {

							var percentPosition = ( 100 * ( saveData.mouseDragOptions.startPointX - currentPosition ) ) / saveData[getSizeSlider];

							if( percentPosition > 40 ) {

								// Scroll the slider forward
								ENGINEPLUGIN.scrollForward( ENGINEPLUGIN );

								percentPosition = 0;

								saveData.mouseDragOptions.startPointX = currentPosition;

								saveData.mouseDragOptions.mouseDragKey = false;

							}

						} else {
							// ...
						}
					}

				}

				// if autorun is activated
				if( settings.autoplay && saveData.countElems > 1 ) {
					
					clearInterval( saveData.interval );

				}

			},

			// Get bounding client rect
			initMouseDrag: 		function() {

				// get offset
				saveData.mouseDragOptions.boundingClient = $( root ).offset();
				
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

			},

			/*
			*	Change img for small screen
			*/
			changeImageSmallScreen: 	function() {

				// check data attr
				var slides = $( root ).find( '.' + saveData.classes.slideItem );

				// you need to change the image
				var needToChange = $( root ).attr( 'data-new-image' );

				if( needToChange === 'true' ) {

					// each slides
					slides.each( function() {
							
						// run function
						ENGINEPLUGIN.changeImage( $( this ) );

						// set height
						setTimeout( function() {

							// set slider height
							ENGINEPLUGIN.setSliderHeight();	

						}, 500 );

					} );

				}

			},

			changeImage: 		function( _this  ) {

				var _index 		= _this.index();

				var screenSize 	= _this.parent().attr( 'data-max-width' );

				var newSrc 		= _this.children( 'img' ).attr( 'data-image-src' );

				if( newSrc === undefined || newSrc === '' ) {

					newSrc 		= _this.children( 'img' ).attr( 'src' );

				}

				screenSize 		= parseInt( screenSize );

				if( isNaN( screenSize ) ) {

					screenSize = 768;

				}

				if( $( root ).innerWidth() <= screenSize ) {

					_this.children( 'img' ).attr( 'src', newSrc );

				} else {

					_this.children( 'img' ).attr( 'src', saveData.changeImgObj[_index] );

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