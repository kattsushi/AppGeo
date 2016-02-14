(function () {
	'use strict'
	
	var mLoginCtrl = function ($firebaseObject) {
			
		var log = this;
			
		var ref = new Firebase('https://appgeo.firebaseio.com/Usuarios');
		var sync = $firebaseObject(ref);
		log.correo = sync;
		var login = {
			correo : log.correo,
			contraseña : log.contraseña
		};
		
		$('#login-form-link').click(function(e) {
			$('#login-form').delay(100).fadeIn(100);
			$('#register-form').fadeOut(100);
			$('#register-form-link').removeClass('active');
			$(this).addClass('active');
			e.preventDefault();
		});
		$('#register-form-link').click(function(e) {
			$('#register-form').delay(100).fadeIn(100);
			$('#login-form').fadeOut(100);
			$('#login-form-link').removeClass('active');
			$(this).addClass('active');
			e.preventDefault();
		});
		
	};
				
	var mLogin =  {
			controller : mLoginCtrl,
			controllerAs: 'log',
			templateUrl :'scripts/components/mLogin.html'		
		};
	
	angular.module('appGeo')
		   .component('mLogin', mLogin);
})();