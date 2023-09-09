import express from 'express';
import fs from 'fs';
//export default():void=>{
//	const app:any = express();

//	app.get('/', function(req:any, res:any):void|any{
//		res.send("Hello World!");
//	});

//	let server:any = app.listen(8081, function():void{
//		let host:string = server.address().address;
//		let port:string = server.address().port;

//		console.log(`Example app listening at http://${host}:${port}`);
//	});

//};

export default():void=>{
	//Basic Routing
	console.log("\n\n********** Basic Routing ************");
	const app:any = express();
	
	app.use(express.static('public'));
	
	app.get('/index.html', function(req:any, res:any):void{
		res.sendFile(`${__dirname}/index.html`);
	});

	app.get('/process_get', function(req:any, res:any):void{
		//Prepare output in JSON format
		interface Iresponse<T> {
			first_name: T;
			last_name: T;
		};

		const response:Iresponse<string> = {
			first_name: req.query.first_name,
			last_name: req.query.last_name
		};

		const bufObj:Buffer = Buffer.from(JSON.stringify(response));

		fs.open('myCredentials.json', "w+", function(err:NodeJS.ErrnoException, fd:number):void|any{
			if(err) return console.error(err.stack);
			
			const writerStream:fs.WriteStream = fs.createWriteStream('myCredentials.json');
			writerStream.write(bufObj.toString('utf8'), 'utf8');
			writerStream.end();
			writerStream.on('error', function(err: Error):void{
				console.log(`An error of ${err.stack} occured whilst writing file`);
			});
			writerStream.on('finish', function():void{
				console.log('finished writing file');
			});
		});

		console.log(response);
		res.json(response);
	});
	////This responds with "Hello World" on the homepage
	//app.get('/', function(req:any, res:any):void|any{
	//	console.log("Got a GET request for the homepage");
	//	res.send("Hello GET");
	//});

	////This responds a POST request for the homepage
	//app.post('/', function(req:any, res:any):void|any{
	//	console.log("Got a POST request for the homepage");
	//	res.send('Hello POST');
	//});

	////This responds a DELETE request for the /del_user page.
	//app.delete('/del_user', function(req:any, res:any):void|any{
	//	console.log("Got a DELETE request for /del_user");
	//	res.send("Hello DELETE");
	//});

	////This responds a GET request for the /list_user page.
	//app.get('/list_user', function(req:any, res:any):void{
	//	console.log("Got a GET request for /list_user");
	//	res.send("Page Listing");
	//});

	////This responds a GET request for abcd, abxcd, ab123cd, and so on
	//app.get(/ab*cd/, function(req:any, res:any):void{
	//	console.log("Got a GET request for /ab*cd");
	//	res.send('Page Pattern Match');
	//});


	const server:any = app.listen(8081, function():void{
		let host:string = server.address().address;
		let port:string = server.address().port;

		console.log("Example app listening at http://%s:%s", host, port);
	});
};