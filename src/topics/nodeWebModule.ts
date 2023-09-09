import http from 'http';
import fs from 'fs';
import url from 'url';

//export default():void=>{
//	//Create a server
//	http.createServer(function(request:http.IncomingMessage, response:http.ServerResponse<http.IncomingMessage>):void{
//		//Parse the request contain the file name
//		let pathname:string = url.parse(request.url).pathname;

//		//Print the name of the file for which request is made.
//		console.log(`Request for ${pathname} received.`);

//		//Read the requested file content from file system
//		fs.readFile(pathname.substr(1), function(err:NodeJS.ErrnoException, data:Buffer):void{
//			if(err){
//				console.error(err.stack);
//				//HTTP Status: 404 : NOT FOUND
//				//Content Type: text/plain
//				response.writeHead(404, {'Content-Type': 'text/html'});
//			}else{
//				//Page found
//				//HTTP Status: 200 : OK
//				//Content Type: text/plain
//				response.writeHead(200, {'Content-Type': 'text/html'})
	
//				//Write the content of the file to response body
//				response.write(data.toString('utf8'));
//			}
			
	
//			//Send the response body
//			response.end();
//		});
//	}).listen(8081);

//	//Console will print the message
//	console.log('Server running at http://127.0.0.1:8081/');

//};

export default():void=>{
	//Create a server
	http.createServer(function(request:http.IncomingMessage, response:http.ServerResponse<http.IncomingMessage>):void{
		//Parse the request contain the file name
		let pathname:string = url.parse(request.url).pathname;

		//Print the name of the file for which request is made.
		console.log(`Request for ${pathname} received.`);

		//Read the requested file content from file system
		fs.readFile(pathname.substr(1), function(err:NodeJS.ErrnoException, data:Buffer):void{
			if(err){
				console.error(err.stack);
				//HTTP Status: 404 : NOT FOUND
				//Content Type: text/plain
				response.writeHead(404, {'Content-Type': 'text/html'});
			}else{
				//Page found
				//HTTP Status: 200 : OK
				//Content Type: text/plain
				response.writeHead(200, {'Content-Type': 'text/html'});

				//Write the content of the file to response body
				response.write(data.toString('utf8'));
			}

			//Send the response body
			response.end();
		});
	}).listen(8081);

	//Console will print the message
	console.log('Server running at http://127.0.0.1:8081/');
};