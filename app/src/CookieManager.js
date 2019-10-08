class CookieManager {
	static appendCookie(key, value) {
		CookieManager.cookies[key] = value;
		var cookie = "";
		var expire = new Date(Date.now() + 60 * 1000 * 60 * 12 * 7 * 100).toString();
		cookie = key + '=' + CookieManager.cookies[key] + '; expires=' + expire + ';';
		document.cookie = cookie;
		console.log('Append cookie: key=' + key + ' value=' + value);
	}

	static loadCookies() {
		// preload all color cookies with black
		for(var i = 1; i < 5; ++i) {
			CookieManager.cookies['custom' + i + 'solid'] = '#000000';
			CookieManager.cookies['custom' + i + 'likely'] = '#000000';
			CookieManager.cookies['custom' + i + 'leaning'] = '#000000';
			CookieManager.cookies['custom' + i + 'tilting'] = '#000000';
		}
		CookieManager.cookies['theme'] = 'default';
		var decode = decodeURIComponent(document.cookie);
		var loadedCookies = decode.split('; ');
		for(var index in loadedCookies) {
			var cookie = loadedCookies[index].split('=');
			var key = cookie[0];
			var result = cookie[1]
			CookieManager.cookies[key] = result;
		}
	}

	static loadCustomColors() {
		var c1 = document.getElementById('custom1button');
		c1.style.background = 'linear-gradient(to right,' +
			CookieManager.cookies['custom1solid'] + ',' +
			CookieManager.cookies['custom1likely'] + ',' +
			CookieManager.cookies['custom1leaning'] + ',' +
			CookieManager.cookies['custom1tilting'] + ')';
		var c2 = document.getElementById('custom2button');
		c2.style.background = 'linear-gradient(to right,' +
			CookieManager.cookies['custom2solid'] + ',' +
			CookieManager.cookies['custom2likely'] + ',' +
			CookieManager.cookies['custom2leaning'] + ',' +
			CookieManager.cookies['custom2tilting'] + ')';
		var c3 = document.getElementById('custom3button');
		c3.style.background = 'linear-gradient(to right,' +
			CookieManager.cookies['custom3solid'] + ',' +
			CookieManager.cookies['custom3likely'] + ',' +
			CookieManager.cookies['custom3leaning'] + ',' +
			CookieManager.cookies['custom3tilting'] + ')';
		var c4 = document.getElementById('custom4button');
		c4.style.background = 'linear-gradient(to right,' +
			CookieManager.cookies['custom4solid'] + ',' +
			CookieManager.cookies['custom4likely'] + ',' +
			CookieManager.cookies['custom4leaning'] + ',' +
			CookieManager.cookies['custom4tilting'] + ')';
	}
}

CookieManager.cookies = {};
