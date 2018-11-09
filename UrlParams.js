/**
 *  @file UrlParams.js
 *  @brief A JavaScript (ES6) Class for managing URL Parameters easily and accurately
 */
class URLParam extends Object{

	/**
	 *  @brief adds new URL parameter as a key/value pair
	 *  
	 *  @param [in] key, the name of the URL parameter (e.g. utm_source)
	 *  @param [in] value, the value of the URL parameter (e.g. Twitter)
	 *  @return Returns nothing
	 *  
	 *  @details This method will also update/overwrite an existing URL parameter
	 *  addParam("utm_source", "Facebook");
	 *  addParam("utm_source", "Twitter");
	 */
	addParam(key, value){
		try{
			this[key] = value;
		}
		catch(err){
			// add error handling
		}
	};

	/**
	 *  @brief removes the specified URL parameter and value
	 *  
	 *  @param [in] key Description for key
	 *  @return Returns nothing
	 *  
	 *  @details More details
	 */
	removeParam(key){
		try{
			delete this[key];
		}
		catch(err){
			// add error handling
		}
	};
	
	/**
	 *  @brief 
	 *  
	 *  @return Return description
	 *  
	 *  @details More details
	 */
	makeURLParams(){
		try{
			let results = [];
			let tmp = this; // helps reference object within forEach loop below.
			
			Object.keys(tmp).forEach( function(key) {
				// we can't use this here, because current scope gives us wrong object
				results.push( key + "=" + tmp[key] );
			});
			
			return encodeURI( results.join("&") );
		}
		catch(err){
			// add error handling
		}
	};
	
	/**
	 *  @brief 
	 *  
	 *  @param [in] linkURL Description for linkURL
	 *  @return Return description
	 *  
	 *  @details More details
	 */
	addToLink(linkURL){
		try{
			let tmpLink = document.createElement("a");
			tmpLink.href = linkURL;
				
			if (tmpLink.search.length == 0)
				tmpLink.search += this.makeURLParams();
			else
				tmpLink.search += "&" + this.makeURLParams();
				
			return tmpLink.href;
		}
		catch(err){
			// add error handling
		}
	};
	
	/**
	 *  @brief 
	 *  
	 *  @param [in] linkURL Description for linkURL
	 *  @return Return description
	 *  
	 *  @details More details
	 */
	parseLink(linkURL){
		try{
			let tmpLink = document.createElement("a");
			let tmp = this;
			tmpLink.href = linkURL;

			tmpLink.search
				.replace("?","")
				.split("&")
				.forEach( function(param) {
					tmp.addParam( param.split("=")[0], param.split("=")[1] );
			});
		}
		catch(err){
			// add error handling
		}
	};
}