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

		'dots'				: true,			/*
											* 	SET THE DOTS
											* 	Type: 		Boolean 
											* 	Default: 	true
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
													* 	Type: 				String 
													* 	Default: 			'slideInUp'
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

			'bannerInfiniteAnimation' 	: true		/*
													* 	SET AN ENDLESS ANIMATION CYCLE
													* 	Type: 				Boolean 
													* 	Default: 			false
													*/			

	};

	// settings.bannerAnimated

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
			'bannerItemClass' 		: 'mx-slide-banner'
		};

		// console.log( saveData.classes.dotsPosition.bottomLeft );

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

				// run the skeleton construction
				this.skeletonSlider();

				// number of slides
				this.countElements();			

				// set slider direction
				if( settings.vertical ) {

					saveData.direction = 'top';

				}

				// set autoplay
				if( settings.autoplay && saveData.countElems > 1 ) {

					this.autoplay();

				}

				// resize function
				this.resizeWindow();

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

							ENGINEPLUGIN.enableAnimated( $( '.' + saveData.classes.visibleItem ) );

						},settings.bannerDelayAnimation );

					}

				}

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
				var countElems = $( root ).find( '.' + saveData.classes.slideItem ).length;

				// create navigation arrows
				if( settings.nav && countElems > 1 ) {

					// create wrap
					this.navigationArrows();

				}

				// set dots
				if( settings.dots && countElems > 1 ) {

					this.dotsBox();

				}				

				// set slider height
				this.setSliderHeight();

			},

			// navigation arrows
			navigationArrows: 	function() {

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

			},

			// create dots
			dotsBox: 			function() {

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
			// click the "Next" button
			nextSlideEvent: 	function() {								

				$( root ).on( 'click', '.' + saveData.classes.nextBtn, function( e ) {

					e.preventDefault();

					// Scroll the slider forward
					ENGINEPLUGIN.scrollForward( ENGINEPLUGIN );

					// clear the interval and run a new one
					// if autorun is activated
					if( settings.autoplay ) {

						clearInterval( saveData.interval );

						ENGINEPLUGIN.autoplay();

					}

				} );

			},

			// click the "Previous" button
			prevSlideEvent: 	function() {

								

				$( root ).on( 'click', '.' + saveData.classes.prevBtn, function( e ) {

					e.preventDefault();

					// Scroll the slider backwards
					ENGINEPLUGIN.scrollBack( ENGINEPLUGIN );

					// clear the interval and run a new one
					// if autorun is activated
					if( settings.autoplay ) {

						clearInterval( saveData.interval );
						
						ENGINEPLUGIN.autoplay();

					}					

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

			resizeWindow: 	function() {				

				$( window ).resize( function() {

					// set slider height
					ENGINEPLUGIN.setSliderHeight();

				} );

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

							// animation banner							
							if( settings.bannerEnable && settings.bannerAnimated ) {

								setTimeout( function() {

									ENGINEPLUGIN.enableAnimated( nextSlide );

								},settings.bannerDelayAnimation );

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

							// animation banner							
							if( settings.bannerEnable && settings.bannerAnimated ) {			

								setTimeout( function() {

									ENGINEPLUGIN.enableAnimated( prevSlide );

								},settings.bannerDelayAnimation );

							}

						} );

					}

				},

				// autoplay
				autoplay: 			function() {					

					saveData.interval = setInterval( function() {

						ENGINEPLUGIN.scrollForward( ENGINEPLUGIN );

					}, settings.slideInterval );

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

							// animation banner
							if( settings.bannerEnable && settings.bannerAnimated ) {

								setTimeout( function() {

									ENGINEPLUGIN.enableAnimated( certainSlide );

								},settings.bannerDelayAnimation );

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

					'position': settings.bannerPosition

				} );

			},

			/*
			* Enable animation of banners
			* var element - This is a certain slide
			* 	use: element.find()
			*/
			enableAnimated: function( element ) {

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

			}

			/*****************************
			*
			* TURN ON THE CHILDREN SLIDER
			*
			*****************************/
			// childrenSlider: 	function() {

			// 	// ...

			// },

		}

		/***************************
		*
		*        RUN PLUGIN
		*
		***************************/
		ENGINEPLUGIN.init();

	}

} )( jQuery );