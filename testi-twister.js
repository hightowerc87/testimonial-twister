// holy wow, the testimonial twister (patent pending plugin)

		var the_dots = $('.testimonialfirst .unslider-nav ol');

		function rotate_the_dots(deg) {
			the_dots.stop().animate({  borderSpacing: deg }, {
				step: function(now) {
				  $(this).css('transform','rotate('+now+'deg)');  
				},
				duration:1000, easing: 'easeOutElastic'
			});
		}
		
		if ($(window).width() > 767) {
			
			var current_rotate = -90;
			var nav_index = $('.testimonialfirst .unslider-nav').find('li').length;
			var rotate_deg = -290 / (nav_index - 1);
			//console.log(rotate_deg);


			$('.testimonialfirst .unslider-nav').find('li').each(function() {
				$(this).addClass('testi-dots');
			});

			setTimeout(function() {

				var observer = new MutationObserver(function(mutations) {
					mutations.forEach(function(mutation) {
						if (mutation.attributeName === "class") {
							//var attributeValue = $(mutation.target).prop(mutation.attributeName);
							//console.log("Class attribute changed to:", attributeValue);
							var dot_index = $('.unslider-nav').find('.unslider-active').attr('class').slice(11, 16).split('-').pop();
							var deg = -rotate_deg * dot_index ;
							rotate_the_dots(deg);
						}
					});
				});

				var dot_array = $('.testimonialfirst .unslider-nav').find('li').toArray();


				var d = 0;
				$('.testimonialfirst .unslider-nav').find('li').each(function() {
					$(this).css('transform', 'rotate('+current_rotate+'deg)').addClass('dot-'+d);
					current_rotate+=rotate_deg;

					observer.observe(dot_array[d], {
						attributes: true
					});

					d++;
				});


				// make all testi-text the same height and fix dimensions of unslider-fade
				if($('.testi-text').length > 0 ) {
					var highestTesti = 0;
					$('.testi-text').each(function() {
						if($(this).height() > highestTesti) {
						  highestTesti = $(this).height(); 
						}
					});  
					$('.testi-slider.unslider-fade').height(highestTesti);
					if ($(window).width() < 992) {
						$('.testi-slider.unslider-fade').css('height', highestTesti + 330);
					} else {
						$('.testi-slider.unslider-fade').css('height', highestTesti + 30);
					}
				}


			}, 300);
			// end testimonial twister
		
		
		}
