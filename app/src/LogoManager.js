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
}
