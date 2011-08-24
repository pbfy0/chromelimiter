window.nev = {};
window.onmousedown = function(ev){
	chrome.extension.sendRequest({time: true, set: true}, function(res){});
	var e = window.nev.onmousedown;
	if(typeof(e) == "function"){e(ev)};
};
window.onmousemove = function(ev){
        chrome.extension.sendRequest({time: true, set: true}, function(res){}); 
        var e = window.nev.onmousemove;
        if(typeof(e) == "function"){e(ev)};
};
window.onkeydown = function(ev){
	chrome.extension.sendRequest({time: true, set: true}, function(res){});
        var e = window.nev.onkeydown;
        if(typeof(e) == "function"){e(ev)};
};
window.onkeyup = function(ev){
        chrome.extension.sendRequest({time: true, set: true}, function(res){});
        var e = window.nev.onkeyup;
        if(typeof(e) == "function"){e(ev)};
};
//window.onmousemove = function(){chrome.extension.sendRequest({set: true, update: true}, function(res){}); window.nev.onmousemove()};
window.__defineSetter__("onmousedown", function(v){window.nev.onmousedown = v});
window.__defineGetter__("onmousedown", function(){return window.nev.onmousedown});
window.__defineSetter__("onmousemove", function(v){window.nev.onmousemove = v});
window.__defineGetter__("onmousemove", function(){return window.nev.onmousemove});
window.__defineSetter__("onkeydown", function(v){window.nev.onkeydown = v});
window.__defineGetter__("onkeydown", function(){return window.nev.onkeydown});
window.__defineSetter__("onkeyup", function(v){window.nev.onkeyup = v});
window.__defineGetter__("onkeyup", function(){return window.nev.onkeyup});
window.__defineSetter__("nev", function(v){window.nev.nev = v});
window.__defineGetter__("nev", function(){return window.nev.nev});
