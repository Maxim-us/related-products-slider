
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
											*						'topCenter'
											*						'bottomLeft'
											*						'bottomRight'
											*						'bottomCenter'
											*/

			'wrapWidth' 	: 900,			/*
											* 	SET THE WIDTH OF THE WRAPPER DOTS
											* 	Type: 		Number 
											* 	Default: 	900
											*	Units of measurement - pixels
											*		(Default max-width = 900px)
											*	If 0 is set, the width will be 100%.
											*	In this case, the points will always be centered
											*/

			'wrapHeight' 	: 400,			/*
											* 	SET THE WIDTH OF THE WRAPPER DOTS
											* 	Type: 		Number 
											* 	Default: 	400
											*	Units of measurement - pixels
											*		(Default max-width = 400px)
											*	If 0 is set, the width will be 100%.
											*	In this case, the points will always be centered
											*/

			'spaceAround'	: 30			/*
											*	SET THE SPACE AROUND THE BANNER
											*	Type: 		Number 
											* 	Default: 	30
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
				'topCenter'		: 'mx-banner-top-center',
				'bottomLeft'	: 'mx-banner-bottom-left',
				'bottomRight' 	: 'mx-banner-bottom-right',
				'bottomCenter'	: 'mx-banner-bottom-center'

			},

			// set the width of the banner wrap
			'wrapWidth'			: 900,

			// set the height of the banner wrap
			'wrapHeight' 		: 400,

			// Set the space around the banner
			'spaceAround'		: 30

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

				// set height of banner wrap
				this.setHeightBannerWrap();

				// set space around
				this.setSpaceAround();

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

				// centering
				if( settings.position === 'topCenter' || settings.position === 'bottomCenter' ) {					

					var _marginLeft = settings.wrapWidth / 2;

					if( settings.wrapWidth === 0 ) {

						_marginLeft = $( root ).innerWidth() / 2;

					}
					
					$( root ).css( 'margin-left', '-' + _marginLeft + 'px' );

				}

			},

			// set width
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
			
			// set width
			setHeightBannerWrap: 		function() {

				// width of banner wrap
				var wrapHeight 				= saveData.wrapHeight + 'px';

				// check is number
				if( $.isNumeric( settings.wrapHeight ) ) {

					if( settings.wrapHeight === 0 ) {

						wrapHeight 				= '100%';

						// save data
						saveData.wrapHeight 	= '100%';

					} else {

						wrapHeight 				= settings.wrapHeight + 'px';

						// save data
						saveData.wrapHeight 	= settings.wrapHeight

					}

				}

				// add style
				$( root ).css( 'max-height', wrapHeight );

			},

			// set space
			setSpaceAround: 		function() {

				var spaceAround 	= saveData.spaceAround + 'px';

				// check is number
				if( $.isNumeric( settings.spaceAround ) ) {

					spaceAround 	= settings.spaceAround + 'px';

				}

				$( root ).css( 'padding', spaceAround );

			}

		}

		// run
		BANNERMAIN.init();

	}

} )( jQuery );