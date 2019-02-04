$(document).ready(function() {

	// верхнее меню
	$(".menu_button").click(function() {
		var offset = $(".top_menu ul").offset();
		if (offset.left != 0) {
			$(".top_menu ul").css({'left':0});
			$(".bgc_top_menu").fadeIn(300);
		} else {
			$(".top_menu ul").css({'left':-218});
			$(".bgc_top_menu").fadeOut(300);
		}
	});

	//Маска для телефона
	jQuery(function($){
   $("#my_input_phone").mask("+7(999) 999-9999",{placeholder:"+7(___) ___-____"});
	});

	// контакты скрытие и появление
	$(".contakty_hide").click(function() {
		$(".contakty_item").fadeOut(300);
		$(".contakty_show").fadeIn(300);
	});

	$(".contakty_show").click(function() {
		$(".contakty_show").fadeOut(300);
		$(".contakty_item").fadeIn(300);
	});

	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".zayavka").fancybox({
    openEffect  : 'none',
    closeEffect : 'none',
    padding: 0,
    width: 320,
    autoSize: false,
    autoHeight: true
	});

	$(".my_form3_a").click(function() {
			$.fancybox.close( true );
		}
	);

	//Плавный скролл до блока #ex№ по клику на ссылку с адресом #ex№
	$(document).ready(function(){
		$(".top_menu").on("click","a", function (event) {
			//отменяем стандартную обработку нажатия по ссылке
			event.preventDefault();

			//забираем идентификатор бока с атрибута href
			var id  = $(this).attr('href'),

			//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
			
			//анимируем переход на расстояние - top за 1500 мс
			$('body,html').animate({scrollTop: top-0}, 1500);
		});
	});

	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$(window).scroll(function() {
		if($(this).scrollTop() > 500) {
			$('#top').fadeIn(300);
		} else {
			$('#top').fadeOut(300);
		}
	});
	$('#top').click(function() {
		$('body,html').animate({scrollTop:0},800);
	});
	
	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$(".autosmotr_collback").submit(function() {
		$.ajax({
			method: "POST",
			url: "/mail.php",
			data: $(".autosmotr_collback").serialize() // считываем все данные формы
		}).done(function() {
			$.fancybox.open([{ content : 'Вы получите ответ в ближайшее время!' }], { // автозапуск fancybox после выполнения ajax скрипта
			    padding : [20, 20, 20, 20],
			    width: 300,
			    minHeight: 10   
			});
			setTimeout(function() {
				$.fancybox.close();
			}, 3000);
		});
		return false;
	});

	// карусель slick
  $('.karusel').slick({
  	infinite: true,
  	speed: 500,
	  fade: true,
	  cssEase: 'linear',
	  autoplay: true,
  	autoplaySpeed: 3000
  });

});