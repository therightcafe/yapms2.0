/*!
 * Chart.js v2.8.0
 * https://www.chartjs.org
 * (c) 2019 Chart.js Contributors
 * Released under the MIT License
 */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(function(){try{return require("moment")}catch(t){}}()):"function"==typeof define&&define.amd?define(["require"],function(t){return e(function(){try{return t("moment")}catch(t){}}())}):t.Chart=e(t.moment)}(this,function(t){"use strict";t=t&&t.hasOwnProperty("default")?t.default:t;var e={rgb2hsl:i,rgb2hsv:n,rgb2hwb:a,rgb2cmyk:o,rgb2keyword:s,rgb2xyz:l,rgb2lab:d,rgb2lch:function(t){return x(d(t))},hsl2rgb:u,hsl2hsv:function(t){var e=t[0],i=t[1]/100,n=t[2]/100;if(0===n)return[0,0,0];return[e,100*(2*(i*=(n*=2)<=1?n:2-n)/(n+i)),100*((n+i)/2)]},hsl2hwb:function(t){return a(u(t))},hsl2cmyk:function(t){return o(u(t))},hsl2keyword:function(t){return s(u(t))},hsv2rgb:h,hsv2hsl:function(t){var e,i,n=t[0],a=t[1]/100,o=t[2]/100;return e=a*o,[n,100*(e=(e/=(i=(2-a)*o)<=1?i:2-i)||0),100*(i/=2)]},hsv2hwb:function(t){return a(h(t))},hsv2cmyk:function(t){return o(h(t))},hsv2keyword:function(t){return s(h(t))},hwb2rgb:c,hwb2hsl:function(t){return i(c(t))},hwb2hsv:function(t){return n(c(t))},hwb2cmyk:function(t){return o(c(t))},hwb2keyword:function(t){return s(c(t))},cmyk2rgb:f,cmyk2hsl:function(t){return i(f(t))},cmyk2hsv:function(t){return n(f(t))},cmyk2hwb:function(t){return a(f(t))},cmyk2keyword:function(t){return s(f(t))},keyword2rgb:w,keyword2hsl:function(t){return i(w(t))},keyword2hsv:function(t){return n(w(t))},keyword2hwb:function(t){return a(w(t))},keyword2cmyk:function(t){return o(w(t))},keyword2lab:function(t){return d(w(t))},keyword2xyz:function(t){return l(w(t))},xyz2rgb:p,xyz2lab:m,xyz2lch:function(t){return x(m(t))},lab2xyz:v,lab2rgb:y,lab2lch:x,lch2lab:k,lch2xyz:function(t){return v(k(t))},lch2rgb:function(t){return y(k(t))}};function i(t){var e,i,n=t[0]/255,a=t[1]/255,o=t[2]/255,r=Math.min(n,a,o),s=Math.max(n,a,o),l=s-r;return s==r?e=0:n==s?e=(a-o)/l:a==s?e=2+(o-n)/l:o==s&&(e=4+(n-a)/l),(e=Math.min(60*e,360))<0&&(e+=360),i=(r+s)/2,[e,100*(s==r?0:i<=.5?l/(s+r):l/(2-s-r)),100*i]}function n(t){var e,i,n=t[0],a=t[1],o=t[2],r=Math.min(n,a,o),s=Math.max(n,a,o),l=s-r;return i=0==s?0:l/s*1e3/10,s==r?e=0:n==s?e=(a-o)/l:a==s?e=2+(o-n)/l:o==s&&(e=4+(n-a)/l),(e=Math.min(60*e,360))<0&&(e+=360),[e,i,s/255*1e3/10]}function a(t){var e=t[0],n=t[1],a=t[2];return[i(t)[0],100*(1/255*Math.min(e,Math.min(n,a))),100*(a=1-1/255*Math.max(e,Math.max(n,a)))]}function o(t){var e,i=t[0]/255,n=t[1]/255,a=t[2]/255;return[100*((1-i-(e=Math.min(1-i,1-n,1-a)))/(1-e)||0),100*((1-n-e)/(1-e)||0),100*((1-a-e)/(1-e)||0),100*e]}function s(t){return _[JSON.stringify(t)]}function l(t){var e=t[0]/255,i=t[1]/255,n=t[2]/255;return[100*(.4124*(e=e>.04045?Math.pow((e+.055)/1.055,2.4):e/12.92)+.3576*(i=i>.04045?Math.pow((i+.055)/1.055,2.4):i/12.92)+.1805*(n=n>.04045?Math.pow((n+.055)/1.055,2.4):n/12.92)),100*(.2126*e+.7152*i+.0722*n),100*(.0193*e+.1192*i+.9505*n)]}function d(t){var e=l(t),i=e[0],n=e[1],a=e[2];return n/=100,a/=108.883,i=(i/=95.047)>.008856?Math.pow(i,1/3):7.787*i+16/116,[116*(n=n>.008856?Math.pow(n,1/3):7.787*n+16/116)-16,500*(i-n),200*(n-(a=a>.008856?Math.pow(a,1/3):7.787*a+16/116))]}function u(t){var e,i,n,a,o,r=t[0]/360,s=t[1]/100,l=t[2]/100;if(0==s)return[o=255*l,o,o];e=2*l-(i=l<.5?l*(1+s):l+s-l*s),a=[0,0,0];for(var d=0;d<3;d++)(n=r+1/3*-(d-1))<0&&n++,n>1&&n--,o=6*n<1?e+6*(i-e)*n:2*n<1?i:3*n<2?e+(i-e)*(2/3-n)*6:e,a[d]=255*o;return a}function h(t){var e=t[0]/60,i=t[1]/100,n=t[2]/100,a=Math.floor(e)%6,o=e-Math.floor(e),r=255*n*(1-i),s=255*n*(1-i*o),l=255*n*(1-i*(1-o));n*=255;switch(a){case 0:return[n,l,r];case 1:return[s,n,r];case 2:return[r,n,l];case 3:return[r,s,n];case 4:return[l,r,n];case 5:return[n,r,s]}}function c(t){var e,i,n,a,o=t[0]/360,s=t[1]/100,l=t[2]/100,d=s+l;switch(d>1&&(s/=d,l/=d),n=6*o-(e=Math.floor(6*o)),0!=(1&e)&&(n=1-n),a=s+n*((i=1-l)-s),e){default:case 6:case 0:r=i,g=a,b=s;break;case 1:r=a,g=i,b=s;break;case 2:r=s,g=i,b=a;break;case 3:r=s,g=a,b=i;break;case 4:r=a,g=s,b=i;break;case 5:r=i,g=s,b=a}return[255*r,255*g,255*b]}function f(t){var e=t[0]/100,i=t[1]/100,n=t[2]/100,a=t[3]/100;return[255*(1-Math.min(1,e*(1-a)+a)),255*(1-Math.min(1,i*(1-a)+a)),255*(1-Math.min(1,n*(1-a)+a))]}function p(t){var e,i,n,a=t[0]/100,o=t[1]/100,r=t[2]/100;return i=-.9689*a+1.8758*o+.0415*r,n=.0557*a+-.204*o+1.057*r,e=(e=3.2406*a+-1.5372*o+-.4986*r)>.0031308?1.055*Math.pow(e,1/2.4)-.055:e*=12.92,i=i>.0031308?1.055*Math.pow(i,1/2.4)-.055:i*=12.92,n=n>.0031308?1.055*Math.pow(n,1/2.4)-.055:n*=12.92,[255*(e=Math.min(Math.max(0,e),1)),255*(i=Math.min(Math.max(0,i),1)),255*(n=Math.min(Math.max(0,n),1))]}function m(t){var e=t[0],i=t[1],n=t[2];return i/=100,n/=108.883,e=(e/=95.047)>.008856?Math.pow(e,1/3):7.787*e+16/116,[116*(i=i>.008856?Math.pow(i,1/3):7.787*i+16/116)-16,500*(e-i),200*(i-(n=n>.008856?Math.pow(n,1/3):7.787*n+16/116))]}function v(t){var e,i,n,a,o=t[0],r=t[1],s=t[2];return o<=8?a=(i=100*o/903.3)/100*7.787+16/116:(i=100*Math.pow((o+16)/116,3),a=Math.pow(i/100,1/3)),[e=e/95.047<=.008856?e=95.047*(r/500+a-16/116)/7.787:95.047*Math.pow(r/500+a,3),i,n=n/108.883<=.008859?n=108.883*(a-s/200-16/116)/7.787:108.883*Math.pow(a-s/200,3)]}function x(t){var e,i=t[0],n=t[1],a=t[2];return(e=360*Math.atan2(a,n)/2/Math.PI)<0&&(e+=360),[i,Math.sqrt(n*n+a*a),e]}function y(t){return p(v(t))}function k(t){var e,i=t[0],n=t[1];return e=t[2]/360*2*Math.PI,[i,n*Math.cos(e),n*Math.sin(e)]}function w(t){return M[t]}var M={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]},_={};for(var C in M)_[JSON.stringify(M[C])]=C;var S=function(){return new T};for(var P in e){S[P+"Raw"]=function(t){return function(i){return"number"==typeof i&&(i=Array.prototype.slice.call(arguments)),e[t](i)}}(P);var I=/(\w+)2(\w+)/.exec(P),A=I[1],D=I[2];(S[A]=S[A]||{})[D]=S[P]=function(t){return function(i){"number"==typeof i&&(i=Array.prototype.slice.call(arguments));var n=e[t](i);if("string"==typeof n||void 0===n)return n;for(var a=0;a<n.length;a++)n[a]=Math.round(n[a]);return n}}(P)}var T=function(){this.convs={}};T.prototype.routeSpace=function(t,e){var i=e[0];return void 0===i?this.getValues(t):("number"==typeof i&&(i=Array.prototype.slice.call(e)),this.setValues(t,i))},T.prototype.setValues=function(t,e){return this.space=t,this.convs={},this.convs[t]=e,this},T.prototype.getValues=function(t){var e=this.convs[t];if(!e){var i=this.space,n=this.convs[i];e=S[i][t](n),this.convs[t]=e}return e},["rgb","hsl","hsv","cmyk","keyword"].forEach(function(t){T.prototype[t]=function(e){return this.routeSpace(t,arguments)}});var F=S,L={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]},R={getRgba:O,getHsla:z,getRgb:function(t){var e=O(t);return e&&e.slice(0,3)},getHsl:function(t){var e=z(t);return e&&e.slice(0,3)},getHwb:B,getAlpha:function(t){var e=O(t);if(e)return e[3];if(e=z(t))return e[3];if(e=B(t))return e[3]},hexString:function(t,e){var e=void 0!==e&&3===t.length?e:t[3];return"#"+H(t[0])+H(t[1])+H(t[2])+(e>=0&&e<1?H(Math.round(255*e)):"")},rgbString:function(t,e){if(e<1||t[3]&&t[3]<1)return N(t,e);return"rgb("+t[0]+", "+t[1]+", "+t[2]+")"},rgbaString:N,percentString:function(t,e){if(e<1||t[3]&&t[3]<1)return W(t,e);var i=Math.round(t[0]/255*100),n=Math.round(t[1]/255*100),a=Math.round(t[2]/255*100);return"rgb("+i+"%, "+n+"%, "+a+"%)"},percentaString:W,hslString:function(t,e){if(e<1||t[3]&&t[3]<1)return V(t,e);return"hsl("+t[0]+", "+t[1]+"%, "+t[2]+"%)"},hslaString:V,hwbString:function(t,e){void 0===e&&(e=void 0!==t[3]?t[3]:1);return"hwb("+t[0]+", "+t[1]+"%, "+t[2]+"%"+(void 0!==e&&1!==e?", "+e:"")+")"},keyword:function(t){return j[t.slice(0,3)]}};function O(t){if(t){var e=[0,0,0],i=1,n=t.match(/^#([a-fA-F0-9]{3,4})$/i),a="";if(n){a=(n=n[1])[3];for(var o=0;o<e.length;o++)e[o]=parseInt(n[o]+n[o],16);a&&(i=Math.round(parseInt(a+a,16)/255*100)/100)}else if(n=t.match(/^#([a-fA-F0-9]{6}([a-fA-F0-9]{2})?)$/i)){a=n[2],n=n[1];for(o=0;o<e.length;o++)e[o]=parseInt(n.slice(2*o,2*o+2),16);a&&(i=Math.round(parseInt(a,16)/255*100)/100)}else if(n=t.match(/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)){for(o=0;o<e.length;o++)e[o]=parseInt(n[o+1]);i=parseFloat(n[4])}else if(n=t.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)){for(o=0;o<e.length;o++)e[o]=Math.round(2.55*parseFloat(n[o+1]));i=parseFloat(n[4])}else if(n=t.match(/(\w+)/)){if("transparent"==n[1])return[0,0,0,0];if(!(e=L[n[1]]))return}for(o=0;o<e.length;o++)e[o]=E(e[o],0,255);return i=i||0==i?E(i,0,1):1,e[3]=i,e}}function z(t){if(t){var e=t.match(/^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);if(e){var i=parseFloat(e[4]);return[E(parseInt(e[1]),0,360),E(parseFloat(e[2]),0,100),E(parseFloat(e[3]),0,100),E(isNaN(i)?1:i,0,1)]}}}function B(t){if(t){var e=t.match(/^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);if(e){var i=parseFloat(e[4]);return[E(parseInt(e[1]),0,360),E(parseFloat(e[2]),0,100),E(parseFloat(e[3]),0,100),E(isNaN(i)?1:i,0,1)]}}}function N(t,e){return void 0===e&&(e=void 0!==t[3]?t[3]:1),"rgba("+t[0]+", "+t[1]+", "+t[2]+", "+e+")"}function W(t,e){return"rgba("+Math.round(t[0]/255*100)+"%, "+Math.round(t[1]/255*100)+"%, "+Math.round(t[2]/255*100)+"%, "+(e||t[3]||1)+")"}function V(t,e){return void 0===e&&(e=void 0!==t[3]?t[3]:1),"hsla("+t[0]+", "+t[1]+"%, "+t[2]+"%, "+e+")"}function E(t,e,i){return Math.min(Math.max(e,t),i)}function H(t){var e=t.toString(16).toUpperCase();return e.length<2?"0"+e:e}var j={};for(var q in L)j[L[q]]=q;var Y=function(t){return t instanceof Y?t:this instanceof Y?(this.valid=!1,this.values={rgb:[0,0,0],hsl:[0,0,0],hsv:[0,0,0],hwb:[0,0,0],cmyk:[0,0,0,0],alpha:1},void("string"==typeof t?(e=R.getRgba(t))?this.setValues("rgb",e):(e=R.getHsla(t))?this.setValues("hsl",e):(e=R.getHwb(t))&&this.setValues("hwb",e):"object"==typeof t&&(void 0!==(e=t).r||void 0!==e.red?this.setValues("rgb",e):void 0!==e.l||void 0!==e.lightness?this.setValues("hsl",e):void 0!==e.v||void 0!==e.value?this.setValues("hsv",e):void 0!==e.w||void 0!==e.whiteness?this.setValues("hwb",e):void 0===e.c&&void 0===e.cyan||this.setValues("cmyk",e)))):new Y(t);var e};Y.prototype={isValid:function(){return this.valid},rgb:function(){return this.setSpace("rgb",arguments)},hsl:function(){return this.setSpace("hsl",arguments)},hsv:function(){return this.setSpace("hsv",arguments)},hwb:function(){return this.setSpace("hwb",arguments)},cmyk:function(){return this.setSpace("cmyk",arguments)},rgbArray:function(){return this.values.rgb},hslArray:function(){return this.values.hsl},hsvArray:function(){return this.values.hsv},hwbArray:function(){var t=this.values;return 1!==t.alpha?t.hwb.concat([t.alpha]):t.hwb},cmykArray:function(){return this.values.cmyk},rgbaArray:function(){var t=this.values;return t.rgb.concat([t.alpha])},hslaArray:function(){var t=this.values;return t.hsl.concat([t.alpha])},alpha:function(t){return void 0===t?this.values.alpha:(this.setValues("alpha",t),this)},red:function(t){return this.setChannel("rgb",0,t)},green:function(t){return this.setChannel("rgb",1,t)},blue:function(t){return this.setChannel("rgb",2,t)},hue:function(t){return t&&(t=(t%=360)<0?360+t:t),this.setChannel("hsl",0,t)},saturation:function(t){return this.setChannel("hsl",1,t)},lightness:function(t){return this.setChannel("hsl",2,t)},saturationv:function(t){return this.setChannel("hsv",1,t)},whiteness:function(t){return this.setChannel("hwb",1,t)},blackness:function(t){return this.setChannel("hwb",2,t)},value:function(t){return this.setChannel("hsv",2,t)},cyan:function(t){return this.setChannel("cmyk",0,t)},magenta:function(t){return this.setChannel("cmyk",1,t)},yellow:function(t){return this.setChannel("cmyk",2,t)},black:function(t){return this.setChannel("cmyk",3,t)},hexString:function(){return R.hexString(this.values.rgb)},rgbString:function(){return R.rgbString(this.values.rgb,this.values.alpha)},rgbaString:function(){return R.rgbaString(this.values.rgb,this.values.alpha)},percentString:function(){return R.percentString(this.values.rgb,this.values.alpha)},hslString:function(){return R.hslString(this.values.hsl,this.values.alpha)},hslaString:function(){return R.hslaString(this.values.hsl,this.values.alpha)},hwbString:function(){return R.hwbString(this.values.hwb,this.values.alpha)},keyword:function(){return R.keyword(this.values.rgb,this.values.alpha)},rgbNumber:function(){var t=this.values.rgb;return t[0]<<16|t[1]<<8|t[2]},luminosity:function(){for(var t=this.values.rgb,e=[],i=0;i<t.length;i++){var n=t[i]/255;e[i]=n<=.03928?n/12.92:Math.pow((n+.055)/1.055,2.4)}return.2126*e[0]+.7152*e[1]+.0722*e[2]},contrast:function(t){var e=this.luminosity(),i=t.luminosity();return e>i?(e+.05)/(i+.05):(i+.05)/(e+.05)},level:function(t){var e=this.contrast(t);return e>=7.1?"AAA":e>=4.5?"AA":""},dark:function(){var t=this.values.rgb;return(299*t[0]+587*t[1]+114*t[2])/1e3<128},light:function(){return!this.dark()},negate:function(){for(var t=[],e=0;e<3;e++)t[e]=255-this.values.rgb[e];return this.setValues("rgb",t),this},lighten:function(t){var e=this.values.hsl;return e[2]+=e[2]*t,this.setValues("hsl",e),this},darken:function(t){var e=this.values.hsl;return e[2]-=e[2]*t,this.setValues("hsl",e),this},saturate:function(t){var e=this.values.hsl;return e[1]+=e[1]*t,this.setValues("hsl",e),this},desaturate:function(t){var e=this.values.hsl;return e[1]-=e[1]*t,this.setValues("hsl",e),this},whiten:function(t){var e=this.values.hwb;return e[1]+=e[1]*t,this.setValues("hwb",e),this},blacken:function(t){var e=this.values.hwb;return e[2]+=e[2]*t,this.setValues("hwb",e),this},greyscale:function(){var t=this.values.rgb,e=.3*t[0]+.59*t[1]+.11*t[2];return this.setValues("rgb",[e,e,e]),this},clearer:function(t){var e=this.values.alpha;return this.setValues("alpha",e-e*t),this},opaquer:function(t){var e=this.values.alpha;return this.setValues("alpha",e+e*t),this},rotate:function(t){var e=this.values.hsl,i=(e[0]+t)%360;return e[0]=i<0?360+i:i,this.setValues("hsl",e),this},mix:function(t,e){var i=t,n=void 0===e?.5:e,a=2*n-1,o=this.alpha()-i.alpha(),r=((a*o==-1?a:(a+o)/(1+a*o))+1)/2,s=1-r;return this.rgb(r*this.red()+s*i.red(),r*this.green()+s*i.green(),r*this.blue()+s*i.blue()).alpha(this.alpha()*n+i.alpha()*(1-n))},toJSON:function(){return this.rgb()},clone:function(){var t,e,i=new Y,n=this.values,a=i.values;for(var o in n)n.hasOwnProperty(o)&&(t=n[o],"[object Array]"===(e={}.toString.call(t))?a[o]=t.slice(0):"[object Number]"===e?a[o]=t:console.error("unexpected color value:",t));return i}},Y.prototype.spaces={rgb:["red","green","blue"],hsl:["hue","saturation","lightness"],hsv:["hue","saturation","value"],hwb:["hue","whiteness","blackness"],cmyk:["cyan","magenta","yellow","black"]},Y.prototype.maxes={rgb:[255,255,255],hsl:[360,100,100],hsv:[360,100,100],hwb:[360,100,100],cmyk:[100,100,100,100]},Y.prototype.getValues=function(t){for(var e=this.values,i={},n=0;n<t.length;n++)i[t.charAt(n)]=e[t][n];return 1!==e.alpha&&(i.a=e.alpha),i},Y.prototype.setValues=function(t,e){var i,n,a=this.values,o=this.spaces,r=this.maxes,s=1;if(this.valid=!0,"alpha"===t)s=e;else if(e.length)a[t]=e.slice(0,t.length),s=e[t.length];else if(void 0!==e[t.charAt(0)]){for(i=0;i<t.length;i++)a[t][i]=e[t.charAt(i)];s=e.a}else if(void 0!==e[o[t][0]]){var l=o[t];for(i=0;i<t.length;i++)a[t][i]=e[l[i]];s=e.alpha}if(a.alpha=Math.max(0,Math.min(1,void 0===s?a.alpha:s)),"alpha"===t)return!1;for(i=0;i<t.length;i++)n=Math.max(0,Math.min(r[t][i],a[t][i])),a[t][i]=Math.round(n);for(var d in o)d!==t&&(a[d]=F[t][d](a[t]));return!0},Y.prototype.setSpace=function(t,e){var i=e[0];return void 0===i?this.getValues(t):("number"==typeof i&&(i=Array.prototype.slice.call(e)),this.setValues(t,i),this)},Y.prototype.setChannel=function(t,e,i){var n=this.values[t];return void 0===i?n[e]:i===n[e]?this:(n[e]=i,this.setValues(t,n),this)},"undefined"!=typeof window&&(window.Color=Y);var U,X=Y,K={noop:function(){},uid:(U=0,function(){return U++}),isNullOrUndef:function(t){return null==t},isArray:function(t){if(Array.isArray&&Array.isArray(t))return!0;var e=Object.prototype.toString.call(t);return"[object"===e.substr(0,7)&&"Array]"===e.substr(-6)},isObject:function(t){return null!==t&&"[object Object]"===Object.prototype.toString.call(t)},isFinite:function(t){return("number"==typeof t||t instanceof Number)&&isFinite(t)},valueOrDefault:function(t,e){return void 0===t?e:t},valueAtIndexOrDefault:function(t,e,i){return K.valueOrDefault(K.isArray(t)?t[e]:t,i)},callback:function(t,e,i){if(t&&"function"==typeof t.call)return t.apply(i,e)},each:function(t,e,i,n){var a,o,r;if(K.isArray(t))if(o=t.length,n)for(a=o-1;a>=0;a--)e.call(i,t[a],a);else for(a=0;a<o;a++)e.call(i,t[a],a);else if(K.isObject(t))for(o=(r=Object.keys(t)).length,a=0;a<o;a++)e.call(i,t[r[a]],r[a])},arrayEquals:function(t,e){var i,n,a,o;if(!t||!e||t.length!==e.length)return!1;for(i=0,n=t.length;i<n;++i)if(a=t[i],o=e[i],a instanceof Array&&o instanceof Array){if(!K.arrayEquals(a,o))return!1}else if(a!==o)return!1;return!0},clone:function(t){if(K.isArray(t))return t.map(K.clone);if(K.isObject(t)){for(var e={},i=Object.keys(t),n=i.length,a=0;a<n;++a)e[i[a]]=K.clone(t[i[a]]);return e}return t},_merger:function(t,e,i,n){var a=e[t],o=i[t];K.isObject(a)&&K.isObject(o)?K.merge(a,o,n):e[t]=K.clone(o)},_mergerIf:function(t,e,i){var n=e[t],a=i[t];K.isObject(n)&&K.isObject(a)?K.mergeIf(n,a):e.hasOwnProperty(t)||(e[t]=K.clone(a))},merge:function(t,e,i){var n,a,o,r,s,l=K.isArray(e)?e:[e],d=l.length;if(!K.isObject(t))return t;for(n=(i=i||{}).merger||K._merger,a=0;a<d;++a)if(e=l[a],K.isObject(e))for(s=0,r=(o=Object.keys(e)).length;s<r;++s)n(o[s],t,e,i);return t},mergeIf:function(t,e){return K.merge(t,e,{merger:K._mergerIf})},extend:function(t){for(var e=function(e,i){t[i]=e},i=1,n=arguments.length;i<n;++i)K.each(arguments[i],e);return t},inherits:function(t){var e=this,i=t&&t.hasOwnProperty("constructor")?t.constructor:function(){return e.apply(this,arguments)},n=function(){this.constructor=i};return n.prototype=e.prototype,i.prototype=new n,i.extend=K.inherits,t&&K.extend(i.prototype,t),i.__super__=e.prototype,i}},G=K;K.callCallback=K.callback,K.indexOf=function(t,e,i){return Array.prototype.indexOf.call(t,e,i)},K.getValueOrDefault=K.valueOrDefault,K.getValueAtIndexOrDefault=K.valueAtIndexOrDefault;var Z={linear:function(t){return t},easeInQuad:function(t){return t*t},easeOutQuad:function(t){return-t*(t-2)},easeInOutQuad:function(t){return(t/=.5)<1?.5*t*t:-.5*(--t*(t-2)-1)},easeInCubic:function(t){return t*t*t},easeOutCubic:function(t){return(t-=1)*t*t+1},easeInOutCubic:function(t){return(t/=.5)<1?.5*t*t*t:.5*((t-=2)*t*t+2)},easeInQuart:function(t){return t*t*t*t},easeOutQuart:function(t){return-((t-=1)*t*t*t-1)},easeInOutQuart:function(t){return(t/=.5)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)},easeInQuint:function(t){return t*t*t*t*t},easeOutQuint:function(t){return(t-=1)*t*t*t*t+1},easeInOutQuint:function(t){return(t/=.5)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)},easeInSine:function(t){return 1-Math.cos(t*(Math.PI/2))},easeOutSine:function(t){return Math.sin(t*(Math.PI/2))},easeInOutSine:function(t){return-.5*(Math.cos(Math.PI*t)-1)},easeInExpo:function(t){return 0===t?0:Math.pow(2,10*(t-1))},easeOutExpo:function(t){return 1===t?1:1-Math.pow(2,-10*t)},easeInOutExpo:function(t){return 0===t?0:1===t?1:(t/=.5)<1?.5*Math.pow(2,10*(t-1)):.5*(2-Math.pow(2,-10*--t))},easeInCirc:function(t){return t>=1?t:-(Math.sqrt(1-t*t)-1)},easeOutCirc:function(t){return Math.sqrt(1-(t-=1)*t)},easeInOutCirc:function(t){return(t/=.5)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},easeInElastic:function(t){var e=1.70158,i=0,n=1;return 0===t?0:1===t?1:(i||(i=.3),n<1?(n=1,e=i/4):e=i/(2*Math.PI)*Math.asin(1/n),-n*Math.pow(2,10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/i))},easeOutElastic:function(t){var e=1.70158,i=0,n=1;return 0===t?0:1===t?1:(i||(i=.3),n<1?(n=1,e=i/4):e=i/(2*Math.PI)*Math.asin(1/n),n*Math.pow(2,-10*t)*Math.sin((t-e)*(2*Math.PI)/i)+1)},easeInOutElastic:function(t){var e=1.70158,i=0,n=1;return 0===t?0:2==(t/=.5)?1:(i||(i=.45),n<1?(n=1,e=i/4):e=i/(2*Math.PI)*Math.asin(1/n),t<1?n*Math.pow(2,10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/i)*-.5:n*Math.pow(2,-10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/i)*.5+1)},easeInBack:function(t){var e=1.70158;return t*t*((e+1)*t-e)},easeOutBack:function(t){var e=1.70158;return(t-=1)*t*((e+1)*t+e)+1},easeInOutBack:function(t){var e=1.70158;return(t/=.5)<1?t*t*((1+(e*=1.525))*t-e)*.5:.5*((t-=2)*t*((1+(e*=1.525))*t+e)+2)},easeInBounce:function(t){return 1-Z.easeOutBounce(1-t)},easeOutBounce:function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},easeInOutBounce:function(t){return t<.5?.5*Z.easeInBounce(2*t):.5*Z.easeOutBounce(2*t-1)+.5}},$={effects:Z};G.easingEffects=Z;var J=Math.PI,Q=J/180,tt=2*J,et=J/2,it=J/4,nt=2*J/3,at={clear:function(t){t.ctx.clearRect(0,0,t.width,t.height)},roundedRect:function(t,e,i,n,a,o){if(o){var r=Math.min(o,a/2,n/2),s=e+r,l=i+r,d=e+n-r,u=i+a-r;t.moveTo(e,l),s<d&&l<u?(t.arc(s,l,r,-J,-et),t.arc(d,l,r,-et,0),t.arc(d,u,r,0,et),t.arc(s,u,r,et,J)):s<d?(t.moveTo(s,i),t.arc(d,l,r,-et,et),t.arc(s,l,r,et,J+et)):l<u?(t.arc(s,l,r,-J,0),t.arc(s,u,r,0,J)):t.arc(s,l,r,-J,J),t.closePath(),t.moveTo(e,i)}else t.rect(e,i,n,a)},drawPoint:function(t,e,i,n,a,o){var r,s,l,d,u,h=(o||0)*Q;if(!e||"object"!=typeof e||"[object HTMLImageElement]"!==(r=e.toString())&&"[object HTMLCanvasElement]"!==r){if(!(isNaN(i)||i<=0)){switch(t.beginPath(),e){default:t.arc(n,a,i,0,tt),t.closePath();break;case"triangle":t.moveTo(n+Math.sin(h)*i,a-Math.cos(h)*i),h+=nt,t.lineTo(n+Math.sin(h)*i,a-Math.cos(h)*i),h+=nt,t.lineTo(n+Math.sin(h)*i,a-Math.cos(h)*i),t.closePath();break;case"rectRounded":d=i-(u=.516*i),s=Math.cos(h+it)*d,l=Math.sin(h+it)*d,t.arc(n-s,a-l,u,h-J,h-et),t.arc(n+l,a-s,u,h-et,h),t.arc(n+s,a+l,u,h,h+et),t.arc(n-l,a+s,u,h+et,h+J),t.closePath();break;case"rect":if(!o){d=Math.SQRT1_2*i,t.rect(n-d,a-d,2*d,2*d);break}h+=it;case"rectRot":s=Math.cos(h)*i,l=Math.sin(h)*i,t.moveTo(n-s,a-l),t.lineTo(n+l,a-s),t.lineTo(n+s,a+l),t.lineTo(n-l,a+s),t.closePath();break;case"crossRot":h+=it;case"cross":s=Math.cos(h)*i,l=Math.sin(h)*i,t.moveTo(n-s,a-l),t.lineTo(n+s,a+l),t.moveTo(n+l,a-s),t.lineTo(n-l,a+s);break;case"star":s=Math.cos(h)*i,l=Math.sin(h)*i,t.moveTo(n-s,a-l),t.lineTo(n+s,a+l),t.moveTo(n+l,a-s),t.lineTo(n-l,a+s),h+=it,s=Math.cos(h)*i,l=Math.sin(h)*i,t.moveTo(n-s,a-l),t.lineTo(n+s,a+l),t.moveTo(n+l,a-s),t.lineTo(n-l,a+s);break;case"line":s=Math.cos(h)*i,l=Math.sin(h)*i,t.moveTo(n-s,a-l),t.lineTo(n+s,a+l);break;case"dash":t.moveTo(n,a),t.lineTo(n+Math.cos(h)*i,a+Math.sin(h)*i)}t.fill(),t.stroke()}}else t.drawImage(e,n-e.width/2,a-e.height/2,e.width,e.height)},_isPointInArea:function(t,e){return t.x>e.left-1e-6&&t.x<e.right+1e-6&&t.y>e.top-1e-6&&t.y<e.bottom+1e-6},clipArea:function(t,e){t.save(),t.beginPath(),t.rect(e.left,e.top,e.right-e.left,e.bottom-e.top),t.clip()},unclipArea:function(t){t.restore()},lineTo:function(t,e,i,n){var a=i.steppedLine;if(a){if("middle"===a){var o=(e.x+i.x)/2;t.lineTo(o,n?i.y:e.y),t.lineTo(o,n?e.y:i.y)}else"after"===a&&!n||"after"!==a&&n?t.lineTo(e.x,i.y):t.lineTo(i.x,e.y);t.lineTo(i.x,i.y)}else i.tension?t.bezierCurveTo(n?e.controlPointPreviousX:e.controlPointNextX,n?e.controlPointPreviousY:e.controlPointNextY,n?i.controlPointNextX:i.controlPointPreviousX,n?i.controlPointNextY:i.controlPointPreviousY,i.x,i.y):t.lineTo(i.x,i.y)}},ot=at;G.clear=at.clear,G.drawRoundedRectangle=function(t){t.beginPath(),at.roundedRect.apply(at,arguments)};var rt={_set:function(t,e){return G.merge(this[t]||(this[t]={}),e)}};rt._set("global",{defaultColor:"rgba(0,0,0,0.1)",defaultFontColor:"#666",defaultFontFamily:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",defaultFontSize:12,defaultFontStyle:"normal",defaultLineHeight:1.2,showLines:!0});var st=rt,lt=G.valueOrDefault;var dt={toLineHeight:function(t,e){var i=(""+t).match(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/);if(!i||"normal"===i[1])return 1.2*e;switch(t=+i[2],i[3]){case"px":return t;case"%":t/=100}return e*t},toPadding:function(t){var e,i,n,a;return G.isObject(t)?(e=+t.top||0,i=+t.right||0,n=+t.bottom||0,a=+t.left||0):e=i=n=a=+t||0,{top:e,right:i,bottom:n,left:a,height:e+n,width:a+i}},_parseFont:function(t){var e=st.global,i=lt(t.fontSize,e.defaultFontSize),n={family:lt(t.fontFamily,e.defaultFontFamily),lineHeight:G.options.toLineHeight(lt(t.lineHeight,e.defaultLineHeight),i),size:i,style:lt(t.fontStyle,e.defaultFontStyle),weight:null,string:""};return n.string=function(t){return!t||G.isNullOrUndef(t.size)||G.isNullOrUndef(t.family)?null:(t.style?t.style+" ":"")+(t.weight?t.weight+" ":"")+t.size+"px "+t.family}(n),n},resolve:function(t,e,i){var n,a,o;for(n=0,a=t.length;n<a;++n)if(void 0!==(o=t[n])&&(void 0!==e&&"function"==typeof o&&(o=o(e)),void 0!==i&&G.isArray(o)&&(o=o[i]),void 0!==o))return o}},ut=G,ht=$,ct=ot,ft=dt;ut.easing=ht,ut.canvas=ct,ut.options=ft;var gt=function(t){ut.extend(this,t),this.initialize.apply(this,arguments)};ut.extend(gt.prototype,{initialize:function(){this.hidden=!1},pivot:function(){var t=this;return t._view||(t._view=ut.clone(t._model)),t._start={},t},transition:function(t){var e=this,i=e._model,n=e._start,a=e._view;return i&&1!==t?(a||(a=e._view={}),n||(n=e._start={}),function(t,e,i,n){var a,o,r,s,l,d,u,h,c,f=Object.keys(i);for(a=0,o=f.length;a<o;++a)if(d=i[r=f[a]],e.hasOwnProperty(r)||(e[r]=d),(s=e[r])!==d&&"_"!==r[0]){if(t.hasOwnProperty(r)||(t[r]=s),(u=typeof d)==typeof(l=t[r]))if("string"===u){if((h=X(l)).valid&&(c=X(d)).valid){e[r]=c.mix(h,n).rgbString();continue}}else if(ut.isFinite(l)&&ut.isFinite(d)){e[r]=l+(d-l)*n;continue}e[r]=d}}(n,a,i,t),e):(e._view=i,e._start=null,e)},tooltipPosition:function(){return{x:this._model.x,y:this._model.y}},hasValue:function(){return ut.isNumber(this._model.x)&&ut.isNumber(this._model.y)}}),gt.extend=ut.inherits;var pt=gt,mt=pt.extend({chart:null,currentStep:0,numSteps:60,easing:"",render:null,onAnimationProgress:null,onAnimationComplete:null}),vt=mt;Object.defineProperty(mt.prototype,"animationObject",{get:function(){return this}}),Object.defineProperty(mt.prototype,"chartInstance",{get:function(){return this.chart},set:function(t){this.chart=t}}),st._set("global",{animation:{duration:1e3,easing:"easeOutQuart",onProgress:ut.noop,onComplete:ut.noop}});var bt={animations:[],request:null,addAnimation:function(t,e,i,n){var a,o,r=this.animations;for(e.chart=t,e.startTime=Date.now(),e.duration=i,n||(t.animating=!0),a=0,o=r.length;a<o;++a)if(r[a].chart===t)return void(r[a]=e);r.push(e),1===r.length&&this.requestAnimationFrame()},cancelAnimation:function(t){var e=ut.findIndex(this.animations,function(e){return e.chart===t});-1!==e&&(this.animations.splice(e,1),t.animating=!1)},requestAnimationFrame:function(){var t=this;null===t.request&&(t.request=ut.requestAnimFrame.call(window,function(){t.request=null,t.startDigest()}))},startDigest:function(){this.advance(),this.animations.length>0&&this.requestAnimationFrame()},advance:function(){for(var t,e,i,n,a=this.animations,o=0;o<a.length;)e=(t=a[o]).chart,i=t.numSteps,n=Math.floor((Date.now()-t.startTime)/t.duration*i)+1,t.currentStep=Math.min(n,i),ut.callback(t.render,[e,t],e),ut.callback(t.onAnimationProgress,[t],e),t.currentStep>=i?(ut.callback(t.onAnimationComplete,[t],e),e.animating=!1,a.splice(o,1)):++o}},xt=ut.options.resolve,yt=["push","pop","shift","splice","unshift"];function kt(t,e){var i=t._chartjs;if(i){var n=i.listeners,a=n.indexOf(e);-1!==a&&n.splice(a,1),n.length>0||(yt.forEach(function(e){delete t[e]}),delete t._chartjs)}}var wt=function(t,e){this.initialize(t,e)};ut.extend(wt.prototype,{datasetElementType:null,dataElementType:null,initialize:function(t,e){this.chart=t,this.index=e,this.linkScales(),this.addElements()},updateIndex:function(t){this.index=t},linkScales:function(){var t=this,e=t.getMeta(),i=t.getDataset();null!==e.xAxisID&&e.xAxisID in t.chart.scales||(e.xAxisID=i.xAxisID||t.chart.options.scales.xAxes[0].id),null!==e.yAxisID&&e.yAxisID in t.chart.scales||(e.yAxisID=i.yAxisID||t.chart.options.scales.yAxes[0].id)},getDataset:function(){return this.chart.data.datasets[this.index]},getMeta:function(){return this.chart.getDatasetMeta(this.index)},getScaleForId:function(t){return this.chart.scales[t]},_getValueScaleId:function(){return this.getMeta().yAxisID},_getIndexScaleId:function(){return this.getMeta().xAxisID},_getValueScale:function(){return this.getScaleForId(this._getValueScaleId())},_getIndexScale:function(){return this.getScaleForId(this._getIndexScaleId())},reset:function(){this.update(!0)},destroy:function(){this._data&&kt(this._data,this)},createMetaDataset:function(){var t=this.datasetElementType;return t&&new t({_chart:this.chart,_datasetIndex:this.index})},createMetaData:function(t){var e=this.dataElementType;return e&&new e({_chart:this.chart,_datasetIndex:this.index,_index:t})},addElements:function(){var t,e,i=this.getMeta(),n=this.getDataset().data||[],a=i.data;for(t=0,e=n.length;t<e;++t)a[t]=a[t]||this.createMetaData(t);i.dataset=i.dataset||this.createMetaDataset()},addElementAndReset:function(t){var e=this.createMetaData(t);this.getMeta().data.splice(t,0,e),this.updateElement(e,t,!0)},buildOrUpdateElements:function(){var t,e,i=this,n=i.getDataset(),a=n.data||(n.data=[]);i._data!==a&&(i._data&&kt(i._data,i),a&&Object.isExtensible(a)&&(e=i,(t=a)._chartjs?t._chartjs.listeners.push(e):(Object.defineProperty(t,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[e]}}),yt.forEach(function(e){var i="onData"+e.charAt(0).toUpperCase()+e.slice(1),n=t[e];Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:function(){var e=Array.prototype.slice.call(arguments),a=n.apply(this,e);return ut.each(t._chartjs.listeners,function(t){"function"==typeof t[i]&&t[i].apply(t,e)}),a}})}))),i._data=a),i.resyncElements()},update:ut.noop,transition:function(t){for(var e=this.getMeta(),i=e.data||[],n=i.length,a=0;a<n;++a)i[a].transition(t);e.dataset&&e.dataset.transition(t)},draw:function(){var t=this.getMeta(),e=t.data||[],i=e.length,n=0;for(t.dataset&&t.dataset.draw();n<i;++n)e[n].draw()},removeHoverStyle:function(t){ut.merge(t._model,t.$previousStyle||{}),delete t.$previousStyle},setHoverStyle:function(t){var e=this.chart.data.datasets[t._datasetIndex],i=t._index,n=t.custom||{},a=t._model,o=ut.getHoverColor;t.$previousStyle={backgroundColor:a.backgroundColor,borderColor:a.borderColor,borderWidth:a.borderWidth},a.backgroundColor=xt([n.hoverBackgroundColor,e.hoverBackgroundColor,o(a.backgroundColor)],void 0,i),a.borderColor=xt([n.hoverBorderColor,e.hoverBorderColor,o(a.borderColor)],void 0,i),a.borderWidth=xt([n.hoverBorderWidth,e.hoverBorderWidth,a.borderWidth],void 0,i)},resyncElements:function(){var t=this.getMeta(),e=this.getDataset().data,i=t.data.length,n=e.length;n<i?t.data.splice(n,i-n):n>i&&this.insertElements(i,n-i)},insertElements:function(t,e){for(var i=0;i<e;++i)this.addElementAndReset(t+i)},onDataPush:function(){var t=arguments.length;this.insertElements(this.getDataset().data.length-t,t)},onDataPop:function(){this.getMeta().data.pop()},onDataShift:function(){this.getMeta().data.shift()},onDataSplice:function(t,e){this.getMeta().data.splice(t,e),this.insertElements(t,arguments.length-2)},onDataUnshift:function(){this.insertElements(0,arguments.length)}}),wt.extend=ut.inherits;var Mt=wt;st._set("global",{elements:{arc:{backgroundColor:st.global.defaultColor,borderColor:"#fff",borderWidth:2,borderAlign:"center"}}});var _t=pt.extend({inLabelRange:function(t){var e=this._view;return!!e&&Math.pow(t-e.x,2)<Math.pow(e.radius+e.hoverRadius,2)},inRange:function(t,e){var i=this._view;if(i){for(var n=ut.getAngleFromPoint(i,{x:t,y:e}),a=n.angle,o=n.distance,r=i.startAngle,s=i.endAngle;s<r;)s+=2*Math.PI;for(;a>s;)a-=2*Math.PI;for(;a<r;)a+=2*Math.PI;var l=a>=r&&a<=s,d=o>=i.innerRadius&&o<=i.outerRadius;return l&&d}return!1},getCenterPoint:function(){var t=this._view,e=(t.startAngle+t.endAngle)/2,i=(t.innerRadius+t.outerRadius)/2;return{x:t.x+Math.cos(e)*i,y:t.y+Math.sin(e)*i}},getArea:function(){var t=this._view;return Math.PI*((t.endAngle-t.startAngle)/(2*Math.PI))*(Math.pow(t.outerRadius,2)-Math.pow(t.innerRadius,2))},tooltipPosition:function(){var t=this._view,e=t.startAngle+(t.endAngle-t.startAngle)/2,i=(t.outerRadius-t.innerRadius)/2+t.innerRadius;return{x:t.x+Math.cos(e)*i,y:t.y+Math.sin(e)*i}},draw:function(){var t,e=this._chart.ctx,i=this._view,n=i.startAngle,a=i.endAngle,o="inner"===i.borderAlign?.33:0;e.save(),e.beginPath(),e.arc(i.x,i.y,Math.max(i.outerRadius-o,0),n,a),e.arc(i.x,i.y,i.innerRadius,a,n,!0),e.closePath(),e.fillStyle=i.backgroundColor,e.fill(),i.borderWidth&&("inner"===i.borderAlign?(e.beginPath(),t=o/i.outerRadius,e.arc(i.x,i.y,i.outerRadius,n-t,a+t),i.innerRadius>o?(t=o/i.innerRadius,e.arc(i.x,i.y,i.innerRadius-o,a+t,n-t,!0)):e.arc(i.x,i.y,o,a+Math.PI/2,n-Math.PI/2),e.closePath(),e.clip(),e.beginPath(),e.arc(i.x,i.y,i.outerRadius,n,a),e.arc(i.x,i.y,i.innerRadius,a,n,!0),e.closePath(),e.lineWidth=2*i.borderWidth,e.lineJoin="round"):(e.lineWidth=i.borderWidth,e.lineJoin="bevel"),e.strokeStyle=i.borderColor,e.stroke()),e.restore()}}),Ct=ut.valueOrDefault,St=st.global.defaultColor;st._set("global",{elements:{line:{tension:.4,backgroundColor:St,borderWidth:3,borderColor:St,borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",capBezierPoints:!0,fill:!0}}});var Pt=pt.extend({draw:function(){var t,e,i,n,a=this._view,o=this._chart.ctx,r=a.spanGaps,s=this._children.slice(),l=st.global,d=l.elements.line,u=-1;for(this._loop&&s.length&&s.push(s[0]),o.save(),o.lineCap=a.borderCapStyle||d.borderCapStyle,o.setLineDash&&o.setLineDash(a.borderDash||d.borderDash),o.lineDashOffset=Ct(a.borderDashOffset,d.borderDashOffset),o.lineJoin=a.borderJoinStyle||d.borderJoinStyle,o.lineWidth=Ct(a.borderWidth,d.borderWidth),o.strokeStyle=a.borderColor||l.defaultColor,o.beginPath(),u=-1,t=0;t<s.length;++t)e=s[t],i=ut.previousItem(s,t),n=e._view,0===t?n.skip||(o.moveTo(n.x,n.y),u=t):(i=-1===u?i:s[u],n.skip||(u!==t-1&&!r||-1===u?o.moveTo(n.x,n.y):ut.canvas.lineTo(o,i._view,e._view),u=t));o.stroke(),o.restore()}}),It=ut.valueOrDefault,At=st.global.defaultColor;function Dt(t){var e=this._view;return!!e&&Math.abs(t-e.x)<e.radius+e.hitRadius}st._set("global",{elements:{point:{radius:3,pointStyle:"circle",backgroundColor:At,borderColor:At,borderWidth:1,hitRadius:1,hoverRadius:4,hoverBorderWidth:1}}});var Tt=pt.extend({inRange:function(t,e){var i=this._view;return!!i&&Math.pow(t-i.x,2)+Math.pow(e-i.y,2)<Math.pow(i.hitRadius+i.radius,2)},inLabelRange:Dt,inXRange:Dt,inYRange:function(t){var e=this._view;return!!e&&Math.abs(t-e.y)<e.radius+e.hitRadius},getCenterPoint:function(){var t=this._view;return{x:t.x,y:t.y}},getArea:function(){return Math.PI*Math.pow(this._view.radius,2)},tooltipPosition:function(){var t=this._view;return{x:t.x,y:t.y,padding:t.radius+t.borderWidth}},draw:function(t){var e=this._view,i=this._chart.ctx,n=e.pointStyle,a=e.rotation,o=e.radius,r=e.x,s=e.y,l=st.global,d=l.defaultColor;e.skip||(void 0===t||ut.canvas._isPointInArea(e,t))&&(i.strokeStyle=e.borderColor||d,i.lineWidth=It(e.borderWidth,l.elements.point.borderWidth),i.fillStyle=e.backgroundColor||d,ut.canvas.drawPoint(i,n,o,r,s,a))}}),Ft=st.global.defaultColor;function Lt(t){return t&&void 0!==t.width}function Rt(t){var e,i,n,a,o;return Lt(t)?(o=t.width/2,e=t.x-o,i=t.x+o,n=Math.min(t.y,t.base),a=Math.max(t.y,t.base)):(o=t.height/2,e=Math.min(t.x,t.base),i=Math.max(t.x,t.base),n=t.y-o,a=t.y+o),{left:e,top:n,right:i,bottom:a}}function Ot(t,e,i){return t===e?i:t===i?e:t}function zt(t,e,i){var n,a,o,r,s=t.borderWidth,l=function(t){var e=t.borderSkipped,i={};return e?(t.horizontal?t.base>t.x&&(e=Ot(e,"left","right")):t.base<t.y&&(e=Ot(e,"bottom","top")),i[e]=!0,i):i}(t);return ut.isObject(s)?(n=+s.top||0,a=+s.right||0,o=+s.bottom||0,r=+s.left||0):n=a=o=r=+s||0,{t:l.top||n<0?0:n>i?i:n,r:l.right||a<0?0:a>e?e:a,b:l.bottom||o<0?0:o>i?i:o,l:l.left||r<0?0:r>e?e:r}}function Bt(t,e,i){var n=null===e,a=null===i,o=!(!t||n&&a)&&Rt(t);return o&&(n||e>=o.left&&e<=o.right)&&(a||i>=o.top&&i<=o.bottom)}st._set("global",{elements:{rectangle:{backgroundColor:Ft,borderColor:Ft,borderSkipped:"bottom",borderWidth:0}}});var Nt=pt.extend({draw:function(){var t=this._chart.ctx,e=this._view,i=function(t){var e=Rt(t),i=e.right-e.left,n=e.bottom-e.top,a=zt(t,i/2,n/2);return{outer:{x:e.left,y:e.top,w:i,h:n},inner:{x:e.left+a.l,y:e.top+a.t,w:i-a.l-a.r,h:n-a.t-a.b}}}(e),n=i.outer,a=i.inner;t.fillStyle=e.backgroundColor,t.fillRect(n.x,n.y,n.w,n.h),n.w===a.w&&n.h===a.h||(t.save(),t.beginPath(),t.rect(n.x,n.y,n.w,n.h),t.clip(),t.fillStyle=e.borderColor,t.rect(a.x,a.y,a.w,a.h),t.fill("evenodd"),t.restore())},height:function(){var t=this._view;return t.base-t.y},inRange:function(t,e){return Bt(this._view,t,e)},inLabelRange:function(t,e){var i=this._view;return Lt(i)?Bt(i,t,null):Bt(i,null,e)},inXRange:function(t){return Bt(this._view,t,null)},inYRange:function(t){return Bt(this._view,null,t)},getCenterPoint:function(){var t,e,i=this._view;return Lt(i)?(t=i.x,e=(i.y+i.base)/2):(t=(i.x+i.base)/2,e=i.y),{x:t,y:e}},getArea:function(){var t=this._view;return Lt(t)?t.width*Math.abs(t.y-t.base):t.height*Math.abs(t.x-t.base)},tooltipPosition:function(){var t=this._view;return{x:t.x,y:t.y}}}),Wt={},Vt=_t,Et=Pt,Ht=Tt,jt=Nt;Wt.Arc=Vt,Wt.Line=Et,Wt.Point=Ht,Wt.Rectangle=jt;var qt=ut.options.resolve;st._set("bar",{hover:{mode:"label"},scales:{xAxes:[{type:"category",categoryPercentage:.8,barPercentage:.9,offset:!0,gridLines:{offsetGridLines:!0}}],yAxes:[{type:"linear"}]}});var Yt=Mt.extend({dataElementType:Wt.Rectangle,initialize:function(){var t;Mt.prototype.initialize.apply(this,arguments),(t=this.getMeta()).stack=this.getDataset().stack,t.bar=!0},update:function(t){var e,i,n=this.getMeta().data;for(this._ruler=this.getRuler(),e=0,i=n.length;e<i;++e)this.updateElement(n[e],e,t)},updateElement:function(t,e,i){var n=this,a=n.getMeta(),o=n.getDataset(),r=n._resolveElementOptions(t,e);t._xScale=n.getScaleForId(a.xAxisID),t._yScale=n.getScaleForId(a.yAxisID),t._datasetIndex=n.index,t._index=e,t._model={backgroundColor:r.backgroundColor,borderColor:r.borderColor,borderSkipped:r.borderSkipped,borderWidth:r.borderWidth,datasetLabel:o.label,label:n.chart.data.labels[e]},n._updateElementGeometry(t,e,i),t.pivot()},_updateElementGeometry:function(t,e,i){var n=this,a=t._model,o=n._getValueScale(),r=o.getBasePixel(),s=o.isHorizontal(),l=n._ruler||n.getRuler(),d=n.calculateBarValuePixels(n.index,e),u=n.calculateBarIndexPixels(n.index,e,l);a.horizontal=s,a.base=i?r:d.base,a.x=s?i?r:d.head:u.center,a.y=s?u.center:i?r:d.head,a.height=s?u.size:void 0,a.width=s?void 0:u.size},_getStacks:function(t){var e,i,n=this.chart,a=this._getIndexScale().options.stacked,o=void 0===t?n.data.datasets.length:t+1,r=[];for(e=0;e<o;++e)(i=n.getDatasetMeta(e)).bar&&n.isDatasetVisible(e)&&(!1===a||!0===a&&-1===r.indexOf(i.stack)||void 0===a&&(void 0===i.stack||-1===r.indexOf(i.stack)))&&r.push(i.stack);return r},getStackCount:function(){return this._getStacks().length},getStackIndex:function(t,e){var i=this._getStacks(t),n=void 0!==e?i.indexOf(e):-1;return-1===n?i.length-1:n},getRuler:function(){var t,e,i=this._getIndexScale(),n=this.getStackCount(),a=this.index,o=i.isHorizontal(),r=o?i.left:i.top,s=r+(o?i.width:i.height),l=[];for(t=0,e=this.getMeta().data.length;t<e;++t)l.push(i.getPixelForValue(null,t,a));return{min:ut.isNullOrUndef(i.options.barThickness)?function(t,e){var i,n,a,o,r=t.isHorizontal()?t.width:t.height,s=t.getTicks();for(a=1,o=e.length;a<o;++a)r=Math.min(r,Math.abs(e[a]-e[a-1]));for(a=0,o=s.length;a<o;++a)n=t.getPixelForTick(a),r=a>0?Math.min(r,n-i):r,i=n;return r}(i,l):-1,pixels:l,start:r,end:s,stackCount:n,scale:i}},calculateBarValuePixels:function(t,e){var i,n,a,o,r,s,l=this.chart,d=this.getMeta(),u=this._getValueScale(),h=u.isHorizontal(),c=l.data.datasets,f=+u.getRightValue(c[t].data[e]),g=u.options.minBarLength,p=u.options.stacked,m=d.stack,v=0;if(p||void 0===p&&void 0!==m)for(i=0;i<t;++i)(n=l.getDatasetMeta(i)).bar&&n.stack===m&&n.controller._getValueScaleId()===u.id&&l.isDatasetVisible(i)&&(a=+u.getRightValue(c[i].data[e]),(f<0&&a<0||f>=0&&a>0)&&(v+=a));return o=u.getPixelForValue(v),s=(r=u.getPixelForValue(v+f))-o,void 0!==g&&Math.abs(s)<g&&(s=g,r=f>=0&&!h||f<0&&h?o-g:o+g),{size:s,base:o,head:r,center:r+s/2}},calculateBarIndexPixels:function(t,e,i){var n=i.scale.options,a="flex"===n.barThickness?function(t,e,i){var n,a=e.pixels,o=a[t],r=t>0?a[t-1]:null,s=t<a.length-1?a[t+1]:null,l=i.categoryPercentage;return null===r&&(r=o-(null===s?e.end-e.start:s-o)),null===s&&(s=o+o-r),n=o-(o-Math.min(r,s))/2*l,{chunk:Math.abs(s-r)/2*l/e.stackCount,ratio:i.barPercentage,start:n}}(e,i,n):function(t,e,i){var n,a,o=i.barThickness,r=e.stackCount,s=e.pixels[t];return ut.isNullOrUndef(o)?(n=e.min*i.categoryPercentage,a=i.barPercentage):(n=o*r,a=1),{chunk:n/r,ratio:a,start:s-n/2}}(e,i,n),o=this.getStackIndex(t,this.getMeta().stack),r=a.start+a.chunk*o+a.chunk/2,s=Math.min(ut.valueOrDefault(n.maxBarThickness,1/0),a.chunk*a.ratio);return{base:r-s/2,head:r+s/2,center:r,size:s}},draw:function(){var t=this.chart,e=this._getValueScale(),i=this.getMeta().data,n=this.getDataset(),a=i.length,o=0;for(ut.canvas.clipArea(t.ctx,t.chartArea);o<a;++o)isNaN(e.getRightValue(n.data[o]))||i[o].draw();ut.canvas.unclipArea(t.ctx)},_resolveElementOptions:function(t,e){var i,n,a,o=this.chart,r=o.data.datasets[this.index],s=t.custom||{},l=o.options.elements.rectangle,d={},u={chart:o,dataIndex:e,dataset:r,datasetIndex:this.index},h=["backgroundColor","borderColor","borderSkipped","borderWidth"];for(i=0,n=h.length;i<n;++i)d[a=h[i]]=qt([s[a],r[a],l[a]],u,e);return d}}),Ut=ut.valueOrDefault,Xt=ut.options.resolve;st._set("bubble",{hover:{mode:"single"},scales:{xAxes:[{type:"linear",position:"bottom",id:"x-axis-0"}],yAxes:[{type:"linear",position:"left",id:"y-axis-0"}]},tooltips:{callbacks:{title:function(){return""},label:function(t,e){var i=e.datasets[t.datasetIndex].label||"",n=e.datasets[t.datasetIndex].data[t.index];return i+": ("+t.xLabel+", "+t.yLabel+", "+n.r+")"}}}});var Kt=Mt.extend({dataElementType:Wt.Point,update:function(t){var e=this,i=e.getMeta().data;ut.each(i,function(i,n){e.updateElement(i,n,t)})},updateElement:function(t,e,i){var n=this,a=n.getMeta(),o=t.custom||{},r=n.getScaleForId(a.xAxisID),s=n.getScaleForId(a.yAxisID),l=n._resolveElementOptions(t,e),d=n.getDataset().data[e],u=n.index,h=i?r.getPixelForDecimal(.5):r.getPixelForValue("object"==typeof d?d:NaN,e,u),c=i?s.getBasePixel():s.getPixelForValue(d,e,u);t._xScale=r,t._yScale=s,t._options=l,t._datasetIndex=u,t._index=e,t._model={backgroundColor:l.backgroundColor,borderColor:l.borderColor,borderWidth:l.borderWidth,hitRadius:l.hitRadius,pointStyle:l.pointStyle,rotation:l.rotation,radius:i?0:l.radius,skip:o.skip||isNaN(h)||isNaN(c),x:h,y:c},t.pivot()},setHoverStyle:function(t){var e=t._model,i=t._options,n=ut.getHoverColor;t.$previousStyle={backgroundColor:e.backgroundColor,borderColor:e.borderColor,borderWidth:e.borderWidth,radius:e.radius},e.backgroundColor=Ut(i.hoverBackgroundColor,n(i.backgroundColor)),e.borderColor=Ut(i.hoverBorderColor,n(i.borderColor)),e.borderWidth=Ut(i.hoverBorderWidth,i.borderWidth),e.radius=i.radius+i.hoverRadius},_resolveElementOptions:function(t,e){var i,n,a,o=this.chart,r=o.data.datasets[this.index],s=t.custom||{},l=o.options.elements.point,d=r.data[e],u={},h={chart:o,dataIndex:e,dataset:r,datasetIndex:this.index},c=["backgroundColor","borderColor","borderWidth","hoverBackgroundColor","hoverBorderColor","hoverBorderWidth","hoverRadius","hitRadius","pointStyle","rotation"];for(i=0,n=c.length;i<n;++i)u[a=c[i]]=Xt([s[a],r[a],l[a]],h,e);return u.radius=Xt([s.radius,d?d.r:void 0,r.radius,l.radius],h,e),u}}),Gt=ut.options.resolve,Zt=ut.valueOrDefault;st._set("doughnut",{animation:{animateRotate:!0,animateScale:!1},hover:{mode:"single"},legendCallback:function(t){var e=[];e.push('<ul class="'+t.id+'-legend">');var i=t.data,n=i.datasets,a=i.labels;if(n.length)for(var o=0;o<n[0].data.length;++o)e.push('<li><span style="background-color:'+n[0].backgroundColor[o]+'"></span>'),a[o]&&e.push(a[o]),e.push("</li>");return e.push("</ul>"),e.join("")},legend:{labels:{generateLabels:function(t){var e=t.data;return e.labels.length&&e.datasets.length?e.labels.map(function(i,n){var a=t.getDatasetMeta(0),o=e.datasets[0],r=a.data[n],s=r&&r.custom||{},l=t.options.elements.arc;return{text:i,fillStyle:Gt([s.backgroundColor,o.backgroundColor,l.backgroundColor],void 0,n),strokeStyle:Gt([s.borderColor,o.borderColor,l.borderColor],void 0,n),lineWidth:Gt([s.borderWidth,o.borderWidth,l.borderWidth],void 0,n),hidden:isNaN(o.data[n])||a.data[n].hidden,index:n}}):[]}},onClick:function(t,e){var i,n,a,o=e.index,r=this.chart;for(i=0,n=(r.data.datasets||[]).length;i<n;++i)(a=r.getDatasetMeta(i)).data[o]&&(a.data[o].hidden=!a.data[o].hidden);r.update()}},cutoutPercentage:50,rotation:-.5*Math.PI,circumference:2*Math.PI,tooltips:{callbacks:{title:function(){return""},label:function(t,e){var i=e.labels[t.index],n=": "+e.datasets[t.datasetIndex].data[t.index];return ut.isArray(i)?(i=i.slice())[0]+=n:i+=n,i}}}});var $t=Mt.extend({dataElementType:Wt.Arc,linkScales:ut.noop,getRingIndex:function(t){for(var e=0,i=0;i<t;++i)this.chart.isDatasetVisible(i)&&++e;return e},update:function(t){var e,i,n=this,a=n.chart,o=a.chartArea,r=a.options,s=o.right-o.left,l=o.bottom-o.top,d=Math.min(s,l),u={x:0,y:0},h=n.getMeta(),c=h.data,f=r.cutoutPercentage,g=r.circumference,p=n._getRingWeight(n.index);if(g<2*Math.PI){var m=r.rotation%(2*Math.PI),v=(m+=2*Math.PI*(m>=Math.PI?-1:m<-Math.PI?1:0))+g,b={x:Math.cos(m),y:Math.sin(m)},x={x:Math.cos(v),y:Math.sin(v)},y=m<=0&&v>=0||m<=2*Math.PI&&2*Math.PI<=v,k=m<=.5*Math.PI&&.5*Math.PI<=v||m<=2.5*Math.PI&&2.5*Math.PI<=v,w=m<=-Math.PI&&-Math.PI<=v||m<=Math.PI&&Math.PI<=v,M=m<=.5*-Math.PI&&.5*-Math.PI<=v||m<=1.5*Math.PI&&1.5*Math.PI<=v,_=f/100,C={x:w?-1:Math.min(b.x*(b.x<0?1:_),x.x*(x.x<0?1:_)),y:M?-1:Math.min(b.y*(b.y<0?1:_),x.y*(x.y<0?1:_))},S={x:y?1:Math.max(b.x*(b.x>0?1:_),x.x*(x.x>0?1:_)),y:k?1:Math.max(b.y*(b.y>0?1:_),x.y*(x.y>0?1:_))},P={width:.5*(S.x-C.x),height:.5*(S.y-C.y)};d=Math.min(s/P.width,l/P.height),u={x:-.5*(S.x+C.x),y:-.5*(S.y+C.y)}}for(e=0,i=c.length;e<i;++e)c[e]._options=n._resolveElementOptions(c[e],e);for(a.borderWidth=n.getMaxBorderWidth(),a.outerRadius=Math.max((d-a.borderWidth)/2,0),a.innerRadius=Math.max(f?a.outerRadius/100*f:0,0),a.radiusLength=(a.outerRadius-a.innerRadius)/(n._getVisibleDatasetWeightTotal()||1),a.offsetX=u.x*a.outerRadius,a.offsetY=u.y*a.outerRadius,h.total=n.calculateTotal(),n.outerRadius=a.outerRadius-a.radiusLength*n._getRingWeightOffset(n.index),n.innerRadius=Math.max(n.outerRadius-a.radiusLength*p,0),e=0,i=c.length;e<i;++e)n.updateElement(c[e],e,t)},updateElement:function(t,e,i){var n=this,a=n.chart,o=a.chartArea,r=a.options,s=r.animation,l=(o.left+o.right)/2,d=(o.top+o.bottom)/2,u=r.rotation,h=r.rotation,c=n.getDataset(),f=i&&s.animateRotate?0:t.hidden?0:n.calculateCircumference(c.data[e])*(r.circumference/(2*Math.PI)),g=i&&s.animateScale?0:n.innerRadius,p=i&&s.animateScale?0:n.outerRadius,m=t._options||{};ut.extend(t,{_datasetIndex:n.index,_index:e,_model:{backgroundColor:m.backgroundColor,borderColor:m.borderColor,borderWidth:m.borderWidth,borderAlign:m.borderAlign,x:l+a.offsetX,y:d+a.offsetY,startAngle:u,endAngle:h,circumference:f,outerRadius:p,innerRadius:g,label:ut.valueAtIndexOrDefault(c.label,e,a.data.labels[e])}});var v=t._model;i&&s.animateRotate||(v.startAngle=0===e?r.rotation:n.getMeta().data[e-1]._model.endAngle,v.endAngle=v.startAngle+v.circumference),t.pivot()},calculateTotal:function(){var t,e=this.getDataset(),i=this.getMeta(),n=0;return ut.each(i.data,function(i,a){t=e.data[a],isNaN(t)||i.hidden||(n+=Math.abs(t))}),n},calculateCircumference:function(t){var e=this.getMeta().total;return e>0&&!isNaN(t)?2*Math.PI*(Math.abs(t)/e):0},getMaxBorderWidth:function(t){var e,i,n,a,o,r,s,l,d=0,u=this.chart;if(!t)for(e=0,i=u.data.datasets.length;e<i;++e)if(u.isDatasetVisible(e)){t=(n=u.getDatasetMeta(e)).data,e!==this.index&&(o=n.controller);break}if(!t)return 0;for(e=0,i=t.length;e<i;++e)a=t[e],"inner"!==(r=o?o._resolveElementOptions(a,e):a._options).borderAlign&&(s=r.borderWidth,d=(l=r.hoverBorderWidth)>(d=s>d?s:d)?l:d);return d},setHoverStyle:function(t){var e=t._model,i=t._options,n=ut.getHoverColor;t.$previousStyle={backgroundColor:e.backgroundColor,borderColor:e.borderColor,borderWidth:e.borderWidth},e.backgroundColor=Zt(i.hoverBackgroundColor,n(i.backgroundColor)),e.borderColor=Zt(i.hoverBorderColor,n(i.borderColor)),e.borderWidth=Zt(i.hoverBorderWidth,i.borderWidth)},_resolveElementOptions:function(t,e){var i,n,a,o=this.chart,r=this.getDataset(),s=t.custom||{},l=o.options.elements.arc,d={},u={chart:o,dataIndex:e,dataset:r,datasetIndex:this.index},h=["backgroundColor","borderColor","borderWidth","borderAlign","hoverBackgroundColor","hoverBorderColor","hoverBorderWidth"];for(i=0,n=h.length;i<n;++i)d[a=h[i]]=Gt([s[a],r[a],l[a]],u,e);return d},_getRingWeightOffset:function(t){for(var e=0,i=0;i<t;++i)this.chart.isDatasetVisible(i)&&(e+=this._getRingWeight(i));return e},_getRingWeight:function(t){return Math.max(Zt(this.chart.data.datasets[t].weight,1),0)},_getVisibleDatasetWeightTotal:function(){return this._getRingWeightOffset(this.chart.data.datasets.length)}});st._set("horizontalBar",{hover:{mode:"index",axis:"y"},scales:{xAxes:[{type:"linear",position:"bottom"}],yAxes:[{type:"category",position:"left",categoryPercentage:.8,barPercentage:.9,offset:!0,gridLines:{offsetGridLines:!0}}]},elements:{rectangle:{borderSkipped:"left"}},tooltips:{mode:"index",axis:"y"}});var Jt=Yt.extend({_getValueScaleId:function(){return this.getMeta().xAxisID},_getIndexScaleId:function(){return this.getMeta().yAxisID}}),Qt=ut.valueOrDefault,te=ut.options.resolve,ee=ut.canvas._isPointInArea;function ie(t,e){return Qt(t.showLine,e.showLines)}st._set("line",{showLines:!0,spanGaps:!1,hover:{mode:"label"},scales:{xAxes:[{type:"category",id:"x-axis-0"}],yAxes:[{type:"linear",id:"y-axis-0"}]}});var ne=Mt.extend({datasetElementType:Wt.Line,dataElementType:Wt.Point,update:function(t){var e,i,n=this,a=n.getMeta(),o=a.dataset,r=a.data||[],s=n.getScaleForId(a.yAxisID),l=n.getDataset(),d=ie(l,n.chart.options);for(d&&(void 0!==l.tension&&void 0===l.lineTension&&(l.lineTension=l.tension),o._scale=s,o._datasetIndex=n.index,o._children=r,o._model=n._resolveLineOptions(o),o.pivot()),e=0,i=r.length;e<i;++e)n.updateElement(r[e],e,t);for(d&&0!==o._model.tension&&n.updateBezierControlPoints(),e=0,i=r.length;e<i;++e)r[e].pivot()},updateElement:function(t,e,i){var n,a,o=this,r=o.getMeta(),s=t.custom||{},l=o.getDataset(),d=o.index,u=l.data[e],h=o.getScaleForId(r.yAxisID),c=o.getScaleForId(r.xAxisID),f=r.dataset._model,g=o._resolvePointOptions(t,e);n=c.getPixelForValue("object"==typeof u?u:NaN,e,d),a=i?h.getBasePixel():o.calculatePointY(u,e,d),t._xScale=c,t._yScale=h,t._options=g,t._datasetIndex=d,t._index=e,t._model={x:n,y:a,skip:s.skip||isNaN(n)||isNaN(a),radius:g.radius,pointStyle:g.pointStyle,rotation:g.rotation,backgroundColor:g.backgroundColor,borderColor:g.borderColor,borderWidth:g.borderWidth,tension:Qt(s.tension,f?f.tension:0),steppedLine:!!f&&f.steppedLine,hitRadius:g.hitRadius}},_resolvePointOptions:function(t,e){var i,n,a,o=this.chart,r=o.data.datasets[this.index],s=t.custom||{},l=o.options.elements.point,d={},u={chart:o,dataIndex:e,dataset:r,datasetIndex:this.index},h={backgroundColor:"pointBackgroundColor",borderColor:"pointBorderColor",borderWidth:"pointBorderWidth",hitRadius:"pointHitRadius",hoverBackgroundColor:"pointHoverBackgroundColor",hoverBorderColor:"pointHoverBorderColor",hoverBorderWidth:"pointHoverBorderWidth",hoverRadius:"pointHoverRadius",pointStyle:"pointStyle",radius:"pointRadius",rotation:"pointRotation"},c=Object.keys(h);for(i=0,n=c.length;i<n;++i)d[a=c[i]]=te([s[a],r[h[a]],r[a],l[a]],u,e);return d},_resolveLineOptions:function(t){var e,i,n,a=this.chart,o=a.data.datasets[this.index],r=t.custom||{},s=a.options,l=s.elements.line,d={},u=["backgroundColor","borderWidth","borderColor","borderCapStyle","borderDash","borderDashOffset","borderJoinStyle","fill","cubicInterpolationMode"];for(e=0,i=u.length;e<i;++e)d[n=u[e]]=te([r[n],o[n],l[n]]);return d.spanGaps=Qt(o.spanGaps,s.spanGaps),d.tension=Qt(o.lineTension,l.tension),d.steppedLine=te([r.steppedLine,o.steppedLine,l.stepped]),d},calculatePointY:function(t,e,i){var n,a,o,r=this.chart,s=this.getMeta(),l=this.getScaleForId(s.yAxisID),d=0,u=0;if(l.options.stacked){for(n=0;n<i;n++)if(a=r.data.datasets[n],"line"===(o=r.getDatasetMeta(n)).type&&o.yAxisID===l.id&&r.isDatasetVisible(n)){var h=Number(l.getRightValue(a.data[e]));h<0?u+=h||0:d+=h||0}var c=Number(l.getRightValue(t));return c<0?l.getPixelForValue(u+c):l.getPixelForValue(d+c)}return l.getPixelForValue(t)},updateBezierControlPoints:function(){var t,e,i,n,a=this.chart,o=this.getMeta(),r=o.dataset._model,s=a.chartArea,l=o.data||[];function d(t,e,i){return Math.max(Math.min(t,i),e)}if(r.spanGaps&&(l=l.filter(function(t){return!t._model.skip})),"monotone"===r.cubicInterpolationMode)ut.splineCurveMonotone(l);else for(t=0,e=l.length;t<e;++t)i=l[t]._model,n=ut.splineCurve(ut.previousItem(l,t)._model,i,ut.nextItem(l,t)._model,r.tension),i.controlPointPreviousX=n.previous.x,i.controlPointPreviousY=n.previous.y,i.controlPointNextX=n.next.x,i.controlPointNextY=n.next.y;if(a.options.elements.line.capBezierPoints)for(t=0,e=l.length;t<e;++t)i=l[t]._model,ee(i,s)&&(t>0&&ee(l[t-1]._model,s)&&(i.controlPointPreviousX=d(i.controlPointPreviousX,s.left,s.right),i.controlPointPreviousY=d(i.controlPointPreviousY,s.top,s.bottom)),t<l.length-1&&ee(l[t+1]._model,s)&&(i.controlPointNextX=d(i.controlPointNextX,s.left,s.right),i.controlPointNextY=d(i.controlPointNextY,s.top,s.bottom)))},draw:function(){var t,e=this.chart,i=this.getMeta(),n=i.data||[],a=e.chartArea,o=n.length,r=0;for(ie(this.getDataset(),e.options)&&(t=(i.dataset._model.borderWidth||0)/2,ut.canvas.clipArea(e.ctx,{left:a.left,right:a.right,top:a.top-t,bottom:a.bottom+t}),i.dataset.draw(),ut.canvas.unclipArea(e.ctx));r<o;++r)n[r].draw(a)},setHoverStyle:function(t){var e=t._model,i=t._options,n=ut.getHoverColor;t.$previousStyle={backgroundColor:e.backgroundColor,borderColor:e.borderColor,borderWidth:e.borderWidth,radius:e.radius},e.backgroundColor=Qt(i.hoverBackgroundColor,n(i.backgroundColor)),e.borderColor=Qt(i.hoverBorderColor,n(i.borderColor)),e.borderWidth=Qt(i.hoverBorderWidth,i.borderWidth),e.radius=Qt(i.hoverRadius,i.radius)}}),ae=ut.options.resolve;st._set("polarArea",{scale:{type:"radialLinear",angleLines:{display:!1},gridLines:{circular:!0},pointLabels:{display:!1},ticks:{beginAtZero:!0}},animation:{animateRotate:!0,animateScale:!0},startAngle:-.5*Math.PI,legendCallback:function(t){var e=[];e.push('<ul class="'+t.id+'-legend">');var i=t.data,n=i.datasets,a=i.labels;if(n.length)for(var o=0;o<n[0].data.length;++o)e.push('<li><span style="background-color:'+n[0].backgroundColor[o]+'"></span>'),a[o]&&e.push(a[o]),e.push("</li>");return e.push("</ul>"),e.join("")},legend:{labels:{generateLabels:function(t){var e=t.data;return e.labels.length&&e.datasets.length?e.labels.map(function(i,n){var a=t.getDatasetMeta(0),o=e.datasets[0],r=a.data[n].custom||{},s=t.options.elements.arc;return{text:i,fillStyle:ae([r.backgroundColor,o.backgroundColor,s.backgroundColor],void 0,n),strokeStyle:ae([r.borderColor,o.borderColor,s.borderColor],void 0,n),lineWidth:ae([r.borderWidth,o.borderWidth,s.borderWidth],void 0,n),hidden:isNaN(o.data[n])||a.data[n].hidden,index:n}}):[]}},onClick:function(t,e){var i,n,a,o=e.index,r=this.chart;for(i=0,n=(r.data.datasets||[]).length;i<n;++i)(a=r.getDatasetMeta(i)).data[o].hidden=!a.data[o].hidden;r.update()}},tooltips:{callbacks:{title:function(){return""},label:function(t,e){return e.labels[t.index]+": "+t.yLabel}}}});var oe=Mt.extend({dataElementType:Wt.Arc,linkScales:ut.noop,update:function(t){var e,i,n,a=this,o=a.getDataset(),r=a.getMeta(),s=a.chart.options.startAngle||0,l=a._starts=[],d=a._angles=[],u=r.data;for(a._updateRadius(),r.count=a.countVisibleElements(),e=0,i=o.data.length;e<i;e++)l[e]=s,n=a._computeAngle(e),d[e]=n,s+=n;for(e=0,i=u.length;e<i;++e)u[e]._options=a._resolveElementOptions(u[e],e),a.updateElement(u[e],e,t)},_updateRadius:function(){var t=this,e=t.chart,i=e.chartArea,n=e.options,a=Math.min(i.right-i.left,i.bottom-i.top);e.outerRadius=Math.max(a/2,0),e.innerRadius=Math.max(n.cutoutPercentage?e.outerRadius/100*n.cutoutPercentage:1,0),e.radiusLength=(e.outerRadius-e.innerRadius)/e.getVisibleDatasetCount(),t.outerRadius=e.outerRadius-e.radiusLength*t.index,t.innerRadius=t.outerRadius-e.radiusLength},updateElement:function(t,e,i){var n=this,a=n.chart,o=n.getDataset(),r=a.options,s=r.animation,l=a.scale,d=a.data.labels,u=l.xCenter,h=l.yCenter,c=r.startAngle,f=t.hidden?0:l.getDistanceFromCenterForValue(o.data[e]),g=n._starts[e],p=g+(t.hidden?0:n._angles[e]),m=s.animateScale?0:l.getDistanceFromCenterForValue(o.data[e]),v=t._options||{};ut.extend(t,{_datasetIndex:n.index,_index:e,_scale:l,_model:{backgroundColor:v.backgroundColor,borderColor:v.borderColor,borderWidth:v.borderWidth,borderAlign:v.borderAlign,x:u,y:h,innerRadius:0,outerRadius:i?m:f,startAngle:i&&s.animateRotate?c:g,endAngle:i&&s.animateRotate?c:p,label:ut.valueAtIndexOrDefault(d,e,d[e])}}),t.pivot()},countVisibleElements:function(){var t=this.getDataset(),e=this.getMeta(),i=0;return ut.each(e.data,function(e,n){isNaN(t.data[n])||e.hidden||i++}),i},setHoverStyle:function(t){var e=t._model,i=t._options,n=ut.getHoverColor,a=ut.valueOrDefault;t.$previousStyle={backgroundColor:e.backgroundColor,borderColor:e.borderColor,borderWidth:e.borderWidth},e.backgroundColor=a(i.hoverBackgroundColor,n(i.backgroundColor)),e.borderColor=a(i.hoverBorderColor,n(i.borderColor)),e.borderWidth=a(i.hoverBorderWidth,i.borderWidth)},_resolveElementOptions:function(t,e){var i,n,a,o=this.chart,r=this.getDataset(),s=t.custom||{},l=o.options.elements.arc,d={},u={chart:o,dataIndex:e,dataset:r,datasetIndex:this.index},h=["backgroundColor","borderColor","borderWidth","borderAlign","hoverBackgroundColor","hoverBorderColor","hoverBorderWidth"];for(i=0,n=h.length;i<n;++i)d[a=h[i]]=ae([s[a],r[a],l[a]],u,e);return d},_computeAngle:function(t){var e=this,i=this.getMeta().count,n=e.getDataset(),a=e.getMeta();if(isNaN(n.data[t])||a.data[t].hidden)return 0;var o={chart:e.chart,dataIndex:t,dataset:n,datasetIndex:e.index};return ae([e.chart.options.elements.arc.angle,2*Math.PI/i],o,t)}});st._set("pie",ut.clone(st.doughnut)),st._set("pie",{cutoutPercentage:0});var re=$t,se=ut.valueOrDefault,le=ut.options.resolve;st._set("radar",{scale:{type:"radialLinear"},elements:{line:{tension:0}}});var de=Mt.extend({datasetElementType:Wt.Line,dataElementType:Wt.Point,linkScales:ut.noop,update:function(t){var e,i,n=this,a=n.getMeta(),o=a.dataset,r=a.data||[],s=n.chart.scale,l=n.getDataset();for(void 0!==l.tension&&void 0===l.lineTension&&(l.lineTension=l.tension),o._scale=s,o._datasetIndex=n.index,o._children=r,o._loop=!0,o._model=n._resolveLineOptions(o),o.pivot(),e=0,i=r.length;e<i;++e)n.updateElement(r[e],e,t);for(n.updateBezierControlPoints(),e=0,i=r.length;e<i;++e)r[e].pivot()},updateElement:function(t,e,i){var n=this,a=t.custom||{},o=n.getDataset(),r=n.chart.scale,s=r.getPointPositionForValue(e,o.data[e]),l=n._resolvePointOptions(t,e),d=n.getMeta().dataset._model,u=i?r.xCenter:s.x,h=i?r.yCenter:s.y;t._scale=r,t._options=l,t._datasetIndex=n.index,t._index=e,t._model={x:u,y:h,skip:a.skip||isNaN(u)||isNaN(h),radius:l.radius,pointStyle:l.pointStyle,rotation:l.rotation,backgroundColor:l.backgroundColor,borderColor:l.borderColor,borderWidth:l.borderWidth,tension:se(a.tension,d?d.tension:0),hitRadius:l.hitRadius}},_resolvePointOptions:function(t,e){var i,n,a,o=this.chart,r=o.data.datasets[this.index],s=t.custom||{},l=o.options.elements.point,d={},u={chart:o,dataIndex:e,dataset:r,datasetIndex:this.index},h={backgroundColor:"pointBackgroundColor",borderColor:"pointBorderColor",borderWidth:"pointBorderWidth",hitRadius:"pointHitRadius",hoverBackgroundColor:"pointHoverBackgroundColor",hoverBorderColor:"pointHoverBorderColor",hoverBorderWidth:"pointHoverBorderWidth",hoverRadius:"pointHoverRadius",pointStyle:"pointStyle",radius:"pointRadius",rotation:"pointRotation"},c=Object.keys(h);for(i=0,n=c.length;i<n;++i)d[a=c[i]]=le([s[a],r[h[a]],r[a],l[a]],u,e);return d},_resolveLineOptions:function(t){var e,i,n,a=this.chart,o=a.data.datasets[this.index],r=t.custom||{},s=a.options.elements.line,l={},d=["backgroundColor","borderWidth","borderColor","borderCapStyle","borderDash","borderDashOffset","borderJoinStyle","fill"];for(e=0,i=d.length;e<i;++e)l[n=d[e]]=le([r[n],o[n],s[n]]);return l.tension=se(o.lineTension,s.tension),l},updateBezierControlPoints:function(){var t,e,i,n,a=this.getMeta(),o=this.chart.chartArea,r=a.data||[];function s(t,e,i){return Math.max(Math.min(t,i),e)}for(t=0,e=r.length;t<e;++t)i=r[t]._model,n=ut.splineCurve(ut.previousItem(r,t,!0)._model,i,ut.nextItem(r,t,!0)._model,i.tension),i.controlPointPreviousX=s(n.previous.x,o.left,o.right),i.controlPointPreviousY=s(n.previous.y,o.top,o.bottom),i.controlPointNextX=s(n.next.x,o.left,o.right),i.controlPointNextY=s(n.next.y,o.top,o.bottom)},setHoverStyle:function(t){var e=t._model,i=t._options,n=ut.getHoverColor;t.$previousStyle={backgroundColor:e.backgroundColor,borderColor:e.borderColor,borderWidth:e.borderWidth,radius:e.radius},e.backgroundColor=se(i.hoverBackgroundColor,n(i.backgroundColor)),e.borderColor=se(i.hoverBorderColor,n(i.borderColor)),e.borderWidth=se(i.hoverBorderWidth,i.borderWidth),e.radius=se(i.hoverRadius,i.radius)}});st._set("scatter",{hover:{mode:"single"},scales:{xAxes:[{id:"x-axis-1",type:"linear",position:"bottom"}],yAxes:[{id:"y-axis-1",type:"linear",position:"left"}]},showLines:!1,tooltips:{callbacks:{title:function(){return""},label:function(t){return"("+t.xLabel+", "+t.yLabel+")"}}}});var ue={bar:Yt,bubble:Kt,doughnut:$t,horizontalBar:Jt,line:ne,polarArea:oe,pie:re,radar:de,scatter:ne};function he(t,e){return t.native?{x:t.x,y:t.y}:ut.getRelativePosition(t,e)}function ce(t,e){var i,n,a,o,r;for(n=0,o=t.data.datasets.length;n<o;++n)if(t.isDatasetVisible(n))for(a=0,r=(i=t.getDatasetMeta(n)).data.length;a<r;++a){var s=i.data[a];s._view.skip||e(s)}}function fe(t,e){var i=[];return ce(t,function(t){t.inRange(e.x,e.y)&&i.push(t)}),i}function ge(t,e,i,n){var a=Number.POSITIVE_INFINITY,o=[];return ce(t,function(t){if(!i||t.inRange(e.x,e.y)){var r=t.getCenterPoint(),s=n(e,r);s<a?(o=[t],a=s):s===a&&o.push(t)}}),o}function pe(t){var e=-1!==t.indexOf("x"),i=-1!==t.indexOf("y");return function(t,n){var a=e?Math.abs(t.x-n.x):0,o=i?Math.abs(t.y-n.y):0;return Math.sqrt(Math.pow(a,2)+Math.pow(o,2))}}function me(t,e,i){var n=he(e,t);i.axis=i.axis||"x";var a=pe(i.axis),o=i.intersect?fe(t,n):ge(t,n,!1,a),r=[];return o.length?(t.data.datasets.forEach(function(e,i){if(t.isDatasetVisible(i)){var n=t.getDatasetMeta(i).data[o[0]._index];n&&!n._view.skip&&r.push(n)}}),r):[]}var ve={modes:{single:function(t,e){var i=he(e,t),n=[];return ce(t,function(t){if(t.inRange(i.x,i.y))return n.push(t),n}),n.slice(0,1)},label:me,index:me,dataset:function(t,e,i){var n=he(e,t);i.axis=i.axis||"xy";var a=pe(i.axis),o=i.intersect?fe(t,n):ge(t,n,!1,a);return o.length>0&&(o=t.getDatasetMeta(o[0]._datasetIndex).data),o},"x-axis":function(t,e){return me(t,e,{intersect:!1})},point:function(t,e){return fe(t,he(e,t))},nearest:function(t,e,i){var n=he(e,t);i.axis=i.axis||"xy";var a=pe(i.axis);return ge(t,n,i.intersect,a)},x:function(t,e,i){var n=he(e,t),a=[],o=!1;return ce(t,function(t){t.inXRange(n.x)&&a.push(t),t.inRange(n.x,n.y)&&(o=!0)}),i.intersect&&!o&&(a=[]),a},y:function(t,e,i){var n=he(e,t),a=[],o=!1;return ce(t,function(t){t.inYRange(n.y)&&a.push(t),t.inRange(n.x,n.y)&&(o=!0)}),i.intersect&&!o&&(a=[]),a}}};function be(t,e){return ut.where(t,function(t){return t.position===e})}function xe(t,e){t.forEach(function(t,e){return t._tmpIndex_=e,t}),t.sort(function(t,i){var n=e?i:t,a=e?t:i;return n.weight===a.weight?n._tmpIndex_-a._tmpIndex_:n.weight-a.weight}),t.forEach(function(t){delete t._tmpIndex_})}function ye(t,e){ut.each(t,function(t){e[t.position]+=t.isHorizontal()?t.height:t.width})}st._set("global",{layout:{padding:{top:0,right:0,bottom:0,left:0}}});var ke={defaults:{},addBox:function(t,e){t.boxes||(t.boxes=[]),e.fullWidth=e.fullWidth||!1,e.position=e.position||"top",e.weight=e.weight||0,t.boxes.push(e)},removeBox:function(t,e){var i=t.boxes?t.boxes.indexOf(e):-1;-1!==i&&t.boxes.splice(i,1)},configure:function(t,e,i){for(var n,a=["fullWidth","position","weight"],o=a.length,r=0;r<o;++r)n=a[r],i.hasOwnProperty(n)&&(e[n]=i[n])},update:function(t,e,i){if(t){var n=t.options.layout||{},a=ut.options.toPadding(n.padding),o=a.left,r=a.right,s=a.top,l=a.bottom,d=be(t.boxes,"left"),u=be(t.boxes,"right"),h=be(t.boxes,"top"),c=be(t.boxes,"bottom"),f=be(t.boxes,"chartArea");xe(d,!0),xe(u,!1),xe(h,!0),xe(c,!1);var g,p=d.concat(u),m=h.concat(c),v=p.concat(m),b=e-o-r,x=i-s-l,y=(e-b/2)/p.length,k=b,w=x,M={top:s,left:o,bottom:l,right:r},_=[];ut.each(v,function(t){var e,i=t.isHorizontal();i?(e=t.update(t.fullWidth?b:k,x/2),w-=e.height):(e=t.update(y,w),k-=e.width),_.push({horizontal:i,width:e.width,box:t})}),g=function(t){var e=0,i=0,n=0,a=0;return ut.each(t,function(t){if(t.getPadding){var o=t.getPadding();e=Math.max(e,o.top),i=Math.max(i,o.left),n=Math.max(n,o.bottom),a=Math.max(a,o.right)}}),{top:e,left:i,bottom:n,right:a}}(v),ut.each(p,T),ye(p,M),ut.each(m,T),ye(m,M),ut.each(p,function(t){var e=ut.findNextWhere(_,function(e){return e.box===t}),i={left:0,right:0,top:M.top,bottom:M.bottom};e&&t.update(e.width,w,i)}),ye(v,M={top:s,left:o,bottom:l,right:r});var C=Math.max(g.left-M.left,0);M.left+=C,M.right+=Math.max(g.right-M.right,0);var S=Math.max(g.top-M.top,0);M.top+=S,M.bottom+=Math.max(g.bottom-M.bottom,0);var P=i-M.top-M.bottom,I=e-M.left-M.right;I===k&&P===w||(ut.each(p,function(t){t.height=P}),ut.each(m,function(t){t.fullWidth||(t.width=I)}),w=P,k=I);var A=o+C,D=s+S;ut.each(d.concat(h),F),A+=k,D+=w,ut.each(u,F),ut.each(c,F),t.chartArea={left:M.left,top:M.top,right:M.left+k,bottom:M.top+w},ut.each(f,function(e){e.left=t.chartArea.left,e.top=t.chartArea.top,e.right=t.chartArea.right,e.bottom=t.chartArea.bottom,e.update(k,w)})}function T(t){var e=ut.findNextWhere(_,function(e){return e.box===t});if(e)if(e.horizontal){var i={left:Math.max(M.left,g.left),right:Math.max(M.right,g.right),top:0,bottom:0};t.update(t.fullWidth?b:k,x/2,i)}else t.update(e.width,w)}function F(t){t.isHorizontal()?(t.left=t.fullWidth?o:M.left,t.right=t.fullWidth?e-r:M.left+k,t.top=D,t.bottom=D+t.height,D=t.bottom):(t.left=A,t.right=A+t.width,t.top=M.top,t.bottom=M.top+w,A=t.right)}}};var we,Me=(we=Object.freeze({default:"@keyframes chartjs-render-animation{from{opacity:.99}to{opacity:1}}.chartjs-render-monitor{animation:chartjs-render-animation 1ms}.chartjs-size-monitor,.chartjs-size-monitor-expand,.chartjs-size-monitor-shrink{position:absolute;direction:ltr;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1}.chartjs-size-monitor-expand>div{position:absolute;width:1000000px;height:1000000px;left:0;top:0}.chartjs-size-monitor-shrink>div{position:absolute;width:200%;height:200%;left:0;top:0}"}))&&we.default||we,_e="$chartjs",Ce="chartjs-size-monitor",Se="chartjs-render-monitor",Pe="chartjs-render-animation",Ie=["animationstart","webkitAnimationStart"],Ae={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"};function De(t,e){var i=ut.getStyle(t,e),n=i&&i.match(/^(\d+)(\.\d+)?px$/);return n?Number(n[1]):void 0}var Te=!!function(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("e",null,e)}catch(t){}return t}()&&{passive:!0};function Fe(t,e,i){t.addEventListener(e,i,Te)}function Le(t,e,i){t.removeEventListener(e,i,Te)}function Re(t,e,i,n,a){return{type:t,chart:e,native:a||null,x:void 0!==i?i:null,y:void 0!==n?n:null}}function Oe(t){var e=document.createElement("div");return e.className=t||"",e}function ze(t,e,i){var n,a,o,r,s=t[_e]||(t[_e]={}),l=s.resizer=function(t){var e=Oe(Ce),i=Oe(Ce+"-expand"),n=Oe(Ce+"-shrink");i.appendChild(Oe()),n.appendChild(Oe()),e.appendChild(i),e.appendChild(n),e._reset=function(){i.scrollLeft=1e6,i.scrollTop=1e6,n.scrollLeft=1e6,n.scrollTop=1e6};var a=function(){e._reset(),t()};return Fe(i,"scroll",a.bind(i,"expand")),Fe(n,"scroll",a.bind(n,"shrink")),e}((n=function(){if(s.resizer){var n=i.options.maintainAspectRatio&&t.parentNode,a=n?n.clientWidth:0;e(Re("resize",i)),n&&n.clientWidth<a&&i.canvas&&e(Re("resize",i))}},o=!1,r=[],function(){r=Array.prototype.slice.call(arguments),a=a||this,o||(o=!0,ut.requestAnimFrame.call(window,function(){o=!1,n.apply(a,r)}))}));!function(t,e){var i=t[_e]||(t[_e]={}),n=i.renderProxy=function(t){t.animationName===Pe&&e()};ut.each(Ie,function(e){Fe(t,e,n)}),i.reflow=!!t.offsetParent,t.classList.add(Se)}(t,function(){if(s.resizer){var e=t.parentNode;e&&e!==l.parentNode&&e.insertBefore(l,e.firstChild),l._reset()}})}function Be(t){var e=t[_e]||{},i=e.resizer;delete e.resizer,function(t){var e=t[_e]||{},i=e.renderProxy;i&&(ut.each(Ie,function(e){Le(t,e,i)}),delete e.renderProxy),t.classList.remove(Se)}(t),i&&i.parentNode&&i.parentNode.removeChild(i)}var Ne={disableCSSInjection:!1,_enabled:"undefined"!=typeof window&&"undefined"!=typeof document,_ensureLoaded:function(){var t,e,i;this._loaded||(this._loaded=!0,this.disableCSSInjection||(e=Me,i=(t=this)._style||document.createElement("style"),t._style||(t._style=i,e="/* Chart.js */\n"+e,i.setAttribute("type","text/css"),document.getElementsByTagName("head")[0].appendChild(i)),i.appendChild(document.createTextNode(e))))},acquireContext:function(t,e){"string"==typeof t?t=document.getElementById(t):t.length&&(t=t[0]),t&&t.canvas&&(t=t.canvas);var i=t&&t.getContext&&t.getContext("2d");return this._ensureLoaded(),i&&i.canvas===t?(function(t,e){var i=t.style,n=t.getAttribute("height"),a=t.getAttribute("width");if(t[_e]={initial:{height:n,width:a,style:{display:i.display,height:i.height,width:i.width}}},i.display=i.display||"block",null===a||""===a){var o=De(t,"width");void 0!==o&&(t.width=o)}if(null===n||""===n)if(""===t.style.height)t.height=t.width/(e.options.aspectRatio||2);else{var r=De(t,"height");void 0!==o&&(t.height=r)}}(t,e),i):null},releaseContext:function(t){var e=t.canvas;if(e[_e]){var i=e[_e].initial;["height","width"].forEach(function(t){var n=i[t];ut.isNullOrUndef(n)?e.removeAttribute(t):e.setAttribute(t,n)}),ut.each(i.style||{},function(t,i){e.style[i]=t}),e.width=e.width,delete e[_e]}},addEventListener:function(t,e,i){var n=t.canvas;if("resize"!==e){var a=i[_e]||(i[_e]={});Fe(n,e,(a.proxies||(a.proxies={}))[t.id+"_"+e]=function(e){i(function(t,e){var i=Ae[t.type]||t.type,n=ut.getRelativePosition(t,e);return Re(i,e,n.x,n.y,t)}(e,t))})}else ze(n,i,t)},removeEventListener:function(t,e,i){var n=t.canvas;if("resize"!==e){var a=((i[_e]||{}).proxies||{})[t.id+"_"+e];a&&Le(n,e,a)}else Be(n)}};ut.addEvent=Fe,ut.removeEvent=Le;var We=Ne._enabled?Ne:{acquireContext:function(t){return t&&t.canvas&&(t=t.canvas),t&&t.getContext("2d")||null}},Ve=ut.extend({initialize:function(){},acquireContext:function(){},releaseContext:function(){},addEventListener:function(){},removeEventListener:function(){}},We);st._set("global",{plugins:{}});var Ee={_plugins:[],_cacheId:0,register:function(t){var e=this._plugins;[].concat(t).forEach(function(t){-1===e.indexOf(t)&&e.push(t)}),this._cacheId++},unregister:function(t){var e=this._plugins;[].concat(t).forEach(function(t){var i=e.indexOf(t);-1!==i&&e.splice(i,1)}),this._cacheId++},clear:function(){this._plugins=[],this._cacheId++},count:function(){return this._plugins.length},getAll:function(){return this._plugins},notify:function(t,e,i){var n,a,o,r,s,l=this.descriptors(t),d=l.length;for(n=0;n<d;++n)if("function"==typeof(s=(o=(a=l[n]).plugin)[e])&&((r=[t].concat(i||[])).push(a.options),!1===s.apply(o,r)))return!1;return!0},descriptors:function(t){var e=t.$plugins||(t.$plugins={});if(e.id===this._cacheId)return e.descriptors;var i=[],n=[],a=t&&t.config||{},o=a.options&&a.options.plugins||{};return this._plugins.concat(a.plugins||[]).forEach(function(t){if(-1===i.indexOf(t)){var e=t.id,a=o[e];!1!==a&&(!0===a&&(a=ut.clone(st.global.plugins[e])),i.push(t),n.push({plugin:t,options:a||{}}))}}),e.descriptors=n,e.id=this._cacheId,n},_invalidate:function(t){delete t.$plugins}},He={constructors:{},defaults:{},registerScaleType:function(t,e,i){this.constructors[t]=e,this.defaults[t]=ut.clone(i)},getScaleConstructor:function(t){return this.constructors.hasOwnProperty(t)?this.constructors[t]:void 0},getScaleDefaults:function(t){return this.defaults.hasOwnProperty(t)?ut.merge({},[st.scale,this.defaults[t]]):{}},updateScaleDefaults:function(t,e){this.defaults.hasOwnProperty(t)&&(this.defaults[t]=ut.extend(this.defaults[t],e))},addScalesToLayout:function(t){ut.each(t.scales,function(e){e.fullWidth=e.options.fullWidth,e.position=e.options.position,e.weight=e.options.weight,ke.addBox(t,e)})}},je=ut.valueOrDefault;st._set("global",{tooltips:{enabled:!0,custom:null,mode:"nearest",position:"average",intersect:!0,backgroundColor:"rgba(0,0,0,0.8)",titleFontStyle:"bold",titleSpacing:2,titleMarginBottom:6,titleFontColor:"#fff",titleAlign:"left",bodySpacing:2,bodyFontColor:"#fff",bodyAlign:"left",footerFontStyle:"bold",footerSpacing:2,footerMarginTop:6,footerFontColor:"#fff",footerAlign:"left",yPadding:6,xPadding:6,caretPadding:2,caretSize:5,cornerRadius:6,multiKeyBackground:"#fff",displayColors:!0,borderColor:"rgba(0,0,0,0)",borderWidth:0,callbacks:{beforeTitle:ut.noop,title:function(t,e){var i="",n=e.labels,a=n?n.length:0;if(t.length>0){var o=t[0];o.label?i=o.label:o.xLabel?i=o.xLabel:a>0&&o.index<a&&(i=n[o.index])}return i},afterTitle:ut.noop,beforeBody:ut.noop,beforeLabel:ut.noop,label:function(t,e){var i=e.datasets[t.datasetIndex].label||"";return i&&(i+=": "),ut.isNullOrUndef(t.value)?i+=t.yLabel:i+=t.value,i},labelColor:function(t,e){var i=e.getDatasetMeta(t.datasetIndex).data[t.index]._view;return{borderColor:i.borderColor,backgroundColor:i.backgroundColor}},labelTextColor:function(){return this._options.bodyFontColor},afterLabel:ut.noop,afterBody:ut.noop,beforeFooter:ut.noop,footer:ut.noop,afterFooter:ut.noop}}});var qe={average:function(t){if(!t.length)return!1;var e,i,n=0,a=0,o=0;for(e=0,i=t.length;e<i;++e){var r=t[e];if(r&&r.hasValue()){var s=r.tooltipPosition();n+=s.x,a+=s.y,++o}}return{x:n/o,y:a/o}},nearest:function(t,e){var i,n,a,o=e.x,r=e.y,s=Number.POSITIVE_INFINITY;for(i=0,n=t.length;i<n;++i){var l=t[i];if(l&&l.hasValue()){var d=l.getCenterPoint(),u=ut.distanceBetweenPoints(e,d);u<s&&(s=u,a=l)}}if(a){var h=a.tooltipPosition();o=h.x,r=h.y}return{x:o,y:r}}};function Ye(t,e){return e&&(ut.isArray(e)?Array.prototype.push.apply(t,e):t.push(e)),t}function Ue(t){return("string"==typeof t||t instanceof String)&&t.indexOf("\n")>-1?t.split("\n"):t}function Xe(t){var e=st.global;return{xPadding:t.xPadding,yPadding:t.yPadding,xAlign:t.xAlign,yAlign:t.yAlign,bodyFontColor:t.bodyFontColor,_bodyFontFamily:je(t.bodyFontFamily,e.defaultFontFamily),_bodyFontStyle:je(t.bodyFontStyle,e.defaultFontStyle),_bodyAlign:t.bodyAlign,bodyFontSize:je(t.bodyFontSize,e.defaultFontSize),bodySpacing:t.bodySpacing,titleFontColor:t.titleFontColor,_titleFontFamily:je(t.titleFontFamily,e.defaultFontFamily),_titleFontStyle:je(t.titleFontStyle,e.defaultFontStyle),titleFontSize:je(t.titleFontSize,e.defaultFontSize),_titleAlign:t.titleAlign,titleSpacing:t.titleSpacing,titleMarginBottom:t.titleMarginBottom,footerFontColor:t.footerFontColor,_footerFontFamily:je(t.footerFontFamily,e.defaultFontFamily),_footerFontStyle:je(t.footerFontStyle,e.defaultFontStyle),footerFontSize:je(t.footerFontSize,e.defaultFontSize),_footerAlign:t.footerAlign,footerSpacing:t.footerSpacing,footerMarginTop:t.footerMarginTop,caretSize:t.caretSize,cornerRadius:t.cornerRadius,backgroundColor:t.backgroundColor,opacity:0,legendColorBackground:t.multiKeyBackground,displayColors:t.displayColors,borderColor:t.borderColor,borderWidth:t.borderWidth}}function Ke(t,e){return"center"===e?t.x+t.width/2:"right"===e?t.x+t.width-t.xPadding:t.x+t.xPadding}function Ge(t){return Ye([],Ue(t))}var Ze=pt.extend({initialize:function(){this._model=Xe(this._options),this._lastActive=[]},getTitle:function(){var t=this._options.callbacks,e=t.beforeTitle.apply(this,arguments),i=t.title.apply(this,arguments),n=t.afterTitle.apply(this,arguments),a=[];return a=Ye(a,Ue(e)),a=Ye(a,Ue(i)),a=Ye(a,Ue(n))},getBeforeBody:function(){return Ge(this._options.callbacks.beforeBody.apply(this,arguments))},getBody:function(t,e){var i=this,n=i._options.callbacks,a=[];return ut.each(t,function(t){var o={before:[],lines:[],after:[]};Ye(o.before,Ue(n.beforeLabel.call(i,t,e))),Ye(o.lines,n.label.call(i,t,e)),Ye(o.after,Ue(n.afterLabel.call(i,t,e))),a.push(o)}),a},getAfterBody:function(){return Ge(this._options.callbacks.afterBody.apply(this,arguments))},getFooter:function(){var t=this._options.callbacks,e=t.beforeFooter.apply(this,arguments),i=t.footer.apply(this,arguments),n=t.afterFooter.apply(this,arguments),a=[];return a=Ye(a,Ue(e)),a=Ye(a,Ue(i)),a=Ye(a,Ue(n))},update:function(t){var e,i,n,a,o,r,s,l,d,u,h=this,c=h._options,f=h._model,g=h._model=Xe(c),p=h._active,m=h._data,v={xAlign:f.xAlign,yAlign:f.yAlign},b={x:f.x,y:f.y},x={width:f.width,height:f.height},y={x:f.caretX,y:f.caretY};if(p.length){g.opacity=1;var k=[],w=[];y=qe[c.position].call(h,p,h._eventPosition);var M=[];for(e=0,i=p.length;e<i;++e)M.push((n=p[e],a=void 0,o=void 0,r=void 0,s=void 0,l=void 0,d=void 0,u=void 0,a=n._xScale,o=n._yScale||n._scale,r=n._index,s=n._datasetIndex,l=n._chart.getDatasetMeta(s).controller,d=l._getIndexScale(),u=l._getValueScale(),{xLabel:a?a.getLabelForIndex(r,s):"",yLabel:o?o.getLabelForIndex(r,s):"",label:d?""+d.getLabelForIndex(r,s):"",value:u?""+u.getLabelForIndex(r,s):"",index:r,datasetIndex:s,x:n._model.x,y:n._model.y}));c.filter&&(M=M.filter(function(t){return c.filter(t,m)})),c.itemSort&&(M=M.sort(function(t,e){return c.itemSort(t,e,m)})),ut.each(M,function(t){k.push(c.callbacks.labelColor.call(h,t,h._chart)),w.push(c.callbacks.labelTextColor.call(h,t,h._chart))}),g.title=h.getTitle(M,m),g.beforeBody=h.getBeforeBody(M,m),g.body=h.getBody(M,m),g.afterBody=h.getAfterBody(M,m),g.footer=h.getFooter(M,m),g.x=y.x,g.y=y.y,g.caretPadding=c.caretPadding,g.labelColors=k,g.labelTextColors=w,g.dataPoints=M,x=function(t,e){var i=t._chart.ctx,n=2*e.yPadding,a=0,o=e.body,r=o.reduce(function(t,e){return t+e.before.length+e.lines.length+e.after.length},0);r+=e.beforeBody.length+e.afterBody.length;var s=e.title.length,l=e.footer.length,d=e.titleFontSize,u=e.bodyFontSize,h=e.footerFontSize;n+=s*d,n+=s?(s-1)*e.titleSpacing:0,n+=s?e.titleMarginBottom:0,n+=r*u,n+=r?(r-1)*e.bodySpacing:0,n+=l?e.footerMarginTop:0,n+=l*h,n+=l?(l-1)*e.footerSpacing:0;var c=0,f=function(t){a=Math.max(a,i.measureText(t).width+c)};return i.font=ut.fontString(d,e._titleFontStyle,e._titleFontFamily),ut.each(e.title,f),i.font=ut.fontString(u,e._bodyFontStyle,e._bodyFontFamily),ut.each(e.beforeBody.concat(e.afterBody),f),c=e.displayColors?u+2:0,ut.each(o,function(t){ut.each(t.before,f),ut.each(t.lines,f),ut.each(t.after,f)}),c=0,i.font=ut.fontString(h,e._footerFontStyle,e._footerFontFamily),ut.each(e.footer,f),{width:a+=2*e.xPadding,height:n}}(this,g),b=function(t,e,i,n){var a=t.x,o=t.y,r=t.caretSize,s=t.caretPadding,l=t.cornerRadius,d=i.xAlign,u=i.yAlign,h=r+s,c=l+s;return"right"===d?a-=e.width:"center"===d&&((a-=e.width/2)+e.width>n.width&&(a=n.width-e.width),a<0&&(a=0)),"top"===u?o+=h:o-="bottom"===u?e.height+h:e.height/2,"center"===u?"left"===d?a+=h:"right"===d&&(a-=h):"left"===d?a-=c:"right"===d&&(a+=c),{x:a,y:o}}(g,x,v=function(t,e){var i,n,a,o,r,s=t._model,l=t._chart,d=t._chart.chartArea,u="center",h="center";s.y<e.height?h="top":s.y>l.height-e.height&&(h="bottom");var c=(d.left+d.right)/2,f=(d.top+d.bottom)/2;"center"===h?(i=function(t){return t<=c},n=function(t){return t>c}):(i=function(t){return t<=e.width/2},n=function(t){return t>=l.width-e.width/2}),a=function(t){return t+e.width+s.caretSize+s.caretPadding>l.width},o=function(t){return t-e.width-s.caretSize-s.caretPadding<0},r=function(t){return t<=f?"top":"bottom"},i(s.x)?(u="left",a(s.x)&&(u="center",h=r(s.y))):n(s.x)&&(u="right",o(s.x)&&(u="center",h=r(s.y)));var g=t._options;return{xAlign:g.xAlign?g.xAlign:u,yAlign:g.yAlign?g.yAlign:h}}(this,x),h._chart)}else g.opacity=0;return g.xAlign=v.xAlign,g.yAlign=v.yAlign,g.x=b.x,g.y=b.y,g.width=x.width,g.height=x.height,g.caretX=y.x,g.caretY=y.y,h._model=g,t&&c.custom&&c.custom.call(h,g),h},drawCaret:function(t,e){var i=this._chart.ctx,n=this._view,a=this.getCaretPosition(t,e,n);i.lineTo(a.x1,a.y1),i.lineTo(a.x2,a.y2),i.lineTo(a.x3,a.y3)},getCaretPosition:function(t,e,i){var n,a,o,r,s,l,d=i.caretSize,u=i.cornerRadius,h=i.xAlign,c=i.yAlign,f=t.x,g=t.y,p=e.width,m=e.height;if("center"===c)s=g+m/2,"left"===h?(a=(n=f)-d,o=n,r=s+d,l=s-d):(a=(n=f+p)+d,o=n,r=s-d,l=s+d);else if("left"===h?(n=(a=f+u+d)-d,o=a+d):"right"===h?(n=(a=f+p-u-d)-d,o=a+d):(n=(a=i.caretX)-d,o=a+d),"top"===c)s=(r=g)-d,l=r;else{s=(r=g+m)+d,l=r;var v=o;o=n,n=v}return{x1:n,x2:a,x3:o,y1:r,y2:s,y3:l}},drawTitle:function(t,e,i){var n=e.title;if(n.length){t.x=Ke(e,e._titleAlign),i.textAlign=e._titleAlign,i.textBaseline="top";var a,o,r=e.titleFontSize,s=e.titleSpacing;for(i.fillStyle=e.titleFontColor,i.font=ut.fontString(r,e._titleFontStyle,e._titleFontFamily),a=0,o=n.length;a<o;++a)i.fillText(n[a],t.x,t.y),t.y+=r+s,a+1===n.length&&(t.y+=e.titleMarginBottom-s)}},drawBody:function(t,e,i){var n,a=e.bodyFontSize,o=e.bodySpacing,r=e._bodyAlign,s=e.body,l=e.displayColors,d=e.labelColors,u=0,h=l?Ke(e,"left"):0;i.textAlign=r,i.textBaseline="top",i.font=ut.fontString(a,e._bodyFontStyle,e._bodyFontFamily),t.x=Ke(e,r);var c=function(e){i.fillText(e,t.x+u,t.y),t.y+=a+o};i.fillStyle=e.bodyFontColor,ut.each(e.beforeBody,c),u=l&&"right"!==r?"center"===r?a/2+1:a+2:0,ut.each(s,function(o,r){n=e.labelTextColors[r],i.fillStyle=n,ut.each(o.before,c),ut.each(o.lines,function(o){l&&(i.fillStyle=e.legendColorBackground,i.fillRect(h,t.y,a,a),i.lineWidth=1,i.strokeStyle=d[r].borderColor,i.strokeRect(h,t.y,a,a),i.fillStyle=d[r].backgroundColor,i.fillRect(h+1,t.y+1,a-2,a-2),i.fillStyle=n),c(o)}),ut.each(o.after,c)}),u=0,ut.each(e.afterBody,c),t.y-=o},drawFooter:function(t,e,i){var n=e.footer;n.length&&(t.x=Ke(e,e._footerAlign),t.y+=e.footerMarginTop,i.textAlign=e._footerAlign,i.textBaseline="top",i.fillStyle=e.footerFontColor,i.font=ut.fontString(e.footerFontSize,e._footerFontStyle,e._footerFontFamily),ut.each(n,function(n){i.fillText(n,t.x,t.y),t.y+=e.footerFontSize+e.footerSpacing}))},drawBackground:function(t,e,i,n){i.fillStyle=e.backgroundColor,i.strokeStyle=e.borderColor,i.lineWidth=e.borderWidth;var a=e.xAlign,o=e.yAlign,r=t.x,s=t.y,l=n.width,d=n.height,u=e.cornerRadius;i.beginPath(),i.moveTo(r+u,s),"top"===o&&this.drawCaret(t,n),i.lineTo(r+l-u,s),i.quadraticCurveTo(r+l,s,r+l,s+u),"center"===o&&"right"===a&&this.drawCaret(t,n),i.lineTo(r+l,s+d-u),i.quadraticCurveTo(r+l,s+d,r+l-u,s+d),"bottom"===o&&this.drawCaret(t,n),i.lineTo(r+u,s+d),i.quadraticCurveTo(r,s+d,r,s+d-u),"center"===o&&"left"===a&&this.drawCaret(t,n),i.lineTo(r,s+u),i.quadraticCurveTo(r,s,r+u,s),i.closePath(),i.fill(),e.borderWidth>0&&i.stroke()},draw:function(){var t=this._chart.ctx,e=this._view;if(0!==e.opacity){var i={width:e.width,height:e.height},n={x:e.x,y:e.y},a=Math.abs(e.opacity<.001)?0:e.opacity,o=e.title.length||e.beforeBody.length||e.body.length||e.afterBody.length||e.footer.length;this._options.enabled&&o&&(t.save(),t.globalAlpha=a,this.drawBackground(n,e,t,i),n.y+=e.yPadding,this.drawTitle(n,e,t),this.drawBody(n,e,t),this.drawFooter(n,e,t),t.restore())}},handleEvent:function(t){var e,i=this,n=i._options;return i._lastActive=i._lastActive||[],"mouseout"===t.type?i._active=[]:i._active=i._chart.getElementsAtEventForMode(t,n.mode,n),(e=!ut.arrayEquals(i._active,i._lastActive))&&(i._lastActive=i._active,(n.enabled||n.custom)&&(i._eventPosition={x:t.x,y:t.y},i.update(!0),i.pivot())),e}}),$e=qe,Je=Ze;Je.positioners=$e;var Qe=ut.valueOrDefault;function ti(){return ut.merge({},[].slice.call(arguments),{merger:function(t,e,i,n){if("xAxes"===t||"yAxes"===t){var a,o,r,s=i[t].length;for(e[t]||(e[t]=[]),a=0;a<s;++a)r=i[t][a],o=Qe(r.type,"xAxes"===t?"category":"linear"),a>=e[t].length&&e[t].push({}),!e[t][a].type||r.type&&r.type!==e[t][a].type?ut.merge(e[t][a],[He.getScaleDefaults(o),r]):ut.merge(e[t][a],r)}else ut._merger(t,e,i,n)}})}function ei(){return ut.merge({},[].slice.call(arguments),{merger:function(t,e,i,n){var a=e[t]||{},o=i[t];"scales"===t?e[t]=ti(a,o):"scale"===t?e[t]=ut.merge(a,[He.getScaleDefaults(o.type),o]):ut._merger(t,e,i,n)}})}function ii(t){return"top"===t||"bottom"===t}st._set("global",{elements:{},events:["mousemove","mouseout","click","touchstart","touchmove"],hover:{onHover:null,mode:"nearest",intersect:!0,animationDuration:400},onClick:null,maintainAspectRatio:!0,responsive:!0,responsiveAnimationDuration:0});var ni=function(t,e){return this.construct(t,e),this};ut.extend(ni.prototype,{construct:function(t,e){var i=this;e=function(t){var e=(t=t||{}).data=t.data||{};return e.datasets=e.datasets||[],e.labels=e.labels||[],t.options=ei(st.global,st[t.type],t.options||{}),t}(e);var n=Ve.acquireContext(t,e),a=n&&n.canvas,o=a&&a.height,r=a&&a.width;i.id=ut.uid(),i.ctx=n,i.canvas=a,i.config=e,i.width=r,i.height=o,i.aspectRatio=o?r/o:null,i.options=e.options,i._bufferedRender=!1,i.chart=i,i.controller=i,ni.instances[i.id]=i,Object.defineProperty(i,"data",{get:function(){return i.config.data},set:function(t){i.config.data=t}}),n&&a?(i.initialize(),i.update()):console.error("Failed to create chart: can't acquire context from the given item")},initialize:function(){var t=this;return Ee.notify(t,"beforeInit"),ut.retinaScale(t,t.options.devicePixelRatio),t.bindEvents(),t.options.responsive&&t.resize(!0),t.ensureScalesHaveIDs(),t.buildOrUpdateScales(),t.initToolTip(),Ee.notify(t,"afterInit"),t},clear:function(){return ut.canvas.clear(this),this},stop:function(){return bt.cancelAnimation(this),this},resize:function(t){var e=this,i=e.options,n=e.canvas,a=i.maintainAspectRatio&&e.aspectRatio||null,o=Math.max(0,Math.floor(ut.getMaximumWidth(n))),r=Math.max(0,Math.floor(a?o/a:ut.getMaximumHeight(n)));if((e.width!==o||e.height!==r)&&(n.width=e.width=o,n.height=e.height=r,n.style.width=o+"px",n.style.height=r+"px",ut.retinaScale(e,i.devicePixelRatio),!t)){var s={width:o,height:r};Ee.notify(e,"resize",[s]),i.onResize&&i.onResize(e,s),e.stop(),e.update({duration:i.responsiveAnimationDuration})}},ensureScalesHaveIDs:function(){var t=this.options,e=t.scales||{},i=t.scale;ut.each(e.xAxes,function(t,e){t.id=t.id||"x-axis-"+e}),ut.each(e.yAxes,function(t,e){t.id=t.id||"y-axis-"+e}),i&&(i.id=i.id||"scale")},buildOrUpdateScales:function(){var t=this,e=t.options,i=t.scales||{},n=[],a=Object.keys(i).reduce(function(t,e){return t[e]=!1,t},{});e.scales&&(n=n.concat((e.scales.xAxes||[]).map(function(t){return{options:t,dtype:"category",dposition:"bottom"}}),(e.scales.yAxes||[]).map(function(t){return{options:t,dtype:"linear",dposition:"left"}}))),e.scale&&n.push({options:e.scale,dtype:"radialLinear",isDefault:!0,dposition:"chartArea"}),ut.each(n,function(e){var n=e.options,o=n.id,r=Qe(n.type,e.dtype);ii(n.position)!==ii(e.dposition)&&(n.position=e.dposition),a[o]=!0;var s=null;if(o in i&&i[o].type===r)(s=i[o]).options=n,s.ctx=t.ctx,s.chart=t;else{var l=He.getScaleConstructor(r);if(!l)return;s=new l({id:o,type:r,options:n,ctx:t.ctx,chart:t}),i[s.id]=s}s.mergeTicksOptions(),e.isDefault&&(t.scale=s)}),ut.each(a,function(t,e){t||delete i[e]}),t.scales=i,He.addScalesToLayout(this)},buildOrUpdateControllers:function(){var t=this,e=[];return ut.each(t.data.datasets,function(i,n){var a=t.getDatasetMeta(n),o=i.type||t.config.type;if(a.type&&a.type!==o&&(t.destroyDatasetMeta(n),a=t.getDatasetMeta(n)),a.type=o,a.controller)a.controller.updateIndex(n),a.controller.linkScales();else{var r=ue[a.type];if(void 0===r)throw new Error('"'+a.type+'" is not a chart type.');a.controller=new r(t,n),e.push(a.controller)}},t),e},resetElements:function(){var t=this;ut.each(t.data.datasets,function(e,i){t.getDatasetMeta(i).controller.reset()},t)},reset:function(){this.resetElements(),this.tooltip.initialize()},update:function(t){var e,i,n=this;if(t&&"object"==typeof t||(t={duration:t,lazy:arguments[1]}),i=(e=n).options,ut.each(e.scales,function(t){ke.removeBox(e,t)}),i=ei(st.global,st[e.config.type],i),e.options=e.config.options=i,e.ensureScalesHaveIDs(),e.buildOrUpdateScales(),e.tooltip._options=i.tooltips,e.tooltip.initialize(),Ee._invalidate(n),!1!==Ee.notify(n,"beforeUpdate")){n.tooltip._data=n.data;var a=n.buildOrUpdateControllers();ut.each(n.data.datasets,function(t,e){n.getDatasetMeta(e).controller.buildOrUpdateElements()},n),n.updateLayout(),n.options.animation&&n.options.animation.duration&&ut.each(a,function(t){t.reset()}),n.updateDatasets(),n.tooltip.initialize(),n.lastActive=[],Ee.notify(n,"afterUpdate"),n._bufferedRender?n._bufferedRequest={duration:t.duration,easing:t.easing,lazy:t.lazy}:n.render(t)}},updateLayout:function(){!1!==Ee.notify(this,"beforeLayout")&&(ke.update(this,this.width,this.height),Ee.notify(this,"afterScaleUpdate"),Ee.notify(this,"afterLayout"))},updateDatasets:function(){if(!1!==Ee.notify(this,"beforeDatasetsUpdate")){for(var t=0,e=this.data.datasets.length;t<e;++t)this.updateDataset(t);Ee.notify(this,"afterDatasetsUpdate")}},updateDataset:function(t){var e=this.getDatasetMeta(t),i={meta:e,index:t};!1!==Ee.notify(this,"beforeDatasetUpdate",[i])&&(e.controller.update(),Ee.notify(this,"afterDatasetUpdate",[i]))},render:function(t){var e=this;t&&"object"==typeof t||(t={duration:t,lazy:arguments[1]});var i=e.options.animation,n=Qe(t.duration,i&&i.duration),a=t.lazy;if(!1!==Ee.notify(e,"beforeRender")){var o=function(t){Ee.notify(e,"afterRender"),ut.callback(i&&i.onComplete,[t],e)};if(i&&n){var r=new vt({numSteps:n/16.66,easing:t.easing||i.easing,render:function(t,e){var i=ut.easing.effects[e.easing],n=e.currentStep,a=n/e.numSteps;t.draw(i(a),a,n)},onAnimationProgress:i.onProgress,onAnimationComplete:o});bt.addAnimation(e,r,n,a)}else e.draw(),o(new vt({numSteps:0,chart:e}));return e}},draw:function(t){var e=this;e.clear(),ut.isNullOrUndef(t)&&(t=1),e.transition(t),e.width<=0||e.height<=0||!1!==Ee.notify(e,"beforeDraw",[t])&&(ut.each(e.boxes,function(t){t.draw(e.chartArea)},e),e.drawDatasets(t),e._drawTooltip(t),Ee.notify(e,"afterDraw",[t]))},transition:function(t){for(var e=0,i=(this.data.datasets||[]).length;e<i;++e)this.isDatasetVisible(e)&&this.getDatasetMeta(e).controller.transition(t);this.tooltip.transition(t)},drawDatasets:function(t){var e=this;if(!1!==Ee.notify(e,"beforeDatasetsDraw",[t])){for(var i=(e.data.datasets||[]).length-1;i>=0;--i)e.isDatasetVisible(i)&&e.drawDataset(i,t);Ee.notify(e,"afterDatasetsDraw",[t])}},drawDataset:function(t,e){var i=this.getDatasetMeta(t),n={meta:i,index:t,easingValue:e};!1!==Ee.notify(this,"beforeDatasetDraw",[n])&&(i.controller.draw(e),Ee.notify(this,"afterDatasetDraw",[n]))},_drawTooltip:function(t){var e=this.tooltip,i={tooltip:e,easingValue:t};!1!==Ee.notify(this,"beforeTooltipDraw",[i])&&(e.draw(),Ee.notify(this,"afterTooltipDraw",[i]))},getElementAtEvent:function(t){return ve.modes.single(this,t)},getElementsAtEvent:function(t){return ve.modes.label(this,t,{intersect:!0})},getElementsAtXAxis:function(t){return ve.modes["x-axis"](this,t,{intersect:!0})},getElementsAtEventForMode:function(t,e,i){var n=ve.modes[e];return"function"==typeof n?n(this,t,i):[]},getDatasetAtEvent:function(t){return ve.modes.dataset(this,t,{intersect:!0})},getDatasetMeta:function(t){var e=this.data.datasets[t];e._meta||(e._meta={});var i=e._meta[this.id];return i||(i=e._meta[this.id]={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null}),i},getVisibleDatasetCount:function(){for(var t=0,e=0,i=this.data.datasets.length;e<i;++e)this.isDatasetVisible(e)&&t++;return t},isDatasetVisible:function(t){var e=this.getDatasetMeta(t);return"boolean"==typeof e.hidden?!e.hidden:!this.data.datasets[t].hidden},generateLegend:function(){return this.options.legendCallback(this)},destroyDatasetMeta:function(t){var e=this.id,i=this.data.datasets[t],n=i._meta&&i._meta[e];n&&(n.controller.destroy(),delete i._meta[e])},destroy:function(){var t,e,i=this,n=i.canvas;for(i.stop(),t=0,e=i.data.datasets.length;t<e;++t)i.destroyDatasetMeta(t);n&&(i.unbindEvents(),ut.canvas.clear(i),Ve.releaseContext(i.ctx),i.canvas=null,i.ctx=null),Ee.notify(i,"destroy"),delete ni.instances[i.id]},toBase64Image:function(){return this.canvas.toDataURL.apply(this.canvas,arguments)},initToolTip:function(){var t=this;t.tooltip=new Je({_chart:t,_chartInstance:t,_data:t.data,_options:t.options.tooltips},t)},bindEvents:function(){var t=this,e=t._listeners={},i=function(){t.eventHandler.apply(t,arguments)};ut.each(t.options.events,function(n){Ve.addEventListener(t,n,i),e[n]=i}),t.options.responsive&&(i=function(){t.resize()},Ve.addEventListener(t,"resize",i),e.resize=i)},unbindEvents:function(){var t=this,e=t._listeners;e&&(delete t._listeners,ut.each(e,function(e,i){Ve.removeEventListener(t,i,e)}))},updateHoverStyle:function(t,e,i){var n,a,o,r=i?"setHoverStyle":"removeHoverStyle";for(a=0,o=t.length;a<o;++a)(n=t[a])&&this.getDatasetMeta(n._datasetIndex).controller[r](n)},eventHandler:function(t){var e=this,i=e.tooltip;if(!1!==Ee.notify(e,"beforeEvent",[t])){e._bufferedRender=!0,e._bufferedRequest=null;var n=e.handleEvent(t);i&&(n=i._start?i.handleEvent(t):n|i.handleEvent(t)),Ee.notify(e,"afterEvent",[t]);var a=e._bufferedRequest;return a?e.render(a):n&&!e.animating&&(e.stop(),e.render({duration:e.options.hover.animationDuration,lazy:!0})),e._bufferedRender=!1,e._bufferedRequest=null,e}},handleEvent:function(t){var e,i=this,n=i.options||{},a=n.hover;return i.lastActive=i.lastActive||[],"mouseout"===t.type?i.active=[]:i.active=i.getElementsAtEventForMode(t,a.mode,a),ut.callback(n.onHover||n.hover.onHover,[t.native,i.active],i),"mouseup"!==t.type&&"click"!==t.type||n.onClick&&n.onClick.call(i,t.native,i.active),i.lastActive.length&&i.updateHoverStyle(i.lastActive,a.mode,!1),i.active.length&&a.mode&&i.updateHoverStyle(i.active,a.mode,!0),e=!ut.arrayEquals(i.active,i.lastActive),i.lastActive=i.active,e}}),ni.instances={};var ai=ni;ni.Controller=ni,ni.types={},ut.configMerge=ei,ut.scaleMerge=ti;function oi(){throw new Error("This method is not implemented: either no adapter can be found or an incomplete integration was provided.")}function ri(t){this.options=t||{}}ut.extend(ri.prototype,{formats:oi,parse:oi,format:oi,add:oi,diff:oi,startOf:oi,endOf:oi,_create:function(t){return t}}),ri.override=function(t){ut.extend(ri.prototype,t)};var si={_date:ri},li={formatters:{values:function(t){return ut.isArray(t)?t:""+t},linear:function(t,e,i){var n=i.length>3?i[2]-i[1]:i[1]-i[0];Math.abs(n)>1&&t!==Math.floor(t)&&(n=t-Math.floor(t));var a=ut.log10(Math.abs(n)),o="";if(0!==t)if(Math.max(Math.abs(i[0]),Math.abs(i[i.length-1]))<1e-4){var r=ut.log10(Math.abs(t));o=t.toExponential(Math.floor(r)-Math.floor(a))}else{var s=-1*Math.floor(a);s=Math.max(Math.min(s,20),0),o=t.toFixed(s)}else o="0";return o},logarithmic:function(t,e,i){var n=t/Math.pow(10,Math.floor(ut.log10(t)));return 0===t?"0":1===n||2===n||5===n||0===e||e===i.length-1?t.toExponential():""}}},di=ut.valueOrDefault,ui=ut.valueAtIndexOrDefault;function hi(t){var e,i,n=[];for(e=0,i=t.length;e<i;++e)n.push(t[e].label);return n}function ci(t,e,i){return ut.isArray(e)?ut.longestText(t,i,e):t.measureText(e).width}st._set("scale",{display:!0,position:"left",offset:!1,gridLines:{display:!0,color:"rgba(0, 0, 0, 0.1)",lineWidth:1,drawBorder:!0,drawOnChartArea:!0,drawTicks:!0,tickMarkLength:10,zeroLineWidth:1,zeroLineColor:"rgba(0,0,0,0.25)",zeroLineBorderDash:[],zeroLineBorderDashOffset:0,offsetGridLines:!1,borderDash:[],borderDashOffset:0},scaleLabel:{display:!1,labelString:"",padding:{top:4,bottom:4}},ticks:{beginAtZero:!1,minRotation:0,maxRotation:50,mirror:!1,padding:0,reverse:!1,display:!0,autoSkip:!0,autoSkipPadding:0,labelOffset:0,callback:li.formatters.values,minor:{},major:{}}});var fi=pt.extend({getPadding:function(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}},getTicks:function(){return this._ticks},mergeTicksOptions:function(){var t=this.options.ticks;for(var e in!1===t.minor&&(t.minor={display:!1}),!1===t.major&&(t.major={display:!1}),t)"major"!==e&&"minor"!==e&&(void 0===t.minor[e]&&(t.minor[e]=t[e]),void 0===t.major[e]&&(t.major[e]=t[e]))},beforeUpdate:function(){ut.callback(this.options.beforeUpdate,[this])},update:function(t,e,i){var n,a,o,r,s,l,d=this;for(d.beforeUpdate(),d.maxWidth=t,d.maxHeight=e,d.margins=ut.extend({left:0,right:0,top:0,bottom:0},i),d._maxLabelLines=0,d.longestLabelWidth=0,d.longestTextCache=d.longestTextCache||{},d.beforeSetDimensions(),d.setDimensions(),d.afterSetDimensions(),d.beforeDataLimits(),d.determineDataLimits(),d.afterDataLimits(),d.beforeBuildTicks(),s=d.buildTicks()||[],s=d.afterBuildTicks(s)||s,d.beforeTickToLabelConversion(),o=d.convertTicksToLabels(s)||d.ticks,d.afterTickToLabelConversion(),d.ticks=o,n=0,a=o.length;n<a;++n)r=o[n],(l=s[n])?l.label=r:s.push(l={label:r,major:!1});return d._ticks=s,d.beforeCalculateTickRotation(),d.calculateTickRotation(),d.afterCalculateTickRotation(),d.beforeFit(),d.fit(),d.afterFit(),d.afterUpdate(),d.minSize},afterUpdate:function(){ut.callback(this.options.afterUpdate,[this])},beforeSetDimensions:function(){ut.callback(this.options.beforeSetDimensions,[this])},setDimensions:function(){var t=this;t.isHorizontal()?(t.width=t.maxWidth,t.left=0,t.right=t.width):(t.height=t.maxHeight,t.top=0,t.bottom=t.height),t.paddingLeft=0,t.paddingTop=0,t.paddingRight=0,t.paddingBottom=0},afterSetDimensions:function(){ut.callback(this.options.afterSetDimensions,[this])},beforeDataLimits:function(){ut.callback(this.options.beforeDataLimits,[this])},determineDataLimits:ut.noop,afterDataLimits:function(){ut.callback(this.options.afterDataLimits,[this])},beforeBuildTicks:function(){ut.callback(this.options.beforeBuildTicks,[this])},buildTicks:ut.noop,afterBuildTicks:function(t){var e=this;return ut.isArray(t)&&t.length?ut.callback(e.options.afterBuildTicks,[e,t]):(e.ticks=ut.callback(e.options.afterBuildTicks,[e,e.ticks])||e.ticks,t)},beforeTickToLabelConversion:function(){ut.callback(this.options.beforeTickToLabelConversion,[this])},convertTicksToLabels:function(){var t=this.options.ticks;this.ticks=this.ticks.map(t.userCallback||t.callback,this)},afterTickToLabelConversion:function(){ut.callback(this.options.afterTickToLabelConversion,[this])},beforeCalculateTickRotation:function(){ut.callback(this.options.beforeCalculateTickRotation,[this])},calculateTickRotation:function(){var t=this,e=t.ctx,i=t.options.ticks,n=hi(t._ticks),a=ut.options._parseFont(i);e.font=a.string;var o=i.minRotation||0;if(n.length&&t.options.display&&t.isHorizontal())for(var r,s=ut.longestText(e,a.string,n,t.longestTextCache),l=s,d=t.getPixelForTick(1)-t.getPixelForTick(0)-6;l>d&&o<i.maxRotation;){var u=ut.toRadians(o);if(r=Math.cos(u),Math.sin(u)*s>t.maxHeight){o--;break}o++,l=r*s}t.labelRotation=o},afterCalculateTickRotation:function(){ut.callback(this.options.afterCalculateTickRotation,[this])},beforeFit:function(){ut.callback(this.options.beforeFit,[this])},fit:function(){var t=this,e=t.minSize={width:0,height:0},i=hi(t._ticks),n=t.options,a=n.ticks,o=n.scaleLabel,r=n.gridLines,s=t._isVisible(),l=n.position,d=t.isHorizontal(),u=ut.options._parseFont,h=u(a),c=n.gridLines.tickMarkLength;if(e.width=d?t.isFullWidth()?t.maxWidth-t.margins.left-t.margins.right:t.maxWidth:s&&r.drawTicks?c:0,e.height=d?s&&r.drawTicks?c:0:t.maxHeight,o.display&&s){var f=u(o),g=ut.options.toPadding(o.padding),p=f.lineHeight+g.height;d?e.height+=p:e.width+=p}if(a.display&&s){var m=ut.longestText(t.ctx,h.string,i,t.longestTextCache),v=ut.numberOfLabelLines(i),b=.5*h.size,x=t.options.ticks.padding;if(t._maxLabelLines=v,t.longestLabelWidth=m,d){var y=ut.toRadians(t.labelRotation),k=Math.cos(y),w=Math.sin(y)*m+h.lineHeight*v+b;e.height=Math.min(t.maxHeight,e.height+w+x),t.ctx.font=h.string;var M,_,C=ci(t.ctx,i[0],h.string),S=ci(t.ctx,i[i.length-1],h.string),P=t.getPixelForTick(0)-t.left,I=t.right-t.getPixelForTick(i.length-1);0!==t.labelRotation?(M="bottom"===l?k*C:k*b,_="bottom"===l?k*b:k*S):(M=C/2,_=S/2),t.paddingLeft=Math.max(M-P,0)+3,t.paddingRight=Math.max(_-I,0)+3}else a.mirror?m=0:m+=x+b,e.width=Math.min(t.maxWidth,e.width+m),t.paddingTop=h.size/2,t.paddingBottom=h.size/2}t.handleMargins(),t.width=e.width,t.height=e.height},handleMargins:function(){var t=this;t.margins&&(t.paddingLeft=Math.max(t.paddingLeft-t.margins.left,0),t.paddingTop=Math.max(t.paddingTop-t.margins.top,0),t.paddingRight=Math.max(t.paddingRight-t.margins.right,0),t.paddingBottom=Math.max(t.paddingBottom-t.margins.bottom,0))},afterFit:function(){ut.callback(this.options.afterFit,[this])},isHorizontal:function(){return"top"===this.options.position||"bottom"===this.options.position},isFullWidth:function(){return this.options.fullWidth},getRightValue:function(t){if(ut.isNullOrUndef(t))return NaN;if(("number"==typeof t||t instanceof Number)&&!isFinite(t))return NaN;if(t)if(this.isHorizontal()){if(void 0!==t.x)return this.getRightValue(t.x)}else if(void 0!==t.y)return this.getRightValue(t.y);return t},getLabelForIndex:ut.noop,getPixelForValue:ut.noop,getValueForPixel:ut.noop,getPixelForTick:function(t){var e=this,i=e.options.offset;if(e.isHorizontal()){var n=(e.width-(e.paddingLeft+e.paddingRight))/Math.max(e._ticks.length-(i?0:1),1),a=n*t+e.paddingLeft;i&&(a+=n/2);var o=e.left+a;return o+=e.isFullWidth()?e.margins.left:0}var r=e.height-(e.paddingTop+e.paddingBottom);return e.top+t*(r/(e._ticks.length-1))},getPixelForDecimal:function(t){var e=this;if(e.isHorizontal()){var i=(e.width-(e.paddingLeft+e.paddingRight))*t+e.paddingLeft,n=e.left+i;return n+=e.isFullWidth()?e.margins.left:0}return e.top+t*e.height},getBasePixel:function(){return this.getPixelForValue(this.getBaseValue())},getBaseValue:function(){var t=this.min,e=this.max;return this.beginAtZero?0:t<0&&e<0?e:t>0&&e>0?t:0},_autoSkip:function(t){var e,i,n=this,a=n.isHorizontal(),o=n.options.ticks.minor,r=t.length,s=!1,l=o.maxTicksLimit,d=n._tickSize()*(r-1),u=a?n.width-(n.paddingLeft+n.paddingRight):n.height-(n.paddingTop+n.PaddingBottom),h=[];for(d>u&&(s=1+Math.floor(d/u)),r>l&&(s=Math.max(s,1+Math.floor(r/l))),e=0;e<r;e++)i=t[e],s>1&&e%s>0&&delete i.label,h.push(i);return h},_tickSize:function(){var t=this,e=t.isHorizontal(),i=t.options.ticks.minor,n=ut.toRadians(t.labelRotation),a=Math.abs(Math.cos(n)),o=Math.abs(Math.sin(n)),r=i.autoSkipPadding||0,s=t.longestLabelWidth+r||0,l=ut.options._parseFont(i),d=t._maxLabelLines*l.lineHeight+r||0;return e?d*a>s*o?s/a:d/o:d*o<s*a?d/a:s/o},_isVisible:function(){var t,e,i,n=this.chart,a=this.options.display;if("auto"!==a)return!!a;for(t=0,e=n.data.datasets.length;t<e;++t)if(n.isDatasetVisible(t)&&((i=n.getDatasetMeta(t)).xAxisID===this.id||i.yAxisID===this.id))return!0;return!1},draw:function(t){var e=this,i=e.options;if(e._isVisible()){var n,a,o,r=e.chart,s=e.ctx,l=st.global.defaultFontColor,d=i.ticks.minor,u=i.ticks.major||d,h=i.gridLines,c=i.scaleLabel,f=i.position,g=0!==e.labelRotation,p=d.mirror,m=e.isHorizontal(),v=ut.options._parseFont,b=d.display&&d.autoSkip?e._autoSkip(e.getTicks()):e.getTicks(),x=di(d.fontColor,l),y=v(d),k=y.lineHeight,w=di(u.fontColor,l),M=v(u),_=d.padding,C=d.labelOffset,S=h.drawTicks?h.tickMarkLength:0,P=di(c.fontColor,l),I=v(c),A=ut.options.toPadding(c.padding),D=ut.toRadians(e.labelRotation),T=[],F=h.drawBorder?ui(h.lineWidth,0,0):0,L=ut._alignPixel;"top"===f?(n=L(r,e.bottom,F),a=e.bottom-S,o=n-F/2):"bottom"===f?(n=L(r,e.top,F),a=n+F/2,o=e.top+S):"left"===f?(n=L(r,e.right,F),a=e.right-S,o=n-F/2):(n=L(r,e.left,F),a=n+F/2,o=e.left+S);if(ut.each(b,function(n,s){if(!ut.isNullOrUndef(n.label)){var l,d,u,c,v,b,x,y,w,M,P,I,A,R,O,z,B=n.label;s===e.zeroLineIndex&&i.offset===h.offsetGridLines?(l=h.zeroLineWidth,d=h.zeroLineColor,u=h.zeroLineBorderDash||[],c=h.zeroLineBorderDashOffset||0):(l=ui(h.lineWidth,s),d=ui(h.color,s),u=h.borderDash||[],c=h.borderDashOffset||0);var N=ut.isArray(B)?B.length:1,W=function(t,e,i){var n=t.getPixelForTick(e);return i&&(1===t.getTicks().length?n-=t.isHorizontal()?Math.max(n-t.left,t.right-n):Math.max(n-t.top,t.bottom-n):n-=0===e?(t.getPixelForTick(1)-n)/2:(n-t.getPixelForTick(e-1))/2),n}(e,s,h.offsetGridLines);if(m){var V=S+_;W<e.left-1e-7&&(d="rgba(0,0,0,0)"),v=x=w=P=L(r,W,l),b=a,y=o,A=e.getPixelForTick(s)+C,"top"===f?(M=L(r,t.top,F)+F/2,I=t.bottom,O=((g?1:.5)-N)*k,z=g?"left":"center",R=e.bottom-V):(M=t.top,I=L(r,t.bottom,F)-F/2,O=(g?0:.5)*k,z=g?"right":"center",R=e.top+V)}else{var E=(p?0:S)+_;W<e.top-1e-7&&(d="rgba(0,0,0,0)"),v=a,x=o,b=y=M=I=L(r,W,l),R=e.getPixelForTick(s)+C,O=(1-N)*k/2,"left"===f?(w=L(r,t.left,F)+F/2,P=t.right,z=p?"left":"right",A=e.right-E):(w=t.left,P=L(r,t.right,F)-F/2,z=p?"right":"left",A=e.left+E)}T.push({tx1:v,ty1:b,tx2:x,ty2:y,x1:w,y1:M,x2:P,y2:I,labelX:A,labelY:R,glWidth:l,glColor:d,glBorderDash:u,glBorderDashOffset:c,rotation:-1*D,label:B,major:n.major,textOffset:O,textAlign:z})}}),ut.each(T,function(t){var e=t.glWidth,i=t.glColor;if(h.display&&e&&i&&(s.save(),s.lineWidth=e,s.strokeStyle=i,s.setLineDash&&(s.setLineDash(t.glBorderDash),s.lineDashOffset=t.glBorderDashOffset),s.beginPath(),h.drawTicks&&(s.moveTo(t.tx1,t.ty1),s.lineTo(t.tx2,t.ty2)),h.drawOnChartArea&&(s.moveTo(t.x1,t.y1),s.lineTo(t.x2,t.y2)),s.stroke(),s.restore()),d.display){s.save(),s.translate(t.labelX,t.labelY),s.rotate(t.rotation),s.font=t.major?M.string:y.string,s.fillStyle=t.major?w:x,s.textBaseline="middle",s.textAlign=t.textAlign;var n=t.label,a=t.textOffset;if(ut.isArray(n))for(var o=0;o<n.length;++o)s.fillText(""+n[o],0,a),a+=k;else s.fillText(n,0,a);s.restore()}}),c.display){var R,O,z=0,B=I.lineHeight/2;if(m)R=e.left+(e.right-e.left)/2,O="bottom"===f?e.bottom-B-A.bottom:e.top+B+A.top;else{var N="left"===f;R=N?e.left+B+A.top:e.right-B-A.top,O=e.top+(e.bottom-e.top)/2,z=N?-.5*Math.PI:.5*Math.PI}s.save(),s.translate(R,O),s.rotate(z),s.textAlign="center",s.textBaseline="middle",s.fillStyle=P,s.font=I.string,s.fillText(c.labelString,0,0),s.restore()}if(F){var W,V,E,H,j=F,q=ui(h.lineWidth,b.length-1,0);m?(W=L(r,e.left,j)-j/2,V=L(r,e.right,q)+q/2,E=H=n):(E=L(r,e.top,j)-j/2,H=L(r,e.bottom,q)+q/2,W=V=n),s.lineWidth=F,s.strokeStyle=ui(h.color,0),s.beginPath(),s.moveTo(W,E),s.lineTo(V,H),s.stroke()}}}}),gi=fi.extend({getLabels:function(){var t=this.chart.data;return this.options.labels||(this.isHorizontal()?t.xLabels:t.yLabels)||t.labels},determineDataLimits:function(){var t,e=this,i=e.getLabels();e.minIndex=0,e.maxIndex=i.length-1,void 0!==e.options.ticks.min&&(t=i.indexOf(e.options.ticks.min),e.minIndex=-1!==t?t:e.minIndex),void 0!==e.options.ticks.max&&(t=i.indexOf(e.options.ticks.max),e.maxIndex=-1!==t?t:e.maxIndex),e.min=i[e.minIndex],e.max=i[e.maxIndex]},buildTicks:function(){var t=this,e=t.getLabels();t.ticks=0===t.minIndex&&t.maxIndex===e.length-1?e:e.slice(t.minIndex,t.maxIndex+1)},getLabelForIndex:function(t,e){var i=this,n=i.chart;return n.getDatasetMeta(e).controller._getValueScaleId()===i.id?i.getRightValue(n.data.datasets[e].data[t]):i.ticks[t-i.minIndex]},getPixelForValue:function(t,e){var i,n=this,a=n.options.offset,o=Math.max(n.maxIndex+1-n.minIndex-(a?0:1),1);if(null!=t&&(i=n.isHorizontal()?t.x:t.y),void 0!==i||void 0!==t&&isNaN(e)){t=i||t;var r=n.getLabels().indexOf(t);e=-1!==r?r:e}if(n.isHorizontal()){var s=n.width/o,l=s*(e-n.minIndex);return a&&(l+=s/2),n.left+l}var d=n.height/o,u=d*(e-n.minIndex);return a&&(u+=d/2),n.top+u},getPixelForTick:function(t){return this.getPixelForValue(this.ticks[t],t+this.minIndex,null)},getValueForPixel:function(t){var e=this,i=e.options.offset,n=Math.max(e._ticks.length-(i?0:1),1),a=e.isHorizontal(),o=(a?e.width:e.height)/n;return t-=a?e.left:e.top,i&&(t-=o/2),(t<=0?0:Math.round(t/o))+e.minIndex},getBasePixel:function(){return this.bottom}}),pi={position:"bottom"};gi._defaults=pi;var mi=ut.noop,vi=ut.isNullOrUndef;var bi=fi.extend({getRightValue:function(t){return"string"==typeof t?+t:fi.prototype.getRightValue.call(this,t)},handleTickRangeOptions:function(){var t=this,e=t.options.ticks;if(e.beginAtZero){var i=ut.sign(t.min),n=ut.sign(t.max);i<0&&n<0?t.max=0:i>0&&n>0&&(t.min=0)}var a=void 0!==e.min||void 0!==e.suggestedMin,o=void 0!==e.max||void 0!==e.suggestedMax;void 0!==e.min?t.min=e.min:void 0!==e.suggestedMin&&(null===t.min?t.min=e.suggestedMin:t.min=Math.min(t.min,e.suggestedMin)),void 0!==e.max?t.max=e.max:void 0!==e.suggestedMax&&(null===t.max?t.max=e.suggestedMax:t.max=Math.max(t.max,e.suggestedMax)),a!==o&&t.min>=t.max&&(a?t.max=t.min+1:t.min=t.max-1),t.min===t.max&&(t.max++,e.beginAtZero||t.min--)},getTickLimit:function(){var t,e=this.options.ticks,i=e.stepSize,n=e.maxTicksLimit;return i?t=Math.ceil(this.max/i)-Math.floor(this.min/i)+1:(t=this._computeTickLimit(),n=n||11),n&&(t=Math.min(n,t)),t},_computeTickLimit:function(){return Number.POSITIVE_INFINITY},handleDirectionalChanges:mi,buildTicks:function(){var t=this,e=t.options.ticks,i=t.getTickLimit(),n={maxTicks:i=Math.max(2,i),min:e.min,max:e.max,precision:e.precision,stepSize:ut.valueOrDefault(e.fixedStepSize,e.stepSize)},a=t.ticks=function(t,e){var i,n,a,o,r=[],s=t.stepSize,l=s||1,d=t.maxTicks-1,u=t.min,h=t.max,c=t.precision,f=e.min,g=e.max,p=ut.niceNum((g-f)/d/l)*l;if(p<1e-14&&vi(u)&&vi(h))return[f,g];(o=Math.ceil(g/p)-Math.floor(f/p))>d&&(p=ut.niceNum(o*p/d/l)*l),s||vi(c)?i=Math.pow(10,ut._decimalPlaces(p)):(i=Math.pow(10,c),p=Math.ceil(p*i)/i),n=Math.floor(f/p)*p,a=Math.ceil(g/p)*p,s&&(!vi(u)&&ut.almostWhole(u/p,p/1e3)&&(n=u),!vi(h)&&ut.almostWhole(h/p,p/1e3)&&(a=h)),o=(a-n)/p,o=ut.almostEquals(o,Math.round(o),p/1e3)?Math.round(o):Math.ceil(o),n=Math.round(n*i)/i,a=Math.round(a*i)/i,r.push(vi(u)?n:u);for(var m=1;m<o;++m)r.push(Math.round((n+m*p)*i)/i);return r.push(vi(h)?a:h),r}(n,t);t.handleDirectionalChanges(),t.max=ut.max(a),t.min=ut.min(a),e.reverse?(a.reverse(),t.start=t.max,t.end=t.min):(t.start=t.min,t.end=t.max)},convertTicksToLabels:function(){var t=this;t.ticksAsNumbers=t.ticks.slice(),t.zeroLineIndex=t.ticks.indexOf(0),fi.prototype.convertTicksToLabels.call(t)}}),xi={position:"left",ticks:{callback:li.formatters.linear}},yi=bi.extend({determineDataLimits:function(){var t=this,e=t.options,i=t.chart,n=i.data.datasets,a=t.isHorizontal();function o(e){return a?e.xAxisID===t.id:e.yAxisID===t.id}t.min=null,t.max=null;var r=e.stacked;if(void 0===r&&ut.each(n,function(t,e){if(!r){var n=i.getDatasetMeta(e);i.isDatasetVisible(e)&&o(n)&&void 0!==n.stack&&(r=!0)}}),e.stacked||r){var s={};ut.each(n,function(n,a){var r=i.getDatasetMeta(a),l=[r.type,void 0===e.stacked&&void 0===r.stack?a:"",r.stack].join(".");void 0===s[l]&&(s[l]={positiveValues:[],negativeValues:[]});var d=s[l].positiveValues,u=s[l].negativeValues;i.isDatasetVisible(a)&&o(r)&&ut.each(n.data,function(i,n){var a=+t.getRightValue(i);isNaN(a)||r.data[n].hidden||(d[n]=d[n]||0,u[n]=u[n]||0,e.relativePoints?d[n]=100:a<0?u[n]+=a:d[n]+=a)})}),ut.each(s,function(e){var i=e.positiveValues.concat(e.negativeValues),n=ut.min(i),a=ut.max(i);t.min=null===t.min?n:Math.min(t.min,n),t.max=null===t.max?a:Math.max(t.max,a)})}else ut.each(n,function(e,n){var a=i.getDatasetMeta(n);i.isDatasetVisible(n)&&o(a)&&ut.each(e.data,function(e,i){var n=+t.getRightValue(e);isNaN(n)||a.data[i].hidden||(null===t.min?t.min=n:n<t.min&&(t.min=n),null===t.max?t.max=n:n>t.max&&(t.max=n))})});t.min=isFinite(t.min)&&!isNaN(t.min)?t.min:0,t.max=isFinite(t.max)&&!isNaN(t.max)?t.max:1,this.handleTickRangeOptions()},_computeTickLimit:function(){var t;return this.isHorizontal()?Math.ceil(this.width/40):(t=ut.options._parseFont(this.options.ticks),Math.ceil(this.height/t.lineHeight))},handleDirectionalChanges:function(){this.isHorizontal()||this.ticks.reverse()},getLabelForIndex:function(t,e){return+this.getRightValue(this.chart.data.datasets[e].data[t])},getPixelForValue:function(t){var e=this,i=e.start,n=+e.getRightValue(t),a=e.end-i;return e.isHorizontal()?e.left+e.width/a*(n-i):e.bottom-e.height/a*(n-i)},getValueForPixel:function(t){var e=this,i=e.isHorizontal(),n=i?e.width:e.height,a=(i?t-e.left:e.bottom-t)/n;return e.start+(e.end-e.start)*a},getPixelForTick:function(t){return this.getPixelForValue(this.ticksAsNumbers[t])}}),ki=xi;yi._defaults=ki;var wi=ut.valueOrDefault;var Mi={position:"left",ticks:{callback:li.formatters.logarithmic}};function _i(t,e){return ut.isFinite(t)&&t>=0?t:e}var Ci=fi.extend({determineDataLimits:function(){var t=this,e=t.options,i=t.chart,n=i.data.datasets,a=t.isHorizontal();function o(e){return a?e.xAxisID===t.id:e.yAxisID===t.id}t.min=null,t.max=null,t.minNotZero=null;var r=e.stacked;if(void 0===r&&ut.each(n,function(t,e){if(!r){var n=i.getDatasetMeta(e);i.isDatasetVisible(e)&&o(n)&&void 0!==n.stack&&(r=!0)}}),e.stacked||r){var s={};ut.each(n,function(n,a){var r=i.getDatasetMeta(a),l=[r.type,void 0===e.stacked&&void 0===r.stack?a:"",r.stack].join(".");i.isDatasetVisible(a)&&o(r)&&(void 0===s[l]&&(s[l]=[]),ut.each(n.data,function(e,i){var n=s[l],a=+t.getRightValue(e);isNaN(a)||r.data[i].hidden||a<0||(n[i]=n[i]||0,n[i]+=a)}))}),ut.each(s,function(e){if(e.length>0){var i=ut.min(e),n=ut.max(e);t.min=null===t.min?i:Math.min(t.min,i),t.max=null===t.max?n:Math.max(t.max,n)}})}else ut.each(n,function(e,n){var a=i.getDatasetMeta(n);i.isDatasetVisible(n)&&o(a)&&ut.each(e.data,function(e,i){var n=+t.getRightValue(e);isNaN(n)||a.data[i].hidden||n<0||(null===t.min?t.min=n:n<t.min&&(t.min=n),null===t.max?t.max=n:n>t.max&&(t.max=n),0!==n&&(null===t.minNotZero||n<t.minNotZero)&&(t.minNotZero=n))})});this.handleTickRangeOptions()},handleTickRangeOptions:function(){var t=this,e=t.options.ticks;t.min=_i(e.min,t.min),t.max=_i(e.max,t.max),t.min===t.max&&(0!==t.min&&null!==t.min?(t.min=Math.pow(10,Math.floor(ut.log10(t.min))-1),t.max=Math.pow(10,Math.floor(ut.log10(t.max))+1)):(t.min=1,t.max=10)),null===t.min&&(t.min=Math.pow(10,Math.floor(ut.log10(t.max))-1)),null===t.max&&(t.max=0!==t.min?Math.pow(10,Math.floor(ut.log10(t.min))+1):10),null===t.minNotZero&&(t.min>0?t.minNotZero=t.min:t.max<1?t.minNotZero=Math.pow(10,Math.floor(ut.log10(t.max))):t.minNotZero=1)},buildTicks:function(){var t=this,e=t.options.ticks,i=!t.isHorizontal(),n={min:_i(e.min),max:_i(e.max)},a=t.ticks=function(t,e){var i,n,a=[],o=wi(t.min,Math.pow(10,Math.floor(ut.log10(e.min)))),r=Math.floor(ut.log10(e.max)),s=Math.ceil(e.max/Math.pow(10,r));0===o?(i=Math.floor(ut.log10(e.minNotZero)),n=Math.floor(e.minNotZero/Math.pow(10,i)),a.push(o),o=n*Math.pow(10,i)):(i=Math.floor(ut.log10(o)),n=Math.floor(o/Math.pow(10,i)));var l=i<0?Math.pow(10,Math.abs(i)):1;do{a.push(o),10==++n&&(n=1,l=++i>=0?1:l),o=Math.round(n*Math.pow(10,i)*l)/l}while(i<r||i===r&&n<s);var d=wi(t.max,o);return a.push(d),a}(n,t);t.max=ut.max(a),t.min=ut.min(a),e.reverse?(i=!i,t.start=t.max,t.end=t.min):(t.start=t.min,t.end=t.max),i&&a.reverse()},convertTicksToLabels:function(){this.tickValues=this.ticks.slice(),fi.prototype.convertTicksToLabels.call(this)},getLabelForIndex:function(t,e){return+this.getRightValue(this.chart.data.datasets[e].data[t])},getPixelForTick:function(t){return this.getPixelForValue(this.tickValues[t])},_getFirstTickValue:function(t){var e=Math.floor(ut.log10(t));return Math.floor(t/Math.pow(10,e))*Math.pow(10,e)},getPixelForValue:function(t){var e,i,n,a,o,r=this,s=r.options.ticks,l=s.reverse,d=ut.log10,u=r._getFirstTickValue(r.minNotZero),h=0;return t=+r.getRightValue(t),l?(n=r.end,a=r.start,o=-1):(n=r.start,a=r.end,o=1),r.isHorizontal()?(e=r.width,i=l?r.right:r.left):(e=r.height,o*=-1,i=l?r.top:r.bottom),t!==n&&(0===n&&(e-=h=wi(s.fontSize,st.global.defaultFontSize),n=u),0!==t&&(h+=e/(d(a)-d(n))*(d(t)-d(n))),i+=o*h),i},getValueForPixel:function(t){var e,i,n,a,o=this,r=o.options.ticks,s=r.reverse,l=ut.log10,d=o._getFirstTickValue(o.minNotZero);if(s?(i=o.end,n=o.start):(i=o.start,n=o.end),o.isHorizontal()?(e=o.width,a=s?o.right-t:t-o.left):(e=o.height,a=s?t-o.top:o.bottom-t),a!==i){if(0===i){var u=wi(r.fontSize,st.global.defaultFontSize);a-=u,e-=u,i=d}a*=l(n)-l(i),a/=e,a=Math.pow(10,l(i)+a)}return a}}),Si=Mi;Ci._defaults=Si;var Pi=ut.valueOrDefault,Ii=ut.valueAtIndexOrDefault,Ai=ut.options.resolve,Di={display:!0,animate:!0,position:"chartArea",angleLines:{display:!0,color:"rgba(0, 0, 0, 0.1)",lineWidth:1,borderDash:[],borderDashOffset:0},gridLines:{circular:!1},ticks:{showLabelBackdrop:!0,backdropColor:"rgba(255,255,255,0.75)",backdropPaddingY:2,backdropPaddingX:2,callback:li.formatters.linear},pointLabels:{display:!0,fontSize:10,callback:function(t){return t}}};function Ti(t){var e=t.options;return e.angleLines.display||e.pointLabels.display?t.chart.data.labels.length:0}function Fi(t){var e=t.ticks;return e.display&&t.display?Pi(e.fontSize,st.global.defaultFontSize)+2*e.backdropPaddingY:0}function Li(t,e,i,n,a){return t===n||t===a?{start:e-i/2,end:e+i/2}:t<n||t>a?{start:e-i,end:e}:{start:e,end:e+i}}function Ri(t){return 0===t||180===t?"center":t<180?"left":"right"}function Oi(t,e,i,n){var a,o,r=i.y+n/2;if(ut.isArray(e))for(a=0,o=e.length;a<o;++a)t.fillText(e[a],i.x,r),r+=n;else t.fillText(e,i.x,r)}function zi(t,e,i){90===t||270===t?i.y-=e.h/2:(t>270||t<90)&&(i.y-=e.h)}function Bi(t){return ut.isNumber(t)?t:0}var Ni=bi.extend({setDimensions:function(){var t=this;t.width=t.maxWidth,t.height=t.maxHeight,t.paddingTop=Fi(t.options)/2,t.xCenter=Math.floor(t.width/2),t.yCenter=Math.floor((t.height-t.paddingTop)/2),t.drawingArea=Math.min(t.height-t.paddingTop,t.width)/2},determineDataLimits:function(){var t=this,e=t.chart,i=Number.POSITIVE_INFINITY,n=Number.NEGATIVE_INFINITY;ut.each(e.data.datasets,function(a,o){if(e.isDatasetVisible(o)){var r=e.getDatasetMeta(o);ut.each(a.data,function(e,a){var o=+t.getRightValue(e);isNaN(o)||r.data[a].hidden||(i=Math.min(o,i),n=Math.max(o,n))})}}),t.min=i===Number.POSITIVE_INFINITY?0:i,t.max=n===Number.NEGATIVE_INFINITY?0:n,t.handleTickRangeOptions()},_computeTickLimit:function(){return Math.ceil(this.drawingArea/Fi(this.options))},convertTicksToLabels:function(){var t=this;bi.prototype.convertTicksToLabels.call(t),t.pointLabels=t.chart.data.labels.map(t.options.pointLabels.callback,t)},getLabelForIndex:function(t,e){return+this.getRightValue(this.chart.data.datasets[e].data[t])},fit:function(){var t=this.options;t.display&&t.pointLabels.display?function(t){var e,i,n,a=ut.options._parseFont(t.options.pointLabels),o={l:0,r:t.width,t:0,b:t.height-t.paddingTop},r={};t.ctx.font=a.string,t._pointLabelSizes=[];var s,l,d,u=Ti(t);for(e=0;e<u;e++){n=t.getPointPosition(e,t.drawingArea+5),s=t.ctx,l=a.lineHeight,d=t.pointLabels[e]||"",i=ut.isArray(d)?{w:ut.longestText(s,s.font,d),h:d.length*l}:{w:s.measureText(d).width,h:l},t._pointLabelSizes[e]=i;var h=t.getIndexAngle(e),c=ut.toDegrees(h)%360,f=Li(c,n.x,i.w,0,180),g=Li(c,n.y,i.h,90,270);f.start<o.l&&(o.l=f.start,r.l=h),f.end>o.r&&(o.r=f.end,r.r=h),g.start<o.t&&(o.t=g.start,r.t=h),g.end>o.b&&(o.b=g.end,r.b=h)}t.setReductions(t.drawingArea,o,r)}(this):this.setCenterPoint(0,0,0,0)},setReductions:function(t,e,i){var n=this,a=e.l/Math.sin(i.l),o=Math.max(e.r-n.width,0)/Math.sin(i.r),r=-e.t/Math.cos(i.t),s=-Math.max(e.b-(n.height-n.paddingTop),0)/Math.cos(i.b);a=Bi(a),o=Bi(o),r=Bi(r),s=Bi(s),n.drawingArea=Math.min(Math.floor(t-(a+o)/2),Math.floor(t-(r+s)/2)),n.setCenterPoint(a,o,r,s)},setCenterPoint:function(t,e,i,n){var a=this,o=a.width-e-a.drawingArea,r=t+a.drawingArea,s=i+a.drawingArea,l=a.height-a.paddingTop-n-a.drawingArea;a.xCenter=Math.floor((r+o)/2+a.left),a.yCenter=Math.floor((s+l)/2+a.top+a.paddingTop)},getIndexAngle:function(t){return t*(2*Math.PI/Ti(this))+(this.chart.options&&this.chart.options.startAngle?this.chart.options.startAngle:0)*Math.PI*2/360},getDistanceFromCenterForValue:function(t){var e=this;if(null===t)return 0;var i=e.drawingArea/(e.max-e.min);return e.options.ticks.reverse?(e.max-t)*i:(t-e.min)*i},getPointPosition:function(t,e){var i=this.getIndexAngle(t)-Math.PI/2;return{x:Math.cos(i)*e+this.xCenter,y:Math.sin(i)*e+this.yCenter}},getPointPositionForValue:function(t,e){return this.getPointPosition(t,this.getDistanceFromCenterForValue(e))},getBasePosition:function(){var t=this.min,e=this.max;return this.getPointPositionForValue(0,this.beginAtZero?0:t<0&&e<0?e:t>0&&e>0?t:0)},draw:function(){var t=this,e=t.options,i=e.gridLines,n=e.ticks;if(e.display){var a=t.ctx,o=this.getIndexAngle(0),r=ut.options._parseFont(n);(e.angleLines.display||e.pointLabels.display)&&function(t){var e=t.ctx,i=t.options,n=i.angleLines,a=i.gridLines,o=i.pointLabels,r=Pi(n.lineWidth,a.lineWidth),s=Pi(n.color,a.color),l=Fi(i);e.save(),e.lineWidth=r,e.strokeStyle=s,e.setLineDash&&(e.setLineDash(Ai([n.borderDash,a.borderDash,[]])),e.lineDashOffset=Ai([n.borderDashOffset,a.borderDashOffset,0]));var d=t.getDistanceFromCenterForValue(i.ticks.reverse?t.min:t.max),u=ut.options._parseFont(o);e.font=u.string,e.textBaseline="middle";for(var h=Ti(t)-1;h>=0;h--){if(n.display&&r&&s){var c=t.getPointPosition(h,d);e.beginPath(),e.moveTo(t.xCenter,t.yCenter),e.lineTo(c.x,c.y),e.stroke()}if(o.display){var f=0===h?l/2:0,g=t.getPointPosition(h,d+f+5),p=Ii(o.fontColor,h,st.global.defaultFontColor);e.fillStyle=p;var m=t.getIndexAngle(h),v=ut.toDegrees(m);e.textAlign=Ri(v),zi(v,t._pointLabelSizes[h],g),Oi(e,t.pointLabels[h]||"",g,u.lineHeight)}}e.restore()}(t),ut.each(t.ticks,function(e,s){if(s>0||n.reverse){var l=t.getDistanceFromCenterForValue(t.ticksAsNumbers[s]);if(i.display&&0!==s&&function(t,e,i,n){var a,o=t.ctx,r=e.circular,s=Ti(t),l=Ii(e.color,n-1),d=Ii(e.lineWidth,n-1);if((r||s)&&l&&d){if(o.save(),o.strokeStyle=l,o.lineWidth=d,o.setLineDash&&(o.setLineDash(e.borderDash||[]),o.lineDashOffset=e.borderDashOffset||0),o.beginPath(),r)o.arc(t.xCenter,t.yCenter,i,0,2*Math.PI);else{a=t.getPointPosition(0,i),o.moveTo(a.x,a.y);for(var u=1;u<s;u++)a=t.getPointPosition(u,i),o.lineTo(a.x,a.y)}o.closePath(),o.stroke(),o.restore()}}(t,i,l,s),n.display){var d=Pi(n.fontColor,st.global.defaultFontColor);if(a.font=r.string,a.save(),a.translate(t.xCenter,t.yCenter),a.rotate(o),n.showLabelBackdrop){var u=a.measureText(e).width;a.fillStyle=n.backdropColor,a.fillRect(-u/2-n.backdropPaddingX,-l-r.size/2-n.backdropPaddingY,u+2*n.backdropPaddingX,r.size+2*n.backdropPaddingY)}a.textAlign="center",a.textBaseline="middle",a.fillStyle=d,a.fillText(e,0,-l),a.restore()}}})}}}),Wi=Di;Ni._defaults=Wi;var Vi=ut.valueOrDefault,Ei=Number.MIN_SAFE_INTEGER||-9007199254740991,Hi=Number.MAX_SAFE_INTEGER||9007199254740991,ji={millisecond:{common:!0,size:1,steps:[1,2,5,10,20,50,100,250,500]},second:{common:!0,size:1e3,steps:[1,2,5,10,15,30]},minute:{common:!0,size:6e4,steps:[1,2,5,10,15,30]},hour:{common:!0,size:36e5,steps:[1,2,3,6,12]},day:{common:!0,size:864e5,steps:[1,2,5]},week:{common:!1,size:6048e5,steps:[1,2,3,4]},month:{common:!0,size:2628e6,steps:[1,2,3]},quarter:{common:!1,size:7884e6,steps:[1,2,3,4]},year:{common:!0,size:3154e7}},qi=Object.keys(ji);function Yi(t,e){return t-e}function Ui(t){var e,i,n,a={},o=[];for(e=0,i=t.length;e<i;++e)a[n=t[e]]||(a[n]=!0,o.push(n));return o}function Xi(t,e,i,n){var a=function(t,e,i){for(var n,a,o,r=0,s=t.length-1;r>=0&&r<=s;){if(a=t[(n=r+s>>1)-1]||null,o=t[n],!a)return{lo:null,hi:o};if(o[e]<i)r=n+1;else{if(!(a[e]>i))return{lo:a,hi:o};s=n-1}}return{lo:o,hi:null}}(t,e,i),o=a.lo?a.hi?a.lo:t[t.length-2]:t[0],r=a.lo?a.hi?a.hi:t[t.length-1]:t[1],s=r[e]-o[e],l=s?(i-o[e])/s:0,d=(r[n]-o[n])*l;return o[n]+d}function Ki(t,e){var i=t._adapter,n=t.options.time,a=n.parser,o=a||n.format,r=e;return"function"==typeof a&&(r=a(r)),ut.isFinite(r)||(r="string"==typeof o?i.parse(r,o):i.parse(r)),null!==r?+r:(a||"function"!=typeof o||(r=o(e),ut.isFinite(r)||(r=i.parse(r))),r)}function Gi(t,e){if(ut.isNullOrUndef(e))return null;var i=t.options.time,n=Ki(t,t.getRightValue(e));return null===n?n:(i.round&&(n=+t._adapter.startOf(n,i.round)),n)}function Zi(t){for(var e=qi.indexOf(t)+1,i=qi.length;e<i;++e)if(ji[qi[e]].common)return qi[e]}function $i(t,e,i,n){var a,o=t._adapter,r=t.options,s=r.time,l=s.unit||function(t,e,i,n){var a,o,r,s=qi.length;for(a=qi.indexOf(t);a<s-1;++a)if(r=(o=ji[qi[a]]).steps?o.steps[o.steps.length-1]:Hi,o.common&&Math.ceil((i-e)/(r*o.size))<=n)return qi[a];return qi[s-1]}(s.minUnit,e,i,n),d=Zi(l),u=Vi(s.stepSize,s.unitStepSize),h="week"===l&&s.isoWeekday,c=r.ticks.major.enabled,f=ji[l],g=e,p=i,m=[];for(u||(u=function(t,e,i,n){var a,o,r,s=e-t,l=ji[i],d=l.size,u=l.steps;if(!u)return Math.ceil(s/(n*d));for(a=0,o=u.length;a<o&&(r=u[a],!(Math.ceil(s/(d*r))<=n));++a);return r}(e,i,l,n)),h&&(g=+o.startOf(g,"isoWeek",h),p=+o.startOf(p,"isoWeek",h)),g=+o.startOf(g,h?"day":l),(p=+o.startOf(p,h?"day":l))<i&&(p=+o.add(p,1,l)),a=g,c&&d&&!h&&!s.round&&(a=+o.startOf(a,d),a=+o.add(a,~~((g-a)/(f.size*u))*u,l));a<p;a=+o.add(a,u,l))m.push(+a);return m.push(+a),m}var Ji=fi.extend({initialize:function(){this.mergeTicksOptions(),fi.prototype.initialize.call(this)},update:function(){var t=this.options,e=t.time||(t.time={}),i=this._adapter=new si._date(t.adapters.date);return e.format&&console.warn("options.time.format is deprecated and replaced by options.time.parser."),ut.mergeIf(e.displayFormats,i.formats()),fi.prototype.update.apply(this,arguments)},getRightValue:function(t){return t&&void 0!==t.t&&(t=t.t),fi.prototype.getRightValue.call(this,t)},determineDataLimits:function(){var t,e,i,n,a,o,r=this,s=r.chart,l=r._adapter,d=r.options.time,u=d.unit||"day",h=Hi,c=Ei,f=[],g=[],p=[],m=s.data.labels||[];for(t=0,i=m.length;t<i;++t)p.push(Gi(r,m[t]));for(t=0,i=(s.data.datasets||[]).length;t<i;++t)if(s.isDatasetVisible(t))if(a=s.data.datasets[t].data,ut.isObject(a[0]))for(g[t]=[],e=0,n=a.length;e<n;++e)o=Gi(r,a[e]),f.push(o),g[t][e]=o;else{for(e=0,n=p.length;e<n;++e)f.push(p[e]);g[t]=p.slice(0)}else g[t]=[];p.length&&(p=Ui(p).sort(Yi),h=Math.min(h,p[0]),c=Math.max(c,p[p.length-1])),f.length&&(f=Ui(f).sort(Yi),h=Math.min(h,f[0]),c=Math.max(c,f[f.length-1])),h=Gi(r,d.min)||h,c=Gi(r,d.max)||c,h=h===Hi?+l.startOf(Date.now(),u):h,c=c===Ei?+l.endOf(Date.now(),u)+1:c,r.min=Math.min(h,c),r.max=Math.max(h+1,c),r._horizontal=r.isHorizontal(),r._table=[],r._timestamps={data:f,datasets:g,labels:p}},buildTicks:function(){var t,e,i,n=this,a=n.min,o=n.max,r=n.options,s=r.time,l=[],d=[];switch(r.ticks.source){case"data":l=n._timestamps.data;break;case"labels":l=n._timestamps.labels;break;case"auto":default:l=$i(n,a,o,n.getLabelCapacity(a))}for("ticks"===r.bounds&&l.length&&(a=l[0],o=l[l.length-1]),a=Gi(n,s.min)||a,o=Gi(n,s.max)||o,t=0,e=l.length;t<e;++t)(i=l[t])>=a&&i<=o&&d.push(i);return n.min=a,n.max=o,n._unit=s.unit||function(t,e,i,n,a){var o,r;for(o=qi.length-1;o>=qi.indexOf(i);o--)if(r=qi[o],ji[r].common&&t._adapter.diff(a,n,r)>=e.length)return r;return qi[i?qi.indexOf(i):0]}(n,d,s.minUnit,n.min,n.max),n._majorUnit=Zi(n._unit),n._table=function(t,e,i,n){if("linear"===n||!t.length)return[{time:e,pos:0},{time:i,pos:1}];var a,o,r,s,l,d=[],u=[e];for(a=0,o=t.length;a<o;++a)(s=t[a])>e&&s<i&&u.push(s);for(u.push(i),a=0,o=u.length;a<o;++a)l=u[a+1],r=u[a-1],s=u[a],void 0!==r&&void 0!==l&&Math.round((l+r)/2)===s||d.push({time:s,pos:a/(o-1)});return d}(n._timestamps.data,a,o,r.distribution),n._offsets=function(t,e,i,n,a){var o,r,s=0,l=0;return a.offset&&e.length&&(a.time.min||(o=Xi(t,"time",e[0],"pos"),s=1===e.length?1-o:(Xi(t,"time",e[1],"pos")-o)/2),a.time.max||(r=Xi(t,"time",e[e.length-1],"pos"),l=1===e.length?r:(r-Xi(t,"time",e[e.length-2],"pos"))/2)),{start:s,end:l}}(n._table,d,0,0,r),r.ticks.reverse&&d.reverse(),function(t,e,i){var n,a,o,r,s=[];for(n=0,a=e.length;n<a;++n)o=e[n],r=!!i&&o===+t._adapter.startOf(o,i),s.push({value:o,major:r});return s}(n,d,n._majorUnit)},getLabelForIndex:function(t,e){var i=this,n=i._adapter,a=i.chart.data,o=i.options.time,r=a.labels&&t<a.labels.length?a.labels[t]:"",s=a.datasets[e].data[t];return ut.isObject(s)&&(r=i.getRightValue(s)),o.tooltipFormat?n.format(Ki(i,r),o.tooltipFormat):"string"==typeof r?r:n.format(Ki(i,r),o.displayFormats.datetime)},tickFormatFunction:function(t,e,i,n){var a=this._adapter,o=this.options,r=o.time.displayFormats,s=r[this._unit],l=this._majorUnit,d=r[l],u=+a.startOf(t,l),h=o.ticks.major,c=h.enabled&&l&&d&&t===u,f=a.format(t,n||(c?d:s)),g=c?h:o.ticks.minor,p=Vi(g.callback,g.userCallback);return p?p(f,e,i):f},convertTicksToLabels:function(t){var e,i,n=[];for(e=0,i=t.length;e<i;++e)n.push(this.tickFormatFunction(t[e].value,e,t));return n},getPixelForOffset:function(t){var e=this,i=e.options.ticks.reverse,n=e._horizontal?e.width:e.height,a=e._horizontal?i?e.right:e.left:i?e.bottom:e.top,o=Xi(e._table,"time",t,"pos"),r=n*(e._offsets.start+o)/(e._offsets.start+1+e._offsets.end);return i?a-r:a+r},getPixelForValue:function(t,e,i){var n=null;if(void 0!==e&&void 0!==i&&(n=this._timestamps.datasets[i][e]),null===n&&(n=Gi(this,t)),null!==n)return this.getPixelForOffset(n)},getPixelForTick:function(t){var e=this.getTicks();return t>=0&&t<e.length?this.getPixelForOffset(e[t].value):null},getValueForPixel:function(t){var e=this,i=e._horizontal?e.width:e.height,n=e._horizontal?e.left:e.top,a=(i?(t-n)/i:0)*(e._offsets.start+1+e._offsets.start)-e._offsets.end,o=Xi(e._table,"pos",a,"time");return e._adapter._create(o)},getLabelWidth:function(t){var e=this.options.ticks,i=this.ctx.measureText(t).width,n=ut.toRadians(e.maxRotation),a=Math.cos(n),o=Math.sin(n);return i*a+Vi(e.fontSize,st.global.defaultFontSize)*o},getLabelCapacity:function(t){var e=this,i=e.options.time.displayFormats.millisecond,n=e.tickFormatFunction(t,0,[],i),a=e.getLabelWidth(n),o=e.isHorizontal()?e.width:e.height,r=Math.floor(o/a);return r>0?r:1}}),Qi={position:"bottom",distribution:"linear",bounds:"data",adapters:{},time:{parser:!1,format:!1,unit:!1,round:!1,displayFormat:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{autoSkip:!1,source:"auto",major:{enabled:!1}}};Ji._defaults=Qi;var tn={category:gi,linear:yi,logarithmic:Ci,radialLinear:Ni,time:Ji},en={datetime:"MMM D, YYYY, h:mm:ss a",millisecond:"h:mm:ss.SSS a",second:"h:mm:ss a",minute:"h:mm a",hour:"hA",day:"MMM D",week:"ll",month:"MMM YYYY",quarter:"[Q]Q - YYYY",year:"YYYY"};si._date.override("function"==typeof t?{_id:"moment",formats:function(){return en},parse:function(e,i){return"string"==typeof e&&"string"==typeof i?e=t(e,i):e instanceof t||(e=t(e)),e.isValid()?e.valueOf():null},format:function(e,i){return t(e).format(i)},add:function(e,i,n){return t(e).add(i,n).valueOf()},diff:function(e,i,n){return t.duration(t(e).diff(t(i))).as(n)},startOf:function(e,i,n){return e=t(e),"isoWeek"===i?e.isoWeekday(n).valueOf():e.startOf(i).valueOf()},endOf:function(e,i){return t(e).endOf(i).valueOf()},_create:function(e){return t(e)}}:{}),st._set("global",{plugins:{filler:{propagate:!0}}});var nn={dataset:function(t){var e=t.fill,i=t.chart,n=i.getDatasetMeta(e),a=n&&i.isDatasetVisible(e)&&n.dataset._children||[],o=a.length||0;return o?function(t,e){return e<o&&a[e]._view||null}:null},boundary:function(t){var e=t.boundary,i=e?e.x:null,n=e?e.y:null;return function(t){return{x:null===i?t.x:i,y:null===n?t.y:n}}}};function an(t,e,i){var n,a=t._model||{},o=a.fill;if(void 0===o&&(o=!!a.backgroundColor),!1===o||null===o)return!1;if(!0===o)return"origin";if(n=parseFloat(o,10),isFinite(n)&&Math.floor(n)===n)return"-"!==o[0]&&"+"!==o[0]||(n=e+n),!(n===e||n<0||n>=i)&&n;switch(o){case"bottom":return"start";case"top":return"end";case"zero":return"origin";case"origin":case"start":case"end":return o;default:return!1}}function on(t){var e,i=t.el._model||{},n=t.el._scale||{},a=t.fill,o=null;if(isFinite(a))return null;if("start"===a?o=void 0===i.scaleBottom?n.bottom:i.scaleBottom:"end"===a?o=void 0===i.scaleTop?n.top:i.scaleTop:void 0!==i.scaleZero?o=i.scaleZero:n.getBasePosition?o=n.getBasePosition():n.getBasePixel&&(o=n.getBasePixel()),null!=o){if(void 0!==o.x&&void 0!==o.y)return o;if(ut.isFinite(o))return{x:(e=n.isHorizontal())?o:null,y:e?null:o}}return null}function rn(t,e,i){var n,a=t[e].fill,o=[e];if(!i)return a;for(;!1!==a&&-1===o.indexOf(a);){if(!isFinite(a))return a;if(!(n=t[a]))return!1;if(n.visible)return a;o.push(a),a=n.fill}return!1}function sn(t){var e=t.fill,i="dataset";return!1===e?null:(isFinite(e)||(i="boundary"),nn[i](t))}function ln(t){return t&&!t.skip}function dn(t,e,i,n,a){var o;if(n&&a){for(t.moveTo(e[0].x,e[0].y),o=1;o<n;++o)ut.canvas.lineTo(t,e[o-1],e[o]);for(t.lineTo(i[a-1].x,i[a-1].y),o=a-1;o>0;--o)ut.canvas.lineTo(t,i[o],i[o-1],!0)}}var un={id:"filler",afterDatasetsUpdate:function(t,e){var i,n,a,o,r=(t.data.datasets||[]).length,s=e.propagate,l=[];for(n=0;n<r;++n)o=null,(a=(i=t.getDatasetMeta(n)).dataset)&&a._model&&a instanceof Wt.Line&&(o={visible:t.isDatasetVisible(n),fill:an(a,n,r),chart:t,el:a}),i.$filler=o,l.push(o);for(n=0;n<r;++n)(o=l[n])&&(o.fill=rn(l,n,s),o.boundary=on(o),o.mapper=sn(o))},beforeDatasetDraw:function(t,e){var i=e.meta.$filler;if(i){var n=t.ctx,a=i.el,o=a._view,r=a._children||[],s=i.mapper,l=o.backgroundColor||st.global.defaultColor;s&&l&&r.length&&(ut.canvas.clipArea(n,t.chartArea),function(t,e,i,n,a,o){var r,s,l,d,u,h,c,f=e.length,g=n.spanGaps,p=[],m=[],v=0,b=0;for(t.beginPath(),r=0,s=f+!!o;r<s;++r)u=i(d=e[l=r%f]._view,l,n),h=ln(d),c=ln(u),h&&c?(v=p.push(d),b=m.push(u)):v&&b&&(g?(h&&p.push(d),c&&m.push(u)):(dn(t,p,m,v,b),v=b=0,p=[],m=[]));dn(t,p,m,v,b),t.closePath(),t.fillStyle=a,t.fill()}(n,r,s,o,l,a._loop),ut.canvas.unclipArea(n))}}},hn=ut.noop,cn=ut.valueOrDefault;function fn(t,e){return t.usePointStyle&&t.boxWidth>e?e:t.boxWidth}st._set("global",{legend:{display:!0,position:"top",fullWidth:!0,reverse:!1,weight:1e3,onClick:function(t,e){var i=e.datasetIndex,n=this.chart,a=n.getDatasetMeta(i);a.hidden=null===a.hidden?!n.data.datasets[i].hidden:null,n.update()},onHover:null,onLeave:null,labels:{boxWidth:40,padding:10,generateLabels:function(t){var e=t.data;return ut.isArray(e.datasets)?e.datasets.map(function(e,i){return{text:e.label,fillStyle:ut.isArray(e.backgroundColor)?e.backgroundColor[0]:e.backgroundColor,hidden:!t.isDatasetVisible(i),lineCap:e.borderCapStyle,lineDash:e.borderDash,lineDashOffset:e.borderDashOffset,lineJoin:e.borderJoinStyle,lineWidth:e.borderWidth,strokeStyle:e.borderColor,pointStyle:e.pointStyle,datasetIndex:i}},this):[]}}},legendCallback:function(t){var e=[];e.push('<ul class="'+t.id+'-legend">');for(var i=0;i<t.data.datasets.length;i++)e.push('<li><span style="background-color:'+t.data.datasets[i].backgroundColor+'"></span>'),t.data.datasets[i].label&&e.push(t.data.datasets[i].label),e.push("</li>");return e.push("</ul>"),e.join("")}});var gn=pt.extend({initialize:function(t){ut.extend(this,t),this.legendHitBoxes=[],this._hoveredItem=null,this.doughnutMode=!1},beforeUpdate:hn,update:function(t,e,i){var n=this;return n.beforeUpdate(),n.maxWidth=t,n.maxHeight=e,n.margins=i,n.beforeSetDimensions(),n.setDimensions(),n.afterSetDimensions(),n.beforeBuildLabels(),n.buildLabels(),n.afterBuildLabels(),n.beforeFit(),n.fit(),n.afterFit(),n.afterUpdate(),n.minSize},afterUpdate:hn,beforeSetDimensions:hn,setDimensions:function(){var t=this;t.isHorizontal()?(t.width=t.maxWidth,t.left=0,t.right=t.width):(t.height=t.maxHeight,t.top=0,t.bottom=t.height),t.paddingLeft=0,t.paddingTop=0,t.paddingRight=0,t.paddingBottom=0,t.minSize={width:0,height:0}},afterSetDimensions:hn,beforeBuildLabels:hn,buildLabels:function(){var t=this,e=t.options.labels||{},i=ut.callback(e.generateLabels,[t.chart],t)||[];e.filter&&(i=i.filter(function(i){return e.filter(i,t.chart.data)})),t.options.reverse&&i.reverse(),t.legendItems=i},afterBuildLabels:hn,beforeFit:hn,fit:function(){var t=this,e=t.options,i=e.labels,n=e.display,a=t.ctx,o=ut.options._parseFont(i),r=o.size,s=t.legendHitBoxes=[],l=t.minSize,d=t.isHorizontal();if(d?(l.width=t.maxWidth,l.height=n?10:0):(l.width=n?10:0,l.height=t.maxHeight),n)if(a.font=o.string,d){var u=t.lineWidths=[0],h=0;a.textAlign="left",a.textBaseline="top",ut.each(t.legendItems,function(t,e){var n=fn(i,r)+r/2+a.measureText(t.text).width;(0===e||u[u.length-1]+n+i.padding>l.width)&&(h+=r+i.padding,u[u.length-(e>0?0:1)]=i.padding),s[e]={left:0,top:0,width:n,height:r},u[u.length-1]+=n+i.padding}),l.height+=h}else{var c=i.padding,f=t.columnWidths=[],g=i.padding,p=0,m=0,v=r+c;ut.each(t.legendItems,function(t,e){var n=fn(i,r)+r/2+a.measureText(t.text).width;e>0&&m+v>l.height-c&&(g+=p+i.padding,f.push(p),p=0,m=0),p=Math.max(p,n),m+=v,s[e]={left:0,top:0,width:n,height:r}}),g+=p,f.push(p),l.width+=g}t.width=l.width,t.height=l.height},afterFit:hn,isHorizontal:function(){return"top"===this.options.position||"bottom"===this.options.position},draw:function(){var t=this,e=t.options,i=e.labels,n=st.global,a=n.defaultColor,o=n.elements.line,r=t.width,s=t.lineWidths;if(e.display){var l,d=t.ctx,u=cn(i.fontColor,n.defaultFontColor),h=ut.options._parseFont(i),c=h.size;d.textAlign="left",d.textBaseline="middle",d.lineWidth=.5,d.strokeStyle=u,d.fillStyle=u,d.font=h.string;var f=fn(i,c),g=t.legendHitBoxes,p=t.isHorizontal();l=p?{x:t.left+(r-s[0])/2+i.padding,y:t.top+i.padding,line:0}:{x:t.left+i.padding,y:t.top+i.padding,line:0};var m=c+i.padding;ut.each(t.legendItems,function(n,u){var h=d.measureText(n.text).width,v=f+c/2+h,b=l.x,x=l.y;p?u>0&&b+v+i.padding>t.left+t.minSize.width&&(x=l.y+=m,l.line++,b=l.x=t.left+(r-s[l.line])/2+i.padding):u>0&&x+m>t.top+t.minSize.height&&(b=l.x=b+t.columnWidths[l.line]+i.padding,x=l.y=t.top+i.padding,l.line++),function(t,i,n){if(!(isNaN(f)||f<=0)){d.save();var r=cn(n.lineWidth,o.borderWidth);if(d.fillStyle=cn(n.fillStyle,a),d.lineCap=cn(n.lineCap,o.borderCapStyle),d.lineDashOffset=cn(n.lineDashOffset,o.borderDashOffset),d.lineJoin=cn(n.lineJoin,o.borderJoinStyle),d.lineWidth=r,d.strokeStyle=cn(n.strokeStyle,a),d.setLineDash&&d.setLineDash(cn(n.lineDash,o.borderDash)),e.labels&&e.labels.usePointStyle){var s=f*Math.SQRT2/2,l=t+f/2,u=i+c/2;ut.canvas.drawPoint(d,n.pointStyle,s,l,u)}else 0!==r&&d.strokeRect(t,i,f,c),d.fillRect(t,i,f,c);d.restore()}}(b,x,n),g[u].left=b,g[u].top=x,function(t,e,i,n){var a=c/2,o=f+a+t,r=e+a;d.fillText(i.text,o,r),i.hidden&&(d.beginPath(),d.lineWidth=2,d.moveTo(o,r),d.lineTo(o+n,r),d.stroke())}(b,x,n,h),p?l.x+=v+i.padding:l.y+=m})}},_getLegendItemAt:function(t,e){var i,n,a,o=this;if(t>=o.left&&t<=o.right&&e>=o.top&&e<=o.bottom)for(a=o.legendHitBoxes,i=0;i<a.length;++i)if(t>=(n=a[i]).left&&t<=n.left+n.width&&e>=n.top&&e<=n.top+n.height)return o.legendItems[i];return null},handleEvent:function(t){var e,i=this,n=i.options,a="mouseup"===t.type?"click":t.type;if("mousemove"===a){if(!n.onHover&&!n.onLeave)return}else{if("click"!==a)return;if(!n.onClick)return}e=i._getLegendItemAt(t.x,t.y),"click"===a?e&&n.onClick&&n.onClick.call(i,t.native,e):(n.onLeave&&e!==i._hoveredItem&&(i._hoveredItem&&n.onLeave.call(i,t.native,i._hoveredItem),i._hoveredItem=e),n.onHover&&e&&n.onHover.call(i,t.native,e))}});function pn(t,e){var i=new gn({ctx:t.ctx,options:e,chart:t});ke.configure(t,i,e),ke.addBox(t,i),t.legend=i}var mn={id:"legend",_element:gn,beforeInit:function(t){var e=t.options.legend;e&&pn(t,e)},beforeUpdate:function(t){var e=t.options.legend,i=t.legend;e?(ut.mergeIf(e,st.global.legend),i?(ke.configure(t,i,e),i.options=e):pn(t,e)):i&&(ke.removeBox(t,i),delete t.legend)},afterEvent:function(t,e){var i=t.legend;i&&i.handleEvent(e)}},vn=ut.noop;st._set("global",{title:{display:!1,fontStyle:"bold",fullWidth:!0,padding:10,position:"top",text:"",weight:2e3}});var bn=pt.extend({initialize:function(t){ut.extend(this,t),this.legendHitBoxes=[]},beforeUpdate:vn,update:function(t,e,i){var n=this;return n.beforeUpdate(),n.maxWidth=t,n.maxHeight=e,n.margins=i,n.beforeSetDimensions(),n.setDimensions(),n.afterSetDimensions(),n.beforeBuildLabels(),n.buildLabels(),n.afterBuildLabels(),n.beforeFit(),n.fit(),n.afterFit(),n.afterUpdate(),n.minSize},afterUpdate:vn,beforeSetDimensions:vn,setDimensions:function(){var t=this;t.isHorizontal()?(t.width=t.maxWidth,t.left=0,t.right=t.width):(t.height=t.maxHeight,t.top=0,t.bottom=t.height),t.paddingLeft=0,t.paddingTop=0,t.paddingRight=0,t.paddingBottom=0,t.minSize={width:0,height:0}},afterSetDimensions:vn,beforeBuildLabels:vn,buildLabels:vn,afterBuildLabels:vn,beforeFit:vn,fit:function(){var t=this,e=t.options,i=e.display,n=t.minSize,a=ut.isArray(e.text)?e.text.length:1,o=ut.options._parseFont(e),r=i?a*o.lineHeight+2*e.padding:0;t.isHorizontal()?(n.width=t.maxWidth,n.height=r):(n.width=r,n.height=t.maxHeight),t.width=n.width,t.height=n.height},afterFit:vn,isHorizontal:function(){var t=this.options.position;return"top"===t||"bottom"===t},draw:function(){var t=this,e=t.ctx,i=t.options;if(i.display){var n,a,o,r=ut.options._parseFont(i),s=r.lineHeight,l=s/2+i.padding,d=0,u=t.top,h=t.left,c=t.bottom,f=t.right;e.fillStyle=ut.valueOrDefault(i.fontColor,st.global.defaultFontColor),e.font=r.string,t.isHorizontal()?(a=h+(f-h)/2,o=u+l,n=f-h):(a="left"===i.position?h+l:f-l,o=u+(c-u)/2,n=c-u,d=Math.PI*("left"===i.position?-.5:.5)),e.save(),e.translate(a,o),e.rotate(d),e.textAlign="center",e.textBaseline="middle";var g=i.text;if(ut.isArray(g))for(var p=0,m=0;m<g.length;++m)e.fillText(g[m],0,p,n),p+=s;else e.fillText(g,0,0,n);e.restore()}}});function xn(t,e){var i=new bn({ctx:t.ctx,options:e,chart:t});ke.configure(t,i,e),ke.addBox(t,i),t.titleBlock=i}var yn={},kn=un,wn=mn,Mn={id:"title",_element:bn,beforeInit:function(t){var e=t.options.title;e&&xn(t,e)},beforeUpdate:function(t){var e=t.options.title,i=t.titleBlock;e?(ut.mergeIf(e,st.global.title),i?(ke.configure(t,i,e),i.options=e):xn(t,e)):i&&(ke.removeBox(t,i),delete t.titleBlock)}};for(var _n in yn.filler=kn,yn.legend=wn,yn.title=Mn,ai.helpers=ut,function(){function t(t,e,i){var n;return"string"==typeof t?(n=parseInt(t,10),-1!==t.indexOf("%")&&(n=n/100*e.parentNode[i])):n=t,n}function e(t){return null!=t&&"none"!==t}function i(i,n,a){var o=document.defaultView,r=ut._getParentNode(i),s=o.getComputedStyle(i)[n],l=o.getComputedStyle(r)[n],d=e(s),u=e(l),h=Number.POSITIVE_INFINITY;return d||u?Math.min(d?t(s,i,a):h,u?t(l,r,a):h):"none"}ut.where=function(t,e){if(ut.isArray(t)&&Array.prototype.filter)return t.filter(e);var i=[];return ut.each(t,function(t){e(t)&&i.push(t)}),i},ut.findIndex=Array.prototype.findIndex?function(t,e,i){return t.findIndex(e,i)}:function(t,e,i){i=void 0===i?t:i;for(var n=0,a=t.length;n<a;++n)if(e.call(i,t[n],n,t))return n;return-1},ut.findNextWhere=function(t,e,i){ut.isNullOrUndef(i)&&(i=-1);for(var n=i+1;n<t.length;n++){var a=t[n];if(e(a))return a}},ut.findPreviousWhere=function(t,e,i){ut.isNullOrUndef(i)&&(i=t.length);for(var n=i-1;n>=0;n--){var a=t[n];if(e(a))return a}},ut.isNumber=function(t){return!isNaN(parseFloat(t))&&isFinite(t)},ut.almostEquals=function(t,e,i){return Math.abs(t-e)<i},ut.almostWhole=function(t,e){var i=Math.round(t);return i-e<t&&i+e>t},ut.max=function(t){return t.reduce(function(t,e){return isNaN(e)?t:Math.max(t,e)},Number.NEGATIVE_INFINITY)},ut.min=function(t){return t.reduce(function(t,e){return isNaN(e)?t:Math.min(t,e)},Number.POSITIVE_INFINITY)},ut.sign=Math.sign?function(t){return Math.sign(t)}:function(t){return 0==(t=+t)||isNaN(t)?t:t>0?1:-1},ut.log10=Math.log10?function(t){return Math.log10(t)}:function(t){var e=Math.log(t)*Math.LOG10E,i=Math.round(e);return t===Math.pow(10,i)?i:e},ut.toRadians=function(t){return t*(Math.PI/180)},ut.toDegrees=function(t){return t*(180/Math.PI)},ut._decimalPlaces=function(t){if(ut.isFinite(t)){for(var e=1,i=0;Math.round(t*e)/e!==t;)e*=10,i++;return i}},ut.getAngleFromPoint=function(t,e){var i=e.x-t.x,n=e.y-t.y,a=Math.sqrt(i*i+n*n),o=Math.atan2(n,i);return o<-.5*Math.PI&&(o+=2*Math.PI),{angle:o,distance:a}},ut.distanceBetweenPoints=function(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))},ut.aliasPixel=function(t){return t%2==0?0:.5},ut._alignPixel=function(t,e,i){var n=t.currentDevicePixelRatio,a=i/2;return Math.round((e-a)*n)/n+a},ut.splineCurve=function(t,e,i,n){var a=t.skip?e:t,o=e,r=i.skip?e:i,s=Math.sqrt(Math.pow(o.x-a.x,2)+Math.pow(o.y-a.y,2)),l=Math.sqrt(Math.pow(r.x-o.x,2)+Math.pow(r.y-o.y,2)),d=s/(s+l),u=l/(s+l),h=n*(d=isNaN(d)?0:d),c=n*(u=isNaN(u)?0:u);return{previous:{x:o.x-h*(r.x-a.x),y:o.y-h*(r.y-a.y)},next:{x:o.x+c*(r.x-a.x),y:o.y+c*(r.y-a.y)}}},ut.EPSILON=Number.EPSILON||1e-14,ut.splineCurveMonotone=function(t){var e,i,n,a,o,r,s,l,d,u=(t||[]).map(function(t){return{model:t._model,deltaK:0,mK:0}}),h=u.length;for(e=0;e<h;++e)if(!(n=u[e]).model.skip){if(i=e>0?u[e-1]:null,(a=e<h-1?u[e+1]:null)&&!a.model.skip){var c=a.model.x-n.model.x;n.deltaK=0!==c?(a.model.y-n.model.y)/c:0}!i||i.model.skip?n.mK=n.deltaK:!a||a.model.skip?n.mK=i.deltaK:this.sign(i.deltaK)!==this.sign(n.deltaK)?n.mK=0:n.mK=(i.deltaK+n.deltaK)/2}for(e=0;e<h-1;++e)n=u[e],a=u[e+1],n.model.skip||a.model.skip||(ut.almostEquals(n.deltaK,0,this.EPSILON)?n.mK=a.mK=0:(o=n.mK/n.deltaK,r=a.mK/n.deltaK,(l=Math.pow(o,2)+Math.pow(r,2))<=9||(s=3/Math.sqrt(l),n.mK=o*s*n.deltaK,a.mK=r*s*n.deltaK)));for(e=0;e<h;++e)(n=u[e]).model.skip||(i=e>0?u[e-1]:null,a=e<h-1?u[e+1]:null,i&&!i.model.skip&&(d=(n.model.x-i.model.x)/3,n.model.controlPointPreviousX=n.model.x-d,n.model.controlPointPreviousY=n.model.y-d*n.mK),a&&!a.model.skip&&(d=(a.model.x-n.model.x)/3,n.model.controlPointNextX=n.model.x+d,n.model.controlPointNextY=n.model.y+d*n.mK))},ut.nextItem=function(t,e,i){return i?e>=t.length-1?t[0]:t[e+1]:e>=t.length-1?t[t.length-1]:t[e+1]},ut.previousItem=function(t,e,i){return i?e<=0?t[t.length-1]:t[e-1]:e<=0?t[0]:t[e-1]},ut.niceNum=function(t,e){var i=Math.floor(ut.log10(t)),n=t/Math.pow(10,i);return(e?n<1.5?1:n<3?2:n<7?5:10:n<=1?1:n<=2?2:n<=5?5:10)*Math.pow(10,i)},ut.requestAnimFrame="undefined"==typeof window?function(t){t()}:window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){return window.setTimeout(t,1e3/60)},ut.getRelativePosition=function(t,e){var i,n,a=t.originalEvent||t,o=t.target||t.srcElement,r=o.getBoundingClientRect(),s=a.touches;s&&s.length>0?(i=s[0].clientX,n=s[0].clientY):(i=a.clientX,n=a.clientY);var l=parseFloat(ut.getStyle(o,"padding-left")),d=parseFloat(ut.getStyle(o,"padding-top")),u=parseFloat(ut.getStyle(o,"padding-right")),h=parseFloat(ut.getStyle(o,"padding-bottom")),c=r.right-r.left-l-u,f=r.bottom-r.top-d-h;return{x:i=Math.round((i-r.left-l)/c*o.width/e.currentDevicePixelRatio),y:n=Math.round((n-r.top-d)/f*o.height/e.currentDevicePixelRatio)}},ut.getConstraintWidth=function(t){return i(t,"max-width","clientWidth")},ut.getConstraintHeight=function(t){return i(t,"max-height","clientHeight")},ut._calculatePadding=function(t,e,i){return(e=ut.getStyle(t,e)).indexOf("%")>-1?i*parseInt(e,10)/100:parseInt(e,10)},ut._getParentNode=function(t){var e=t.parentNode;return e&&"[object ShadowRoot]"===e.toString()&&(e=e.host),e},ut.getMaximumWidth=function(t){var e=ut._getParentNode(t);if(!e)return t.clientWidth;var i=e.clientWidth,n=i-ut._calculatePadding(e,"padding-left",i)-ut._calculatePadding(e,"padding-right",i),a=ut.getConstraintWidth(t);return isNaN(a)?n:Math.min(n,a)},ut.getMaximumHeight=function(t){var e=ut._getParentNode(t);if(!e)return t.clientHeight;var i=e.clientHeight,n=i-ut._calculatePadding(e,"padding-top",i)-ut._calculatePadding(e,"padding-bottom",i),a=ut.getConstraintHeight(t);return isNaN(a)?n:Math.min(n,a)},ut.getStyle=function(t,e){return t.currentStyle?t.currentStyle[e]:document.defaultView.getComputedStyle(t,null).getPropertyValue(e)},ut.retinaScale=function(t,e){var i=t.currentDevicePixelRatio=e||"undefined"!=typeof window&&window.devicePixelRatio||1;if(1!==i){var n=t.canvas,a=t.height,o=t.width;n.height=a*i,n.width=o*i,t.ctx.scale(i,i),n.style.height||n.style.width||(n.style.height=a+"px",n.style.width=o+"px")}},ut.fontString=function(t,e,i){return e+" "+t+"px "+i},ut.longestText=function(t,e,i,n){var a=(n=n||{}).data=n.data||{},o=n.garbageCollect=n.garbageCollect||[];n.font!==e&&(a=n.data={},o=n.garbageCollect=[],n.font=e),t.font=e;var r=0;ut.each(i,function(e){null!=e&&!0!==ut.isArray(e)?r=ut.measureText(t,a,o,r,e):ut.isArray(e)&&ut.each(e,function(e){null==e||ut.isArray(e)||(r=ut.measureText(t,a,o,r,e))})});var s=o.length/2;if(s>i.length){for(var l=0;l<s;l++)delete a[o[l]];o.splice(0,s)}return r},ut.measureText=function(t,e,i,n,a){var o=e[a];return o||(o=e[a]=t.measureText(a).width,i.push(a)),o>n&&(n=o),n},ut.numberOfLabelLines=function(t){var e=1;return ut.each(t,function(t){ut.isArray(t)&&t.length>e&&(e=t.length)}),e},ut.color=X?function(t){return t instanceof CanvasGradient&&(t=st.global.defaultColor),X(t)}:function(t){return console.error("Color.js not found!"),t},ut.getHoverColor=function(t){return t instanceof CanvasPattern||t instanceof CanvasGradient?t:ut.color(t).saturate(.5).darken(.1).rgbString()}}(),ai._adapters=si,ai.Animation=vt,ai.animationService=bt,ai.controllers=ue,ai.DatasetController=Mt,ai.defaults=st,ai.Element=pt,ai.elements=Wt,ai.Interaction=ve,ai.layouts=ke,ai.platform=Ve,ai.plugins=Ee,ai.Scale=fi,ai.scaleService=He,ai.Ticks=li,ai.Tooltip=Je,ai.helpers.each(tn,function(t,e){ai.scaleService.registerScaleType(e,t,t._defaults)}),yn)yn.hasOwnProperty(_n)&&ai.plugins.register(yn[_n]);ai.platform.initialize();var Cn=ai;return"undefined"!=typeof window&&(window.Chart=ai),ai.Chart=ai,ai.Legend=yn.legend._element,ai.Title=yn.title._element,ai.pluginService=ai.plugins,ai.PluginBase=ai.Element.extend({}),ai.canvasHelpers=ai.helpers.canvas,ai.layoutService=ai.layouts,ai.LinearScaleBase=bi,ai.helpers.each(["Bar","Bubble","Doughnut","Line","PolarArea","Radar","Scatter"],function(t){ai[t]=function(e,i){return new ai(e,ai.helpers.merge(i||{},{type:t.charAt(0).toLowerCase()+t.slice(1)}))}}),Cn});
/*!
 * chartjs-plugin-datalabels v0.7.0
 * https://chartjs-plugin-datalabels.netlify.com
 * (c) 2019 Chart.js Contributors
 * Released under the MIT license
 */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("chart.js")):"function"==typeof define&&define.amd?define(["chart.js"],e):(t=t||self).ChartDataLabels=e(t.Chart)}(this,function(t){"use strict";var e=(t=t&&t.hasOwnProperty("default")?t.default:t).helpers,r=function(){if("undefined"!=typeof window){if(window.devicePixelRatio)return window.devicePixelRatio;var t=window.screen;if(t)return(t.deviceXDPI||1)/(t.logicalXDPI||1)}return 1}(),n={toTextLines:function(t){var r,n=[];for(t=[].concat(t);t.length;)"string"==typeof(r=t.pop())?n.unshift.apply(n,r.split("\n")):Array.isArray(r)?t.push.apply(t,r):e.isNullOrUndef(t)||n.unshift(""+r);return n},toFontString:function(t){return!t||e.isNullOrUndef(t.size)||e.isNullOrUndef(t.family)?null:(t.style?t.style+" ":"")+(t.weight?t.weight+" ":"")+t.size+"px "+t.family},textSize:function(t,e,r){var n,i=[].concat(e),o=i.length,a=t.font,l=0;for(t.font=r.string,n=0;n<o;++n)l=Math.max(t.measureText(i[n]).width,l);return t.font=a,{height:o*r.lineHeight,width:l}},parseFont:function(r){var i=t.defaults.global,o=e.valueOrDefault(r.size,i.defaultFontSize),a={family:e.valueOrDefault(r.family,i.defaultFontFamily),lineHeight:e.options.toLineHeight(r.lineHeight,o),size:o,style:e.valueOrDefault(r.style,i.defaultFontStyle),weight:e.valueOrDefault(r.weight,null),string:""};return a.string=n.toFontString(a),a},bound:function(t,e,r){return Math.max(t,Math.min(e,r))},arrayDiff:function(t,e){var r,n,i,o,a=t.slice(),l=[];for(r=0,i=e.length;r<i;++r)o=e[r],-1===(n=a.indexOf(o))?l.push([o,1]):a.splice(n,1);for(r=0,i=a.length;r<i;++r)l.push([a[r],-1]);return l},rasterize:function(t){return Math.round(t*r)/r}};function i(t,e){var r=e.x,n=e.y;if(null===r)return{x:0,y:-1};if(null===n)return{x:1,y:0};var i=t.x-r,o=t.y-n,a=Math.sqrt(i*i+o*o);return{x:a?i/a:0,y:a?o/a:-1}}var o=0,a=1,l=2,s=4,u=8;function f(t,e,r){var n=o;return t<r.left?n|=a:t>r.right&&(n|=l),e<r.top?n|=u:e>r.bottom&&(n|=s),n}function d(t,e){var r,n,i=e.anchor,o=t;return e.clamp&&(o=function(t,e){for(var r,n,i,o=t.x0,d=t.y0,c=t.x1,h=t.y1,x=f(o,d,e),y=f(c,h,e);x|y&&!(x&y);)(r=x||y)&u?(n=o+(c-o)*(e.top-d)/(h-d),i=e.top):r&s?(n=o+(c-o)*(e.bottom-d)/(h-d),i=e.bottom):r&l?(i=d+(h-d)*(e.right-o)/(c-o),n=e.right):r&a&&(i=d+(h-d)*(e.left-o)/(c-o),n=e.left),r===x?x=f(o=n,d=i,e):y=f(c=n,h=i,e);return{x0:o,x1:c,y0:d,y1:h}}(o,e.area)),"start"===i?(r=o.x0,n=o.y0):"end"===i?(r=o.x1,n=o.y1):(r=(o.x0+o.x1)/2,n=(o.y0+o.y1)/2),function(t,e,r,n,i){switch(i){case"center":r=n=0;break;case"bottom":r=0,n=1;break;case"right":r=1,n=0;break;case"left":r=-1,n=0;break;case"top":r=0,n=-1;break;case"start":r=-r,n=-n;break;case"end":break;default:i*=Math.PI/180,r=Math.cos(i),n=Math.sin(i)}return{x:t,y:e,vx:r,vy:n}}(r,n,t.vx,t.vy,e.align)}var c={arc:function(t,e){var r=(t.startAngle+t.endAngle)/2,n=Math.cos(r),i=Math.sin(r),o=t.innerRadius,a=t.outerRadius;return d({x0:t.x+n*o,y0:t.y+i*o,x1:t.x+n*a,y1:t.y+i*a,vx:n,vy:i},e)},point:function(t,e){var r=i(t,e.origin),n=r.x*t.radius,o=r.y*t.radius;return d({x0:t.x-n,y0:t.y-o,x1:t.x+n,y1:t.y+o,vx:r.x,vy:r.y},e)},rect:function(t,e){var r=i(t,e.origin),n=t.x,o=t.y,a=0,l=0;return t.horizontal?(n=Math.min(t.x,t.base),a=Math.abs(t.base-t.x)):(o=Math.min(t.y,t.base),l=Math.abs(t.base-t.y)),d({x0:n,y0:o+l,x1:n+a,y1:o,vx:r.x,vy:r.y},e)},fallback:function(t,e){var r=i(t,e.origin);return d({x0:t.x,y0:t.y,x1:t.x,y1:t.y,vx:r.x,vy:r.y},e)}},h=t.helpers,x=n.rasterize;function y(t){var e=t._model.horizontal,r=t._scale||e&&t._xScale||t._yScale;if(!r)return null;if(void 0!==r.xCenter&&void 0!==r.yCenter)return{x:r.xCenter,y:r.yCenter};var n=r.getBasePixel();return e?{x:n,y:null}:{x:null,y:n}}function v(t,e,r){var n=t.shadowBlur,i=r.stroked,o=x(r.x),a=x(r.y),l=x(r.w);i&&t.strokeText(e,o,a,l),r.filled&&(n&&i&&(t.shadowBlur=0),t.fillText(e,o,a,l),n&&i&&(t.shadowBlur=n))}var _=function(t,e,r,n){var i=this;i._config=t,i._index=n,i._model=null,i._rects=null,i._ctx=e,i._el=r};h.extend(_.prototype,{_modelize:function(e,r,i,o){var a,l=this._index,s=h.options.resolve,u=n.parseFont(s([i.font,{}],o,l)),f=s([i.color,t.defaults.global.defaultFontColor],o,l);return{align:s([i.align,"center"],o,l),anchor:s([i.anchor,"center"],o,l),area:o.chart.chartArea,backgroundColor:s([i.backgroundColor,null],o,l),borderColor:s([i.borderColor,null],o,l),borderRadius:s([i.borderRadius,0],o,l),borderWidth:s([i.borderWidth,0],o,l),clamp:s([i.clamp,!1],o,l),clip:s([i.clip,!1],o,l),color:f,display:e,font:u,lines:r,offset:s([i.offset,0],o,l),opacity:s([i.opacity,1],o,l),origin:y(this._el),padding:h.options.toPadding(s([i.padding,0],o,l)),positioner:(a=this._el,a instanceof t.elements.Arc?c.arc:a instanceof t.elements.Point?c.point:a instanceof t.elements.Rectangle?c.rect:c.fallback),rotation:s([i.rotation,0],o,l)*(Math.PI/180),size:n.textSize(this._ctx,r,u),textAlign:s([i.textAlign,"start"],o,l),textShadowBlur:s([i.textShadowBlur,0],o,l),textShadowColor:s([i.textShadowColor,f],o,l),textStrokeColor:s([i.textStrokeColor,f],o,l),textStrokeWidth:s([i.textStrokeWidth,0],o,l)}},update:function(t){var e,r,i,o=this,a=null,l=null,s=o._index,u=o._config,f=h.options.resolve([u.display,!0],t,s);f&&(e=t.dataset.data[s],r=h.valueOrDefault(h.callback(u.formatter,[e,t]),e),(i=h.isNullOrUndef(r)?[]:n.toTextLines(r)).length&&(l=function(t){var e=t.borderWidth||0,r=t.padding,n=t.size.height,i=t.size.width,o=-i/2,a=-n/2;return{frame:{x:o-r.left-e,y:a-r.top-e,w:i+r.width+2*e,h:n+r.height+2*e},text:{x:o,y:a,w:i,h:n}}}(a=o._modelize(f,i,u,t)))),o._model=a,o._rects=l},geometry:function(){return this._rects?this._rects.frame:{}},rotation:function(){return this._model?this._model.rotation:0},visible:function(){return this._model&&this._model.opacity},model:function(){return this._model},draw:function(t,e){var r,i=t.ctx,o=this._model,a=this._rects;this.visible()&&(i.save(),o.clip&&(r=o.area,i.beginPath(),i.rect(r.left,r.top,r.right-r.left,r.bottom-r.top),i.clip()),i.globalAlpha=n.bound(0,o.opacity,1),i.translate(x(e.x),x(e.y)),i.rotate(o.rotation),function(t,e,r){var n=r.backgroundColor,i=r.borderColor,o=r.borderWidth;(n||i&&o)&&(t.beginPath(),h.canvas.roundedRect(t,x(e.x)+o/2,x(e.y)+o/2,x(e.w)-o,x(e.h)-o,r.borderRadius),t.closePath(),n&&(t.fillStyle=n,t.fill()),i&&o&&(t.strokeStyle=i,t.lineWidth=o,t.lineJoin="miter",t.stroke()))}(i,a.frame,o),function(t,e,r,n){var i,o=n.textAlign,a=n.color,l=!!a,s=n.font,u=e.length,f=n.textStrokeColor,d=n.textStrokeWidth,c=f&&d;if(u&&(l||c))for(r=function(t,e,r){var n=r.lineHeight,i=t.w,o=t.x;return"center"===e?o+=i/2:"end"!==e&&"right"!==e||(o+=i),{h:n,w:i,x:o,y:t.y+n/2}}(r,o,s),t.font=s.string,t.textAlign=o,t.textBaseline="middle",t.shadowBlur=n.textShadowBlur,t.shadowColor=n.textShadowColor,l&&(t.fillStyle=a),c&&(t.lineJoin="round",t.lineWidth=d,t.strokeStyle=f),i=0,u=e.length;i<u;++i)v(t,e[i],{stroked:c,filled:l,w:r.w,x:r.x,y:r.y+r.h*i})}(i,o.lines,a.text,o),i.restore())}});var b=t.helpers,p=Number.MIN_SAFE_INTEGER||-9007199254740991,g=Number.MAX_SAFE_INTEGER||9007199254740991;function m(t,e,r){var n=Math.cos(r),i=Math.sin(r),o=e.x,a=e.y;return{x:o+n*(t.x-o)-i*(t.y-a),y:a+i*(t.x-o)+n*(t.y-a)}}function w(t,e){var r,n,i,o,a,l=g,s=p,u=e.origin;for(r=0;r<t.length;++r)i=(n=t[r]).x-u.x,o=n.y-u.y,a=e.vx*i+e.vy*o,l=Math.min(l,a),s=Math.max(s,a);return{min:l,max:s}}function k(t,e){var r=e.x-t.x,n=e.y-t.y,i=Math.sqrt(r*r+n*n);return{vx:(e.x-t.x)/i,vy:(e.y-t.y)/i,origin:t,ln:i}}var M=function(){this._rotation=0,this._rect={x:0,y:0,w:0,h:0}};function S(t,e,r){var n=e.positioner(t,e),i=n.vx,o=n.vy;if(!i&&!o)return{x:n.x,y:n.y};var a=r.w,l=r.h,s=e.rotation,u=Math.abs(a/2*Math.cos(s))+Math.abs(l/2*Math.sin(s)),f=Math.abs(a/2*Math.sin(s))+Math.abs(l/2*Math.cos(s)),d=1/Math.max(Math.abs(i),Math.abs(o));return u*=i*d,f*=o*d,u+=e.offset*i,f+=e.offset*o,{x:n.x+u,y:n.y+f}}b.extend(M.prototype,{center:function(){var t=this._rect;return{x:t.x+t.w/2,y:t.y+t.h/2}},update:function(t,e,r){this._rotation=r,this._rect={x:e.x+t.x,y:e.y+t.y,w:e.w,h:e.h}},contains:function(t){var e=this._rect;return!((t=m(t,this.center(),-this._rotation)).x<e.x-1||t.y<e.y-1||t.x>e.x+e.w+2||t.y>e.y+e.h+2)},intersects:function(t){var e,r,n,i=this._points(),o=t._points(),a=[k(i[0],i[1]),k(i[0],i[3])];for(this._rotation!==t._rotation&&a.push(k(o[0],o[1]),k(o[0],o[3])),e=0;e<a.length;++e)if(r=w(i,a[e]),n=w(o,a[e]),r.max<n.min||n.max<r.min)return!1;return!0},_points:function(){var t=this._rect,e=this._rotation,r=this.center();return[m({x:t.x,y:t.y},r,e),m({x:t.x+t.w,y:t.y},r,e),m({x:t.x+t.w,y:t.y+t.h},r,e),m({x:t.x,y:t.y+t.h},r,e)]}});var C={prepare:function(t){var e,r,n,i,o,a=[];for(e=0,n=t.length;e<n;++e)for(r=0,i=t[e].length;r<i;++r)o=t[e][r],a.push(o),o.$layout={_box:new M,_hidable:!1,_visible:!0,_set:e,_idx:r};return a.sort(function(t,e){var r=t.$layout,n=e.$layout;return r._idx===n._idx?n._set-r._set:n._idx-r._idx}),this.update(a),a},update:function(t){var e,r,n,i,o,a=!1;for(e=0,r=t.length;e<r;++e)i=(n=t[e]).model(),(o=n.$layout)._hidable=i&&"auto"===i.display,o._visible=n.visible(),a|=o._hidable;a&&function(t){var e,r,n,i,o,a;for(e=0,r=t.length;e<r;++e)(i=(n=t[e]).$layout)._visible&&(o=n.geometry(),a=S(n._el._model,n.model(),o),i._box.update(a,o,n.rotation()));(function(t,e){var r,n,i,o;for(r=t.length-1;r>=0;--r)for(i=t[r].$layout,n=r-1;n>=0&&i._visible;--n)(o=t[n].$layout)._visible&&i._box.intersects(o._box)&&e(i,o)})(t,function(t,e){var r=t._hidable,n=e._hidable;r&&n||n?e._visible=!1:r&&(t._visible=!1)})}(t)},lookup:function(t,e){var r,n;for(r=t.length-1;r>=0;--r)if((n=t[r].$layout)&&n._visible&&n._box.contains(e))return t[r];return null},draw:function(t,e){var r,n,i,o,a,l;for(r=0,n=e.length;r<n;++r)(o=(i=e[r]).$layout)._visible&&(a=i.geometry(),l=S(i._el._view,i.model(),a),o._box.update(l,a,i.rotation()),i.draw(t,l))}},z=t.helpers,$={align:"center",anchor:"center",backgroundColor:null,borderColor:null,borderRadius:0,borderWidth:0,clamp:!1,clip:!1,color:void 0,display:!0,font:{family:void 0,lineHeight:1.2,size:void 0,style:void 0,weight:null},formatter:function(t){if(z.isNullOrUndef(t))return null;var e,r,n,i=t;if(z.isObject(t))if(z.isNullOrUndef(t.label))if(z.isNullOrUndef(t.r))for(i="",n=0,r=(e=Object.keys(t)).length;n<r;++n)i+=(0!==n?", ":"")+e[n]+": "+t[e[n]];else i=t.r;else i=t.label;return""+i},labels:void 0,listeners:{},offset:4,opacity:1,padding:{top:4,right:4,bottom:4,left:4},rotation:0,textAlign:"start",textStrokeColor:void 0,textStrokeWidth:0,textShadowBlur:0,textShadowColor:void 0},O=t.helpers,A="$datalabels",D="$default";function P(t,e,r){if(e){var n,i=r.$context,o=r.$groups;e[o._set]&&(n=e[o._set][o._key])&&!0===O.callback(n,[i])&&(t[A]._dirty=!0,r.update(i))}}function N(t,e){var r,n,i=t[A],o=i._listeners;if(o.enter||o.leave){if("mousemove"===e.type)n=C.lookup(i._labels,e);else if("mouseout"!==e.type)return;r=i._hovered,i._hovered=n,function(t,e,r,n){var i,o;(r||n)&&(r?n?r!==n&&(o=i=!0):o=!0:i=!0,o&&P(t,e.leave,r),i&&P(t,e.enter,n))}(t,o,r,n)}}t.defaults.global.plugins.datalabels=$;var R={id:"datalabels",beforeInit:function(t){t[A]={_actives:[]}},beforeUpdate:function(t){var e=t[A];e._listened=!1,e._listeners={},e._datasets=[],e._labels=[]},afterDatasetUpdate:function(t,e,r){var n,i,o,a,l,s,u,f,d=e.index,c=t[A],h=c._datasets[d]=[],x=t.isDatasetVisible(d),y=t.data.datasets[d],v=function(t,e){var r,n,i,o=t.datalabels,a=[];return!1===o?null:(!0===o&&(o={}),e=O.merge({},[e,o]),n=e.labels||{},i=Object.keys(n),delete e.labels,i.length?i.forEach(function(t){n[t]&&a.push(O.merge({},[e,n[t],{_key:t}]))}):a.push(e),r=a.reduce(function(t,e){return O.each(e.listeners||{},function(r,n){t[n]=t[n]||{},t[n][e._key||D]=r}),delete e.listeners,t},{}),{labels:a,listeners:r})}(y,r),b=e.meta.data||[],p=t.ctx;for(p.save(),n=0,o=b.length;n<o;++n)if((u=b[n])[A]=[],x&&u&&!u.hidden&&!u._model.skip)for(i=0,a=v.labels.length;i<a;++i)s=(l=v.labels[i])._key,(f=new _(l,p,u,n)).$groups={_set:d,_key:s||D},f.$context={active:!1,chart:t,dataIndex:n,dataset:y,datasetIndex:d},f.update(f.$context),u[A].push(f),h.push(f);p.restore(),O.merge(c._listeners,v.listeners,{merger:function(t,r,n){r[t]=r[t]||{},r[t][e.index]=n[t],c._listened=!0}})},afterUpdate:function(t,e){t[A]._labels=C.prepare(t[A]._datasets,e)},afterDatasetsDraw:function(t){C.draw(t,t[A]._labels)},beforeEvent:function(t,e){if(t[A]._listened)switch(e.type){case"mousemove":case"mouseout":N(t,e);break;case"click":!function(t,e){var r=t[A],n=r._listeners.click,i=n&&C.lookup(r._labels,e);i&&P(t,n,i)}(t,e)}},afterEvent:function(e){var r,i,o,a,l,s,u,f=e[A],d=f._actives,c=f._actives=e.lastActive||[],h=n.arrayDiff(d,c);for(r=0,i=h.length;r<i;++r)if((l=h[r])[1])for(o=0,a=(u=l[0][A]||[]).length;o<a;++o)(s=u[o]).$context.active=1===l[1],s.update(s.$context);(f._dirty||h.length)&&(C.update(f._labels),function(e){if(!e.animating){for(var r=t.animationService.animations,n=0,i=r.length;n<i;++n)if(r[n].chart===e)return;e.render({duration:1,lazy:!0})}}(e)),delete f._dirty}};return t.plugins.register(R),R});
// svg-pan-zoom v3.6.1
// https://github.com/ariutta/svg-pan-zoom
!function s(r,a,l){function u(e,t){if(!a[e]){if(!r[e]){var o="function"==typeof require&&require;if(!t&&o)return o(e,!0);if(h)return h(e,!0);var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}var i=a[e]={exports:{}};r[e][0].call(i.exports,function(t){return u(r[e][1][t]||t)},i,i.exports,s,r,a,l)}return a[e].exports}for(var h="function"==typeof require&&require,t=0;t<l.length;t++)u(l[t]);return u}({1:[function(t,e,o){var s=t("./svg-utilities");e.exports={enable:function(t){var e=t.svg.querySelector("defs");if(e||(e=document.createElementNS(s.svgNS,"defs"),t.svg.appendChild(e)),!e.querySelector("style#svg-pan-zoom-controls-styles")){var o=document.createElementNS(s.svgNS,"style");o.setAttribute("id","svg-pan-zoom-controls-styles"),o.setAttribute("type","text/css"),o.textContent=".svg-pan-zoom-control { cursor: pointer; fill: black; fill-opacity: 0.333; } .svg-pan-zoom-control:hover { fill-opacity: 0.8; } .svg-pan-zoom-control-background { fill: white; fill-opacity: 0.5; } .svg-pan-zoom-control-background { fill-opacity: 0.8; }",e.appendChild(o)}var n=document.createElementNS(s.svgNS,"g");n.setAttribute("id","svg-pan-zoom-controls"),n.setAttribute("transform","translate("+(t.width-70)+" "+(t.height-76)+") scale(0.75)"),n.setAttribute("class","svg-pan-zoom-control"),n.appendChild(this._createZoomIn(t)),n.appendChild(this._createZoomReset(t)),n.appendChild(this._createZoomOut(t)),t.svg.appendChild(n),t.controlIcons=n},_createZoomIn:function(t){var e=document.createElementNS(s.svgNS,"g");e.setAttribute("id","svg-pan-zoom-zoom-in"),e.setAttribute("transform","translate(30.5 5) scale(0.015)"),e.setAttribute("class","svg-pan-zoom-control"),e.addEventListener("click",function(){t.getPublicInstance().zoomIn()},!1),e.addEventListener("touchstart",function(){t.getPublicInstance().zoomIn()},!1);var o=document.createElementNS(s.svgNS,"rect");o.setAttribute("x","0"),o.setAttribute("y","0"),o.setAttribute("width","1500"),o.setAttribute("height","1400"),o.setAttribute("class","svg-pan-zoom-control-background"),e.appendChild(o);var n=document.createElementNS(s.svgNS,"path");return n.setAttribute("d","M1280 576v128q0 26 -19 45t-45 19h-320v320q0 26 -19 45t-45 19h-128q-26 0 -45 -19t-19 -45v-320h-320q-26 0 -45 -19t-19 -45v-128q0 -26 19 -45t45 -19h320v-320q0 -26 19 -45t45 -19h128q26 0 45 19t19 45v320h320q26 0 45 19t19 45zM1536 1120v-960 q0 -119 -84.5 -203.5t-203.5 -84.5h-960q-119 0 -203.5 84.5t-84.5 203.5v960q0 119 84.5 203.5t203.5 84.5h960q119 0 203.5 -84.5t84.5 -203.5z"),n.setAttribute("class","svg-pan-zoom-control-element"),e.appendChild(n),e},_createZoomReset:function(t){var e=document.createElementNS(s.svgNS,"g");e.setAttribute("id","svg-pan-zoom-reset-pan-zoom"),e.setAttribute("transform","translate(5 35) scale(0.4)"),e.setAttribute("class","svg-pan-zoom-control"),e.addEventListener("click",function(){t.getPublicInstance().reset()},!1),e.addEventListener("touchstart",function(){t.getPublicInstance().reset()},!1);var o=document.createElementNS(s.svgNS,"rect");o.setAttribute("x","2"),o.setAttribute("y","2"),o.setAttribute("width","182"),o.setAttribute("height","58"),o.setAttribute("class","svg-pan-zoom-control-background"),e.appendChild(o);var n=document.createElementNS(s.svgNS,"path");n.setAttribute("d","M33.051,20.632c-0.742-0.406-1.854-0.609-3.338-0.609h-7.969v9.281h7.769c1.543,0,2.701-0.188,3.473-0.562c1.365-0.656,2.048-1.953,2.048-3.891C35.032,22.757,34.372,21.351,33.051,20.632z"),n.setAttribute("class","svg-pan-zoom-control-element"),e.appendChild(n);var i=document.createElementNS(s.svgNS,"path");return i.setAttribute("d","M170.231,0.5H15.847C7.102,0.5,0.5,5.708,0.5,11.84v38.861C0.5,56.833,7.102,61.5,15.847,61.5h154.384c8.745,0,15.269-4.667,15.269-10.798V11.84C185.5,5.708,178.976,0.5,170.231,0.5z M42.837,48.569h-7.969c-0.219-0.766-0.375-1.383-0.469-1.852c-0.188-0.969-0.289-1.961-0.305-2.977l-0.047-3.211c-0.03-2.203-0.41-3.672-1.142-4.406c-0.732-0.734-2.103-1.102-4.113-1.102h-7.05v13.547h-7.055V14.022h16.524c2.361,0.047,4.178,0.344,5.45,0.891c1.272,0.547,2.351,1.352,3.234,2.414c0.731,0.875,1.31,1.844,1.737,2.906s0.64,2.273,0.64,3.633c0,1.641-0.414,3.254-1.242,4.84s-2.195,2.707-4.102,3.363c1.594,0.641,2.723,1.551,3.387,2.73s0.996,2.98,0.996,5.402v2.32c0,1.578,0.063,2.648,0.19,3.211c0.19,0.891,0.635,1.547,1.333,1.969V48.569z M75.579,48.569h-26.18V14.022h25.336v6.117H56.454v7.336h16.781v6H56.454v8.883h19.125V48.569z M104.497,46.331c-2.44,2.086-5.887,3.129-10.34,3.129c-4.548,0-8.125-1.027-10.731-3.082s-3.909-4.879-3.909-8.473h6.891c0.224,1.578,0.662,2.758,1.316,3.539c1.196,1.422,3.246,2.133,6.15,2.133c1.739,0,3.151-0.188,4.236-0.562c2.058-0.719,3.087-2.055,3.087-4.008c0-1.141-0.504-2.023-1.512-2.648c-1.008-0.609-2.607-1.148-4.796-1.617l-3.74-0.82c-3.676-0.812-6.201-1.695-7.576-2.648c-2.328-1.594-3.492-4.086-3.492-7.477c0-3.094,1.139-5.664,3.417-7.711s5.623-3.07,10.036-3.07c3.685,0,6.829,0.965,9.431,2.895c2.602,1.93,3.966,4.73,4.093,8.402h-6.938c-0.128-2.078-1.057-3.555-2.787-4.43c-1.154-0.578-2.587-0.867-4.301-0.867c-1.907,0-3.428,0.375-4.565,1.125c-1.138,0.75-1.706,1.797-1.706,3.141c0,1.234,0.561,2.156,1.682,2.766c0.721,0.406,2.25,0.883,4.589,1.43l6.063,1.43c2.657,0.625,4.648,1.461,5.975,2.508c2.059,1.625,3.089,3.977,3.089,7.055C108.157,41.624,106.937,44.245,104.497,46.331z M139.61,48.569h-26.18V14.022h25.336v6.117h-18.281v7.336h16.781v6h-16.781v8.883h19.125V48.569z M170.337,20.14h-10.336v28.43h-7.266V20.14h-10.383v-6.117h27.984V20.14z"),i.setAttribute("class","svg-pan-zoom-control-element"),e.appendChild(i),e},_createZoomOut:function(t){var e=document.createElementNS(s.svgNS,"g");e.setAttribute("id","svg-pan-zoom-zoom-out"),e.setAttribute("transform","translate(30.5 70) scale(0.015)"),e.setAttribute("class","svg-pan-zoom-control"),e.addEventListener("click",function(){t.getPublicInstance().zoomOut()},!1),e.addEventListener("touchstart",function(){t.getPublicInstance().zoomOut()},!1);var o=document.createElementNS(s.svgNS,"rect");o.setAttribute("x","0"),o.setAttribute("y","0"),o.setAttribute("width","1500"),o.setAttribute("height","1400"),o.setAttribute("class","svg-pan-zoom-control-background"),e.appendChild(o);var n=document.createElementNS(s.svgNS,"path");return n.setAttribute("d","M1280 576v128q0 26 -19 45t-45 19h-896q-26 0 -45 -19t-19 -45v-128q0 -26 19 -45t45 -19h896q26 0 45 19t19 45zM1536 1120v-960q0 -119 -84.5 -203.5t-203.5 -84.5h-960q-119 0 -203.5 84.5t-84.5 203.5v960q0 119 84.5 203.5t203.5 84.5h960q119 0 203.5 -84.5 t84.5 -203.5z"),n.setAttribute("class","svg-pan-zoom-control-element"),e.appendChild(n),e},disable:function(t){t.controlIcons&&(t.controlIcons.parentNode.removeChild(t.controlIcons),t.controlIcons=null)}}},{"./svg-utilities":5}],2:[function(t,e,o){function n(t,e){this.init(t,e)}var i=t("./svg-utilities"),r=t("./utilities");n.prototype.init=function(t,e){this.viewport=t,this.options=e,this.originalState={zoom:1,x:0,y:0},this.activeState={zoom:1,x:0,y:0},this.updateCTMCached=r.proxy(this.updateCTM,this),this.requestAnimationFrame=r.createRequestAnimationFrame(this.options.refreshRate),this.viewBox={x:0,y:0,width:0,height:0},this.cacheViewBox();var o=this.processCTM();this.setCTM(o),this.updateCTM()},n.prototype.cacheViewBox=function(){var t=this.options.svg.getAttribute("viewBox");if(t){var e=t.split(/[\s\,]/).filter(function(t){return t}).map(parseFloat);this.viewBox.x=e[0],this.viewBox.y=e[1],this.viewBox.width=e[2],this.viewBox.height=e[3];var o=Math.min(this.options.width/this.viewBox.width,this.options.height/this.viewBox.height);this.activeState.zoom=o,this.activeState.x=(this.options.width-this.viewBox.width*o)/2,this.activeState.y=(this.options.height-this.viewBox.height*o)/2,this.updateCTMOnNextFrame(),this.options.svg.removeAttribute("viewBox")}else this.simpleViewBoxCache()},n.prototype.simpleViewBoxCache=function(){var t=this.viewport.getBBox();this.viewBox.x=t.x,this.viewBox.y=t.y,this.viewBox.width=t.width,this.viewBox.height=t.height},n.prototype.getViewBox=function(){return r.extend({},this.viewBox)},n.prototype.processCTM=function(){var t,e=this.getCTM();(this.options.fit||this.options.contain)&&(t=this.options.fit?Math.min(this.options.width/this.viewBox.width,this.options.height/this.viewBox.height):Math.max(this.options.width/this.viewBox.width,this.options.height/this.viewBox.height),e.a=t,e.d=t,e.e=-this.viewBox.x*t,e.f=-this.viewBox.y*t);if(this.options.center){var o=.5*(this.options.width-(this.viewBox.width+2*this.viewBox.x)*e.a),n=.5*(this.options.height-(this.viewBox.height+2*this.viewBox.y)*e.a);e.e=o,e.f=n}return this.originalState.zoom=e.a,this.originalState.x=e.e,this.originalState.y=e.f,e},n.prototype.getOriginalState=function(){return r.extend({},this.originalState)},n.prototype.getState=function(){return r.extend({},this.activeState)},n.prototype.getZoom=function(){return this.activeState.zoom},n.prototype.getRelativeZoom=function(){return this.activeState.zoom/this.originalState.zoom},n.prototype.computeRelativeZoom=function(t){return t/this.originalState.zoom},n.prototype.getPan=function(){return{x:this.activeState.x,y:this.activeState.y}},n.prototype.getCTM=function(){var t=this.options.svg.createSVGMatrix();return t.a=this.activeState.zoom,t.b=0,t.c=0,t.d=this.activeState.zoom,t.e=this.activeState.x,t.f=this.activeState.y,t},n.prototype.setCTM=function(t){var e=this.isZoomDifferent(t),o=this.isPanDifferent(t);if(e||o){if(e&&(!1===this.options.beforeZoom(this.getRelativeZoom(),this.computeRelativeZoom(t.a))?(t.a=t.d=this.activeState.zoom,e=!1):(this.updateCache(t),this.options.onZoom(this.getRelativeZoom()))),o){var n=this.options.beforePan(this.getPan(),{x:t.e,y:t.f}),i=!1,s=!1;!1===n?(t.e=this.getPan().x,t.f=this.getPan().y,i=s=!0):r.isObject(n)&&(!1===n.x?(t.e=this.getPan().x,i=!0):r.isNumber(n.x)&&(t.e=n.x),!1===n.y?(t.f=this.getPan().y,s=!0):r.isNumber(n.y)&&(t.f=n.y)),i&&s||!this.isPanDifferent(t)?o=!1:(this.updateCache(t),this.options.onPan(this.getPan()))}(e||o)&&this.updateCTMOnNextFrame()}},n.prototype.isZoomDifferent=function(t){return this.activeState.zoom!==t.a},n.prototype.isPanDifferent=function(t){return this.activeState.x!==t.e||this.activeState.y!==t.f},n.prototype.updateCache=function(t){this.activeState.zoom=t.a,this.activeState.x=t.e,this.activeState.y=t.f},n.prototype.pendingUpdate=!1,n.prototype.updateCTMOnNextFrame=function(){this.pendingUpdate||(this.pendingUpdate=!0,this.requestAnimationFrame.call(window,this.updateCTMCached))},n.prototype.updateCTM=function(){var t=this.getCTM();i.setCTM(this.viewport,t,this.defs),this.pendingUpdate=!1,this.options.onUpdatedCTM&&this.options.onUpdatedCTM(t)},e.exports=function(t,e){return new n(t,e)}},{"./svg-utilities":5,"./utilities":7}],3:[function(t,e,o){var n,i=t("./svg-pan-zoom.js");n=window,document,"function"==typeof define&&define.amd?define("svg-pan-zoom",function(){return i}):void 0!==e&&e.exports&&(e.exports=i,n.svgPanZoom=i)},{"./svg-pan-zoom.js":4}],4:[function(t,e,o){function i(t,e){this.init(t,e)}var n=t("./uniwheel"),s=t("./control-icons"),r=t("./utilities"),a=t("./svg-utilities"),l=t("./shadow-viewport"),u={viewportSelector:".svg-pan-zoom_viewport",panEnabled:!0,controlIconsEnabled:!1,zoomEnabled:!0,dblClickZoomEnabled:!0,mouseWheelZoomEnabled:!0,preventMouseEventsDefault:!0,zoomScaleSensitivity:.1,minZoom:.5,maxZoom:10,fit:!0,contain:!1,center:!0,refreshRate:"auto",beforeZoom:null,onZoom:null,beforePan:null,onPan:null,customEventsHandler:null,eventsListenerElement:null,onUpdatedCTM:null},h={passive:!0};i.prototype.init=function(t,e){var o=this;this.svg=t,this.defs=t.querySelector("defs"),a.setupSvgAttributes(this.svg),this.options=r.extend(r.extend({},u),e),this.state="none";var n=a.getBoundingClientRectNormalized(t);this.width=n.width,this.height=n.height,this.viewport=l(a.getOrCreateViewport(this.svg,this.options.viewportSelector),{svg:this.svg,width:this.width,height:this.height,fit:this.options.fit,contain:this.options.contain,center:this.options.center,refreshRate:this.options.refreshRate,beforeZoom:function(t,e){if(o.viewport&&o.options.beforeZoom)return o.options.beforeZoom(t,e)},onZoom:function(t){if(o.viewport&&o.options.onZoom)return o.options.onZoom(t)},beforePan:function(t,e){if(o.viewport&&o.options.beforePan)return o.options.beforePan(t,e)},onPan:function(t){if(o.viewport&&o.options.onPan)return o.options.onPan(t)},onUpdatedCTM:function(t){if(o.viewport&&o.options.onUpdatedCTM)return o.options.onUpdatedCTM(t)}});var i=this.getPublicInstance();i.setBeforeZoom(this.options.beforeZoom),i.setOnZoom(this.options.onZoom),i.setBeforePan(this.options.beforePan),i.setOnPan(this.options.onPan),i.setOnUpdatedCTM(this.options.onUpdatedCTM),this.options.controlIconsEnabled&&s.enable(this),this.lastMouseWheelEventTime=Date.now(),this.setupHandlers()},i.prototype.setupHandlers=function(){var o=this,n=null;if(this.eventListeners={mousedown:function(t){var e=o.handleMouseDown(t,n);return n=t,e},touchstart:function(t){var e=o.handleMouseDown(t,n);return n=t,e},mouseup:function(t){return o.handleMouseUp(t)},touchend:function(t){return o.handleMouseUp(t)},mousemove:function(t){return o.handleMouseMove(t)},touchmove:function(t){return o.handleMouseMove(t)},mouseleave:function(t){return o.handleMouseUp(t)},touchleave:function(t){return o.handleMouseUp(t)},touchcancel:function(t){return o.handleMouseUp(t)}},null!=this.options.customEventsHandler){this.options.customEventsHandler.init({svgElement:this.svg,eventsListenerElement:this.options.eventsListenerElement,instance:this.getPublicInstance()});var t=this.options.customEventsHandler.haltEventListeners;if(t&&t.length)for(var e=t.length-1;0<=e;e--)this.eventListeners.hasOwnProperty(t[e])&&delete this.eventListeners[t[e]]}for(var i in this.eventListeners)(this.options.eventsListenerElement||this.svg).addEventListener(i,this.eventListeners[i],!this.options.preventMouseEventsDefault&&h);this.options.mouseWheelZoomEnabled&&(this.options.mouseWheelZoomEnabled=!1,this.enableMouseWheelZoom())},i.prototype.enableMouseWheelZoom=function(){if(!this.options.mouseWheelZoomEnabled){var e=this;this.wheelListener=function(t){return e.handleMouseWheel(t)};var t=!this.options.preventMouseEventsDefault;n.on(this.options.eventsListenerElement||this.svg,this.wheelListener,t),this.options.mouseWheelZoomEnabled=!0}},i.prototype.disableMouseWheelZoom=function(){if(this.options.mouseWheelZoomEnabled){var t=!this.options.preventMouseEventsDefault;n.off(this.options.eventsListenerElement||this.svg,this.wheelListener,t),this.options.mouseWheelZoomEnabled=!1}},i.prototype.handleMouseWheel=function(t){if(this.options.zoomEnabled&&"none"===this.state){this.options.preventMouseEventsDefault&&(t.preventDefault?t.preventDefault():t.returnValue=!1);var e=t.deltaY||1,o=Date.now()-this.lastMouseWheelEventTime,n=3+Math.max(0,30-o);this.lastMouseWheelEventTime=Date.now(),"deltaMode"in t&&0===t.deltaMode&&t.wheelDelta&&(e=0===t.deltaY?0:Math.abs(t.wheelDelta)/t.deltaY),e=-.3<e&&e<.3?e:(0<e?1:-1)*Math.log(Math.abs(e)+10)/n;var i=this.svg.getScreenCTM().inverse(),s=a.getEventPoint(t,this.svg).matrixTransform(i),r=Math.pow(1+this.options.zoomScaleSensitivity,-1*e);this.zoomAtPoint(r,s)}},i.prototype.zoomAtPoint=function(t,e,o){var n=this.viewport.getOriginalState();o?(t=Math.max(this.options.minZoom*n.zoom,Math.min(this.options.maxZoom*n.zoom,t)),t/=this.getZoom()):this.getZoom()*t<this.options.minZoom*n.zoom?t=this.options.minZoom*n.zoom/this.getZoom():this.getZoom()*t>this.options.maxZoom*n.zoom&&(t=this.options.maxZoom*n.zoom/this.getZoom());var i=this.viewport.getCTM(),s=e.matrixTransform(i.inverse()),r=this.svg.createSVGMatrix().translate(s.x,s.y).scale(t).translate(-s.x,-s.y),a=i.multiply(r);a.a!==i.a&&this.viewport.setCTM(a)},i.prototype.zoom=function(t,e){this.zoomAtPoint(t,a.getSvgCenterPoint(this.svg,this.width,this.height),e)},i.prototype.publicZoom=function(t,e){e&&(t=this.computeFromRelativeZoom(t)),this.zoom(t,e)},i.prototype.publicZoomAtPoint=function(t,e,o){if(o&&(t=this.computeFromRelativeZoom(t)),"SVGPoint"!==r.getType(e)){if(!("x"in e&&"y"in e))throw new Error("Given point is invalid");e=a.createSVGPoint(this.svg,e.x,e.y)}this.zoomAtPoint(t,e,o)},i.prototype.getZoom=function(){return this.viewport.getZoom()},i.prototype.getRelativeZoom=function(){return this.viewport.getRelativeZoom()},i.prototype.computeFromRelativeZoom=function(t){return t*this.viewport.getOriginalState().zoom},i.prototype.resetZoom=function(){var t=this.viewport.getOriginalState();this.zoom(t.zoom,!0)},i.prototype.resetPan=function(){this.pan(this.viewport.getOriginalState())},i.prototype.reset=function(){this.resetZoom(),this.resetPan()},i.prototype.handleDblClick=function(t){var e;if((this.options.preventMouseEventsDefault&&(t.preventDefault?t.preventDefault():t.returnValue=!1),this.options.controlIconsEnabled)&&-1<(t.target.getAttribute("class")||"").indexOf("svg-pan-zoom-control"))return!1;e=t.shiftKey?1/(2*(1+this.options.zoomScaleSensitivity)):2*(1+this.options.zoomScaleSensitivity);var o=a.getEventPoint(t,this.svg).matrixTransform(this.svg.getScreenCTM().inverse());this.zoomAtPoint(e,o)},i.prototype.handleMouseDown=function(t,e){this.options.preventMouseEventsDefault&&(t.preventDefault?t.preventDefault():t.returnValue=!1),r.mouseAndTouchNormalize(t,this.svg),this.options.dblClickZoomEnabled&&r.isDblClick(t,e)?this.handleDblClick(t):(this.state="pan",this.firstEventCTM=this.viewport.getCTM(),this.stateOrigin=a.getEventPoint(t,this.svg).matrixTransform(this.firstEventCTM.inverse()))},i.prototype.handleMouseMove=function(t){if(this.options.preventMouseEventsDefault&&(t.preventDefault?t.preventDefault():t.returnValue=!1),"pan"===this.state&&this.options.panEnabled){var e=a.getEventPoint(t,this.svg).matrixTransform(this.firstEventCTM.inverse()),o=this.firstEventCTM.translate(e.x-this.stateOrigin.x,e.y-this.stateOrigin.y);this.viewport.setCTM(o)}},i.prototype.handleMouseUp=function(t){this.options.preventMouseEventsDefault&&(t.preventDefault?t.preventDefault():t.returnValue=!1),"pan"===this.state&&(this.state="none")},i.prototype.fit=function(){var t=this.viewport.getViewBox(),e=Math.min(this.width/t.width,this.height/t.height);this.zoom(e,!0)},i.prototype.contain=function(){var t=this.viewport.getViewBox(),e=Math.max(this.width/t.width,this.height/t.height);this.zoom(e,!0)},i.prototype.center=function(){var t=this.viewport.getViewBox(),e=.5*(this.width-(t.width+2*t.x)*this.getZoom()),o=.5*(this.height-(t.height+2*t.y)*this.getZoom());this.getPublicInstance().pan({x:e,y:o})},i.prototype.updateBBox=function(){this.viewport.simpleViewBoxCache()},i.prototype.pan=function(t){var e=this.viewport.getCTM();e.e=t.x,e.f=t.y,this.viewport.setCTM(e)},i.prototype.panBy=function(t){var e=this.viewport.getCTM();e.e+=t.x,e.f+=t.y,this.viewport.setCTM(e)},i.prototype.getPan=function(){var t=this.viewport.getState();return{x:t.x,y:t.y}},i.prototype.resize=function(){var t=a.getBoundingClientRectNormalized(this.svg);this.width=t.width,this.height=t.height;var e=this.viewport;e.options.width=this.width,e.options.height=this.height,e.processCTM(),this.options.controlIconsEnabled&&(this.getPublicInstance().disableControlIcons(),this.getPublicInstance().enableControlIcons())},i.prototype.destroy=function(){var e=this;for(var t in this.beforeZoom=null,this.onZoom=null,this.beforePan=null,this.onPan=null,(this.onUpdatedCTM=null)!=this.options.customEventsHandler&&this.options.customEventsHandler.destroy({svgElement:this.svg,eventsListenerElement:this.options.eventsListenerElement,instance:this.getPublicInstance()}),this.eventListeners)(this.options.eventsListenerElement||this.svg).removeEventListener(t,this.eventListeners[t],!this.options.preventMouseEventsDefault&&h);this.disableMouseWheelZoom(),this.getPublicInstance().disableControlIcons(),this.reset(),c=c.filter(function(t){return t.svg!==e.svg}),delete this.options,delete this.viewport,delete this.publicInstance,delete this.pi,this.getPublicInstance=function(){return null}},i.prototype.getPublicInstance=function(){var o=this;return this.publicInstance||(this.publicInstance=this.pi={enablePan:function(){return o.options.panEnabled=!0,o.pi},disablePan:function(){return o.options.panEnabled=!1,o.pi},isPanEnabled:function(){return!!o.options.panEnabled},pan:function(t){return o.pan(t),o.pi},panBy:function(t){return o.panBy(t),o.pi},getPan:function(){return o.getPan()},setBeforePan:function(t){return o.options.beforePan=null===t?null:r.proxy(t,o.publicInstance),o.pi},setOnPan:function(t){return o.options.onPan=null===t?null:r.proxy(t,o.publicInstance),o.pi},enableZoom:function(){return o.options.zoomEnabled=!0,o.pi},disableZoom:function(){return o.options.zoomEnabled=!1,o.pi},isZoomEnabled:function(){return!!o.options.zoomEnabled},enableControlIcons:function(){return o.options.controlIconsEnabled||(o.options.controlIconsEnabled=!0,s.enable(o)),o.pi},disableControlIcons:function(){return o.options.controlIconsEnabled&&(o.options.controlIconsEnabled=!1,s.disable(o)),o.pi},isControlIconsEnabled:function(){return!!o.options.controlIconsEnabled},enableDblClickZoom:function(){return o.options.dblClickZoomEnabled=!0,o.pi},disableDblClickZoom:function(){return o.options.dblClickZoomEnabled=!1,o.pi},isDblClickZoomEnabled:function(){return!!o.options.dblClickZoomEnabled},enableMouseWheelZoom:function(){return o.enableMouseWheelZoom(),o.pi},disableMouseWheelZoom:function(){return o.disableMouseWheelZoom(),o.pi},isMouseWheelZoomEnabled:function(){return!!o.options.mouseWheelZoomEnabled},setZoomScaleSensitivity:function(t){return o.options.zoomScaleSensitivity=t,o.pi},setMinZoom:function(t){return o.options.minZoom=t,o.pi},setMaxZoom:function(t){return o.options.maxZoom=t,o.pi},setBeforeZoom:function(t){return o.options.beforeZoom=null===t?null:r.proxy(t,o.publicInstance),o.pi},setOnZoom:function(t){return o.options.onZoom=null===t?null:r.proxy(t,o.publicInstance),o.pi},zoom:function(t){return o.publicZoom(t,!0),o.pi},zoomBy:function(t){return o.publicZoom(t,!1),o.pi},zoomAtPoint:function(t,e){return o.publicZoomAtPoint(t,e,!0),o.pi},zoomAtPointBy:function(t,e){return o.publicZoomAtPoint(t,e,!1),o.pi},zoomIn:function(){return this.zoomBy(1+o.options.zoomScaleSensitivity),o.pi},zoomOut:function(){return this.zoomBy(1/(1+o.options.zoomScaleSensitivity)),o.pi},getZoom:function(){return o.getRelativeZoom()},setOnUpdatedCTM:function(t){return o.options.onUpdatedCTM=null===t?null:r.proxy(t,o.publicInstance),o.pi},resetZoom:function(){return o.resetZoom(),o.pi},resetPan:function(){return o.resetPan(),o.pi},reset:function(){return o.reset(),o.pi},fit:function(){return o.fit(),o.pi},contain:function(){return o.contain(),o.pi},center:function(){return o.center(),o.pi},updateBBox:function(){return o.updateBBox(),o.pi},resize:function(){return o.resize(),o.pi},getSizes:function(){return{width:o.width,height:o.height,realZoom:o.getZoom(),viewBox:o.viewport.getViewBox()}},destroy:function(){return o.destroy(),o.pi}}),this.publicInstance};var c=[];e.exports=function(t,e){var o=r.getSvg(t);if(null===o)return null;for(var n=c.length-1;0<=n;n--)if(c[n].svg===o)return c[n].instance.getPublicInstance();return c.push({svg:o,instance:new i(o,e)}),c[c.length-1].instance.getPublicInstance()}},{"./control-icons":1,"./shadow-viewport":2,"./svg-utilities":5,"./uniwheel":6,"./utilities":7}],5:[function(t,e,o){var l=t("./utilities"),s="unknown";document.documentMode&&(s="ie"),e.exports={svgNS:"http://www.w3.org/2000/svg",xmlNS:"http://www.w3.org/XML/1998/namespace",xmlnsNS:"http://www.w3.org/2000/xmlns/",xlinkNS:"http://www.w3.org/1999/xlink",evNS:"http://www.w3.org/2001/xml-events",getBoundingClientRectNormalized:function(t){if(t.clientWidth&&t.clientHeight)return{width:t.clientWidth,height:t.clientHeight};if(t.getBoundingClientRect())return t.getBoundingClientRect();throw new Error("Cannot get BoundingClientRect for SVG.")},getOrCreateViewport:function(t,e){var o=null;if(!(o=l.isElement(e)?e:t.querySelector(e))){var n=Array.prototype.slice.call(t.childNodes||t.children).filter(function(t){return"defs"!==t.nodeName&&"#text"!==t.nodeName});1===n.length&&"g"===n[0].nodeName&&null===n[0].getAttribute("transform")&&(o=n[0])}if(!o){var i="viewport-"+(new Date).toISOString().replace(/\D/g,"");(o=document.createElementNS(this.svgNS,"g")).setAttribute("id",i);var s=t.childNodes||t.children;if(s&&0<s.length)for(var r=s.length;0<r;r--)"defs"!==s[s.length-r].nodeName&&o.appendChild(s[s.length-r]);t.appendChild(o)}var a=[];return o.getAttribute("class")&&(a=o.getAttribute("class").split(" ")),~a.indexOf("svg-pan-zoom_viewport")||(a.push("svg-pan-zoom_viewport"),o.setAttribute("class",a.join(" "))),o},setupSvgAttributes:function(t){if(t.setAttribute("xmlns",this.svgNS),t.setAttributeNS(this.xmlnsNS,"xmlns:xlink",this.xlinkNS),t.setAttributeNS(this.xmlnsNS,"xmlns:ev",this.evNS),null!==t.parentNode){var e=t.getAttribute("style")||"";-1===e.toLowerCase().indexOf("overflow")&&t.setAttribute("style","overflow: hidden; "+e)}},internetExplorerRedisplayInterval:300,refreshDefsGlobal:l.throttle(function(){for(var t=document.querySelectorAll("defs"),e=t.length,o=0;o<e;o++){var n=t[o];n.parentNode.insertBefore(n,n)}},this?this.internetExplorerRedisplayInterval:null),setCTM:function(t,e,o){var n=this,i="matrix("+e.a+","+e.b+","+e.c+","+e.d+","+e.e+","+e.f+")";t.setAttributeNS(null,"transform",i),"transform"in t.style?t.style.transform=i:"-ms-transform"in t.style?t.style["-ms-transform"]=i:"-webkit-transform"in t.style&&(t.style["-webkit-transform"]=i),"ie"===s&&o&&(o.parentNode.insertBefore(o,o),window.setTimeout(function(){n.refreshDefsGlobal()},n.internetExplorerRedisplayInterval))},getEventPoint:function(t,e){var o=e.createSVGPoint();return l.mouseAndTouchNormalize(t,e),o.x=t.clientX,o.y=t.clientY,o},getSvgCenterPoint:function(t,e,o){return this.createSVGPoint(t,e/2,o/2)},createSVGPoint:function(t,e,o){var n=t.createSVGPoint();return n.x=e,n.y=o,n}}},{"./utilities":7}],6:[function(t,e,o){function n(t,e,o,n){var i;i="wheel"===a?o:function(t,o){function e(t){var e={originalEvent:t=t||window.event,target:t.target||t.srcElement,type:"wheel",deltaMode:"MozMousePixelScroll"==t.type?0:1,deltaX:0,delatZ:0,preventDefault:function(){t.preventDefault?t.preventDefault():t.returnValue=!1}};return"mousewheel"==a?(e.deltaY=-.025*t.wheelDelta,t.wheelDeltaX&&(e.deltaX=-.025*t.wheelDeltaX)):e.deltaY=t.detail,o(e)}return u.push({element:t,fn:e}),e}(t,o),t[s](l+e,i,!!n&&h)}function i(t,e,o,n){var i;i="wheel"===a?o:function(t){for(var e=0;e<u.length;e++)if(u[e].element===t)return u[e].fn;return function(){}}(t),t[r](l+e,i,!!n&&h),function(t){for(var e=0;e<u.length;e++)if(u[e].element===t)return u.splice(e,1)}(t)}var s,r,a,l,u,h;e.exports=(u=[],h={passive:!(l="")},window.addEventListener?(s="addEventListener",r="removeEventListener"):(s="attachEvent",r="detachEvent",l="on"),a="onwheel"in document.createElement("div")?"wheel":void 0!==document.onmousewheel?"mousewheel":"DOMMouseScroll",{on:function(t,e,o){n(t,a,e,o),"DOMMouseScroll"==a&&n(t,"MozMousePixelScroll",e,o)},off:function(t,e,o){i(t,a,e,o),"DOMMouseScroll"==a&&i(t,"MozMousePixelScroll",e,o)}})},{}],7:[function(t,e,o){function n(e){return function(t){window.setTimeout(t,e)}}e.exports={extend:function(t,e){for(var o in t=t||{},e)this.isObject(e[o])?t[o]=this.extend(t[o],e[o]):t[o]=e[o];return t},isElement:function(t){return t instanceof HTMLElement||t instanceof SVGElement||t instanceof SVGSVGElement||t&&"object"==typeof t&&null!==t&&1===t.nodeType&&"string"==typeof t.nodeName},isObject:function(t){return"[object Object]"===Object.prototype.toString.call(t)},isNumber:function(t){return!isNaN(parseFloat(t))&&isFinite(t)},getSvg:function(t){var e,o;if(this.isElement(t))e=t;else{if(!("string"==typeof t||t instanceof String))throw new Error("Provided selector is not an HTML object nor String");if(!(e=document.querySelector(t)))throw new Error("Provided selector did not find any elements. Selector: "+t)}if("svg"===e.tagName.toLowerCase())o=e;else if("object"===e.tagName.toLowerCase())o=e.contentDocument.documentElement;else{if("embed"!==e.tagName.toLowerCase())throw"img"===e.tagName.toLowerCase()?new Error('Cannot script an SVG in an "img" element. Please use an "object" element or an in-line SVG.'):new Error("Cannot get SVG.");o=e.getSVGDocument().documentElement}return o},proxy:function(t,e){return function(){return t.apply(e,arguments)}},getType:function(t){return Object.prototype.toString.apply(t).replace(/^\[object\s/,"").replace(/\]$/,"")},mouseAndTouchNormalize:function(t,e){if(void 0===t.clientX||null===t.clientX)if(t.clientX=0,void(t.clientY=0)!==t.touches&&t.touches.length){if(void 0!==t.touches[0].clientX)t.clientX=t.touches[0].clientX,t.clientY=t.touches[0].clientY;else if(void 0!==t.touches[0].pageX){var o=e.getBoundingClientRect();t.clientX=t.touches[0].pageX-o.left,t.clientY=t.touches[0].pageY-o.top}}else void 0!==t.originalEvent&&void 0!==t.originalEvent.clientX&&(t.clientX=t.originalEvent.clientX,t.clientY=t.originalEvent.clientY)},isDblClick:function(t,e){if(2===t.detail)return!0;if(null==e)return!1;var o=t.timeStamp-e.timeStamp,n=Math.sqrt(Math.pow(t.clientX-e.clientX,2)+Math.pow(t.clientY-e.clientY,2));return o<250&&n<10},now:Date.now||function(){return(new Date).getTime()},throttle:function(o,n,i){var s,r,a,l=this,u=null,h=0;i=i||{};function c(){h=!1===i.leading?0:l.now(),u=null,a=o.apply(s,r),u||(s=r=null)}return function(){var t=l.now();h||!1!==i.leading||(h=t);var e=n-(t-h);return s=this,r=arguments,e<=0||n<e?(clearTimeout(u),u=null,h=t,a=o.apply(s,r),u||(s=r=null)):u||!1===i.trailing||(u=setTimeout(c,e)),a}},createRequestAnimationFrame:function(t){var e=null;return"auto"!==t&&t<60&&1<t&&(e=Math.floor(1e3/t)),null===e?window.requestAnimationFrame||n(33):n(e)}}},{}]},{},[3]);/*! Hammer.JS - v2.0.7 - 2016-04-22
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */
!function(a,b,c,d){"use strict";function e(a,b,c){return setTimeout(j(a,c),b)}function f(a,b,c){return Array.isArray(a)?(g(a,c[b],c),!0):!1}function g(a,b,c){var e;if(a)if(a.forEach)a.forEach(b,c);else if(a.length!==d)for(e=0;e<a.length;)b.call(c,a[e],e,a),e++;else for(e in a)a.hasOwnProperty(e)&&b.call(c,a[e],e,a)}function h(b,c,d){var e="DEPRECATED METHOD: "+c+"\n"+d+" AT \n";return function(){var c=new Error("get-stack-trace"),d=c&&c.stack?c.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace",f=a.console&&(a.console.warn||a.console.log);return f&&f.call(a.console,e,d),b.apply(this,arguments)}}function i(a,b,c){var d,e=b.prototype;d=a.prototype=Object.create(e),d.constructor=a,d._super=e,c&&la(d,c)}function j(a,b){return function(){return a.apply(b,arguments)}}function k(a,b){return typeof a==oa?a.apply(b?b[0]||d:d,b):a}function l(a,b){return a===d?b:a}function m(a,b,c){g(q(b),function(b){a.addEventListener(b,c,!1)})}function n(a,b,c){g(q(b),function(b){a.removeEventListener(b,c,!1)})}function o(a,b){for(;a;){if(a==b)return!0;a=a.parentNode}return!1}function p(a,b){return a.indexOf(b)>-1}function q(a){return a.trim().split(/\s+/g)}function r(a,b,c){if(a.indexOf&&!c)return a.indexOf(b);for(var d=0;d<a.length;){if(c&&a[d][c]==b||!c&&a[d]===b)return d;d++}return-1}function s(a){return Array.prototype.slice.call(a,0)}function t(a,b,c){for(var d=[],e=[],f=0;f<a.length;){var g=b?a[f][b]:a[f];r(e,g)<0&&d.push(a[f]),e[f]=g,f++}return c&&(d=b?d.sort(function(a,c){return a[b]>c[b]}):d.sort()),d}function u(a,b){for(var c,e,f=b[0].toUpperCase()+b.slice(1),g=0;g<ma.length;){if(c=ma[g],e=c?c+f:b,e in a)return e;g++}return d}function v(){return ua++}function w(b){var c=b.ownerDocument||b;return c.defaultView||c.parentWindow||a}function x(a,b){var c=this;this.manager=a,this.callback=b,this.element=a.element,this.target=a.options.inputTarget,this.domHandler=function(b){k(a.options.enable,[a])&&c.handler(b)},this.init()}function y(a){var b,c=a.options.inputClass;return new(b=c?c:xa?M:ya?P:wa?R:L)(a,z)}function z(a,b,c){var d=c.pointers.length,e=c.changedPointers.length,f=b&Ea&&d-e===0,g=b&(Ga|Ha)&&d-e===0;c.isFirst=!!f,c.isFinal=!!g,f&&(a.session={}),c.eventType=b,A(a,c),a.emit("hammer.input",c),a.recognize(c),a.session.prevInput=c}function A(a,b){var c=a.session,d=b.pointers,e=d.length;c.firstInput||(c.firstInput=D(b)),e>1&&!c.firstMultiple?c.firstMultiple=D(b):1===e&&(c.firstMultiple=!1);var f=c.firstInput,g=c.firstMultiple,h=g?g.center:f.center,i=b.center=E(d);b.timeStamp=ra(),b.deltaTime=b.timeStamp-f.timeStamp,b.angle=I(h,i),b.distance=H(h,i),B(c,b),b.offsetDirection=G(b.deltaX,b.deltaY);var j=F(b.deltaTime,b.deltaX,b.deltaY);b.overallVelocityX=j.x,b.overallVelocityY=j.y,b.overallVelocity=qa(j.x)>qa(j.y)?j.x:j.y,b.scale=g?K(g.pointers,d):1,b.rotation=g?J(g.pointers,d):0,b.maxPointers=c.prevInput?b.pointers.length>c.prevInput.maxPointers?b.pointers.length:c.prevInput.maxPointers:b.pointers.length,C(c,b);var k=a.element;o(b.srcEvent.target,k)&&(k=b.srcEvent.target),b.target=k}function B(a,b){var c=b.center,d=a.offsetDelta||{},e=a.prevDelta||{},f=a.prevInput||{};b.eventType!==Ea&&f.eventType!==Ga||(e=a.prevDelta={x:f.deltaX||0,y:f.deltaY||0},d=a.offsetDelta={x:c.x,y:c.y}),b.deltaX=e.x+(c.x-d.x),b.deltaY=e.y+(c.y-d.y)}function C(a,b){var c,e,f,g,h=a.lastInterval||b,i=b.timeStamp-h.timeStamp;if(b.eventType!=Ha&&(i>Da||h.velocity===d)){var j=b.deltaX-h.deltaX,k=b.deltaY-h.deltaY,l=F(i,j,k);e=l.x,f=l.y,c=qa(l.x)>qa(l.y)?l.x:l.y,g=G(j,k),a.lastInterval=b}else c=h.velocity,e=h.velocityX,f=h.velocityY,g=h.direction;b.velocity=c,b.velocityX=e,b.velocityY=f,b.direction=g}function D(a){for(var b=[],c=0;c<a.pointers.length;)b[c]={clientX:pa(a.pointers[c].clientX),clientY:pa(a.pointers[c].clientY)},c++;return{timeStamp:ra(),pointers:b,center:E(b),deltaX:a.deltaX,deltaY:a.deltaY}}function E(a){var b=a.length;if(1===b)return{x:pa(a[0].clientX),y:pa(a[0].clientY)};for(var c=0,d=0,e=0;b>e;)c+=a[e].clientX,d+=a[e].clientY,e++;return{x:pa(c/b),y:pa(d/b)}}function F(a,b,c){return{x:b/a||0,y:c/a||0}}function G(a,b){return a===b?Ia:qa(a)>=qa(b)?0>a?Ja:Ka:0>b?La:Ma}function H(a,b,c){c||(c=Qa);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return Math.sqrt(d*d+e*e)}function I(a,b,c){c||(c=Qa);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return 180*Math.atan2(e,d)/Math.PI}function J(a,b){return I(b[1],b[0],Ra)+I(a[1],a[0],Ra)}function K(a,b){return H(b[0],b[1],Ra)/H(a[0],a[1],Ra)}function L(){this.evEl=Ta,this.evWin=Ua,this.pressed=!1,x.apply(this,arguments)}function M(){this.evEl=Xa,this.evWin=Ya,x.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}function N(){this.evTarget=$a,this.evWin=_a,this.started=!1,x.apply(this,arguments)}function O(a,b){var c=s(a.touches),d=s(a.changedTouches);return b&(Ga|Ha)&&(c=t(c.concat(d),"identifier",!0)),[c,d]}function P(){this.evTarget=bb,this.targetIds={},x.apply(this,arguments)}function Q(a,b){var c=s(a.touches),d=this.targetIds;if(b&(Ea|Fa)&&1===c.length)return d[c[0].identifier]=!0,[c,c];var e,f,g=s(a.changedTouches),h=[],i=this.target;if(f=c.filter(function(a){return o(a.target,i)}),b===Ea)for(e=0;e<f.length;)d[f[e].identifier]=!0,e++;for(e=0;e<g.length;)d[g[e].identifier]&&h.push(g[e]),b&(Ga|Ha)&&delete d[g[e].identifier],e++;return h.length?[t(f.concat(h),"identifier",!0),h]:void 0}function R(){x.apply(this,arguments);var a=j(this.handler,this);this.touch=new P(this.manager,a),this.mouse=new L(this.manager,a),this.primaryTouch=null,this.lastTouches=[]}function S(a,b){a&Ea?(this.primaryTouch=b.changedPointers[0].identifier,T.call(this,b)):a&(Ga|Ha)&&T.call(this,b)}function T(a){var b=a.changedPointers[0];if(b.identifier===this.primaryTouch){var c={x:b.clientX,y:b.clientY};this.lastTouches.push(c);var d=this.lastTouches,e=function(){var a=d.indexOf(c);a>-1&&d.splice(a,1)};setTimeout(e,cb)}}function U(a){for(var b=a.srcEvent.clientX,c=a.srcEvent.clientY,d=0;d<this.lastTouches.length;d++){var e=this.lastTouches[d],f=Math.abs(b-e.x),g=Math.abs(c-e.y);if(db>=f&&db>=g)return!0}return!1}function V(a,b){this.manager=a,this.set(b)}function W(a){if(p(a,jb))return jb;var b=p(a,kb),c=p(a,lb);return b&&c?jb:b||c?b?kb:lb:p(a,ib)?ib:hb}function X(){if(!fb)return!1;var b={},c=a.CSS&&a.CSS.supports;return["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach(function(d){b[d]=c?a.CSS.supports("touch-action",d):!0}),b}function Y(a){this.options=la({},this.defaults,a||{}),this.id=v(),this.manager=null,this.options.enable=l(this.options.enable,!0),this.state=nb,this.simultaneous={},this.requireFail=[]}function Z(a){return a&sb?"cancel":a&qb?"end":a&pb?"move":a&ob?"start":""}function $(a){return a==Ma?"down":a==La?"up":a==Ja?"left":a==Ka?"right":""}function _(a,b){var c=b.manager;return c?c.get(a):a}function aa(){Y.apply(this,arguments)}function ba(){aa.apply(this,arguments),this.pX=null,this.pY=null}function ca(){aa.apply(this,arguments)}function da(){Y.apply(this,arguments),this._timer=null,this._input=null}function ea(){aa.apply(this,arguments)}function fa(){aa.apply(this,arguments)}function ga(){Y.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function ha(a,b){return b=b||{},b.recognizers=l(b.recognizers,ha.defaults.preset),new ia(a,b)}function ia(a,b){this.options=la({},ha.defaults,b||{}),this.options.inputTarget=this.options.inputTarget||a,this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=a,this.input=y(this),this.touchAction=new V(this,this.options.touchAction),ja(this,!0),g(this.options.recognizers,function(a){var b=this.add(new a[0](a[1]));a[2]&&b.recognizeWith(a[2]),a[3]&&b.requireFailure(a[3])},this)}function ja(a,b){var c=a.element;if(c.style){var d;g(a.options.cssProps,function(e,f){d=u(c.style,f),b?(a.oldCssProps[d]=c.style[d],c.style[d]=e):c.style[d]=a.oldCssProps[d]||""}),b||(a.oldCssProps={})}}function ka(a,c){var d=b.createEvent("Event");d.initEvent(a,!0,!0),d.gesture=c,c.target.dispatchEvent(d)}var la,ma=["","webkit","Moz","MS","ms","o"],na=b.createElement("div"),oa="function",pa=Math.round,qa=Math.abs,ra=Date.now;la="function"!=typeof Object.assign?function(a){if(a===d||null===a)throw new TypeError("Cannot convert undefined or null to object");for(var b=Object(a),c=1;c<arguments.length;c++){var e=arguments[c];if(e!==d&&null!==e)for(var f in e)e.hasOwnProperty(f)&&(b[f]=e[f])}return b}:Object.assign;var sa=h(function(a,b,c){for(var e=Object.keys(b),f=0;f<e.length;)(!c||c&&a[e[f]]===d)&&(a[e[f]]=b[e[f]]),f++;return a},"extend","Use `assign`."),ta=h(function(a,b){return sa(a,b,!0)},"merge","Use `assign`."),ua=1,va=/mobile|tablet|ip(ad|hone|od)|android/i,wa="ontouchstart"in a,xa=u(a,"PointerEvent")!==d,ya=wa&&va.test(navigator.userAgent),za="touch",Aa="pen",Ba="mouse",Ca="kinect",Da=25,Ea=1,Fa=2,Ga=4,Ha=8,Ia=1,Ja=2,Ka=4,La=8,Ma=16,Na=Ja|Ka,Oa=La|Ma,Pa=Na|Oa,Qa=["x","y"],Ra=["clientX","clientY"];x.prototype={handler:function(){},init:function(){this.evEl&&m(this.element,this.evEl,this.domHandler),this.evTarget&&m(this.target,this.evTarget,this.domHandler),this.evWin&&m(w(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&n(this.element,this.evEl,this.domHandler),this.evTarget&&n(this.target,this.evTarget,this.domHandler),this.evWin&&n(w(this.element),this.evWin,this.domHandler)}};var Sa={mousedown:Ea,mousemove:Fa,mouseup:Ga},Ta="mousedown",Ua="mousemove mouseup";i(L,x,{handler:function(a){var b=Sa[a.type];b&Ea&&0===a.button&&(this.pressed=!0),b&Fa&&1!==a.which&&(b=Ga),this.pressed&&(b&Ga&&(this.pressed=!1),this.callback(this.manager,b,{pointers:[a],changedPointers:[a],pointerType:Ba,srcEvent:a}))}});var Va={pointerdown:Ea,pointermove:Fa,pointerup:Ga,pointercancel:Ha,pointerout:Ha},Wa={2:za,3:Aa,4:Ba,5:Ca},Xa="pointerdown",Ya="pointermove pointerup pointercancel";a.MSPointerEvent&&!a.PointerEvent&&(Xa="MSPointerDown",Ya="MSPointerMove MSPointerUp MSPointerCancel"),i(M,x,{handler:function(a){var b=this.store,c=!1,d=a.type.toLowerCase().replace("ms",""),e=Va[d],f=Wa[a.pointerType]||a.pointerType,g=f==za,h=r(b,a.pointerId,"pointerId");e&Ea&&(0===a.button||g)?0>h&&(b.push(a),h=b.length-1):e&(Ga|Ha)&&(c=!0),0>h||(b[h]=a,this.callback(this.manager,e,{pointers:b,changedPointers:[a],pointerType:f,srcEvent:a}),c&&b.splice(h,1))}});var Za={touchstart:Ea,touchmove:Fa,touchend:Ga,touchcancel:Ha},$a="touchstart",_a="touchstart touchmove touchend touchcancel";i(N,x,{handler:function(a){var b=Za[a.type];if(b===Ea&&(this.started=!0),this.started){var c=O.call(this,a,b);b&(Ga|Ha)&&c[0].length-c[1].length===0&&(this.started=!1),this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:za,srcEvent:a})}}});var ab={touchstart:Ea,touchmove:Fa,touchend:Ga,touchcancel:Ha},bb="touchstart touchmove touchend touchcancel";i(P,x,{handler:function(a){var b=ab[a.type],c=Q.call(this,a,b);c&&this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:za,srcEvent:a})}});var cb=2500,db=25;i(R,x,{handler:function(a,b,c){var d=c.pointerType==za,e=c.pointerType==Ba;if(!(e&&c.sourceCapabilities&&c.sourceCapabilities.firesTouchEvents)){if(d)S.call(this,b,c);else if(e&&U.call(this,c))return;this.callback(a,b,c)}},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});var eb=u(na.style,"touchAction"),fb=eb!==d,gb="compute",hb="auto",ib="manipulation",jb="none",kb="pan-x",lb="pan-y",mb=X();V.prototype={set:function(a){a==gb&&(a=this.compute()),fb&&this.manager.element.style&&mb[a]&&(this.manager.element.style[eb]=a),this.actions=a.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var a=[];return g(this.manager.recognizers,function(b){k(b.options.enable,[b])&&(a=a.concat(b.getTouchAction()))}),W(a.join(" "))},preventDefaults:function(a){var b=a.srcEvent,c=a.offsetDirection;if(this.manager.session.prevented)return void b.preventDefault();var d=this.actions,e=p(d,jb)&&!mb[jb],f=p(d,lb)&&!mb[lb],g=p(d,kb)&&!mb[kb];if(e){var h=1===a.pointers.length,i=a.distance<2,j=a.deltaTime<250;if(h&&i&&j)return}return g&&f?void 0:e||f&&c&Na||g&&c&Oa?this.preventSrc(b):void 0},preventSrc:function(a){this.manager.session.prevented=!0,a.preventDefault()}};var nb=1,ob=2,pb=4,qb=8,rb=qb,sb=16,tb=32;Y.prototype={defaults:{},set:function(a){return la(this.options,a),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(a){if(f(a,"recognizeWith",this))return this;var b=this.simultaneous;return a=_(a,this),b[a.id]||(b[a.id]=a,a.recognizeWith(this)),this},dropRecognizeWith:function(a){return f(a,"dropRecognizeWith",this)?this:(a=_(a,this),delete this.simultaneous[a.id],this)},requireFailure:function(a){if(f(a,"requireFailure",this))return this;var b=this.requireFail;return a=_(a,this),-1===r(b,a)&&(b.push(a),a.requireFailure(this)),this},dropRequireFailure:function(a){if(f(a,"dropRequireFailure",this))return this;a=_(a,this);var b=r(this.requireFail,a);return b>-1&&this.requireFail.splice(b,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(a){return!!this.simultaneous[a.id]},emit:function(a){function b(b){c.manager.emit(b,a)}var c=this,d=this.state;qb>d&&b(c.options.event+Z(d)),b(c.options.event),a.additionalEvent&&b(a.additionalEvent),d>=qb&&b(c.options.event+Z(d))},tryEmit:function(a){return this.canEmit()?this.emit(a):void(this.state=tb)},canEmit:function(){for(var a=0;a<this.requireFail.length;){if(!(this.requireFail[a].state&(tb|nb)))return!1;a++}return!0},recognize:function(a){var b=la({},a);return k(this.options.enable,[this,b])?(this.state&(rb|sb|tb)&&(this.state=nb),this.state=this.process(b),void(this.state&(ob|pb|qb|sb)&&this.tryEmit(b))):(this.reset(),void(this.state=tb))},process:function(a){},getTouchAction:function(){},reset:function(){}},i(aa,Y,{defaults:{pointers:1},attrTest:function(a){var b=this.options.pointers;return 0===b||a.pointers.length===b},process:function(a){var b=this.state,c=a.eventType,d=b&(ob|pb),e=this.attrTest(a);return d&&(c&Ha||!e)?b|sb:d||e?c&Ga?b|qb:b&ob?b|pb:ob:tb}}),i(ba,aa,{defaults:{event:"pan",threshold:10,pointers:1,direction:Pa},getTouchAction:function(){var a=this.options.direction,b=[];return a&Na&&b.push(lb),a&Oa&&b.push(kb),b},directionTest:function(a){var b=this.options,c=!0,d=a.distance,e=a.direction,f=a.deltaX,g=a.deltaY;return e&b.direction||(b.direction&Na?(e=0===f?Ia:0>f?Ja:Ka,c=f!=this.pX,d=Math.abs(a.deltaX)):(e=0===g?Ia:0>g?La:Ma,c=g!=this.pY,d=Math.abs(a.deltaY))),a.direction=e,c&&d>b.threshold&&e&b.direction},attrTest:function(a){return aa.prototype.attrTest.call(this,a)&&(this.state&ob||!(this.state&ob)&&this.directionTest(a))},emit:function(a){this.pX=a.deltaX,this.pY=a.deltaY;var b=$(a.direction);b&&(a.additionalEvent=this.options.event+b),this._super.emit.call(this,a)}}),i(ca,aa,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[jb]},attrTest:function(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.scale-1)>this.options.threshold||this.state&ob)},emit:function(a){if(1!==a.scale){var b=a.scale<1?"in":"out";a.additionalEvent=this.options.event+b}this._super.emit.call(this,a)}}),i(da,Y,{defaults:{event:"press",pointers:1,time:251,threshold:9},getTouchAction:function(){return[hb]},process:function(a){var b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,f=a.deltaTime>b.time;if(this._input=a,!d||!c||a.eventType&(Ga|Ha)&&!f)this.reset();else if(a.eventType&Ea)this.reset(),this._timer=e(function(){this.state=rb,this.tryEmit()},b.time,this);else if(a.eventType&Ga)return rb;return tb},reset:function(){clearTimeout(this._timer)},emit:function(a){this.state===rb&&(a&&a.eventType&Ga?this.manager.emit(this.options.event+"up",a):(this._input.timeStamp=ra(),this.manager.emit(this.options.event,this._input)))}}),i(ea,aa,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[jb]},attrTest:function(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.rotation)>this.options.threshold||this.state&ob)}}),i(fa,aa,{defaults:{event:"swipe",threshold:10,velocity:.3,direction:Na|Oa,pointers:1},getTouchAction:function(){return ba.prototype.getTouchAction.call(this)},attrTest:function(a){var b,c=this.options.direction;return c&(Na|Oa)?b=a.overallVelocity:c&Na?b=a.overallVelocityX:c&Oa&&(b=a.overallVelocityY),this._super.attrTest.call(this,a)&&c&a.offsetDirection&&a.distance>this.options.threshold&&a.maxPointers==this.options.pointers&&qa(b)>this.options.velocity&&a.eventType&Ga},emit:function(a){var b=$(a.offsetDirection);b&&this.manager.emit(this.options.event+b,a),this.manager.emit(this.options.event,a)}}),i(ga,Y,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},getTouchAction:function(){return[ib]},process:function(a){var b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,f=a.deltaTime<b.time;if(this.reset(),a.eventType&Ea&&0===this.count)return this.failTimeout();if(d&&f&&c){if(a.eventType!=Ga)return this.failTimeout();var g=this.pTime?a.timeStamp-this.pTime<b.interval:!0,h=!this.pCenter||H(this.pCenter,a.center)<b.posThreshold;this.pTime=a.timeStamp,this.pCenter=a.center,h&&g?this.count+=1:this.count=1,this._input=a;var i=this.count%b.taps;if(0===i)return this.hasRequireFailures()?(this._timer=e(function(){this.state=rb,this.tryEmit()},b.interval,this),ob):rb}return tb},failTimeout:function(){return this._timer=e(function(){this.state=tb},this.options.interval,this),tb},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==rb&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),ha.VERSION="2.0.7",ha.defaults={domEvents:!1,touchAction:gb,enable:!0,inputTarget:null,inputClass:null,preset:[[ea,{enable:!1}],[ca,{enable:!1},["rotate"]],[fa,{direction:Na}],[ba,{direction:Na},["swipe"]],[ga],[ga,{event:"doubletap",taps:2},["tap"]],[da]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};var ub=1,vb=2;ia.prototype={set:function(a){return la(this.options,a),a.touchAction&&this.touchAction.update(),a.inputTarget&&(this.input.destroy(),this.input.target=a.inputTarget,this.input.init()),this},stop:function(a){this.session.stopped=a?vb:ub},recognize:function(a){var b=this.session;if(!b.stopped){this.touchAction.preventDefaults(a);var c,d=this.recognizers,e=b.curRecognizer;(!e||e&&e.state&rb)&&(e=b.curRecognizer=null);for(var f=0;f<d.length;)c=d[f],b.stopped===vb||e&&c!=e&&!c.canRecognizeWith(e)?c.reset():c.recognize(a),!e&&c.state&(ob|pb|qb)&&(e=b.curRecognizer=c),f++}},get:function(a){if(a instanceof Y)return a;for(var b=this.recognizers,c=0;c<b.length;c++)if(b[c].options.event==a)return b[c];return null},add:function(a){if(f(a,"add",this))return this;var b=this.get(a.options.event);return b&&this.remove(b),this.recognizers.push(a),a.manager=this,this.touchAction.update(),a},remove:function(a){if(f(a,"remove",this))return this;if(a=this.get(a)){var b=this.recognizers,c=r(b,a);-1!==c&&(b.splice(c,1),this.touchAction.update())}return this},on:function(a,b){if(a!==d&&b!==d){var c=this.handlers;return g(q(a),function(a){c[a]=c[a]||[],c[a].push(b)}),this}},off:function(a,b){if(a!==d){var c=this.handlers;return g(q(a),function(a){b?c[a]&&c[a].splice(r(c[a],b),1):delete c[a]}),this}},emit:function(a,b){this.options.domEvents&&ka(a,b);var c=this.handlers[a]&&this.handlers[a].slice();if(c&&c.length){b.type=a,b.preventDefault=function(){b.srcEvent.preventDefault()};for(var d=0;d<c.length;)c[d](b),d++}},destroy:function(){this.element&&ja(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},la(ha,{INPUT_START:Ea,INPUT_MOVE:Fa,INPUT_END:Ga,INPUT_CANCEL:Ha,STATE_POSSIBLE:nb,STATE_BEGAN:ob,STATE_CHANGED:pb,STATE_ENDED:qb,STATE_RECOGNIZED:rb,STATE_CANCELLED:sb,STATE_FAILED:tb,DIRECTION_NONE:Ia,DIRECTION_LEFT:Ja,DIRECTION_RIGHT:Ka,DIRECTION_UP:La,DIRECTION_DOWN:Ma,DIRECTION_HORIZONTAL:Na,DIRECTION_VERTICAL:Oa,DIRECTION_ALL:Pa,Manager:ia,Input:x,TouchAction:V,TouchInput:P,MouseInput:L,PointerEventInput:M,TouchMouseInput:R,SingleTouchInput:N,Recognizer:Y,AttrRecognizer:aa,Tap:ga,Pan:ba,Swipe:fa,Pinch:ca,Rotate:ea,Press:da,on:m,off:n,each:g,merge:ta,extend:sa,assign:la,inherit:i,bindFn:j,prefixed:u});var wb="undefined"!=typeof a?a:"undefined"!=typeof self?self:{};wb.Hammer=ha,"function"==typeof define&&define.amd?define(function(){return ha}):"undefined"!=typeof module&&module.exports?module.exports=ha:a[c]=ha}(window,document,"Hammer");
//# sourceMappingURL=hammer.min.js.mapclass Account {
	static register() {
		var formData = new FormData();
		var email = document.getElementById('email-input').value;
		formData.append('email', email);
		$.ajax({
			url: "https://yapms.org/auth/register.php",
			type: "POST",
			data: formData,
			processData: false,
			contentType: false,
			xhrFields: {
				withCredentials: true
			},
			crossDomain: true,
			success: function(data) {
				console.log('Register: ' + data);
				//alert(data);
				var arr = data.split(' ');
				var registerInfo = document.getElementById('register-info');
				closeAllPopups();
				if(arr[0] === 'good') {
					displayNotification('Account Registered',
						'Please check your email, and click the verification link. (check your spam)');	
				} else if(arr[1] === 'inuse') {
					displayNotification('Register Error',
						'Account Already Registered');	
				} else if(arr[1] === 'inactive') {
					displayNotification('Register Error',
						'Verification Email Already Sent (check your spam)');	
				} else if(arr[1] === 'resent') {
					displayNotification('Account Registered',
						'Please check your email, and click the verification link. (check your spam)');	
				} else if(arr[1] === 'invalid_email') {
					displayNotification('Register Error',
						email + ' is not a valid email');	
				}
			},
			error: function(a, b, c) {
				console.log(a);
				console.log(b);
				console.log(c);
				var registerInfo = document.getElementById('register-info');
				registerInfo.innerHTML = 'Connection Error';	
			}	
		});
	}

	static login() {
		var formData = new FormData();
		var email = document.getElementById('email-login').value;
		var pass = document.getElementById('password-login').value;
		formData.append('email', email);
		formData.append('password', pass);
		$.ajax({
			url: "https://yapms.org/auth/login.php",
			type: "POST",
			data: formData,
			processData: false,
			contentType: false,
			xhrFields: {
				withCredentials: true
			},
			crossDomain: true,
			success: function(data) {
				console.log('Login: ' + data);
				var arr = data.split(' ');
				Account.verifyState();
				document.getElementById('password-login').value = "";
				var loginInfo = document.getElementById('login-info');
				if(arr[0] === 'good') {
					loginInfo.innerHTML = 'Please enter your credentials';
					closeAllPopups();
				} else if(arr[0] === 'bad') {
					if(arr[1] === 'account_innactive') {
						loginInfo.innerHTML = 'Inactive Account';
					} else if(arr[1] === 'incorrect_login') {
						loginInfo.innerHTML = 'Incorrect Login';
					}
				}
			},
			error: function(a, b, c) {
				console.log(a);
				console.log(b);
				console.log(c);
				var loginInfo = document.getElementById('login-info');
				loginInfo.innerHTML = 'Connection Error';
			}	
		});
	}

	static verifyState() {
		var formData = new FormData();
		formData.append('email', Account.email);
		$.ajax({
			url: "https://yapms.org/auth/verify_login.php",
			type: "POST",
			data: formData,
			processData: false,
			contentType: false,
			xhrFields: {
				withCredentials: true
			},
			crossDomain: true,
			success: function(data) {
				console.log('Verify Login: ' + data);
				var arr = data.split(' ');
				Account.isLoggedIn = (arr[0] === 'good');
				if(Account.isLoggedIn) {
					Account.email = arr[1];
					Account.id = arr[2];
				} else {
					Account.id = null;
					Account.email = null;	
				}
				Account.updateHTML();
			},
			error: function(a, b, c) {
				console.log(a);
				console.log(b);
				console.log(c);
			}	
		});
	}

	static logout() {
		closeAllPopups();
		$.ajax({
			url: "https://yapms.org/auth/logout.php",
			type: "POST",
			processData: false,
			contentType: false,
			xhrFields: {
				withCredentials: true
			},
			crossDomain: true,
			success: function(data) {
				console.log('Logout: ' + data);
				Account.verifyState();
			},
			error: function(a, b, c) {
				console.log(a);
				console.log(b);
				console.log(c);
			}	
		});
	}

	static unlink(mapName) {
		var formData = new FormData();
		formData.append("mapName", mapName);
		$.ajax({
			url: "https://yapms.org/users/.tools/unlink.php",
			type: "POST",
			data: formData,
			processData: false,
			contentType: false,
			xhrFields: {
				withCredentials: true
			},
			crossDomain: true,
			success: function(data) {
				console.log(data);
			},
			error: function(a, b, c) {
				console.log(a);
				console.log(b);
				console.log(c);
			}	
		});
	}

	static save(mapName) {
		var formData = new FormData();
		var img = document.getElementById("mysaves-current-mappreview");
		if(img) {
			formData.append("img", img.src);
		}

		if(mapName) {
			formData.append("mapName", mapName);
		} else {	
			var mapNameElement = document.getElementById("mysaves-name-input");
			if(mapNameElement) {
				formData.append("mapName", mapNameElement.value);
				mapNameElement.value = '';
			}
		}

		var error = document.getElementById("mysaves-current-error");
		if(error) {
			error.style.display = 'none';
		}
	
		var data = {};
		data['filename'] = MapLoader.save_filename;
		data['dataid'] = MapLoader.save_dataid;
		data['type'] = MapLoader.save_type;
		data['year'] = MapLoader.save_year;
		data['fontsize'] = MapLoader.save_fontsize;
		data['strokewidth'] = MapLoader.save_strokewidth;
		data['updatetext'] = mapOptions.updateText;
		data['candidates'] = {};
		data['states'] = {};
		data['proportional'] = {};

		for(var key in CandidateManager.candidates) {
			if(key === 'Tossup') {
				continue;
			}
			var candidate = CandidateManager.candidates[key];
			data['candidates'][candidate.name] = {};
			data['candidates'][candidate.name]['solid'] = candidate.colors[0];
			data['candidates'][candidate.name]['likely'] = candidate.colors[1];
			data['candidates'][candidate.name]['lean'] = candidate.colors[2];
			data['candidates'][candidate.name]['tilt'] = candidate.colors[3];
		}

		for(var stateIndex = 0; stateIndex < states.length; ++stateIndex) {
			var state = states[stateIndex];
			data['states'][state.name] = {};
			data['states'][state.name]['candidate'] = state.candidate;
			data['states'][state.name]['delegates'] = state.delegates;
			data['states'][state.name]['votecount'] = state.voteCount;
			data['states'][state.name]['colorvalue'] = state.colorValue;
			data['states'][state.name]['disabled'] = state.disabled;
		}

		for(var stateIndex = 0; stateIndex < proportionalStates.length; ++stateIndex) {
			var state = proportionalStates[stateIndex];
			data['proportional'][state.name] = {};
			data['proportional'][state.name]['candidate'] = state.candidate;
			data['proportional'][state.name]['delegates'] = state.delegates;
			data['proportional'][state.name]['votecount'] = state.voteCount;
			data['proportional'][state.name]['colorvalue'] = state.colorValue;
			data['proportional'][state.name]['disabled'] = state.disabled;
		}
		
		formData.append("data", JSON.stringify(data));

		$.ajax({
			url: "https://yapms.org/users/.tools/upload.php",
			type: "POST",
			data: formData,
			processData: false,
			contentType: false,
			xhrFields: {
				withCredentials: true
			},
			crossDomain: true,
			success: function(data) {
				var arr = data.split(' ');
				console.log(arr);
				if(arr[0] === "bad") {
					error.style.display = 'inline';
					if(arr[1] === "no_map_name") {
						error.innerHTML = "Enter Map Name";
					} else if(arr[1] === "file_limit") {
						error.innerHTML = "File Limit Reached";	
					} else {
						error.innerHTML = "Upload Error";	
					}
				} else {
					var base64name = arr[1];
					Account.addMapBox(base64name, true);
				}
			},
			error: function(a, b, c) {
				console.log(a);
				console.log(b);
				console.log(c);
			}
		});
	}

	static changePassword() {
		var formData = new FormData();
		var current = document.getElementById('password-reset-1').value;
		var newPass = document.getElementById('password-reset-2').value;
		var verifyPass = document.getElementById('password-reset-3').value;
		formData.append('current', current);
		formData.append('new', newPass);
		formData.append('verify', verifyPass);
		$.ajax({
			url: "https://yapms.org/auth/change_password.php",
			type: "POST",
			data: formData,
			processData: false,
			contentType: false,
			xhrFields: {
				withCredentials: true
			},
			crossDomain: true,
			success: function(data) {
				console.log('Change Password: ' + data);
				var arr = data.split(' ');
				var passwordChangeInfo = document.getElementById('passwordchange-info');
				if(arr[0] === 'good') {
					closeAllPopups();
					displayNotification('Password Change',
						'Your password has been changed');
					passwordChangeInfo.innerHTML = 'Please enter current and new password';
					document.getElementById('password-reset-1').value = "";
					document.getElementById('password-reset-2').value = "";
					document.getElementById('password-reset-3').value = "";
				} else if(arr[0] === 'bad') {
					if(arr[1] === 'verify_incorrect') {
						passwordChangeInfo.innerHTML = 'Passwords do not match';
					} else if(arr[1] === 'incorrect_pass') {
						passwordChangeInfo.innerHTML = 'Current password incorrect';
					} else if(arr[1] === 'no_post') {
						passwordChangeInfo.innerHTML = 'Missing information';
					}
				}
			},
			error: function(a, b, c) {
				console.log(a);
				console.log(b);
				console.log(c);
			}	
		});
	}

	static forgotPassword() {
		var formData = new FormData();
		var email = document.getElementById('email-forgot-input').value;
		formData.append('email', email);
		$.ajax({
			url: "https://yapms.org/auth/forgot_password.php",
			type: "POST",
			data: formData,
			processData: false,
			contentType: false,
			xhrFields: {
				withCredentials: true
			},
			crossDomain: true,
			success: function(data) {
				console.log('Forgot Password: ' + data);
				var arr = data.split(' ');
				closeAllPopups();
				if(arr[0] === 'good') {
					if(arr[1] === 'reset_sent') {
						displayNotification('Password Reset',
							'Password reset email sent. (check your spam)');	
					}
				} else if(arr[0] === 'bad') {
					if(arr[1] === 'innactive_account') {
						displayNotification('Password Reset Error',
							email + ' is not active. Please register or verify.');	
					} else if(arr[1] === 'recent_verification') {
						displayNotification('Password Reset Error',
							'Password was recently reset, please wait.');	
					} else if(arr[1] === 'please_register') {
						displayNotification('Password Reset Error',
							email + ' is not registered. Please register.');	
					}
				}
			},
			error: function(a, b, c) {
				console.log(a);
				console.log(b);
				console.log(c);
			}	
		});
	}

	static addMapBox(base64name, preappend) {
		/* GET BASE64 DATA AND DECODE */
		var name = base64name;
		var nameDecode = atob(base64name);

		/* DELETE MAP BOX IF ALREADY EXISTS */
		var previous = document.getElementById("mappreview-" + name);
		if(previous) {
			previous.src = "https://yapms.org/users/"  + Account.id + "/" + name + ".png#" + new Date().getTime();
			return;
		}
	
		/* CREATE MAP BOX ELEMENT */	
		var mapBox = document.createElement('div');
		mapBox.className = "mysaves-mapbox";
		mapBox.id = "mapbox-" + name;
		var mapBoxHeader = document.createElement('div');
		mapBoxHeader.className = "mysaves-mapbox-header";

		/* CREATE MAP TOOLBAR */
		var mapToolbar = document.createElement('div');
		mapToolbar.className = "mysaves-mapbox-toolbar";

		/* CREATE DELETE MAP BUTTON */
		var mapDelete = document.createElement('img');
		mapDelete.className = "toolbar-button toolbar-button-red";
		mapDelete.src = "./html/deletebutton.svg";
		mapDelete.setAttribute('title', 'Delete Map');
		mapDelete.onclick = (function() {
			var name_onclick = name;
			var thisMap  = mapBox;
			var allMaps = document.getElementById("mysaves-maps");
			return function() {
				Account.unlink(name_onclick);
				if(allMaps && thisMap) {
					allMaps.removeChild(thisMap)
				}
			}
		})();
		//mapBoxHeader.appendChild(mapDelete);
		mapToolbar.appendChild(mapDelete);

		/* CREATE DOWNLOAD MAP BUTTON */
		var mapDownloadA = document.createElement('a');
		mapDownloadA.setAttribute('class', 'toolbar-button toolbar-button-blue');
		mapDownloadA.setAttribute('href', "https://yapms.org/users/.tools/download.php?u=" + Account.id + "&m=" + name);
		mapDownloadA.setAttribute('title', 'Download');
		var mapDownloadImg = document.createElement('img');
		mapDownloadImg.src = "./html/downloadbutton.svg";
		mapDownloadImg.setAttribute('class', 'toolbar-button-download');
		mapDownloadA.appendChild(mapDownloadImg);	
		mapToolbar.appendChild(mapDownloadA);

		/* CREATE OVERWRITE MAP BUTTON */
		var mapOverwrite = document.createElement('img');
		mapOverwrite.setAttribute('class', 'toolbar-button toolbar-button-green');
		mapOverwrite.src = "./html/overwritebutton.svg";
		mapOverwrite.setAttribute('title', 'Overwrite');
		mapOverwrite.onclick = (function() {
			var ref_mapName = nameDecode;
			return function() {
				Account.save(ref_mapName);
			}
		})();
		mapToolbar.appendChild(mapOverwrite);

		/* APPEND TOOLBAR */	
		mapBoxHeader.appendChild(mapToolbar);

		/* CREATE MAP NAME */
		var mapName = document.createElement('div');
		mapName.className = "mysaves-mapname";
		mapName.innerHTML = nameDecode;
		mapBoxHeader.appendChild(mapName);
		
		mapBox.appendChild(mapBoxHeader);

		/* CREATE MAP PREVIEW */	
		var mapPreview = document.createElement('img');
		mapPreview.className = "mysaves-mappreview";
		mapPreview.id = "mappreview-" + name;
		mapPreview.src = "https://yapms.org/users/"  + Account.id + "/" + name + ".png#" + new Date().getTime();
		mapPreview.alt = "No Preview";
		mapPreview.onclick = (function() {
			var url = "https://www.yapms.com/app/?u=" + Account.id + '&m=' + name;
			return function() {
				window.location.href = url;
			}
		})();
		mapBox.appendChild(mapPreview);

		/* CREATE MAP LINK */
		var mapBoxURL = document.createElement('div');
		mapBoxURL.className = "mysaves-url";
		var mapURL = document.createTextNode("https://www.yapms.com/app/?u=" + Account.id + "&m=" + name);
		mapBoxURL.appendChild(mapURL);
		mapBox.appendChild(mapBoxURL);

		var maps = document.getElementById("mysaves-maps");
		if(preappend) {
			maps.insertBefore(mapBox, maps.firstChild);
		} else {
			maps.appendChild(mapBox);
		}
	}

	static closeMyMaps() {
		var page = document.getElementById("application-mysaves");
		page.style.display = "none";
		var maps = document.getElementById("mysaves-maps");
		while(maps.firstChild) {
			maps.removeChild(maps.firstChild);
		}
	}

	static getMaps() {
		var maps = document.getElementById("mysaves-maps");
		while(maps.firstChild) {
			maps.removeChild(maps.firstChild);
		}

		var current = document.getElementById("mysaves-current-map");
		if(current) {
			current.style.display = "none";
		}
		
		var error = document.getElementById("mysaves-current-error");
		if(error) {
			error.style.display = 'none';
		}

		var page = document.getElementById("application-mysaves");
		if(page) {
			page.style.display = "inline-flex";
		}

		html2canvas(document.getElementById("application"), {logging: false, onclone: function(clone) {
			// remove the custom fonts from the clone
			var svgtext = clone.getElementById('text');
			if(svgtext) {
				svgtext.style.fontFamily = 'arial';
				svgtext.style.fontSize = '15px';
			}
			var svg = clone.getElementById('svgdata');
			var mapdiv = clone.getElementById('map-div');
			if(svg && mapdiv) {
				svg.setAttribute('width', mapdiv.offsetWidth);
				svg.setAttribute('height', mapdiv.offsetHeight);
			}
			var notification = clone.getElementById('legend-tooltip');
			if(notification) {
				notification.style.display = 'none';
			}
			var editButtons = clone.getElementsByClassName('legend-delete');
			for(var index = 0, length = editButtons.length; index < length; ++index) {
				var element = editButtons[index];
				if(element) {
					element.style.display = 'none';
				}
			}
			var addCandidate = clone.getElementById('legend-addcandidate-button');
			if(addCandidate) {
				addCandidate.style.display = 'none';
			}
		}}).then(function(canvas) {
			canvas.style.width = 0;
			canvas.style.height = 0;	
			canvas.style.display = 'none';
			var img = canvas.toDataURL('image/png');
			var i = document.getElementById('mysaves-current-mappreview');
			i.src = img;
			i.style.width = '40vw';
			i.style.height = 'auto';
			var current = document.getElementById("mysaves-current-map");
			if(current) {
				current.style.display = "inline-flex";
			}
		});
		
		$.ajax({
			url: "https://yapms.org/users/.tools/get_maps.php",
			type: "POST",
			processData: false,
			contentType: false,
			xhrFields: {
				withCredentials: true
			},
			crossDomain: true,
			success: function(data) {
				var arr = data.split(' ');
				for(var fileIndex = 0; fileIndex < arr.length; ++fileIndex) {
					/* GET BASE64 DATA */
					var fileName = arr[fileIndex].split('/');
					var name = fileName[2].split('.')[0];
					Account.addMapBox(name, false);
				}
			},
			error: function(a, b, c) {
				console.log(a);
				console.log(b);
				console.log(c);
			}
		});
	}

	static updateHTML() {
		var loginButton = document.getElementById('login-button');
		var accountButton = document.getElementById('account-button');
		var mymapsButton = document.getElementById('mymaps-button');
		var accountEmail = document.getElementById('account-email');

		if(Account.isLoggedIn) {
			loginButton.style.display = 'none';
			accountButton.style.display = '';
			mymapsButton.style.display = '';
			accountEmail.innerHTML = Account.email;
		} else {
			loginButton.style.display = '';
			accountButton.style.display = 'none';
			mymapsButton.style.display = 'none';
		}
	}
}

Account.email = null;
Account.id = null;
Account.isLoggedIn = false;

$("#login-form").submit(function(event) {
	event.preventDefault();
	Account.login();
});
// list of candidates

class Candidate {
	constructor(name, colors) {
		this.name = name;
		this.colors = colors;
		this.voteCount = 0;
		this.probVoteCounts = [0,0,0,0];

		if(colors[0] === colors[1] &&
			colors[0] === colors[2] &&
			colors[0] === colors[3]) {
			this.singleColor = true;
		} else {
			this.singleColor = false;
		}
	}
};

class CandidateManager {
	static initCandidates() {
		CandidateManager.candidates = {};
		CandidateManager.candidates['Tossup'] = CandidateManager.TOSSUP;
	}

	static deleteCandidate() {
		closeAllPopups();
		var candidateid = document.getElementById('candidate-originalName').value;
		for(var index = 0; index < states.length; ++index) {
			var state = states[index];
			// set the candidate to tossup
			if(state.getCandidate() === candidateid) {
				state.setColor('Tossup', 0);
			}

			// if its a primary remove the delegates and set them to tossup
			var dels = state.delegates[candidateid];
			if(dels) {
				state.delegates['Tossup'] += dels;
			}
			state.delegates[candidateid] = undefined;
		}

		delete CandidateManager.candidates[candidateid];
		ChartManager.chart.generateLegend();
		countVotes();
		LegendManager.updateLegend();
		MapManager.verifyMap();
		ChartManager.updateChart();
		countPopularVote();
	}

	static deleteCandidateByName(name) {
		var candidateid = name;
		for(var index = 0; index < states.length; ++index) {
			state = states[index];
			// set the candidate to tossup
			if(state.getCandidate() === candidateid) {
				state.setColor('Tossup', 0);
			}

			// if its a primary remove the delegates and set them to tossup
			var dels = state.delegates[candidateid];
			if(dels) {
				state.delegates['Tossup'] += dels;
			}
			state.delegates[candidateid] = undefined;
		}

		delete CandidateManager.candidates[candidateid];
		ChartManager.chart.generateLegend();
		countVotes();
		LegendManager.updateLegend();
		MapManager.verifyMap();
		ChartManager.updateChart();
		countPopularVote();
	}

	static setCandidate() {
		closeAllPopups();

		var candidateid = document.getElementById('candidate-originalName').value;
		var newname = document.getElementById('candidate-name').value;
		var solidColor = document.getElementById('candidate-solid').value;
		var likelyColor = document.getElementById('candidate-likely').value;
		var leanColor = document.getElementById('candidate-lean').value;
		var tiltColor = document.getElementById('candidate-tilt').value;

		// only rename the property if the name changed
		if(newname !== candidateid) {
			Object.defineProperty(CandidateManager.candidates, newname,
				Object.getOwnPropertyDescriptor(CandidateManager.candidates, candidateid));
			setChangeCandidate(candidateid, newname);
			delete CandidateManager.candidates[candidateid];
		}

		var candidate = CandidateManager.candidates[newname];
		candidate.name = newname;
		candidate.colors[0] = solidColor;
		candidate.colors[1] = likelyColor;
		candidate.colors[2] = leanColor;
		candidate.colors[3] = tiltColor;
		
		if(solidColor === likelyColor &&
			solidColor === leanColor &&
			solidColor === tiltColor) {
			candidate.singleColor = true;
			candidate.probVoteCounts[0] += 
				candidate.probVoteCounts[1] +
				candidate.probVoteCounts[2] +
				candidate.probVoteCounts[3];
			candidate.probVoteCounts[1] = 0;
			candidate.probVoteCounts[2] = 0;
			candidate.probVoteCounts[3] = 0;
		} else {
			candidate.singleColor = false;
		}

		ChartManager.chart.generateLegend();
		MapManager.verifyMap();
		countVotes();
		LegendManager.updateLegend();
		ChartManager.updateChart();
	}

	static addCandidate(name, solid, likely, leaning, tilting) {
		if(name === undefined) {
			var nameHTML = document.getElementById('name');
			if(nameHTML !== null) {
				name = nameHTML.value;
			} else {
				name = "Error";
			}
		}

		// ignore white space candidates
		if(name.trim() === '') {
			return;
		}

		if(solid === undefined) {
			var solidHTML = document.getElementById('solid');
			if(solidHTML !== null) {
				solid = solidHTML.value;
			} else {
				solid = '#000000';
			}
		}

		if(likely === undefined) {
			var likelyHTML = document.getElementById('likely');
			if(likelyHTML !== null) {
				likely = likelyHTML.value;
			} else {
				likely = '#000000';
			}
		}

		if(leaning === undefined) {
			var leaningHTML = document.getElementById('leaning');
			if(leaningHTML !== null) {
				leaning = leaningHTML.value;
			} else {
				leaning = '#000000';
			}
		}

		if(tilting === undefined) {
			var tiltingHTML = document.getElementById('tilting');
			if(tiltingHTML !== null) {
				tilting = tiltingHTML.value;
			} else {
				tilting = '#000000';
			}
		}
		
		var candidate = new Candidate(name, [solid, likely, leaning, tilting]);
		CandidateManager.candidates[name] = candidate;

		MapManager.verifyMap();
		verifyPaintIndex();
		countVotes();
		ChartManager.updateChart();
		ChartManager.chart.generateLegend();
		LegendManager.updateLegend();

		countPopularVote();
	}
	
	static saveCustomColors() {
		var customColorName = document.getElementById('custom-color-name');
		var name = customColorName.value;
		var solid = document.getElementById("solidcustom").value;
		CookieManager.appendCookie(name + "solid", solid);	
		var likely = document.getElementById("likelycustom").value;
		CookieManager.appendCookie(name + "likely", likely);	
		var leaning = document.getElementById("leaningcustom").value;
		CookieManager.appendCookie(name + "leaning", leaning);	
		var tilting = document.getElementById("tiltingcustom").value;
		CookieManager.appendCookie(name + "tilting", tilting);
		CandidateManager.setColors(name);
	}

	static setColors(palette) {
		var solid = document.getElementById('solid');
		var likely = document.getElementById('likely');
		var leaning =  document.getElementById('leaning');
		var tilting = document.getElementById('tilting');

		if(palette === 'red') {
			solid.value = '#bf1d29';
			likely.value = '#ff5865';
			leaning.value = '#ff8b98';
			tilting.value ='#cf8980';
		} else if(palette === 'blue') {
			solid.value = '#1c408c';
			likely.value = '#577ccc';
			leaning.value = '#8aafff';
			tilting.value = '#949bb3';
		} else if(palette === 'green') {
			solid.value = '#1c8c28';
			likely.value = '#50c85e';
			leaning.value = '#8aff97';
			tilting.value = '#7a997e';
		} else if(palette === 'yellow') {
			solid.value = '#e6b700';
			likely.value = '#e8c84d';
			leaning.value = '#ffe78a';
			tilting.value = '#b8a252';
		} else {
			solid.value = CookieManager.cookies[palette + 'solid'];
			likely.value = CookieManager.cookies[palette + 'likely'];
			leaning.value = CookieManager.cookies[palette + 'leaning'];
			tilting.value = CookieManager.cookies[palette + 'tilting'];
		}
	}
}

CandidateManager.candidates = {};
CandidateManager.tossupColor = 2;
CandidateManager.TOSSUP = new Candidate('Tossup', ['#000000', '#ffffff', '#bbb7b2', '#000000']);
class ChartManager {
	static initChart() {
		ChartManager.chartOptions = {
			// This basically inserts HTML into the legend-div div
			// it's a WIP
			legendCallback: function(chart) {
				console.log("Generating Legend...");
				var legendDiv = document.getElementById('legend-div');
				legendDiv.innerHTML = '';
				var index = -1;
				for(var key in CandidateManager.candidates) {
					var candidate = CandidateManager.candidates[key];
					++index;
					var legendElement = document.createElement('div');
					legendElement.setAttribute('id', candidate.name);
					legendElement.setAttribute('class', 'legend-button');
					legendElement.onclick = (function() {
						var ref_key = key;
						return function() {	
							legendClick(ref_key, this);
						}
					})();
					legendElement.style.background = 'none';
					legendDiv.appendChild(legendElement);
				
					var legendText = document.createElement('div');
					legendText.setAttribute('id', candidate.name + '-text');	
					legendText.setAttribute('class', 'legend-button-text');	
					legendText.style.backgroundColor = candidate.colors[0];
					if(index == 0) {
						var color = candidate.colors[CandidateManager.tossupColor];
						legendText.style.backgroundColor = color;
					}
					legendText.style.padding = '0px';
					legendText.innerHTML = candidate.name;
					legendElement.appendChild(legendText);
		
					var legendDelete = document.createElement('div');
					legendDelete.setAttribute('class', 'legend-delete');
					legendDelete.style.backgroundColor = 'black';
					legendText.appendChild(legendDelete);

					var legendColorDiv = document.createElement('div');
					legendColorDiv.setAttribute('class', 'legend-color-div');
					legendElement.appendChild(legendColorDiv);
				
					if(candidate.singleColor) {
						legendColorDiv.style.display = 'none';
					}

					if((key === 'Republican' || key === 'Democrat')
						&& MapLoader.save_year === '2020' && 
						(MapLoader.save_type === 'senatorial' || MapLoader.save_type === 'gubernatorial')) {
						// dont add the remove candidate button

					} else if(key !== 'Tossup') {
						// after adding all the candidates, add the add candidate button
						var legendDelete = document.createElement('div');
						legendDelete.setAttribute('class', 'legend-delete');
						legendDelete.onclick = (function() {
							var ref_name = candidate.name;
							return function() {
								displayCandidateEditMenu(ref_name);
							};
						})();
						legendDelete.style.background = 'none';

						/* ONLY ADD IF CANDIDATE EDIT IS ENABLED */
						if(php_candidate_edit) {
							legendDiv.appendChild(legendDelete);
						}

						var legendDeleteText = document.createElement('div');
						legendDeleteText.setAttribute('class', 'legend-delete-text');	
						legendDeleteText.style.backgroundColor = candidate.colors[0];
						
						legendDeleteText.style.padding = '0px';
						legendDeleteText.style.fontSize = '14px';
						legendDeleteText.innerHTML = '<i class="fas fa-cog"></i>';
						legendDelete.appendChild(legendDeleteText);
					}

					if(key !== 'Tossup' && LegendManager.legendLeans) {
						var amts = ['solid', 'likely', 'lean', 'tilt'];
						for(var index = 0; index < amts.length; ++index) {
							var legendColor = document.createElement('div');
							legendColor.setAttribute('class', 'legend-color');
							legendColor.setAttribute('id', candidate.name + amts[index]);
							legendColor.style.backgroundColor = candidate.colors[index];
							legendColorDiv.appendChild(legendColor);
						}
					}
				}
			
				// after adding all the candidates, add the add candidate button
				var legendElement = document.createElement('div');
				legendElement.setAttribute('id', 'legend-addcandidate-button');
				legendElement.setAttribute('class', 'legend-button');
				legendElement.onclick = displayAddCandidateMenu;
				legendElement.style.background = 'none';

				/* ONLY ADD IF CANDIDATE EDIT IS ENABLED */
				if(php_candidate_edit) {
					legendDiv.appendChild(legendElement);
				}

				var legendText = document.createElement('div');
				legendText.setAttribute('id', 'addcandidate-button-text');	
				legendText.setAttribute('class', 'legend-button-text');	
				legendText.style.backgroundColor = CandidateManager.candidates['Tossup'].colors[CandidateManager.tossupColor];
				legendText.style.padding = '0px';
				legendText.innerHTML = '+';
				legendElement.appendChild(legendText);
				var legendColorDiv = document.createElement('div');
				legendColorDiv.setAttribute('class', 'legend-color-div');
				legendElement.appendChild(legendColorDiv);
				
				var legendTooltip = document.createElement('div');
				legendTooltip.setAttribute('id', 'legend-tooltip');
				legendDiv.appendChild(legendTooltip);
				var legendText = document.createElement('div');
				legendText.setAttribute('id', 'legendtooltip-text');	
				legendText.setAttribute('class', 'legend-button-text');	
				legendText.style.padding = '0px';
				legendText.innerHTML = 'Select a candidate';
				legendTooltip.appendChild(legendText);

			},
			// do not display the build in legend for the chart
			legend: {
				display: false
			},
			tooltips: {
				display: true,
				position: 'average',
				titleFontColor: 'black',
				bodyFontColor: 'black',
				backgroundColor: 'white',
				borderColor: 'black',
				borderWidth: 2,
				caretSize: 0,
				cornerRadius: 0
			},
			// turn off animation
			animation: {
				animateRotate: false,
				animateScale: true
			},
			plugins: {
				datalabels: {
					//display: 'auto',
					display: function(context) {
						return context.dataset.data[context.dataIndex] !== 0;
					},
					backgroundColor: 'white',
					borderColor: 'black',
					borderRadius: 5,
					borderWidth: 2,
					color: 'black',
					font: {
						family: 'Roboto',
						size: 15,
						weight: 700
					}
				}
			},
			barStrokeWidth: 0
		}
	//Chart.defaults.global.barPercentage = 0;
	//Chart.defaults.global.categoryPercentage = 0;

		ChartManager.chartBarScales = {
			yAxes: [{
				stacked: true,
				gridLines: {
					display: false,
					drawBorder: false
				},
				ticks: {
					fontSize: 15,
					fontColor: '#ffffff',
					fontFamily: 'Roboto',
					fontStyle: 500
				}
			}],
			xAxes: [{
				stacked: true,
				gridLines: {
					display: false,
					drawBorder: false
				},
				ticks: {
					beginAtZero: true,
					fontSize: 15,
					fontColor: '#ffffff',
					fontStyle: 500,
					fontFamily: 'Roboto'
				}
			}]
		}

		ChartManager.chartPieScales = {
			yAxes: [{
				display: false
			}],
			xAxes: [{
				display: false
			}]
		}
		
		ChartManager.chartPolarScales = {
			display: false
		}

		ChartManager.chartRadarScales = {
			display: false
		}

		ChartManager.chartOptions.scales = ChartManager.chartPieScales;

		Chart.defaults.global.elements.rectangle.borderWidth = 2;
		
		// get the context
		var ctx = document.getElementById('chart-canvas').getContext('2d');
		ctx.height = 200;

		// create the chart
		ChartManager.chart = new Chart(ctx, {
			type: 'doughnut',
			data: {
				labels:[],
				datasets: [{
					label: "",
					backgroundColor: '#ffffff',
					borderColor: '#ffffff',
					borderWidth: 0,
					data:[]
				}, {}, {}, {}],
			},
			options: ChartManager.chartOptions,
			maintainAspectRatio: true
		});

		//ChartManager.chart.generateLegend();

		ChartManager.chartType = 'doughnut';
	}

	// dynamically change the chart from one form to another
	static setChart(type, position) {
		console.log('Set Chart - ' + type);
		var sidebar = document.getElementById('chart-div');
		var chartHTML = document.getElementById('chart');
		var html = document.getElementById('chart-canvas');
		var ctx = html.getContext('2d');
		var battlechart = document.getElementById('battlechart');
		chartHTML.style.display = 'inline-block';
		battlechart.style.display = 'none';
		sidebar.style.display = 'flex';
		
		sidebar.style.width = '28vw';

		if(type === 'none') {
			html.style.display = 'none';

			unsetBattleHorizontal();
			sidebar.style.display = 'none';

			ChartManager.chartType = type;
			MapManager.centerMap();
			return;
		} else if(type === 'horizontalbattle' || type === 'verticalbattle') {
			if(Object.keys(CandidateManager.candidates).length > 3) {
			
				displayNotification('Sorry',
					'This chart requires that there be two candidates');
				return;
			}
			
			if(type === 'horizontalbattle') {
				setBattleHorizontal();
				var logo = document.getElementById('logo-div');
				logo.style.width = '15%';
				logo.style.height = '100%';

				sidebar.style.borderRight = '0px';
				sidebar.style.borderTop = '1px solid black';

				logo = document.getElementById('yapms-watermark');
				logo.style.width = '15%';
				logo.style.height = '100%';
			}
			else {
				unsetBattleHorizontal();
				sidebar.style.width = '20vw';	
				var logo = document.getElementById('logo-div');
				logo.style.width = '100%';
				logo.style.height = '15%';
				sidebar.style.borderTop = '0px';
				sidebar.style.borderRight = '1px solid black';
				
				logo = document.getElementById('yapms-watermark');
				logo.style.width = '100%';
				logo.style.height = '15%';
			}

			html.style.display = 'none';
			chartHTML.style.display = 'none';
			battlechart.style.display = 'flex';
			ChartManager.chartType = type;
			ChartManager.updateChart();
			MapManager.centerMap();
			return;
		} 
		
		unsetBattleHorizontal();

		ChartManager.chartPosition = position;	
		if(position === 'bottom') {
			var application = document.getElementById('application');
			application.style.flexDirection = 'column-reverse';
			
			var map = document.getElementById('map-div');
			map.style.height = '80%';

			//var sidebar = document.getElementById('chart-div');
			sidebar.style.flexDirection = 'row';
			sidebar.style.width = '100%';	
			sidebar.style.height = '20%';
			sidebar.style.borderRight = '0px';
			sidebar.style.borderTop = '1px solid black';
		
			var charthtml = document.getElementById('chart');
			charthtml.style.height = 'auto';
			charthtml.style.width = '' + (sidebar.offsetHeight - 5) + 'px';

			var logo = document.getElementById('logo-div');
			logo.style.width = '15%';
			logo.style.height = '100%';
			logo = document.getElementById('yapms-watermark');
			logo.style.width = '15%';
			logo.style.height = '100%';
		} else {
			var application = document.getElementById('application');
			application.style.flexDirection = 'row';

			var map = document.getElementById('map-div');
			map.style.height = '100%';

			//var sidebar = document.getElementById('chart-div');
			sidebar.style.flexDirection = 'column';
			sidebar.style.width = '28vw';	
			sidebar.style.height = '100%';
			sidebar.style.borderTop = '0px';
			sidebar.style.borderRight = '1px solid black';
			
			var charthtml = document.getElementById('chart');
			charthtml.style.width = '100%';
			
			var logo = document.getElementById('logo-div');
			logo.style.width = '100%';
			logo.style.height = '15%';
			logo = document.getElementById('yapms-watermark');
			logo.style.width = '100%';
			logo.style.height = '15%';
		}

		MapManager.centerMap();
			
		ChartManager.chartType = type;
		
		ChartManager.chartData = {
			labels:[],
			datasets: [{
				borderColor: ChartManager.chartBorderColor,
				borderWidth: ChartManager.chartBorderWidth,
				data:[]
			}]
		};

		html.style.display = 'inline-block';

		// set the proper scales
		if(type === 'horizontalBar') {
			ChartManager.chartOptions.scales = ChartManager.chartBarScales;
			delete ChartManager.chartOptions.scale;
			// horizontal bar needs multiple datasets
			for(var i = 0; i < 3; ++i) {
				ChartManager.chartData.datasets.push({
					borderColor: ChartManager.chartBorderColor,
					borderWidth: ChartManager.chartBorderWidth,
					data:[]
				});
			}
		} else if(type === 'pie' || type === 'doughnut') {
			ChartManager.chartOptions.scales = ChartManager.chartPieScales;
			delete ChartManager.chartOptions.scale;
		}

		// first destroy the chart
		ChartManager.chart.destroy();
		// then rebuild
		ChartManager.chart = new Chart(ctx, {type: type, data: ChartManager.chartData, options: ChartManager.chartOptions});
		countVotes();
		ChartManager.updateChart();
	}

	static rebuildChart() {
		var html = document.getElementById('chart-canvas');
		var ctx = html.getContext('2d');
		//var type = chart.config.type;
		ChartManager.chart.destroy();
		ChartManager.chart = new Chart(ctx, {
			type: ChartManager.chart.config.type, 
			data: ChartManager.chartData, 
			options: ChartManager.chartOptions
		});
		
		// dont display the chart if its a battle chart
		if(ChartManager.chartType === 'battle') {	
			var chartcontainer = document.getElementById('chart');
			chartcontainer.style.display = 'none';
		}

		ChartManager.updateChart();
	}

	// updates the information of the chart (so the numbers change)
	static updateChart() {
		if(ChartManager.chartType === 'verticalbattle' ||
			ChartManager.chartType === 'horizontalbattle') {
			updateBattleChart();
			return;
		} else if(ChartManager.chartType === 'horizontalBar') {
			ChartManager.updateBarChart();
		} else {
			ChartManager.updateNonRadarChart();	
		}

		ChartManager.chart.config.data = ChartManager.chartData;
		ChartManager.chart.update();
	}

	static updateBarChart() {
		ChartManager.chartData.labels = [];
		ChartManager.chartData.datasets[0].data = [];
		ChartManager.chartData.datasets[0].backgroundColor = [];
		ChartManager.chartData.datasets[1].data = [];
		ChartManager.chartData.datasets[1].backgroundColor = [];
		ChartManager.chartData.datasets[2].data = [];
		ChartManager.chartData.datasets[2].backgroundColor = [];
		ChartManager.chartData.datasets[3].data = [];
		ChartManager.chartData.datasets[3].backgroundColor = [];
		
		// each label is a candidate
		for(var key in CandidateManager.candidates) {
			ChartManager.chartData.labels.push(key);
		}

		if(ChartManager.chartLeans) {
			for(var probIndex = 0; probIndex < 4; ++probIndex) {
				for(var key in CandidateManager.candidates) {
					var candidate = CandidateManager.candidates[key];
					var name = candidate.name;
					var count = candidate.probVoteCounts[probIndex];
					ChartManager.chartData.datasets[probIndex].data.push(count);

					var color = candidate.colors[probIndex];
					ChartManager.chartData.datasets[probIndex].backgroundColor.push(color);
				}
			}
		} else {
			for(var key in CandidateManager.candidates) {
				var candidate = CandidateManager.candidates[key];
				var name = candidate.name;
				var count = candidate.voteCount;
				ChartManager.chartData.datasets[0].data.push(count);

				if(key === 'Tossup') {
					var color = candidate.colors[2];
					ChartManager.chartData.datasets[0].backgroundColor.push(color);

				} else {
					var color = candidate.colors[0];
					ChartManager.chartData.datasets[0].backgroundColor.push(color);
				}
			}
		}
	}

	static updateNonRadarChart() {
		ChartManager.chartData.labels = [];

		ChartManager.chartData.datasets[0].data = [];
		ChartManager.chartData.datasets[0].backgroundColor = [];
		ChartManager.chartData.datasets[0].borderColor = ChartManager.chartBorderColor;
		ChartManager.chartData.datasets[0].borderWidth = ChartManager.chartBorderWidth;

		// loop though candidates
		var candidateIndex = -1;
		for(var key in CandidateManager.candidates) {
			++candidateIndex;
			var candidate = CandidateManager.candidates[key];
			var name = candidate.name;
			var voteCount = candidate.voteCount;
			var color = candidate.colors[0];
			if(candidateIndex == 0) {
				color = CandidateManager.candidates['Tossup'].colors[CandidateManager.tossupColor];
				// append the candidate label
				ChartManager.chartData.labels[0] = 'Tossup';
				// append the vote count
				ChartManager.chartData.datasets[0].data[0] = voteCount;
				// change the background color of the visual
				ChartManager.chartData.datasets[0].backgroundColor.push(color);
			} else if(ChartManager.chartLeans) {
				for(var probIndex = 0; probIndex < 4; ++probIndex) {
					var count = candidate.probVoteCounts[probIndex];
					color = candidate.colors[probIndex];
					var index = (probIndex + (candidateIndex * 4)) - 3;
					ChartManager.chartData.labels[index] = name;
					ChartManager.chartData.datasets[0].data[index] = count;
					ChartManager.chartData.datasets[0].backgroundColor.push(color);
				}
			} else {
				var count = candidate.voteCount;
				color = candidate.colors[0];
				ChartManager.chartData.labels[candidateIndex] = name;
				ChartManager.chartData.datasets[0].data[candidateIndex] = count;
				ChartManager.chartData.datasets[0].backgroundColor.push(color);
			}
		}
	}

	static toggleChartLabels() {
		ChartManager.chartLabels = !ChartManager.chartLabels;
		if(ChartManager.chartOptions.plugins.datalabels.display != false) {
			ChartManager.chartOptions.plugins.datalabels.display = false;
		} else {
			ChartManager.chartOptions.plugins.datalabels.display = function(context) {
				return context.dataset.data[context.dataIndex] !== 0;
			}
		}

		ChartManager.rebuildChart();
	}

	static toggleChartLeans() {
		ChartManager.chartLeans = !ChartManager.chartLeans;
		ChartManager.rebuildChart();
		updateBattleChart();
	}
}

ChartManager.chart = null;
ChartManager.chartBorderWidth = 2;
ChartManager.chartBorderColor = '#000000';
ChartManager.chartData = {
	labels:[],
	datasets: [{
		label: "",
		backgroundColor: [],
		borderColor: ChartManager.chartBorderColor,
		borderWidth: ChartManager.chartBorderWidth,
		data:[]
	}, {}, {}, {}]
}
ChartManager.chartOptions = null;
ChartManager.chartType = null;
ChartManager.chartPosition = null;
ChartManager.chartPieScales = null;
ChartManager.chartBarScales = null;
ChartManager.chartPolarScales = null;
ChartManager.chartRadarScales = null;

ChartManager.chartLeans = true;
ChartManager.chartLabels = true;
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
class InputManager {
	static enableInputDesktop() {
		var enablePan = false;
		var enableZoom = false;
		if(MapManager.panObject != null) {
			enablePan = MapManager.panObject.isPanEnabled();
			enableZoom = MapManager.panObject.isZoomEnabled();
		}

		MapManager.panObject = svgPanZoom('#svgdata', {
			fit: true,
			center: true,
			contain: false,
			panEnabled: true,
			zoomEnabled: true,
			dblClickZoomEnabled: false,
			maxZoom: 100,
			zoomScaleSensitivity: 0.1
		});
	}

	static enableInputMobile() {
		var eventHandler = {
			haltEventListeners: ['touchstart', 'touchend', 'touchmove', 'touchleave', 'touchcancel'],
			init: function(options) {
				var instance = options.instance;
				var initialScale = 1;
				var pannedX = 0;
				var pannedY = 0;

				this.hammer = Hammer(options.svgElement, {
					inputClass: Hammer.SUPPORT_POINTER_EVENTS ? Hammer.PointerEventInput : Hammer.TouchInput
				});
			
				this.hammer.get('pinch').set({enable: true});

				this.hammer.on('panstart panmove', function(ev) {
					if(ev.type === 'panstart') {
						pannedX = 0;
						pannedY = 0;
					}
					instance.panBy({x: ev.deltaX - pannedX, y: ev.deltaY - pannedY});
					pannedX = ev.deltaX;
					pannedY = ev.deltaY;			
				});

				this.hammer.on('pinchstart pinchmove', function(ev) {
					if(ev.type === 'pinchstart') {
						initialScale = instance.getZoom();
						instance.zoomAtPoint(initialScale * ev.scale, {x: ev.center.x, y: ev.center.y});
					}
					
					instance.zoomAtPoint(initialScale * ev.scale, {x: ev.center.x, y: ev.center.y});
				});
			}
		
		}

		MapManager.panObject = svgPanZoom('#svgdata', {
			fit: true,
			center: true,
			contain: false,
			maxZoom: 100,
			zoomScaleSensitivity: 0.1,
			dblClickZoomEnabled: false,
			customEventsHandler: eventHandler
		});
	}
}
class KeyboardManager {
	static init() {
		$("html").keydown(function(event) {
			KeyboardManager.keyStates[event.which] = true;
		});

		$("html").keyup(function(event) {
			KeyboardManager.keyStates[event.which] = false;
		});

		$("html").mouseleave(function(event) {
			KeyboardManager.keyStates = {};
		});

		$("html").mouseenter(function(event) {
			KeyboardManager.keyStates = {};
		});
	}
}

KeyboardManager.keyStates = {};
class LegendManager {
	static toggleLegendCounter() {
		LegendManager.legendCounter = !LegendManager.legendCounter;
		LegendManager.updateLegend();
	}

	static toggleLegendLeans() {
		LegendManager.legendLeans = !LegendManager.legendLeans;
		ChartManager.chart.generateLegend();
		LegendManager.updateLegend();
	}
	
	static selectCandidateDisplay(html) {
		var legendButtons = html.parentElement.children;

		for(var index = 0; index < legendButtons.length; ++index) {
			var button = legendButtons[index];
			var text = button.childNodes[0];
			text.style.padding = '4px';
		}
		
		html.childNodes[0].style.padding = '7px';
	}

	static updateLegend() {
		for(var key in CandidateManager.candidates) {
			var candidate = CandidateManager.candidates[key];
			var html = document.getElementById(candidate.name + '-text');

			var newHTML = candidate.name;

			if(LegendManager.legendCounter == true) {
				newHTML += ' ' + candidate.voteCount;
			}

			if(html !== null) {
				html.innerHTML = newHTML;
			}

			if(key === paintIndex) {
				LegendManager.selectCandidateDisplay(html.parentElement);
			}
		}
	}
}

LegendManager.legendCounter = true;
LegendManager.legendLeans = true;
class LogoManager {
	static toggleLogo(name) {
		var logoSlot = document.getElementById("logo-div");
		switch(name) {
			case "LTE":
			logoSlot.style.backgroundImage = 'url("https://www.yapms.com/app/res/lte.jpg")';
			break;
			case "RedEagle":
			logoSlot.style.backgroundImage = 'url("https://www.yapms.com/app/res/redeagletv.png")';
			break;
			case "PG":
			logoSlot.style.backgroundImage = 'url("https://www.yapms.com/app/res/pg.png")';
			break;
		}
	
		if(LogoManager.currentLogo !== name) {
			logoSlot.style.display = "inline";
		} else if(logoSlot.style.display === "") {
			logoSlot.style.display = "inline";
		} else if(logoSlot.style.display === "inline") {
			logoSlot.style.display = "";
		}

		LogoManager.currentLogo = name;
	}

	static loadButtons() {
		if(LogoManager.buttonsLoaded) {
			return;
		}
		LogoManager.buttonsLoaded = true;

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
		if(LogoManager.flagsLoaded) {
			return;
		}
		LogoManager.flagsLoaded = true;

		var countries = ['aus', 'usa', 'bra', 'can', 'ger', 'ind',
			'ita', 'ire', 'ned', 'prt', 'rus', 'esp', 'tur',
			'ukd', 'eu', 'un', 'fra', 'tat', 'che', 'zaf'];
	
		for(var countryIndex = 0; countryIndex < countries.length; ++countryIndex) {	
			var country = countries[countryIndex];
			var elements = document.getElementsByClassName("flag-" + country);
			for(var elementIndex = 0; elementIndex < elements.length; ++elementIndex) {
				var flag = elements[elementIndex];
				flag.setAttribute("src", "res/flags/" + country + ".svg");
			}	
		}
	}
}

LogoManager.currentLogo = "";
LogoManager.buttonsLoaded = false;
LogoManager.flagsLoaded = false;
class MapManager {
	static centerMap() {
		if(MapManager.panObject === null)
			return;

		MapManager.panObject.resize();
		MapManager.panObject.fit();
		MapManager.panObject.center();
		MapManager.panObject.zoomBy(0.85);
	}

	static setLockMap(set) {
		var lockButton = document.getElementById('lockbutton');
		if(set === true) {
			if(lockButton) {
				lockButton.style.opacity = '0.5';
			}
			MapManager.panObject.disablePan();
			MapManager.panObject.disableZoom();
			MapManager.lockedMap = true;
		} else {
			if(lockButton) {
				lockButton.style.opacity = '1';
			}
			MapManager.panObject.enablePan();
			MapManager.panObject.enableZoom();
			MapManager.lockedMap = false;
		}
	}

	static toggleLockMap() {
		var lockButton = document.getElementById('lockbutton');
		if(MapManager.lockedMap) {
			if(lockButton) {
				lockButton.style.opacity = '1';
			}
			MapManager.panObject.enablePan();
			MapManager.panObject.enableZoom();
			MapManager.lockedMap = false;
		} else {
			if(lockButton) {
				lockButton.style.opacity = '0.5';
			}
			MapManager.panObject.disablePan();
			MapManager.panObject.disableZoom();
			MapManager.lockedMap = true;
		}
	}

	static verifyMap() {
		states.forEach(function(state) {
			//state.verifyDisabledColor();
			state.verifyTossupColor();
			if(typeof CandidateManager.candidates[state.candidate] === 'undefined') {
				// if the current color is out of bounds set it to white
				state.setColor('Tossup', CandidateManager.tossupColor);
			} else { 
				// the candidate the state thinks its controled by
				var currentCandidate = state.getCandidate();
				// the candidate the state should be controle by
				var shouldCandidate = CandidateManager.candidates[state.getCandidate()].name;

				// if these values differ, change the state to tossup
				if(currentCandidate !== shouldCandidate) {
					state.setColor('Tossup', CandidateManager.tossupColor);
				} else if(state.getCandidate() === 'Tossup') {
					state.setColor('Tossup', 2);	
				}else {
					var candidate = CandidateManager.candidates[state.getCandidate()];
					if(candidate.singleColor === true) {
						state.setColor(state.getCandidate(), 0);
					} else {
						state.setColor(state.getCandidate(), state.getColorValue());
					}
				}
			}
		});

		proportionalStates.forEach(function(state) {
			state.verifyTossupColor();
			if(typeof CandidateManager.candidates[state.candidate] === 'undefined') {
				// if the current color is out of bounds set it to white
				state.setColor('Tossup', CandidateManager.tossupColor);
			} else { 
				// the candidate the state thinks its controled by
				var currentCandidate = state.getCandidate();
				// the candidate the state should be controle by
				var shouldCandidate = CandidateManager.candidates[state.getCandidate()].name;

				// if these values differ, change the state to tossup
				if(currentCandidate !== shouldCandidate) {
					state.setColor('Tossup', CandidateManager.tossupColor);
				} else if(state.getCandidate() === 'Tossup') {
					state.setColor('Tossup', 2);	
				}else {
					var candidate = CandidateManager.candidates[state.getCandidate()];
					if(candidate.singleColor === true) {
						state.setColor(state.getCandidate(), 0);
					} else {
						state.setColor(state.getCandidate(), state.getColorValue());
					}
				}
			}
		});
	}
}

MapManager.lockedMap = false;
MapManager.panObject = null;
var enablePopularVote = false;
var enableCongress = false;
var enableCongressContested = false;

class MapLoader {
	static loadPresetMap(preset, options) {
		// Remove all candidates, and load the ones for the map
		CandidateManager.initCandidates();

		var enableHouse = false;

		if(options) {
			enableHouse = options.enableCongress;
		}

		if(preset === 'usa/USA_2020_house_cook') {
			enableCongressContested = true;
			enableHouse = true;
		}

		$.ajax({
			url: "./res/presets/" + preset,
			type: "GET",
			processData: false,
			contentType: false,
			success: function(a, b, c) {
				console.log("Found preset map...");
				try {
					MapLoader.loadSavedMap_new(a, {enableCongress: enableHouse});
				} catch(e) {
					MapLoader.loadSavedMap_old(a, {enableCongress: enableHouse});
					console.log('New file load failed, attempting old');
				}
			},
			error: function(a, b, c) {
				console.log("Did not find preset map...");
				MapLoader.loadMap("../res/usa_presidential.svg", 16, 1, "usa_ec", "presidential", "open", {updateText: true});
			}
		});
	}

	static loadMapFromURL(URL) {
		console.log('Map Loader: ' + URL);
		$.ajax({
			url: URL,
			type: "POST",
			success: function(data) {
				console.log("Map Load: Found saved map");
				try {
					console.log('Map Loader: Attemping new file load');
					MapLoader.loadSavedMap_new(data);
				} catch(e) {
					console.log('Map Loader: Attemping old file load');
					MapLoader.loadSavedMap_old(data);
				}
			},
			error: function() {
				console.log("Map Loader: Did not find saved map");
				MapLoader.loadMap('./res/usa_presidential.svg', 16, 1, 'usa_ec',"presidential", "open", {updateText: true});

				var notification = document.getElementById('notification');
				var message = notification.querySelector('#notification-message');
				var title = notification.querySelector('#notification-title');
				title.innerHTML = 'Sorry';
				message.innerHTML = 'The map you are looking for does not exist.<br><br>This feature is still in development and it may have been deleted.';
				notification.style.display = 'inline';
			}
		});
	}

	// Load map based off of php t parameter
	static loadMapFromId(id) {
		switch(id) {
			case "USA_current_house":
				MapLoader.loadPresetMap(id, {enableCongress: true});
				break;
			case "UnitedKingdom_current_parliament":
				MapLoader.loadPresetMap(id);
				break;
			case "USA_current_senate":
			case "USA_2024_projection":
			case "USA_2020_cook":
			case "USA_2020_inside":
			case "USA_2020_sabatos":
			case "USA_2020_house_cook":
			case "USA_2016_presidential":
			case "USA_2016_presidential_county":
			case "USA_2016_democratic_primary":
			case "USA_2016_republican_primary":
			case "USA_2012_presidential":
			case "USA_2008_presidential":
			case "USA_2004_presidential":
			case "USA_2000_presidential":
			case "USA_1996_presidential":
			case "USA_1992_presidential":
			case "USA_1988_presidential":
			case "USA_1984_presidential":
			case "USA_1980_presidential":
			case "USA_1976_presidential":
			case "USA_1972_presidential":
			case "USA_1968_presidential":
			case "USA_1964_presidential":
			case "USA_1960_presidential":
			case "USA_1956_presidential":
			case "USA_1952_presidential":
			case "USA_1948_presidential":
			case "USA_1944_presidential":
			case "USA_1940_presidential":
			case "USA_1936_presidential":
			case "USA_1932_presidential":
			case "USA_1928_presidential":
			case "USA_1924_presidential":
			case "USA_1920_presidential":
			case "USA_1916_presidential":
			case "USA_1912_presidential":
			case "USA_1908_presidential":
			case "USA_1904_presidential":
			case "USA_1900_presidential":
			case "USA_1896_presidential":
			case "USA_1892_presidential":
			case "USA_1888_presidential":
			case "USA_1884_presidential":
			case "USA_1880_presidential":
			case "USA_1876_presidential":
			case "USA_1876_presidential":
			case "USA_1872_presidential":
			case "USA_1868_presidential":
			case "USA_1864_presidential":
			case "USA_1789_presidential":
			case "USA_1792_presidential":
			case "USA_1796_presidential":
			case "USA_1800_presidential":
			case "USA_1804_presidential":
			case "USA_1808_presidential":
			case "USA_1812_presidential":
			case "USA_1816_presidential":
			case "USA_1820_presidential":
			case "USA_1824_presidential":
			case "USA_1828_presidential":
			case "USA_1832_presidential":
			case "USA_1836_presidential":
			case "USA_1840_presidential":
			case "USA_1844_presidential":
			case "USA_1848_presidential":
			case "USA_1852_presidential":
			case "USA_1856_presidential":
			case "USA_1860_presidential":
				MapLoader.loadPresetMap('usa/' + id);
				break;
			case "USA_trump_impeachment_support":
				MapLoader.loadPresetMap('usa/' + id, {enableCongress: true});
				break;
			case "Canada_2019_house_of_commons":
				MapLoader.loadPresetMap('can/' + id);
				break;
			case "USA_Canada":
				MapLoader.loadMap("./res/usa_canada.svg", 16, 0.01, "congressional", "presidential", "open", {updateText: false});
				break;
			case "USA_2020_presidential":
				MapLoader.loadMap("./res/usa_presidential.svg", 16, 1, "usa_ec", "presidential", "open", {updateText: true, voters: 'usa_voting_pop', enablePopularVote: true});
				break;
			case "USA_split_maine":
				MapLoader.loadMap("./res/usa_1972_presidential.svg", 16, 1, "usa_1972_ec", "presidential", "open", {updateText: true});
				break;
			case "USA_2020_senatorial":
			case "USA_2020_senate":
				MapLoader.loadMap("./res/usa_senate.svg", 16, 1, "usa_senate", "senatorial", "2020", {updateText: false});
				break;
			case "USA_2020_gubernatorial":
			case "USA_2020_governors":
				MapLoader.loadMap("./res/usa_gubernatorial.svg", 16, 1, "usa_gubernatorial", "gubernatorial", "2020", {updateText: false});
				break;
			case "USA_2020_democratic_primary":
				MapLoader.loadMap("./res/usa_dem_primary.svg", 16, 1, "dem_primary", "primary", "open", {updateText: false});
				PresetLoader.loadPreset('democratic primary');
				break;
			case "USA_2020_republican_primary":
				MapLoader.loadMap("./res/usa_rep_primary.svg", 16, 1, "rep_primary", "primary", "open",{updateText: false});
				PresetLoader.loadPreset('republican primary');
				break;
			case "USA_county":
				MapLoader.loadMap("./res/usa_county.svg", 16, 0.075, "congressional", "congressional", "open", {updateText: false});
				break;
			case "USA_congressional":
			case "USA_2020_house":
				MapLoader.loadMap("./res/usa_congressional_2018.svg", 16, 0.075, "congressional", "congressional", "open", {updateText: false, enableCongress: true});
				break;
			case "USA_congressional_2008":
			case "USA_2008_house":
				MapLoader.loadMap("./res/usa_congressional_2008.svg", 16, 0.005, "congressional", "congressional", "open", {updateText: false});
				break;
			case "USA_gubernatorial":
			case "USA_governors":
				MapLoader.loadMap("./res/usa_gubernatorial.svg", 16, 1.5, "usa_gubernatorial", "gubernatorial", "open", {updateText: false});
				break;
			case "USA_senatorial":
			case "USA_senate":
				MapLoader.loadMap("./res/usa_senate.svg", 16, 1.5, "usa_senate", "senatorial", "open", {updateText: false});
				break;
			case "USA_takeall":
				MapLoader.loadMap("./res/usa_no_districts.svg", 16, 1, "usa_no_districts_ec", "presidential", "open", {updateText: true});
				break;
			case "USA_proportional":
				MapLoader.loadMap("./res/usa_no_districts.svg", 16, 1, "usa_no_districts_ec", "proportional", "open", {updateText: true});
				break;
			case "USA_pre_civilwar":
				MapLoader.loadMap("./res/usa_pre_civilwar.svg", 16, 1, "usa_pre_civilwar_ec", "presidential", "open", {updateText: true});
				break;
			case "Pakistan_national_assembly":
				MapLoader.loadMap("./res/pak/pakistan.svg", 16, 0.08, "congressional", "congressional", "open", {updateText: false});
				break;
			case "Germany_states":
				MapLoader.loadMap("./res/germany.svg", 16, 1, "congressional", "presidential", "open", {updateText: false});
				PresetLoader.loadPreset('germany')
				break;
			case "Germany_constituencies":
			case "Germany_bundestag":
				MapLoader.loadMap("./res/germany_constituencies.svg", 16, 0.25, "congressional", "congressional", "open", {updateText: false});
				PresetLoader.loadPreset('germany')
				break;
			case "France_constituencies":
			case "France_national_assembly":
				MapLoader.loadMap("./res/france_constituencies.svg", 16, 0.25, "congressional", "congressional", "open", {updateText: false});
				PresetLoader.loadPreset('france')
				break;
			case "Netherlands_provinces":
				MapLoader.loadMap("./res/netherlands_provinces.svg", 16, 0.15, "netherlands_provinces", "proportional", "open", {updateText: false});
				PresetLoader.loadPreset('netherlands');
				break;
			case "Netherlands_gemeenten":
				MapLoader.loadMap("./res/netherlands_gemeenten.svg", 16, 0.15, "congressional", "congressional", "open", {updateText: false});
				PresetLoader.loadPreset('netherlands');
				break;
			case "Italy_states":
				MapLoader.loadMap("./res/italy.svg", 16, 1, "congressional", "presidential", "open", {updateText: false});
				PresetLoader.loadPreset('italy')
				break;
			case "Portugal_assembly_of_the_republic":
				MapLoader.loadMap("./res/portugal_constituencies.svg", 16, 0.25, "portugal_constituencies", "proportional", "open", {updateText: false});
				PresetLoader.loadPreset('portugal');
				break;
			case "Spain_constituencies":
			case "Spain_congress_of_deputies":
				MapLoader.loadMap("./res/spain_constituencies.svg", 16, 0.25, "spain_constituencies", "proportional", "open", {updateText: false});
				PresetLoader.loadPreset('spain');
				break;
			case "Turkey_national_assembly":
				MapLoader.loadMap("./res/turkey_provinces.svg", 16, 0.5, "turkey_national_assembly", "proportional", "open", {updateText: false});
				PresetLoader.loadPreset('turkey');
				break;
			case "India_lok_sabha":
				MapLoader.loadMap("./res/india_constituencies.svg", 16, 0.1, "congressional", "presidential", "open", {updateText: false});
				PresetLoader.loadPreset('india');
				break;
			case "SouthAfrica_national_assembly":
				MapLoader.loadMap("./res/zaf/south_africa_provinces.svg", 16, 0.25, "south_africa_national_assembly", "proportional", "open", {updateText: false});
				PresetLoader.loadPreset('southafrica');
				break;
			case "UnitedKingdom_house_of_commons":
				MapLoader.loadMap("./res/unitedkingdom.svg", 16, 0.075, "congressional", "congressional", "open", {updateText: false});
				PresetLoader.loadPreset('uk')
				break;
			case "UnitedKingdom_historic_counties":
				MapLoader.loadMap("./res/ukd/unitedkingdom_historic_counties.svg", 16, 0.4, "congressional", "congressional", "open", {updateText: false});
				PresetLoader.loadPreset('uk')
				break;
			case "Ireland_constituencies":
			case "Ireland_dail_eireann":
				MapLoader.loadMap("./res/ireland_constituencies.svg", 16, 0.075, "ireland_constituencies", "proportional", "open", {updateText: false});
				PresetLoader.loadPreset('ireland')
				break;
			case "Canada_provinces":
				MapLoader.loadMap("./res/canada_states.svg", 38, 2, "congressional", "presidential", "open", {updateText: false});
				PresetLoader.loadPreset('canada')
				break;
			case "Canada_constituencies":
			case "Canada_house_of_commons":
				MapLoader.loadMap("./res/canada_constituencies.svg", 16, 0.1, "congressional", "congressional", "open", {updateText: true});
				PresetLoader.loadPreset('canada')
				break;
			case "Australia_constituencies":
			case 'Australia_house_of_representatives':
				MapLoader.loadMap("./res/australia_constituencies.svg", 16, 0.5, "congressional", "congressional", "open", {updateText: false});
				PresetLoader.loadPreset('australia')
				break;
			case "Australia_states":
				MapLoader.loadMap("./res/australia.svg", 16, 0.075, "congressional", "presidential", "open", {updateText: false});
				PresetLoader.loadPreset('australia')
				break;
			case "Brazil_deputies":
			case 'Brazil_chamber_of_deputies':
				MapLoader.loadMap("./res/brazil_states.svg", 16, 50, "brazil_deputies", "proportional", "open", {updateText: false});
				PresetLoader.loadPreset('brazil');
				break;
			case 'Brazil_federal_senate':
				MapLoader.loadMap('./res/brazil_states.svg', 16, 50, "brazil_senate", "proportional", "open", {updateText: false});
				PresetLoader.loadPreset('brazil');
				break;
			case 'Russia_federal_council':
				MapLoader.loadMap('./res/russia_federal_subjects.svg', 16, 0.25, 'russia_federal_council', 'proportional', 'open', {updateText: false});
				PresetLoader.loadPreset('russia');
				break;
			case 'Russia_duma':
				MapLoader.loadMap('./res/russia_constituencies.svg', 16, 0.15, 'duma', 'congressional', 'open', {updateText: false});
				PresetLoader.loadPreset('russia');
				break;
			case "Trinidad_Tobago_house_of_representatives":
				MapLoader.loadMap("./res/trinidad_tobago_house_of_representatives.svg", 16, 0.25, "congressional", "congressional", "open", {updateText: false});
				PresetLoader.loadPreset('trinidad_tobago');
				break;
			case "Switzerland_national_council":
				MapLoader.loadMap("./res/che/switzerland_cantons.svg", 16, 0.25, "switzerland_national_council", "proportional", "open", {updateText: false});
				PresetLoader.loadPreset('switzerland');
				break;
			case "Switzerland_council_of_states":
				MapLoader.loadMap("./res/che/switzerland_cantons.svg", 16, 0.25, "switzerland_council_of_states", "proportional", "open", {updateText: false});
				PresetLoader.loadPreset('switzerland');
				break;
			case "EuropeanUnion":
				MapLoader.loadMap("./res/eu.svg", 16, 0.25, "eu_parliament", "primary", "open", {updateText: false});
				break;
			case "World":
				MapLoader.loadMap("./res/world.svg", 38, 0.25, "congressional", "congressional", "open", {updateText: false});
				break;
			case "LTE_presidential":
				MapLoader.loadMap("./res/lte_president.svg", 30, 1, "lte_ec", "presidential", "open", {updateText: true});
				break;
			case "LTE_senatorial":
				MapLoader.loadMap("./res/lte_senate.svg", 35, 1, "ltesenate", "senatorial", "open", {updateText: false});
				break;
			case "LTE_congressional":
				MapLoader.loadMap("./res/lte_house.svg", 35, 1, "congressional", "congressional", "open", {updateText: false});
				break;
			default:
				MapLoader.loadMap("./res/usa_presidential.svg", 16, 1, "usa_ec", "presidential", "open", {updateText: true, voters: 'usa_voting_pop', enablePopularVote: true});
				break;
		}
	}

	// loads the svg element into the HTML
	static loadMap(filename, fontsize, strokewidth, dataid, type, year, options) {

		// if the svg is already loaded dont load another
		if(MapLoader.save_filename === filename &&
			MapLoader.save_dataid === dataid &&
			MapLoader.save_type === type &&
			MapLoader.save_year === year &&
			MapLoader.save_fontsize === fontsize &&
			MapLoader.save_strokewidth === strokewidth) {
			if(options.onLoad) {
				options.onLoad();
			}

			if(options.clear && options.clear === true) {

			} else {
				return;
			}
		}

		MapLoader.save_filename = filename;
		MapLoader.save_dataid = dataid;
		MapLoader.save_type = type;
		MapLoader.save_year = year;
		MapLoader.save_fontsize = fontsize;
		MapLoader.save_strokewidth = strokewidth;

		if(options) {
			enablePopularVote = options.enablePopularVote;
			verifyPopularVote();
			enableCongress = options.enableCongress;
			verifyCongress();
		}

		var mapHTML = document.getElementById('map-div');
		mapHTML.style.visibility = 'hidden';

		totalVotes = 0;

		/* TURNING OFF LABELS BREAKS THE LEANS ON THE GRAPH */
		strokeMultiplier = strokewidth;
		var dataname = './data/' + type + '_' + year;

		mapOptions.updateText = options.updateText;

		console.log('Loading ' + filename);
		$('#map-div').load(filename, function(a) {
			console.log('Done loading ' + filename);
			MapLoader.onLoadSVG();
		
			if(mobile === true) {
				InputManager.enableInputMobile();
			} else if(mobile === false) {
				InputManager.enableInputDesktop();
			}

			MapManager.centerMap();
			onResize();

			var textHTML = document.getElementById('text');
			if(textHTML !== null) {
				// convert font size to string with px
				textHTML.style.fontSize = '' + fontsize + 'px';
			}

			MapLoader.initData(dataid);

			// count the votes and update the displayed
			// numbers on the chart and legend

			countVotes();
			ChartManager.updateChart();
			LegendManager.updateLegend();
			setCongressOnHover();
			
			setPalette(CookieManager.cookies['theme']);
		
			PresetLoader.blockPresets = false;		

			if(mode !== 'paint' && mode !== 'move' && mode !== 'paintmove') {
				setMode('paint');
			}

			var finishOptions = function() {
				if(options.onLoad) {
					options.onLoad();
				}

				setCongressContested();

				if(options.voters) {
					for(var stateIndex = 0, length = states.length; stateIndex < length; ++stateIndex) {
						var state = states[stateIndex];
						state.voters = data[options.voters][state.name];
						state.popularVote = {};
						state.popularVote['Tossup'] = state.voters;
					}

					countPopularVote();
				}

				// disable the load screen when the map is finished loading
				var loadScreen = document.getElementById('application-loading');
				/*
				setTimeout(function() {
					loadScreen.style.display = 'none';
				}, 350);
				*/
				loadScreen.style.display = 'none';
			}

			if(type === 'senatorial' && year !== 'open') {
				PresetLoader.blockPresets = true;
				MapLoader.loadSenateFile(dataname, finishOptions);
			} else if(type === 'gubernatorial' && year !== 'open') {
				PresetLoader.blockPresets = true;
				MapLoader.loadGubernatorialFile(dataname, finishOptions);
			} else {
				mapHTML.style.visibility = 'visible';
				finishOptions();
			}
		});
	}

	static onLoadSVG() {
		ifInIframe();
	}

	static loadGubernatorialFile(gubernatorialfile, onLoad) {

		if(gubernatorialfile.includes('open') == false) {
		}

		CandidateManager.initCandidates();
		
		var candidateNames = {};

		$.get(gubernatorialfile, function(data) {
			console.log('Done loading ' + gubernatorialfile);

			var loadMode = 'candidate';
			var lines = data.split('\n');

			// if the last element is empty remove it
			if(lines[lines.length - 1] === '') {
				lines.pop();
			}

			for(var index = 0; index < lines.length; ++index) {
				var line = lines[index].trim();
				if(loadMode === 'candidate') {
					if(line === '!') {
						loadMode = 'disable';
					} else {
						var split = line.split(' ');
						candidateNames[split[0]] = split[1];
						var candidate = new Candidate(split[1], [split[2], split[3], split[4], split[5]]);
						CandidateManager.candidates[split[1]] = candidate;
					}

				} else if(loadMode === 'disable') {
					var split = line.split(' ');
					var state = states.find(state => state.name === split[0]);
					var candidate = candidateNames[split[1]];

					if(split[1] === 'o') {
						state.setColor('Tossup', 2);
					} else {
						state.setColor(candidate, 0);
						state.toggleLock();
					}
				}
			}

			countVotes();
			ChartManager.updateChart();
			LegendManager.updateLegend();

			var mapHTML = document.getElementById('map-div');
			mapHTML.style.visibility = 'visible';

			onLoad();
		});
	}

	static loadSenateFile(senatefile, onLoad) {

		if(senatefile.includes('open') == false) {
			//blockPresets = true;
		}

		CandidateManager.initCandidates();

		var candidateNames = {};

		console.log(senatefile);
		$.get(senatefile, function(data) {
			console.log('Done loading ' + senatefile);
		
			var loadMode = 'candidate';
			var lines = data.split('\n');
			if(lines[lines.length - 1] === '') {
				lines.pop();
			}
			for(var index = 0; index < lines.length; ++index) {
				var line = lines[index].trim();
				if(loadMode === 'candidate') {
					if(line === '!') {
						loadMode = 'disable';
					} else {
						var split = line.split(' ');
						candidateNames[split[0]] = split[1];
						var candidate = new Candidate(split[1], [split[2], split[3], split[4], split[5]]);
						CandidateManager.candidates[split[1]] = candidate;
					}

				} else if(loadMode === 'disable') {
					var split = line.split(' ');
					var state = states.find(state => state.name === split[0]);
					var special = states.find(state => state.name === split[0] + '-S');

					if(split[1] === 'o') {
						state.setColor('Tossup', 2);
					} else {
						state.setColor(
							candidateNames[split[1]], 0);
						//state.toggleDisable();
						state.toggleLock();
						
					}

					if(split[2] === 'o') {
						special.setColor('Tossup', 2);
					} else {
						special.setColor(
							candidateNames[split[2]], 0);
						//special.toggleDisable();
						special.toggleLock();
					}
				}
			}

			countVotes();
			ChartManager.updateChart();
			LegendManager.updateLegend();

			var mapHTML = document.getElementById('map-div');
			mapHTML.style.visibility = 'visible';

			onLoad();
		});
	}

	static loadSavedMap_new(data, options) {
		var obj = JSON.parse(data);	

		if(options) {
			enableCongress = options.enableCongress;
		} else {
			enableCongress = false;
		}

		MapLoader.loadMap(obj['filename'], obj['fontsize'], obj['strokewidth'], obj['dataid'],
				obj['type'], obj['year'],
		{	
			enableCongress: enableCongress,
			updateText: obj['updatetext'],
			onLoad: function() {
			mapOptions.updateText = obj['updatetext'];
			for(var candidateName in obj.candidates) {
				if(candidateName === 'Tossup') {
					continue;
				}
				var candidate = obj.candidates[candidateName];
				CandidateManager.addCandidate(candidateName, candidate['solid'], candidate['likely'], candidate['lean'], candidate['tilt']);
			}

			for(var stateName in obj.states) {
				var stateData = obj.states[stateName];
				var state = states.filter(state => state.name === stateName)[0];
				state.setVoteCount(stateData['votecount'], obj['updatetext']);
				state.setColor(stateData['candidate'], stateData['colorvalue']);
				state.delegates = stateData['delegates'];
				if(stateData['disabled']) {
					state.toggleDisable();
				}
			}

			for(var stateName in obj.proportional) {
				var stateData = obj.proportional[stateName];
				var state = proportionalStates.filter(state => state.name === stateName)[0];
				state.setVoteCount(stateData['votecount'], obj['updatetext']);
				state.setColor(stateData['candidate'], stateData['colorvalue']);
				state.delegates = stateData['delegates'];
				if(stateData['disabled']) { 
					state.toggleDisable();
				}
			}

			countVotes();
			ChartManager.updateChart();
			LegendManager.updateLegend();

			var mapHTML = document.getElementById('map-div');
			mapHTML.style.visibility = 'visible';
			
			gtag('event', 'load', {
				'event_category': 'load_map',
				'event_label': 'loaded saved map new version ' + currentCache,
				'non_interaction': true
			});
		}});
	}

	static loadSavedMap_old(data, options) {
		var lines = data.split('\n');
		var meta = lines[0].split(' ');
		if(options) {
			enableCongress = options.enableCongress;
		} else {
			enableCongress = false;
		}
		
		MapLoader.loadMap(meta[0], meta[1], meta[2], meta[3], meta[4], meta[5], {enableCongress: enableCongress,
			onLoad: function() {
			console.log("Loading saved map...");

			// --- RUN THIS AFTER THE MAP HAS BEEN LOADED ---
		
			// parse each candidate in the file
			// add them to the map
			var candidateEndLine = meta[6];
			for(var candidateIndex = 1; candidateIndex < candidateEndLine; ++candidateIndex) {
				var candidate = lines[candidateIndex].split(' ');
				CandidateManager.addCandidate(candidate[0].replace(/\%/g, " "), candidate[1], candidate[2], candidate[3], candidate[4]);
			}

			// parse each state in the file
			// change them to their candidate
			for(var stateDataIndex = candidateEndLine; stateDataIndex < lines.length - 1; ++stateDataIndex) {
				var stateIndex = stateDataIndex - candidateEndLine;
				var stateData = lines[stateDataIndex].split(' ');
				var stateName = stateData[0];
				var state = states[stateIndex];
				var updateText = (meta[7] === 'true');
				mapOptions.updateText = updateText;

				var voteCount = parseInt(stateData[stateData.length - 2]);
				state.setVoteCount(voteCount, updateText);	
				
				// if its a primary map
				if(MapLoader.save_type === 'primary' || MapLoader.save_type === 'proportional') {
					var majorityCandidate = "Tossup";
					var majorityVoteCount = 0;
					var state = states.find(state => state.name === stateData[0]);

					for(var candidateIndex = 0; candidateIndex < candidateEndLine - 1; ++candidateIndex) {
						// get the candidate name
						var candidateName = lines[candidateIndex + 1].split(' ')[0];
						candidateName = candidateName.replace(/\%/g, " ");

						// read in the delegate count
						var delegates = stateData[4 + candidateIndex];

						// set the delegate  count
						state.delegates[candidateName] = parseInt(delegates);
						if(parseInt(delegates) > majorityVoteCount) {
							majorityVoteCount = parseInt(delegates);
							majorityCandidate = candidateName;
						} else if(parseInt(delegates) === majorityVoteCount) {
							majorityCandidate = 'Tossup';
						}
					}

					state.delegates['Tossup'] = parseInt(stateData[3]);

					// set the color to the candidate with the most delegates
					if(majorityCandidate === 'Tossup') {
						state.setColor('Tossup', 2);
					}
					else {
						state.setColor(majorityCandidate, 0);
					}
					
				}
				// otherwise
				else {
					// get the candidate
					var candidateName = stateData[1].replace(/\%/g, " ");
					// set the proper color
					state.setColor(candidateName, parseInt(stateData[2]));
				}
				
				var disable = (stateData[stateData.length - 1] === 't');
				if(disable === true) {
					state.toggleDisable();
				}
			}
			
			countVotes();
			ChartManager.updateChart();
			LegendManager.updateLegend();
			
			gtag('event', 'load', {
				'event_category': 'load_map',
				'event_label': 'loaded saved map old version ' + currentCache,
				'non_interaction': true
			});
		}
			,
			updateText: meta[7]
		});
	}

	static loadFileMap() {
		var file = document.getElementById('loadfile').files[0];
		var fileReader = new FileReader();
		fileReader.onload = function(loadEvent) {
			var a = loadEvent.target.result;
			try {
				MapLoader.loadSavedMap_new(a);
				closeAllPopups();
			} catch(e) {
				console.log('New file load failed, attempting old');
				MapLoader.loadSavedMap_old(a);
				closeAllPopups();
			}
		}
		fileReader.readAsText(file, 'UTF-8');
	}

	// reads through the SVG and sets up states and buttons
	static initData(dataid) {
		// clear any previously loaded data
		states = [];
		buttons = [];
		lands = [];

		// get list of all html state elements
		var htmlElements = document.getElementById('outlines').children;

		// iterate over each element
		for(var index = 0, length = htmlElements.length; index < length; ++index) {
			var htmlElement = htmlElements[index];
			htmlElement.setAttribute('style', 'inherit');
			htmlElement.setAttribute('cursor', 'pointer');
			var name = htmlElement.getAttribute('id');
			if(name === null || name.includes('*lines*') || name.includes("*ignore*") ||
				name.includes("_ignore_") || name.includes('othertext') || name === 'text') {
				// do nothing with it paths that
				// have these ids
			} else if(name.includes('-button')) {
				// don't include buttons as states
				htmlElement.onclick = function() {
					buttonClick(this);
				}
				if(MapLoader.save_type === 'congressional' ||
				MapLoader.save_type === 'presidential' ||
				MapLoader.save_type === 'gubernatorial') {
					htmlElement.setAttribute('onmouseover', 'if(KeyboardManager.keyStates[70]){buttonClick(this, {setSolid: true});}');
				}
				buttons.push(htmlElement);
			} else if(name.includes('-land')) {
				htmlElement.onclick = function() {
					landClick(this);
				}
				if(MapLoader.save_type === 'congressional' ||
				MapLoader.save_type === 'presidential' ||
				MapLoader.save_type === 'gubernatorial') {
					htmlElement.setAttribute('onmouseover', 'if(KeyboardManager.keyStates[70]){landClick(this, {setSolid: true});}');
				}
				lands.push(htmlElement);
			} else {
				htmlElement.onclick = function() {
					stateClick(this);
				}
				states.push(new State(name, htmlElement, dataid));
				var stateIndex = states.length - 1;
				if(MapLoader.save_type === 'congressional' ||
				MapLoader.save_type === 'presidential' ||
				MapLoader.save_type === 'gubernatorial') {
					htmlElement.setAttribute('onmouseover', 'if(KeyboardManager.keyStates[70]){stateClick(this, {setSolid: true});}');
				}
			}
		}

		var proportional = document.getElementById('proportional');
		if(proportional) {
			var proportionalElements = proportional.children;
			for(var index = 0, length = proportionalElements.length; index < length; ++index) {
				var element = proportionalElements[index];
				element.setAttribute('cursor', 'pointer');
				element.setAttribute('style', 'inherit');
				var name = element.getAttribute('id');
				var state = new State(name, element, dataid);
				proportionalStates.push(state);
				element.onclick = (function() {
					var ref_index = proportionalStates.length - 1;	
					return function() {	
						stateClickPaintProportional(
						proportionalStates[ref_index]);
					}
				})();
			}
		}
	}

	// sets all states to white
	static clearMap() {
		MapLoader.loadMap(MapLoader.save_filename, MapLoader.save_fontsize, MapLoader.save_strokewidth, MapLoader.save_dataid, MapLoader.save_type, MapLoader.save_year, {updateText: mapOptions.updateText, clear: true});
		MapManager.setLockMap(false);
	}
}

MapLoader.save_filename = "";
MapLoader.save_dataid = "";
MapLoader.save_type = "";
MapLoader.save_year = "";
MapLoader.save_fontsize = "";
MapLoader.save_strokewidth = "";
class PresetLoader {
	static blockPresetNotify() {
		var notification = document.getElementById('notification');
		notification.style.display = 'inline';
		var message = notification.querySelector('#notification-message');
		var notificationText = 'Presets cannot be changed while editing a historical ' + MapLoader.save_type + ' map';
		message.innerHTML = notificationText;
		var title = notification.querySelector('#notification-title');
		title.innerHTML = 'Sorry';
	}

	static loadPreset(value) {
		if(blockPresets) {
			blockPresetNotify();
			return;
		}
	
		CandidateManager.initCandidates();

		switch(value) {
			case 'classic':
				PresetLoader.loadPresetClassic();
				break;
			case 'republican primary':
				PresetLoader.loadPresetRepublicanPrimary();
				break;
			case 'democratic primary':
				PresetLoader.loadPresetDemocraticPrimary();
				break;
			case 'france':
				PresetLoader.loadPresetFrance();
				break;
			case 'germany':
				PresetLoader.loadPresetGermany();
				break;
			case 'southafrica':
				PresetLoader.loadPresetSouthAfrica();
				break;
			case 'india':
				PresetLoader.loadPresetIndia();
				break;
			case 'italy':
				PresetLoader.loadPresetItaly();
				break;
			case 'uk':
				PresetLoader.loadPresetUK();
				break;
			case 'canada':
				PresetLoader.loadPresetCanada();
				break;
			case 'australia':
				PresetLoader.loadPresetAustralia();
				break;
			case 'spain':
				PresetLoader.loadPresetSpain();
				break;
			case 'turkey':
				PresetLoader.loadPresetTurkey();
				break;
			case 'trinidad_tobago':
				PresetLoader.loadPresetTrinidadTobago();
				break;
			case 'netherlands':
				PresetLoader.loadPresetNetherlands();
				break;
			case 'brazil':
				PresetLoader.loadPresetBrazil();
				break;
			case 'ireland':
				PresetLoader.loadPresetIreland();
				break;
			case 'russia':
				PresetLoader.loadPresetRussia();
				break;
			case 'switzerland':
				PresetLoader.loadPresetSwitzerland();
				break;
			case 'portugal':
				PresetLoader.loadPresetPortugal();
				break;
		}
		
		MapManager.verifyMap();
		verifyPaintIndex();
		countVotes();
		ChartManager.updateChart();
		ChartManager.chart.generateLegend();
		LegendManager.updateLegend();
	}

	// republicans vs democrats
	static loadPresetClassic() {
		var republican = new Candidate('Republican', 
			['#BF1D29', '#FF5865', '#FF8B98', '#Cf8980']);
		var democrat = new Candidate('Democrat',
			['#1C408C', '#577CCC', '#8AAFFF', '#949BB3']);

		CandidateManager.candidates['Republican'] = republican;
		CandidateManager.candidates['Democrat'] = democrat;
	}

	static loadPresetRepublicanPrimary() {
		var trump = new Candidate('Trump',
			['#bf1d29','#bf1d29','#bf1d29','#bf1d29']);
		var weld = new Candidate('Weld',
			['#e6b700','#e6b700','#e6b700','#e6b700']);
		var walsh = new Candidate('Walsh',
			['#1c408c','#1c408c','#1c408c','#1c408c']);
		var sanford = new Candidate('Sanford',
			['#1c8c28','#1c8c28','#1c8c28','#1c8c28']);
		
		CandidateManager.candidates['Trump'] = trump;
		CandidateManager.candidates['Weld'] = weld;
		CandidateManager.candidates['Walsh'] = walsh;
		CandidateManager.candidates['Sanford'] = sanford;
	}

	static loadPresetDemocraticPrimary() {
		var biden = new Candidate('Biden',
			['#009900','#009900','#009900','#009900']);
		var harris = new Candidate('Harris',
			['#ff9900','#ff9900','#ff9900','#ff9900']);
		var sanders = new Candidate('Sanders',
			['#457fff','#457fff','#457fff','#457fff']);
		var warren = new Candidate('Warren',
			['#996600','#996600','#996600','#996600']);
		var buttigieg = new Candidate('Buttigieg',
			['#990099','#990099','#990099','#990099']);
		var klobuchar = new Candidate('Klobuchar',
			['#ff66ff','#ff66ff','#ff66ff','#ff66ff']);
		var booker = new Candidate('Booker',
			['#66ccff','#66ccff','#66ccff','#66ccff']);
		var yang = new Candidate('Yang',
			['#3da882','#3da882','#3da882','#3da882']);
		
		CandidateManager.candidates['Biden'] = biden;
		CandidateManager.candidates['Harris'] = harris;
		CandidateManager.candidates['Sanders'] = sanders;
		CandidateManager.candidates['Warren'] = warren;
		CandidateManager.candidates['Buttigieg'] = buttigieg;
		CandidateManager.candidates['Klobuchar'] = klobuchar;
		CandidateManager.candidates['Booker'] = booker;
		CandidateManager.candidates['Yang'] = yang;
	}

	// French parties
	static loadPresetFrance() {
		var lrem = new Candidate('LREM', 
			['#ccb800', '#ccb800', '#ccb800', '#ccb800']);
		var rn = new Candidate('RN',
			['#0D378A', '#0D378A', '#0D378A', '#0D378A']);
		var eelv = new Candidate('EÉLV',
			['#00C000', '#00C000', '#00C000', '#00C000']);
		var lr = new Candidate('LR',
			['#0066CC', '#0066CC', '#0066CC', '#0066CC']);
		var lfi = new Candidate('LFI',
			['#CC2443', '#CC2443', '#CC2443', '#CC2443']);
		var ps = new Candidate('PS',
			['#FF8080', '#FF8080', '#FF8080', '#FF8080']);

		CandidateManager.candidates['LREM'] = lrem;
		CandidateManager.candidates['RN'] = rn;
		CandidateManager.candidates['EÉLV'] = eelv;
		CandidateManager.candidates['LR'] = lr;
		CandidateManager.candidates['LFI'] = lfi;
		CandidateManager.candidates['PS'] = ps;
		LegendManager.toggleLegendLeans()
	}

	// German parties
	static loadPresetGermany() {
		var union = new Candidate('CDU/CSU', 
			['#000000', '#000000', '#000000', '#000000']);
		var spd = new Candidate('SPD',
			['#F0001C', '#F0001C', '#F0001C', '#F0001C']);
		var grn = new Candidate('GRÜNE',
			['#46962B', '#46962B', '#46962B', '#46962B']);
		var afd = new Candidate('AfD',
			['#009EE0', '#009EE0', '#009EE0', '#009EE0']);
		var fdp = new Candidate('FDP',
			['#dec200', '#dec200', '#dec200', '#dec200']);
		var dl = new Candidate('LINKE',
			['#BE3075', '#BE3075', '#BE3075', '#BE3075']);

		CandidateManager.candidates['CDU/CSU'] = union;
		CandidateManager.candidates['SPD'] = spd;
		CandidateManager.candidates['GRÜNE'] = grn;
		CandidateManager.candidates['AfD'] = afd;
		CandidateManager.candidates['FDP'] = fdp;
		CandidateManager.candidates['LINKE'] = dl;
		LegendManager.toggleLegendLeans()
	}

	// Italian parties
	static loadPresetItaly() {
		var lega = new Candidate('Lega', 
			['#008F21', '#008F21', '#008F21', '#008F21']);
		var pd = new Candidate('PD',
			['#FF3643', '#FF3643', '#FF3643', '#FF3643']);
		var mcs = new Candidate('M5S',
			['#FFEB3B', '#FFEB3B', '#FFEB3B', '#FFEB3B']);
		var fi = new Candidate('FI',
			['#318CE7', '#318CE7', '#318CE7', '#318CE7']);
		var fdi = new Candidate('FdI',
			['#003397', '#003397', '#003397', '#003397']);
		var eu = new Candidate('+Eu',
			['#FFD700', '#FFD700', '#FFD700', '#FFD700']);

		CandidateManager.candidates['Lega'] = lega;
		CandidateManager.candidates['PD'] = pd;
		CandidateManager.candidates['M5S'] = mcs;
		CandidateManager.candidates['FI'] = fi;
		CandidateManager.candidates['FdI'] = fdi;
		CandidateManager.candidates['+EU'] = eu;
		LegendManager.toggleLegendLeans()
	}

	// British parties
	static loadPresetUK() {
		var bxp = new Candidate('BXP',
			['#12B6CF', '#12B6CF', '#12B6CF', '#12B6CF']);
		var ldm = new Candidate('LDM',
			['#FDBB30', '#FDBB30', '#FDBB30', '#FDBB30']);
		var lab = new Candidate('LAB',
			['#DC241f', '#DC241f', '#DC241f', '#DC241f']);
		var grn = new Candidate('GRN',
			['#6AB023', '#6AB023', '#6AB023', '#6AB023']);
		var con = new Candidate('CON', 
			['#0087DC', '#0087DC', '#0087DC', '#0087DC']);
		var snp = new Candidate('SNP',
			['#cccc00', '#cccc00', '#cccc00', '#cccc00']);
		var tig = new Candidate('TIG',
			['#222221', '#222221', '#222221', '#222221']);
		var ukip = new Candidate('UKIP',
			['#70147A', '#70147A', '#70147A', '#70147A']);
		var pc = new Candidate('PC',
			['#008142', '#008142', '#008142', '#008142']);
		var sf = new Candidate('SF',
			['#008800', '#008800', '#008800', '#008800']);
		var dup = new Candidate('DUP',
			['#D46A4C', '#D46A4C', '#D46A4C', '#D46A4C']);
		var uup = new Candidate('UUP',
			['#9999FF', '#9999FF', '#9999FF', '#9999FF']);
		var apni = new Candidate('APNI',
			['#F6CB2F', '#F6CB2F', '#F6CB2F', '#F6CB2F']);

		CandidateManager.candidates['BXP'] = bxp;
		CandidateManager.candidates['LDM'] = ldm;
		CandidateManager.candidates['LAB'] = lab;
		CandidateManager.candidates['GRN'] = grn
		CandidateManager.candidates['CON'] = con;
		CandidateManager.candidates['SNP'] = snp;
		CandidateManager.candidates['TIG'] = tig;
		CandidateManager.candidates['PC'] = pc;
		CandidateManager.candidates['SF'] = sf;
		CandidateManager.candidates['DUP'] = dup;
		CandidateManager.candidates['UUP'] = uup;
		CandidateManager.candidates['APNI'] = apni;
		LegendManager.toggleLegendLeans()
	}

	// Canadian parties
	static loadPresetCanada() {
		var con = new Candidate('CON', 
			['#6495ED', '#6495ED', '#6495ED', '#6495ED']);
		var lib = new Candidate('LIB',
			['#F08080', '#F08080', '#F08080', '#F08080']);
		var ndp = new Candidate('NDP',
			['#F4A460', '#F4A460', '#F4A460', '#F4A460']);
		var grn = new Candidate('GRN',
			['#9ACD32', '#9ACD32', '#9ACD32', '#9ACD32']);
		var bqc = new Candidate('BQC',
			['#87CEFA', '#87CEFA', '#87CEFA', '#87CEFA']);
		var ppc = new Candidate('PPC',
			['#83789E', '#83789E', '#83789E', '#83789E']);

		CandidateManager.candidates['CON'] = con;
		CandidateManager.candidates['LIB'] = lib;
		CandidateManager.candidates['NDP'] = ndp;
		CandidateManager.candidates['GRN'] = grn;
		CandidateManager.candidates['BQC'] = bqc;
		CandidateManager.candidates['PPC'] = ppc;
		LegendManager.toggleLegendLeans()
	}

	// Australian parties
	static loadPresetAustralia() {
		var lib = new Candidate('LIB', 
			['#0047AB', '#0047AB', '#0047AB', '#0047AB']);
		var lnp = new Candidate('LNP',
			['#063C7C', '#063C7C', '#063C7C', '#063C7C']);
		var nat = new Candidate('NAT',
			['#006644', '#006644', '#006644', '#006644']);
		var clp = new Candidate('CLP',
			['#F8981D', '#F8981D', '#F8981D', '#F8981D']);
		var ind = new Candidate('IND',
			['#C0C0C0', '#C0C0C0', '#C0C0C0', '#C0C0C0']);
		var cen = new Candidate('CEN',
			['#ff6300', '#ff6300', '#ff6300', '#ff6300']);
		var grn = new Candidate('GRN',
			['#39B54A', '#39B54A', '#39B54A', '#39B54A']);
		var lab = new Candidate('LAB',
			['#DE3533', '#DE3533', '#DE3533', '#DE3533']);

		CandidateManager.candidates['LIB'] = lib;
		CandidateManager.candidates['LNP'] = lnp;
		CandidateManager.candidates['NAT'] = nat;
		CandidateManager.candidates['CLP'] = clp;
		CandidateManager.candidates['IND'] = ind;
		CandidateManager.candidates['CEN'] = cen;
		CandidateManager.candidates['GRN'] = grn;
		CandidateManager.candidates['LAB'] = lab;
		LegendManager.toggleLegendLeans()
	}

	// Spanish Parties
	static loadPresetSpain() {
		var psoe = new Candidate('PSOE',
			['#EF1C27', '#EF1C27', '#EF1C27', '#EF1C27']);
		var pp = new Candidate('PP',
			['#1D84CE', '#1D84CE', '#1D84CE', '#1D84CE']);
		var cs = new Candidate('CS',
			['#EB6109', '#EB6109', '#EB6109', '#EB6109']);
		var unidas = new Candidate('Unidas Podemos',
			['#7B4977', '#7B4977', '#7B4977', '#7B4977']);
		var vox = new Candidate('Vox',
			['#63BE21', '#63BE21', '#63BE21', '#63BE21']);
		var erc = new Candidate('ERC-Sobiranistes',
			['#FFB232', '#FFB232', '#FFB232', '#FFB232']);
		var jxcat = new Candidate('JxCat-Junts',
			['#ED5975', '#ED5975', '#ED5975', '#ED5975']);
		var eajpnv = new Candidate('EAJ/PNV',
			['#4AAE4A', '#4AAE4A', '#4AAE4A', '#4AAE4A']);
		var eh = new Candidate('EH Bildu',
			['#B5CF18', '#B5CF18', '#B5CF18', '#B5CF18']);
		var compromis = new Candidate('Compromís 2019',
			['#EC8953', '#EC8953', '#EC8953', '#EC8953']);
		var cca = new Candidate('CCa-PNC',
			['#FFD700', '#FFD700', '#FFD700', '#FFD700']);
		var prc = new Candidate('PRC',
			['#C2CE0C', '#C2CE0C', '#C2CE0C', '#C2CE0C']);

		CandidateManager.candidates['PSOE'] = psoe;
		CandidateManager.candidates['PP'] = pp;
		CandidateManager.candidates['CS'] = cs;
		CandidateManager.candidates['Unidas Podemos'] = unidas;
		CandidateManager.candidates['Vox'] = vox;
		CandidateManager.candidates['ERC-Sobiranistes'] = erc;
		CandidateManager.candidates['JxCat-Junts'] = jxcat;
		CandidateManager.candidates['EAJ/PNV'] = eajpnv;
		CandidateManager.candidates['EH Bildu'] = eh;
		CandidateManager.candidates['Compromís 2019'] = compromis;
		CandidateManager.candidates['CCa-PNC'] = cca;
		CandidateManager.candidates['PRC'] = prc;
		LegendManager.toggleLegendLeans();
	}

	// Turkish Parties
	static loadPresetTurkey() {
		var akp = new Candidate('AKP',
			['#ffcc00','#ffcc00','#ffcc00','#ffcc00']);
		var mhp = new Candidate('MHP',
			['#870000','#870000','#870000','#870000']);
		var bbp = new Candidate('BBP',
			['#cc5252','#cc5252','#cc5252','#cc5252']);
		var chp = new Candidate('CHP',
			['#e30000','#e30000','#e30000','#e30000']);
		var hdp = new Candidate('HDP',
			['#951b88','#951b88','#951b88','#951b88']);
		var iyi = new Candidate('IYI',
			['#0099cc','#0099cc','#0099cc','#0099cc']);
		var sp = new Candidate('SP',
			['#ff5f5f','#ff5f5f','#ff5f5f','#ff5f5f']);
		var tip = new Candidate('TIP',
			['#990000','#990000','#990000','#990000']);
		var dp = new Candidate('DP',
			['#ff3333','#ff3333','#ff3333','#ff3333']);
		var ind = new Candidate('Ind',
			['#b0b0b0','#b0b0b0','#b0b0b0','#b0b0b0']);

		CandidateManager.candidates['AKP'] = akp;
		CandidateManager.candidates['MHP'] = mhp;
		CandidateManager.candidates['BBP'] = bbp;
		CandidateManager.candidates['CHP'] = chp;
		CandidateManager.candidates['HDP'] = hdp;
		CandidateManager.candidates['IYI'] = iyi;
		CandidateManager.candidates['SP'] = sp;
		CandidateManager.candidates['TIP'] = tip;
		CandidateManager.candidates['DP'] = dp;
		CandidateManager.candidates['Ind'] = ind;
	}
	
	// Trinidad and Tobago Parties
	static loadPresetTrinidadTobago() {
		var pnm = new Candidate('PNM',
			['#ff0000','#ff0000','#ff0000','#ff0000']);
		var unc = new Candidate('UNC',
			['#e8ac41','#e8ac41','#e8ac41','#e8ac41']);
		var cop = new Candidate('COP',
			['#000000','#000000','#000000','#000000']);
		var pdp = new Candidate('PDP',
			['#32cd32','#32cd32','#32cd32','#32cd32']);

		CandidateManager.candidates['PNM'] = pnm;
		CandidateManager.candidates['UNC'] = unc;
		CandidateManager.candidates['COP'] = cop;
		CandidateManager.candidates['PDP'] = pdp;
	}

	// Dutch Parties
	static loadPresetNetherlands() {
		var fvd = new Candidate('FvD',
			['#841818','#841818','#841818','#841818']);
		var vvd = new Candidate('VVD',
			['#21276A','#21276A','#21276A','#21276A']);
		var cda = new Candidate('CDA',
			['#007C5E','#007C5E','#007C5E','#007C5E']);
		var gl = new Candidate('GL',
			['#83BD00','#83BD00','#83BD00','#83BD00']);
		var pvda = new Candidate('PvdA',
			['#E12B1A','#E12B1A','#E12B1A','#E12B1A']);
		var d66 = new Candidate('D66',
			['#00B13D','#00B13D','#00B13D','#00B13D']);
		var pvv = new Candidate('PVV',
			['#21468B','#21468B','#21468B','#21468B']);
		var sp = new Candidate('SP',
			['#EE161F','#EE161F','#EE161F','#EE161F']);
		var cu = new Candidate('CU',
			['#00A7EB','#00A7EB','#00A7EB','#00A7EB']);
		var pvdd = new Candidate('PvdD',
			['#006B28','#006B28','#006B28','#006B28']);
		var a50 = new Candidate('50+',
			['#932390','#932390','#932390','#932390']);
		var sgp = new Candidate('SGP',
			['#E95D0F','#E95D0F','#E95D0F','#E95D0F']);
		var denk = new Candidate('DENK',
			['#00A7EB','#00A7EB','#00A7EB','#00A7EB']);

		CandidateManager.candidates['FvD'] = fvd;
		CandidateManager.candidates['VVD'] = vvd;
		CandidateManager.candidates['CDA'] = cda;
		CandidateManager.candidates['GL'] = gl;
		CandidateManager.candidates['PvdA'] = pvda;
		CandidateManager.candidates['D66'] = d66;
		CandidateManager.candidates['PVV'] = pvv;
		CandidateManager.candidates['SP'] = sp;
		CandidateManager.candidates['CU'] = cu;
		CandidateManager.candidates['PvdD'] = pvdd;
		CandidateManager.candidates['50+'] = a50;
		CandidateManager.candidates['DENK'] = denk;
		LegendManager.toggleLegendLeans();
	}

	// Brazilian Parties
	static loadPresetBrazil() {
		var psl = new Candidate('PSL',
			['#203B78','#203B78','#203B78','#203B78']);
		var pp = new Candidate('PP',
			['#7DC9FF','#7DC9FF','#7DC9FF','#7DC9FF']);
		var pl = new Candidate('PL',
			['#0F0073','#0F0073','#0F0073','#0F0073']);
		var psd = new Candidate('PSD',
			['#FFA500','#FFA500','#FFA500','#FFA500']);
		var mdb = new Candidate('MDB',
			['#30914D','#30914D','#30914D','#30914D']);
		var prb = new Candidate('PRB',
			['#00E6A8','#00E6A8','#00E6A8','#00E6A8']);
		var psdb = new Candidate('PSDB',
			['#0080FF','#0080FF','#0080FF','#0080FF']);
		var dem = new Candidate('DEM',
			['#8CC63E','#8CC63E','#8CC63E','#8CC63E']);
		var sd = new Candidate('SD',
			['#FF9C2B','#FF9C2B','#FF9C2B','#FF9C2B']);
		var pode = new Candidate('PODE',
			['#2DA933','#2DA933','#2DA933','#2DA933']);
		var ptb = new Candidate('PTB',
			['#7B7B7B','#7B7B7B','#7B7B7B','#7B7B7B']);
		var psc = new Candidate('PSC',
			['#009118','#009118','#009118','#009118']);
		var novo = new Candidate('NOVO',
			['#FF4D00','#FF4D00','#FF4D00','#FF4D00']);
		var patri = new Candidate('PATRI',
			['#CCAA00','#CCAA00','#CCAA00','#CCAA00']);
		
		CandidateManager.candidates['PSL'] = psl;
		CandidateManager.candidates['PP'] = pp;
		CandidateManager.candidates['PL'] = pl;
		CandidateManager.candidates['PSD'] = psd;
		CandidateManager.candidates['MDB'] = mdb;
		CandidateManager.candidates['PRB'] = prb;
		CandidateManager.candidates['PSDB'] = psdb;

		var pt = new Candidate('PT',
			['#CC0000','#CC0000','#CC0000','#CC0000']);
		var psb = new Candidate('PSB',
			['#FFCC00','#FFCC00','#FFCC00','#FFCC00']);
		var pdt = new Candidate('PDT',
			['#FF0000','#FF0000','#FF0000','#FF0000']);
		var psol = new Candidate('PSOL',
			['#700000','#700000','#700000','#700000']);
		var pcdob = new Candidate('PCdoB',
			['#A30000','#A30000','#A30000','#A30000']);
		var cidadania = new Candidate('CIDADANIA',
			['#FF9191','#FF9191','#FF9191','#FF9191']);
		var pmn = new Candidate('PMN',
			['#DD3333','#DD3333','#DD3333','#DD3333']);
		var rede = new Candidate('REDE',
			['#00C2BB','#00C2BB','#00C2BB','#00C2BB']);

		CandidateManager.candidates['PT'] = pt;
		CandidateManager.candidates['PSB'] = psb;
		CandidateManager.candidates['PDT'] = pdt;
		CandidateManager.candidates['PSOL'] = psol;

		var pros = new Candidate('PROS',
			['#FF5460','#FF5460','#FF5460','#FF5460']);
		var avante = new Candidate('AVANTE',
			['#ED5F36','#ED5F36','#ED5F36','#ED5F36']);

		CandidateManager.candidates['PROS'] = pros;
		CandidateManager.candidates['AVANTE'] = avante;
	}

	static loadPresetIreland() {
		var finegael= new Candidate('FG',
			['#6699FF','#6699FF','#6699FF','#6699FF']);
		var fiannafail = new Candidate('FF',
			['#66BB66','#66BB66','#66BB66','#66BB66']);
		var sinnfein = new Candidate('SF',
			['#326760','#326760','#326760','#326760']);
		var labour = new Candidate('Lab',
			['#CC0000','#CC0000','#CC0000','#CC0000']);
		var aaapbp = new Candidate('AAA-PBP',
			['#E5E500','#E5E500','#E5E500','#E5E500']);
		var inds4change = new Candidate('I4C',
			['#FFC0CB','#FFC0CB','#FFC0CB','#FFC0CB']);
		var socialdemocrats = new Candidate('SD',
			['#752F8B','#752F8B','#752F8B','#752F8B']);
		var green = new Candidate('GP',
			['#99CC33','#99CC33','#99CC33','#99CC33']);
		var indy = new Candidate('Ind',
			['#CCCCCC','#CCCCCC','#CCCCCC','#CCCCCC']);

		CandidateManager.candidates['FG'] = finegael;
		CandidateManager.candidates['FF'] = fiannafail;
		CandidateManager.candidates['SF'] = sinnfein;
		CandidateManager.candidates['Lab'] = labour;
		CandidateManager.candidates['AAA-PBP'] = aaapbp;
		CandidateManager.candidates['I4C'] = inds4change;
		CandidateManager.candidates['SD'] = socialdemocrats;
		CandidateManager.candidates['GP'] = green;
		CandidateManager.candidates['Ind'] = indy;
	}

	static loadPresetRussia() {
		var unitedrussia = new Candidate('ER',
			['#0C2C84','#0C2C84','#0C2C84','#0C2C84']);
		var libdem = new Candidate('LDPR',
			['#2862B3','#2862B3','#2862B3','#2862B3']);
		var communist = new Candidate('CPRF',
			['#D70000','#D70000','#D70000','#D70000']);
		var patriots = new Candidate('Patriots',
			['#F6DF3B','#F6DF3B','#F6DF3B','#F6DF3B']);
		var just = new Candidate('CP',
			['#FAB512','#FAB512','#FAB512','#FAB512']);
		var rodina = new Candidate('Rodina',
			['#EA484A','#EA484A','#EA484A','#EA484A']);
		var yabloko = new Candidate('Yabloko',
			['#00A800','#00A800','#00A800','#00A800']);
		var indy = new Candidate('Ind',
			['#CCCCCC','#CCCCCC','#CCCCCC','#CCCCCC']);

		CandidateManager.candidates['ER'] = unitedrussia;
		CandidateManager.candidates['LDPR'] = libdem;
		CandidateManager.candidates['CPRF'] = communist;
		CandidateManager.candidates['Patriots'] = patriots;
		CandidateManager.candidates['CP'] = just;
		CandidateManager.candidates['Rodina'] = rodina;
		CandidateManager.candidates['Yabloko'] = yabloko;
		CandidateManager.candidates['Ind'] = indy;
	}

	static loadPresetPortugal() {
		var ps = new Candidate('PS', 
			['#ff61ea','#ff61ea','#ff61ea','#ff61ea']);
		var indy = new Candidate('Ind', 
			['#aaaaaa','#aaaaaa','#aaaaaa','#aaaaaa']);
		var be = new Candidate('BE', 
			['#870909','#870909','#870909','#870909']);
		var pcp = new Candidate('PCP', 
			['#ff0000','#ff0000','#ff0000','#ff0000']);
		var pev = new Candidate('PEV', 
			['#008000','#008000','#008000','#008000']);
		var ppdpsd = new Candidate('PPD/PSD',
			['#ff9900','#ff9900','#ff9900','#ff9900']);
		var cdspp = new Candidate('CDS-PP',
			['#00daff','#00daff','#00daff','#00daff']);
		var pan = new Candidate('PAN',
			['#008080','#008080','#008080','#008080']);

		CandidateManager.candidates['PS'] = ps;
		CandidateManager.candidates['BE'] = be;
		CandidateManager.candidates['PCP'] = pcp;
		CandidateManager.candidates['PEV'] = pev;
		CandidateManager.candidates['PPD/PSD'] = ppdpsd;
		CandidateManager.candidates['CDS-PP'] = cdspp;
		CandidateManager.candidates['PAN'] = pan;
		CandidateManager.candidates['Ind'] = indy;
	}

	static loadPresetSouthAfrica() {
		var anc = new Candidate('ANC',
			['#006600','#006600','#006600','#006600']);
		var da = new Candidate('DA',
			['#005ba6','#005ba6','#005ba6','#005ba6']);
		var eff = new Candidate('EFF',
			['#852a2a','#852a2a','#852a2a','#852a2a']);
		var ifp = new Candidate('IFP',
			['#ff0000','#ff0000','#ff0000','#ff0000']);
		var ffp = new Candidate('FF+',
			['#ec8713','#ec8713','#ec8713','#ec8713']);
		var acdp = new Candidate('ACDP',
			['#ba0c2f','#ba0c2f','#ba0c2f','#ba0c2f']);
		var udm = new Candidate('UDM',
			['#ffde01','#ffde01','#ffde01','#ffde01']);
		var atm = new Candidate('ATM',
			['#00adee','#00adee','#00adee','#00adee']);
		var good = new Candidate('Good',
			['#f36900','#f36900','#f36900','#f36900']);
		var nfp = new Candidate('NFP',
			['#ff8040','#ff8040','#ff8040','#ff8040']);
		var aic = new Candidate('AIC',
			['#ffb543','#ffb543','#ffb543','#ffb543']);
		var cope = new Candidate('COPE',
			['#ffca08','#ffca08','#ffca08','#ffca08']);
		var pac = new Candidate('PAC',
			['#008718','#008718','#008718','#008718']);
		var alj = new Candidate('ALJ',
			['#1c9069','#1c9069','#1c9069','#1c9069']);

		CandidateManager.candidates['ANC'] = anc;
		CandidateManager.candidates['DA'] = da;
		CandidateManager.candidates['EFF'] = eff;
		CandidateManager.candidates['IFP'] = ifp;
		CandidateManager.candidates['FF+'] = ffp;
		CandidateManager.candidates['ACDP'] = acdp;
		CandidateManager.candidates['UDM'] = udm;
		CandidateManager.candidates['ATM'] = atm;
		CandidateManager.candidates['Good'] = good;
		CandidateManager.candidates['NFP'] = nfp;
		CandidateManager.candidates['AIC'] = aic;
		CandidateManager.candidates['COPE'] = cope;
		CandidateManager.candidates['PAC'] = pac;
		CandidateManager.candidates['ALJ'] = alj;
	}

	static loadPresetIndia() {
		var bjp = new Candidate('BJP',
			['#ff9933','#ff9933','#ff9933','#ff9933']);
		var ysrcp = new Candidate('YSRCP',
			['#1569c7','#1569c7','#1569c7','#1569c7']);
		var ss = new Candidate('SS',
			['#ff6634','#ff6634','#ff6634','#ff6634']);
		var jd = new Candidate('JD',
			['#004285','#004285','#004285','#004285']);
		var bjd= new Candidate('BJD',
			['#006400','#006400','#006400','#006400']);
		var bsp = new Candidate('BSP',
			['#0000ff','#0000ff','#0000ff','#0000ff']);
		var trs = new Candidate('TRS',
			['#ff89ce','#ff89ce','#ff89ce','#ff89ce']);
		var ljp = new Candidate('LJP',
			['#40ff7e','#40ff7e','#40ff7e','#40ff7e']);

		var inc = new Candidate('INC',
			['#00bfff','#00bfff','#00bfff','#00bfff']);
		var dmk = new Candidate('DMK',
			['#de1100','#de1100','#de1100','#de1100']);
		var ncp = new Candidate('NCP',
			['#008080','#008080','#008080','#008080']);

		var aitc = new Candidate('AITC',
			['#00f200','#00f200','#00f200','#00f200']);
		var sp = new Candidate('SP',
			['#a30000','#a30000','#a30000','#a30000']);

		CandidateManager.candidates['BJP'] = bjp;
		CandidateManager.candidates['YSRCP'] = ysrcp;
		CandidateManager.candidates['SS'] = ss;
		CandidateManager.candidates['JD'] = jd;
		CandidateManager.candidates['BJD'] = bjd;
		CandidateManager.candidates['BSP'] = bsp;
		CandidateManager.candidates['TRS'] = trs;
		CandidateManager.candidates['LJP'] = ljp;
		CandidateManager.candidates['INC'] = inc;
		CandidateManager.candidates['DMK'] = dmk;
		CandidateManager.candidates['NCP'] = ncp;
		CandidateManager.candidates['AITC'] = aitc;
		CandidateManager.candidates['SP'] = sp;
	}

	static loadPresetSwitzerland() {
		var svpudc = new Candidate('SVP/UDC', 
			['#088a4b','#088a4b','#088a4b','#088a4b']);
		var fdpplr = new Candidate('FDP/PLR', 
			['#0e52a0','#0e52a0','#0e52a0','#0e52a0']);
		var spps = new Candidate('SDP/PSS', 
			['#FA1360','#FA1360','#FA1360','#FA1360']);
		var gpspes = new Candidate('GPS/PES', 
			['#01df01','#01df01','#01df01','#01df01']);
		var cvppdc = new Candidate('CVP/PDC', 
			['#ef7d00','#ef7d00','#ef7d00','#ef7d00']);
		var glppvl = new Candidate('GLP/PVL',
			['#a6cf42','#a6cf42','#a6cf42','#a6cf42']);
		var bdppdb = new Candidate('BDP/PBD',
			['#000000','#000000','#000000','#000000']);
		var evppev = new Candidate('EVP/PEV',
			['#ffd735','#ffd735','#ffd735','#ffd735']);
		var ldt = new Candidate('LdT',
			['#6495ed','#6495ed','#6495ed','#6495ed']);
		var pdapst = new Candidate('PdA/PST',
			['#FF0000','#FF0000','#FF0000','#FF0000']);
		var sols = new Candidate('SolS',
			['#ababab','#ababab','#ababab','#ababab']);
		var eduudf = new Candidate('EDU/UDF',
			['#9b2a58','#9b2a58','#9b2a58','#9b2a58']);

		CandidateManager.candidates['SVP/UDC'] = svpudc ;
		CandidateManager.candidates['FDP/PLR'] = fdpplr;
		CandidateManager.candidates['SP/PS'] = spps;
		CandidateManager.candidates['GPS/PES'] = gpspes;
		CandidateManager.candidates['CVP/PDC'] = cvppdc;
		CandidateManager.candidates['GLP/PVL'] = glppvl;
		CandidateManager.candidates['BDP/PBD'] = bdppdb;
		CandidateManager.candidates['EVP/PEV'] = evppev;
		CandidateManager.candidates['PdA/PST'] = pdapst;
		CandidateManager.candidates['SolS'] = sols;
		CandidateManager.candidates['EDU/UDF'] = eduudf;
		CandidateManager.candidates['LdT'] = ldt;
	}
}

PresetLoader.blockPresets = false;
var totalVotes = 0;

class State {
	constructor(name, htmlElement, dataid) {
		this.name = name;
		this.colorValue = 1;
		this.htmlElement = htmlElement;
		this.candidate = 'Tossup';
		this.dataid = dataid;
		this.voteCount = 0;
		this.voteCount_beforeDisable = 0;
		this.resetVoteCount();
		this.disabled = false;
		this.locked = false;
		this.voters = 0;
		this.popularVote = {};
		this.turnout = 100;
		this.onChange = function() { 
		}
	}

	resetVoteCount() {
		if(this.dataid === 'congressional' ||
			this.dataid === 'usa_gubernatorial') {
			this.setVoteCount(1, false);
			this.voteCount_beforeDisable = 1;
		} else if(this.dataid === 'senate') {
			this.setVoteCount(2, false);
			this.voteCount_beforeDisable = 2;
		} else if(this.dataid === 'ltesenate') {
			this.setVoteCount(1, false);
			this.voteCount_beforeDisable = 1;
		} else if(this.dataid === 'dem_primary' ||
				this.dataid === 'rep_primary') {
			this.setVoteCount(data[this.dataid][this.name], false);
			this.voteCount_beforeDisable = data[this.dataid][this.name];
		}else if(this.dataid === 'usa_1972_ec') {
			this.setVoteCount(data[this.dataid][this.name], true);
			this.voteCount_beforeDisable = data[this.dataid][this.name];
		} else if(this.dataid === 'russia_federal_council') {
			this.setVoteCount(2, false);
			this.voteCount_beforeDisable = 2;
		} else if(this.dataid === 'duma') {
			if(this.name === 'Russia') {
				this.setVoteCount(225, false);
				this.voteCount_beforeDisable = 225;
			} else {
				this.setVoteCount(1, false);
				this.voteCount_beforeDisable = 1;
			}
		} else if(this.dataid === 'brazil_senate') {
			this.setVoteCount(3, false);
			this.voteCount_beforeDisable = 3;
		} else {
			this.setVoteCount(data[this.dataid][this.name], false);
			this.voteCount_beforeDisable = data[this.dataid][this.name];
		}
	}

	getCandidate() { 
		return this.candidate; 
	}

	getName() { 
		return this.name; 
	}
	
	getColorValue() { 
		return this.colorValue; 
	}

	getVoteCount() { 
		return this.voteCount; 
	}
	
	setVoteCount(value, updateText) {
		var diff = value - this.voteCount;
		this.voteCount = value;
		this.delegates = {};
		this.delegates['Tossup'] = value;
		if(MapLoader.save_type === 'proportional' || MapLoader.save_type === 'primary') {
			this.candidate = 'Tossup';
			this.setColor('Tossup', 2);
		}
		totalVotes += diff;

		// update the html text display
		if(updateText === true) {
			var stateText = document.getElementById(this.name + '-text');
			var text = this.name + ' ' + value;
			if(stateText !== null) {
				// the text elements in an svg are inside spans
				if(typeof stateText.childNodes[1] !== 'undefined') {
					stateText.childNodes[1].innerHTML = ' ' + value;
				} else {
					stateText.childNodes[0].innerHTML = this.name + ' ' + value;
				}
			}
		}
	}

	getHtml() { 
		return this.htmlElement; 
	}

	getDisplayColor() {
		return this.htmlElement.style.fill;
	}

	setDisplayColor(color) {
		this.htmlElement.style.fill = color;

		var button = document.getElementById(this.name + '-button');
		if(button !== null) {
			button.style.fill = color;
		}

		var land = document.getElementById(this.name + '-land');
		if(land !== null) {
			land.style.fill = color;
		}
	}

	verifyTossupColor() {
		if(this.candidate === 'Tossup') {
			this.setDisplayColor(CandidateManager.TOSSUP.colors[2]);
		}
	}

	toggleLock() {
		if(this.locked == false) {
			this.disabled = true;

			this.locked = !this.locked;
			if(this.name.includes('-S')) {
				this.htmlElement.style.visibility = 'hidden';
			}
			this.setDisplayColor(CandidateManager.TOSSUP.colors[2]);
			this.htmlElement.setAttribute('fill-opacity', '0.2');
			this.htmlElement.setAttribute('stroke-opacity', '0.2');
			var stateText = document.getElementById(this.name + '-text');
			if(stateText !== null) {
				stateText.setAttribute('fill-opacity', '0.2');
			}

			var land = document.getElementById(this.name + '-land');
			if(land !== null) {
				land.setAttribute('fill-opacity', '0.2');
				land.setAttribute('stroke-opacity', '0.2');
			}

			var button = document.getElementById(this.name + '-button');
			if(button !== null) {
				button.setAttribute('fill-opacity', '0.2');
				button.setAttribute('stroke-opacity', '0.2');
			}

			var stateLandText = document.getElementById(this.name.split("-")[0] + '-text');
			if(stateLandText !== null) {
//				stateLandText.setAttribute('fill-opacity', '0.25');
			}

		} else if(this.locked == true) {
			this.disabled = false;
			this.locked = !this.locked;
			this.setColor(this.getCandidate(), this.getColorValue());
			this.htmlElement.setAttribute('fill-opacity', '1.0');
			this.htmlElement.setAttribute('stroke-opacity', '1.0');
			if(this.name.includes('-S')) {
				this.htmlElement.style.visibility = 'visible';
			}
			var stateText = document.getElementById(this.name + '-text');
			if(stateText !== null) {
				stateText.setAttribute('fill-opacity', '1.0');
			}
			var land = document.getElementById(this.name + '-land');
			if(land != null) {
				land.setAttribute('fill-opacity', '1.0');
				land.setAttribute('stroke-opacity', '1.0');
			}
			
			var button = document.getElementById(this.name + '-button');
			if(button !== null) {
				button.setAttribute('fill-opacity', '1.0');
				button.setAttribute('stroke-opacity', '1.0');
			}
			
			var stateLandText = document.getElementById(this.name.split("-")[0] + '-text');
			if(stateLandText !== null) {
//				stateLandText.setAttribute('fill-opacity', '1.0');
			}
		}
	}

	toggleDisable() {
		if(this.locked == true) {
			return;
		}

		if(this.disabled == false) {
			this.setVoteCount(0, MapLoader.save_type === "presidential");
			this.setColor('Tossup', 2);

			//this.setDisplayColor(candidates['Tossup'].colors[1]);
			this.disabled = !this.disabled;
			this.htmlElement.setAttribute('fill-opacity', '0.25');
			this.htmlElement.setAttribute('stroke-opacity', '0.25');
			if(this.name.includes('-S')) {
	//			this.htmlElement.style.visibility = 'hidden';
			}
		
			if(MapLoader.save_type !== 'senatorial') {
				var stateText = document.getElementById(this.name + '-text');
				if(stateText !== null) {
					stateText.setAttribute('fill-opacity', '0.25');
				}
			}

			var land = document.getElementById(this.name + '-land');
			if(land !== null) {
				land.setAttribute('fill-opacity', '0.25');
				land.setAttribute('stroke-opacity', '0.25');
			}

			var button = document.getElementById(this.name + '-button');
			if(button !== null) {
				button.setAttribute('fill-opacity', '0.25');
				button.setAttribute('stroke-opacity', '0.25');
			}

			if(MapLoader.save_type !== 'senatorial') {
				var stateLandText = document.getElementById(this.name.split("-")[0] + '-text');
				if(stateLandText !== null) {
					stateLandText.setAttribute('fill-opacity', '0.25');
				}
			}

		} else if(this.disabled == true) {
			this.resetVoteCount();
			this.setVoteCount(this.voteCount, MapLoader.save_type === "presidential");
			//this.setVoteCount(this.voteCount_beforeDisable, save_type === "presidential");
			this.disabled = !this.disabled;
			this.setColor(this.getCandidate(), this.getColorValue());
			this.htmlElement.setAttribute('fill-opacity', '1.0');
			this.htmlElement.setAttribute('stroke-opacity', '1.0');
			if(this.name.includes('-S')) {
				this.htmlElement.style.visibility = 'visible';
			}
			var stateText = document.getElementById(this.name + '-text');
			if(stateText !== null) {
				stateText.setAttribute('fill-opacity', '1.0');
			}
			var land = document.getElementById(this.name + '-land');
			if(land != null) {
				land.setAttribute('fill-opacity', '1.0');
				land.setAttribute('stroke-opacity', '1.0');
			}
			
			var button = document.getElementById(this.name + '-button');
			if(button !== null) {
				button.setAttribute('fill-opacity', '1.0');
				button.setAttribute('stroke-opacity', '1.0');
			}
			
			var stateLandText = document.getElementById(this.name.split("-")[0] + '-text');
			if(stateLandText !== null) {
				stateLandText.setAttribute('fill-opacity', '1.0');
			}
		}
	}

	// only incrememnt though the colors of the specified candidate
	// if the state isn't this candidates color, start at solid
	incrementCandidateColor(candidate, setPopularVote) {
		if(this.disabled) {
			return;
		}

		// if changing color set to solor
		if(this.candidate !== candidate) {
			this.colorValue = 0;
		}
		// otherwise increment
		else {
			this.colorValue += 1;
		}

		// keep the color value within bounds
		if(this.candidate === 'Tossup') {
			// if the candidate is tossup go to max
			if(this.colorValue >= 3) {
				this.colorValue = 0;
			}

		} else {
			// if the candidate is anything else...
			//if(this.colorValue >= maxColorValue + 1) {
			if(this.colorValue >= maxColorValues) {
				this.colorValue = 0;
			}

			if(CandidateManager.candidates[candidate].singleColor) {
				this.colorValue = 0;
			}
		}

		// make sure the candidate value is correct
		this.candidate = candidate;

		// skip black color for tossup candidate
		if(this.candidate === 'Tossup') {
			this.colorValue = CandidateManager.tossupColor;
		}

		var color = CandidateManager.TOSSUP.colors[CandidateManager.tossupColor];
		
		if(this.candidate in CandidateManager.candidates &&
			CandidateManager.candidates[this.candidate].colors !== undefined && 
			CandidateManager.candidates[this.candidate].colors !== null) {
			// get color
			color = CandidateManager.candidates[this.candidate].colors[this.colorValue];
			// set color
			this.htmlElement.style.fill = color;
		}

		var land = document.getElementById(this.name + '-land');
		if(land != null) {
			land.style.fill = color;
		}

		var button = document.getElementById(this.name + '-button');
		if(button != null) {
			button.style.fill = color;
		}

		if(setPopularVote) {
			for(var key in CandidateManager.candidates) {
				if(key === candidate) {
					this.popularVote[key] = this.voters * (this.turnout / 100.0);
				} else {
					this.popularVote[key] = 0;
				}
			}
		}

		if(typeof this.onChange === 'function') {
			this.onChange();
		}
	}

	// directly change the color of a state (add error checking pls)
	setColor(candidate, colorValue, setPopularVote) {
		if(this.disabled) {
			return;
		}

		this.candidate = candidate;

		// prevent black color
		if(candidate === 'Tossup' && colorValue == 0) {
			colorValue = 2;
		}

		this.colorValue = colorValue;
		
		var color = CandidateManager.candidates[candidate].colors[colorValue];

		this.htmlElement.style.fill = color;

		var land = document.getElementById(this.name + '-land');
		if(land != null) {
			land.style.fill = color;
		}

		var button = document.getElementById(this.name + '-button');
		if(button != null) {
			button.style.fill = color;
		}

		if(setPopularVote) {
			for(var key in CandidateManager.candidates) {
				if(key === candidate) {
					this.popularVote[key] = this.voters * (this.turnout / 100.0);
				} else {
					this.popularVote[key] = 0;
				}
			}
		}
		
		if(typeof this.onChange === 'function') {
			this.onChange();
		}
	}

	static setEC() {
		// hide the popup window
		closeAllPopups();

		// get the stateId and input value
		var stateId = document.getElementById('state-id').value;
		var input = document.getElementById('state-ec').value;

		// get the state and set its new vote count
		states.forEach(function(element) {
			if(element.getName() === stateId) {
				// only update the text on presidential maps
				if(mapOptions !== undefined && mapOptions.updateText !== undefined) {
					element.setVoteCount(parseInt(input), mapOptions.updateText);
				} else {
					element.setVoteCount(parseInt(input), false);
				}
			}
		});

		// recount the votes
		countVotes();
		ChartManager.updateChart();
		LegendManager.updateLegend();
		MapManager.verifyMap();
	}
};
function updateBattleChart() {

	if(Object.keys(CandidateManager.candidates).length > 3) {
		if(mobile) {
			ChartManager.setChart('pie', 'bottom');
		} else {
			ChartManager.setChart('pie');
		}

		return;
	}

	var tossup = document.getElementById('tossupbar');

	var topbar = document.getElementById('topbar');
	var topbarSolid = document.getElementById('topbar-solid');
	var topbarLikely = document.getElementById('topbar-likely');
	var topbarLean = document.getElementById('topbar-lean');
	var topbarTilt = document.getElementById('topbar-tilt');

	var bottombar = document.getElementById('bottombar');
	var bottombarSolid = document.getElementById('bottombar-solid');
	var bottombarLikely = document.getElementById('bottombar-likely');
	var bottombarLean = document.getElementById('bottombar-lean');
	var bottombarTilt = document.getElementById('bottombar-tilt');

	// this is for when the candidates get removed
	// if a candidate gets removed, it will not get cleared from
	// the graph in the loop below
	topbar.style.flexBasis = '';
	bottombar.style.flexBasis = '';

	var candidateIndex = -1;
	for(var key in CandidateManager.candidates) {
		++candidateIndex;

		var candidate = CandidateManager.candidates[key];

		if(candidateIndex == 0) {
			tossup.style.background = candidate.colors[2];
			
			tossup.style.flexBasis = '' + (candidate.voteCount / totalVotes) * 100 + '%';
			if(ChartManager.chartLabels) {
				tossup.innerHTML = '<p>' + candidate.voteCount + '</p>';
			} else {
				tossup.innerHTML = '<p></p>';
			}
		} else if(candidateIndex == 1) {
			topbar.style.flexBasis = '' + 
				(candidate.voteCount / totalVotes) * 100 + '%';
			if(ChartManager.chartLeans) {
				topbarSolid.style.flexBasis = '' + 
					(candidate.probVoteCounts[0] / candidate.voteCount) * 100 + '%';
				topbarSolid.style.background = candidate.colors[0];

				topbarLikely.style.flexBasis = '' + 
					(candidate.probVoteCounts[1] / candidate.voteCount) * 100 + '%';
				topbarLikely.style.background = candidate.colors[1];

				topbarLean.style.flexBasis = '' + 
					(candidate.probVoteCounts[2] / candidate.voteCount) * 100 + '%';
				topbarLean.style.background = candidate.colors[2];

				topbarTilt.style.flexBasis = '' +
					(candidate.probVoteCounts[3] / candidate.voteCount) * 100 + '%';
				topbarTilt.style.background = candidate.colors[3];
				
				if(ChartManager.chartLabels) {
					topbarSolid.innerHTML = '<p>'+candidate.probVoteCounts[0]+'</p>';
					topbarLikely.innerHTML = '<p>'+candidate.probVoteCounts[1]+'</p>';
					topbarLean.innerHTML = '<p>'+candidate.probVoteCounts[2]+'</p>';
					topbarTilt.innerHTML = '<p>' + candidate.probVoteCounts[3] + '</p>';
				} else {
					topbarSolid.innerHTML = '<p></p>';
					topbarLikely.innerHTML = '<p></p>';
					topbarLean.innerHTML = '<p></p>';
					topbarTilt.innerHTML = '<p></p>';
				}
			} else {
				topbarSolid.style.flexBasis = '100%'; 
				topbarSolid.style.background = candidate.colors[0];
				topbarLikely.style.flexBasis = '0%';
				topbarLikely.style.background = candidate.colors[1];
				topbarLean.style.flexBasis = '0%'; 
				topbarLean.style.background = candidate.colors[2];
				topbarTilt.style.flexBasis = '0%';
				topbarTilt.style.background = candidate.colors[3];

				if(ChartManager.chartLabels) {
					topbarSolid.innerHTML = '<p>' + (
						candidate.probVoteCounts[0] 
						+ candidate.probVoteCounts[1]
						+ candidate.probVoteCounts[2]
						+ candidate.probVoteCounts[3]) + '</p>';
					topbarLikely.innerHTML = '<p></p>';
					topbarLean.innerHTML = '<p></p>';
					topbarTilt.innerHTML = '<p></p>';
				} else {
					topbarSolid.innerHTML = '<p></p>';
					topbarLikely.innerHTML = '<p></p>';
					topbarLean.innerHTML = '<p></p>';
					topbarTilt.innerHTML = '<p></p>';
				}
			}

		} else if(candidateIndex == 2) {
			bottombar.style.flexBasis = '' + 
				(candidate.voteCount / totalVotes) * 100 + '%';
			if(ChartManager.chartLeans) {
				bottombarSolid.style.flexBasis = '' + 
					(candidate.probVoteCounts[0] / candidate.voteCount) * 100 + '%';
				bottombarSolid.style.background = candidate.colors[0];

				bottombarLikely.style.flexBasis = '' + 
					(candidate.probVoteCounts[1] / candidate.voteCount) * 100 + '%';
				bottombarLikely.style.background = candidate.colors[1];

				bottombarLean.style.flexBasis = '' + 
					(candidate.probVoteCounts[2] / candidate.voteCount) * 100 + '%';
				bottombarLean.style.background = candidate.colors[2];
				
				bottombarTilt.style.flexBasis = '' +
					(candidate.probVoteCounts[3] / candidate.voteCount) * 100 + '%';
				bottombarTilt.style.background = candidate.colors[3];

				if(ChartManager.chartLabels) {
					bottombarSolid.innerHTML = '<p>'+candidate.probVoteCounts[0]+'</p>';
					bottombarLikely.innerHTML = '<p>'+candidate.probVoteCounts[1]+'</p>';
					bottombarLean.innerHTML = '<p>'+candidate.probVoteCounts[2]+'</p>';
					bottombarTilt.innerHTML = '<p>' + candidate.probVoteCounts[3] + '</p>';
				} else {
					bottombarSolid.innerHTML = '<p></p>';
					bottombarLikely.innerHTML = '<p></p>';
					bottombarLean.innerHTML = '<p></p>';
					bottombarTilt.innerHTML = '<p></p>';
				}
			} else {	
				bottombarSolid.style.flexBasis = '100%';
				bottombarSolid.style.background = candidate.colors[0];
				bottombarLikely.style.flexBasis = '0%';
				bottombarLikely.style.background = candidate.colors[1];
				bottombarLean.style.flexBasis = '0%'; 
				bottombarLean.style.background = candidate.colors[2];
				bottombarTilt.style.flexBasis = '0%';
				bottombarTilt.style.background = candidate.colors[3];

				if(ChartManager.chartLabels) {
					bottombarSolid.innerHTML = '<p>' + (
						candidate.probVoteCounts[0] 
						+ candidate.probVoteCounts[1]
						+ candidate.probVoteCounts[2]
						+ candidate.probVoteCounts[3]) + '</p>';
					bottombarLikely.innerHTML = '<p></p>';
					bottombarLean.innerHTML = '<p></p>';
					bottombarTilt.innerHTML = '<p></p>';
				} else {
					bottombarSolid.innerHTML = '<p></p>';
					bottombarLikely.innerHTML = '<p></p>';
					bottombarLean.innerHTML = '<p></p>';
					bottombarTilt.innerHTML = '<p></p>';
				}
			}
		}
	}
}

function buttonClick(clickElement, options) {
	if(php_candidate_edit === false)
		return;

	if(mode === 'move') {
		return;
	} else if(mode === 'paint' || mode === 'paintmove') {
		if(MapLoader.save_type === 'primary' || MapLoader.save_type === 'proportional') {
			buttonClickPaintProportional(clickElement);
		} else {

			buttonClickPaint(clickElement, options);
		}
	} else if(mode === 'ec') {
		buttonClickEC(clickElement);
	} else if(mode === 'delete') {
		buttonClickDelete(clickElement);
	}
	
	countVotes();
	ChartManager.updateChart();
	LegendManager.updateLegend();
}

function buttonClickPaint(clickElement, options) {
	var id = clickElement.getAttribute('id').split('-')[0];
	var state = states.find(state => state.name === id);
	stateClickPaint(state, options);
	//state.incrementCandidateColor(paintIndex);
}

function buttonClickPaintProportional(clickElement) {
	var id = clickElement.getAttribute('id').split('-')[0];
	var state = states.find(state => state.name === id);
	stateClickPaintProportional(state);
}

function buttonClickEC(clickElement) {
	var id = clickElement.getAttribute('id');
	var split = id.split('-');
	var state = states.find(state => state.name === split[0]);
	var ecedit = document.getElementById('ecedit');
	var eceditText = document.getElementById('ecedit-message');
	var input = document.getElementById('state-ec');
	var stateId = document.getElementById('state-id');
	eceditText.innerHTML = 'Set ' + split[0] + ' electoral college';
	input.value = state.voteCount;
	stateId.value = split[0];
	ecedit.style.display = 'inline';
}

function buttonClickDelete(clickElement) {
	var id = clickElement.getAttribute('id');
	var split = id.split('-');
	var state = states.find(state => state.name === split[0]);

	state.toggleDisable();
}

function landClick(clickElement, options) {
	if(php_candidate_edit === false)
		return;

	if(mode === 'move') {
		return;
	}

	var setSolid = false;
	if(options) {
		setSolid = options.setSolid;
	}

	var id = clickElement.getAttribute('id');
	var split = id.split('-');
	var stateName = split[0];
	var districtName = split[1];

	var AL;
	var districts = [];

	// get each district
	states.forEach(function(state, index) {
		if(state.name.includes(stateName)) {
			districts.push(state);
			if(state.name.includes('AL')) {
				AL = state;
			}
		}
	});

	// make the popular vote calculator point to the AL
	viewPopularVote(AL);

	if(mode === 'paint' || mode === 'paintmove') {
		// check if each district has the same candidate and color value
		if(setSolid === false) {
			AL.incrementCandidateColor(paintIndex);
		} else {
			AL.setColor(paintIndex, 0);
		}
		districts.forEach(function(district) {
			district.setColor(AL.getCandidate(), AL.getColorValue(), true);
		});
	} else if(mode === 'delete') {
		districts.forEach(function(district) {
			district.toggleDisable();
		});
	}

	countVotes();
	ChartManager.updateChart();
	LegendManager.updateLegend();
	countPopularVote();
}

function stateClick(clickElement, options) {
	if(php_candidate_edit === false)
		return;

	// first element is the state
	// second element might be button
	//var split = id.split('-');
	// get state where state.name equals the id attribute
	//var state = states.find(state => state.name === split[0]);
	var id = clickElement.getAttribute('id');
	var state = states.find(state => state.name === id);

	switch(mode) {
		case 'paint':
		case 'paintmove':
			if(MapLoader.save_type === 'primary' || MapLoader.save_type === 'proportional') {
				stateClickPaintProportional(state, id);
			} else if(MapLoader.save_type === 'usapopular') {
				stateClickPaintProportional(state, id);	
			} else {
				stateClickPaint(state, options);
			}
			break;
		case 'ec':
			stateClickEC(state);
			break;
		case 'delete':
			stateClickDelete(state);
			break;
	}

	countVotes();
	ChartManager.updateChart();
	LegendManager.updateLegend();
}

var tooltipTimeout = null;

function stateClickPaint(state, options) {

	if(state.candidate === 'Tossup' && paintIndex === 'Tossup') {
		var tooltip = document.getElementById('legend-tooltip');
		if(tooltip) {
			tooltip.style.opacity = 0.7;

			if(tooltipTimeout) {
				window.clearTimeout(tooltipTimeout);
			}

			tooltipTimeout = setTimeout(function() {
				tooltip.style.opacity = 0.0;
			}, 3000);
		}
	}

	if(mobile === false) {
		var setPopularVoteElement = document.getElementById('popularvote-clicksetpv');
		var setPopularVote = false;
		if(setPopularVoteElement) {
			setPopularVote = setPopularVoteElement.checked;
		}

		var setSolid = false;
		if(options) {
			setSolid = options.setSolid;
		}

		if(setSolid) {
			state.setColor(paintIndex, 0, setPopularVote);
		} else {
			state.incrementCandidateColor(paintIndex, setPopularVote);
		}

		if(state.name.includes('-D')) {
			var autoMarginsElement = document.getElementById('popularvote-automargins');
			var autoMargins = false;
			if(autoMarginsElement) {
				autoMargins = autoMarginsElement.checked;
			}

			var avoidALMarginsElement = document.getElementById('popularvote-avoidalmargins').checked;
			var avoidALMargins = false;
			if(avoidALMarginsElement) {
				avoidALMargins = avoidALMarginsElement.checked;
			}

			if(autoMargins === true && avoidALMargins === false) {
				calculateAutoMarginAL(state.name.split('-')[0]);
			}
		}

		viewPopularVote(state);
		countPopularVote(options);
	} else {
		state.incrementCandidateColor(paintIndex);
	}
}

function stateClickPaintProportional(state, id) {
	if(state.disabled) {
		return;
	}

	closeAllPopups();
	var demdel = document.getElementById('demdel');
	demdel.style.display = 'flex';
	var message = document.getElementById('demdel-message');
	if(state.name !== 'SU') {
		message.innerHTML = state.name + ' - ' + state.voteCount + ' delegates';
	} else {
		message.innerHTML = 'Super - ' + state.voteCount + ' delegates';
	}
	var hidden = document.getElementById('demdel-state-name');
	hidden.value = state.name;
	var ranges = document.getElementById('demdel-ranges');

	// remove old sliders
	while(ranges.firstChild) {
		ranges.removeChild(ranges.firstChild);
	}

	var max  = state.voteCount;
	var total = 0;

	var displayTossup = document.createElement('DIV');
	displayTossup.setAttribute('id', 'display-Tossup');

	for(var key in CandidateManager.candidates) {
		if(key === 'Tossup')
			continue;
		// create slider, set their max to the states delegate count
		var range = document.createElement('INPUT');
		range.setAttribute('id', 'range-' + key);
		range.setAttribute('type', 'range');
		range.setAttribute('max', max);
		range.value = state.delegates[key];
		total += state.delegates[key];
		// create display for slider
		var display = document.createElement('DIV');
		display.setAttribute('id', 'display-' + key);
		display.innerHTML = key + ' - ' + range.value + ' - ' +
			((state.delegates[key] / max) * 100).toFixed(2) + '%';

		// this is how you reference the display DOM
		// im not sure exactly what this is but its weird
		range.oninput = (function() {
			var refkey = key;
			var refdisplay = display;
			var refdisplayTossup = displayTossup;
			var prevvalue = parseInt(range.value);
			return function(b) {
				total -= prevvalue;
				total += parseInt(this.value);

				if(total > max) {
					var diff = total - max;
					total -= diff;
					this.value -= diff;
				}
				
				prevvalue = parseInt(this.value);

				displayTossup.innerHTML = 'Tossup - ' + (max - total) + ' - ' +
					(( (max - total) / max) * 100).toFixed(2) + '%';
				
				// update the display	
				refdisplay.innerHTML = refkey + ' - ' + this.value + ' - ' + 
					((this.value / max) * 100).toFixed(2) + '%';
			}
		})();

		ranges.appendChild(display);
		ranges.appendChild(range);
	}

	displayTossup.innerHTML = 'Tossup - ' + (max - total) + ' - ' + (( (max - total) / max) * 100).toFixed(2) + '%';
	ranges.appendChild(displayTossup);
}

function stateClickDelete(state) {
	state.toggleDisable();
}

function stateClickEC(state) {
	if(state.disabled === false) {
		var ecedit = document.getElementById('ecedit');
		var eceditText = document.getElementById('ecedit-message');
		var input = document.getElementById('state-ec');
		var stateId = document.getElementById('state-id');
		eceditText.innerHTML = 'Set ' + state.name + ' electoral college';
		input.value = state.voteCount;
		stateId.value = state.name;
		ecedit.style.display = 'inline';
	}
}

function specialClick(clickElement, e) {
	var id = clickElement.getAttribute('id');
	var state = states.find(state => state.name === id);
	if(mode === 'move') {

	} else if(mode === 'paint' || mode === 'paintmove') {
		state.incrementCandidateColor(paintIndex);
		countVotes();
		ChartManager.updateChart();
		LegendManager.updateLegend();
	}
}

// when a button on the legend is clicked, it saves the selected candidate
// to a variable, so that you can paint with it
function legendClick(candidate, button) {

	if(mode === 'move') {

	} else if(mode === 'paint' || mode === 'paintmove') {
		paintIndex = candidate;
		LegendManager.selectCandidateDisplay(button);
	} else if(mode === 'candidate' && candidate !== 'Tossup') {
		var candidateedit = document.getElementById('candidateedit');
		candidateedit.style.display = 'inline';
		var nameinput = document.getElementById('candidate-name');
		nameinput.value = candidate;
		var solidinput = document.getElementById('candidate-solid');
		solidinput.value = CandidateManager.candidates[candidate].colors[0];
		var likelyinput = document.getElementById('candidate-likely');
		likelyinput.value = CandidateManager.candidates[candidate].colors[1];
		var leaninput = document.getElementById('candidate-lean');
		leaninput.value = CandidateManager.candidates[candidate].colors[2];
		var tiltinput = document.getElementById('candidate-tilt');
		tiltinput.value = CandidateManager.candidates[candidate].colors[3];
		var hiddeninput = document.getElementById('candidate-originalName');
		var message = document.getElementById('candidateedit-message');
		message.innerHTML = 'Edit ' + candidate;
		hiddeninput.value = candidate;
	} else if(mode === 'deletecandidate' && candidate !== 'Tossup') {
		CandidateManager.deleteCandidateByName(candidate);		
	}
}
function verifyCongress() {
	if(mobile) {
		return false;
	}

	var element = document.getElementById('sidebar-congress');

	if(enableCongress) {
		element.style.display = 'block';
		return true;
	} else {
		element.style.display = 'none';
		return false;
	}
}

function verifyCongressContested() {
	if(mobile) {
		return false;
	}

	var element = document.getElementById('sidebar-congress-contested');

	if(enableCongressContested) {
		element.style.display = 'block';
		return true;
	} else {
		element.style.display = 'none';
		return false;
	}
}

function setCongressContested() {
	if(verifyCongressContested() === false) {
		return;
	}

	var element = document.getElementById('sidebar-congress-contested');

	db_getCongress(function(data) {
		for(var stateIndex = 0, length = states.length; stateIndex < length; ++stateIndex) {
			var state = states[stateIndex];
			var stateName = state.name.split('-')[0];
			var district = state.name.split('-')[1];

			// Convert district to a number
			// AL -> 0, 01 -> 1, 02 -> 2
			var districtIndex = district;
			if(districtIndex === 'AL') {
				districtIndex = '0';
			}
			districtIndex = parseInt(districtIndex).toString();
			
			var districtData = data.filter(obj => {
				return obj.State === stateName &&
					obj.District === districtIndex;
			})[0];

			if(state.colorValue !== 0) {
				var district = document.createElement('div');
				district.setAttribute('class', 'sidebar-box');

				var title = document.createElement('h3');
				title.innerHTML = state.name;
				district.appendChild(title);

				var rep = document.createElement('div');
				rep.innerHTML = districtData.Representative + ' - ' + districtData.Party;
				district.appendChild(rep);

				var color = document.createElement('div');
				color.setAttribute('class', 'sidebar-congress-colors');
				var proj = document.createElement('div');
				proj.innerHTML = '<span>Projection</span>';
				proj.setAttribute('class', 'sidebar-congress-color');
				proj.style.backgroundColor = state.htmlElement.style.fill;
				color.appendChild(proj);
				var map = document.createElement('div');
				map.innerHTML = '<span>Map</span>';
				map.setAttribute('class', 'sidebar-congress-color');
				map.style.backgroundColor = state.htmlElement.style.fill;
				map.style.cursor = 'pointer';
				state.onChange = (function() {
					var m = map;
					var s = state;
					return function() {
						m.style.backgroundColor = s.htmlElement.style.fill;
					}
				})();

				map.onclick = (function() {
					var s = state;
					var m = map;
					return function() {
						s.incrementCandidateColor(paintIndex, false);	
						m.style.backgroundColor = s.htmlElement.style.fill;
					}
				})();
				color.appendChild(map);

				district.appendChild(color);
				element.appendChild(district);
			}
		}
	});

}

function setCongressOnHover() {

	if(verifyCongress() === false) {
		return;
	}

	db_getCongress(function(data) {
		for(var stateIndex = 0, length = states.length; stateIndex < length; ++stateIndex) {
			var state = states[stateIndex];

			state.htmlElement.onmouseover = (function() {
				var stateName = state.name.split('-')[0];
				var district = state.name.split('-')[1];

				// Convert district to a number
				// AL -> 0, 01 -> 1, 02 -> 2
				var districtIndex = district;
				if(districtIndex === 'AL') {
					districtIndex = '0';
				}
				districtIndex = parseInt(districtIndex).toString();

				var districtData = data.filter(obj => {
					return obj.State === stateName &&
						obj.District === districtIndex;
				})[0];

				return function() {
					var element = document.getElementById('sidebar-congress-district');
					element.innerHTML = stateName + '-' + district;
					element = document.getElementById('sidebar-congress-representative');
					element.innerHTML = districtData.Representative;
					element = document.getElementById('sidebar-congress-party');
					element.innerHTML = districtData.Party;

					if(KeyboardManager.keyStates[70]) {
						stateClick(this, {setSolid: true});
					}
				}
			})();
		}
	});
}

function db_getCongress(onLoad) {
	$.ajax({
		url: 'req_congress.php',
		type: 'GET',
		success : function(data) {
			var obj = jQuery.parseJSON(data);
			onLoad(obj);
		},
		error : function(a, b, c) {
			console.log(a);
			console.log(b);
			console.log(c);
		}
	});
}
data = {
'turkey_national_assembly': {'Adana': 15, 'Adıyaman':5, 'Afyonkarahisar':6, 'Ağrı':4, 'Aksaray':4, 'Amasya':3, 'Ankara':36, 'Antalya':16, 'Ardahan':2, 'Artvin':2, 'Aydın':8, 'Balıkesir':9, 'Bartın':2, 'Batman': 5, 'Bayburt':1, 'Bilecik':2, 'Bingöl':3, 'Bitlis':3, 'Bolu':3, 'Burdur':3, 'Bursa':20, 'Çanakkale':4, 'Çankırı':2, 'Çorum':4, 'Denizli':8, 'Diyarbakır':12, 'Düzce':3, 'Edirne':4, 'Elazığ':5, 'Erzincan':2, 'Erzurum':6, 'Eskişehir':7, 'Gaziantep':14, 'Giresun':4, 'Gümüşhane':2, 'Hakkâri':3, 'Hatay':11, 'Iğdır':2, 'Isparta':4, 'İstanbul':98, 'İzmir':28, 'Kahramanmaraş':8, 'Kars':3, 'Kastamonu':3, 'Karabük':3, 'Karaman':3, 'Kayseri':10, 'Kilis':2, 'Kırklareli':3, 'Kırıkkale':3, 'Kırşehir':2, 'Kocaeli':13, 'Konya':15, 'Kütahya':5, 'Malatya':6, 'Manisa':10, 'Mardin':6, 'Mersin':13, 'Muğla':7, 'Muş':4, 'Nevşehir':3, 'Niğde':3, 'Ordu':6, 'Osmaniye':4, 'Rize':3, 'Sakarya':7, 'Samsun':9, 'Siirt':3, 'Sinop':2, 'Sivas':5, 'Şanlıurfa':14, 'Şırnak':4, 'Tekirdağ':7, 'Tokat':5, 'Trabzon':6, 'Tunceli':2, 'Uşak':3, 'Van':8, 'Yalova':3, 'Yozgat':4, 'Zonguldak':5},

'south_africa_national_assembly': {'Eastern Cape': 25, 'Western Cape': 23, 'Northern Cape': 5, 'Gauteng': 48, 'KwaZulu': 41, 'Limpopo': 19, 'Mpumalanga': 15, 'Free State': 11, 'North West Cape': 13, 'South Africa': 200},

'portugal_constituencies': {'Lisbon': 47, 'Porto': 39, 'Braga': 19, 'Setúbal': 18, 'Aveiro': 16, 'Leiria': 10, 'Coimbra': 9, 'Faro': 9, 'Santarém': 9, 'Viseu': 9, 'Madeira': 6, 'Viana do Castelo': 6, 'Azores': 5, 'Vila Real': 5, 'Guarda': 4, 'Castelo Branco': 4, 'Beja': 3, 'Bragança': 3, 'Évora': 3, 'Portalegre': 2, 'Europe': 2, 'Outside Europe': 2},

'ireland_constituencies': {'Donegal': 5, 'Sligo-Leitrim': 4, 'Mayo': 4, 'Galway-West': 5, 'Clare': 4, 'Kerry': 5, 'Cork South-West': 3, 'Cork North-West': 3, 'Limerick County': 3, 'Limerick City': 4, 'Cork South-Central': 4, 'Cork North-Central': 4, 'Cork East': 4, 'Waterford': 4, 'Tipperary': 5, 'Carlow-Kilkenny': 5, 'Wexford': 5, 'Wicklow & East Carlow': 5, 'Kildare North': 4, 'Kildare South': 3, 'Laois': 3, 'Offaly': 3, 'Galway-East': 3, 'Roscommon-Galway': 3, 'Longford-Westmeath': 4, 'Meath West': 3, 'Meath East': 3, 'Louth': 5, 'Cavan-Monaghan': 4, 'Sligo-Leitrim': 4, 'Donegal': 5, 'Dublin Fingal': 5, 'Dublin West': 4, 'Dublin North-West': 3, 'Dublin Bay North': 5, 'Dublin Mid-West': 4, 'Dublin South-Central': 4, 'Dublin Central': 3, 'Dublin Bay South': 4, 'Dublin South-West': 5, 'Dublin Rathdown': 3, 'Dún Laoghaire': 4},

'brazil_deputies':{'São Paulo': 70, 'Minas Gerais': 53, 'Rio de Janeiro': 46, 'Bahia': 39, 'Rio Grande do Sul': 31, 'Paraná': 30, 'Pernambuco': 25, 'Ceará': 22, 'Maranhão': 18, 'Goiás': 17, 'Pará': 17, 'Santa Catarina': 16, 'Paraíba': 12, 'Espírito Santo': 10, 'Piauí': 10, 'Alagoas': 9, 'Acre': 8, 'Amazonas': 8, 'Amapá': 8, 'Distrito Federal do Brasil': 8, 'Mato Grosso do Sul': 8, 'Mato Grosso': 8, 'Rio Grande do Norte': 8, 'Rondônia': 8, 'Roraima': 8, 'Sergipe': 8, 'Tocantins': 8},

'netherlands_provinces':{'Groningen': 43, 'Friesland': 43, 'Drenthe': 41, 'Overijssel': 47, 'Flevoland': 41, 'Gelderland': 55, 'Utrecht': 49, 'Noord-Holland': 55, 'Zuid-Holland': 55, 'Zeeland': 39, 'Noord-Brabant': 55, 'Limburg': 47},

'spain_constituencies': {'La Coruña': 8, 'Pontevedra': 7, 'Lugo': 4, 'Orense': 4, 'Asturias': 7, 'León': 4,'Zamora': 3, 'Salamanca': 4, 'Cáceres': 4, 'Badajoz': 6, 'Huelva': 5, 'Seville': 12, 'Cádiz': 9, 'Cordoba': 6, 'Málaga': 11, 'Granada': 7, 'Almeria': 6, 'Jaen': 5, 'Murcia': 10, 'Alicante': 12, 'Albacete': 4, 'Ciudad Real': 5, 'Toledo': 6, 'Cuenca': 3, 'Valencia': 15, 'Castellón': 5, 'Teruel': 3, 'Guadalajara': 3, 'Madrid': 37, 'Avila': 3, 'Segovia': 3, 'Valladolid': 5, 'Palencia': 3, 'Burgos': 4, 'Soria': 2, 'Zaragoza': 7, 'Tarragona': 6, 'Barcelona': 32, 'Girona': 6, 'Lreida': 4, 'Huesca': 3, 'Navarre': 5, 'La Rioja': 4, 'Álava': 4, 'Guipuzcoa': 6, 'Biscay': 8, 'Cantabria': 5, 'Ceuta': 1, 'Melilla': 1, 'Santa Cruz de Tenerife': 7, 'Las Palmas': 8, 'Balearic Islands': 8},

'switzerland_national_council': {'Aargau': 16, 'Appenzell Outer Rhodes': 1, 'Appenzell Inner Rhodes': 1, 'Basel-Landschaft': 7, 'Basel-Stadt': 5, 'Bern': 24, 'Fribourg': 7, 'Geneva': 12, 'Glarus': 1, 'Graubünden': 5, 'Jura': 2, 'Lucerne': 9, 'Neuchâtel': 4, 'Nidwalden': 1, 'Obwalden': 1, 'St. Gallen': 12, 'Schaffhausen': 2, 'Schwyz': 4, 'Solothurn': 6, 'Thurgau': 6, 'Ticino': 8, 'Uri': 1, 'Vaud': 19, 'Valais': 8, 'Zurich': 35, 'Zug': 3},

'switzerland_council_of_states': {'Aargau': 2, 'Appenzell Outer Rhodes': 1, 'Appenzell Inner Rhodes': 1, 'Basel-Landschaft': 1, 'Basel-Stadt': 1, 'Bern': 2, 'Fribourg': 2, 'Geneva': 2, 'Glarus': 2, 'Graubünden': 2, 'Jura': 2, 'Lucerne': 2, 'Neuchâtel': 2, 'Nidwalden': 1, 'Obwalden': 1, 'St. Gallen': 2, 'Schaffhausen': 2, 'Schwyz': 2, 'Solothurn': 2, 'Thurgau': 2, 'Ticino': 2, 'Uri': 2, 'Vaud': 2, 'Valais': 2, 'Zurich': 2, 'Zug': 2},

'usa_voting_pop': {'AL': 3766477, 'AK': 554567, 'AZ': 5299579, 'AR': 2283195, 'CA': 30157154, 'CO': 4279173, 'CT': 2823158, 'DE': 747791, 'FL': 16465727, 'GA': 7798827, 'HI': 1120541, 'ID': 1245967, 'IL': 9875430, 'IN': 5057601, 'IA': 2403962, 'KS': 2192338, 'KY': 3426345, 'LA': 3567717, 'ME': 1081705, 'ME-AL': 1081705, 'ME-D1': 555860, 'ME-D2': 525845, 'MD': 4667719, 'MA': 5433677, 'MI': 7737243, 'MN': 4231619, 'MS': 2267438, 'MO': 4706137, 'MT': 814909, 'NE': 1445479, 'NE-AL': 1445479, 'NE-D1': 493216, 'NE-D2': 493516, 'NE-D3': 458747, 'NV': 2262631, 'NH': 1074207, 'NJ': 6969717, 'NM': 1590352, 'NY': 15564730, 'NC': 7848068, 'ND': 581641, 'OH': 9002201, 'OK': 2961933, 'OR': 3224738, 'PA': 10109422, 'RI': 848045, 'SC': 3863498, 'SD': 652167, 'TN': 5149399, 'TX': 20568009, 'UT': 2129444, 'VT': 506066, 'VA': 6541685, 'WA': 5658502, 'WV': 1456034, 'WI': 4491015, 'WY': 446600, 'DC': 560277},

'usa_ec': {'AL': 9, 'AK': 3, 'AZ': 11, 'AR': 6, 'CA': 55, 'CO': 9, 'CT': 7, 'DE': 3, 'FL': 29, 'GA': 16, 'HI': 4, 'ID': 4, 'IL': 20, 'IN': 11, 'IA': 6, 'KS': 6, 'KY': 8, 'LA': 8, 'ME': 4, 'ME-AL': 2, 'ME-D1': 1, 'ME-D2': 1, 'MD': 10, 'MA': 11, 'MI': 16, 'MN': 10, 'MS': 6, 'MO': 10, 'MT': 3, 'NE': 5, 'NE-AL': 2, 'NE-D1': 1, 'NE-D2': 1, 'NE-D3': 1, 'NV': 6, 'NH': 4, 'NJ': 14, 'NM': 5, 'NY': 29, 'NC': 15, 'ND': 3, 'OH': 18, 'OK': 7, 'OR': 7, 'PA': 20, 'RI': 4, 'SC': 9, 'SD': 3, 'TN': 11, 'TX': 38, 'UT': 6, 'VT': 3, 'VA': 13, 'WA': 12, 'WV': 5, 'WI': 10, 'WY': 3, 'DC': 3},

'usa_1972_ec': {'AL': 9, 'AK': 3, 'AZ': 6, 'AR': 6, 'CA': 45, 'CO': 7, 'CT': 8, 'DE': 3, 'FL': 17, 'GA': 12, 'HI': 4, 'ID': 4, 'IL': 26, 'IN': 13, 'IA': 8, 'KS': 7, 'KY': 9, 'LA': 10, 'ME': 4, 'ME-AL': 2, 'ME-D1': 1, 'ME-D2': 1, 'MD': 10, 'MA': 14, 'MI': 21, 'MN': 10, 'MS': 7, 'MO': 12, 'MT': 4, 'NE': 5, 'NV': 3, 'NH': 4, 'NJ': 17, 'NM': 4, 'NY': 41, 'NC': 13, 'ND': 3, 'OH': 25, 'OK': 8, 'OR': 6, 'PA': 27, 'RI': 4, 'SC': 8, 'SD': 4, 'TN': 10, 'TX': 26, 'UT': 4, 'VT': 3, 'VA': 11, 'WA': 9, 'WV': 6, 'WI': 11, 'WY': 3, 'DC': 3},

'usa_pre_civilwar_ec': {'AL': 9, 'AK': 0, 'AZ': 0, 'AR': 4, 'CA': 4, 'CO': 0, 'CT': 6, 'DE': 3, 'FL': 3, 'GA': 10, 'HI': 0, 'ID': 0, 'IL': 11, 'IN': 13, 'IA': 4, 'KS': 0, 'KY': 12, 'LA': 6, 'ME': 8, 'MD': 8, 'MA': 13, 'MI': 6, 'MN': 4, 'MS': 7, 'MO': 9, 'MT': 0, 'NE': 0, 'NV': 0, 'NH': 5, 'NJ': 7, 'NM': 0, 'NY': 35, 'NC': 10, 'ND': 0, 'OH': 23, 'OK': 0, 'OR': 3, 'PA': 27, 'RI': 4, 'SC': 8, 'SD': 0, 'TN': 12, 'TX': 4, 'UT': 0, 'VT': 5, 'VA': 15, 'WA': 0, 'WI': 5, 'WY': 0, 'DC': 0},

'usa_no_districts_ec': {'AL': 9, 'AK': 3, 'AZ': 11, 'AR': 6, 'CA': 55, 'CO': 9, 'CT': 7, 'DE': 3, 'FL': 29, 'GA': 16, 'HI': 4, 'ID': 4, 'IL': 20, 'IN': 11, 'IA': 6, 'KS': 6, 'KY': 8, 'LA': 8, 'ME': 4,'MD': 10, 'MA': 11, 'MI': 16, 'MN': 10, 'MS': 6, 'MO': 10, 'MT': 3, 'NE': 5, 'NV': 6, 'NH': 4, 'NJ': 14, 'NM': 5, 'NY': 29, 'NC': 15, 'ND': 3, 'OH': 18, 'OK': 7, 'OR': 7, 'PA': 20, 'RI': 4, 'SC': 9, 'SD': 3, 'TN': 11, 'TX': 38, 'UT': 6, 'VT': 3, 'VA': 13, 'WA': 12, 'WV': 5, 'WI': 10, 'WY': 3, 'DC': 3},

'usa_senate': {'AL': 1, 'AL-S': 1, 'AK': 1, 'AK-S': 1, 'AZ': 1, 'AZ-S': 1, 'AR': 1, 'AR-S': 1, 'CA': 1, 'CA-S': 1, 'CO': 1, 'CO-S': 1, 'CT': 1, 'CT-S': 1, 'DE': 1, 'DE-S': 1, 'FL': 1, 'FL-S': 1, 'GA': 1, 'GA-S': 1, 'HI': 1, 'HI-S': 1, 'ID': 1, 'ID-S': 1, 'IL': 1, 'IL-S': 1, 'IN': 1, 'IN-S': 1, 'IA': 1, 'IA-S': 1, 'KS': 1, 'KS-S': 1, 'KY': 1, 'KY-S': 1, 'LA': 1, 'LA-S': 1, 'ME': 1, 'ME-S': 1, 'MD': 1, 'MD-S': 1, 'MA': 1, 'MA-S': 1, 'MI': 1, 'MI-S': 1, 'MN': 1, 'MN-S': 1, 'MS': 1, 'MS-S': 1, 'MO': 1, 'MO-S': 1, 'MT': 1, 'MT-S': 1, 'NE': 1, 'NE-S': 1, 'NV': 1, 'NV-S': 1, 'NH': 1, 'NH-S': 1, 'NJ': 1, 'NJ-S': 1, 'NM': 1, 'NM-S': 1, 'NY': 1, 'NY-S': 1, 'NC': 1, 'NC-S': 1, 'ND': 1, 'ND-S': 1, 'OH': 1, 'OH-S': 1, 'OK': 1, 'OK-S': 1, 'OR': 1, 'OR-S': 1, 'PA': 1, 'PA-S': 1, 'RI': 1, 'RI-S': 1, 'SC': 1,'SC-S': 1, 'SD': 1, 'SD-S': 1, 'TN': 1, 'TN-S': 1, 'TX': 1, 'TX-S': 1, 'UT': 1, 'UT-S': 1, 'VT': 1, 'VT-S': 1, 'VA': 1, 'VA-S': 1, 'WA': 1, 'WA-S': 1, 'WV': 1, 'WV-S': 1, 'WI': 1, 'WI-S': 1, 'WY': 1, 'WY-S': 1},

'usa_gubernatorial': {'AL': 1, 'AK': 1, 'AZ': 1, 'AR': 1, 'CA': 1, 'CO': 1, 'CT': 1, 'DE': 1, 'FL': 1, 'GA': 1, 'HI': 1, 'ID': 1, 'IL': 1, 'IN': 1, 'IA': 1, 'KS': 1, 'KY': 1, 'LA': 1, 'ME': 1,'MD': 1, 'MA': 1, 'MI': 1, 'MN': 1, 'MS': 1, 'MO': 1, 'MT': 1, 'NE': 1, 'NV': 1, 'NH': 1, 'NJ': 1, 'NM': 1, 'NY': 1, 'NC': 1, 'ND': 1, 'OH': 1, 'OK': 1, 'OR': 1, 'PA': 1, 'RI': 1, 'SC': 1, 'SD': 1, 'TN': 1, 'TX': 1, 'UT': 1, 'VT': 1, 'VA': 1, 'WA': 1, 'WV': 1, 'WI': 1, 'WY': 1},

'lte_ec': {'NE': 11, 'SE': 9, 'MW': 8, 'WE': 6, 'SW': 5, 'OV': 7},

'dem_primary': {'AL': 52, 'AK': 14, 'AS': 6, 'AZ': 67, 'AR': 31, 'CA': 416, 'CO': 67, 'CT': 49, 'DE': 17, 'DA': 13, 'DC': 17, 'FL': 219, 'GA': 105, 'GU': 6, 'HI': 22, 'ID': 20, 'IL': 155, 'IN': 70, 'IA': 41, 'KS': 33, 'KY': 46, 'LA': 50, 'ME': 24, 'MD': 79, 'MA': 91, 'MI': 125, 'MN': 75, 'MS': 36, 'MO': 68, 'MT': 16, 'NE': 25, 'NV': 36, 'NH': 24, 'NJ': 107, 'NM': 29, 'NY': 224, 'NC': 110, 'ND': 14, 'NI': 6, 'OH': 136, 'OK': 37, 'OR': 52, 'PA': 153, 'PR': 51, 'RI': 21, 'SC': 54, 'SD': 14, 'SU': 764, 'TN': 64, 'TX': 228, 'UT': 29, 'VT': 16, 'VI': 6, 'VA': 99, 'WA': 89, 'WV': 24, 'WI': 77, 'WY': 13},

'rep_primary': {'AL': 50, 'AK': 28, 'AS': 9, 'AZ': 57, 'AR': 40, 'CA': 172, 'CO': 37, 'CT': 28, 'DE': 16, 'DC': 19, 'FL': 122, 'GA': 76, 'GU': 9, 'HI': 19, 'ID': 32, 'IL': 67, 'IN': 70, 'IA': 40, 'KS': 39, 'KY': 46, 'LA': 46, 'ME': 22, 'MD': 38, 'MA': 41, 'MI': 73, 'MN': 39, 'MS': 39, 'MO': 54, 'MT': 27, 'NE': 36, 'NV': 25, 'NH': 22, 'NJ': 49, 'NM': 22, 'NY': 95, 'NC': 71, 'ND': 29, 'NI': 9, 'OH': 82, 'OK': 43, 'OR': 28, 'PA': 88, 'PR': 23, 'RI': 19, 'SC': 50, 'SD': 29, 'TN': 58, 'TX': 155, 'UT': 40, 'VT': 17, 'VI': 9, 'VA': 49, 'WA': 44, 'WV': 34, 'WI': 52, 'WY': 29},

'eu_parliament': {'IE-S':5,'IE-N':4,'IE-D':4,'BE-D':12,'BE-F':8,'BE-G':1,'FR':79,'ES':59,'PT':21,'IT':76,'MT':6,'CY':6,'GR':21,'BG':17,'RO':33,'HR':12,'HU':21,'SL':8,'AT':19,'SK':14,'CZ':21,'PO':52,'LI':11,'LV':8,'EE':7,'FI':14,'SE':21,'DK':14,'NL':29,'LU':6,'DE':96}
}
/*!
 * html2canvas 1.0.0-rc.5 <https://html2canvas.hertzen.com>
 * Copyright (c) 2019 Niklas von Hertzen <https://hertzen.com>
 * Released under MIT License
 */
!function(A,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(A=A||self).html2canvas=e()}(this,function(){"use strict";
/*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */var r=function(A,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(A,e){A.__proto__=e}||function(A,e){for(var t in e)e.hasOwnProperty(t)&&(A[t]=e[t])})(A,e)};function A(A,e){function t(){this.constructor=A}r(A,e),A.prototype=null===e?Object.create(e):(t.prototype=e.prototype,new t)}var K=function(){return(K=Object.assign||function(A){for(var e,t=1,r=arguments.length;t<r;t++)for(var n in e=arguments[t])Object.prototype.hasOwnProperty.call(e,n)&&(A[n]=e[n]);return A}).apply(this,arguments)};function a(B,s,o,i){return new(o||(o=Promise))(function(A,e){function t(A){try{n(i.next(A))}catch(A){e(A)}}function r(A){try{n(i.throw(A))}catch(A){e(A)}}function n(e){e.done?A(e.value):new o(function(A){A(e.value)}).then(t,r)}n((i=i.apply(B,s||[])).next())})}function S(t,r){var n,B,s,A,o={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return A={next:e(0),throw:e(1),return:e(2)},"function"==typeof Symbol&&(A[Symbol.iterator]=function(){return this}),A;function e(e){return function(A){return function(e){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,B&&(s=2&e[0]?B.return:e[0]?B.throw||((s=B.return)&&s.call(B),0):B.next)&&!(s=s.call(B,e[1])).done)return s;switch(B=0,s&&(e=[2&e[0],s.value]),e[0]){case 0:case 1:s=e;break;case 4:return o.label++,{value:e[1],done:!1};case 5:o.label++,B=e[1],e=[0];continue;case 7:e=o.ops.pop(),o.trys.pop();continue;default:if(!(s=0<(s=o.trys).length&&s[s.length-1])&&(6===e[0]||2===e[0])){o=0;continue}if(3===e[0]&&(!s||e[1]>s[0]&&e[1]<s[3])){o.label=e[1];break}if(6===e[0]&&o.label<s[1]){o.label=s[1],s=e;break}if(s&&o.label<s[2]){o.label=s[2],o.ops.push(e);break}s[2]&&o.ops.pop(),o.trys.pop();continue}e=r.call(t,o)}catch(A){e=[6,A],B=0}finally{n=s=0}if(5&e[0])throw e[1];return{value:e[0]?e[1]:void 0,done:!0}}([e,A])}}}var I=(n.prototype.add=function(A,e,t,r){return new n(this.left+A,this.top+e,this.width+t,this.height+r)},n.fromClientRect=function(A){return new n(A.left,A.top,A.width,A.height)},n);function n(A,e,t,r){this.left=A,this.top=e,this.width=t,this.height=r}for(var T=function(A){return I.fromClientRect(A.getBoundingClientRect())},c=function(A){for(var e=[],t=0,r=A.length;t<r;){var n=A.charCodeAt(t++);if(55296<=n&&n<=56319&&t<r){var B=A.charCodeAt(t++);56320==(64512&B)?e.push(((1023&n)<<10)+(1023&B)+65536):(e.push(n),t--)}else e.push(n)}return e},l=function(){for(var A=[],e=0;e<arguments.length;e++)A[e]=arguments[e];if(String.fromCodePoint)return String.fromCodePoint.apply(String,A);var t=A.length;if(!t)return"";for(var r=[],n=-1,B="";++n<t;){var s=A[n];s<=65535?r.push(s):(s-=65536,r.push(55296+(s>>10),s%1024+56320)),(n+1===t||16384<r.length)&&(B+=String.fromCharCode.apply(String,r),r.length=0)}return B},e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Q="undefined"==typeof Uint8Array?[]:new Uint8Array(256),t=0;t<e.length;t++)Q[e.charCodeAt(t)]=t;function B(A,e,t){return A.slice?A.slice(e,t):new Uint16Array(Array.prototype.slice.call(A,e,t))}var s=(o.prototype.get=function(A){var e;if(0<=A){if(A<55296||56319<A&&A<=65535)return e=((e=this.index[A>>5])<<2)+(31&A),this.data[e];if(A<=65535)return e=((e=this.index[2048+(A-55296>>5)])<<2)+(31&A),this.data[e];if(A<this.highStart)return e=2080+(A>>11),e=this.index[e],e+=A>>5&63,e=((e=this.index[e])<<2)+(31&A),this.data[e];if(A<=1114111)return this.data[this.highValueIndex]}return this.errorValue},o);function o(A,e,t,r,n,B){this.initialValue=A,this.errorValue=e,this.highStart=t,this.highValueIndex=r,this.index=n,this.data=B}function C(A,e,t,r){var n=r[t];if(Array.isArray(A)?-1!==A.indexOf(n):A===n)for(var B=t;B<=r.length;){if((i=r[++B])===e)return!0;if(i!==H)break}if(n===H)for(B=t;0<B;){var s=r[--B];if(Array.isArray(A)?-1!==A.indexOf(s):A===s)for(var o=t;o<=r.length;){var i;if((i=r[++o])===e)return!0;if(i!==H)break}if(s!==H)break}return!1}function g(A,e){for(var t=A;0<=t;){var r=e[t];if(r!==H)return r;t--}return 0}function w(A,e,t,r,n){if(0===t[r])return Y;var B=r-1;if(Array.isArray(n)&&!0===n[B])return Y;var s=B-1,o=1+B,i=e[B],a=0<=s?e[s]:0,c=e[o];if(2===i&&3===c)return Y;if(-1!==j.indexOf(i))return"!";if(-1!==j.indexOf(c))return Y;if(-1!==$.indexOf(c))return Y;if(8===g(B,e))return"÷";if(11===q.get(A[B])&&(c===X||c===P||c===x))return Y;if(7===i||7===c)return Y;if(9===i)return Y;if(-1===[H,d,f].indexOf(i)&&9===c)return Y;if(-1!==[p,N,m,O,y].indexOf(c))return Y;if(g(B,e)===v)return Y;if(C(23,v,B,e))return Y;if(C([p,N],L,B,e))return Y;if(C(12,12,B,e))return Y;if(i===H)return"÷";if(23===i||23===c)return Y;if(16===c||16===i)return"÷";if(-1!==[d,f,L].indexOf(c)||14===i)return Y;if(36===a&&-1!==rA.indexOf(i))return Y;if(i===y&&36===c)return Y;if(c===R&&-1!==Z.concat(R,m,D,X,P,x).indexOf(i))return Y;if(-1!==Z.indexOf(c)&&i===D||-1!==Z.indexOf(i)&&c===D)return Y;if(i===M&&-1!==[X,P,x].indexOf(c)||-1!==[X,P,x].indexOf(i)&&c===b)return Y;if(-1!==Z.indexOf(i)&&-1!==AA.indexOf(c)||-1!==AA.indexOf(i)&&-1!==Z.indexOf(c))return Y;if(-1!==[M,b].indexOf(i)&&(c===D||-1!==[v,f].indexOf(c)&&e[1+o]===D)||-1!==[v,f].indexOf(i)&&c===D||i===D&&-1!==[D,y,O].indexOf(c))return Y;if(-1!==[D,y,O,p,N].indexOf(c))for(var Q=B;0<=Q;){if((w=e[Q])===D)return Y;if(-1===[y,O].indexOf(w))break;Q--}if(-1!==[M,b].indexOf(c))for(Q=-1!==[p,N].indexOf(i)?s:B;0<=Q;){var w;if((w=e[Q])===D)return Y;if(-1===[y,O].indexOf(w))break;Q--}if(J===i&&-1!==[J,G,V,z].indexOf(c)||-1!==[G,V].indexOf(i)&&-1!==[G,k].indexOf(c)||-1!==[k,z].indexOf(i)&&c===k)return Y;if(-1!==tA.indexOf(i)&&-1!==[R,b].indexOf(c)||-1!==tA.indexOf(c)&&i===M)return Y;if(-1!==Z.indexOf(i)&&-1!==Z.indexOf(c))return Y;if(i===O&&-1!==Z.indexOf(c))return Y;if(-1!==Z.concat(D).indexOf(i)&&c===v||-1!==Z.concat(D).indexOf(c)&&i===N)return Y;if(41===i&&41===c){for(var u=t[B],U=1;0<u&&41===e[--u];)U++;if(U%2!=0)return Y}return i===P&&c===x?Y:"÷"}function u(t,A){A||(A={lineBreak:"normal",wordBreak:"normal"});var e=function(A,n){void 0===n&&(n="strict");var B=[],s=[],o=[];return A.forEach(function(A,e){var t=q.get(A);if(50<t?(o.push(!0),t-=50):o.push(!1),-1!==["normal","auto","loose"].indexOf(n)&&-1!==[8208,8211,12316,12448].indexOf(A))return s.push(e),B.push(16);if(4!==t&&11!==t)return s.push(e),31===t?B.push("strict"===n?L:X):t===W?B.push(_):29===t?B.push(_):43===t?131072<=A&&A<=196605||196608<=A&&A<=262141?B.push(X):B.push(_):void B.push(t);if(0===e)return s.push(e),B.push(_);var r=B[e-1];return-1===eA.indexOf(r)?(s.push(s[e-1]),B.push(r)):(s.push(e),B.push(_))}),[s,B,o]}(t,A.lineBreak),r=e[0],n=e[1],B=e[2];return"break-all"!==A.wordBreak&&"break-word"!==A.wordBreak||(n=n.map(function(A){return-1!==[D,_,W].indexOf(A)?X:A})),[r,n,"keep-all"===A.wordBreak?B.map(function(A,e){return A&&19968<=t[e]&&t[e]<=40959}):void 0]}var i,U,E,F,h,H=10,d=13,f=15,p=17,N=18,m=19,R=20,L=21,v=22,O=24,D=25,b=26,M=27,y=28,_=30,P=32,x=33,V=34,z=35,X=37,J=38,G=39,k=40,W=42,Y="×",q=(i=function(A){var e,t,r,n,B,s=.75*A.length,o=A.length,i=0;"="===A[A.length-1]&&(s--,"="===A[A.length-2]&&s--);var a="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof Uint8Array&&void 0!==Uint8Array.prototype.slice?new ArrayBuffer(s):new Array(s),c=Array.isArray(a)?a:new Uint8Array(a);for(e=0;e<o;e+=4)t=Q[A.charCodeAt(e)],r=Q[A.charCodeAt(e+1)],n=Q[A.charCodeAt(e+2)],B=Q[A.charCodeAt(e+3)],c[i++]=t<<2|r>>4,c[i++]=(15&r)<<4|n>>2,c[i++]=(3&n)<<6|63&B;return a}("KwAAAAAAAAAACA4AIDoAAPAfAAACAAAAAAAIABAAGABAAEgAUABYAF4AZgBeAGYAYABoAHAAeABeAGYAfACEAIAAiACQAJgAoACoAK0AtQC9AMUAXgBmAF4AZgBeAGYAzQDVAF4AZgDRANkA3gDmAOwA9AD8AAQBDAEUARoBIgGAAIgAJwEvATcBPwFFAU0BTAFUAVwBZAFsAXMBewGDATAAiwGTAZsBogGkAawBtAG8AcIBygHSAdoB4AHoAfAB+AH+AQYCDgIWAv4BHgImAi4CNgI+AkUCTQJTAlsCYwJrAnECeQKBAk0CiQKRApkCoQKoArACuALAAsQCzAIwANQC3ALkAjAA7AL0AvwCAQMJAxADGAMwACADJgMuAzYDPgOAAEYDSgNSA1IDUgNaA1oDYANiA2IDgACAAGoDgAByA3YDfgOAAIQDgACKA5IDmgOAAIAAogOqA4AAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAK8DtwOAAIAAvwPHA88D1wPfAyAD5wPsA/QD/AOAAIAABAQMBBIEgAAWBB4EJgQuBDMEIAM7BEEEXgBJBCADUQRZBGEEaQQwADAAcQQ+AXkEgQSJBJEEgACYBIAAoASoBK8EtwQwAL8ExQSAAIAAgACAAIAAgACgAM0EXgBeAF4AXgBeAF4AXgBeANUEXgDZBOEEXgDpBPEE+QQBBQkFEQUZBSEFKQUxBTUFPQVFBUwFVAVcBV4AYwVeAGsFcwV7BYMFiwWSBV4AmgWgBacFXgBeAF4AXgBeAKsFXgCyBbEFugW7BcIFwgXIBcIFwgXQBdQF3AXkBesF8wX7BQMGCwYTBhsGIwYrBjMGOwZeAD8GRwZNBl4AVAZbBl4AXgBeAF4AXgBeAF4AXgBeAF4AXgBeAGMGXgBqBnEGXgBeAF4AXgBeAF4AXgBeAF4AXgB5BoAG4wSGBo4GkwaAAIADHgR5AF4AXgBeAJsGgABGA4AAowarBrMGswagALsGwwbLBjAA0wbaBtoG3QbaBtoG2gbaBtoG2gblBusG8wb7BgMHCwcTBxsHCwcjBysHMAc1BzUHOgdCB9oGSgdSB1oHYAfaBloHaAfaBlIH2gbaBtoG2gbaBtoG2gbaBjUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHbQdeAF4ANQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQd1B30HNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B4MH2gaKB68EgACAAIAAgACAAIAAgACAAI8HlwdeAJ8HpweAAIAArwe3B14AXgC/B8UHygcwANAH2AfgB4AA6AfwBz4B+AcACFwBCAgPCBcIogEYAR8IJwiAAC8INwg/CCADRwhPCFcIXwhnCEoDGgSAAIAAgABvCHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIhAiLCI4IMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAANQc1BzUHNQc1BzUHNQc1BzUHNQc1B54INQc1B6II2gaqCLIIugiAAIAAvgjGCIAAgACAAIAAgACAAIAAgACAAIAAywiHAYAA0wiAANkI3QjlCO0I9Aj8CIAAgACAAAIJCgkSCRoJIgknCTYHLwk3CZYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiAAIAAAAFAAXgBeAGAAcABeAHwAQACQAKAArQC9AJ4AXgBeAE0A3gBRAN4A7AD8AMwBGgEAAKcBNwEFAUwBXAF4QkhCmEKnArcCgAHHAsABz4LAAcABwAHAAd+C6ABoAG+C/4LAAcABwAHAAc+DF4MAAcAB54M3gweDV4Nng3eDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEeDqABVg6WDqABoQ6gAaABoAHXDvcONw/3DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DncPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB7cPPwlGCU4JMACAAIAAgABWCV4JYQmAAGkJcAl4CXwJgAkwADAAMAAwAIgJgACLCZMJgACZCZ8JowmrCYAAswkwAF4AXgB8AIAAuwkABMMJyQmAAM4JgADVCTAAMAAwADAAgACAAIAAgACAAIAAgACAAIAAqwYWBNkIMAAwADAAMADdCeAJ6AnuCR4E9gkwAP4JBQoNCjAAMACAABUK0wiAAB0KJAosCjQKgAAwADwKQwqAAEsKvQmdCVMKWwowADAAgACAALcEMACAAGMKgABrCjAAMAAwADAAMAAwADAAMAAwADAAMAAeBDAAMAAwADAAMAAwADAAMAAwADAAMAAwAIkEPQFzCnoKiQSCCooKkAqJBJgKoAqkCokEGAGsCrQKvArBCjAAMADJCtEKFQHZCuEK/gHpCvEKMAAwADAAMACAAIwE+QowAIAAPwEBCzAAMAAwADAAMACAAAkLEQswAIAAPwEZCyELgAAOCCkLMAAxCzkLMAAwADAAMAAwADAAXgBeAEELMAAwADAAMAAwADAAMAAwAEkLTQtVC4AAXAtkC4AAiQkwADAAMAAwADAAMAAwADAAbAtxC3kLgAuFC4sLMAAwAJMLlwufCzAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAApwswADAAMACAAIAAgACvC4AAgACAAIAAgACAALcLMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAvwuAAMcLgACAAIAAgACAAIAAyguAAIAAgACAAIAA0QswADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAANkLgACAAIAA4AswADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACJCR4E6AswADAAhwHwC4AA+AsADAgMEAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMACAAIAAGAwdDCUMMAAwAC0MNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQw1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHPQwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADUHNQc1BzUHNQc1BzUHNQc2BzAAMAA5DDUHNQc1BzUHNQc1BzUHNQc1BzUHNQdFDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAgACAAIAATQxSDFoMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAF4AXgBeAF4AXgBeAF4AYgxeAGoMXgBxDHkMfwxeAIUMXgBeAI0MMAAwADAAMAAwAF4AXgCVDJ0MMAAwADAAMABeAF4ApQxeAKsMswy7DF4Awgy9DMoMXgBeAF4AXgBeAF4AXgBeAF4AXgDRDNkMeQBqCeAM3Ax8AOYM7Az0DPgMXgBeAF4AXgBeAF4AXgBeAF4AXgBeAF4AXgBeAF4AXgCgAAANoAAHDQ4NFg0wADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAeDSYNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIAAgACAAIAAgACAAC4NMABeAF4ANg0wADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAD4NRg1ODVYNXg1mDTAAbQ0wADAAMAAwADAAMAAwADAA2gbaBtoG2gbaBtoG2gbaBnUNeg3CBYANwgWFDdoGjA3aBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gaUDZwNpA2oDdoG2gawDbcNvw3HDdoG2gbPDdYN3A3fDeYN2gbsDfMN2gbaBvoN/g3aBgYODg7aBl4AXgBeABYOXgBeACUG2gYeDl4AJA5eACwO2w3aBtoGMQ45DtoG2gbaBtoGQQ7aBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gZJDjUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B1EO2gY1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQdZDjUHNQc1BzUHNQc1B2EONQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHaA41BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B3AO2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gY1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B2EO2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gZJDtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBkkOeA6gAKAAoAAwADAAMAAwAKAAoACgAKAAoACgAKAAgA4wADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAD//wQABAAEAAQABAAEAAQABAAEAA0AAwABAAEAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAKABMAFwAeABsAGgAeABcAFgASAB4AGwAYAA8AGAAcAEsASwBLAEsASwBLAEsASwBLAEsAGAAYAB4AHgAeABMAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAFgAbABIAHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYADQARAB4ABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkAFgAaABsAGwAbAB4AHQAdAB4ATwAXAB4ADQAeAB4AGgAbAE8ATwAOAFAAHQAdAB0ATwBPABcATwBPAE8AFgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwArAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAAQABAANAA0ASwBLAEsASwBLAEsASwBLAEsASwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUAArACsABABQAAQABAAEAAQABAAEAAQAKwArAAQABAArACsABAAEAAQAUAArACsAKwArACsAKwArACsABAArACsAKwArAFAAUAArAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAGgAaAFAAUABQAFAAUABMAB4AGwBQAB4AKwArACsABAAEAAQAKwBQAFAAUABQAFAAUAArACsAKwArAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUAArAFAAUAArACsABAArAAQABAAEAAQABAArACsAKwArAAQABAArACsABAAEAAQAKwArACsABAArACsAKwArACsAKwArAFAAUABQAFAAKwBQACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwAEAAQAUABQAFAABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUAArACsABABQAAQABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQAKwArAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwAeABsAKwArACsAKwArACsAKwBQAAQABAAEAAQABAAEACsABAAEAAQAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwArAAQABAArACsABAAEAAQAKwArACsAKwArACsAKwArAAQABAArACsAKwArAFAAUAArAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwAeAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwAEAFAAKwBQAFAAUABQAFAAUAArACsAKwBQAFAAUAArAFAAUABQAFAAKwArACsAUABQACsAUAArAFAAUAArACsAKwBQAFAAKwArACsAUABQAFAAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQAKwArACsABAAEAAQAKwAEAAQABAAEACsAKwBQACsAKwArACsAKwArAAQAKwArACsAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAB4AHgAeAB4AHgAeABsAHgArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABAArACsAKwArACsAKwArAAQABAArAFAAUABQACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAB4AUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABAArACsAKwArACsAKwArAAQABAArACsAKwArACsAKwArAFAAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwArAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAKwBcAFwAKwBcACsAKwBcACsAKwArACsAKwArAFwAXABcAFwAKwBcAFwAXABcAFwAXABcACsAXABcAFwAKwBcACsAXAArACsAXABcACsAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgArACoAKgBcACsAKwBcAFwAXABcAFwAKwBcACsAKgAqACoAKgAqACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAFwAXABcAFwAUAAOAA4ADgAOAB4ADgAOAAkADgAOAA0ACQATABMAEwATABMACQAeABMAHgAeAB4ABAAEAB4AHgAeAB4AHgAeAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUAANAAQAHgAEAB4ABAAWABEAFgARAAQABABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAAQABAAEAAQABAANAAQABABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsADQANAB4AHgAeAB4AHgAeAAQAHgAeAB4AHgAeAB4AKwAeAB4ADgAOAA0ADgAeAB4AHgAeAB4ACQAJACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgAeAB4AHgBcAFwAXABcAFwAXAAqACoAKgAqAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAKgAqACoAKgAqACoAKgBcAFwAXAAqACoAKgAqAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAXAAqAEsASwBLAEsASwBLAEsASwBLAEsAKgAqACoAKgAqACoAUABQAFAAUABQAFAAKwBQACsAKwArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQACsAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwAEAAQABAAeAA0AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAEQArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAADQANAA0AUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAA0ADQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoADQANABUAXAANAB4ADQAbAFwAKgArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAB4AHgATABMADQANAA4AHgATABMAHgAEAAQABAAJACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAUABQAFAAUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwAeACsAKwArABMAEwBLAEsASwBLAEsASwBLAEsASwBLAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwBcAFwAXABcAFwAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcACsAKwArACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwAeAB4AXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgArACsABABLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKgAqACoAKgAqACoAKgBcACoAKgAqACoAKgAqACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAUABQAFAAUABQAFAAUAArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4ADQANAA0ADQAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAHgAeAB4AHgBQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwANAA0ADQANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwBQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsABAAEAAQAHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAABABQAFAAUABQAAQABAAEAFAAUAAEAAQABAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAKwBQACsAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAKwArAB4AHgAeAB4AHgAeACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAUABQAFAAKwAeAB4AHgAeAB4AHgAeAA4AHgArAA0ADQANAA0ADQANAA0ACQANAA0ADQAIAAQACwAEAAQADQAJAA0ADQAMAB0AHQAeABcAFwAWABcAFwAXABYAFwAdAB0AHgAeABQAFAAUAA0AAQABAAQABAAEAAQABAAJABoAGgAaABoAGgAaABoAGgAeABcAFwAdABUAFQAeAB4AHgAeAB4AHgAYABYAEQAVABUAFQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgANAB4ADQANAA0ADQAeAA0ADQANAAcAHgAeAB4AHgArAAQABAAEAAQABAAEAAQABAAEAAQAUABQACsAKwBPAFAAUABQAFAAUAAeAB4AHgAWABEATwBQAE8ATwBPAE8AUABQAFAAUABQAB4AHgAeABYAEQArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAGwAbABsAGwAbABsAGwAaABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAaABsAGwAbABsAGgAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgBQABoAHgAdAB4AUAAeABoAHgAeAB4AHgAeAB4AHgAeAB4ATwAeAFAAGwAeAB4AUABQAFAAUABQAB4AHgAeAB0AHQAeAFAAHgBQAB4AUAAeAFAATwBQAFAAHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AUABQAFAAUABPAE8AUABQAFAAUABQAE8AUABQAE8AUABPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAE8ATwBPAE8ATwBPAE8ATwBPAE8AUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAATwAeAB4AKwArACsAKwAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB0AHQAeAB4AHgAdAB0AHgAeAB0AHgAeAB4AHQAeAB0AGwAbAB4AHQAeAB4AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB0AHgAdAB4AHQAdAB0AHQAdAB0AHgAdAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAdAB0AHQAdAB4AHgAdAB0AHgAeAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABQAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAlACUAHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBQAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAeAB4AHgAeAB0AHQAeAB4AHgAeAB0AHQAdAB4AHgAdAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB0AHQAeAB4AHQAeAB4AHgAeAB0AHQAeAB4AHgAeACUAJQAdAB0AJQAeACUAJQAlACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAHgAeAB4AHgAdAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHQAdAB0AHgAdACUAHQAdAB4AHQAdAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHQAdAB0AHQAlAB4AJQAlACUAHQAlACUAHQAdAB0AJQAlAB0AHQAlAB0AHQAlACUAJQAeAB0AHgAeAB4AHgAdAB0AJQAdAB0AHQAdAB0AHQAlACUAJQAlACUAHQAlACUAIAAlAB0AHQAlACUAJQAlACUAJQAlACUAHgAeAB4AJQAlACAAIAAgACAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeABcAFwAXABcAFwAXAB4AEwATACUAHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwArACUAJQBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAKwArACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAE8ATwBPAE8ATwBPAE8ATwAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeACsAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUAArACsAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQBQAFAAUABQACsAKwArACsAUABQAFAAUABQAFAAUABQAA0AUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQACsAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgBQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAABAAEAAQAKwAEAAQAKwArACsAKwArAAQABAAEAAQAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsABAAEAAQAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsADQANAA0ADQANAA0ADQANAB4AKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AUABQAFAAUABQAFAAUABQAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAUABQAFAAUABQAA0ADQANAA0ADQANABQAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwANAA0ADQANAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAeAAQABAAEAB4AKwArAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLACsADQArAB4AKwArAAQABAAEAAQAUABQAB4AUAArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwAEAAQABAAEAAQABAAEAAQABAAOAA0ADQATABMAHgAeAB4ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0AUABQAFAAUAAEAAQAKwArAAQADQANAB4AUAArACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXABcAA0ADQANACoASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUAArACsAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANACsADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEcARwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQACsAKwAeAAQABAANAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAEAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUAArACsAUAArACsAUABQACsAKwBQAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AKwArAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAeAB4ADQANAA0ADQAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAArAAQABAArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAEAAQABAAEAAQABAAEACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAFgAWAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAKwBQACsAKwArACsAKwArAFAAKwArACsAKwBQACsAUAArAFAAKwBQAFAAUAArAFAAUAArAFAAKwArAFAAKwBQACsAUAArAFAAKwBQACsAUABQACsAUAArACsAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAUABQAFAAUAArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUAArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAlACUAJQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeACUAJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeACUAJQAlACUAJQAeACUAJQAlACUAJQAgACAAIAAlACUAIAAlACUAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIQAhACEAIQAhACUAJQAgACAAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAgACAAIAAlACUAJQAlACAAJQAgACAAIAAgACAAIAAgACAAIAAlACUAJQAgACUAJQAlACUAIAAgACAAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeACUAHgAlAB4AJQAlACUAJQAlACAAJQAlACUAJQAeACUAHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAgACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAlACUAJQAlACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAIAAgACAAJQAlACUAIAAgACAAIAAgAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFwAXABcAFQAVABUAHgAeAB4AHgAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAgACAAJQAlACUAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAlACAAIAAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsA"),U=Array.isArray(i)?function(A){for(var e=A.length,t=[],r=0;r<e;r+=4)t.push(A[r+3]<<24|A[r+2]<<16|A[r+1]<<8|A[r]);return t}(i):new Uint32Array(i),E=Array.isArray(i)?function(A){for(var e=A.length,t=[],r=0;r<e;r+=2)t.push(A[r+1]<<8|A[r]);return t}(i):new Uint16Array(i),F=B(E,12,U[4]/2),h=2===U[5]?B(E,(24+U[4])/2):function(A,e,t){return A.slice?A.slice(e,t):new Uint32Array(Array.prototype.slice.call(A,e,t))}(U,Math.ceil((24+U[4])/4)),new s(U[0],U[1],U[2],U[3],F,h)),Z=[_,36],j=[1,2,3,5],$=[H,8],AA=[M,b],eA=j.concat($),tA=[J,G,k,V,z],rA=[f,d],nA=(BA.prototype.slice=function(){return l.apply(void 0,this.codePoints.slice(this.start,this.end))},BA);function BA(A,e,t,r){this.codePoints=A,this.required="!"===e,this.start=t,this.end=r}var sA,oA;(oA=sA||(sA={}))[oA.STRING_TOKEN=0]="STRING_TOKEN",oA[oA.BAD_STRING_TOKEN=1]="BAD_STRING_TOKEN",oA[oA.LEFT_PARENTHESIS_TOKEN=2]="LEFT_PARENTHESIS_TOKEN",oA[oA.RIGHT_PARENTHESIS_TOKEN=3]="RIGHT_PARENTHESIS_TOKEN",oA[oA.COMMA_TOKEN=4]="COMMA_TOKEN",oA[oA.HASH_TOKEN=5]="HASH_TOKEN",oA[oA.DELIM_TOKEN=6]="DELIM_TOKEN",oA[oA.AT_KEYWORD_TOKEN=7]="AT_KEYWORD_TOKEN",oA[oA.PREFIX_MATCH_TOKEN=8]="PREFIX_MATCH_TOKEN",oA[oA.DASH_MATCH_TOKEN=9]="DASH_MATCH_TOKEN",oA[oA.INCLUDE_MATCH_TOKEN=10]="INCLUDE_MATCH_TOKEN",oA[oA.LEFT_CURLY_BRACKET_TOKEN=11]="LEFT_CURLY_BRACKET_TOKEN",oA[oA.RIGHT_CURLY_BRACKET_TOKEN=12]="RIGHT_CURLY_BRACKET_TOKEN",oA[oA.SUFFIX_MATCH_TOKEN=13]="SUFFIX_MATCH_TOKEN",oA[oA.SUBSTRING_MATCH_TOKEN=14]="SUBSTRING_MATCH_TOKEN",oA[oA.DIMENSION_TOKEN=15]="DIMENSION_TOKEN",oA[oA.PERCENTAGE_TOKEN=16]="PERCENTAGE_TOKEN",oA[oA.NUMBER_TOKEN=17]="NUMBER_TOKEN",oA[oA.FUNCTION=18]="FUNCTION",oA[oA.FUNCTION_TOKEN=19]="FUNCTION_TOKEN",oA[oA.IDENT_TOKEN=20]="IDENT_TOKEN",oA[oA.COLUMN_TOKEN=21]="COLUMN_TOKEN",oA[oA.URL_TOKEN=22]="URL_TOKEN",oA[oA.BAD_URL_TOKEN=23]="BAD_URL_TOKEN",oA[oA.CDC_TOKEN=24]="CDC_TOKEN",oA[oA.CDO_TOKEN=25]="CDO_TOKEN",oA[oA.COLON_TOKEN=26]="COLON_TOKEN",oA[oA.SEMICOLON_TOKEN=27]="SEMICOLON_TOKEN",oA[oA.LEFT_SQUARE_BRACKET_TOKEN=28]="LEFT_SQUARE_BRACKET_TOKEN",oA[oA.RIGHT_SQUARE_BRACKET_TOKEN=29]="RIGHT_SQUARE_BRACKET_TOKEN",oA[oA.UNICODE_RANGE_TOKEN=30]="UNICODE_RANGE_TOKEN",oA[oA.WHITESPACE_TOKEN=31]="WHITESPACE_TOKEN",oA[oA.EOF_TOKEN=32]="EOF_TOKEN";function iA(A){return 48<=A&&A<=57}function aA(A){return iA(A)||65<=A&&A<=70||97<=A&&A<=102}function cA(A){return 10===A||9===A||32===A}function QA(A){return function(A){return function(A){return 97<=A&&A<=122}(A)||function(A){return 65<=A&&A<=90}(A)}(A)||function(A){return 128<=A}(A)||95===A}function wA(A){return QA(A)||iA(A)||45===A}function uA(A,e){return 92===A&&10!==e}function UA(A,e,t){return 45===A?QA(e)||uA(e,t):!!QA(A)||!(92!==A||!uA(A,e))}function lA(A,e,t){return 43===A||45===A?!!iA(e)||46===e&&iA(t):iA(46===A?e:A)}var CA={type:sA.LEFT_PARENTHESIS_TOKEN},gA={type:sA.RIGHT_PARENTHESIS_TOKEN},EA={type:sA.COMMA_TOKEN},FA={type:sA.SUFFIX_MATCH_TOKEN},hA={type:sA.PREFIX_MATCH_TOKEN},HA={type:sA.COLUMN_TOKEN},dA={type:sA.DASH_MATCH_TOKEN},fA={type:sA.INCLUDE_MATCH_TOKEN},pA={type:sA.LEFT_CURLY_BRACKET_TOKEN},NA={type:sA.RIGHT_CURLY_BRACKET_TOKEN},KA={type:sA.SUBSTRING_MATCH_TOKEN},IA={type:sA.BAD_URL_TOKEN},TA={type:sA.BAD_STRING_TOKEN},mA={type:sA.CDO_TOKEN},RA={type:sA.CDC_TOKEN},LA={type:sA.COLON_TOKEN},vA={type:sA.SEMICOLON_TOKEN},OA={type:sA.LEFT_SQUARE_BRACKET_TOKEN},DA={type:sA.RIGHT_SQUARE_BRACKET_TOKEN},bA={type:sA.WHITESPACE_TOKEN},SA={type:sA.EOF_TOKEN},MA=(yA.prototype.write=function(A){this._value=this._value.concat(c(A))},yA.prototype.read=function(){for(var A=[],e=this.consumeToken();e!==SA;)A.push(e),e=this.consumeToken();return A},yA.prototype.consumeToken=function(){var A=this.consumeCodePoint();switch(A){case 34:return this.consumeStringToken(34);case 35:var e=this.peekCodePoint(0),t=this.peekCodePoint(1),r=this.peekCodePoint(2);if(wA(e)||uA(t,r)){var n=UA(e,t,r)?2:1,B=this.consumeName();return{type:sA.HASH_TOKEN,value:B,flags:n}}break;case 36:if(61===this.peekCodePoint(0))return this.consumeCodePoint(),FA;break;case 39:return this.consumeStringToken(39);case 40:return CA;case 41:return gA;case 42:if(61===this.peekCodePoint(0))return this.consumeCodePoint(),KA;break;case 43:if(lA(A,this.peekCodePoint(0),this.peekCodePoint(1)))return this.reconsumeCodePoint(A),this.consumeNumericToken();break;case 44:return EA;case 45:var s=A,o=this.peekCodePoint(0),i=this.peekCodePoint(1);if(lA(s,o,i))return this.reconsumeCodePoint(A),this.consumeNumericToken();if(UA(s,o,i))return this.reconsumeCodePoint(A),this.consumeIdentLikeToken();if(45===o&&62===i)return this.consumeCodePoint(),this.consumeCodePoint(),RA;break;case 46:if(lA(A,this.peekCodePoint(0),this.peekCodePoint(1)))return this.reconsumeCodePoint(A),this.consumeNumericToken();break;case 47:if(42===this.peekCodePoint(0))for(this.consumeCodePoint();;){var a=this.consumeCodePoint();if(42===a&&47===(a=this.consumeCodePoint()))return this.consumeToken();if(-1===a)return this.consumeToken()}break;case 58:return LA;case 59:return vA;case 60:if(33===this.peekCodePoint(0)&&45===this.peekCodePoint(1)&&45===this.peekCodePoint(2))return this.consumeCodePoint(),this.consumeCodePoint(),mA;break;case 64:var c=this.peekCodePoint(0),Q=this.peekCodePoint(1),w=this.peekCodePoint(2);if(UA(c,Q,w))return B=this.consumeName(),{type:sA.AT_KEYWORD_TOKEN,value:B};break;case 91:return OA;case 92:if(uA(A,this.peekCodePoint(0)))return this.reconsumeCodePoint(A),this.consumeIdentLikeToken();break;case 93:return DA;case 61:if(61===this.peekCodePoint(0))return this.consumeCodePoint(),hA;break;case 123:return pA;case 125:return NA;case 117:case 85:var u=this.peekCodePoint(0),U=this.peekCodePoint(1);return 43!==u||!aA(U)&&63!==U||(this.consumeCodePoint(),this.consumeUnicodeRangeToken()),this.reconsumeCodePoint(A),this.consumeIdentLikeToken();case 124:if(61===this.peekCodePoint(0))return this.consumeCodePoint(),dA;if(124===this.peekCodePoint(0))return this.consumeCodePoint(),HA;break;case 126:if(61===this.peekCodePoint(0))return this.consumeCodePoint(),fA;break;case-1:return SA}return cA(A)?(this.consumeWhiteSpace(),bA):iA(A)?(this.reconsumeCodePoint(A),this.consumeNumericToken()):QA(A)?(this.reconsumeCodePoint(A),this.consumeIdentLikeToken()):{type:sA.DELIM_TOKEN,value:l(A)}},yA.prototype.consumeCodePoint=function(){var A=this._value.shift();return void 0===A?-1:A},yA.prototype.reconsumeCodePoint=function(A){this._value.unshift(A)},yA.prototype.peekCodePoint=function(A){return A>=this._value.length?-1:this._value[A]},yA.prototype.consumeUnicodeRangeToken=function(){for(var A=[],e=this.consumeCodePoint();aA(e)&&A.length<6;)A.push(e),e=this.consumeCodePoint();for(var t=!1;63===e&&A.length<6;)A.push(e),e=this.consumeCodePoint(),t=!0;if(t){var r=parseInt(l.apply(void 0,A.map(function(A){return 63===A?48:A})),16),n=parseInt(l.apply(void 0,A.map(function(A){return 63===A?70:A})),16);return{type:sA.UNICODE_RANGE_TOKEN,start:r,end:n}}var B=parseInt(l.apply(void 0,A),16);if(45===this.peekCodePoint(0)&&aA(this.peekCodePoint(1))){this.consumeCodePoint(),e=this.consumeCodePoint();for(var s=[];aA(e)&&s.length<6;)s.push(e),e=this.consumeCodePoint();return n=parseInt(l.apply(void 0,s),16),{type:sA.UNICODE_RANGE_TOKEN,start:B,end:n}}return{type:sA.UNICODE_RANGE_TOKEN,start:B,end:B}},yA.prototype.consumeIdentLikeToken=function(){var A=this.consumeName();return"url"===A.toLowerCase()&&40===this.peekCodePoint(0)?(this.consumeCodePoint(),this.consumeUrlToken()):40===this.peekCodePoint(0)?(this.consumeCodePoint(),{type:sA.FUNCTION_TOKEN,value:A}):{type:sA.IDENT_TOKEN,value:A}},yA.prototype.consumeUrlToken=function(){var A=[];if(this.consumeWhiteSpace(),-1===this.peekCodePoint(0))return{type:sA.URL_TOKEN,value:""};var e,t=this.peekCodePoint(0);if(39===t||34===t){var r=this.consumeStringToken(this.consumeCodePoint());return r.type===sA.STRING_TOKEN&&(this.consumeWhiteSpace(),-1===this.peekCodePoint(0)||41===this.peekCodePoint(0))?(this.consumeCodePoint(),{type:sA.URL_TOKEN,value:r.value}):(this.consumeBadUrlRemnants(),IA)}for(;;){var n=this.consumeCodePoint();if(-1===n||41===n)return{type:sA.URL_TOKEN,value:l.apply(void 0,A)};if(cA(n))return this.consumeWhiteSpace(),-1===this.peekCodePoint(0)||41===this.peekCodePoint(0)?(this.consumeCodePoint(),{type:sA.URL_TOKEN,value:l.apply(void 0,A)}):(this.consumeBadUrlRemnants(),IA);if(34===n||39===n||40===n||0<=(e=n)&&e<=8||11===e||14<=e&&e<=31||127===e)return this.consumeBadUrlRemnants(),IA;if(92===n){if(!uA(n,this.peekCodePoint(0)))return this.consumeBadUrlRemnants(),IA;A.push(this.consumeEscapedCodePoint())}else A.push(n)}},yA.prototype.consumeWhiteSpace=function(){for(;cA(this.peekCodePoint(0));)this.consumeCodePoint()},yA.prototype.consumeBadUrlRemnants=function(){for(;;){var A=this.consumeCodePoint();if(41===A||-1===A)return;uA(A,this.peekCodePoint(0))&&this.consumeEscapedCodePoint()}},yA.prototype.consumeStringSlice=function(A){for(var e="";0<A;){var t=Math.min(6e4,A);e+=l.apply(void 0,this._value.splice(0,t)),A-=t}return this._value.shift(),e},yA.prototype.consumeStringToken=function(A){for(var e="",t=0;;){var r=this._value[t];if(-1===r||void 0===r||r===A)return e+=this.consumeStringSlice(t),{type:sA.STRING_TOKEN,value:e};if(10===r)return this._value.splice(0,t),TA;if(92===r){var n=this._value[t+1];-1!==n&&void 0!==n&&(10===n?(e+=this.consumeStringSlice(t),t=-1,this._value.shift()):uA(r,n)&&(e+=this.consumeStringSlice(t),e+=l(this.consumeEscapedCodePoint()),t=-1))}t++}},yA.prototype.consumeNumber=function(){var A=[],e=4,t=this.peekCodePoint(0);for(43!==t&&45!==t||A.push(this.consumeCodePoint());iA(this.peekCodePoint(0));)A.push(this.consumeCodePoint());t=this.peekCodePoint(0);var r=this.peekCodePoint(1);if(46===t&&iA(r))for(A.push(this.consumeCodePoint(),this.consumeCodePoint()),e=8;iA(this.peekCodePoint(0));)A.push(this.consumeCodePoint());t=this.peekCodePoint(0),r=this.peekCodePoint(1);var n=this.peekCodePoint(2);if((69===t||101===t)&&((43===r||45===r)&&iA(n)||iA(r)))for(A.push(this.consumeCodePoint(),this.consumeCodePoint()),e=8;iA(this.peekCodePoint(0));)A.push(this.consumeCodePoint());return[function(A){var e=0,t=1;43!==A[e]&&45!==A[e]||(45===A[e]&&(t=-1),e++);for(var r=[];iA(A[e]);)r.push(A[e++]);var n=r.length?parseInt(l.apply(void 0,r),10):0;46===A[e]&&e++;for(var B=[];iA(A[e]);)B.push(A[e++]);var s=B.length,o=s?parseInt(l.apply(void 0,B),10):0;69!==A[e]&&101!==A[e]||e++;var i=1;43!==A[e]&&45!==A[e]||(45===A[e]&&(i=-1),e++);for(var a=[];iA(A[e]);)a.push(A[e++]);var c=a.length?parseInt(l.apply(void 0,a),10):0;return t*(n+o*Math.pow(10,-s))*Math.pow(10,i*c)}(A),e]},yA.prototype.consumeNumericToken=function(){var A=this.consumeNumber(),e=A[0],t=A[1],r=this.peekCodePoint(0),n=this.peekCodePoint(1),B=this.peekCodePoint(2);if(UA(r,n,B)){var s=this.consumeName();return{type:sA.DIMENSION_TOKEN,number:e,flags:t,unit:s}}return 37===r?(this.consumeCodePoint(),{type:sA.PERCENTAGE_TOKEN,number:e,flags:t}):{type:sA.NUMBER_TOKEN,number:e,flags:t}},yA.prototype.consumeEscapedCodePoint=function(){var A=this.consumeCodePoint();if(aA(A)){for(var e=l(A);aA(this.peekCodePoint(0))&&e.length<6;)e+=l(this.consumeCodePoint());cA(this.peekCodePoint(0))&&this.consumeCodePoint();var t=parseInt(e,16);return 0===t||function(A){return 55296<=A&&A<=57343}(t)||1114111<t?65533:t}return-1===A?65533:A},yA.prototype.consumeName=function(){for(var A="";;){var e=this.consumeCodePoint();if(wA(e))A+=l(e);else{if(!uA(e,this.peekCodePoint(0)))return this.reconsumeCodePoint(e),A;A+=l(this.consumeEscapedCodePoint())}}},yA);function yA(){this._value=[]}var _A=(PA.create=function(A){var e=new MA;return e.write(A),new PA(e.read())},PA.parseValue=function(A){return PA.create(A).parseComponentValue()},PA.parseValues=function(A){return PA.create(A).parseComponentValues()},PA.prototype.parseComponentValue=function(){for(var A=this.consumeToken();A.type===sA.WHITESPACE_TOKEN;)A=this.consumeToken();if(A.type===sA.EOF_TOKEN)throw new SyntaxError("Error parsing CSS component value, unexpected EOF");this.reconsumeToken(A);for(var e=this.consumeComponentValue();(A=this.consumeToken()).type===sA.WHITESPACE_TOKEN;);if(A.type===sA.EOF_TOKEN)return e;throw new SyntaxError("Error parsing CSS component value, multiple values found when expecting only one")},PA.prototype.parseComponentValues=function(){for(var A=[];;){var e=this.consumeComponentValue();if(e.type===sA.EOF_TOKEN)return A;A.push(e),A.push()}},PA.prototype.consumeComponentValue=function(){var A=this.consumeToken();switch(A.type){case sA.LEFT_CURLY_BRACKET_TOKEN:case sA.LEFT_SQUARE_BRACKET_TOKEN:case sA.LEFT_PARENTHESIS_TOKEN:return this.consumeSimpleBlock(A.type);case sA.FUNCTION_TOKEN:return this.consumeFunction(A)}return A},PA.prototype.consumeSimpleBlock=function(A){for(var e={type:A,values:[]},t=this.consumeToken();;){if(t.type===sA.EOF_TOKEN||Be(t,A))return e;this.reconsumeToken(t),e.values.push(this.consumeComponentValue()),t=this.consumeToken()}},PA.prototype.consumeFunction=function(A){for(var e={name:A.value,values:[],type:sA.FUNCTION};;){var t=this.consumeToken();if(t.type===sA.EOF_TOKEN||t.type===sA.RIGHT_PARENTHESIS_TOKEN)return e;this.reconsumeToken(t),e.values.push(this.consumeComponentValue())}},PA.prototype.consumeToken=function(){var A=this._tokens.shift();return void 0===A?SA:A},PA.prototype.reconsumeToken=function(A){this._tokens.unshift(A)},PA);function PA(A){this._tokens=A}function xA(A){return A.type===sA.DIMENSION_TOKEN}function VA(A){return A.type===sA.NUMBER_TOKEN}function zA(A){return A.type===sA.IDENT_TOKEN}function XA(A){return A.type===sA.STRING_TOKEN}function JA(A,e){return zA(A)&&A.value===e}function GA(A){return A.type!==sA.WHITESPACE_TOKEN}function kA(A){return A.type!==sA.WHITESPACE_TOKEN&&A.type!==sA.COMMA_TOKEN}function WA(A){var e=[],t=[];return A.forEach(function(A){if(A.type===sA.COMMA_TOKEN){if(0===t.length)throw new Error("Error parsing function args, zero tokens for arg");return e.push(t),void(t=[])}A.type!==sA.WHITESPACE_TOKEN&&t.push(A)}),t.length&&e.push(t),e}function YA(A){return A.type===sA.NUMBER_TOKEN||A.type===sA.DIMENSION_TOKEN}function qA(A){return A.type===sA.PERCENTAGE_TOKEN||YA(A)}function ZA(A){return 1<A.length?[A[0],A[1]]:[A[0]]}function jA(A,e,t){var r=A[0],n=A[1];return[ae(r,e),ae(void 0!==n?n:r,t)]}function $A(A){return A.type===sA.DIMENSION_TOKEN&&("deg"===A.unit||"grad"===A.unit||"rad"===A.unit||"turn"===A.unit)}function Ae(A){switch(A.filter(zA).map(function(A){return A.value}).join(" ")){case"to bottom right":case"to right bottom":case"left top":case"top left":return[se,se];case"to top":case"bottom":return Qe(0);case"to bottom left":case"to left bottom":case"right top":case"top right":return[se,ie];case"to right":case"left":return Qe(90);case"to top left":case"to left top":case"right bottom":case"bottom right":return[ie,ie];case"to bottom":case"top":return Qe(180);case"to top right":case"to right top":case"left bottom":case"bottom left":return[ie,se];case"to left":case"right":return Qe(270)}return 0}function ee(A){return 0==(255&A)}function te(A){var e=255&A,t=255&A>>8,r=255&A>>16,n=255&A>>24;return e<255?"rgba("+n+","+r+","+t+","+e/255+")":"rgb("+n+","+r+","+t+")"}function re(A,e){if(A.type===sA.NUMBER_TOKEN)return A.number;if(A.type!==sA.PERCENTAGE_TOKEN)return 0;var t=3===e?1:255;return 3===e?A.number/100*t:Math.round(A.number/100*t)}function ne(A){var e=A.filter(kA);if(3===e.length){var t=e.map(re),r=t[0],n=t[1],B=t[2];return ue(r,n,B,1)}if(4!==e.length)return 0;var s=e.map(re),o=(r=s[0],n=s[1],B=s[2],s[3]);return ue(r,n,B,o)}var Be=function(A,e){return e===sA.LEFT_CURLY_BRACKET_TOKEN&&A.type===sA.RIGHT_CURLY_BRACKET_TOKEN||(e===sA.LEFT_SQUARE_BRACKET_TOKEN&&A.type===sA.RIGHT_SQUARE_BRACKET_TOKEN||e===sA.LEFT_PARENTHESIS_TOKEN&&A.type===sA.RIGHT_PARENTHESIS_TOKEN)},se={type:sA.NUMBER_TOKEN,number:0,flags:4},oe={type:sA.PERCENTAGE_TOKEN,number:50,flags:4},ie={type:sA.PERCENTAGE_TOKEN,number:100,flags:4},ae=function(A,e){if(A.type===sA.PERCENTAGE_TOKEN)return A.number/100*e;if(xA(A))switch(A.unit){case"rem":case"em":return 16*A.number;case"px":default:return A.number}return A.number},ce=function(A){if(A.type===sA.DIMENSION_TOKEN)switch(A.unit){case"deg":return Math.PI*A.number/180;case"grad":return Math.PI/200*A.number;case"rad":return A.number;case"turn":return 2*Math.PI*A.number}throw new Error("Unsupported angle type")},Qe=function(A){return Math.PI*A/180},we=function(A){if(A.type===sA.FUNCTION){var e=he[A.name];if(void 0===e)throw new Error('Attempting to parse an unsupported color function "'+A.name+'"');return e(A.values)}if(A.type===sA.HASH_TOKEN){if(3===A.value.length){var t=A.value.substring(0,1),r=A.value.substring(1,2),n=A.value.substring(2,3);return ue(parseInt(t+t,16),parseInt(r+r,16),parseInt(n+n,16),1)}if(4===A.value.length){t=A.value.substring(0,1),r=A.value.substring(1,2),n=A.value.substring(2,3);var B=A.value.substring(3,4);return ue(parseInt(t+t,16),parseInt(r+r,16),parseInt(n+n,16),parseInt(B+B,16)/255)}if(6===A.value.length){t=A.value.substring(0,2),r=A.value.substring(2,4),n=A.value.substring(4,6);return ue(parseInt(t,16),parseInt(r,16),parseInt(n,16),1)}if(8===A.value.length){t=A.value.substring(0,2),r=A.value.substring(2,4),n=A.value.substring(4,6),B=A.value.substring(6,8);return ue(parseInt(t,16),parseInt(r,16),parseInt(n,16),parseInt(B,16)/255)}}if(A.type===sA.IDENT_TOKEN){var s=He[A.value.toUpperCase()];if(void 0!==s)return s}return He.TRANSPARENT},ue=function(A,e,t,r){return(A<<24|e<<16|t<<8|Math.round(255*r)<<0)>>>0};function Ue(A,e,t){return t<0&&(t+=1),1<=t&&(t-=1),t<1/6?(e-A)*t*6+A:t<.5?e:t<2/3?6*(e-A)*(2/3-t)+A:A}function le(A){var e=A.filter(kA),t=e[0],r=e[1],n=e[2],B=e[3],s=(t.type===sA.NUMBER_TOKEN?Qe(t.number):ce(t))/(2*Math.PI),o=qA(r)?r.number/100:0,i=qA(n)?n.number/100:0,a=void 0!==B&&qA(B)?ae(B,1):1;if(0==o)return ue(255*i,255*i,255*i,1);var c=i<=.5?i*(1+o):i+o-i*o,Q=2*i-c,w=Ue(Q,c,s+1/3),u=Ue(Q,c,s),U=Ue(Q,c,s-1/3);return ue(255*w,255*u,255*U,a)}var Ce,ge,Ee,Fe,he={hsl:le,hsla:le,rgb:ne,rgba:ne},He={ALICEBLUE:4042850303,ANTIQUEWHITE:4209760255,AQUA:16777215,AQUAMARINE:2147472639,AZURE:4043309055,BEIGE:4126530815,BISQUE:4293182719,BLACK:255,BLANCHEDALMOND:4293643775,BLUE:65535,BLUEVIOLET:2318131967,BROWN:2771004159,BURLYWOOD:3736635391,CADETBLUE:1604231423,CHARTREUSE:2147418367,CHOCOLATE:3530104575,CORAL:4286533887,CORNFLOWERBLUE:1687547391,CORNSILK:4294499583,CRIMSON:3692313855,CYAN:16777215,DARKBLUE:35839,DARKCYAN:9145343,DARKGOLDENROD:3095837695,DARKGRAY:2846468607,DARKGREEN:6553855,DARKGREY:2846468607,DARKKHAKI:3182914559,DARKMAGENTA:2332068863,DARKOLIVEGREEN:1433087999,DARKORANGE:4287365375,DARKORCHID:2570243327,DARKRED:2332033279,DARKSALMON:3918953215,DARKSEAGREEN:2411499519,DARKSLATEBLUE:1211993087,DARKSLATEGRAY:793726975,DARKSLATEGREY:793726975,DARKTURQUOISE:13554175,DARKVIOLET:2483082239,DEEPPINK:4279538687,DEEPSKYBLUE:12582911,DIMGRAY:1768516095,DIMGREY:1768516095,DODGERBLUE:512819199,FIREBRICK:2988581631,FLORALWHITE:4294635775,FORESTGREEN:579543807,FUCHSIA:4278255615,GAINSBORO:3705462015,GHOSTWHITE:4177068031,GOLD:4292280575,GOLDENROD:3668254975,GRAY:2155905279,GREEN:8388863,GREENYELLOW:2919182335,GREY:2155905279,HONEYDEW:4043305215,HOTPINK:4285117695,INDIANRED:3445382399,INDIGO:1258324735,IVORY:4294963455,KHAKI:4041641215,LAVENDER:3873897215,LAVENDERBLUSH:4293981695,LAWNGREEN:2096890111,LEMONCHIFFON:4294626815,LIGHTBLUE:2916673279,LIGHTCORAL:4034953471,LIGHTCYAN:3774873599,LIGHTGOLDENRODYELLOW:4210742015,LIGHTGRAY:3553874943,LIGHTGREEN:2431553791,LIGHTGREY:3553874943,LIGHTPINK:4290167295,LIGHTSALMON:4288707327,LIGHTSEAGREEN:548580095,LIGHTSKYBLUE:2278488831,LIGHTSLATEGRAY:2005441023,LIGHTSLATEGREY:2005441023,LIGHTSTEELBLUE:2965692159,LIGHTYELLOW:4294959359,LIME:16711935,LIMEGREEN:852308735,LINEN:4210091775,MAGENTA:4278255615,MAROON:2147483903,MEDIUMAQUAMARINE:1724754687,MEDIUMBLUE:52735,MEDIUMORCHID:3126187007,MEDIUMPURPLE:2473647103,MEDIUMSEAGREEN:1018393087,MEDIUMSLATEBLUE:2070474495,MEDIUMSPRINGGREEN:16423679,MEDIUMTURQUOISE:1221709055,MEDIUMVIOLETRED:3340076543,MIDNIGHTBLUE:421097727,MINTCREAM:4127193855,MISTYROSE:4293190143,MOCCASIN:4293178879,NAVAJOWHITE:4292783615,NAVY:33023,OLDLACE:4260751103,OLIVE:2155872511,OLIVEDRAB:1804477439,ORANGE:4289003775,ORANGERED:4282712319,ORCHID:3664828159,PALEGOLDENROD:4008225535,PALEGREEN:2566625535,PALETURQUOISE:2951671551,PALEVIOLETRED:3681588223,PAPAYAWHIP:4293907967,PEACHPUFF:4292524543,PERU:3448061951,PINK:4290825215,PLUM:3718307327,POWDERBLUE:2967529215,PURPLE:2147516671,REBECCAPURPLE:1714657791,RED:4278190335,ROSYBROWN:3163525119,ROYALBLUE:1097458175,SADDLEBROWN:2336560127,SALMON:4202722047,SANDYBROWN:4104413439,SEAGREEN:780883967,SEASHELL:4294307583,SIENNA:2689740287,SILVER:3233857791,SKYBLUE:2278484991,SLATEBLUE:1784335871,SLATEGRAY:1887473919,SLATEGREY:1887473919,SNOW:4294638335,SPRINGGREEN:16744447,STEELBLUE:1182971135,TAN:3535047935,TEAL:8421631,THISTLE:3636451583,TOMATO:4284696575,TRANSPARENT:0,TURQUOISE:1088475391,VIOLET:4001558271,WHEAT:4125012991,WHITE:4294967295,WHITESMOKE:4126537215,YELLOW:4294902015,YELLOWGREEN:2597139199};(ge=Ce||(Ce={}))[ge.VALUE=0]="VALUE",ge[ge.LIST=1]="LIST",ge[ge.IDENT_VALUE=2]="IDENT_VALUE",ge[ge.TYPE_VALUE=3]="TYPE_VALUE",ge[ge.TOKEN_VALUE=4]="TOKEN_VALUE",(Fe=Ee||(Ee={}))[Fe.BORDER_BOX=0]="BORDER_BOX",Fe[Fe.PADDING_BOX=1]="PADDING_BOX";function de(A){var e=we(A[0]),t=A[1];return t&&qA(t)?{color:e,stop:t}:{color:e,stop:null}}function fe(A,t){var e=A[0],r=A[A.length-1];null===e.stop&&(e.stop=se),null===r.stop&&(r.stop=ie);for(var n=[],B=0,s=0;s<A.length;s++){var o=A[s].stop;if(null!==o){var i=ae(o,t);B<i?n.push(i):n.push(B),B=i}else n.push(null)}var a=null;for(s=0;s<n.length;s++){var c=n[s];if(null===c)null===a&&(a=s);else if(null!==a){for(var Q=s-a,w=(c-n[a-1])/(1+Q),u=1;u<=Q;u++)n[a+u-1]=w*u;a=null}}return A.map(function(A,e){return{color:A.color,stop:Math.max(Math.min(1,n[e]/t),0)}})}function pe(A,e,t){var r="number"==typeof A?A:function(A,e,t){var r=e/2,n=t/2,B=ae(A[0],e)-r,s=n-ae(A[1],t);return(Math.atan2(s,B)+2*Math.PI)%(2*Math.PI)}(A,e,t),n=Math.abs(e*Math.sin(r))+Math.abs(t*Math.cos(r)),B=e/2,s=t/2,o=n/2,i=Math.sin(r-Math.PI/2)*o,a=Math.cos(r-Math.PI/2)*o;return[n,B-a,B+a,s-i,s+i]}function Ne(A,e){return Math.sqrt(A*A+e*e)}function Ke(A,e,B,s,o){return[[0,0],[0,e],[A,0],[A,e]].reduce(function(A,e){var t=e[0],r=e[1],n=Ne(B-t,s-r);return(o?n<A.optimumDistance:n>A.optimumDistance)?{optimumCorner:e,optimumDistance:n}:A},{optimumDistance:o?1/0:-1/0,optimumCorner:null}).optimumCorner}function Ie(A){var n=Qe(180),B=[];return WA(A).forEach(function(A,e){if(0===e){var t=A[0];if(t.type===sA.IDENT_TOKEN&&-1!==["top","left","right","bottom"].indexOf(t.value))return void(n=Ae(A));if($A(t))return void(n=(ce(t)+Qe(270))%Qe(360))}var r=de(A);B.push(r)}),{angle:n,stops:B,type:xe.LINEAR_GRADIENT}}function Te(A){return 0===A[0]&&255===A[1]&&0===A[2]&&255===A[3]}var me={name:"background-clip",initialValue:"border-box",prefix:!(Fe[Fe.CONTENT_BOX=2]="CONTENT_BOX"),type:Ce.LIST,parse:function(A){return A.map(function(A){if(zA(A))switch(A.value){case"padding-box":return Ee.PADDING_BOX;case"content-box":return Ee.CONTENT_BOX}return Ee.BORDER_BOX})}},Re={name:"background-color",initialValue:"transparent",prefix:!1,type:Ce.TYPE_VALUE,format:"color"},Le=function(A,e,t,r,n){var B="http://www.w3.org/2000/svg",s=document.createElementNS(B,"svg"),o=document.createElementNS(B,"foreignObject");return s.setAttributeNS(null,"width",A.toString()),s.setAttributeNS(null,"height",e.toString()),o.setAttributeNS(null,"width","100%"),o.setAttributeNS(null,"height","100%"),o.setAttributeNS(null,"x",t.toString()),o.setAttributeNS(null,"y",r.toString()),o.setAttributeNS(null,"externalResourcesRequired","true"),s.appendChild(o),o.appendChild(n),s},ve=function(r){return new Promise(function(A,e){var t=new Image;t.onload=function(){return A(t)},t.onerror=e,t.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent((new XMLSerializer).serializeToString(r))})},Oe={get SUPPORT_RANGE_BOUNDS(){var A=function(A){if(A.createRange){var e=A.createRange();if(e.getBoundingClientRect){var t=A.createElement("boundtest");t.style.height="123px",t.style.display="block",A.body.appendChild(t),e.selectNode(t);var r=e.getBoundingClientRect(),n=Math.round(r.height);if(A.body.removeChild(t),123===n)return!0}}return!1}(document);return Object.defineProperty(Oe,"SUPPORT_RANGE_BOUNDS",{value:A}),A},get SUPPORT_SVG_DRAWING(){var A=function(A){var e=new Image,t=A.createElement("canvas"),r=t.getContext("2d");if(!r)return!1;e.src="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";try{r.drawImage(e,0,0),t.toDataURL()}catch(A){return!1}return!0}(document);return Object.defineProperty(Oe,"SUPPORT_SVG_DRAWING",{value:A}),A},get SUPPORT_FOREIGNOBJECT_DRAWING(){var A="function"==typeof Array.from&&"function"==typeof window.fetch?function(r){var A=r.createElement("canvas"),n=100;A.width=n,A.height=n;var B=A.getContext("2d");if(!B)return Promise.reject(!1);B.fillStyle="rgb(0, 255, 0)",B.fillRect(0,0,n,n);var e=new Image,s=A.toDataURL();e.src=s;var t=Le(n,n,0,0,e);return B.fillStyle="red",B.fillRect(0,0,n,n),ve(t).then(function(A){B.drawImage(A,0,0);var e=B.getImageData(0,0,n,n).data;B.fillStyle="red",B.fillRect(0,0,n,n);var t=r.createElement("div");return t.style.backgroundImage="url("+s+")",t.style.height="100px",Te(e)?ve(Le(n,n,0,0,t)):Promise.reject(!1)}).then(function(A){return B.drawImage(A,0,0),Te(B.getImageData(0,0,n,n).data)}).catch(function(){return!1})}(document):Promise.resolve(!1);return Object.defineProperty(Oe,"SUPPORT_FOREIGNOBJECT_DRAWING",{value:A}),A},get SUPPORT_CORS_IMAGES(){var A=void 0!==(new Image).crossOrigin;return Object.defineProperty(Oe,"SUPPORT_CORS_IMAGES",{value:A}),A},get SUPPORT_RESPONSE_TYPE(){var A="string"==typeof(new XMLHttpRequest).responseType;return Object.defineProperty(Oe,"SUPPORT_RESPONSE_TYPE",{value:A}),A},get SUPPORT_CORS_XHR(){var A="withCredentials"in new XMLHttpRequest;return Object.defineProperty(Oe,"SUPPORT_CORS_XHR",{value:A}),A}},De=(be.prototype.debug=function(){for(var A=[],e=0;e<arguments.length;e++)A[e]=arguments[e];this.enabled&&("undefined"!=typeof window&&window.console&&"function"==typeof console.debug?console.debug.apply(console,[this.id,this.getTime()+"ms"].concat(A)):this.info.apply(this,A))},be.prototype.getTime=function(){return Date.now()-this.start},be.create=function(A){be.instances[A.id]=new be(A)},be.destroy=function(A){delete be.instances[A]},be.getInstance=function(A){var e=be.instances[A];if(void 0===e)throw new Error("No logger instance found with id "+A);return e},be.prototype.info=function(){for(var A=[],e=0;e<arguments.length;e++)A[e]=arguments[e];this.enabled&&"undefined"!=typeof window&&window.console&&"function"==typeof console.info&&console.info.apply(console,[this.id,this.getTime()+"ms"].concat(A))},be.prototype.error=function(){for(var A=[],e=0;e<arguments.length;e++)A[e]=arguments[e];this.enabled&&("undefined"!=typeof window&&window.console&&"function"==typeof console.error?console.error.apply(console,[this.id,this.getTime()+"ms"].concat(A)):this.info.apply(this,A))},be.instances={},be);function be(A){var e=A.id,t=A.enabled;this.id=e,this.enabled=t,this.start=Date.now()}var Se=(Me.create=function(A,e){return Me._caches[A]=new ye(A,e)},Me.destroy=function(A){delete Me._caches[A]},Me.open=function(A){var e=Me._caches[A];if(void 0!==e)return e;throw new Error('Cache with key "'+A+'" not found')},Me.getOrigin=function(A){var e=Me._link;return e?(e.href=A,e.href=e.href,e.protocol+e.hostname+e.port):"about:blank"},Me.isSameOrigin=function(A){return Me.getOrigin(A)===Me._origin},Me.setContext=function(A){Me._link=A.document.createElement("a"),Me._origin=Me.getOrigin(A.location.href)},Me.getInstance=function(){var A=Me._current;if(null===A)throw new Error("No cache instance attached");return A},Me.attachInstance=function(A){Me._current=A},Me.detachInstance=function(){Me._current=null},Me._caches={},Me._origin="about:blank",Me._current=null,Me);function Me(){}var ye=(_e.prototype.addImage=function(A){var e=Promise.resolve();return this.has(A)||(Ye(A)||Ge(A))&&(this._cache[A]=this.loadImage(A)),e},_e.prototype.match=function(A){return this._cache[A]},_e.prototype.loadImage=function(s){return a(this,void 0,void 0,function(){var e,r,t,n,B=this;return S(this,function(A){switch(A.label){case 0:return e=Se.isSameOrigin(s),r=!ke(s)&&!0===this._options.useCORS&&Oe.SUPPORT_CORS_IMAGES&&!e,t=!ke(s)&&!e&&"string"==typeof this._options.proxy&&Oe.SUPPORT_CORS_XHR&&!r,e||!1!==this._options.allowTaint||ke(s)||t||r?(n=s,t?[4,this.proxy(n)]:[3,2]):[2];case 1:n=A.sent(),A.label=2;case 2:return De.getInstance(this.id).debug("Added image "+s.substring(0,256)),[4,new Promise(function(A,e){var t=new Image;t.onload=function(){return A(t)},t.onerror=e,(We(n)||r)&&(t.crossOrigin="anonymous"),t.src=n,!0===t.complete&&setTimeout(function(){return A(t)},500),0<B._options.imageTimeout&&setTimeout(function(){return e("Timed out ("+B._options.imageTimeout+"ms) loading image")},B._options.imageTimeout)})];case 3:return[2,A.sent()]}})})},_e.prototype.has=function(A){return void 0!==this._cache[A]},_e.prototype.keys=function(){return Promise.resolve(Object.keys(this._cache))},_e.prototype.proxy=function(B){var s=this,o=this._options.proxy;if(!o)throw new Error("No proxy defined");var i=B.substring(0,256);return new Promise(function(e,t){var r=Oe.SUPPORT_RESPONSE_TYPE?"blob":"text",n=new XMLHttpRequest;if(n.onload=function(){if(200===n.status)if("text"==r)e(n.response);else{var A=new FileReader;A.addEventListener("load",function(){return e(A.result)},!1),A.addEventListener("error",function(A){return t(A)},!1),A.readAsDataURL(n.response)}else t("Failed to proxy resource "+i+" with status code "+n.status)},n.onerror=t,n.open("GET",o+"?url="+encodeURIComponent(B)+"&responseType="+r),"text"!=r&&n instanceof XMLHttpRequest&&(n.responseType=r),s._options.imageTimeout){var A=s._options.imageTimeout;n.timeout=A,n.ontimeout=function(){return t("Timed out ("+A+"ms) proxying "+i)}}n.send()})},_e);function _e(A,e){this.id=A,this._options=e,this._cache={}}function Pe(A){var n=rt.CIRCLE,B=Bt.FARTHEST_CORNER,s=[],o=[];return WA(A).forEach(function(A,e){var t=!0;if(0===e?t=A.reduce(function(A,e){if(zA(e))switch(e.value){case"center":return o.push(oe),!1;case"top":case"left":return o.push(se),!1;case"right":case"bottom":return o.push(ie),!1}else if(qA(e)||YA(e))return o.push(e),!1;return A},t):1===e&&(t=A.reduce(function(A,e){if(zA(e))switch(e.value){case"circle":return n=rt.CIRCLE,!1;case et:return n=rt.ELLIPSE,!1;case tt:case Ze:return B=Bt.CLOSEST_SIDE,!1;case je:return B=Bt.FARTHEST_SIDE,!1;case $e:return B=Bt.CLOSEST_CORNER,!1;case"cover":case At:return B=Bt.FARTHEST_CORNER,!1}else if(YA(e)||qA(e))return Array.isArray(B)||(B=[]),B.push(e),!1;return A},t)),t){var r=de(A);s.push(r)}}),{size:B,shape:n,stops:s,position:o,type:xe.RADIAL_GRADIENT}}var xe,Ve,ze=/^data:image\/svg\+xml/i,Xe=/^data:image\/.*;base64,/i,Je=/^data:image\/.*/i,Ge=function(A){return Oe.SUPPORT_SVG_DRAWING||!qe(A)},ke=function(A){return Je.test(A)},We=function(A){return Xe.test(A)},Ye=function(A){return"blob"===A.substr(0,4)},qe=function(A){return"svg"===A.substr(-3).toLowerCase()||ze.test(A)},Ze="closest-side",je="farthest-side",$e="closest-corner",At="farthest-corner",et="ellipse",tt="contain";(Ve=xe||(xe={}))[Ve.URL=0]="URL",Ve[Ve.LINEAR_GRADIENT=1]="LINEAR_GRADIENT",Ve[Ve.RADIAL_GRADIENT=2]="RADIAL_GRADIENT";var rt,nt,Bt,st;(nt=rt||(rt={}))[nt.CIRCLE=0]="CIRCLE",nt[nt.ELLIPSE=1]="ELLIPSE",(st=Bt||(Bt={}))[st.CLOSEST_SIDE=0]="CLOSEST_SIDE",st[st.FARTHEST_SIDE=1]="FARTHEST_SIDE",st[st.CLOSEST_CORNER=2]="CLOSEST_CORNER",st[st.FARTHEST_CORNER=3]="FARTHEST_CORNER";var ot=function(A){if(A.type===sA.URL_TOKEN){var e={url:A.value,type:xe.URL};return Se.getInstance().addImage(A.value),e}if(A.type!==sA.FUNCTION)throw new Error("Unsupported image type");var t=ct[A.name];if(void 0===t)throw new Error('Attempting to parse an unsupported image function "'+A.name+'"');return t(A.values)};var it,at,ct={"linear-gradient":function(A){var n=Qe(180),B=[];return WA(A).forEach(function(A,e){if(0===e){var t=A[0];if(t.type===sA.IDENT_TOKEN&&"to"===t.value)return void(n=Ae(A));if($A(t))return void(n=ce(t))}var r=de(A);B.push(r)}),{angle:n,stops:B,type:xe.LINEAR_GRADIENT}},"-moz-linear-gradient":Ie,"-ms-linear-gradient":Ie,"-o-linear-gradient":Ie,"-webkit-linear-gradient":Ie,"radial-gradient":function(A){var B=rt.CIRCLE,s=Bt.FARTHEST_CORNER,o=[],i=[];return WA(A).forEach(function(A,e){var t=!0;if(0===e){var r=!1;t=A.reduce(function(A,e){if(r)if(zA(e))switch(e.value){case"center":return i.push(oe),A;case"top":case"left":return i.push(se),A;case"right":case"bottom":return i.push(ie),A}else(qA(e)||YA(e))&&i.push(e);else if(zA(e))switch(e.value){case"circle":return B=rt.CIRCLE,!1;case et:return B=rt.ELLIPSE,!1;case"at":return!(r=!0);case Ze:return s=Bt.CLOSEST_SIDE,!1;case"cover":case je:return s=Bt.FARTHEST_SIDE,!1;case tt:case $e:return s=Bt.CLOSEST_CORNER,!1;case At:return s=Bt.FARTHEST_CORNER,!1}else if(YA(e)||qA(e))return Array.isArray(s)||(s=[]),s.push(e),!1;return A},t)}if(t){var n=de(A);o.push(n)}}),{size:s,shape:B,stops:o,position:i,type:xe.RADIAL_GRADIENT}},"-moz-radial-gradient":Pe,"-ms-radial-gradient":Pe,"-o-radial-gradient":Pe,"-webkit-radial-gradient":Pe,"-webkit-gradient":function(A){var e=Qe(180),s=[],o=xe.LINEAR_GRADIENT,t=rt.CIRCLE,r=Bt.FARTHEST_CORNER;return WA(A).forEach(function(A,e){var t=A[0];if(0===e){if(zA(t)&&"linear"===t.value)return void(o=xe.LINEAR_GRADIENT);if(zA(t)&&"radial"===t.value)return void(o=xe.RADIAL_GRADIENT)}if(t.type===sA.FUNCTION)if("from"===t.name){var r=we(t.values[0]);s.push({stop:se,color:r})}else if("to"===t.name)r=we(t.values[0]),s.push({stop:ie,color:r});else if("color-stop"===t.name){var n=t.values.filter(kA);if(2===n.length){r=we(n[1]);var B=n[0];VA(B)&&s.push({stop:{type:sA.PERCENTAGE_TOKEN,number:100*B.number,flags:B.flags},color:r})}}}),o===xe.LINEAR_GRADIENT?{angle:(e+Qe(180))%Qe(360),stops:s,type:o}:{size:r,shape:t,stops:s,position:[],type:o}}},Qt={name:"background-image",initialValue:"none",type:Ce.LIST,prefix:!1,parse:function(A){if(0===A.length)return[];var e=A[0];return e.type===sA.IDENT_TOKEN&&"none"===e.value?[]:A.filter(function(A){return kA(A)&&function(A){return A.type!==sA.FUNCTION||ct[A.name]}(A)}).map(ot)}},wt={name:"background-origin",initialValue:"border-box",prefix:!1,type:Ce.LIST,parse:function(A){return A.map(function(A){if(zA(A))switch(A.value){case"padding-box":return 1;case"content-box":return 2}return 0})}},ut={name:"background-position",initialValue:"0% 0%",type:Ce.LIST,prefix:!1,parse:function(A){return WA(A).map(function(A){return A.filter(qA)}).map(ZA)}};(at=it||(it={}))[at.REPEAT=0]="REPEAT",at[at.NO_REPEAT=1]="NO_REPEAT",at[at.REPEAT_X=2]="REPEAT_X";var Ut,lt,Ct={name:"background-repeat",initialValue:"repeat",prefix:!(at[at.REPEAT_Y=3]="REPEAT_Y"),type:Ce.LIST,parse:function(A){return WA(A).map(function(A){return A.filter(zA).map(function(A){return A.value}).join(" ")}).map(gt)}},gt=function(A){switch(A){case"no-repeat":return it.NO_REPEAT;case"repeat-x":case"repeat no-repeat":return it.REPEAT_X;case"repeat-y":case"no-repeat repeat":return it.REPEAT_Y;case"repeat":default:return it.REPEAT}};(lt=Ut||(Ut={})).AUTO="auto",lt.CONTAIN="contain";function Et(A){return{name:"border-"+A+"-color",initialValue:"transparent",prefix:!1,type:Ce.TYPE_VALUE,format:"color"}}function Ft(A){return{name:"border-radius-"+A,initialValue:"0 0",prefix:!1,type:Ce.LIST,parse:function(A){return ZA(A.filter(qA))}}}var ht,Ht,dt={name:"background-size",initialValue:"0",prefix:!(lt.COVER="cover"),type:Ce.LIST,parse:function(A){return WA(A).map(function(A){return A.filter(ft)})}},ft=function(A){return zA(A)||qA(A)},pt=Et("top"),Nt=Et("right"),Kt=Et("bottom"),It=Et("left"),Tt=Ft("top-left"),mt=Ft("top-right"),Rt=Ft("bottom-right"),Lt=Ft("bottom-left");(Ht=ht||(ht={}))[Ht.NONE=0]="NONE",Ht[Ht.SOLID=1]="SOLID";function vt(A){return{name:"border-"+A+"-style",initialValue:"solid",prefix:!1,type:Ce.IDENT_VALUE,parse:function(A){switch(A){case"none":return ht.NONE}return ht.SOLID}}}function Ot(A){return{name:"border-"+A+"-width",initialValue:"0",type:Ce.VALUE,prefix:!1,parse:function(A){return xA(A)?A.number:0}}}var Dt,bt,St=vt("top"),Mt=vt("right"),yt=vt("bottom"),_t=vt("left"),Pt=Ot("top"),xt=Ot("right"),Vt=Ot("bottom"),zt=Ot("left"),Xt={name:"color",initialValue:"transparent",prefix:!1,type:Ce.TYPE_VALUE,format:"color"},Jt={name:"display",initialValue:"inline-block",prefix:!1,type:Ce.LIST,parse:function(A){return A.filter(zA).reduce(function(A,e){return A|Gt(e.value)},0)}},Gt=function(A){switch(A){case"block":return 2;case"inline":return 4;case"run-in":return 8;case"flow":return 16;case"flow-root":return 32;case"table":return 64;case"flex":case"-webkit-flex":return 128;case"grid":case"-ms-grid":return 256;case"ruby":return 512;case"subgrid":return 1024;case"list-item":return 2048;case"table-row-group":return 4096;case"table-header-group":return 8192;case"table-footer-group":return 16384;case"table-row":return 32768;case"table-cell":return 65536;case"table-column-group":return 131072;case"table-column":return 262144;case"table-caption":return 524288;case"ruby-base":return 1048576;case"ruby-text":return 2097152;case"ruby-base-container":return 4194304;case"ruby-text-container":return 8388608;case"contents":return 16777216;case"inline-block":return 33554432;case"inline-list-item":return 67108864;case"inline-table":return 134217728;case"inline-flex":return 268435456;case"inline-grid":return 536870912}return 0};(bt=Dt||(Dt={}))[bt.NONE=0]="NONE",bt[bt.LEFT=1]="LEFT",bt[bt.RIGHT=2]="RIGHT",bt[bt.INLINE_START=3]="INLINE_START";var kt,Wt,Yt,qt,Zt={name:"float",initialValue:"none",prefix:!(bt[bt.INLINE_END=4]="INLINE_END"),type:Ce.IDENT_VALUE,parse:function(A){switch(A){case"left":return Dt.LEFT;case"right":return Dt.RIGHT;case"inline-start":return Dt.INLINE_START;case"inline-end":return Dt.INLINE_END}return Dt.NONE}},jt={name:"letter-spacing",initialValue:"0",prefix:!1,type:Ce.VALUE,parse:function(A){return A.type===sA.IDENT_TOKEN&&"normal"===A.value?0:A.type===sA.NUMBER_TOKEN?A.number:A.type===sA.DIMENSION_TOKEN?A.number:0}},$t={name:"line-break",initialValue:(Wt=kt||(kt={})).NORMAL="normal",prefix:!(Wt.STRICT="strict"),type:Ce.IDENT_VALUE,parse:function(A){switch(A){case"strict":return kt.STRICT;case"normal":default:return kt.NORMAL}}},Ar={name:"line-height",initialValue:"normal",prefix:!1,type:Ce.TOKEN_VALUE},er={name:"list-style-image",initialValue:"none",type:Ce.VALUE,prefix:!1,parse:function(A){return A.type===sA.IDENT_TOKEN&&"none"===A.value?null:ot(A)}};(qt=Yt||(Yt={}))[qt.INSIDE=0]="INSIDE";var tr,rr,nr={name:"list-style-position",initialValue:"outside",prefix:!(qt[qt.OUTSIDE=1]="OUTSIDE"),type:Ce.IDENT_VALUE,parse:function(A){switch(A){case"inside":return Yt.INSIDE;case"outside":default:return Yt.OUTSIDE}}};(rr=tr||(tr={}))[rr.NONE=-1]="NONE",rr[rr.DISC=0]="DISC",rr[rr.CIRCLE=1]="CIRCLE",rr[rr.SQUARE=2]="SQUARE",rr[rr.DECIMAL=3]="DECIMAL",rr[rr.CJK_DECIMAL=4]="CJK_DECIMAL",rr[rr.DECIMAL_LEADING_ZERO=5]="DECIMAL_LEADING_ZERO",rr[rr.LOWER_ROMAN=6]="LOWER_ROMAN",rr[rr.UPPER_ROMAN=7]="UPPER_ROMAN",rr[rr.LOWER_GREEK=8]="LOWER_GREEK",rr[rr.LOWER_ALPHA=9]="LOWER_ALPHA",rr[rr.UPPER_ALPHA=10]="UPPER_ALPHA",rr[rr.ARABIC_INDIC=11]="ARABIC_INDIC",rr[rr.ARMENIAN=12]="ARMENIAN",rr[rr.BENGALI=13]="BENGALI",rr[rr.CAMBODIAN=14]="CAMBODIAN",rr[rr.CJK_EARTHLY_BRANCH=15]="CJK_EARTHLY_BRANCH",rr[rr.CJK_HEAVENLY_STEM=16]="CJK_HEAVENLY_STEM",rr[rr.CJK_IDEOGRAPHIC=17]="CJK_IDEOGRAPHIC",rr[rr.DEVANAGARI=18]="DEVANAGARI",rr[rr.ETHIOPIC_NUMERIC=19]="ETHIOPIC_NUMERIC",rr[rr.GEORGIAN=20]="GEORGIAN",rr[rr.GUJARATI=21]="GUJARATI",rr[rr.GURMUKHI=22]="GURMUKHI",rr[rr.HEBREW=22]="HEBREW",rr[rr.HIRAGANA=23]="HIRAGANA",rr[rr.HIRAGANA_IROHA=24]="HIRAGANA_IROHA",rr[rr.JAPANESE_FORMAL=25]="JAPANESE_FORMAL",rr[rr.JAPANESE_INFORMAL=26]="JAPANESE_INFORMAL",rr[rr.KANNADA=27]="KANNADA",rr[rr.KATAKANA=28]="KATAKANA",rr[rr.KATAKANA_IROHA=29]="KATAKANA_IROHA",rr[rr.KHMER=30]="KHMER",rr[rr.KOREAN_HANGUL_FORMAL=31]="KOREAN_HANGUL_FORMAL",rr[rr.KOREAN_HANJA_FORMAL=32]="KOREAN_HANJA_FORMAL",rr[rr.KOREAN_HANJA_INFORMAL=33]="KOREAN_HANJA_INFORMAL",rr[rr.LAO=34]="LAO",rr[rr.LOWER_ARMENIAN=35]="LOWER_ARMENIAN",rr[rr.MALAYALAM=36]="MALAYALAM",rr[rr.MONGOLIAN=37]="MONGOLIAN",rr[rr.MYANMAR=38]="MYANMAR",rr[rr.ORIYA=39]="ORIYA",rr[rr.PERSIAN=40]="PERSIAN",rr[rr.SIMP_CHINESE_FORMAL=41]="SIMP_CHINESE_FORMAL",rr[rr.SIMP_CHINESE_INFORMAL=42]="SIMP_CHINESE_INFORMAL",rr[rr.TAMIL=43]="TAMIL",rr[rr.TELUGU=44]="TELUGU",rr[rr.THAI=45]="THAI",rr[rr.TIBETAN=46]="TIBETAN",rr[rr.TRAD_CHINESE_FORMAL=47]="TRAD_CHINESE_FORMAL",rr[rr.TRAD_CHINESE_INFORMAL=48]="TRAD_CHINESE_INFORMAL",rr[rr.UPPER_ARMENIAN=49]="UPPER_ARMENIAN",rr[rr.DISCLOSURE_OPEN=50]="DISCLOSURE_OPEN";function Br(A){return{name:"margin-"+A,initialValue:"0",prefix:!1,type:Ce.TOKEN_VALUE}}var sr,or,ir={name:"list-style-type",initialValue:"none",prefix:!(rr[rr.DISCLOSURE_CLOSED=51]="DISCLOSURE_CLOSED"),type:Ce.IDENT_VALUE,parse:function(A){switch(A){case"disc":return tr.DISC;case"circle":return tr.CIRCLE;case"square":return tr.SQUARE;case"decimal":return tr.DECIMAL;case"cjk-decimal":return tr.CJK_DECIMAL;case"decimal-leading-zero":return tr.DECIMAL_LEADING_ZERO;case"lower-roman":return tr.LOWER_ROMAN;case"upper-roman":return tr.UPPER_ROMAN;case"lower-greek":return tr.LOWER_GREEK;case"lower-alpha":return tr.LOWER_ALPHA;case"upper-alpha":return tr.UPPER_ALPHA;case"arabic-indic":return tr.ARABIC_INDIC;case"armenian":return tr.ARMENIAN;case"bengali":return tr.BENGALI;case"cambodian":return tr.CAMBODIAN;case"cjk-earthly-branch":return tr.CJK_EARTHLY_BRANCH;case"cjk-heavenly-stem":return tr.CJK_HEAVENLY_STEM;case"cjk-ideographic":return tr.CJK_IDEOGRAPHIC;case"devanagari":return tr.DEVANAGARI;case"ethiopic-numeric":return tr.ETHIOPIC_NUMERIC;case"georgian":return tr.GEORGIAN;case"gujarati":return tr.GUJARATI;case"gurmukhi":return tr.GURMUKHI;case"hebrew":return tr.HEBREW;case"hiragana":return tr.HIRAGANA;case"hiragana-iroha":return tr.HIRAGANA_IROHA;case"japanese-formal":return tr.JAPANESE_FORMAL;case"japanese-informal":return tr.JAPANESE_INFORMAL;case"kannada":return tr.KANNADA;case"katakana":return tr.KATAKANA;case"katakana-iroha":return tr.KATAKANA_IROHA;case"khmer":return tr.KHMER;case"korean-hangul-formal":return tr.KOREAN_HANGUL_FORMAL;case"korean-hanja-formal":return tr.KOREAN_HANJA_FORMAL;case"korean-hanja-informal":return tr.KOREAN_HANJA_INFORMAL;case"lao":return tr.LAO;case"lower-armenian":return tr.LOWER_ARMENIAN;case"malayalam":return tr.MALAYALAM;case"mongolian":return tr.MONGOLIAN;case"myanmar":return tr.MYANMAR;case"oriya":return tr.ORIYA;case"persian":return tr.PERSIAN;case"simp-chinese-formal":return tr.SIMP_CHINESE_FORMAL;case"simp-chinese-informal":return tr.SIMP_CHINESE_INFORMAL;case"tamil":return tr.TAMIL;case"telugu":return tr.TELUGU;case"thai":return tr.THAI;case"tibetan":return tr.TIBETAN;case"trad-chinese-formal":return tr.TRAD_CHINESE_FORMAL;case"trad-chinese-informal":return tr.TRAD_CHINESE_INFORMAL;case"upper-armenian":return tr.UPPER_ARMENIAN;case"disclosure-open":return tr.DISCLOSURE_OPEN;case"disclosure-closed":return tr.DISCLOSURE_CLOSED;case"none":default:return tr.NONE}}},ar=Br("top"),cr=Br("right"),Qr=Br("bottom"),wr=Br("left");(or=sr||(sr={}))[or.VISIBLE=0]="VISIBLE",or[or.HIDDEN=1]="HIDDEN",or[or.SCROLL=2]="SCROLL";function ur(A){return{name:"padding-"+A,initialValue:"0",prefix:!1,type:Ce.TYPE_VALUE,format:"length-percentage"}}var Ur,lr,Cr,gr,Er={name:"overflow",initialValue:"visible",prefix:!(or[or.AUTO=3]="AUTO"),type:Ce.LIST,parse:function(A){return A.filter(zA).map(function(A){switch(A.value){case"hidden":return sr.HIDDEN;case"scroll":return sr.SCROLL;case"auto":return sr.AUTO;case"visible":default:return sr.VISIBLE}})}},Fr={name:"overflow-wrap",initialValue:(lr=Ur||(Ur={})).NORMAL="normal",prefix:!(lr.BREAK_WORD="break-word"),type:Ce.IDENT_VALUE,parse:function(A){switch(A){case"break-word":return Ur.BREAK_WORD;case"normal":default:return Ur.NORMAL}}},hr=ur("top"),Hr=ur("right"),dr=ur("bottom"),fr=ur("left");(gr=Cr||(Cr={}))[gr.LEFT=0]="LEFT",gr[gr.CENTER=1]="CENTER";var pr,Nr,Kr={name:"text-align",initialValue:"left",prefix:!(gr[gr.RIGHT=2]="RIGHT"),type:Ce.IDENT_VALUE,parse:function(A){switch(A){case"right":return Cr.RIGHT;case"center":case"justify":return Cr.CENTER;case"left":default:return Cr.LEFT}}};(Nr=pr||(pr={}))[Nr.STATIC=0]="STATIC",Nr[Nr.RELATIVE=1]="RELATIVE",Nr[Nr.ABSOLUTE=2]="ABSOLUTE",Nr[Nr.FIXED=3]="FIXED";var Ir,Tr,mr={name:"position",initialValue:"static",prefix:!(Nr[Nr.STICKY=4]="STICKY"),type:Ce.IDENT_VALUE,parse:function(A){switch(A){case"relative":return pr.RELATIVE;case"absolute":return pr.ABSOLUTE;case"fixed":return pr.FIXED;case"sticky":return pr.STICKY}return pr.STATIC}},Rr={name:"text-shadow",initialValue:"none",type:Ce.LIST,prefix:!1,parse:function(A){return 1===A.length&&JA(A[0],"none")?[]:WA(A).map(function(A){for(var e={color:He.TRANSPARENT,offsetX:se,offsetY:se,blur:se},t=0,r=0;r<A.length;r++){var n=A[r];YA(n)?(0===t?e.offsetX=n:1===t?e.offsetY=n:e.blur=n,t++):e.color=we(n)}return e})}};(Tr=Ir||(Ir={}))[Tr.NONE=0]="NONE",Tr[Tr.LOWERCASE=1]="LOWERCASE",Tr[Tr.UPPERCASE=2]="UPPERCASE";var Lr,vr,Or={name:"text-transform",initialValue:"none",prefix:!(Tr[Tr.CAPITALIZE=3]="CAPITALIZE"),type:Ce.IDENT_VALUE,parse:function(A){switch(A){case"uppercase":return Ir.UPPERCASE;case"lowercase":return Ir.LOWERCASE;case"capitalize":return Ir.CAPITALIZE}return Ir.NONE}},Dr={name:"transform",initialValue:"none",prefix:!0,type:Ce.VALUE,parse:function(A){if(A.type===sA.IDENT_TOKEN&&"none"===A.value)return null;if(A.type!==sA.FUNCTION)return null;var e=br[A.name];if(void 0===e)throw new Error('Attempting to parse an unsupported transform function "'+A.name+'"');return e(A.values)}},br={matrix:function(A){var e=A.filter(function(A){return A.type===sA.NUMBER_TOKEN}).map(function(A){return A.number});return 6===e.length?e:null},matrix3d:function(A){var e=A.filter(function(A){return A.type===sA.NUMBER_TOKEN}).map(function(A){return A.number}),t=e[0],r=e[1],n=(e[2],e[3],e[4]),B=e[5],s=(e[6],e[7],e[8],e[9],e[10],e[11],e[12]),o=e[13];e[14],e[15];return 16===e.length?[t,r,n,B,s,o]:null}},Sr={type:sA.PERCENTAGE_TOKEN,number:50,flags:4},Mr=[Sr,Sr],yr={name:"transform-origin",initialValue:"50% 50%",prefix:!0,type:Ce.LIST,parse:function(A){var e=A.filter(qA);return 2!==e.length?Mr:[e[0],e[1]]}};(vr=Lr||(Lr={}))[vr.VISIBLE=0]="VISIBLE",vr[vr.HIDDEN=1]="HIDDEN";var _r,Pr,xr={name:"visible",initialValue:"none",prefix:!(vr[vr.COLLAPSE=2]="COLLAPSE"),type:Ce.IDENT_VALUE,parse:function(A){switch(A){case"hidden":return Lr.HIDDEN;case"collapse":return Lr.COLLAPSE;case"visible":default:return Lr.VISIBLE}}};(Pr=_r||(_r={})).NORMAL="normal",Pr.BREAK_ALL="break-all";var Vr,zr,Xr={name:"word-break",initialValue:"normal",prefix:!(Pr.KEEP_ALL="keep-all"),type:Ce.IDENT_VALUE,parse:function(A){switch(A){case"break-all":return _r.BREAK_ALL;case"keep-all":return _r.KEEP_ALL;case"normal":default:return _r.NORMAL}}},Jr={name:"z-index",initialValue:"auto",prefix:!1,type:Ce.VALUE,parse:function(A){if(A.type===sA.IDENT_TOKEN)return{auto:!0,order:0};if(VA(A))return{auto:!1,order:A.number};throw new Error("Invalid z-index number parsed")}},Gr={name:"opacity",initialValue:"1",type:Ce.VALUE,prefix:!1,parse:function(A){return VA(A)?A.number:1}},kr={name:"text-decoration-color",initialValue:"transparent",prefix:!1,type:Ce.TYPE_VALUE,format:"color"},Wr={name:"text-decoration-line",initialValue:"none",prefix:!1,type:Ce.LIST,parse:function(A){return A.filter(zA).map(function(A){switch(A.value){case"underline":return 1;case"overline":return 2;case"line-through":return 3;case"none":return 4}return 0}).filter(function(A){return 0!==A})}},Yr={name:"font-family",initialValue:"",prefix:!1,type:Ce.LIST,parse:function(A){return A.filter(qr).map(function(A){return A.value})}},qr=function(A){return A.type===sA.STRING_TOKEN||A.type===sA.IDENT_TOKEN},Zr={name:"font-size",initialValue:"0",prefix:!1,type:Ce.TYPE_VALUE,format:"length"},jr={name:"font-weight",initialValue:"normal",type:Ce.VALUE,prefix:!1,parse:function(A){if(VA(A))return A.number;if(zA(A))switch(A.value){case"bold":return 700;case"normal":default:return 400}return 400}},$r={name:"font-variant",initialValue:"none",type:Ce.LIST,prefix:!1,parse:function(A){return A.filter(zA).map(function(A){return A.value})}};(zr=Vr||(Vr={})).NORMAL="normal",zr.ITALIC="italic";function An(A,e){return 0!=(A&e)}function en(A,e,t){if(!A)return"";var r=A[Math.min(e,A.length-1)];return r?t?r.open:r.close:""}var tn={name:"font-style",initialValue:"normal",prefix:!(zr.OBLIQUE="oblique"),type:Ce.IDENT_VALUE,parse:function(A){switch(A){case"oblique":return Vr.OBLIQUE;case"italic":return Vr.ITALIC;case"normal":default:return Vr.NORMAL}}},rn={name:"content",initialValue:"none",type:Ce.LIST,prefix:!1,parse:function(A){if(0===A.length)return[];var e=A[0];return e.type===sA.IDENT_TOKEN&&"none"===e.value?[]:A}},nn={name:"counter-increment",initialValue:"none",prefix:!0,type:Ce.LIST,parse:function(A){if(0===A.length)return null;var e=A[0];if(e.type===sA.IDENT_TOKEN&&"none"===e.value)return null;for(var t=[],r=A.filter(GA),n=0;n<r.length;n++){var B=r[n],s=r[n+1];if(B.type===sA.IDENT_TOKEN){var o=s&&VA(s)?s.number:1;t.push({counter:B.value,increment:o})}}return t}},Bn={name:"counter-reset",initialValue:"none",prefix:!0,type:Ce.LIST,parse:function(A){if(0===A.length)return[];for(var e=[],t=A.filter(GA),r=0;r<t.length;r++){var n=t[r],B=t[r+1];if(zA(n)&&"none"!==n.value){var s=B&&VA(B)?B.number:0;e.push({counter:n.value,reset:s})}}return e}},sn={name:"quotes",initialValue:"none",prefix:!0,type:Ce.LIST,parse:function(A){if(0===A.length)return null;var e=A[0];if(e.type===sA.IDENT_TOKEN&&"none"===e.value)return null;var t=[],r=A.filter(XA);if(r.length%2!=0)return null;for(var n=0;n<r.length;n+=2){var B=r[n].value,s=r[n+1].value;t.push({open:B,close:s})}return t}},on={name:"box-shadow",initialValue:"none",type:Ce.LIST,prefix:!1,parse:function(A){return 1===A.length&&JA(A[0],"none")?[]:WA(A).map(function(A){for(var e={color:255,offsetX:se,offsetY:se,blur:se,spread:se,inset:!1},t=0,r=0;r<A.length;r++){var n=A[r];JA(n,"inset")?e.inset=!0:YA(n)?(0===t?e.offsetX=n:1===t?e.offsetY=n:2===t?e.blur=n:e.spread=n,t++):e.color=we(n)}return e})}},an=(cn.prototype.isVisible=function(){return 0<this.display&&0<this.opacity&&this.visibility===Lr.VISIBLE},cn.prototype.isTransparent=function(){return ee(this.backgroundColor)},cn.prototype.isTransformed=function(){return null!==this.transform},cn.prototype.isPositioned=function(){return this.position!==pr.STATIC},cn.prototype.isPositionedWithZIndex=function(){return this.isPositioned()&&!this.zIndex.auto},cn.prototype.isFloating=function(){return this.float!==Dt.NONE},cn.prototype.isInlineLevel=function(){return An(this.display,4)||An(this.display,33554432)||An(this.display,268435456)||An(this.display,536870912)||An(this.display,67108864)||An(this.display,134217728)},cn);function cn(A){this.backgroundClip=Un(me,A.backgroundClip),this.backgroundColor=Un(Re,A.backgroundColor),this.backgroundImage=Un(Qt,A.backgroundImage),this.backgroundOrigin=Un(wt,A.backgroundOrigin),this.backgroundPosition=Un(ut,A.backgroundPosition),this.backgroundRepeat=Un(Ct,A.backgroundRepeat),this.backgroundSize=Un(dt,A.backgroundSize),this.borderTopColor=Un(pt,A.borderTopColor),this.borderRightColor=Un(Nt,A.borderRightColor),this.borderBottomColor=Un(Kt,A.borderBottomColor),this.borderLeftColor=Un(It,A.borderLeftColor),this.borderTopLeftRadius=Un(Tt,A.borderTopLeftRadius),this.borderTopRightRadius=Un(mt,A.borderTopRightRadius),this.borderBottomRightRadius=Un(Rt,A.borderBottomRightRadius),this.borderBottomLeftRadius=Un(Lt,A.borderBottomLeftRadius),this.borderTopStyle=Un(St,A.borderTopStyle),this.borderRightStyle=Un(Mt,A.borderRightStyle),this.borderBottomStyle=Un(yt,A.borderBottomStyle),this.borderLeftStyle=Un(_t,A.borderLeftStyle),this.borderTopWidth=Un(Pt,A.borderTopWidth),this.borderRightWidth=Un(xt,A.borderRightWidth),this.borderBottomWidth=Un(Vt,A.borderBottomWidth),this.borderLeftWidth=Un(zt,A.borderLeftWidth),this.boxShadow=Un(on,A.boxShadow),this.color=Un(Xt,A.color),this.display=Un(Jt,A.display),this.float=Un(Zt,A.cssFloat),this.fontFamily=Un(Yr,A.fontFamily),this.fontSize=Un(Zr,A.fontSize),this.fontStyle=Un(tn,A.fontStyle),this.fontVariant=Un($r,A.fontVariant),this.fontWeight=Un(jr,A.fontWeight),this.letterSpacing=Un(jt,A.letterSpacing),this.lineBreak=Un($t,A.lineBreak),this.lineHeight=Un(Ar,A.lineHeight),this.listStyleImage=Un(er,A.listStyleImage),this.listStylePosition=Un(nr,A.listStylePosition),this.listStyleType=Un(ir,A.listStyleType),this.marginTop=Un(ar,A.marginTop),this.marginRight=Un(cr,A.marginRight),this.marginBottom=Un(Qr,A.marginBottom),this.marginLeft=Un(wr,A.marginLeft),this.opacity=Un(Gr,A.opacity);var e=Un(Er,A.overflow);this.overflowX=e[0],this.overflowY=e[1<e.length?1:0],this.overflowWrap=Un(Fr,A.overflowWrap),this.paddingTop=Un(hr,A.paddingTop),this.paddingRight=Un(Hr,A.paddingRight),this.paddingBottom=Un(dr,A.paddingBottom),this.paddingLeft=Un(fr,A.paddingLeft),this.position=Un(mr,A.position),this.textAlign=Un(Kr,A.textAlign),this.textDecorationColor=Un(kr,A.textDecorationColor||A.color),this.textDecorationLine=Un(Wr,A.textDecorationLine),this.textShadow=Un(Rr,A.textShadow),this.textTransform=Un(Or,A.textTransform),this.transform=Un(Dr,A.transform),this.transformOrigin=Un(yr,A.transformOrigin),this.visibility=Un(xr,A.visibility),this.wordBreak=Un(Xr,A.wordBreak),this.zIndex=Un(Jr,A.zIndex)}var Qn,wn=function(A){this.content=Un(rn,A.content),this.quotes=Un(sn,A.quotes)},un=function(A){this.counterIncrement=Un(nn,A.counterIncrement),this.counterReset=Un(Bn,A.counterReset)},Un=function(A,e){var t=new MA,r=null!=e?e.toString():A.initialValue;t.write(r);var n=new _A(t.read());switch(A.type){case Ce.IDENT_VALUE:var B=n.parseComponentValue();return A.parse(zA(B)?B.value:A.initialValue);case Ce.VALUE:return A.parse(n.parseComponentValue());case Ce.LIST:return A.parse(n.parseComponentValues());case Ce.TOKEN_VALUE:return n.parseComponentValue();case Ce.TYPE_VALUE:switch(A.format){case"angle":return ce(n.parseComponentValue());case"color":return we(n.parseComponentValue());case"image":return ot(n.parseComponentValue());case"length":var s=n.parseComponentValue();return YA(s)?s:se;case"length-percentage":var o=n.parseComponentValue();return qA(o)?o:se}}throw new Error("Attempting to parse unsupported css format type "+A.format)},ln=function(A){this.styles=new an(window.getComputedStyle(A,null)),this.textNodes=[],this.elements=[],null!==this.styles.transform&&uB(A)&&(A.style.transform="none"),this.bounds=T(A),this.flags=0},Cn=function(A,e){this.text=A,this.bounds=e},gn=function(A){var e=A.ownerDocument;if(e){var t=e.createElement("html2canvaswrapper");t.appendChild(A.cloneNode(!0));var r=A.parentNode;if(r){r.replaceChild(t,A);var n=T(t);return t.firstChild&&r.replaceChild(t.firstChild,t),n}}return new I(0,0,0,0)},En=function(A,e,t){var r=A.ownerDocument;if(!r)throw new Error("Node has no owner document");var n=r.createRange();return n.setStart(A,e),n.setEnd(A,e+t),I.fromClientRect(n.getBoundingClientRect())},Fn=function(A,e){return 0!==e.letterSpacing?c(A).map(function(A){return l(A)}):hn(A,e)},hn=function(A,e){for(var t,r=function(A,e){var t=c(A),r=u(t,e),n=r[0],B=r[1],s=r[2],o=t.length,i=0,a=0;return{next:function(){if(o<=a)return{done:!0,value:null};for(var A=Y;a<o&&(A=w(t,B,n,++a,s))===Y;);if(A===Y&&a!==o)return{done:!0,value:null};var e=new nA(t,A,i,a);return i=a,{value:e,done:!1}}}}(A,{lineBreak:e.lineBreak,wordBreak:e.overflowWrap===Ur.BREAK_WORD?"break-word":e.wordBreak}),n=[];!(t=r.next()).done;)t.value&&n.push(t.value.slice());return n},Hn=function(A,e){this.text=dn(A.data,e.textTransform),this.textBounds=function(A,t,r){var e=Fn(A,t),n=[],B=0;return e.forEach(function(A){if(t.textDecorationLine.length||0<A.trim().length)if(Oe.SUPPORT_RANGE_BOUNDS)n.push(new Cn(A,En(r,B,A.length)));else{var e=r.splitText(A.length);n.push(new Cn(A,gn(r))),r=e}else Oe.SUPPORT_RANGE_BOUNDS||(r=r.splitText(A.length));B+=A.length}),n}(this.text,e,A)},dn=function(A,e){switch(e){case Ir.LOWERCASE:return A.toLowerCase();case Ir.CAPITALIZE:return A.replace(fn,pn);case Ir.UPPERCASE:return A.toUpperCase();default:return A}},fn=/(^|\s|:|-|\(|\))([a-z])/g,pn=function(A,e,t){return 0<A.length?e+t.toUpperCase():A},Nn=(A(Kn,Qn=ln),Kn);function Kn(A){var e=Qn.call(this,A)||this;return e.src=A.currentSrc||A.src,e.intrinsicWidth=A.naturalWidth,e.intrinsicHeight=A.naturalHeight,Se.getInstance().addImage(e.src),e}var In,Tn=(A(mn,In=ln),mn);function mn(A){var e=In.call(this,A)||this;return e.canvas=A,e.intrinsicWidth=A.width,e.intrinsicHeight=A.height,e}var Rn,Ln=(A(vn,Rn=ln),vn);function vn(A){var e=Rn.call(this,A)||this,t=new XMLSerializer;return e.svg="data:image/svg+xml,"+encodeURIComponent(t.serializeToString(A)),e.intrinsicWidth=A.width.baseVal.value,e.intrinsicHeight=A.height.baseVal.value,Se.getInstance().addImage(e.svg),e}var On,Dn=(A(bn,On=ln),bn);function bn(A){var e=On.call(this,A)||this;return e.value=A.value,e}var Sn,Mn=(A(yn,Sn=ln),yn);function yn(A){var e=Sn.call(this,A)||this;return e.start=A.start,e.reversed="boolean"==typeof A.reversed&&!0===A.reversed,e}var _n,Pn=[{type:sA.DIMENSION_TOKEN,flags:0,unit:"px",number:3}],xn=[{type:sA.PERCENTAGE_TOKEN,flags:0,number:50}],Vn="checkbox",zn="radio",Xn="password",Jn=707406591,Gn=(A(kn,_n=ln),kn);function kn(A){var e=_n.call(this,A)||this;switch(e.type=A.type.toLowerCase(),e.checked=A.checked,e.value=function(A){var e=A.type===Xn?new Array(A.value.length+1).join("•"):A.value;return 0===e.length?A.placeholder||"":e}(A),e.type!==Vn&&e.type!==zn||(e.styles.backgroundColor=3739148031,e.styles.borderTopColor=e.styles.borderRightColor=e.styles.borderBottomColor=e.styles.borderLeftColor=2779096575,e.styles.borderTopWidth=e.styles.borderRightWidth=e.styles.borderBottomWidth=e.styles.borderLeftWidth=1,e.styles.borderTopStyle=e.styles.borderRightStyle=e.styles.borderBottomStyle=e.styles.borderLeftStyle=ht.SOLID,e.styles.backgroundClip=[Ee.BORDER_BOX],e.styles.backgroundOrigin=[0],e.bounds=function(A){return A.width>A.height?new I(A.left+(A.width-A.height)/2,A.top,A.height,A.height):A.width<A.height?new I(A.left,A.top+(A.height-A.width)/2,A.width,A.width):A}(e.bounds)),e.type){case Vn:e.styles.borderTopRightRadius=e.styles.borderTopLeftRadius=e.styles.borderBottomRightRadius=e.styles.borderBottomLeftRadius=Pn;break;case zn:e.styles.borderTopRightRadius=e.styles.borderTopLeftRadius=e.styles.borderBottomRightRadius=e.styles.borderBottomLeftRadius=xn}return e}var Wn,Yn=(A(qn,Wn=ln),qn);function qn(A){var e=Wn.call(this,A)||this,t=A.options[A.selectedIndex||0];return e.value=t&&t.text||"",e}var Zn,jn=(A($n,Zn=ln),$n);function $n(A){var e=Zn.call(this,A)||this;return e.value=A.value,e}function AB(A){return we(_A.create(A).parseComponentValue())}var eB,tB=(A(rB,eB=ln),rB);function rB(A){var e=eB.call(this,A)||this;e.src=A.src,e.width=parseInt(A.width,10)||0,e.height=parseInt(A.height,10)||0,e.backgroundColor=e.styles.backgroundColor;try{if(A.contentWindow&&A.contentWindow.document&&A.contentWindow.document.documentElement){e.tree=iB(A.contentWindow.document.documentElement);var t=A.contentWindow.document.documentElement?AB(getComputedStyle(A.contentWindow.document.documentElement).backgroundColor):He.TRANSPARENT,r=A.contentWindow.document.body?AB(getComputedStyle(A.contentWindow.document.body).backgroundColor):He.TRANSPARENT;e.backgroundColor=ee(t)?ee(r)?e.styles.backgroundColor:r:t}}catch(A){}return e}function nB(A){return"STYLE"===A.tagName}var BB=["OL","UL","MENU"],sB=function(A,e,t){for(var r=A.firstChild,n=void 0;r;r=n)if(n=r.nextSibling,QB(r)&&0<r.data.trim().length)e.textNodes.push(new Hn(r,e.styles));else if(wB(r)){var B=oB(r);B.styles.isVisible()&&(aB(r,B,t)?B.flags|=4:cB(B.styles)&&(B.flags|=2),-1!==BB.indexOf(r.tagName)&&(B.flags|=8),e.elements.push(B),dB(r)||gB(r)||fB(r)||sB(r,B,t))}},oB=function(A){return hB(A)?new Nn(A):FB(A)?new Tn(A):gB(A)?new Ln(A):UB(A)?new Dn(A):lB(A)?new Mn(A):CB(A)?new Gn(A):fB(A)?new Yn(A):dB(A)?new jn(A):HB(A)?new tB(A):new ln(A)},iB=function(A){var e=oB(A);return e.flags|=4,sB(A,e,e),e},aB=function(A,e,t){return e.styles.isPositionedWithZIndex()||e.styles.opacity<1||e.styles.isTransformed()||EB(A)&&t.styles.isTransparent()},cB=function(A){return A.isPositioned()||A.isFloating()},QB=function(A){return A.nodeType===Node.TEXT_NODE},wB=function(A){return A.nodeType===Node.ELEMENT_NODE},uB=function(A){return void 0!==A.style},UB=function(A){return"LI"===A.tagName},lB=function(A){return"OL"===A.tagName},CB=function(A){return"INPUT"===A.tagName},gB=function(A){return"svg"===A.tagName},EB=function(A){return"BODY"===A.tagName},FB=function(A){return"CANVAS"===A.tagName},hB=function(A){return"IMG"===A.tagName},HB=function(A){return"IFRAME"===A.tagName},dB=function(A){return"TEXTAREA"===A.tagName},fB=function(A){return"SELECT"===A.tagName},pB=(NB.prototype.getCounterValue=function(A){var e=this.counters[A];return e&&e.length?e[e.length-1]:1},NB.prototype.getCounterValues=function(A){var e=this.counters[A];return e||[]},NB.prototype.pop=function(A){var e=this;A.forEach(function(A){return e.counters[A].pop()})},NB.prototype.parse=function(A){var t=this,e=A.counterIncrement,r=A.counterReset,n=!0;null!==e&&e.forEach(function(A){var e=t.counters[A.counter];e&&0!==A.increment&&(n=!1,e[Math.max(0,e.length-1)]+=A.increment)});var B=[];return n&&r.forEach(function(A){var e=t.counters[A.counter];B.push(A.counter),e||(e=t.counters[A.counter]=[]),e.push(A.reset)}),B},NB);function NB(){this.counters={}}function KB(r,A,e,n,t,B){return r<A||e<r?yB(r,t,0<B.length):n.integers.reduce(function(A,e,t){for(;e<=r;)r-=e,A+=n.values[t];return A},"")+B}function IB(A,e,t,r){for(var n="";t||A--,n=r(A)+n,e<=(A/=e)*e;);return n}function TB(A,e,t,r,n){var B=t-e+1;return(A<0?"-":"")+(IB(Math.abs(A),B,r,function(A){return l(Math.floor(A%B)+e)})+n)}function mB(A,e,t){void 0===t&&(t=". ");var r=e.length;return IB(Math.abs(A),r,!1,function(A){return e[Math.floor(A%r)]})+t}function RB(A,e,t,r,n,B){if(A<-9999||9999<A)return yB(A,tr.CJK_DECIMAL,0<n.length);var s=Math.abs(A),o=n;if(0===s)return e[0]+o;for(var i=0;0<s&&i<=4;i++){var a=s%10;0==a&&An(B,1)&&""!==o?o=e[a]+o:1<a||1==a&&0===i||1==a&&1===i&&An(B,2)||1==a&&1===i&&An(B,4)&&100<A||1==a&&1<i&&An(B,8)?o=e[a]+(0<i?t[i-1]:"")+o:1==a&&0<i&&(o=t[i-1]+o),s=Math.floor(s/10)}return(A<0?r:"")+o}var LB,vB,OB={integers:[1e3,900,500,400,100,90,50,40,10,9,5,4,1],values:["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"]},DB={integers:[9e3,8e3,7e3,6e3,5e3,4e3,3e3,2e3,1e3,900,800,700,600,500,400,300,200,100,90,80,70,60,50,40,30,20,10,9,8,7,6,5,4,3,2,1],values:["Ք","Փ","Ւ","Ց","Ր","Տ","Վ","Ս","Ռ","Ջ","Պ","Չ","Ո","Շ","Ն","Յ","Մ","Ճ","Ղ","Ձ","Հ","Կ","Ծ","Խ","Լ","Ի","Ժ","Թ","Ը","Է","Զ","Ե","Դ","Գ","Բ","Ա"]},bB={integers:[1e4,9e3,8e3,7e3,6e3,5e3,4e3,3e3,2e3,1e3,400,300,200,100,90,80,70,60,50,40,30,20,19,18,17,16,15,10,9,8,7,6,5,4,3,2,1],values:["י׳","ט׳","ח׳","ז׳","ו׳","ה׳","ד׳","ג׳","ב׳","א׳","ת","ש","ר","ק","צ","פ","ע","ס","נ","מ","ל","כ","יט","יח","יז","טז","טו","י","ט","ח","ז","ו","ה","ד","ג","ב","א"]},SB={integers:[1e4,9e3,8e3,7e3,6e3,5e3,4e3,3e3,2e3,1e3,900,800,700,600,500,400,300,200,100,90,80,70,60,50,40,30,20,10,9,8,7,6,5,4,3,2,1],values:["ჵ","ჰ","ჯ","ჴ","ხ","ჭ","წ","ძ","ც","ჩ","შ","ყ","ღ","ქ","ფ","ჳ","ტ","ს","რ","ჟ","პ","ო","ჲ","ნ","მ","ლ","კ","ი","თ","ჱ","ზ","ვ","ე","დ","გ","ბ","ა"]},MB="마이너스",yB=function(A,e,t){var r=t?". ":"",n=t?"、":"",B=t?", ":"",s=t?" ":"";switch(e){case tr.DISC:return"•"+s;case tr.CIRCLE:return"◦"+s;case tr.SQUARE:return"◾"+s;case tr.DECIMAL_LEADING_ZERO:var o=TB(A,48,57,!0,r);return o.length<4?"0"+o:o;case tr.CJK_DECIMAL:return mB(A,"〇一二三四五六七八九",n);case tr.LOWER_ROMAN:return KB(A,1,3999,OB,tr.DECIMAL,r).toLowerCase();case tr.UPPER_ROMAN:return KB(A,1,3999,OB,tr.DECIMAL,r);case tr.LOWER_GREEK:return TB(A,945,969,!1,r);case tr.LOWER_ALPHA:return TB(A,97,122,!1,r);case tr.UPPER_ALPHA:return TB(A,65,90,!1,r);case tr.ARABIC_INDIC:return TB(A,1632,1641,!0,r);case tr.ARMENIAN:case tr.UPPER_ARMENIAN:return KB(A,1,9999,DB,tr.DECIMAL,r);case tr.LOWER_ARMENIAN:return KB(A,1,9999,DB,tr.DECIMAL,r).toLowerCase();case tr.BENGALI:return TB(A,2534,2543,!0,r);case tr.CAMBODIAN:case tr.KHMER:return TB(A,6112,6121,!0,r);case tr.CJK_EARTHLY_BRANCH:return mB(A,"子丑寅卯辰巳午未申酉戌亥",n);case tr.CJK_HEAVENLY_STEM:return mB(A,"甲乙丙丁戊己庚辛壬癸",n);case tr.CJK_IDEOGRAPHIC:case tr.TRAD_CHINESE_INFORMAL:return RB(A,"零一二三四五六七八九","十百千萬","負",n,14);case tr.TRAD_CHINESE_FORMAL:return RB(A,"零壹貳參肆伍陸柒捌玖","拾佰仟萬","負",n,15);case tr.SIMP_CHINESE_INFORMAL:return RB(A,"零一二三四五六七八九","十百千萬","负",n,14);case tr.SIMP_CHINESE_FORMAL:return RB(A,"零壹贰叁肆伍陆柒捌玖","拾佰仟萬","负",n,15);case tr.JAPANESE_INFORMAL:return RB(A,"〇一二三四五六七八九","十百千万","マイナス",n,0);case tr.JAPANESE_FORMAL:return RB(A,"零壱弐参四伍六七八九","拾百千万","マイナス",n,7);case tr.KOREAN_HANGUL_FORMAL:return RB(A,"영일이삼사오육칠팔구","십백천만",MB,B,7);case tr.KOREAN_HANJA_INFORMAL:return RB(A,"零一二三四五六七八九","十百千萬",MB,B,0);case tr.KOREAN_HANJA_FORMAL:return RB(A,"零壹貳參四五六七八九","拾百千",MB,B,7);case tr.DEVANAGARI:return TB(A,2406,2415,!0,r);case tr.GEORGIAN:return KB(A,1,19999,SB,tr.DECIMAL,r);case tr.GUJARATI:return TB(A,2790,2799,!0,r);case tr.GURMUKHI:return TB(A,2662,2671,!0,r);case tr.HEBREW:return KB(A,1,10999,bB,tr.DECIMAL,r);case tr.HIRAGANA:return mB(A,"あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん");case tr.HIRAGANA_IROHA:return mB(A,"いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす");case tr.KANNADA:return TB(A,3302,3311,!0,r);case tr.KATAKANA:return mB(A,"アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン",n);case tr.KATAKANA_IROHA:return mB(A,"イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス",n);case tr.LAO:return TB(A,3792,3801,!0,r);case tr.MONGOLIAN:return TB(A,6160,6169,!0,r);case tr.MYANMAR:return TB(A,4160,4169,!0,r);case tr.ORIYA:return TB(A,2918,2927,!0,r);case tr.PERSIAN:return TB(A,1776,1785,!0,r);case tr.TAMIL:return TB(A,3046,3055,!0,r);case tr.TELUGU:return TB(A,3174,3183,!0,r);case tr.THAI:return TB(A,3664,3673,!0,r);case tr.TIBETAN:return TB(A,3872,3881,!0,r);case tr.DECIMAL:default:return TB(A,48,57,!0,r)}},_B="data-html2canvas-ignore",PB=(xB.prototype.toIFrame=function(A,t){var e=this,r=XB(A,t);if(!r.contentWindow)return Promise.reject("Unable to find iframe window");var n=A.defaultView.pageXOffset,B=A.defaultView.pageYOffset,s=r.contentWindow,o=s.document,i=JB(r).then(function(){return a(e,void 0,void 0,function(){var e;return S(this,function(A){switch(A.label){case 0:return this.scrolledElements.forEach(YB),s&&(s.scrollTo(t.left,t.top),!/(iPad|iPhone|iPod)/g.test(navigator.userAgent)||s.scrollY===t.top&&s.scrollX===t.left||(o.documentElement.style.top=-t.top+"px",o.documentElement.style.left=-t.left+"px",o.documentElement.style.position="absolute")),e=this.options.onclone,void 0===this.clonedReferenceElement?[2,Promise.reject("Error finding the "+this.referenceElement.nodeName+" in the cloned document")]:o.fonts&&o.fonts.ready?[4,o.fonts.ready]:[3,2];case 1:A.sent(),A.label=2;case 2:return"function"==typeof e?[2,Promise.resolve().then(function(){return e(o)}).then(function(){return r})]:[2,r]}})})});return o.open(),o.write(kB(document.doctype)+"<html></html>"),WB(this.referenceElement.ownerDocument,n,B),o.replaceChild(o.adoptNode(this.documentElement),o.documentElement),o.close(),i},xB.prototype.createElementClone=function(A){return FB(A)?this.createCanvasClone(A):nB(A)?this.createStyleClone(A):A.cloneNode(!1)},xB.prototype.createStyleClone=function(A){try{var e=A.sheet;if(e&&e.cssRules){var t=[].slice.call(e.cssRules,0).reduce(function(A,e){return e&&"string"==typeof e.cssText?A+e.cssText:A},""),r=A.cloneNode(!1);return r.textContent=t,r}}catch(A){if(De.getInstance(this.options.id).error("Unable to access cssRules property",A),"SecurityError"!==A.name)throw A}return A.cloneNode(!1)},xB.prototype.createCanvasClone=function(A){if(this.options.inlineImages&&A.ownerDocument){var e=A.ownerDocument.createElement("img");try{return e.src=A.toDataURL(),e}catch(A){De.getInstance(this.options.id).info("Unable to clone canvas contents, canvas is tainted")}}var t=A.cloneNode(!1);try{t.width=A.width,t.height=A.height;var r=A.getContext("2d"),n=t.getContext("2d");return n&&(r?n.putImageData(r.getImageData(0,0,A.width,A.height),0,0):n.drawImage(A,0,0)),t}catch(A){}return t},xB.prototype.cloneNode=function(A){if(QB(A))return document.createTextNode(A.data);if(!A.ownerDocument)return A.cloneNode(!1);var e=A.ownerDocument.defaultView;if(uB(A)&&e){var t=this.createElementClone(A),r=e.getComputedStyle(A),n=e.getComputedStyle(A,":before"),B=e.getComputedStyle(A,":after");this.referenceElement===A&&(this.clonedReferenceElement=t),EB(t)&&$B(t);for(var s=this.counters.parse(new un(r)),o=this.resolvePseudoContent(A,t,n,LB.BEFORE),i=A.firstChild;i;i=i.nextSibling)wB(i)&&("SCRIPT"===i.tagName||i.hasAttribute(_B)||"function"==typeof this.options.ignoreElements&&this.options.ignoreElements(i))||this.options.copyStyles&&wB(i)&&nB(i)||t.appendChild(this.cloneNode(i));o&&t.insertBefore(o,t.firstChild);var a=this.resolvePseudoContent(A,t,B,LB.AFTER);return a&&t.appendChild(a),this.counters.pop(s),r&&this.options.copyStyles&&!HB(A)&&GB(r,t),0===A.scrollTop&&0===A.scrollLeft||this.scrolledElements.push([t,A.scrollLeft,A.scrollTop]),(dB(A)||fB(A))&&(dB(t)||fB(t))&&(t.value=A.value),t}return A.cloneNode(!1)},xB.prototype.resolvePseudoContent=function(U,A,e,t){var l=this;if(e){var r=e.content,C=A.ownerDocument;if(C&&r&&"none"!==r&&"-moz-alt-content"!==r&&"none"!==e.display){this.counters.parse(new un(e));var g=new wn(e),E=C.createElement("html2canvaspseudoelement");return GB(e,E),g.content.forEach(function(A){if(A.type===sA.STRING_TOKEN)E.appendChild(C.createTextNode(A.value));else if(A.type===sA.URL_TOKEN){var e=C.createElement("img");e.src=A.value,e.style.opacity="1",E.appendChild(e)}else if(A.type===sA.FUNCTION){if("attr"===A.name){var t=A.values.filter(zA);t.length&&E.appendChild(C.createTextNode(U.getAttribute(t[0].value)||""))}else if("counter"===A.name){var r=A.values.filter(kA),n=r[0],B=r[1];if(n&&zA(n)){var s=l.counters.getCounterValue(n.value),o=B&&zA(B)?ir.parse(B.value):tr.DECIMAL;E.appendChild(C.createTextNode(yB(s,o,!1)))}}else if("counters"===A.name){var i=A.values.filter(kA),a=(n=i[0],i[1]);if(B=i[2],n&&zA(n)){var c=l.counters.getCounterValues(n.value),Q=B&&zA(B)?ir.parse(B.value):tr.DECIMAL,w=a&&a.type===sA.STRING_TOKEN?a.value:"",u=c.map(function(A){return yB(A,Q,!1)}).join(w);E.appendChild(C.createTextNode(u))}}}else if(A.type===sA.IDENT_TOKEN)switch(A.value){case"open-quote":E.appendChild(C.createTextNode(en(g.quotes,l.quoteDepth++,!0)));break;case"close-quote":E.appendChild(C.createTextNode(en(g.quotes,--l.quoteDepth,!1)));break;default:E.appendChild(C.createTextNode(A.value))}}),E.className=qB+" "+ZB,A.className+=t===LB.BEFORE?" "+qB:" "+ZB,E}}},xB.destroy=function(A){return!!A.parentNode&&(A.parentNode.removeChild(A),!0)},xB);function xB(A,e){if(this.options=e,this.scrolledElements=[],this.referenceElement=A,this.counters=new pB,this.quoteDepth=0,!A.ownerDocument)throw new Error("Cloned element does not have an owner document");this.documentElement=this.cloneNode(A.ownerDocument.documentElement)}(vB=LB||(LB={}))[vB.BEFORE=0]="BEFORE",vB[vB.AFTER=1]="AFTER";var VB,zB,XB=function(A,e){var t=A.createElement("iframe");return t.className="html2canvas-container",t.style.visibility="hidden",t.style.position="fixed",t.style.left="-10000px",t.style.top="0px",t.style.border="0",t.width=e.width.toString(),t.height=e.height.toString(),t.scrolling="no",t.setAttribute(_B,"true"),A.body.appendChild(t),t},JB=function(n){return new Promise(function(e,A){var t=n.contentWindow;if(!t)return A("No window assigned for iframe");var r=t.document;t.onload=n.onload=r.onreadystatechange=function(){t.onload=n.onload=r.onreadystatechange=null;var A=setInterval(function(){0<r.body.childNodes.length&&"complete"===r.readyState&&(clearInterval(A),e(n))},50)}})},GB=function(A,e){for(var t=A.length-1;0<=t;t--){var r=A.item(t);"content"!==r&&e.style.setProperty(r,A.getPropertyValue(r))}return e},kB=function(A){var e="";return A&&(e+="<!DOCTYPE ",A.name&&(e+=A.name),A.internalSubset&&(e+=A.internalSubset),A.publicId&&(e+='"'+A.publicId+'"'),A.systemId&&(e+='"'+A.systemId+'"'),e+=">"),e},WB=function(A,e,t){A&&A.defaultView&&(e!==A.defaultView.pageXOffset||t!==A.defaultView.pageYOffset)&&A.defaultView.scrollTo(e,t)},YB=function(A){var e=A[0],t=A[1],r=A[2];e.scrollLeft=t,e.scrollTop=r},qB="___html2canvas___pseudoelement_before",ZB="___html2canvas___pseudoelement_after",jB='{\n    content: "" !important;\n    display: none !important;\n}',$B=function(A){As(A,"."+qB+":before"+jB+"\n         ."+ZB+":after"+jB)},As=function(A,e){var t=A.ownerDocument;if(t){var r=t.createElement("style");r.textContent=e,A.appendChild(r)}};(zB=VB||(VB={}))[zB.VECTOR=0]="VECTOR",zB[zB.BEZIER_CURVE=1]="BEZIER_CURVE";function es(A,t){return A.length===t.length&&A.some(function(A,e){return A===t[e]})}var ts=(rs.prototype.add=function(A,e){return new rs(this.x+A,this.y+e)},rs);function rs(A,e){this.type=VB.VECTOR,this.x=A,this.y=e}function ns(A,e,t){return new ts(A.x+(e.x-A.x)*t,A.y+(e.y-A.y)*t)}var Bs=(ss.prototype.subdivide=function(A,e){var t=ns(this.start,this.startControl,A),r=ns(this.startControl,this.endControl,A),n=ns(this.endControl,this.end,A),B=ns(t,r,A),s=ns(r,n,A),o=ns(B,s,A);return e?new ss(this.start,t,B,o):new ss(o,s,n,this.end)},ss.prototype.add=function(A,e){return new ss(this.start.add(A,e),this.startControl.add(A,e),this.endControl.add(A,e),this.end.add(A,e))},ss.prototype.reverse=function(){return new ss(this.end,this.endControl,this.startControl,this.start)},ss);function ss(A,e,t,r){this.type=VB.BEZIER_CURVE,this.start=A,this.startControl=e,this.endControl=t,this.end=r}function os(A){return A.type===VB.BEZIER_CURVE}var is,as,cs=function(A){var e=A.styles,t=A.bounds,r=jA(e.borderTopLeftRadius,t.width,t.height),n=r[0],B=r[1],s=jA(e.borderTopRightRadius,t.width,t.height),o=s[0],i=s[1],a=jA(e.borderBottomRightRadius,t.width,t.height),c=a[0],Q=a[1],w=jA(e.borderBottomLeftRadius,t.width,t.height),u=w[0],U=w[1],l=[];l.push((n+o)/t.width),l.push((u+c)/t.width),l.push((B+U)/t.height),l.push((i+Q)/t.height);var C=Math.max.apply(Math,l);1<C&&(n/=C,B/=C,o/=C,i/=C,c/=C,Q/=C,u/=C,U/=C);var g=t.width-o,E=t.height-Q,F=t.width-c,h=t.height-U,H=e.borderTopWidth,d=e.borderRightWidth,f=e.borderBottomWidth,p=e.borderLeftWidth,N=ae(e.paddingTop,A.bounds.width),K=ae(e.paddingRight,A.bounds.width),I=ae(e.paddingBottom,A.bounds.width),T=ae(e.paddingLeft,A.bounds.width);this.topLeftBorderBox=0<n||0<B?us(t.left,t.top,n,B,is.TOP_LEFT):new ts(t.left,t.top),this.topRightBorderBox=0<o||0<i?us(t.left+g,t.top,o,i,is.TOP_RIGHT):new ts(t.left+t.width,t.top),this.bottomRightBorderBox=0<c||0<Q?us(t.left+F,t.top+E,c,Q,is.BOTTOM_RIGHT):new ts(t.left+t.width,t.top+t.height),this.bottomLeftBorderBox=0<u||0<U?us(t.left,t.top+h,u,U,is.BOTTOM_LEFT):new ts(t.left,t.top+t.height),this.topLeftPaddingBox=0<n||0<B?us(t.left+p,t.top+H,Math.max(0,n-p),Math.max(0,B-H),is.TOP_LEFT):new ts(t.left+p,t.top+H),this.topRightPaddingBox=0<o||0<i?us(t.left+Math.min(g,t.width+p),t.top+H,g>t.width+p?0:o-p,i-H,is.TOP_RIGHT):new ts(t.left+t.width-d,t.top+H),this.bottomRightPaddingBox=0<c||0<Q?us(t.left+Math.min(F,t.width-p),t.top+Math.min(E,t.height+H),Math.max(0,c-d),Q-f,is.BOTTOM_RIGHT):new ts(t.left+t.width-d,t.top+t.height-f),this.bottomLeftPaddingBox=0<u||0<U?us(t.left+p,t.top+h,Math.max(0,u-p),U-f,is.BOTTOM_LEFT):new ts(t.left+p,t.top+t.height-f),this.topLeftContentBox=0<n||0<B?us(t.left+p+T,t.top+H+N,Math.max(0,n-(p+T)),Math.max(0,B-(H+N)),is.TOP_LEFT):new ts(t.left+p+T,t.top+H+N),this.topRightContentBox=0<o||0<i?us(t.left+Math.min(g,t.width+p+T),t.top+H+N,g>t.width+p+T?0:o-p+T,i-(H+N),is.TOP_RIGHT):new ts(t.left+t.width-(d+K),t.top+H+N),this.bottomRightContentBox=0<c||0<Q?us(t.left+Math.min(F,t.width-(p+T)),t.top+Math.min(E,t.height+H+N),Math.max(0,c-(d+K)),Q-(f+I),is.BOTTOM_RIGHT):new ts(t.left+t.width-(d+K),t.top+t.height-(f+I)),this.bottomLeftContentBox=0<u||0<U?us(t.left+p+T,t.top+h,Math.max(0,u-(p+T)),U-(f+I),is.BOTTOM_LEFT):new ts(t.left+p+T,t.top+t.height-(f+I))};(as=is||(is={}))[as.TOP_LEFT=0]="TOP_LEFT",as[as.TOP_RIGHT=1]="TOP_RIGHT",as[as.BOTTOM_RIGHT=2]="BOTTOM_RIGHT",as[as.BOTTOM_LEFT=3]="BOTTOM_LEFT";function Qs(A){return[A.topLeftBorderBox,A.topRightBorderBox,A.bottomRightBorderBox,A.bottomLeftBorderBox]}function ws(A){return[A.topLeftPaddingBox,A.topRightPaddingBox,A.bottomRightPaddingBox,A.bottomLeftPaddingBox]}var us=function(A,e,t,r,n){var B=(Math.sqrt(2)-1)/3*4,s=t*B,o=r*B,i=A+t,a=e+r;switch(n){case is.TOP_LEFT:return new Bs(new ts(A,a),new ts(A,a-o),new ts(i-s,e),new ts(i,e));case is.TOP_RIGHT:return new Bs(new ts(A,e),new ts(A+s,e),new ts(i,a-o),new ts(i,a));case is.BOTTOM_RIGHT:return new Bs(new ts(i,e),new ts(i,e+o),new ts(A+s,a),new ts(A,a));case is.BOTTOM_LEFT:default:return new Bs(new ts(i,a),new ts(i-s,a),new ts(A,e+o),new ts(A,e))}},Us=function(A,e,t){this.type=0,this.offsetX=A,this.offsetY=e,this.matrix=t,this.target=6},ls=function(A,e){this.type=1,this.target=e,this.path=A},Cs=function(A){this.element=A,this.inlineLevel=[],this.nonInlineLevel=[],this.negativeZIndex=[],this.zeroOrAutoZIndexOrTransformedOrOpacity=[],this.positiveZIndex=[],this.nonPositionedFloats=[],this.nonPositionedInlineLevel=[]},gs=(Es.prototype.getParentEffects=function(){var A=this.effects.slice(0);if(this.container.styles.overflowX!==sr.VISIBLE){var e=Qs(this.curves),t=ws(this.curves);es(e,t)||A.push(new ls(t,6))}return A},Es);function Es(A,e){if(this.container=A,this.effects=e.slice(0),this.curves=new cs(A),null!==A.styles.transform){var t=A.bounds.left+A.styles.transformOrigin[0].number,r=A.bounds.top+A.styles.transformOrigin[1].number,n=A.styles.transform;this.effects.push(new Us(t,r,n))}if(A.styles.overflowX!==sr.VISIBLE){var B=Qs(this.curves),s=ws(this.curves);es(B,s)?this.effects.push(new ls(B,6)):(this.effects.push(new ls(B,2)),this.effects.push(new ls(s,4)))}}function Fs(A){var e=A.bounds,t=A.styles;return e.add(t.borderLeftWidth,t.borderTopWidth,-(t.borderRightWidth+t.borderLeftWidth),-(t.borderTopWidth+t.borderBottomWidth))}function hs(A){var e=A.styles,t=A.bounds,r=ae(e.paddingLeft,t.width),n=ae(e.paddingRight,t.width),B=ae(e.paddingTop,t.width),s=ae(e.paddingBottom,t.width);return t.add(r+e.borderLeftWidth,B+e.borderTopWidth,-(e.borderRightWidth+e.borderLeftWidth+r+n),-(e.borderTopWidth+e.borderBottomWidth+B+s))}function Hs(A,e,t){var r=function(A,e){return 0===A?e.bounds:2===A?hs(e):Fs(e)}(Ts(A.styles.backgroundOrigin,e),A),n=function(A,e){return A===Ee.BORDER_BOX?e.bounds:A===Ee.CONTENT_BOX?hs(e):Fs(e)}(Ts(A.styles.backgroundClip,e),A),B=Is(Ts(A.styles.backgroundSize,e),t,r),s=B[0],o=B[1],i=jA(Ts(A.styles.backgroundPosition,e),r.width-s,r.height-o);return[ms(Ts(A.styles.backgroundRepeat,e),i,B,r,n),Math.round(r.left+i[0]),Math.round(r.top+i[1]),s,o]}function ds(A){return zA(A)&&A.value===Ut.AUTO}function fs(A){return"number"==typeof A}var ps=function(c,Q,w,u){c.container.elements.forEach(function(A){var e=An(A.flags,4),t=An(A.flags,2),r=new gs(A,c.getParentEffects());An(A.styles.display,2048)&&u.push(r);var n=An(A.flags,8)?[]:u;if(e||t){var B=e||A.styles.isPositioned()?w:Q,s=new Cs(r);if(A.styles.isPositioned()||A.styles.opacity<1||A.styles.isTransformed()){var o=A.styles.zIndex.order;if(o<0){var i=0;B.negativeZIndex.some(function(A,e){return o>A.element.container.styles.zIndex.order?(i=e,!1):0<i}),B.negativeZIndex.splice(i,0,s)}else if(0<o){var a=0;B.positiveZIndex.some(function(A,e){return o>A.element.container.styles.zIndex.order?(a=e+1,!1):0<a}),B.positiveZIndex.splice(a,0,s)}else B.zeroOrAutoZIndexOrTransformedOrOpacity.push(s)}else A.styles.isFloating()?B.nonPositionedFloats.push(s):B.nonPositionedInlineLevel.push(s);ps(r,s,e?s:w,n)}else A.styles.isInlineLevel()?Q.inlineLevel.push(r):Q.nonInlineLevel.push(r),ps(r,Q,w,n);An(A.flags,8)&&Ns(A,n)})},Ns=function(A,e){for(var t=A instanceof Mn?A.start:1,r=A instanceof Mn&&A.reversed,n=0;n<e.length;n++){var B=e[n];B.container instanceof Dn&&"number"==typeof B.container.value&&0!==B.container.value&&(t=B.container.value),B.listValue=yB(t,B.container.styles.listStyleType,!0),t+=r?-1:1}},Ks=function(A,e,t,r){var n=[];return os(A)?n.push(A.subdivide(.5,!1)):n.push(A),os(t)?n.push(t.subdivide(.5,!0)):n.push(t),os(r)?n.push(r.subdivide(.5,!0).reverse()):n.push(r),os(e)?n.push(e.subdivide(.5,!1).reverse()):n.push(e),n},Is=function(A,e,t){var r=e[0],n=e[1],B=e[2],s=A[0],o=A[1];if(qA(s)&&o&&qA(o))return[ae(s,t.width),ae(o,t.height)];var i=fs(B);if(zA(s)&&(s.value===Ut.CONTAIN||s.value===Ut.COVER))return fs(B)?t.width/t.height<B!=(s.value===Ut.COVER)?[t.width,t.width/B]:[t.height*B,t.height]:[t.width,t.height];var a=fs(r),c=fs(n),Q=a||c;if(ds(s)&&(!o||ds(o)))return a&&c?[r,n]:i||Q?Q&&i?[a?r:n*B,c?n:r/B]:[a?r:t.width,c?n:t.height]:[t.width,t.height];if(i){var w=0,u=0;return qA(s)?w=ae(s,t.width):qA(o)&&(u=ae(o,t.height)),ds(s)?w=u*B:o&&!ds(o)||(u=w/B),[w,u]}var U=null,l=null;if(qA(s)?U=ae(s,t.width):o&&qA(o)&&(l=ae(o,t.height)),null===U||o&&!ds(o)||(l=a&&c?U/r*n:t.height),null!==l&&ds(s)&&(U=a&&c?l/n*r:t.width),null!==U&&null!==l)return[U,l];throw new Error("Unable to calculate background-size for element")},Ts=function(A,e){var t=A[e];return void 0===t?A[0]:t},ms=function(A,e,t,r,n){var B=e[0],s=e[1],o=t[0],i=t[1];switch(A){case it.REPEAT_X:return[new ts(Math.round(r.left),Math.round(r.top+s)),new ts(Math.round(r.left+r.width),Math.round(r.top+s)),new ts(Math.round(r.left+r.width),Math.round(i+r.top+s)),new ts(Math.round(r.left),Math.round(i+r.top+s))];case it.REPEAT_Y:return[new ts(Math.round(r.left+B),Math.round(r.top)),new ts(Math.round(r.left+B+o),Math.round(r.top)),new ts(Math.round(r.left+B+o),Math.round(r.height+r.top)),new ts(Math.round(r.left+B),Math.round(r.height+r.top))];case it.NO_REPEAT:return[new ts(Math.round(r.left+B),Math.round(r.top+s)),new ts(Math.round(r.left+B+o),Math.round(r.top+s)),new ts(Math.round(r.left+B+o),Math.round(r.top+s+i)),new ts(Math.round(r.left+B),Math.round(r.top+s+i))];default:return[new ts(Math.round(n.left),Math.round(n.top)),new ts(Math.round(n.left+n.width),Math.round(n.top)),new ts(Math.round(n.left+n.width),Math.round(n.height+n.top)),new ts(Math.round(n.left),Math.round(n.height+n.top))]}},Rs="Hidden Text",Ls=(vs.prototype.parseMetrics=function(A,e){var t=this._document.createElement("div"),r=this._document.createElement("img"),n=this._document.createElement("span"),B=this._document.body;t.style.visibility="hidden",t.style.fontFamily=A,t.style.fontSize=e,t.style.margin="0",t.style.padding="0",B.appendChild(t),r.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",r.width=1,r.height=1,r.style.margin="0",r.style.padding="0",r.style.verticalAlign="baseline",n.style.fontFamily=A,n.style.fontSize=e,n.style.margin="0",n.style.padding="0",n.appendChild(this._document.createTextNode(Rs)),t.appendChild(n),t.appendChild(r);var s=r.offsetTop-n.offsetTop+2;t.removeChild(n),t.appendChild(this._document.createTextNode(Rs)),t.style.lineHeight="normal",r.style.verticalAlign="super";var o=r.offsetTop-t.offsetTop+2;return B.removeChild(t),{baseline:s,middle:o}},vs.prototype.getMetrics=function(A,e){var t=A+" "+e;return void 0===this._data[t]&&(this._data[t]=this.parseMetrics(A,e)),this._data[t]},vs);function vs(A){this._data={},this._document=A}var Os=(Ds.prototype.applyEffects=function(A,e){for(var t=this;this._activeEffects.length;)this.popEffect();A.filter(function(A){return An(A.target,e)}).forEach(function(A){return t.applyEffect(A)})},Ds.prototype.applyEffect=function(A){this.ctx.save(),function(A){return 0===A.type}(A)&&(this.ctx.translate(A.offsetX,A.offsetY),this.ctx.transform(A.matrix[0],A.matrix[1],A.matrix[2],A.matrix[3],A.matrix[4],A.matrix[5]),this.ctx.translate(-A.offsetX,-A.offsetY)),function(A){return 1===A.type}(A)&&(this.path(A.path),this.ctx.clip()),this._activeEffects.push(A)},Ds.prototype.popEffect=function(){this._activeEffects.pop(),this.ctx.restore()},Ds.prototype.renderStack=function(t){return a(this,void 0,void 0,function(){var e;return S(this,function(A){switch(A.label){case 0:return(e=t.element.container.styles).isVisible()?(this.ctx.globalAlpha=e.opacity,[4,this.renderStackContent(t)]):[3,2];case 1:A.sent(),A.label=2;case 2:return[2]}})})},Ds.prototype.renderNode=function(e){return a(this,void 0,void 0,function(){return S(this,function(A){switch(A.label){case 0:return e.container.styles.isVisible()?[4,this.renderNodeBackgroundAndBorders(e)]:[3,3];case 1:return A.sent(),[4,this.renderNodeContent(e)];case 2:A.sent(),A.label=3;case 3:return[2]}})})},Ds.prototype.renderTextWithLetterSpacing=function(t,A){var r=this;0===A?this.ctx.fillText(t.text,t.bounds.left,t.bounds.top+t.bounds.height):c(t.text).map(function(A){return l(A)}).reduce(function(A,e){return r.ctx.fillText(e,A,t.bounds.top+t.bounds.height),A+r.ctx.measureText(e).width},t.bounds.left)},Ds.prototype.createFontStyle=function(A){var e=A.fontVariant.filter(function(A){return"normal"===A||"small-caps"===A}).join(""),t=A.fontFamily.join(", "),r=xA(A.fontSize)?""+A.fontSize.number+A.fontSize.unit:A.fontSize.number+"px";return[[A.fontStyle,e,A.fontWeight,r,t].join(" "),t,r]},Ds.prototype.renderTextNode=function(r,o){return a(this,void 0,void 0,function(){var e,t,n,B,s=this;return S(this,function(A){return e=this.createFontStyle(o),t=e[0],n=e[1],B=e[2],this.ctx.font=t,r.textBounds.forEach(function(r){s.ctx.fillStyle=te(o.color),s.renderTextWithLetterSpacing(r,o.letterSpacing);var A=o.textShadow;A.length&&r.text.trim().length&&(A.slice(0).reverse().forEach(function(A){s.ctx.shadowColor=te(A.color),s.ctx.shadowOffsetX=A.offsetX.number*s.options.scale,s.ctx.shadowOffsetY=A.offsetY.number*s.options.scale,s.ctx.shadowBlur=A.blur.number,s.ctx.fillText(r.text,r.bounds.left,r.bounds.top+r.bounds.height)}),s.ctx.shadowColor="",s.ctx.shadowOffsetX=0,s.ctx.shadowOffsetY=0,s.ctx.shadowBlur=0),o.textDecorationLine.length&&(s.ctx.fillStyle=te(o.textDecorationColor||o.color),o.textDecorationLine.forEach(function(A){switch(A){case 1:var e=s.fontMetrics.getMetrics(n,B).baseline;s.ctx.fillRect(r.bounds.left,Math.round(r.bounds.top+e),r.bounds.width,1);break;case 2:s.ctx.fillRect(r.bounds.left,Math.round(r.bounds.top),r.bounds.width,1);break;case 3:var t=s.fontMetrics.getMetrics(n,B).middle;s.ctx.fillRect(r.bounds.left,Math.ceil(r.bounds.top+t),r.bounds.width,1)}}))}),[2]})})},Ds.prototype.renderReplacedElement=function(A,e,t){if(t&&0<A.intrinsicWidth&&0<A.intrinsicHeight){var r=hs(A),n=ws(e);this.path(n),this.ctx.save(),this.ctx.clip(),this.ctx.drawImage(t,0,0,A.intrinsicWidth,A.intrinsicHeight,r.left,r.top,r.width,r.height),this.ctx.restore()}},Ds.prototype.renderNodeContent=function(l){return a(this,void 0,void 0,function(){var e,t,r,n,B,s,o,i,a,c,Q,w,u,U;return S(this,function(A){switch(A.label){case 0:this.applyEffects(l.effects,4),e=l.container,t=l.curves,r=e.styles,n=0,B=e.textNodes,A.label=1;case 1:return n<B.length?(s=B[n],[4,this.renderTextNode(s,r)]):[3,4];case 2:A.sent(),A.label=3;case 3:return n++,[3,1];case 4:if(!(e instanceof Nn))return[3,8];A.label=5;case 5:return A.trys.push([5,7,,8]),[4,this.options.cache.match(e.src)];case 6:return w=A.sent(),this.renderReplacedElement(e,t,w),[3,8];case 7:return A.sent(),De.getInstance(this.options.id).error("Error loading image "+e.src),[3,8];case 8:if(e instanceof Tn&&this.renderReplacedElement(e,t,e.canvas),!(e instanceof Ln))return[3,12];A.label=9;case 9:return A.trys.push([9,11,,12]),[4,this.options.cache.match(e.svg)];case 10:return w=A.sent(),this.renderReplacedElement(e,t,w),[3,12];case 11:return A.sent(),De.getInstance(this.options.id).error("Error loading svg "+e.svg.substring(0,255)),[3,12];case 12:return e instanceof tB&&e.tree?[4,new Ds({id:this.options.id,scale:this.options.scale,backgroundColor:e.backgroundColor,x:0,y:0,scrollX:0,scrollY:0,width:e.width,height:e.height,cache:this.options.cache,windowWidth:e.width,windowHeight:e.height}).render(e.tree)]:[3,14];case 13:o=A.sent(),e.width&&e.height&&this.ctx.drawImage(o,0,0,e.width,e.height,e.bounds.left,e.bounds.top,e.bounds.width,e.bounds.height),A.label=14;case 14:if(e instanceof Gn&&(i=Math.min(e.bounds.width,e.bounds.height),e.type===Vn?e.checked&&(this.ctx.save(),this.path([new ts(e.bounds.left+.39363*i,e.bounds.top+.79*i),new ts(e.bounds.left+.16*i,e.bounds.top+.5549*i),new ts(e.bounds.left+.27347*i,e.bounds.top+.44071*i),new ts(e.bounds.left+.39694*i,e.bounds.top+.5649*i),new ts(e.bounds.left+.72983*i,e.bounds.top+.23*i),new ts(e.bounds.left+.84*i,e.bounds.top+.34085*i),new ts(e.bounds.left+.39363*i,e.bounds.top+.79*i)]),this.ctx.fillStyle=te(Jn),this.ctx.fill(),this.ctx.restore()):e.type===zn&&e.checked&&(this.ctx.save(),this.ctx.beginPath(),this.ctx.arc(e.bounds.left+i/2,e.bounds.top+i/2,i/4,0,2*Math.PI,!0),this.ctx.fillStyle=te(Jn),this.ctx.fill(),this.ctx.restore())),bs(e)&&e.value.length){switch(this.ctx.font=this.createFontStyle(r)[0],this.ctx.fillStyle=te(r.color),this.ctx.textBaseline="middle",this.ctx.textAlign=Ms(e.styles.textAlign),U=hs(e),a=0,e.styles.textAlign){case Cr.CENTER:a+=U.width/2;break;case Cr.RIGHT:a+=U.width}c=U.add(a,0,0,-U.height/2+1),this.ctx.save(),this.path([new ts(U.left,U.top),new ts(U.left+U.width,U.top),new ts(U.left+U.width,U.top+U.height),new ts(U.left,U.top+U.height)]),this.ctx.clip(),this.renderTextWithLetterSpacing(new Cn(e.value,c),r.letterSpacing),this.ctx.restore(),this.ctx.textBaseline="bottom",this.ctx.textAlign="left"}if(!An(e.styles.display,2048))return[3,20];if(null===e.styles.listStyleImage)return[3,19];if((Q=e.styles.listStyleImage).type!==xe.URL)return[3,18];w=void 0,u=Q.url,A.label=15;case 15:return A.trys.push([15,17,,18]),[4,this.options.cache.match(u)];case 16:return w=A.sent(),this.ctx.drawImage(w,e.bounds.left-(w.width+10),e.bounds.top),[3,18];case 17:return A.sent(),De.getInstance(this.options.id).error("Error loading list-style-image "+u),[3,18];case 18:return[3,20];case 19:l.listValue&&e.styles.listStyleType!==tr.NONE&&(this.ctx.font=this.createFontStyle(r)[0],this.ctx.fillStyle=te(r.color),this.ctx.textBaseline="middle",this.ctx.textAlign="right",U=new I(e.bounds.left,e.bounds.top+ae(e.styles.paddingTop,e.bounds.width),e.bounds.width,function(A,e){return zA(A)&&"normal"===A.value?1.2*e:A.type===sA.NUMBER_TOKEN?e*A.number:qA(A)?ae(A,e):e}(r.lineHeight,r.fontSize.number)/2+1),this.renderTextWithLetterSpacing(new Cn(l.listValue,U),r.letterSpacing),this.ctx.textBaseline="bottom",this.ctx.textAlign="left"),A.label=20;case 20:return[2]}})})},Ds.prototype.renderStackContent=function(C){return a(this,void 0,void 0,function(){var e,t,r,n,B,s,o,i,a,c,Q,w,u,U,l;return S(this,function(A){switch(A.label){case 0:return[4,this.renderNodeBackgroundAndBorders(C.element)];case 1:A.sent(),e=0,t=C.negativeZIndex,A.label=2;case 2:return e<t.length?(l=t[e],[4,this.renderStack(l)]):[3,5];case 3:A.sent(),A.label=4;case 4:return e++,[3,2];case 5:return[4,this.renderNodeContent(C.element)];case 6:A.sent(),r=0,n=C.nonInlineLevel,A.label=7;case 7:return r<n.length?(l=n[r],[4,this.renderNode(l)]):[3,10];case 8:A.sent(),A.label=9;case 9:return r++,[3,7];case 10:B=0,s=C.nonPositionedFloats,A.label=11;case 11:return B<s.length?(l=s[B],[4,this.renderStack(l)]):[3,14];case 12:A.sent(),A.label=13;case 13:return B++,[3,11];case 14:o=0,i=C.nonPositionedInlineLevel,A.label=15;case 15:return o<i.length?(l=i[o],[4,this.renderStack(l)]):[3,18];case 16:A.sent(),A.label=17;case 17:return o++,[3,15];case 18:a=0,c=C.inlineLevel,A.label=19;case 19:return a<c.length?(l=c[a],[4,this.renderNode(l)]):[3,22];case 20:A.sent(),A.label=21;case 21:return a++,[3,19];case 22:Q=0,w=C.zeroOrAutoZIndexOrTransformedOrOpacity,A.label=23;case 23:return Q<w.length?(l=w[Q],[4,this.renderStack(l)]):[3,26];case 24:A.sent(),A.label=25;case 25:return Q++,[3,23];case 26:u=0,U=C.positiveZIndex,A.label=27;case 27:return u<U.length?(l=U[u],[4,this.renderStack(l)]):[3,30];case 28:A.sent(),A.label=29;case 29:return u++,[3,27];case 30:return[2]}})})},Ds.prototype.mask=function(A){this.ctx.beginPath(),this.ctx.moveTo(0,0),this.ctx.lineTo(this.canvas.width,0),this.ctx.lineTo(this.canvas.width,this.canvas.height),this.ctx.lineTo(0,this.canvas.height),this.ctx.lineTo(0,0),this.formatPath(A.slice(0).reverse()),this.ctx.closePath()},Ds.prototype.path=function(A){this.ctx.beginPath(),this.formatPath(A),this.ctx.closePath()},Ds.prototype.formatPath=function(A){var r=this;A.forEach(function(A,e){var t=os(A)?A.start:A;0===e?r.ctx.moveTo(t.x,t.y):r.ctx.lineTo(t.x,t.y),os(A)&&r.ctx.bezierCurveTo(A.startControl.x,A.startControl.y,A.endControl.x,A.endControl.y,A.end.x,A.end.y)})},Ds.prototype.renderRepeat=function(A,e,t,r){this.path(A),this.ctx.fillStyle=e,this.ctx.translate(t,r),this.ctx.fill(),this.ctx.translate(-t,-r)},Ds.prototype.resizeImage=function(A,e,t){if(A.width===e&&A.height===t)return A;var r=this.canvas.ownerDocument.createElement("canvas");return r.width=e,r.height=t,r.getContext("2d").drawImage(A,0,0,A.width,A.height,0,0,e,t),r},Ds.prototype.renderBackgroundImage=function(b){return a(this,void 0,void 0,function(){var O,e,D,t,r,n;return S(this,function(A){switch(A.label){case 0:O=b.styles.backgroundImage.length-1,e=function(e){var t,r,n,B,s,o,i,a,c,Q,w,u,U,l,C,g,E,F,h,H,d,f,p,N,K,I,T,m,R,L,v;return S(this,function(A){switch(A.label){case 0:if(e.type!==xe.URL)return[3,5];t=void 0,r=e.url,A.label=1;case 1:return A.trys.push([1,3,,4]),[4,D.options.cache.match(r)];case 2:return t=A.sent(),[3,4];case 3:return A.sent(),De.getInstance(D.options.id).error("Error loading background-image "+r),[3,4];case 4:return t&&(n=Hs(b,O,[t.width,t.height,t.width/t.height]),g=n[0],f=n[1],p=n[2],h=n[3],H=n[4],l=D.ctx.createPattern(D.resizeImage(t,h,H),"repeat"),D.renderRepeat(g,l,f,p)),[3,6];case 5:!function(A){return A.type===xe.LINEAR_GRADIENT}(e)?function(A){return A.type===xe.RADIAL_GRADIENT}(e)&&(C=Hs(b,O,[null,null,null]),g=C[0],E=C[1],F=C[2],h=C[3],H=C[4],d=0===e.position.length?[oe]:e.position,f=ae(d[0],h),p=ae(d[d.length-1],H),N=function(A,e,t,r,n){var B=0,s=0;switch(A.size){case Bt.CLOSEST_SIDE:A.shape===rt.CIRCLE?B=s=Math.min(Math.abs(e),Math.abs(e-r),Math.abs(t),Math.abs(t-n)):A.shape===rt.ELLIPSE&&(B=Math.min(Math.abs(e),Math.abs(e-r)),s=Math.min(Math.abs(t),Math.abs(t-n)));break;case Bt.CLOSEST_CORNER:if(A.shape===rt.CIRCLE)B=s=Math.min(Ne(e,t),Ne(e,t-n),Ne(e-r,t),Ne(e-r,t-n));else if(A.shape===rt.ELLIPSE){var o=Math.min(Math.abs(t),Math.abs(t-n))/Math.min(Math.abs(e),Math.abs(e-r)),i=Ke(r,n,e,t,!0),a=i[0],c=i[1];s=o*(B=Ne(a-e,(c-t)/o))}break;case Bt.FARTHEST_SIDE:A.shape===rt.CIRCLE?B=s=Math.max(Math.abs(e),Math.abs(e-r),Math.abs(t),Math.abs(t-n)):A.shape===rt.ELLIPSE&&(B=Math.max(Math.abs(e),Math.abs(e-r)),s=Math.max(Math.abs(t),Math.abs(t-n)));break;case Bt.FARTHEST_CORNER:if(A.shape===rt.CIRCLE)B=s=Math.max(Ne(e,t),Ne(e,t-n),Ne(e-r,t),Ne(e-r,t-n));else if(A.shape===rt.ELLIPSE){o=Math.max(Math.abs(t),Math.abs(t-n))/Math.max(Math.abs(e),Math.abs(e-r));var Q=Ke(r,n,e,t,!1);a=Q[0],c=Q[1],s=o*(B=Ne(a-e,(c-t)/o))}}return Array.isArray(A.size)&&(B=ae(A.size[0],r),s=2===A.size.length?ae(A.size[1],n):B),[B,s]}(e,f,p,h,H),K=N[0],I=N[1],0<K&&0<K&&(T=D.ctx.createRadialGradient(E+f,F+p,0,E+f,F+p,K),fe(e.stops,2*K).forEach(function(A){return T.addColorStop(A.stop,te(A.color))}),D.path(g),D.ctx.fillStyle=T,K!==I?(m=b.bounds.left+.5*b.bounds.width,R=b.bounds.top+.5*b.bounds.height,v=1/(L=I/K),D.ctx.save(),D.ctx.translate(m,R),D.ctx.transform(1,0,0,L,0,0),D.ctx.translate(-m,-R),D.ctx.fillRect(E,v*(F-R)+R,h,H*v),D.ctx.restore()):D.ctx.fill())):(B=Hs(b,O,[null,null,null]),g=B[0],f=B[1],p=B[2],h=B[3],H=B[4],s=pe(e.angle,h,H),o=s[0],i=s[1],a=s[2],c=s[3],Q=s[4],(w=document.createElement("canvas")).width=h,w.height=H,u=w.getContext("2d"),U=u.createLinearGradient(i,c,a,Q),fe(e.stops,o).forEach(function(A){return U.addColorStop(A.stop,te(A.color))}),u.fillStyle=U,u.fillRect(0,0,h,H),0<h&&0<H&&(l=D.ctx.createPattern(w,"repeat"),D.renderRepeat(g,l,f,p))),A.label=6;case 6:return O--,[2]}})},D=this,t=0,r=b.styles.backgroundImage.slice(0).reverse(),A.label=1;case 1:return t<r.length?(n=r[t],[5,e(n)]):[3,4];case 2:A.sent(),A.label=3;case 3:return t++,[3,1];case 4:return[2]}})})},Ds.prototype.renderBorder=function(e,t,r){return a(this,void 0,void 0,function(){return S(this,function(A){return this.path(function(A,e){switch(e){case 0:return Ks(A.topLeftBorderBox,A.topLeftPaddingBox,A.topRightBorderBox,A.topRightPaddingBox);case 1:return Ks(A.topRightBorderBox,A.topRightPaddingBox,A.bottomRightBorderBox,A.bottomRightPaddingBox);case 2:return Ks(A.bottomRightBorderBox,A.bottomRightPaddingBox,A.bottomLeftBorderBox,A.bottomLeftPaddingBox);case 3:default:return Ks(A.bottomLeftBorderBox,A.bottomLeftPaddingBox,A.topLeftBorderBox,A.topLeftPaddingBox)}}(r,t)),this.ctx.fillStyle=te(e),this.ctx.fill(),[2]})})},Ds.prototype.renderNodeBackgroundAndBorders=function(c){return a(this,void 0,void 0,function(){var e,t,r,n,B,s,o,i,a=this;return S(this,function(A){switch(A.label){case 0:return this.applyEffects(c.effects,2),e=c.container.styles,t=!ee(e.backgroundColor)||e.backgroundImage.length,r=[{style:e.borderTopStyle,color:e.borderTopColor},{style:e.borderRightStyle,color:e.borderRightColor},{style:e.borderBottomStyle,color:e.borderBottomColor},{style:e.borderLeftStyle,color:e.borderLeftColor}],n=Ss(Ts(e.backgroundClip,0),c.curves),t||e.boxShadow.length?(this.ctx.save(),this.path(n),this.ctx.clip(),ee(e.backgroundColor)||(this.ctx.fillStyle=te(e.backgroundColor),this.ctx.fill()),[4,this.renderBackgroundImage(c.container)]):[3,2];case 1:A.sent(),this.ctx.restore(),e.boxShadow.slice(0).reverse().forEach(function(A){a.ctx.save();var e=Qs(c.curves),t=A.inset?0:1e4,r=function(A,t,r,n,B){return A.map(function(A,e){switch(e){case 0:return A.add(t,r);case 1:return A.add(t+n,r);case 2:return A.add(t+n,r+B);case 3:return A.add(t,r+B)}return A})}(e,-t+(A.inset?1:-1)*A.spread.number,(A.inset?1:-1)*A.spread.number,A.spread.number*(A.inset?-2:2),A.spread.number*(A.inset?-2:2));A.inset?(a.path(e),a.ctx.clip(),a.mask(r)):(a.mask(e),a.ctx.clip(),a.path(r)),a.ctx.shadowOffsetX=A.offsetX.number+t,a.ctx.shadowOffsetY=A.offsetY.number,a.ctx.shadowColor=te(A.color),a.ctx.shadowBlur=A.blur.number,a.ctx.fillStyle=A.inset?te(A.color):"rgba(0,0,0,1)",a.ctx.fill(),a.ctx.restore()}),A.label=2;case 2:s=B=0,o=r,A.label=3;case 3:return s<o.length?(i=o[s]).style===ht.NONE||ee(i.color)?[3,5]:[4,this.renderBorder(i.color,B,c.curves)]:[3,7];case 4:A.sent(),A.label=5;case 5:B++,A.label=6;case 6:return s++,[3,3];case 7:return[2]}})})},Ds.prototype.render=function(t){return a(this,void 0,void 0,function(){var e;return S(this,function(A){switch(A.label){case 0:return this.options.backgroundColor&&(this.ctx.fillStyle=te(this.options.backgroundColor),this.ctx.fillRect(this.options.x-this.options.scrollX,this.options.y-this.options.scrollY,this.options.width,this.options.height)),e=function(A){var e=new gs(A,[]),t=new Cs(e),r=[];return ps(e,t,t,r),Ns(e.container,r),t}(t),[4,this.renderStack(e)];case 1:return A.sent(),this.applyEffects([],2),[2,this.canvas]}})})},Ds);function Ds(A){this._activeEffects=[],this.canvas=A.canvas?A.canvas:document.createElement("canvas"),this.ctx=this.canvas.getContext("2d"),(this.options=A).canvas||(this.canvas.width=Math.floor(A.width*A.scale),this.canvas.height=Math.floor(A.height*A.scale),this.canvas.style.width=A.width+"px",this.canvas.style.height=A.height+"px"),this.fontMetrics=new Ls(document),this.ctx.scale(this.options.scale,this.options.scale),this.ctx.translate(-A.x+A.scrollX,-A.y+A.scrollY),this.ctx.textBaseline="bottom",this._activeEffects=[],De.getInstance(A.id).debug("Canvas renderer initialized ("+A.width+"x"+A.height+" at "+A.x+","+A.y+") with scale "+A.scale)}var bs=function(A){return A instanceof jn||(A instanceof Yn||A instanceof Gn&&A.type!==zn&&A.type!==Vn)},Ss=function(A,e){switch(A){case Ee.BORDER_BOX:return Qs(e);case Ee.CONTENT_BOX:return function(A){return[A.topLeftContentBox,A.topRightContentBox,A.bottomRightContentBox,A.bottomLeftContentBox]}(e);case Ee.PADDING_BOX:default:return ws(e)}},Ms=function(A){switch(A){case Cr.CENTER:return"center";case Cr.RIGHT:return"right";case Cr.LEFT:default:return"left"}},ys=(_s.prototype.render=function(r){return a(this,void 0,void 0,function(){var e,t;return S(this,function(A){switch(A.label){case 0:return e=Le(Math.max(this.options.windowWidth,this.options.width)*this.options.scale,Math.max(this.options.windowHeight,this.options.height)*this.options.scale,this.options.scrollX*this.options.scale,this.options.scrollY*this.options.scale,r),[4,xs(e)];case 1:return t=A.sent(),this.options.backgroundColor&&(this.ctx.fillStyle=te(this.options.backgroundColor),this.ctx.fillRect(0,0,this.options.width*this.options.scale,this.options.height*this.options.scale)),this.ctx.drawImage(t,-this.options.x*this.options.scale,-this.options.y*this.options.scale),[2,this.canvas]}})})},_s);function _s(A){this.canvas=A.canvas?A.canvas:document.createElement("canvas"),this.ctx=this.canvas.getContext("2d"),this.options=A,this.canvas.width=Math.floor(A.width*A.scale),this.canvas.height=Math.floor(A.height*A.scale),this.canvas.style.width=A.width+"px",this.canvas.style.height=A.height+"px",this.ctx.scale(this.options.scale,this.options.scale),this.ctx.translate(-A.x+A.scrollX,-A.y+A.scrollY),De.getInstance(A.id).debug("EXPERIMENTAL ForeignObject renderer initialized ("+A.width+"x"+A.height+" at "+A.x+","+A.y+") with scale "+A.scale)}function Ps(A){return we(_A.create(A).parseComponentValue())}var xs=function(r){return new Promise(function(A,e){var t=new Image;t.onload=function(){A(t)},t.onerror=e,t.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent((new XMLSerializer).serializeToString(r))})};Se.setContext(window);var Vs=function(p,N){return a(void 0,void 0,void 0,function(){var e,t,r,n,B,s,o,i,a,c,Q,w,u,U,l,C,g,E,F,h,H,d,f;return S(this,function(A){switch(A.label){case 0:if(!(e=p.ownerDocument))throw new Error("Element is not attached to a Document");if(!(t=e.defaultView))throw new Error("Document is not attached to a Window");return r=(Math.round(1e3*Math.random())+Date.now()).toString(16),n=EB(p)||function(A){return"HTML"===A.tagName}(p)?function(A){var e=A.body,t=A.documentElement;if(!e||!t)throw new Error("Unable to get document size");var r=Math.max(Math.max(e.scrollWidth,t.scrollWidth),Math.max(e.offsetWidth,t.offsetWidth),Math.max(e.clientWidth,t.clientWidth)),n=Math.max(Math.max(e.scrollHeight,t.scrollHeight),Math.max(e.offsetHeight,t.offsetHeight),Math.max(e.clientHeight,t.clientHeight));return new I(0,0,r,n)}(e):T(p),B=n.width,s=n.height,o=n.left,i=n.top,a=K({},{allowTaint:!1,imageTimeout:15e3,proxy:void 0,useCORS:!1},N),c={backgroundColor:"#ffffff",cache:N.cache?N.cache:Se.create(r,a),logging:!0,removeContainer:!0,foreignObjectRendering:!1,scale:t.devicePixelRatio||1,windowWidth:t.innerWidth,windowHeight:t.innerHeight,scrollX:t.pageXOffset,scrollY:t.pageYOffset,x:o,y:i,width:Math.ceil(B),height:Math.ceil(s),id:r},Q=K({},c,a,N),w=new I(Q.scrollX,Q.scrollY,Q.windowWidth,Q.windowHeight),De.create({id:r,enabled:Q.logging}),De.getInstance(r).debug("Starting document clone"),u=new PB(p,{id:r,onclone:Q.onclone,ignoreElements:Q.ignoreElements,inlineImages:Q.foreignObjectRendering,copyStyles:Q.foreignObjectRendering}),(U=u.clonedReferenceElement)?[4,u.toIFrame(e,w)]:[2,Promise.reject("Unable to find element in cloned iframe")];case 1:return l=A.sent(),C=e.documentElement?Ps(getComputedStyle(e.documentElement).backgroundColor):He.TRANSPARENT,g=e.body?Ps(getComputedStyle(e.body).backgroundColor):He.TRANSPARENT,E=N.backgroundColor,F="string"==typeof E?Ps(E):null===E?He.TRANSPARENT:4294967295,h=p===e.documentElement?ee(C)?ee(g)?F:g:C:F,H={id:r,cache:Q.cache,canvas:Q.canvas,backgroundColor:h,scale:Q.scale,x:Q.x,y:Q.y,scrollX:Q.scrollX,scrollY:Q.scrollY,width:Q.width,height:Q.height,windowWidth:Q.windowWidth,windowHeight:Q.windowHeight},Q.foreignObjectRendering?(De.getInstance(r).debug("Document cloned, using foreign object rendering"),[4,new ys(H).render(U)]):[3,3];case 2:return d=A.sent(),[3,5];case 3:return De.getInstance(r).debug("Document cloned, using computed rendering"),Se.attachInstance(Q.cache),De.getInstance(r).debug("Starting DOM parsing"),f=iB(U),Se.detachInstance(),h===f.styles.backgroundColor&&(f.styles.backgroundColor=He.TRANSPARENT),De.getInstance(r).debug("Starting renderer"),[4,new Os(H).render(f)];case 4:d=A.sent(),A.label=5;case 5:return!0===Q.removeContainer&&(PB.destroy(l)||De.getInstance(r).error("Cannot detach cloned iframe as it is not in the DOM anymore")),De.getInstance(r).debug("Finished rendering"),De.destroy(r),Se.destroy(r),[2,d]}})})};return function(A,e){return void 0===e&&(e={}),Vs(A,e)}});var textOn = true;
var presentationMode = false;

// when the yapnews div gets resized, center the map
if(document.getElementById("yapnews")) {
	document.getElementById("yapnews").addEventListener("transitionend",
	function() {
		MapManager.centerMap();
	});
}

function enableFullscreen() {
	var el = document.documentElement;
	rfs = el.requestFullScreen ||
		el.webkitRequestFullScreen ||
		el.mozRequestFullScreen ||
		el.msRequestFullScreen;
	
	if(typeof rfs !== 'undefined') {
		rfs.call(el);
	}
}

function displayCandidateEditMenu(candidate) {
	LogoManager.loadFlags();
	LogoManager.loadButtons();
	closeAllPopups();

	var candidateedit = document.getElementById('candidateedit');
	candidateedit.style.display = 'flex';
	var nameinput = document.getElementById('candidate-name');
	nameinput.value = candidate;
	var solidinput = document.getElementById('candidate-solid');
	solidinput.value = CandidateManager.candidates[candidate].colors[0];
	var likelyinput = document.getElementById('candidate-likely');
	likelyinput.value = CandidateManager.candidates[candidate].colors[1];
	var leaninput = document.getElementById('candidate-lean');
	leaninput.value = CandidateManager.candidates[candidate].colors[2];
	var tiltinput = document.getElementById('candidate-tilt');
	tiltinput.value = CandidateManager.candidates[candidate].colors[3];
	var hiddeninput = document.getElementById('candidate-originalName');
	var message = document.getElementById('candidateedit-message');
	message.innerHTML = 'Edit ' + candidate;
	hiddeninput.value = candidate;
}

function displayUpdateServiceWorker() {
	var notification = document.getElementById('notification-update-serviceworker');
	notification.style.display = 'inline';
}

function displayNotification(title, text) {
	LogoManager.loadFlags();
	LogoManager.loadButtons();
	var notification = document.getElementById('notification');
	var messageHTML = notification.querySelector('#notification-message');
	var titleHTML = notification.querySelector('#notification-title');
	notification.style.display = 'inline';
	messageHTML.innerHTML = text;
	titleHTML.innerHTML = title;
}

function displayAddCandidateMenu(type) {
	LogoManager.loadFlags();
	LogoManager.loadButtons();
	closeAllPopups();
	CookieManager.loadCustomColors();
	var addcandidatemenu = document.getElementById('addcandidatemenu');
	addcandidatemenu.style.display = 'flex';
}

function closeAllPopups() {
	var popups = document.getElementsByClassName('popup');
	for(var index = 0; index < popups.length; ++index) {
		var popup = popups[index];
		if(popup.style) {
			popup.style.display = 'none';
		}
	}

	var mysaves = document.getElementById("application-mysaves");
	if(mysaves) {
		Account.closeMyMaps();
	}
}

function displayCustomColorMenu(type) {
	LogoManager.loadFlags();
	LogoManager.loadButtons();
	closeAllPopups();
	var customColorName = document.getElementById('custom-color-name');
	customColorName.value = type;
	var miscmenu = document.getElementById('customcolormenu');
	miscmenu.style.display = 'flex';
	document.getElementById("solidcustom").value = CookieManager.cookies[type + 'solid'];
	document.getElementById("likelycustom").value = CookieManager.cookies[type + 'likely'];
	document.getElementById("leaningcustom").value = CookieManager.cookies[type + 'leaning'];
	document.getElementById("tiltingcustom").value = CookieManager.cookies[type + 'tilting'];
}

function setPalette(palette, setCookie) {
	if(setCookie) {
		CookieManager.appendCookie('theme', palette);
	}

	switch(palette) {
		case 'dark':
			darkPalette();
			break;
		case 'greyscale':
			greyscalePalette();
			break;
		case 'terminal':
			terminalPalette();
			break;
		case 'contrast':
			contrastPalette();
			break;
		case 'metallic':
			metallicPalette();
			break;
		case 'halloween':
			halloweenPalette();
			break;
		case 'white':
			toWinPalette();
			break;
		case 'default':
			lightPalette();
			break;
		default:
			lightPalette();
			break;
	}
}

function darkPalette() {
	setBackgroundColor('#181922');

	setOtherText('white');

	setDisableColor('#212326');
	setTossupColor('#6b6e73');
	setMapStyle('#181922', 1.5);
	setTextStyle('white', 'bold');
	setChartBorderStyle(1, '#2b2e33');
	setChartBarColor('#2b2e33');
	setChartBarShadow('');
	
	setClickButtonColor('#2b2e33');
	setClickButtonColor('#2B2E33');
	setClickButtonTextColor('#FFFFFF');
	setMenuColor('#000000');
	
	setSideBarColor('#808080');
	setSideBarTextStyle('#000000');
	setSideBarH3Border('#777777');

	setBorderStyle('#000000', 7.0);

	ChartManager.chartOptions.plugins.datalabels.borderWidth = 2;
	ChartManager.chartOptions.plugins.datalabels.borderRadius = 4;

	ChartManager.chartBarScales.yAxes[0].ticks.fontColor = '#ffffff';
	ChartManager.chartBarScales.xAxes[0].ticks.fontColor = '#ffffff';
	ChartManager.setChart(ChartManager.chartType, ChartManager.chartPosition);
	countVotes();
	MapManager.verifyMap();
	previousPalette = darkPalette;
}

function greyscalePalette() {
	setBackgroundColor('#252525');
	
	setOtherText('white');

	setDisableColor('#212326');
	setTossupColor('#888888');
	setMapStyle('#181922', 1.5);
	setTextStyle('white', 'bold');
	setChartBorderStyle(1, '#1b1b1b');
	setChartBarColor('#454545');
	setChartBarShadow('');
	
	setClickButtonColor('#454545');
	setClickButtonTextColor('#FFFFFF');
	setMenuColor('#101010');
	
	setSideBarColor('#808080');
	setSideBarTextStyle('#000000');
	setSideBarH3Border('#777777');

	setBorderStyle('#252525', 7.0);

	ChartManager.chartOptions.plugins.datalabels.borderWidth = 2;
	ChartManager.chartOptions.plugins.datalabels.borderRadius = 4;

	ChartManager.chartBarScales.yAxes[0].ticks.fontColor = '#ffffff';
	ChartManager.chartBarScales.xAxes[0].ticks.fontColor = '#ffffff';
	ChartManager.setChart(ChartManager.chartType, ChartManager.chartPosition);
	countVotes();
	MapManager.verifyMap();
	previousPalette = darkPalette;
}

function terminalPalette() {
	setBackgroundColor('#000000');

	setOtherText('white');

	setDisableColor('#bcc8d9');
	setTossupColor('black');
	setChartBorderStyle(2, '#ffffff');
	setTextStyle('white', 'bold');
	setMapStyle('white', 1.5);
	setChartBarColor('black');
	setChartBarShadow('');

	setClickButtonColor('#000000');
	setClickButtonTextColor('#ffffff');
	setMenuColor('#eeeeee');
	
	setSideBarColor('#eeeeee');
	setSideBarTextStyle('#000000');
	setSideBarH3Border('#cccccc');
	
	setBorderStyle('#ffffff', 6.0);
	
	ChartManager.chartOptions.plugins.datalabels.borderWidth = 2;
	ChartManager.chartOptions.plugins.datalabels.borderRadius = 4;
	
	ChartManager.chartBarScales.yAxes[0].ticks.fontColor = '#ffffff';
	ChartManager.chartBarScales.xAxes[0].ticks.fontColor = '#ffffff';
	ChartManager.setChart(ChartManager.chartType, ChartManager.chartPosition);
	countVotes();
	MapManager.verifyMap();
	previousPalette = terminalPalette;
}

function lightPalette() {
	setBackgroundColor('#dcdcdc');
	
	setOtherText('black');

	setDisableColor('#212326');
	setTossupColor('#696969');
	setMapStyle('#dcdcdc', 1.5);

	setChartBarColor('#3b3e43');
	setChartBarShadow('');

	setTextStyle('white', 'bold');
	setChartBorderStyle(1, '#3b3e43');
	
	setClickButtonColor('#3b3e43');
	setClickButtonTextColor('white');
	setMenuColor('#000000');
	
	setSideBarColor('#dcdcdc');
	setSideBarTextStyle('#000000');
	setSideBarH3Border('#cccccc');
	
	setBorderStyle('#000000', 6.0);
	
	ChartManager.chartOptions.plugins.datalabels.borderWidth = 2;
	ChartManager.chartOptions.plugins.datalabels.borderRadius = 4;
	
	ChartManager.chartBarScales.yAxes[0].ticks.fontColor = '#ffffff';
	ChartManager.chartBarScales.xAxes[0].ticks.fontColor = '#ffffff';
	ChartManager.setChart(ChartManager.chartType, ChartManager.chartPosition);
	countVotes();
	MapManager.verifyMap();
	previousPalette = lightPalette;
}

function contrastPalette() {
	setBackgroundColor('#f8f9fa');

	setOtherText('black');

	setDisableColor('#212326');
	setTossupColor('#36454f');
	setMapStyle('#f8f9fa', 1.5);
	setTextStyle('white', 'bold');
	setChartBorderStyle(1, '#fafafa');
	setChartBarColor('#fafafa');
	setChartBarShadow('');

	setClickButtonColor('#fafafa');
	setClickButtonTextColor('#000000');
	setMenuColor('#222222');
	
	setSideBarColor('#f8f9fa');
	setSideBarTextStyle('#000000');
	setSideBarH3Border('#cccccc');
	
	setBorderStyle('#f8f9fa', 6.0);

	ChartManager.chartOptions.plugins.datalabels.borderWidth = 2;
	ChartManager.chartOptions.plugins.datalabels.borderRadius = 4;

	ChartManager.chartBarScales.yAxes[0].ticks.fontColor = '#000000';
	ChartManager.chartBarScales.xAxes[0].ticks.fontColor = '#000000';
	ChartManager.setChart(ChartManager.chartType, ChartManager.chartPosition);
	countVotes();
	MapManager.verifyMap();
	previousPalette = contrastPalette;
}

function metallicPalette() {
	setBackgroundImage('linear-gradient(#696969, #33353b)');
	
	setOtherText('white');
	
	setDisableColor('#212326');
	setTossupColor('#808080');
	setMapStyle('black', 1.5);
	setTextStyle('white', 'bold');
	setChartBorderStyle(1, '#33353b');
	setChartBarColor('#33353b');
	setChartBarShadow('');
	
	setClickButtonColor('#33353b');
	setClickButtonTextColor('#FFFFFF');
	setMenuColor('black');
	
	setSideBarColor('#848482');
	setSideBarTextStyle('#000000');
	setSideBarH3Border('#666666');
	
	setBorderStyle('#000000', 6.0);

	ChartManager.chartOptions.plugins.datalabels.borderWidth = 2;
	ChartManager.chartOptions.plugins.datalabels.borderRadius = 4;
	
	ChartManager.chartBarScales.yAxes[0].ticks.fontColor = '#ffffff';
	ChartManager.chartBarScales.xAxes[0].ticks.fontColor = '#ffffff';
	ChartManager.setChart(ChartManager.chartType, ChartManager.chartPosition);
	countVotes();
	MapManager.verifyMap();
	previousPalette = metallicPalette;
}

function halloweenPalette() {
	setBackgroundImage('url("./res/images/halloween.jpg")');

	setOtherText('#ffffff');

	setDisableColor('#dddddd');
	setTossupColor('#928e85');
	setMapStyle('#000000', 1.25);
	setTextStyle('white', 'bold');
	setChartBorderStyle(1, '#000000');
	setChartBarColor('#060606');
	setChartBarShadow('0px -5px 5px 2px #060606');

	setSideBarColor('#9c9b98');
	setSideBarTextStyle('#000000');
	setSideBarH3Border('#666666');
	
	setClickButtonColor('#060606');
	setClickButtonTextColor('#ffffff');
	setMenuColor('#928e85');
	setBorderStyle('#ffffff', 6.0);

	ChartManager.chartOptions.plugins.datalabels.borderWidth = 0;
	ChartManager.chartOptions.plugins.datalabels.borderRadius = 2;

	ChartManager.chartBarScales.yAxes[0].ticks.fontColor = '#ffffff';
	ChartManager.chartBarScales.xAxes[0].ticks.fontColor = '#ffffff';
	ChartManager.setChart(ChartManager.chartType, ChartManager.chartPosition);
	countVotes();
	MapManager.verifyMap();
	previousPalette = halloweenPalette;
}

function toWinPalette() {
	setBackgroundColor('#f8f9fa');

	setOtherText('black');

	setDisableColor('#dddddd');
	setTossupColor('#9E8767');
	setMapStyle('#fffbf2', 1);
	setTextStyle('white', 'bold');
	setChartBorderStyle(1, '#fafafa');
	setChartBarColor('#fafafa');
	setChartBarShadow('');
	
	setClickButtonColor('#fafafa');
	setClickButtonTextColor('#000000');
	setMenuColor('#000000');
	
	setSideBarColor('#f8f9fa');
	setSideBarTextStyle('#000000');
	setSideBarH3Border('#cccccc');

	setBorderStyle('#f8f9fa', 6.0);

	ChartManager.chartOptions.plugins.datalabels.borderWidth = 0;
	ChartManager.chartOptions.plugins.datalabels.borderRadius = 2;

	ChartManager.chartBarScales.yAxes[0].ticks.fontColor = '#000000';
	ChartManager.chartBarScales.xAxes[0].ticks.fontColor = '#000000';
	ChartManager.setChart(ChartManager.chartType, ChartManager.chartPosition);
	countVotes();
	MapManager.verifyMap();
	previousPalette = toWinPalette;
}

function setOtherText(color) {
	var text = document.getElementById('othertext');
	if(text) {
		text.setAttribute('fill', color);
	}
}

function setBackgroundImage(img) {
	var body = document.getElementById('application');
	body.style.backgroundColor = '';
	body.style.backgroundImage = img;
}

function setBackgroundColor(color) {
	var body = document.getElementById('application');
	body.style.background = color;
	body.style.backgroundImage = '';
}

function setChartBorderStyle(width, color) {
	ChartManager.chartBorderWidth = width;
	ChartManager.chartBorderColor = color;

	var battlechart = document.getElementById('battlechartright');
	battlechart.style.border = '1px solid ' + color;	
	ChartManager.updateChart();

	var legenddiv = document.getElementById('legend-div');
	legenddiv.style.borderColor = color;
}

function setMenuColor(color) {
	var menu = document.getElementById('menu-div');
	menu.style.backgroundColor = color;
	var clickButtons = document.getElementsByClassName('click-button');
	for(var index = 0; index < clickButtons.length; ++index) {
		button = clickButtons[index];
		button.style.borderColor = color;
	}
}

function setMenuImage(image) {
	var menu = document.getElementById('menu-div');
	menu.style.backgroundImage = image;
	menu.style.backgroundSize = 'contain';
}

function setClickButtonTextColor(color) {
	var clickButtons = document.getElementsByClassName('click-button');
	for(var index = 0; index < clickButtons.length; ++index) {
		button = clickButtons[index];
		button.style.color = color;
	}
}

function setClickButtonColor(color) {
	var clickButtons = document.getElementsByClassName('click-button');
	for(var index = 0; index < clickButtons.length; ++index) {
		button = clickButtons[index];
		button.style.backgroundColor = color;
	}
}

function setDisableColor(color) {
	CandidateManager.TOSSUP.colors[1] = color;
}

function setTossupColor(color) {
	CandidateManager.TOSSUP.colors[2] = color;
	var tossupText = document.getElementById('Tossup-text');
	tossupText.style.backgroundColor = color;
	var addCandidateButton = document.getElementById('addcandidate-button-text');
	if(addCandidateButton) {
		addCandidateButton.style.backgroundColor = color;
	}
}

function setMapStyle(color, strokeWidth) {
	var outlines = document.getElementById('outlines');
	outlines.style.stroke = color;
	outlines.style.strokeWidth = strokeWidth * strokeMultiplier;

	var proportional = document.getElementById('proportional');
	if(proportional) {
		proportional.style.stroke = color;
		proportional.style.strokeWidth = strokeWidth * strokeMultiplier;
	}

	var special = document.getElementById('special');
	if(special != null) {
		special.style.stroke = color;
		special.style.strokeWidth = strokeWidth * strokeMultiplier;
	}
}

function setBorderStyle(color, strokeWidth) {
	var border = document.getElementById('*lines*');
	if(border !== null) {
		border.style.stroke = color;
		border.style.strokeWidth = strokeWidth * strokeMultiplier;
	}
}

function setSideBarColor(color) {
	var sidebar = document.getElementById('sidebar');
	if(sidebar) {

	} else {
		return;
	}

	sidebar.style.background = color;
}

function setSideBarTextStyle(color) {
	var sidebar = document.getElementById('sidebar');
	if(sidebar) {

	} else {
		return;
	}
	sidebar.style.color = color;
}

function setSideBarSocialOutline(color, width) {
	var sidebar = document.getElementById('sidebar');
	if(sidebar) {
		var elements = sidebar.querySelectorAll(".sidebar-button");
		for(var index = 0; index < elements.length; ++index) {
			var element = elements[index];
			element.style.borderColor = color;
			element.style.borderWidth = width;
		}
	}
}

function setSideBarH3Border(color) {
	var sidebar = document.getElementById('sidebar');
	if(sidebar) {
		var elements = sidebar.querySelectorAll(".sidebar-box h3");
		for(var index = 0; index < elements.length; ++index) {
			var h3 = elements[index];
			h3.style.borderBottom = '1px solid ' + color;
		}
	}
}

function setChartBarColor(color) {
	var sidebar = document.getElementById('chart-div');
	sidebar.style.background = color;
}

function setChartBarShadow(shadow) {
	var sidebar = document.getElementById('chart-div');
	sidebar.style.boxShadow = shadow;
}

function setTextStyle(color, weight) {
	var text = document.getElementById('text');
	if(text !== null) {
		text.style.strokeWidth = 0;
		text.style.fontWeight = weight;
		text.style.fill = color;
		text.style.textAlign = 'center';
		
		for(key in text.children) {
			var child = text.children[key];
			try {
				child.setAttribute('text-anchor', 'middle');
				child.setAttribute('alignment-baseline', 'central');
			} catch(e) {

			}
		} 
	}

	var battlechart = document.getElementById('battlechart');
	battlechart.style.color = color;
	battlechart.style.fontWeight = weight;

	var legenddiv = document.getElementById('legend-div');
	legenddiv.style.color = color;
	legenddiv.style.weight = weight;
}

function setBattleHorizontal() {
	var application = document.getElementById('application');
	application.style.flexDirection = 'column-reverse';

	var map = document.getElementById('map-div');
	map.style.height = '85%';

	var sidebar = document.getElementById('chart-div');
	sidebar.style.flexDirection = 'row';
	sidebar.style.width = '100%';	
	sidebar.style.height = '15%';

	var battlechart = document.getElementById('battlechart');
	battlechart.style.flexDirection = 'column';
	battlechart.style.height = '75%';
	battlechart.style.margin = '5%';
	
	var battlechartmidpoly = document.getElementById('battlechartmidpoly');
	battlechartmidpoly.setAttribute("transform", "translate(20 0) rotate(90)");

	var battlechartmid = document.getElementById('battlechartmid');
	//battlechartmid.setAttribute('transform', 'rotate(90)');
	battlechartmid.style.height = '100%';
	battlechartmid.style.width = '';

	var battlechartright = document.getElementById('battlechartright');
	battlechartright.style.flexDirection = 'row';
	battlechartright.style.height = '80%';
	battlechartright.style.width = '100%';

	var battlechartleft = document.getElementById('battlechartleft');
	battlechartleft.style.height = '20%';
	battlechartleft.style.width = '100%';

	var topbar = document.getElementById('topbar');
	topbar.style.borderRight = topbar.style.borderBottom;
	topbar.style.borderBottom = '';
	topbar.style.flexDirection = 'row';
	topbar.style.minWidth = '0';

	var bottombar = document.getElementById('bottombar');
	//bottombar.style.boxShadow = '-1px 0px 3px black';
	bottombar.style.borderLeft = bottombar.style.borderTop;	
	bottombar.style.borderTop = '';
	bottombar.style.flexDirection = 'row';
	bottombar.style.minWidth = '0';
}

function unsetBattleHorizontal() {
	var application = document.getElementById('application');
	application.style.flexDirection = 'row';
	
	var map = document.getElementById('map-div');
	map.style.height = '100%';

	var sidebar = document.getElementById('chart-div');
	sidebar.style.flexDirection = 'column';
	sidebar.style.width = '28vw';	
	sidebar.style.height = '100%';

	var battlechart = document.getElementById('battlechart');
	battlechart.style.flexDirection = 'row';
	battlechart.style.height = '100%';
	battlechart.style.margin = '5%';
	if(mobile) {
		battlechart.style.width = '100%';
	} else {
		battlechart.style.width = '50%';
	}
	
	var battlechartmidpoly = document.getElementById('battlechartmidpoly');
	battlechartmidpoly.setAttribute("transform", "translate(0 0) rotate(0)");

	var battlechartmid = document.getElementById('battlechartmid');
//	battlechartmid.setAttribute('transform', 'rotate(0)');
	battlechartmid.style.height = '';
	battlechartmid.style.width = '100%';

	var battlechartright = document.getElementById('battlechartright');
	battlechartright.style.flexDirection = 'column';
	battlechartright.style.width = '85%';
	battlechartright.style.height = '100%';
	var battlechartright = document.getElementById('battlechartleft');
	battlechartleft.style.height = '20%';
	battlechartleft.style.width = '15%';
	
	var topbar = document.getElementById('topbar');
	//topbar.style.boxShadow = '0px -1px 3px black';
	topbar.style.borderBottom = topbar.style.borderRight;
	topbar.style.borderRight = '';
	topbar.style.flexDirection = 'column';
	topbar.style.minWidth = '0';

	var bottombar = document.getElementById('bottombar');
	//bottombar.style.boxShadow = '0px 1px 3px black';
	bottombar.style.borderTop = bottombar.style.borderLeft;
	bottombar.style.borderLeft = '';
	bottombar.style.flexDirection = 'column';
	bottombar.style.minWidth = '0';
}


function toggleYAPNews() {
	var yapnews = document.getElementById("sidebar");
	if(yapnews !== null) {
		if(yapnews.style.display === "none") {
			yapnews.style.display = "inline-flex";
		} else {
			yapnews.style.display = "none";
		}
		MapManager.centerMap();
	}
}

function ifInIframe() {
	if(window.location !== window.parent.location) {
		var element= document.getElementById('sidebar');
		if(element) {
			element.style.display = 'none';
		}
		element = document.getElementById('menu-div');
		if(element) {
			element.style.display = 'none';
		}
		element = document.getElementById('yapms-watermark');
		if(element) {
			element.style.display = 'flex';
		}
		var elements = document.getElementsByClassName('adslot_mobile');
		for(var index = 0; index < elements.length; ++index) {
			element = elements[index];
			element.style.display = 'none';
		}
		setPalette("light", false);
	}
}
function displayVersionInfo() {
	var versioninfotext = document.getElementById('versioninfo-text');
	versioninfotext.innerHTML = currentCache;
}

function displayShareMenu() {
	var sharebuttons = document.getElementById('sharebuttons');
	if(sharebuttons) {
		sharebuttons.style.display = 'none';
	}

	var shareurl = document.getElementById('shareurl');
	if(shareurl) {
		shareurl.style.display = 'none';
		shareurl.innerHTML = '';
	}

	var image = document.getElementById('screenshotimg');
	if(image) {
		image.style.display = 'none';
	}
		
	var loadingAnimation = document.getElementById('loading-animation');
	if(loadingAnimation) {
		loadingAnimation.style.display = '';
	}
}

function displayMenu(name) {
	LogoManager.loadFlags();
	LogoManager.loadButtons();
	closeAllPopups();

	var menu = document.getElementById(name);
	menu.style.display = 'flex';

	switch(name) {
		case 'versionmenu':
			displayVersionInfo();
		break;
		case 'sharemenu':
			displayShareMenu();
		break;
	}
}

function hideMenu(name) {
	closeAllPopups();
	var menu = document.getElementById(name);
	menu.style.display = 'none';
}
var lastViewPopularVote = "";

function numberWithCommas(number) {
	return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function verifyPopularVote() {
	if(mobile) {
		return false;
	}

	if(enablePopularVote) {
		var element = document.getElementById('sidebar-popularvote');
		element.style.display = 'block';
		element = document.getElementById('sidebar-national-popularvote');
		element.style.display = 'block';
		element = document.getElementById('sidebar-popularvote-settings');
		element.style.display = 'block';
		return true;
	} else {
		var element = document.getElementById('sidebar-popularvote');
		element.style.display = 'none';
		element = document.getElementById('sidebar-national-popularvote');
		element.style.display = 'none';
		element = document.getElementById('sidebar-popularvote-settings');
		element.style.display = 'none';
		return false;
	}
}

function autoMarginsOnClick() {
	if(verifyPopularVote() === false) {
		return;
	}

	var autoMargins = document.getElementById('popularvote-automargins').checked;

	if(autoMargins === false) {
		return; 
	}

	// loop through all states and set the margins
	for(var index in states) {
		var state = states[index];
		calculateAutoMargin(state);
	}
}

function viewPopularVote(state) {
	if(verifyPopularVote() === false) {
		return;
	}

	lastViewPopularVote = state;

	var popularVoteCalc = document.getElementById('sidebar-popularvote');
	if(state.disabled) {
		popularVoteCalc.style.display = 'none';	
	} else {
		popularVoteCalc.style.display = 'block';	
	}
	var title = document.getElementById("popularvote-state-title");
	title.innerHTML = state.name;

	var message = document.getElementById("popularvote-message");
	message.innerHTML = "";
	
	var ranges = document.getElementById("popularvote-ranges");
	while(ranges.firstChild) {
		ranges.removeChild(ranges.firstChild);
	}

	if(state.name.includes('-AL')) {
		title.innerHTML = "Select a disctrict to set popular vote";
		return;
	}

	var displayTossup = document.createElement('DIV');
	displayTossup.setAttribute('id', 'popular-display-Tossup');

	var displayTurnout = document.createElement('DIV');
	displayTurnout.setAttribute('id', 'popularvote-turnout-display');
	displayTurnout.innerHTML = 'Turnout - ' + state.turnout + '%';
	var turnoutRange = document.createElement('INPUT');
	turnoutRange.setAttribute('id', 'popularvote-turnout');
	turnoutRange.setAttribute('type', 'range');
	turnoutRange.setAttribute('max', 100);
	turnoutRange.setAttribute('step', 0.1);
	turnoutRange.setAttribute('value', state.turnout);

	var max  = state.voters * (state.turnout / 100.0);
	var total = 0;

	turnoutRange.onchange = (function() {
		return function() {
			var turnout = document.getElementById('popularvote-turnout').value;
			state.turnout = turnout;
			
			var autoMargins = document.getElementById('popularvote-automargins').checked;

			if(autoMargins) {
				state.setColor('Tossup', 0, true);
			}

			for(var key in CandidateManager.candidates) {
				if(key === 'Tossup') {
					continue;
				}
				var range = document.getElementById('popular-range-' + key);
				range.setAttribute('max', (state.voters * (turnout / 100.0)));
				range.value = 0;
				// call on input to reset prevValue to 0
				range.oninput();
				var rangeDisplay = document.getElementById('popular-display-' + key);
				rangeDisplay.innerHTML = key + ' - 0 - 0%';
			}

			var displayTurnout = document.getElementById('popularvote-turnout-display');
			displayTurnout.innerHTML = 'Turnout - ' + this.value + '%';

			var displayTossup = document.getElementById('popular-display-Tossup');
			displayTossup.innerHTML = 'Tossup - ' + numberWithCommas((state.voters * (turnout / 100.0)).toFixed(0)) + ' - 100%';
			
			total = 0;

			countPopularVote();
		}
	})();

	turnoutRange.oninput = (function() {
		return function() {
			var displayTurnout = document.getElementById('popularvote-turnout-display');
			displayTurnout.innerHTML = 'Turnout - ' + this.value + '%';
		}
	})();

	ranges.appendChild(displayTurnout);
	ranges.appendChild(turnoutRange);

	for(var key in CandidateManager.candidates) {
		if(key === 'Tossup')
			continue;

		var range = document.createElement('INPUT');
		range.setAttribute('id', 'popular-range-' + key);
		range.setAttribute('type', 'range');
		range.setAttribute('max', max);
		range.setAttribute('step', 1);
		if(typeof state.popularVote[key] === 'undefined') {
			state.popularVote[key] = 0;
		}
		range.value = state.popularVote[key];
		total += state.popularVote[key];
		// create display for slider
		var display = document.createElement('DIV');
		display.setAttribute('id', 'popular-display-' + key);
		display.innerHTML = key + ' - ' + numberWithCommas(range.value) + ' - ' +
			((state.popularVote[key] / max) * 100).toFixed(2) + '%';

		range.onchange = (function() {
			return function(b) {
				var totalVotes = 0;
				for(var candidate in CandidateManager.candidates) {
					if(candidate === 'Tossup')
						continue;
					var range = document.getElementById('popular-range-' + candidate);
					var rangeValue = 0;
					if(range) {
						rangeValue = parseInt(range.value);
					}
					state.popularVote[candidate] = rangeValue;
					totalVotes += rangeValue;
				}
				state.popularVote['Tossup'] = state.voters - totalVotes;

				var autoMargins = document.getElementById('popularvote-automargins').checked;
				if(autoMargins) {
					calculateAutoMargin(state);

					if(state.name.includes('-D')) {
						var name = state.name.split('-')[0];
						calculateAutoMarginAL(name);
					}
				}

				countPopularVote();
				countVotes();
				LegendManager.updateLegend();
				ChartManager.updateChart();
			}
		})();

		range.oninput = (function() {
			var refkey = key;
			var refdisplay = display;
			var refdisplayTossup = displayTossup;
			var prevvalue = parseInt(range.value);
			var refstate = state;
			var refcandidate = key;
			return function(b) {
				total -= prevvalue;
				total += parseInt(this.value);

				max = state.voters * (state.turnout / 100.0);
				if(total > max) {
					var diff = total - max;
					total -= diff;
					this.value -= diff;
				}
				
				prevvalue = parseInt(this.value);

				displayTossup.innerHTML = 'Tossup - ' + numberWithCommas((max - total).toFixed(0)) + ' - ' +
					(( (max - total) / max) * 100).toFixed(2) + '%';
				
				// update the display	
				refdisplay.innerHTML = refkey + ' - ' + numberWithCommas(this.value) + ' - ' + 
					((this.value / max) * 100).toFixed(2) + '%';
	
				state.popularVote[refkey] = parseInt(this.value);
			}
		})();
		
		ranges.appendChild(display);
		ranges.appendChild(range);
	}

	displayTossup.innerHTML = 'Tossup - ' + numberWithCommas((max - total).toFixed(0)) + ' - ' + (( (max - total) / max) * 100).toFixed(2) + '%';
	ranges.appendChild(displayTossup);
}

function countPopularVote() {
	if(verifyPopularVote() === false) {
		return;
	}

	var ranges = document.getElementById("national-popularvote-ranges");
	while(ranges.firstChild) {
		ranges.removeChild(ranges.firstChild);
	}

	var popularVote = {};
	var splitState = {};

	for(var stateIndex = 0, length = states.length; stateIndex < length; ++stateIndex) {
		var state = states[stateIndex];

		// skip at large state portions
		if(state.name.includes('-AL')) {
			continue;
		}

		for(var candidate in state.popularVote) {


			if(state.popularVote[candidate]) {
				if(popularVote[candidate]) {
					popularVote[candidate] += state.popularVote[candidate];
					
				} else {
					popularVote[candidate] = 0;
					popularVote[candidate] += state.popularVote[candidate];
				}
			
				if(state.name.includes('-') && state.name.includes('AL') === false) {
					var mainName = state.name.split('-')[0];
					var district = state.name.split('-')[1];
					if(typeof splitState[mainName] === 'undefined') {
						splitState[mainName] = {}; 
					}

					if(typeof splitState[mainName][district] === 'undefined') {
						splitState[mainName][district] = {};
					}

					splitState[mainName][district][candidate] = state.popularVote[candidate];
				}
			} else {
				state.popularVote[candidate] = 0;
			}
		}
	}

	for(var candidate in popularVote) {
		var display = document.createElement('DIV');
		display.setAttribute('id', 'national-popular-display-' + candidate);
		display.innerHTML = candidate + ' - ' + numberWithCommas(popularVote[candidate].toFixed(0));
		ranges.appendChild(display);
	}
}

function calculateAutoMarginAL(stateName) {
	var allDistricts = states.filter(obj => {
		return obj.name.includes(stateName) &&
			obj.name.includes('-AL') === false;
	});

	var atLarge = states.filter(obj => {
		return obj.name.includes(stateName + '-AL');
	})[0];

	var firstCount = 0;
	var firstCandidate = "Tossup";
	var secondCount = 0;
	var secondCandidate = "Tossup";
	for(var candidate in CandidateManager.candidates) {
		if(candidate === 'Tossup')
			continue;

		var votes = 0;
		for(var key in allDistricts) {
			if(allDistricts[key].popularVote[candidate]) {
				votes += allDistricts[key].popularVote[candidate];
			}
		}

		if(votes > firstCount) {
			secondCount = firstCount;
			secondCandidate = firstCandidate;
			firstCount = votes;
			firstCandidate = candidate;
		} else if(votes > secondCount) {
			secondCount = votes;
			secondCandidate = candidate;
		}
	}

	var combine = firstCount + secondCount;
	var margin = (((firstCount - secondCount) / combine) * 100);

	if(firstCandidate === 'Tossup') {
		atLarge.setColor('Tossup', 0, false);
	} else {
		if(margin < 5.0) {
			atLarge.setColor(firstCandidate, 3, false);
		} else if(margin < 10.0) {
			atLarge.setColor(firstCandidate, 2, false);
		} else if(margin < 15.0) {
			atLarge.setColor(firstCandidate, 1, false);
		} else {
			atLarge.setColor(firstCandidate, 0, false);
		}
	}
}

function calculateAutoMargin(state) {
	var win = 0;
	var winCandidate = "Tossup";
	var secondWin = 0;
	var secondWinCandidate = "Tossup";
	for(var candidate in CandidateManager.candidates) {
		// don't compare margins with the no vote
		if(candidate === 'Tossup')
			continue;
		var votes = state.popularVote[candidate];
		if(votes > win) {
			secondWin = win;
			secondWinCandidate = winCandidate;
			win = votes;
			winCandidate = candidate;
		} else if(votes > secondWin) {
			secondWin = votes;
			secondWinCandidate = candidate;
		}
	}

	var combine = win + secondWin;
	var margin = (((win - secondWin) / combine) * 100);
	if(winCandidate === 'Tossup') {
		state.setColor('Tossup', 0);
	} else {
		if(margin < 5.0) {
			state.setColor(winCandidate, 3, false);
		} else if(margin < 10.0) {
			state.setColor(winCandidate, 2, false);
		} else if(margin < 15.0) {
			state.setColor(winCandidate, 1, false);
		} else {
			state.setColor(winCandidate, 0, false);
		}
	}
}
function saveMap(img, token) {
	var formData = new FormData();

	formData.append("img", img);
	formData.append("filename", MapLoader.save_filename);
	formData.append("dataid", MapLoader.save_dataid);
	formData.append("type", MapLoader.save_type);
	formData.append("year", MapLoader.save_year);
	formData.append("fontsize", MapLoader.save_fontsize);
	formData.append("strokewidth", MapLoader.save_strokewidth);
	formData.append("captcha", token);
	formData.append("updateText", mapOptions.updateText);
	
	console.log('token: ' + token);

	var candidateData = [];
	for(var key in CandidateManager.candidates) {
		if(key === 'Tossup') {
			continue;
		}
		var candidate = CandidateManager.candidates[key];
		var obj = {
			name: candidate.name,
			solid: candidate.colors[0],
			likely: candidate.colors[1],
			lean: candidate.colors[2],
			tilt: candidate.colors[3]
		};
		candidateData.push(obj);
	}

	formData.append("candidates", JSON.stringify({
		candidate_data: candidateData
	}));

	var stateData = [];
	for(var stateIndex = 0; stateIndex < states.length; ++stateIndex) {
		var state = states[stateIndex];
		var obj = {
			name: state.name,
			candidate: state.candidate,
			delegates: state.delegates,
			voteCount: state.voteCount,
			colorValue: state.colorValue,
			disabled: state.disabled
		};
		stateData.push(obj);
	}
	formData.append("states", JSON.stringify({
		state_data: stateData
	}));

	var proportionalData = [];
	for(var stateIndex = 0; stateIndex < proportionalStates; ++stateIndex) {
		var state = proportionalStates[stateIndex];
		var obj = {
			name: state.name,
			candidate: state.candidate,
			delegates: state.delegates,
			voteCount: state.voteCount,
			colorValue: state.colorValue,
			disabled: state.disabled
		};
	}
	formData.append("proportionalStates", JSON.stringify({
		proportional_data: proportionalData
	}));

	$.ajax({
		url: "./savemap_simple.php",
		type: "POST",
		data: formData,
		processData: false,
		contentType: false,
		success: function(a,b,c) {
			console.log(a);
			var data = a.split(' ');
			var url = data[0];
			var filename = data[1];

			var shareurl = document.getElementById('shareurl');
			if(url === 'reCaptcha_Failed(restart_web_browser)') {
				shareurl.setAttribute('href', url);
				shareurl.innerHTML = 'reCaptcha Failed: possible solution is to restart your web-browser';

			} else if(url === 'reCaptcha_Bot_Detected') {
				shareurl.setAttribute('href', url);
				shareurl.innerHTML = 'reCaptcha Failed: suspicious activity detected';
				
			} else {
				shareurl.setAttribute('href', url);
				shareurl.innerHTML = url;
			}
			
			shareurl.style.display = '';

			var downloadbtn = document.getElementById('downloadbutton');
			if(downloadbtn) {
				downloadbtn.style.display = 'inline-block';
				downloadbtn.setAttribute('href', 'https://yapms.org/downloadmap.php?f=' + filename);
			}
			
			var button = document.getElementById('share-button');
			if(button) {
				button.setAttribute('onclick', 'share()');
			}

			var loadingAnimation = document.getElementById('loading-animation');
			if(loadingAnimation) {
				loadingAnimation.style.display = 'none';
			}
		
			var image = document.getElementById('screenshotimg');
			if(image) {
				image.style.display = '';
			}

			console.log('Map save succeeded');
			gtag('event', 'map_save_succeeded', {
				'event_category': 'map_save',
				'event_label': 'Map save succeeded ' + currentCache 
			});
		},
		error: function(a,b,c) {
			console.log(a);
			console.log(b);
			console.log(c);
			var button = document.getElementById('share-button');
			if(button) {
				button.setAttribute('onclick', 'share()');
			}
			
			console.log('Map save failed ' + a);
			gtag('event', 'ma_save_failed', {
				'event_category': 'map_save',
				'event_label': 'Map save failed - ' + a
			});
		}
	});
}

function saveMap_user() {
	var formData = new FormData();
	formData.append('token', Account.token);
	
	var element = document.getElementById('savemap-name');
	formData.append('mapName', element.value);

	var data = {};
	data['filename'] = MapLoader.save_filename;
	data['dataid'] = MapLoader.save_dataid;
	data['type'] = MapLoader.save_type;
	data['year'] = MapLoader.save_year;
	data['fontsize'] = MapLoader.save_fontsize;
	data['strokewidth'] = MapLoader.save_strokewidth;
	data['updatetext'] = mapOptions.updateText;
	data['candidates'] = {};
	data['states'] = {};
	data['proportional'] = {};

	for(var key in CandidateManager.candidates) {
		if(key === 'Tossup') {
			continue;
		}
		var candidate = CandidateManager.candidates[key];
		data['candidates'][candidate.name] = {};
		data['candidates'][candidate.name]['solid'] = candidate.colors[0];
		data['candidates'][candidate.name]['likely'] = candidate.colors[1];
		data['candidates'][candidate.name]['lean'] = candidate.colors[2];
		data['candidates'][candidate.name]['tilt'] = candidate.colors[3];
	}

	for(var stateIndex = 0; stateIndex < states.length; ++stateIndex) {
		var state = states[stateIndex];
		data['states'][state.name] = {};
		data['states'][state.name]['candidate'] = state.candidate;
		data['states'][state.name]['delegates'] = state.delegates;
		data['states'][state.name]['votecount'] = state.voteCount;
		data['states'][state.name]['colorvalue'] = state.colorValue;
		data['states'][state.name]['disabled'] = state.disabled;
	}

	for(var stateIndex = 0; stateIndex < proportionalStates.length; ++stateIndex) {
		var state = proportionalStates[stateIndex];
		data['proportional'][state.name] = {};
		data['proportional'][state.name]['candidate'] = state.candidate;
		data['proportional'][state.name]['delegates'] = state.delegates;
		data['proportional'][state.name]['votecount'] = state.voteCount;
		data['proportional'][state.name]['colorvalue'] = state.colorValue;
		data['proportional'][state.name]['disabled'] = state.disabled;
	}
	
	formData.append("data", JSON.stringify(data));
	
	$.ajax({
		url: "https://yapms.org/upload_user.php",
		type: "POST",
		data: formData,
		processData: false,
		contentType: false,
		success: function(data) {
			console.log(data);
		},
		error: function(a,b,c) {
			console.log(a);
			console.log(b);
			console.log(c);
		}
	});
}

function saveMap_new(img, token) {
	var formData = new FormData();
	formData.append("captcha", token);
	formData.append("img", img);
	
	var data = {};
	data['filename'] = MapLoader.save_filename;
	data['dataid'] = MapLoader.save_dataid;
	data['type'] = MapLoader.save_type;
	data['year'] = MapLoader.save_year;
	data['fontsize'] = MapLoader.save_fontsize;
	data['strokewidth'] = MapLoader.save_strokewidth;
	data['updatetext'] = mapOptions.updateText;
	data['candidates'] = {};
	data['states'] = {};
	data['proportional'] = {};

	var formData = new FormData();
	console.log('token: ' + token);
	formData.append("captcha", token);
	formData.append("img", img);

	for(var key in CandidateManager.candidates) {
		if(key === 'Tossup') {
			continue;
		}
		var candidate = CandidateManager.candidates[key];
		data['candidates'][candidate.name] = {};
		data['candidates'][candidate.name]['solid'] = candidate.colors[0];
		data['candidates'][candidate.name]['likely'] = candidate.colors[1];
		data['candidates'][candidate.name]['lean'] = candidate.colors[2];
		data['candidates'][candidate.name]['tilt'] = candidate.colors[3];
	}

	for(var stateIndex = 0; stateIndex < states.length; ++stateIndex) {
		var state = states[stateIndex];
		data['states'][state.name] = {};
		data['states'][state.name]['candidate'] = state.candidate;
		data['states'][state.name]['delegates'] = state.delegates;
		data['states'][state.name]['votecount'] = state.voteCount;
		data['states'][state.name]['colorvalue'] = state.colorValue;
		data['states'][state.name]['disabled'] = state.disabled;
	}

	for(var stateIndex = 0; stateIndex < proportionalStates.length; ++stateIndex) {
		var state = proportionalStates[stateIndex];
		data['proportional'][state.name] = {};
		data['proportional'][state.name]['candidate'] = state.candidate;
		data['proportional'][state.name]['delegates'] = state.delegates;
		data['proportional'][state.name]['votecount'] = state.voteCount;
		data['proportional'][state.name]['colorvalue'] = state.colorValue;
		data['proportional'][state.name]['disabled'] = state.disabled;
	}
	
	formData.append("data", JSON.stringify(data));

	$.ajax({
		//url: "./savemap_external.php",
		url: "https://yapms.org/upload.php",
		type: "POST",
		data: formData,
		processData: false,
		contentType: false,
		success: function(a,b,c) {
			console.log(a);
			var data = a.split(' ');
			var url = data[0];
			var filename = data[1];

			var shareurl = document.getElementById('shareurl');
			if(url === 'reCaptcha_Failed(restart_web_browser)') {
				shareurl.setAttribute('href', url);
				shareurl.innerHTML = 'reCaptcha Failed: possible solution is to restart your web-browser';

			} else if(url === 'reCaptcha_Bot_Detected') {
				shareurl.setAttribute('href', url);
				shareurl.innerHTML = 'reCaptcha Failed: suspicious activity detected';
				
			} else {
				shareurl.setAttribute('href', url);
				shareurl.innerHTML = url;
			}
			
			shareurl.style.display = '';

			var sharebuttons = document.getElementById('sharebuttons');
			if(sharebuttons) {
				sharebuttons.style.display = 'flex';
			}
			var downloadbtn = document.getElementById('downloadbutton');
			if(downloadbtn) {
				if(mobile) {
					downloadbtn.style.display = 'none';
				} else {
					downloadbtn.style.display = '';
					downloadbtn.setAttribute('href', 'https://yapms.org/downloadmap.php?f=' + filename);
				}
			}

			var loadingAnimation = document.getElementById('loading-animation');
			if(loadingAnimation) {
				loadingAnimation.style.display = 'none';
			}
		
			var image = document.getElementById('screenshotimg');
			if(image) {
				image.style.display = '';
			}

			var facebookBtn = document.getElementById('facebook-share');
			if(facebookBtn) {
				facebookBtn.setAttribute('href', 'https://www.facebook.com/sharer.php?u=' + url);
				facebookBtn.setAttribute('target', '_blank');
			}

			var twitterBtn = document.getElementById('twitter-share');
			if(twitterBtn) {
				twitterBtn.setAttribute('href', 'https://twitter.com/intent/tweet?text=' + url);
				twitterBtn.setAttribute('target', '_blank');
			}

			var redditBtn = document.getElementById('reddit-share');
			if(redditBtn) {
				redditBtn.setAttribute('href', 'https://www.reddit.com/submit?title=My%20YAPms%20Map&url=' + url);
				redditBtn.setAttribute('target', '_blank');
			}

			console.log('Map save NEW succeeded');
			gtag('event', 'map_save_succeeded', {
				'event_category': 'map_save',
				'event_label': 'Map save NEW succeeded ' + currentCache 
			});
		},
		error: function(a,b,c) {
			console.log(a);
			console.log(b);
			console.log(c);
			var button = document.getElementById('share-button');
			if(button) {
				button.setAttribute('onclick', 'share()');
			}
			
			console.log('Map save NEW failed ' + a);
			gtag('event', 'ma_save_failed', {
				'event_category': 'map_save',
				'event_label': 'Map save NEW failed - ' + a
			});
		}
	});
}
var currentCache = 'v1.1.30';

var states = [];
var lands = [];
var buttons = [];
var proportionalStates = [];

// paint data
var paintIndex = 'Tossup';
var maxColorValue = 2;

var mode = 'paint';

var blockPresets = false;

var maxColorValues = 4;

var mapOptions = {
	updateText: true
}

var strokeMultiplier = 1;

var previousPalette = function() {
	toWinPalette();	
};

function share(autoCenter) {
	displayMenu('sharemenu');

	if(grecaptcha) {
		console.log('reCaptcha detected');
	} else {
		console.log('reCaptcha not detected');
		return;
	}
	
	if(autoCenter) {
		MapManager.centerMap();
	}

	// disable button to prevent spam
	var button = document.getElementById('share-button');
	if(button) {
		button.disabled = true;
		button.style.opacity = '0.5';
		setTimeout(function() {
			button.disabled = false;
			button.style.opacity = '1';
		}, 3000);
	}

	html2canvas(document.getElementById('application'), {logging: true, onclone: function(clone) {
		// remove the custom fonts from the clone
		var svgtext = clone.getElementById('text');
		if(svgtext) {
			svgtext.style.fontFamily = 'arial';
			svgtext.style.fontSize = '15px';
		}
		var svg = clone.getElementById('svgdata');
		var mapdiv = clone.getElementById('map-div');
		if(svg && mapdiv) {
			svg.setAttribute('width', mapdiv.offsetWidth);
			svg.setAttribute('height', mapdiv.offsetHeight);
		}
		var notification = clone.getElementById('legend-tooltip');
		if(notification) {
			notification.style.display = 'none';
		}
		var editButtons = clone.getElementsByClassName('legend-delete');
		for(var index = 0, length = editButtons.length; index < length; ++index) {
			var element = editButtons[index];
			if(element) {
				element.style.display = 'none';
			}
		}
		var addCandidate = clone.getElementById('legend-addcandidate-button');
		if(addCandidate) {
			addCandidate.style.display = 'none';
		}
	}}).then(function(canvas) {
		notification.appendChild(canvas);
		canvas.style.width = 0;
		canvas.style.height = 0;	
		canvas.style.display = 'none';
		var img = canvas.toDataURL('image/png');
		notification.removeChild(canvas);
		var i = document.getElementById('screenshotimg');
		i.src = img;
		i.style.width = '40vw';
		i.style.height = 'auto';
		grecaptcha.execute('6LeDYbEUAAAAANfuJ4FxWVjoxPgDPsFGsdTLr1Jo', {action: 'share'})
		.then(function(token) {
			saveMap_new(img, token);
		});
	});
}

/* CATCH ERRORS AND LOG THEM */
window.onerror = function(message, source, lineno, colno, error) {
	if(typeof gtag !== 'undefined') {
		if(message.includes('a[b].target.className.indexOf') || message.includes('Script error.')) {
			return;
		} else {
			gtag('event', 'error', {
				'event_category': 'error',
				'event_label': message + ', ' + source + ', ' + lineno + ', ' + currentCache,
				'non_interaction': true
			});
		}
	}
}

function autoFill(stateIndex) {
	if(KeyboardManager.keyStates[70]) {
		states[stateIndex].incrementCandidateColor(paintIndex);
		countVotes();
		ChartManager.updateChart();
		LegendManager.updateLegend();
	}
}

function setDelegates(e) {
	e.parentElement.style.display = '';
	var stateid = document.getElementById('demdel-state-name').value;
	var state = states.find(state => state.name === stateid);
	if(!state) {
		state = proportionalStates.find(state => state.name === stateid);
	}
	// keep the total delegates
	var total = state.voteCount;
	for(var key in CandidateManager.candidates) {
		if(key === 'Tossup')
			continue;
		var range = document.getElementById('range-' + key);
		var rangeValue = 0;
		if(range) {
			rangeValue = parseInt(range.value);
		} else {
			gtag('event', 'error', {
				'event_category': 'error',
				'event_label': 'Could not find range element (range-' + key + ') ' + MapLoader.save_filename
			});
		}
		state.delegates[key] = parseInt(rangeValue);
		// subtract the delegates for each candidate
		total -= parseInt(rangeValue);
	}
	// set the tossup delegates to the remaining
	state.delegates['Tossup'] = total;

	var majorityCandidate = 'Tossup';
	var majorityVoteCount = 0;
	for(var key in state.delegates) {
		if(state.delegates[key] > majorityVoteCount) {
			majorityCandidate = key;
			majorityVoteCount = state.delegates[key];
		} else if(state.delegates[key] === majorityVoteCount) {
			majorityCandidate = 'Tossup';
		}
	}
	
	if(majorityCandidate === 'Tossup') {
		state.setColor('Tossup', 2);
	}
	else {
		state.setColor(majorityCandidate, 0);
	}

	countVotes();
	ChartManager.updateChart();
	LegendManager.updateLegend();
}

function setMode(set) {
	console.log('mode ' +  mode + ' | set ' + set + 
		' | mapType ' + MapLoader.save_type + ' | mapYear ' + MapLoader.save_year);

	var notification = document.getElementById('notification');
	var message = notification.querySelector('#notification-message');
	var title = notification.querySelector('#notification-title');

	if(MapLoader.save_year !== 'open') {
		if(set === 'ec' || set === 'candidate' || set === 'delete' || set === 'deletecandidate') {
			title.innerHTML = 'Sorry';
			message.innerHTML = 'This mode is not available while editing a historical ' + MapLoader.save_type + ' map';
			notification.style.display = 'inline';
			console.log('denied');
			return;
		}
	}

	if(MapLoader.save_type === 'gubernatorial') {
		if(set === 'ec') {
			title.innerHTML = 'Sorry';
			message.innerHTML = 'This mode is not available while editing a guberatorial map';
			notification.style.display = 'inline';
			console.log('denied');
			return;
		}
	}

	if(MapLoader.save_type === 'senatorial') {
		//if(set === 'delete' || set === 'ec') {
		if(set === 'ec') {
			title.innerHTML = 'Sorry';
			message.innerHTML = 'This mode is not available while editing a senatorial map';
			notification.style.display = 'inline';
			console.log('denied');
			return;

		}
	}

	if(MapLoader.save_type === 'congressional') {
		//if(set === 'delete' || set === 'ec') {
		if(set === 'ec') {
			title.innerHTML = 'Sorry';
			message.innerHTML = 'This mode is not available while editing a congressional map';
			notification.style.display = 'inline';
			console.log('denied');
			return;
		}
	}
	
	console.log('allowed');

	mode = set;

	var modeHTML = document.getElementById('modesbutton');
	var modeText;
	var notificationText;

	var modeButtons = document.getElementsByClassName('mode-button');
	for(var index = 0; index < modeButtons.length; ++index) {
		var button = modeButtons[index];
		if(button) {
			button.style.opacity = '1';
		}
	}

	if(set === 'paint') {
		modeText = '<i class="fas fa-paint-brush"></i> paint';
		var button = document.getElementById('modebutton-paint');
		button.style.opacity = '0.5';
	} else if(set === 'ec') {
		modeText = '<i class="fas fa-edit"></i> EC Edit';
		notificationText = "Click on a state to set its electoral college";
		var button = document.getElementById('modebutton-ec');
		button.style.opacity = '0.5';
	} else if(set === 'delete') {
		modeText = '<i class="fas fa-eraser"></i> Disable';
		notificationText = "Click on a state to disable/enable it";
		var button = document.getElementById('modebutton-delete');
		button.style.opacity = '0.5';
	}

	var notification = document.getElementById('notification');
	if(mode === 'paint' || mode === 'move' || mode === 'paintmove') {
		notification.style.display = 'none';
	} else if(mode !== 'paint') {
		notification.style.display = 'inline';
		var title = notification.querySelector('#notification-title');
		title.innerHTML = modeText;
		var message = notification.querySelector('#notification-message');
		message.innerHTML = notificationText;
	}
}

// if paint index is invalid, change it to tossup
// ( WORK IN PROGRESS)
function verifyPaintIndex() {
	if(typeof CandidateManager.candidates[paintIndex] === 'undefined') {
		paintIndex = 'Tossup';
	}
}

// iterate over each state and delegate votes to the candidate
function countVotes() {
	var mid = document.getElementById("battlechartmid");
	if(mid !== null) {
		mid.setAttribute("fill", CandidateManager.TOSSUP.colors[2]);
	}

	if(MapLoader.save_type === 'primary' || MapLoader.save_type === 'proportional') {
		for(var key in CandidateManager.candidates) {
			var candidate = CandidateManager.candidates[key];
			candidate.voteCount = 0;
			candidate.probVoteCounts = [0,0,0,0];
			for(var stateIndex = 0, length = states.length; stateIndex < length; ++stateIndex) {
				var state = states[stateIndex];
				if(typeof state.delegates === 'undefined') {
					state.delegates = {};
				}
				if(typeof state.delegates[key] === 'undefined') {
					state.delegates[key] = 0;
					if(key === 'Tossup') {
						state.delegates[key] = state.voteCount;	
					}
				}

				if(isNaN(state.delegates[key])) {
					console.log(state);
				}

				candidate.voteCount += state.delegates[key];
				candidate.probVoteCounts[0] += state.delegates[key];
			}
		}
	} else {
		// iterate over every candidate
		//candidates.forEach(function(candidate, candidateIndex) {
		var candidateIndex = -1;
		for(var key in CandidateManager.candidates) {
			var candidate = CandidateManager.candidates[key];
			++candidateIndex;
			candidate.voteCount = 0;
			candidate.probVoteCounts = [0,0,0,0];
			// iterate over every state
		
			for(var stateIndex = 0, length = states.length; stateIndex < length; ++stateIndex) {
				var state = states[stateIndex];
				// if the candidate value of the state
				// equals the index value of the candidate
				// add the vote count to the candidate 
				if(state.candidate === key) {
					candidate.voteCount += state.voteCount;
					candidate.probVoteCounts[state.colorValue] += state.voteCount;
				}
			}

			for(var stateIndex = 0, length = proportionalStates.length; stateIndex < length; ++stateIndex) {
				var state = proportionalStates[stateIndex];
				if(typeof state.delegates === 'undefined') {
					state.delegates = {};
				}
				if(typeof state.delegates[key] === 'undefined') {
					state.delegates[key] = 0;
					if(key === 'Tossup') {
						state.delegates[key] = state.voteCount;	
					}
				}
				candidate.voteCount += state.delegates[key];
				candidate.probVoteCounts[0] += state.delegates[key];
			}

			if(mid !== null) {
				if(candidate.voteCount > Math.ceil(totalVotes / 2)) {
					if(key === 'Tossup') {
						mid.setAttribute("fill",candidate.colors[2]);
					} else {
						mid.setAttribute("fill", candidate.colors[0]);
					}
				}
			}
		}
	}
}

function onResize() {
	MapManager.centerMap();

	// make sure the height is maxed out if the chart is on the bottom	
	if(ChartManager.chartPosition === 'bottom') {
		var sidebarhtml = document.getElementById('chart-div');
		var charthtml = document.getElementById('chart');
		charthtml.style.height = 'auto';
		charthtml.style.width = '' + (sidebarhtml.offsetHeight - 5) + 'px';
	} else {
		var sidebarhtml = document.getElementById('chart-div');
		var charthtml = document.getElementById('chart');
		charthtml.style.height = 'auto';
		charthtml.style.width = '100%';

	}
}

function setChangeCandidate(oldCandidate, newCandidate) {
	for(var stateIndex = 0, length = states.length; stateIndex < length; ++stateIndex) {
		var state = states[stateIndex];

		if(state.candidate === oldCandidate) {
			state.setColor(newCandidate, state.colorValue);	
		}

		state.delegates[newCandidate] = state.delegates[oldCandidate];
		state.delegates[oldCandidate] = undefined;
	}
}

function start() {
	KeyboardManager.init();
	CandidateManager.initCandidates();
	ChartManager.initChart();
	ChartManager.setChart('horizontalbattle');
	CookieManager.loadCookies();

	if(php_load_map === true) {
		var url = null;
		if(php_load_user === true) {
			url = 'https://yapms.org/users/' + php_load_user_id + '/' + php_load_map_id + '.txt'; 	
		} else {
			url = 'https://yapms.org/maps/' + php_load_map_id + '.txt'; 	
		}
		MapLoader.loadMapFromURL(url);

		if(php_auto_reload) {
			window.setInterval(function() {
				MapLoader.loadMapFromURL(url);
			}, 30000 + (Math.floor(Math.random() * 30000)));
		}
	} else if(php_load_type_map === true) {
		PresetLoader.loadPreset("classic");
		MapLoader.loadMapFromId(php_load_map_id);
	} else {
		PresetLoader.loadPreset("classic");
		MapLoader.loadMap("./res/usa_presidential.svg", 16, 1, "usa_ec", "presidential", "open", {updateText: true, voters: 'usa_voting_pop', enablePopularVote: true});
	}

/*
	LogoManager.loadButtons();
	LogoManager.loadFlags();
*/

	Account.verifyState();
}

start();
