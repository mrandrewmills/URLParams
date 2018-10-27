class URLParam extends Object{

	addParam(key, value){
		this[key] = value;
	};

	removeParam(key){
		delete this[key];
	};
	
	makeURLParams(){
		let results = [];
		let tmp = this; // helps reference object within forEach loop below.
		
		Object.keys(tmp).forEach( function(key) {
			// we can't use this here, because current scope gives us wrong object
			results.push( key + "=" + tmp[key] );
		});
		
		return encodeURI( results.join("&") );
	};
	
	addToLink(linkURL){
		let tmpLink = document.createElement("a");
		tmpLink.href = linkURL;
			
		if (tmpLink.search.length == 0)
			tmpLink.search += this.makeURLParams();
		else
			tmpLink.search += "&" + this.makeURLParams();
			
		return tmpLink.href;
	}
}
