/*
* @Author: hp
* @Date:   2019-09-02 18:39:44
* @Last Modified by:   hp
* @Last Modified time: 2019-09-05 14:36:34
*/
$(function(){


	new WOW().init();


	/*轮播图触摸左右滑动*/
	$("#carousel-example-generic").on("swipeleft",function(){
	 $('.right').click()
	});
	$("#carousel-example-generic").on("swiperight",function(){
	 $('.left').click()
	});



	var list=[
		
		'../images/app-screenshots1.png'
		,
		
		'../images/app-screenshots2.jpg'
		,
		
		'../images/app-screenshots3.jpg'
		,
		
		'../images/app-screenshots4.jpg'
		,
		
		'../images/app-screenshots5.jpg'
		,
		
		'../images/app-screenshots6.jpg'
		,
		
		'../images/app-screenshots7.jpg'
		,
		
		'../images/app-screenshots8.jpg'
		,
	]






	$('.faq-box1').click(function(event) {
		if($(this).children('i').hasClass('glyphicon glyphicon-plus')){
			$(this).children('i').removeClass('glyphicon glyphicon-plus')
			$(this).children('i').addClass('glyphicon glyphicon-minus')
			$(this).siblings('.faq-box2').slideDown()
		}else{
			$(this).children('i').removeClass('glyphicon glyphicon-minus')
			$(this).children('i').addClass('glyphicon glyphicon-plus')
			$(this).siblings('.faq-box2').slideUp()
		}
		
	});



	/*模态框*/
	var s=0;
	$('.screenshots-box').click(function(event) {
		
		s=$(this).index()
		$('.mask').fadeIn()

		$('.mask1 img').attr('src',list[s])
		$('.mask1 img').addClass('animete1')
		$('body').addClass('ovhd')
				
	});

	$('.mask span').click(function(event) {
		$('.mask').fadeOut()
		$('body').removeClass('ovhd')
	});


	/*锚点跳转动画*/
 	$(".move").bind("click touch",function(){
        $('html,body').animate({scrollTop: ($($(this).attr('href')).offset().top)},500);
  	});


 	/*header*/

	var s1=$('#home').offset().top-50;
	var s2=$('#overview').offset().top-80;
	var s3=$('#benefits').offset().top-80;
	var s4=$('#screenshots').offset().top-100;
	var s5=$('#testimonial').offset().top-100;
	var s6=$('#faqs').offset().top-700;
 
 	$(window).scroll(function(event) {
 		if($(window).scrollTop()>100){
 			$('nav').addClass('white')
 			$('nav a').css('color', '#777')
 			$('.header-btn').css('color', '#999');
 		}else{
 			$('nav').removeClass('white')
 			$('nav a').css('color', '#fff')
 			$('.header-btn').css('color', '#fff');
 		}


 		if($(window).scrollTop()>=s1&&$(window).scrollTop()<s2){
			$('.s1').addClass('active1').parent('li').siblings('li').children('a').removeClass('active1')
		}else if($(window).scrollTop()>=s2&&$(window).scrollTop()<s3){
			$('.s2').addClass('active1').parent('li').siblings('li').children('a').removeClass('active1')
		}else if($(window).scrollTop()>=s3&&$(window).scrollTop()<s4){
			$('.s3').addClass('active1').parent('li').siblings('li').children('a').removeClass('active1')
		}else if($(window).scrollTop()>=s4&&$(window).scrollTop()<s5){
			$('.s4').addClass('active1').parent('li').siblings('li').children('a').removeClass('active1')
		}else if($(window).scrollTop()>=s5&&$(window).scrollTop()<s6){
			$('.s5').addClass('active1').parent('li').siblings('li').children('a').removeClass('active1')
		}else{
			$('.s6').addClass('active1').parent('li').siblings('li').children('a').removeClass('active1')
		}


 	});
 	
 	// $('a').click(function(event) {
 	// 	return false;
 	// });



	// $('nav a').click(function(event) {
	// 	$('nav a').removeClass('focus')
 // 		$(this).addClass('focus')
 // 	});

	// $('body').scrollspy({target: '#bs-example-navbar-collapse-1'});




})
   