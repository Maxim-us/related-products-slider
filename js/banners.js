
/****************************************************
* ###################################################
* #                                                 #
* #                                                 #
* M                                                 M
* #               PLUGIN FOR BANNERS                #  
* #                                                 #
* X                                                 X
* #                                                 #
* #                                                 #
* ###################################################
*/
;( function( $ ) {

	$.fn.bannerProduct = function( options ) {

		$.defaultConfigBanner = {
			'position' 		: 'topRight',	/*
											* 	SET THE BANNER POSITION
											* 	Type: 				String 
											* 	Default: 			'topRight'
											*
											* 	Possible options : 	'topLeft'
											*						'topRight'
											*						'bottomLeft'
											*						'bottomRight'
											*/

			'wrapWidth' 	: 900,			/*
											* 	SET THE WIDTH OF THE WRAPPER DOTS
											* 	Type: 		Number 
											* 	Default: 	900
											*	Units of measurement - pixels
											*		(Default width = 900px)
											*	If 0 is set, the width will be 100%.
											*	In this case, the points will always be centered
											*/
			
		};

		var settings = $.extend( {}, $.defaultConfigBanner, options );

		// each element
		return this.each( function() {

			// run function
			MxBannerProduct( this, settings );

		}  );

	}

	function MxBannerProduct( root, settings ){

		// save the data object
		var saveData = {

			// list of classes used in a banners
			'classes': {

				// position slasses
				'topLeft' 		: 'mx-banner-top-left',
				'topRight' 		: 'mx-banner-top-right',
				'bottomLeft'	: 'mx-banner-bottom-left',
				'bottomRight' 	: 'mx-banner-bottom-right'

			},

			// set the width of the banner wrap
			'wrapWidth'			: 900

		};

		// saveData.classes.top-right

		/*****************************
		*
		*  == BANNER MAIN FUNCTION ==
		*
		*****************************/
		var BANNERMAIN = {

			// initialization
			init: 			function() {

				// set position of banner
				this.setPosotion();

				// set width of banner wrap
				this.setWidthBannerWrap();

			},

			/***************************
			*
			* BUILD THE BANNER SKELETON
			*
			***************************/
			// set position of banner 
			setPosotion: 	function() {

				var bannerClass = saveData.classes.topRight;
				
				$.each( saveData.classes, function( key, value ) {

					if( key === settings.position ) {

						bannerClass = value;

					}

				} )

				$( root ).addClass( bannerClass );

			},

			setWidthBannerWrap: 		function() {

				// width of banner wrap
				var wrapWidth 				= saveData.wrapWidth + 'px';

				// check is number
				if( $.isNumeric( settings.wrapWidth ) ) {

					if( settings.wrapWidth === 0 ) {

						wrapWidth 			= '100%';

						// save data
						saveData.wrapWidth 	= '100%';

					} else {

						wrapWidth 			= settings.wrapWidth + 'px';

						// save data
						saveData.wrapWidth 	= settings.wrapWidth

					}

				}

				// add style
				$( root ).css( 'max-width', wrapWidth );

			},

		}

		// run
		BANNERMAIN.init();

	}

} )( jQuery );