GET = function(){
        var cp = location.search.slice(1); // get query string
        var cpa = cp.split("&"); // split into key/value pairs
        var i;
        var o = {}; // output object
        for(i in cpa){
                var ta = cpa[i].split("="); // split on =
                o[ta[0]] = ta[1]; // set o[key] to value
        }
	var anchor = location.hash.slice(1);
	if(anchor != ""){
		o["#"] = anchor; // anchor
	}
        return o;
}();
// $_GET = GET;
