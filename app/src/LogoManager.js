class LogoManager {
	static toggleLTE() {
		var lteLogo = document.getElementById('logo-div');
		if(lteLogo.style.display === '') {
			lteLogo.style.display = 'inline';
		} else if(lteLogo.style.display === 'inline') {
			lteLogo.style.display = '';
		}
	}

	static toggleRedEagle() {
		var redEagleLogo = document.getElementById('logo-redeagle-div');
		if(redEagleLogo.style.display === '') {
			redEagleLogo.style.display = 'inline';
		} else if(redEagleLogo.style.display === 'inline') {
			redEagleLogo.style.display = '';
		}
	}

	static togglePG() {
		var pgLogo = document.getElementById('logo-pg-div');
		if(pgLogo.style.display === '') {
			pgLogo.style.display = 'inline';
		} else if(pgLogo.style.display === 'inline') {
			pgLogo.style.display = '';
		}
	}

	static loadLogos() {
		var redEagleLogo = document.getElementById('logo-redeagle-div');
		redEagleLogo.style.backgroundImage = 'url("https://www.yapms.com/app/res/redeagletv.png")';

		var lteLogo = document.getElementById('logo-div');
		lteLogo.style.backgroundImage = 'url("https://www.yapms.com/app/res/lte.jpg")';

		var pgLogo = document.getElementById('logo-pg-div');
		pgLogo.style.backgroundImage = 'url("https://www.yapms.com/app/res/pg.png")';

	}

	static loadButtons() {
		var backButtons = document.getElementsByClassName("backbutton");
		var closeButtons = document.getElementsByClassName("closebutton");

		for(var index = 0; index < backButtons.length; ++index) {
			var button = backButtons[index];
			button.setAttribute("data", "./html/backbutton.svg");
		}

		for(var index = 0; index < closeButtons.length; ++index) {
			var button = closeButtons[index];
			button.setAttribute("data", "./html/closebutton.svg");
		}
	}

	static loadFlags() {
		var flags = document.getElementsByClassName("flag-aus");
		for(var index = 0; index < flags.length; ++index) {
			var flag = flags[index];
			flag.setAttribute("src", "res/flags/aus.svg");
		}	

		flags = document.getElementsByClassName("flag-usa");
		for(var index = 0; index < flags.length; ++index) {
			var flag = flags[index];
			flag.setAttribute("src", "res/flags/usa.svg");
		}	
		
		flags = document.getElementsByClassName("flag-bra");
		for(var index = 0; index < flags.length; ++index) {
			var flag = flags[index];
			flag.setAttribute("src", "res/flags/bra.svg");
		}	
		
		flags = document.getElementsByClassName("flag-can");
		for(var index = 0; index < flags.length; ++index) {
			var flag = flags[index];
			flag.setAttribute("src", "res/flags/can.svg");
		}	
		
		flags = document.getElementsByClassName("flag-ger");
		for(var index = 0; index < flags.length; ++index) {
			var flag = flags[index];
			flag.setAttribute("src", "res/flags/ger.svg");
		}	
		
		flags = document.getElementsByClassName("flag-ind");
		for(var index = 0; index < flags.length; ++index) {
			var flag = flags[index];
			flag.setAttribute("src", "res/flags/ind.svg");
		}	
		
		flags = document.getElementsByClassName("flag-ita");
		for(var index = 0; index < flags.length; ++index) {
			var flag = flags[index];
			flag.setAttribute("src", "res/flags/ita.svg");
		}	
		
		flags = document.getElementsByClassName("flag-ire");
		for(var index = 0; index < flags.length; ++index) {
			var flag = flags[index];
			flag.setAttribute("src", "res/flags/ire.svg");
		}	
		
		flags = document.getElementsByClassName("flag-ned");
		for(var index = 0; index < flags.length; ++index) {
			var flag = flags[index];
			flag.setAttribute("src", "res/flags/ned.svg");
		}	
		
		flags = document.getElementsByClassName("flag-prt");
		for(var index = 0; index < flags.length; ++index) {
			var flag = flags[index];
			flag.setAttribute("src", "res/flags/prt.svg");
		}	
		
		flags = document.getElementsByClassName("flag-rus");
		for(var index = 0; index < flags.length; ++index) {
			var flag = flags[index];
			flag.setAttribute("src", "res/flags/rus.svg");
		}	
		
		flags = document.getElementsByClassName("flag-esp");
		for(var index = 0; index < flags.length; ++index) {
			var flag = flags[index];
			flag.setAttribute("src", "res/flags/esp.svg");
		}	
		
		flags = document.getElementsByClassName("flag-tur");
		for(var index = 0; index < flags.length; ++index) {
			var flag = flags[index];
			flag.setAttribute("src", "res/flags/tur.svg");
		}	
		
		flags = document.getElementsByClassName("flag-ukd");
		for(var index = 0; index < flags.length; ++index) {
			var flag = flags[index];
			flag.setAttribute("src", "res/flags/ukd.svg");
		}	
		
		flags = document.getElementsByClassName("flag-eu");
		for(var index = 0; index < flags.length; ++index) {
			var flag = flags[index];
			flag.setAttribute("src", "res/flags/eu.svg");
		}	
		
		flags = document.getElementsByClassName("flag-un");
		for(var index = 0; index < flags.length; ++index) {
			var flag = flags[index];
			flag.setAttribute("src", "res/flags/un.svg");
		}	
		
		flags = document.getElementsByClassName("flag-fra");
		for(var index = 0; index < flags.length; ++index) {
			var flag = flags[index];
			flag.setAttribute("src", "res/flags/fra.svg");
		}	
	}
}
