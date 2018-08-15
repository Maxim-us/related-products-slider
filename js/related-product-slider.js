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
		'nav'				: true, 	// Set the "Next" and "Previous" arrows
		'autoplay'			: true,		// Scroll slider automatically
		'slideInterval'		: 5000,		// Slider scroll interval
		'slideSpeed'		: 1000,		// Slider scrolling speed
		'vertical'			: false		// Vertical movement

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
				'nextBtn'			: 'mx-navigation-arrow-next'
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

		// console.log( saveData.interval );

		// engine of plugin
		var enginePlugin = {

			/***************************
			* Initialize the slider and check which features will be enabled.
			*/
			// initialize
			init: 			function() {

				// run the skeleton construction
				this.skeletonSlider();

				// create navigation arrows
				if( settings.nav ) {

					// create wrap
					this.navigationArrows();

				}

				// number of slides
				this.countElements();

				// set slider direction
				if( settings.vertical ) {

					saveData.direction = 'top';

				}

				// autoplay
				this.autoplay();

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

				// set slider height
				this.setSliderHeight();

			},

			// navigation arrows
			navigationArrows: 	function() {

				var _this = this;		

				// create wrap
				$( root ).append( '<nav class="' + saveData.classes.navigationWrap + '"></nav>' );				

				// create btns
				$( '.' + saveData.classes.navigationWrap ).ready( function(){

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

			},

			/***************************
			* Interaction with the user.
			*/
			// "previous" button
			prevBtn: 			function() {

				$( '.' + saveData.classes.navigationWrap ).append( '<a href="#" class="' + saveData.classes.prevBtn + '">Prev</a>' );

			},

			// "next" button
			nextBtn: 			function() {

				$( '.' + saveData.classes.navigationWrap ).append( '<a href="#" class="' + saveData.classes.nextBtn + '">Next</a>' );
				
			},			

			// dots buttons
			dotsBtns: 			function() {

			},

			/***************************
			* Targets
			*/
			// get the next slide
			nextSlideEvent: 			function() {

				var _this = this;				

				$( root ).on( 'click', '.' + saveData.classes.nextBtn, function( e ) {

					e.preventDefault();

					// Scroll the slider forward
					_this.scrollForward( _this );

					// clear the interval and run a new one
					clearInterval( saveData.interval );
					_this.autoplay();

				} );

			},

			// get the previous slide
			prevSlideEvent: 			function() {

				var _this = this;				

				$( root ).on( 'click', '.' + saveData.classes.prevBtn, function( e ) {

					e.preventDefault();

					// Scroll the slider backwards
					_this.scrollBack( _this );

					// clear the interval and run a new one
					clearInterval( saveData.interval );
					_this.autoplay();
					

				} );

			},

			// autoplay
			autoplay: 			function() {

				var _this = this;

				saveData.interval = setInterval( function() {

					_this.scrollForward( _this );

				}, settings.slideInterval );

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

					var returnElement 		= $( slide ).prev();				

					if( indexCurrentElem === 0 ) {

						returnElement 		= $( root ).find( '.' + saveData.classes.slideItem ).eq( saveData.countElems - 1 );

					} else{

						returnElement 		= $( slide ).prev();

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

					var returnElement 		= $( slide ).next();

					if( saveData.countElems === indexCurrentElem + 1 ) {

						returnElement 		= $( root ).find( '.' + saveData.classes.slideItem ).eq(0);

					} else{

						returnElement 		= $( slide ).next();

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
						saveData.keySlideMotion = false;						

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

							// enable nav
							saveData.keySlideMotion = true;

						} );

					}

				},

				scrollBack: 		function( _this ) {

					if( saveData.keySlideMotion === true ) {

						// set up animation function
						var optionsAmimateCurrentSlide 	= {};
						var optionsAmimateNextSlide 	= {};

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

							// enable nav
							saveData.keySlideMotion = true;

						} );

					}

				},

				// get a certain slide
				// certainSlide: 	function() {

				// },

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