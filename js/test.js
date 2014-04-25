//
//	jQuery Validate example script
//
//	Prepared by David Cochran
//
//	Free for your use -- No warranties, no guarantees!
//



$(document).ready(function(){



		$('#quote-form').validate({
	    rules: {
	      fname: {
	        minlength: 2,
	        required: true
	      },
		  lname: {
			minlength: 2,
			required: true
		 },
	      email: {
	        required: true,
	        email: true
	      },
	      add1: {
	      	minlength: 2,
	        required: true
	      },
	      city: {
	        minlength: 2,
	        required: true
	      },
		  state: {
			required: true
	      },
		  date: {
			required: true
	      },
		  month: {
			required: true
	      },
		  year: {
			required: true
	      },
		  zip: {
	        minlength: 5,
			maxlength: 5,
	        required: true,
			digits: true
	      }
		  
		  
	    },
			highlight: function(element) {
				$(element).closest('.control-group').removeClass('success').addClass('error');
			},
			success: function(element) {
				element
				.text('OK!').addClass('valid')
				.closest('.control-group').removeClass('error').addClass('success');
			}
	  });
	  
		
	
	
});