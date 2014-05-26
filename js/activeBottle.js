$(function(){

		var $bottle_triggers = $(".bottle-trigger"), 
				info_box_id = $(this).data('info-box-id');

		$bottle_triggers.on('click', function(e) {
			e.preventDefault();
			var active_bottle_image = $(this).attr('class');
			
			$bottle_triggers.each(function(i, el){
				if ( $(el).attr('class') != active_bottle_image){
					$(el).removeClass('active-image');
					$(el).addClass('faded')
				}
				else{
					$(el).addClass('active-image');
					$(el).removeClass('faded');
				}
			});
		});

		$bottle_triggers.on('click', function(i, el){
			var info_box_id = $(this).data('info-box-id'),
					$info_box = $('#info-box-id-' + info_box_id),
					active_bottle = $info_box.hasClass('active-info-box');

			if (active_bottle){
				$bottle_triggers.removeClass('active-image');
				$bottle_triggers.removeClass('faded');
				$info_box.removeClass('active-info-box');
				$bottle_triggers.trigger('mouseleave');
			} else {
				$(".info-box").removeClass('active-info-box');
				$info_box.addClass('active-info-box');
			}
		});

		$('.drink-info.close-trigger').on('click', function(e){
			e.preventDefault();
			$bottle_triggers.removeClass('active-image');
			$bottle_triggers.removeClass('faded');
			$(this).parent('.info-box').removeClass('active-info-box');
			$(this).find('.active-image').removeClass();
		});

	});
