
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
			'position' 		: 'topRight'		/*
												* 	Set the banner position
												* 	Type: 				String 
												* 	Default: 			'topRight'
												*
												* 	Possible options : 	'topLeft'
												*						'topRight'
												*						'bottomLeft'
												*						'bottomRight'
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

			}

		};

		// saveData.classes.top-right

		/*****************************
		*
		*  == BANNER MAIN FUNCTION ==
		*
		*****************************/
		var bannerMain = {

			// initialization
			init: 			function() {

				// set position of banner
				this.setPosotion();				

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

			}			

		}

		// run
		bannerMain.init();

	}

} )( jQuery );