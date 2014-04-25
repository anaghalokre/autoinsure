//
//	jQuery Validate example script
//
//	Prepared by David Cochran
//
//	Free for your use -- No warranties, no guarantees!
//


$(document).ready(function(){

	// Validate
	// http://bassistance.de/jquery-plugins/jquery-plugin-validation/
	// http://docs.jquery.com/Plugins/Validation/
	// http://docs.jquery.com/Plugins/Validation/validate#toptions

		$('#contact-form').validate({
	    rules: {
	      name: {
	        minlength: 2,
	        required: true
	      },
		  test: {
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
	      subject: {
	      	minlength: 2,
	        required: true
	      },
	      message: {
	        minlength: 2,
	        required: true
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

}); // end document.ready


$(document).ready(function(){

	// Validate
	// http://bassistance.de/jquery-plugins/jquery-plugin-validation/
	// http://docs.jquery.com/Plugins/Validation/
	// http://docs.jquery.com/Plugins/Validation/validate#toptions

		$('#reg-form').validate({
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
	      address: {
	      	minlength: 2,
	        required: true
	      },
	      city: {
	        minlength: 2,
	        required: true
	      },
		  state: {
			required: true
	      },zip: {
	        minlength: 5,
			maxlength: 5,
	        required: true,
			digits: true
	      },
		  polnum: {
	        minlength: 10,
	        required: true
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
	  
		$('#quote2-form').validate({
	    rules: {
	      fname: {
	        minlength: 2,
	        required: true
	      },
		  lname: {
			minlength: 2,
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
		 mstatus: {
			required: true
	      },
		 dstatus: {
			required: true
	     }, 
		 cinsurance: {
			required: true
	     },
		 gender: {
			required: true
	     },
		 accident: {
			required: true
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

		$('#login-form').validate({
	    rules: {
	      uname: {
	        minlength: 2,
	        required: true
	      },
		  password: {
			minlength: 2,
			required: true
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

	  	$('#getquote-form').validate({
	    rules: {
	      zip: {
	        minlength: 5,
	        required: true
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