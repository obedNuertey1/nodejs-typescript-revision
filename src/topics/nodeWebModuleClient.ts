import http from 'node:http';
export default ():void=>{
	//Options to be used by request
	interface Irequest<T>{
		host: T;
		port: T;
		path: T;
	};

	let options: Irequest<string> = {
		host: 'localhost',
		port: '8081',
		path: '/index.html'
	};

	//Callback function is used to deal with response
	const callback = (response:http.IncomingMessage):void=>{
		//Continously update stream with data
		let body:string = '';
		response.on('data', function(data:Buffer):void{
			body += data.toString('utf8');
		});

		response.on('end', function():void{
			//Data received completely.
			console.log(body);
		});
	};

	//Make a request to the server
	const req:http.ClientRequest = http.request(options, callback);
	req.end();
};