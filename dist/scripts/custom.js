$(document).ready(function(){

	// Collapse Menu
	$('.header__menu__opener').click(function(){
		var isOpened = $(this).hasClass('active');

		if(!isOpened){
			$('.header__menu__opener img').attr('src', 'images/close-icon.svg');
			$('.header__menu__list').show();
			$(this).addClass('active');
		} else {
			$('.header__menu__opener img').attr('src', 'images/hamburger-icon.svg');
			$('.header__menu__list').hide();
			$(this).removeClass('active');
		}

		return false;
	});

});