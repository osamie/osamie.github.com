
$(document).ready(function(){
    var writeletterbyletter,nameText,showSubtext; 

    
/* Scroll hire me button to contact page */
	$('.hire-me').click(function(){
		    $('html, body').animate({
        		scrollTop: $( $(this).attr('href') ).offset().top
    		}, 500);
    	return false;
	});

    /* For Bootstrap current state on portfolio sorting */

    $('ul.nav-pills li a').click(function (e) {
        $('ul.nav-pills li.active').removeClass('active')
        $(this).parent('li').addClass('active')
    })

/* portfolio mixitup */

	$(window).load(function(){
        var $container = $('.grid-wrapper');
        $container.isotope({
            filter: '*',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
     
        $('.grid-controls li a').click(function(){
            $('.grid-controls .current').removeClass('current');
            $(this).addClass('current');
     
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
             });
             return false;
        });


    });


/* Magnific Popup */
$('.grid-wrapper').magnificPopup({
		  delegate: 'a', 
		  type: 'image',
		  gallery:{
			enabled:true
		  }
		});



/* Sticky menu */
$(".navbar").sticky({topSpacing: 0});


/* Scroll spy and scroll filter */
    $('#main-menu').onePageNav({
        currentClass: "active",
        changeHash: false,
        scrollThreshold: 0.5,
        scrollSpeed: 750,
        filter: "",
        easing: "swing"	
     });

/* Charts*/
    
$('.chart').waypoint(function() {
    $(this).easyPieChart({
    	   barColor: '#3498db',
    	   size: '150',
			easing: 'easeOutBounce',
			onStep: function(from, to, percent) {
				$(this.el).find('.percent').text(Math.round(percent));
			}
	 });
}, {
  triggerOnce: true,
  offset: 'bottom-in-view'
});


/* VEGAS Home Slider */
	
		$.vegas('slideshow', {
			  backgrounds:[
				{ src:'img/slider/02.jpg', fade:1000 }
			  ]
			})('overlay', {
			  src:'img/overlays/16.png',
              opacity: 1
			});

			$( "#vegas-next" ).hide(); 
			$( "#vegas-prev" ).hide(); 


/*Contact form */
      $('#contact-form').validate({
            rules: {
                name: {
                    minlength: 2,
                    required: true
                },
                email: {
                    required: true,
                    email: true
                },
                message: {
                    minlength: 2,
                    required: true
                }
            },
            highlight: function (element) {
                $(element).closest('.control-group').removeClass('success').addClass('error');
            },
            success: function (element) {
                element.text('OK!').addClass('valid')
                    .closest('.control-group').removeClass('error').addClass('success');
            }
        });


    nameText = "Zuwa Omigie";
    showSubtext = function(){
        $("p#my-title").html("SOFTWARE ENGINEER & WEB DEVELOPER");
        $("p#my-title").show("slow");
    };

    writeletterbyletter = function (target, text, index, interval, callback) {      
        if(index < text.length){
            $(target).append(text[index++]);
            setTimeout(function(){writeletterbyletter(target, text, index, interval, callback);},interval);
        }

        if((index === text.length) && (typeof callback === 'function')){
            callback();
        }
    };


    $("p#my-title").hide();
    writeletterbyletter("h1#my-name",nameText,0,200, showSubtext);

});

