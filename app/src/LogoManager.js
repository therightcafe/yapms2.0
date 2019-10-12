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
}
