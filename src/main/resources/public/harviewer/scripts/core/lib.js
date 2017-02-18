/* See license.txt for terms of usage */

define("core/lib",["core/trace"],function(e){var t={},n=navigator.userAgent.toLowerCase();t.isFirefox=/firefox/.test(n),t.isOpera=/opera/.test(n),t.isWebkit=/webkit/.test(n),t.isSafari=/webkit/.test(n),t.isIE=/msie/.test(n)&&!/opera/.test(n),t.isIE6=/msie 6/i.test(navigator.appVersion),t.browserVersion=(n.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/)||[0,"0"])[1],t.isIElt8=t.isIE&&t.browserVersion-0<8,t.supportsSelectElementText=window.getSelection&&window.document.createRange||window.document.body.createTextRange,t.extend=function(n,r){var i={};return t.append(i,n),t.append(i,r),i},t.append=function(e,t){for(var n in t)e[n]=t[n];return e},t.bind=function(){var e=t.cloneArray(arguments),n=e.shift(),r=e.shift();return function(){return n.apply(r,t.arrayInsert(t.cloneArray(e),0,arguments))}},t.bindFixed=function(){var e=t.cloneArray(arguments),n=e.shift(),r=e.shift();return function(){return n.apply(r,e)}},t.dispatch=function(t,n,r){for(var i=0;t&&i<t.length;i++){var s=t[i];if(s[n])try{s[n].apply(s,r)}catch(o){e.exception(o)}}},t.dispatch2=function(t,n,r){for(var i=0;i<t.length;i++){var s=t[i];if(s[n])try{var o=s[n].apply(s,r);if(o)return o}catch(u){e.exception(u)}}};var r=Object.prototype.toString,i=/^\s*function(\s+[\w_$][\w\d_$]*)?\s*\(/;return t.isArray=function(e){return jQuery.isArray(e)},t.isFunction=function(e){return e?r.call(e)==="[object Function]"||t.isIE&&typeof e!="string"&&i.test(""+e):!1},t.isAncestor=function(e,t){for(var n=e;n;n=n.parentNode)if(n==t)return!0;return!1},t.fixEvent=function(e){return jQuery.event.fix(e||window.event)},t.fireEvent=function(e,t){if(document.createEvent){var n=document.createEvent("Events");return n.initEvent(t,!0,!1),!e.dispatchEvent(n)}},t.cancelEvent=function(e){var n=t.fixEvent(e);n.stopPropagation(),n.preventDefault()},t.addEventListener=function(e,t,n,r){r=r||!1,e.addEventListener?e.addEventListener(t,n,r):e.attachEvent("on"+t,n)},t.removeEventListener=function(e,t,n,r){r=r||!1,e.removeEventListener?e.removeEventListener(t,n,r):e.detachEvent("on"+t,n)},t.isLeftClick=function(e){return e.button==0&&t.noKeyModifiers(e)},t.noKeyModifiers=function(e){return!e.ctrlKey&&!e.shiftKey&&!e.altKey&&!e.metaKey},t.isControlClick=function(e){return e.button==0&&t.isControl(e)},t.isShiftClick=function(e){return e.button==0&&t.isShift(e)},t.isControl=function(e){return(e.metaKey||e.ctrlKey)&&!e.shiftKey&&!e.altKey},t.isAlt=function(e){return e.altKey&&!e.ctrlKey&&!e.shiftKey&&!e.metaKey},t.isAltClick=function(e){return e.button==0&&t.isAlt(e)},t.isControlShift=function(e){return(e.metaKey||e.ctrlKey)&&e.shiftKey&&!e.altKey},t.isShift=function(e){return e.shiftKey&&!e.metaKey&&!e.ctrlKey&&!e.altKey},t.inflateRect=function(e,t,n){return{top:e.top-n,left:e.left-t,height:e.height+2*n,width:e.width+2*t}},t.pointInRect=function(e,t,n){return n>=e.top&&n<=e.top+e.height&&t>=e.left&&t<=e.left+e.width},t.cloneArray=function(e,t){var n=[];if(t)for(var r=0;r<e.length;++r)n.push(t(e[r]));else for(var r=0;r<e.length;++r)n.push(e[r]);return n},t.arrayInsert=function(e,t,n){for(var r=0;r<n.length;++r)e.splice(r+t,0,n[r]);return e},t.remove=function(e,t){for(var n=0;n<e.length;++n)if(e[n]==t)return e.splice(n,1),!0;return!1},t.formatSize=function(e){var t=1;t=t>2?2:t,t=t<-1?-1:t;if(t==-1)return e+" B";var n=Math.pow(10,t);return e==-1||e==undefined?"?":e==0?"0":e<1024?e+" B":e<1048576?Math.round(e/1024*n)/n+" KB":Math.round(e/1048576*n)/n+" MB"},t.formatTime=function(e){return e==-1?"-":e<1e3?e+"ms":e<6e4?Math.ceil(e/10)/100+"s":Math.ceil(e/6e4*100)/100+"m"},t.formatNumber=function(e){e+="";var t=e.split("."),n=t[0],r=t.length>1?"."+t[1]:"",i=/(\d+)(\d{3})/;while(i.test(n))n=n.replace(i,"$1 $2");return n+r},t.formatString=function(e){var n=t.cloneArray(arguments),e=n.shift();for(var r=0;r<n.length;r++){var i=n[r].toString();e=e.replace("%S",i)}return e},t.parseISO8601=function(e){var n=t.fromISOString(e);return n?n.getTime():null},t.fromISOString=function(e){if(!e)return null;var t=/(\d\d\d\d)(-)?(\d\d)(-)?(\d\d)(T)?(\d\d)(:)?(\d\d)(:)?(\d\d)(\.\d+)?(Z|([+-])(\d\d)(:)?(\d\d))/,n=new RegExp(t),r=e.toString().match(new RegExp(t));if(!r)return null;var i=new Date;i.setUTCDate(1),i.setUTCFullYear(parseInt(r[1],10)),i.setUTCMonth(parseInt(r[3],10)-1),i.setUTCDate(parseInt(r[5],10)),i.setUTCHours(parseInt(r[7],10)),i.setUTCMinutes(parseInt(r[9],10)),i.setUTCSeconds(parseInt(r[11],10)),r[12]?i.setUTCMilliseconds(parseFloat(r[12])*1e3):i.setUTCMilliseconds(0);if(r[13]!="Z"){var s=r[15]*60+parseInt(r[17],10);s*=r[14]=="-"?-1:1,i.setTime(i.getTime()-s*60*1e3)}return i},t.toISOString=function(e){function t(e,t){t||(t=2);var n=new String(e);while(n.length<t)n="0"+n;return n}var n=e.getUTCFullYear()+"-"+t(e.getMonth()+1)+"-"+t(e.getDate())+"T"+t(e.getHours())+":"+t(e.getMinutes())+":"+t(e.getSeconds())+"."+t(e.getMilliseconds(),3),r=e.getTimezoneOffset(),i=Math.floor(r/60),s=Math.floor(r%60),o=(r>0?"-":"+")+t(Math.abs(i))+":"+t(Math.abs(s));return n+o},t.getFileName=function(n){try{var r=t.splitURLBase(n);return r.name}catch(i){e.log(unescape(n))}return n},t.getFileExtension=function(e){if(!e)return null;var t=e.indexOf("?");t!=-1&&(e=e.substr(0,t));var n=e.lastIndexOf(".");return e.substr(n+1)},t.splitURLBase=function(e){return t.isDataURL(e)?t.splitDataURL(e):t.splitURLTrue(e)},t.isDataURL=function(e){return e&&e.substr(0,5)=="data:"},t.splitDataURL=function(e){var n=e.indexOf(":",3);if(n!=4)return!1;var r=e.indexOf(",",n+1);if(r<n)return!1;var i={encodedContent:e.substr(r+1)},s=e.substr(n+1,r),o=s.split(";");for(var u=0;u<o.length;u++){var a=o[u].split("=");a.length==2&&(i[a[0]]=a[1])}if(i.hasOwnProperty("fileName")){var f=decodeURIComponent(i.fileName),l=t.splitURLTrue(f);if(i.hasOwnProperty("baseLineNumber")){i.path=l.path,i.line=i.baseLineNumber;var c=decodeURIComponent(i.encodedContent.substr(0,200)).replace(/\s*$/,"");i.name="eval->"+c}else i.name=l.name,i.path=l.path}else i.hasOwnProperty("path")||(i.path="data:"),i.hasOwnProperty("name")||(i.name=decodeURIComponent(i.encodedContent.substr(0,200)).replace(/\s*$/,""));return i},t.splitURLTrue=function(e){var t=/:\/{1,3}(.*?)\/([^\/]*?)\/?($|\?.*)/,n=t.exec(e);return n?n[2]?{path:n[1],name:n[2]+n[3]}:{path:n[1],name:n[1]}:{name:e,path:e}},t.getURLParameter=function(e){var t=window.location.search.substring(1),n=t.split("&");for(var r=0;r<n.length;r++){var i=n[r].split("=");if(i[0]==e)return unescape(i[1])}return null},t.getURLParameters=function(e){var t=[],n=window.location.search.substring(1),r=n.split("&");for(var i=0;i<r.length;i++){var s=r[i].split("=");s[0]==e&&t.push(unescape(s[1]))}return t},t.getHashParameters=function(e){var t=[],n=window.location.hash.substring(1),r=n.split("&");for(var i=0;i<r.length;i++){var s=r[i].split("=");s[0]==e&&t.push(unescape(s[1]))}return t},t.parseURLParams=function(e){var n=e?e.indexOf("?"):-1;if(n==-1)return[];var r=e.substr(n+1),i=r.lastIndexOf("#");return i!=-1&&(r=r.substr(0,i)),r?t.parseURLEncodedText(r):[]},t.parseURLEncodedText=function(e,n){function s(e){try{return decodeURIComponent(e)}catch(t){return decodeURIComponent(unescape(e))}}var r=25e3,i=[];if(e=="")return i;e=e.replace(/\+/g," ");var o=e.split("&");for(var u=0;u<o.length;++u)try{var a=o[u].indexOf("=");if(a!=-1){var f=o[u].substring(0,a),l=o[u].substring(a+1);l.length>r&&!n&&(l=t.$STR("LargeData")),i.push({name:s(f),value:s(l)})}else{var f=o[u];i.push({name:s(f),value:""})}}catch(c){}return i.sort(function(e,t){return e.name<=t.name?-1:1}),i},t.getBody=function(e){if(e.body)return e.body;var t=e.getElementsByTagName("body")[0];return t?t:null},t.getHead=function(e){return e.getElementsByTagName("head")[0]},t.getAncestorByClass=function(e,n){for(var r=e;r;r=r.parentNode)if(t.hasClass(r,n))return r;return null},t.$=function(){return t.getElementByClass.apply(this,arguments)},t.getElementByClass=function(e,n){if(!e)return null;var r=t.cloneArray(arguments);r.splice(0,1);for(var i=e.firstChild;i;i=i.nextSibling){var s=t.cloneArray(r);s.unshift(i);if(t.hasClass.apply(this,s))return i;var o=t.getElementByClass.apply(this,s);if(o)return o}return null},t.getElementsByClass=function(e,n){function s(e,n,r){for(var i=e.firstChild;i;i=i.nextSibling){var o=t.cloneArray(n);o.unshift(i),t.hasClass.apply(null,o)&&r.push(i),s(i,n,r)}}if(e.querySelectorAll){var r=t.cloneArray(arguments);r.shift();var i="."+r.join(".");return e.querySelectorAll(i)}var o=[],r=t.cloneArray(arguments);return r.shift(),s(e,r,o),o},t.getChildByClass=function(e){for(var n=1;n<arguments.length;++n){var r=arguments[n],i=e.firstChild;e=null;for(;i;i=i.nextSibling)if(t.hasClass(i,r)){e=i;break}}return e},t.eraseNode=function(e){while(e.lastChild)e.removeChild(e.lastChild)},t.clearNode=function(e){e.innerHTML=""},t.hasClass=function(e,t){if(!e||e.nodeType!=1)return!1;for(var n=1;n<arguments.length;++n){var t=arguments[n],r=e.className;if(!r||r.indexOf(t+" ")==-1)return!1}return!0},t.setClass=function(e,n){e&&!t.hasClass(e,n)&&(e.className+=" "+n+" ")},t.removeClass=function(e,t){if(e&&e.className){var n=e.className.indexOf(t);if(n>=0){var r=t.length;e.className=e.className.substr(0,n-1)+e.className.substr(n+r)}}},t.toggleClass=function(e,n){return t.hasClass(e,n)?(t.removeClass(e,n),!1):(t.setClass(e,n),!0)},t.setClassTimed=function(e,n,r){r||(r=1300),e.__setClassTimeout?clearTimeout(e.__setClassTimeout):t.setClass(e,n),e.__setClassTimeout=setTimeout(function(){delete e.__setClassTimeout,t.removeClass(e,n)},r)},t.startsWith=function(e,t,n){return n=n||0,e.indexOf(t,n)===n},t.trim=function(e){return e.replace(/^\s*|\s*$/g,"")},t.wrapText=function(e,n){var r=/[^A-Za-z_$0-9'"-]/,i=[],s=100,o=t.splitLines(e);for(var u=0;u<o.length;++u){var a=o[u];while(a.length>s){var f=r.exec(a.substr(s,100)),l=s+(f?f.index:0),c=a.substr(0,l);a=a.substr(l),n||i.push("<pre>"),i.push(n?c:t.escapeHTML(c)),n||i.push("</pre>")}n||i.push("<pre>"),i.push(n?a:t.escapeHTML(a)),n||i.push("</pre>")}return i.join(n?"\n":"")},t.insertWrappedText=function(e,n,r){n.innerHTML="<pre>"+t.wrapText(e,r)+"</pre>"},t.splitLines=function(e){var t=/\r\n|\r|\n/;if(!e)return[];if(e.split)return e.split(t);var n=e+"",r=n.split(t);return r},t.getPrettyDomain=function(e){var t=/^(?!data:)[^:]+:\/{1,3}(www\.)?([^\/]{1,256})/.exec(e);return t?t[2]:""},t.escapeHTML=function(e){function t(e){switch(e){case"<":return"&lt;";case">":return"&gt;";case"&":return"&amp;";case"'":return"&#39;";case'"':return"&quot;"}return"?"}return String(e).replace(/[<>&"']/g,t)},t.cropString=function(e,n){e+="";if(!n)var r=50;else var r=n/2;return e.length>n?t.escapeNewLines(e.substr(0,r)+"..."+e.substr(e.length-r)):t.escapeNewLines(e)},t.escapeNewLines=function(e){return e.replace(/\r/g,"\\r").replace(/\n/g,"\\n")},t.cloneJSON=function(t){if(t==null||typeof t!="object")return t;try{var n=t.constructor();for(var r in t)n[r]=this.cloneJSON(t[r]);return n}catch(i){e.exception(i)}return null},t.getOverflowParent=function(e){for(var t=e.parentNode;t;t=t.offsetParent)if(t.scrollHeight>t.offsetHeight)return t},t.getElementBox=function(e){var n={};if(e.getBoundingClientRect){var r=e.getBoundingClientRect(),i=t.isIE?document.body.clientTop||document.documentElement.clientTop:0,s=t.getWindowScrollPosition();n.top=Math.round(r.top-i+s.top),n.left=Math.round(r.left-i+s.left),n.height=Math.round(r.bottom-r.top),n.width=Math.round(r.right-r.left)}else{var o=t.getElementPosition(e);n.top=o.top,n.left=o.left,n.height=e.offsetHeight,n.width=e.offsetWidth}return n},t.getElementPosition=function(e){var t=0,n=0;do t+=e.offsetLeft,n+=e.offsetTop;while(e=e.offsetParent);return{left:t,top:n}},t.getWindowSize=function(){var e=0,t=0,n;return typeof window.innerWidth=="number"?(e=window.innerWidth,t=window.innerHeight):(n=document.documentElement)&&(n.clientHeight||n.clientWidth)?(e=n.clientWidth,t=n.clientHeight):(n=document.body)&&(n.clientHeight||n.clientWidth)&&(e=n.clientWidth,t=n.clientHeight),{width:e,height:t}},t.getWindowScrollSize=function(){var e=0,n=0,r;return!t.isIEQuiksMode&&(r=document.documentElement)&&(r.scrollHeight||r.scrollWidth)&&(e=r.scrollWidth,n=r.scrollHeight),(r=document.body)&&(r.scrollHeight||r.scrollWidth)&&(r.scrollWidth>e||r.scrollHeight>n)&&(e=r.scrollWidth,n=r.scrollHeight),{width:e,height:n}},t.getWindowScrollPosition=function(){var e=0,t=0,n;return typeof window.pageYOffset=="number"?(e=window.pageYOffset,t=window.pageXOffset):(n=document.body)&&(n.scrollTop||n.scrollLeft)?(e=n.scrollTop,t=n.scrollLeft):(n=document.documentElement)&&(n.scrollTop||n.scrollLeft)&&(e=n.scrollTop,t=n.scrollLeft),{top:e,left:t}},t.scrollIntoCenterView=function(e,n,r,i){if(!e)return;n||(n=t.getOverflowParent(e));if(!n)return;var s=t.getClientOffset(e);if(!i){var o=s.y-n.scrollTop,u=n.scrollTop+n.clientHeight-(s.y+e.offsetHeight);if(o<0||u<0){var a=s.y-n.clientHeight/2;n.scrollTop=a}}if(!r){var f=s.x-n.scrollLeft,l=n.scrollLeft+n.clientWidth-(s.x+e.clientWidth);if(f<0||l<0){var c=s.x-n.clientWidth/2;n.scrollLeft=c}}},t.getClientOffset=function(e){function t(e,n,r){var i=e.offsetParent,s=r.getComputedStyle(e,"");e.offsetLeft&&(n.x+=e.offsetLeft+parseInt(s.borderLeftWidth)),e.offsetTop&&(n.y+=e.offsetTop+parseInt(s.borderTopWidth)),i?i.nodeType==1&&t(i,n,r):e.ownerDocument.defaultView.frameElement&&t(e.ownerDocument.defaultView.frameElement,n,e.ownerDocument.defaultView)}var n={x:0,y:0};if(e){var r=e.ownerDocument.defaultView;t(e,n,r)}return n},t.addStyleSheet=function(e,n){if(e.getElementById(n))return;var r=e.createElement("link");r.type="text/css",r.rel="stylesheet",r.href=n,r.setAttribute("id",n);var i=t.getHead(e);i.appendChild(r)},t.selectElementText=function(e,t,n){var r=window,i=r.document;if(r.getSelection&&i.createRange){var s=r.getSelection(),o=i.createRange();o.setStart(e,t),o.setEnd(e,n),s.removeAllRanges(),s.addRange(o)}else i.body.createTextRange&&(o=i.body.createTextRange(),o.moveToElementText(e),o.select())},t});