var FormValidation = function(form_el, config){

	this.el = form_el;
	this.config = config;
	this.errors;

	this.checkEmail = function(email) {
		var regex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
		return regex.test(email);
	};

	this.check = function(){
		// Remove previous errors
		this.el.find('.form-error').remove();
		this.el.find('.input-invalid').removeClass('input-invalid');

		for(var field in this.config){

			// Get input type
			var input_type = this.config[field].type;

			// Grab the input element
			var input = $(this.el).find(input_type+'[name="'+field+'"]');

			// Get validation for specific element
			var validation = this.config[field].validation;

			// Validate input
			for(validate in validation){
				var validation_name = this.config[field].validation[validate];
				
				// Make sure input is required
				if(validation_name=="required"){
					if(!input.val()){
						input.addClass("input-invalid");
						input.after('<div class="form-error">Polje je obavezno!</div>');
					}
				}

				// Chec email addresses
				if(validation_name=="email"){
					if(input.val()){
						if(!this.checkEmail(input.val())){
							input.addClass("input-invalid");
							input.after('<div class="form-error">E-mail nije validan!</div>');
						}
					}
				}
			}

		}

		// If there is no errors return true
		if(!this.el.find('.form-error').length){
			return true;
		}

		return false;
	};
};