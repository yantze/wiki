async version
```
var fs = require('fs');
var request = require('request');

var urls = new Array("http://www.yahoo.com","http://www.bing.com");

for (var i = 0; i < urls.length; i++) {

    var file = 'log'+[i]+'.txt';
    var url = urls[i];

    console.log(url);
    console.log(file);

	request(url, function (error, response, body) {
	  if (!error && response.statusCode == 200) {
	  	console.log('request url: '+url);
	  	console.log('request file: '+file);
	  	fs.writeFile(file, body);
	  }
	});
	
}
```

/*
Output:
http://www.yahoo.com
log0.txt
http://www.bing.com
log1.txt
request url: http://www.bing.com
request file: log1.txt
request url: http://www.bing.com
request file: log1.txt
*/


revised version 1
```
var fs = require('fs');
var request = require('request');

var urls = new Array("http://www.yahoo.com","http://www.bing.com");

function scrape(url,file){

	request(url, function (error, response, body) {
	  if (!error && response.statusCode == 200) {
	  	console.log('request url: '+url);
	  	console.log('request file: '+file);
	  	fs.writeFile(file, body);
	  }
	});

}
for (var i = 0; i < urls.length; i++) {

    var file = 'log'+[i]+'.txt';
    var url = urls[i];

    console.log(url);
    console.log(file);

    scrape(url,file);
	
}
```
/*
http://www.yahoo.com
log0.txt
http://www.bing.com
log1.txt
request url: http://www.bing.com
request file: log1.txt
request url: http://www.yahoo.com
request file: log0.txt
*/
