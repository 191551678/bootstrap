/*
* @Author: hp
* @Date:   2019-08-28 09:41:59
* @Last Modified by:   hp
* @Last Modified time: 2019-09-05 14:35:21
*/



$(function(){

	/*插件声明*/
	$.stellar({
    horizontalScrolling: false,
    responsive: true
	});

 	new WOW().init();





	var l;
	var s1=$('#about').offset().top-50;
	var s2=$('#team').offset().top-50;
	var s3=$('#services').offset().top-80;
	var s4=$('#protfolio').offset().top-100;
	var s5=$('#client').offset().top-80;
	var s6=$('#contact').offset().top-700;

	

	/*header*/
	$(window).scroll(function(event) {
		l=$(this).index()
		// console.log($(window).scrollTop())
		if($(window).scrollTop()>100){
			// $('.bg-white').removeClass('hidden')
			$('.white').css('background-color', '#fff');
			$('.white a').css('color', '#222');
			$('.white button').css('color', '#222');

			if($('.nav li a').hasClass('border1')){
				$('.nav li a').removeClass('border1')
				
			}

			if($(window).scrollTop()>=s1&&$(window).scrollTop()<s2){
			
				$('.s1').addClass('border').parent('li').siblings('li').children('a').removeClass('border')
			}else if($(window).scrollTop()>=s2&&$(window).scrollTop()<s3){
				$('.s2').addClass('border').parent('li').siblings('li').children('a').removeClass('border')
			}else if($(window).scrollTop()>=s3&&$(window).scrollTop()<s4){
				$('.s3').addClass('border').parent('li').siblings('li').children('a').removeClass('border')
			}else if($(window).scrollTop()>=s4&&$(window).scrollTop()<s5){
				$('.s4').addClass('border').parent('li').siblings('li').children('a').removeClass('border')
			}else if($(window).scrollTop()>=s5&&$(window).scrollTop()<s6){
				$('.s5').addClass('border').parent('li').siblings('li').children('a').removeClass('border')
			}else{
				$('.s6').addClass('border').parent('li').siblings('li').children('a').removeClass('border')
			}

		}else{
			$('.white').css('background-color', 'transparent');
			$('.white a').css('color', '#fff');
			$('.white button').css('color', '#fff');

			if($('.nav li a').hasClass('border')){
				$('.nav li a').removeClass('border')
				
			}

			if($(window).scrollTop()>=s1&&$(window).scrollTop()<s2){
			
				$('.s1').addClass('border1').parent('li').siblings('li').children('a').removeClass('border1')
			}

		}

		// console.log(s0)
		

		// if($(window).scrollTop()<=$('#about').offset().top){
		// 	$('.nav li a').removeClass('smooth')
		// 	$('#about').addClass('smooth')
		// }else{
			
		// }






	});
	





	/*protfolio*/
	$('.protfolio-uls li').click(function(event) {
		$(this).addClass('uls-active').siblings('li').removeClass('uls-active')

	});


	$('.overlay').hover(function() {
		$(this).siblings('img').addClass('lis-img')
	}, function() {
		$(this).siblings('img').removeClass('lis-img')
	});

	$('.lis').hover(function() {
		$(this).children('.overlay').css('opacity', '1');
	}, function() {
		$(this).children('.overlay').css('opacity', '0');
	});


	var p;
	$('.protfolio-uls li').click(function(event) {
		p=$(this).index();
		if(p==0){
			$('.protfolio .list .row .nopadding').hide()
			$('.protfolio .list .row .nopadding').fadeIn(500)
		}else if(p==1){
			$('.protfolio .list .row .nopadding').hide()
			$('.web').fadeIn(500)
		}else{
			$('.protfolio .list .row .nopadding').hide()
			$('.design').fadeIn(500)	
		}
		
	});




	/*锚点跳转*/
	$(".smooth").click(function(){
	    var href = $(this).attr("href");
	    var pos = $(href).offset().top;
	    $("html,body").animate({scrollTop: pos}, 1000);	
	    return false;
	});





	/*按钮*/

	var timer;
	var t=0;
	// var r=0;
	// function fd(){
	// 	clearInterval(timer);
	// 	timer=setInterval(function(){
	// 		r=Math.floor(Math.random()*29);
	// 	},100)
		
	// }
	
	// fd()
	

	$('.btn2').click(function(event) {
			$('.list>div>div').hide()
				
			$('.list>div>div').fadeIn()
	});



	$('.close-out').click(function(event) {
		$('.mt1').fadeOut()
	});
	$('.btn').click(function(event) {
		$('.mt1').fadeIn()
	});





})