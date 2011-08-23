window.__nev__ = {};
window.onmousedown = function(){
	chrome.extension.sendRequest({time: true, set: true}, function(res){});
	var e = window.__nev__.onmousedown;
	if(typeof(e) == "function"){e()};
};
window.onmousemove = function(){
        chrome.extension.sendRequest({time: true, set: true}, function(res){}); 
        var e = window.__nev__.onmousemove;
        if(typeof(e) == "function"){e()};
};
//window.onmousemove = function(){chrome.extension.sendRequest({set: true, update: true}, function(res){}); window.__nev__.onmousemove()};
window.__defineSetter__("onmousedown", function(v){window.__nev__.onmousedown = v});
window.__defineGetter__("onmousedown", function(){return window.__nev__.onmousedown});
window.__defineSetter__("onmousemove", function(v){window.__nev__.onmousemove = v});
window.__defineGetter__("onmousemove", function(){return window.__nev__.onmousemove});
window.__defineSetter__("__nev__", function(v){window.__nev__.__nev__ = v});
window.__defineGetter__("__nev__", function(){return window.__nev__.__nev__});
