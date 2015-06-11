$(function () {

	"use strict";

	$('.carousel').carousel({
	  interval: '3000',
	  pause: false
	});

	var wHeight = $(window).height();

	$('.fullheight').css('height', wHeight);

	$('#featured .item img').each(function(){
		var imgSrc = $(this).attr('src');
		$(this).parent().css({'background-image':'url('+imgSrc+')'});
		$(this).remove();
	});

	$(window).resize(function(){
		var wHeight = $(window).height();
		$('.fullheight').css('height', wHeight);
	})



	var slideqty = $('#featured .item').length;

	var randSlide = Math.floor(Math.random()*slideqty);

	$('#featured .item').eq(randSlide).addClass('active');





	for (var i = 0; i < slideqty; i++) {
		var insertText = '<li data-target="#featured" data-slide-to="' + i + '"';
		if (i === randSlide) {
			insertText += ' class="active" ';
		}
		insertText += '></li>';
		$('#featured ol').append(insertText);
	};



	var topoffset = 50;

	$('body').scrollspy({ target: 'header .navbar', offset: topoffset });

	  //Use smooth scrolling when clicking on navigation
    $('.navbar a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') === 
        this.pathname.replace(/^\//,'') && 
        location.hostname === this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top-topoffset+2
          }, 500);
          return false;
        } //target.length
      } //click function
    }); //smooth scrolling


	
    var hash = $(this).find('li.active a').attr('href');
	if (hash !== '#featured') {
		$('header nav').addClass('inbody');
	}else {
		$('header nav').removeClass('inbody');
	}

	$('.navbar-fixed-top').on('activate.bs.scrollspy', function () {
		var hash = $(this).find('li.active a').attr('href');
		if (hash !== '#featured') {
			$('header nav').addClass('inbody');
		}else {
			$('header nav').removeClass('inbody');
		}
	});

});