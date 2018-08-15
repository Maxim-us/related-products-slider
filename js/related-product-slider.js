/****************************************************
* ###################################################
* #                                                 #
* #                                                 #
* M                                                 M
* #               Main Product Slider               #
* #                                                 #
* X                                                 X
* #                                                 #
* #                                                 #
* ###################################################
*/
;( function( $ ) {

	/***************************
	* Default configuration of the slider.
	*/
	$.defaultConfig = {

		'nav'				: true, 	/*
										* 	Set the "Next" and "Previous" arrows
										* 	Type: 		Boolean 
										* 	Default: 	true
										*/

		'autoplay'			: true,		/*
										* 	Scroll slider automatically
										* 	Type: 		Boolean 
										* 	Default: 	true
										*/

		'slideInterval'		: 5000,		/*
										* 	Slider scroll interval
										* 	Type: 		Number 
										* 	Default: 	5000
										*/ 

		'slideSpeed'		: 1000,		/*
										* 	Slider scrolling speed
										* 	Type: 		Number 
										* 	Default: 	1000
										*/

		'vertical'			: false,	/*
										* 	Vertical movement
										* 	Type: 		Boolean 
										* 	Default: 	false
										*/

		'dots'				: true		/*
										* 	Set the dots
										* 	Type: 		Boolean 
										* 	Default: 	true
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
				'overflowHide'	: 'mx-overflow-hidden',

				// navigation
				'navigationWrap' 	: 'mx-navigation-arrows',
				'prevBtn'			: 'mx-navigation-arrow-prev',
				'nextBtn'			: 'mx-navigation-arrow-next',

				// dots
				'dotsWrap'			: 'mx-dots-wrap',
				'dotItem'			: 'mx-dot-item',
				'dotItemActive'		: 'mx-dot-item-active'
			},

			// number of slides
			'countElems'			: 0,

			// Check whether the slide moves
			'keySlideMotion'		: true,

			// set up vertical scroll slider
			'direction'			: 'left',

			// interval movement
			'interval'			: null
		};

		// console.log( saveData.classes.slideItem );

		// engine of plugin
		var enginePlugin = {

			/***************************
			* Initialize the slider and check which features will be enabled.
			*/
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
				if( settings.autoplay ) {

					this.autoplay();

				}				

			},

			// get the number of items
			countElements: 		function() {

				saveData.countElems = $( root ).find( '.' + saveData.classes.slideItem ).length;

			},

			/***************************
			* Build the slider skeleton
			*/
			skeletonSlider: 	function() {

				// add classes
				$( root ).addClass( saveData.classes.mainClass ).children( 'div' ).addClass( saveData.classes.slideItem );
				
				// set the visible slide
				$( root ).children( 'div' ).first().addClass( saveData.classes.visibleItem );

				// create navigation arrows
				if( settings.nav ) {

					// create wrap
					this.navigationArrows();

				}

				// set dots
				if( settings.dots ) {

					this.dotsBox();

				}

				// set slider height
				this.setSliderHeight();

			},

			// navigation arrows
			navigationArrows: 	function() {

				var _this = this;		

				// create wrap
				$( root ).append( '<nav class="' + saveData.classes.navigationWrap + '"></nav>' );

				// create btns
				$( '.' + saveData.classes.navigationWrap ).ready( function() {

					// create prev button
					_this.prevBtn();

					// create next button
					_this.nextBtn();

				} );

				// events
				// prev slide
				this.prevSlideEvent();

				// next slide
				this.nextSlideEvent();

			},

			// create dots
			dotsBox: 			function() {

				var _this = this;

				// create dots wrap
				$( root ).append( '<nav class="' + saveData.classes.dotsWrap + '"></nav>' );

				// create btns
				$( '.' + saveData.classes.dotsWrap ).ready( function() {

					for( var i = 1; i <= saveData.countElems; i++ ) {

						var activeItem = '';

						if( i === 1 ) {

							activeItem = saveData.classes.dotItemActive;

						}

						$( '.' + saveData.classes.dotsWrap ).append( _this.dotBtn( i, activeItem ) );

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

				$( '.' + saveData.classes.navigationWrap ).append( '<a href="#" class="' + saveData.classes.prevBtn + '">Prev</a>' );

			},

			// "next" button
			nextBtn: 			function() {

				$( '.' + saveData.classes.navigationWrap ).append( '<a href="#" class="' + saveData.classes.nextBtn + '">Next</a>' );
				
			},			

			// create dot
			dotBtn: 			function( number, activeItem ) {

				return '<a href="#" class="' + saveData.classes.dotItem + ' ' + activeItem + '">' + number + '</a>';

			},

			/***************************
			* Interaction with the user.
			*/
			// click the "Next" button
			nextSlideEvent: 	function() {

				var _this = this;				

				$( root ).on( 'click', '.' + saveData.classes.nextBtn, function( e ) {

					e.preventDefault();

					// Scroll the slider forward
					_this.scrollForward( _this );

					// clear the interval and run a new one
					// if autorun is activated
					if( settings.autoplay ) {

						clearInterval( saveData.interval );

						_this.autoplay();

					}

				} );

			},

			// click the "Previous" button
			prevSlideEvent: 	function() {

				var _this = this;				

				$( root ).on( 'click', '.' + saveData.classes.prevBtn, function( e ) {

					e.preventDefault();

					// Scroll the slider backwards
					_this.scrollBack( _this );

					// clear the interval and run a new one
					// if autorun is activated
					if( settings.autoplay ) {

						clearInterval( saveData.interval );
						
						_this.autoplay();

					}					

				} );

			},			

			// click on the dot
			clickOnDot: 	function() {

				var _this = this;				

				$( root ).on( 'click', '.' + saveData.classes.dotItem, function( e ) {

					e.preventDefault();

					if( !$( this ).hasClass( saveData.classes.dotItemActive ) ) {

						var indexSlide = $( this ).index();

						// find a certain slide
						_this.findSlide( indexSlide );

						// clear the interval and run a new one
						// if autorun is activated
						if( settings.autoplay ) {

							clearInterval( saveData.interval );
							
							_this.autoplay();

						}

					}					

				} )

			},

			/***************************
			****************************
			*	Help functions
			*/				

				/*
				* Calculate the height of the slider
				*/
				setSliderHeight: 		function() {

					var heightSlider = $( '.' + saveData.classes.slideItem ).first().find( 'img' ).innerHeight();

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
				scrollForward: 		function( _this ) {

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

						} );
				
						// find next slide and move it
						var nextSlide = _this.findNextSlide( '.' + saveData.classes.visibleItem );

						nextSlide.css( saveData.direction, '50%' );

						nextSlide.addClass( saveData.classes.nextVisibleItem );					

						optionsAmimateNextSlide[saveData.direction] = '0';
						nextSlide.animate( optionsAmimateNextSlide, settings.slideSpeed - 100, function() {

							$( this ).removeClass( saveData.classes.nextVisibleItem )
							.addClass( saveData.classes.visibleItem );

							$( this ).attr( 'style', '' );

							// if dots are enabled
							if( settings.dots ) {

								_this.setActiveDot( nextSlide.index() );

							}

							// enable nav
							saveData.keySlideMotion = true;

						} );

					}

				},

				scrollBack: 		function( _this ) {

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

						} );

						// find prev slide and move it
						var prevSlide = _this.findPrevSlide( '.' + saveData.classes.visibleItem );

						prevSlide.css( saveData.direction, '-50%' );

						prevSlide.addClass( saveData.classes.nextVisibleItem );					

						optionsAmimateNextSlide[saveData.direction] = '0';
						prevSlide.animate( optionsAmimateNextSlide, settings.slideSpeed - 100, function() {

							$( this ).removeClass( saveData.classes.nextVisibleItem )
							.addClass( saveData.classes.visibleItem );

							$( this ).attr( 'style', '' );

							// if dots are enabled
							if( settings.dots ) {

								_this.setActiveDot( prevSlide.index() );

							}

							// enable nav
							saveData.keySlideMotion = true;

						} );

					}

				},

				// autoplay
				autoplay: 			function() {

					var _this = this;

					saveData.interval = setInterval( function() {

						_this.scrollForward( _this );

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

					var _this = this;			

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
							_this.setActiveDot( certainSlide.index() );

							// enable nav
							saveData.keySlideMotion = true;

						} );

					}

				},

				/***************************
				* Turn on the children slider
				*/
				// childrenSlider: 	function( box ) {

				// 	box.childrenProductSlider();

				// }


		}

		/***************************
		* Run Plugin
		*/
		enginePlugin.init();

	}

} )( jQuery );

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