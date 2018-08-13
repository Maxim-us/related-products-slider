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
		'nav'				: true,
		'autoplay'			: true,
		'slideInterval'		: 2000,
		'slideSpeed'		: 1000

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
			'classes': {
				// general
				'mainClass'			: 'mx-related-products-slider',
				'slideItem'			: 'mx-slide-item',

				// visible item
				'visibleItem' 		: 'mx-visible-slide',
				'nextVisibleItem'	: 'mx-visible-next-slide',

				// navigation
				'navigationWrap' 	: 'mx-navigation-arrows',
				'prevBtn'			: 'mx-navigation-arrow-prev',
				'nextBtn'			: 'mx-navigation-arrow-next'
			}
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

				// create navigation arrows
				if( settings.nav ) {

					// create wrap
					this.navigationArrows();

				}


				// console.log( settings.nav );

			},

			// loop
			movementInLoop: function() {

			},

			/***************************
			* Build the slider skeleton
			*/
			skeletonSlider: 	function() {

				// add classes
				$( root ).addClass( saveData.classes.mainClass ).children( 'div' ).addClass( saveData.classes.slideItem );
				
				// set the visible slide
				$( root ).children( 'div' ).first().addClass( saveData.classes.visibleItem );

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
				this.prevSlide();

				// next slide
				this.nextSlide();

			},

			/***************************
			* Interaction with the user.
			*/
			// click the "previous" button
			prevBtn: 			function() {

				$( '.' + saveData.classes.navigationWrap ).append( '<a href="#" class="' + saveData.classes.prevBtn + '">Prev</a>' );

			},

			// click the "next" button
			nextBtn: 			function() {

				$( '.' + saveData.classes.navigationWrap ).append( '<a href="#" class="' + saveData.classes.nextBtn + '">Next</a>' );
				
			},			

			// click on the dots
			dotsBtn: 			function() {

			},

			/***************************
			* Triggers
			*/
			// get the next slide
			nextSlide: 		function() {

				var _this = this;

				$( root ).on( 'click', '.' + saveData.classes.nextBtn, function( e ) {					

					e.preventDefault();

					// move the current slide
					$( root ).find( '.' + saveData.classes.visibleItem )
					.animate( {'left': '-100%'}, settings.slideSpeed, function() {

						$( this ).removeClass( saveData.classes.visibleItem );

						$( this ).attr( 'style', '' );

					} );
			
					// find next slide and move it
					var nextSlide = _this.findNextSlide( '.' + saveData.classes.visibleItem );

					console.log( nextSlide );

					nextSlide.css( 'left', '50%' );

					nextSlide.addClass( saveData.classes.nextVisibleItem );					

					nextSlide.animate( {'left': '0'}, settings.slideSpeed, function() {

						$( this ).removeClass( saveData.classes.nextVisibleItem )
						.addClass( saveData.classes.visibleItem );

						$( this ).attr( 'style', '' );

					} );

				} );

			},

			// get the previous slide
			prevSlide: 		function() {

				$( root ).on( 'click', '.' + saveData.classes.prevBtn, function( e ) {

					e.preventDefault();
					console.log( 'prevBtn' );

				} );

			},

			/*
			* find the previous slide
			* var slide - the current slide
			* 	use: $( slide )
			*/ 
			findNextSlide: 	function( slide ) {

				var countElems 			= $( root ).find( '.' + saveData.classes.slideItem ).length;

				var indexCurrentElem 	= $( slide ).index();

				var returnElement 		= $( slide ).next();

				if( countElems === indexCurrentElem + 1 ) {

					returnElement = $( root ).find( '.' + saveData.classes.slideItem ).eq(0);

				} else{

					returnElement = $( slide ).next();

				}

				console.log( returnElement );

				// console.log( indexCurrentElem );


				// return next slide
				return returnElement;

			},

			// get a certain slide
			// certainSlide: 		function() {

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
