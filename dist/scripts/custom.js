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


	// Submit contact form
	$('.contact__form').submit(function(){

		var el = $(this);

		// Form validation config
		var validation_config = {
			"name": {
				"type": "input",
				"validation": ["required"]
			},
			"email": {
				"type": "input",
				"validation": ["required", "email"]
			},
			"message": {
				"type": "textarea",
				"validation": ["required"]
			},
		};

		// Init form validation
		var validation = new FormValidation(el, validation_config);

		// validate form
		if(validation.check()){
			// silence is gold
		}

		return false;
	});

});