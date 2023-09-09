import os from "node:os";
import path from "node:path";
import net from "node:net";
import fs from "node:fs";
import dns from "node:dns";
import {EventEmitter} from "node:events";
import domain from "domain";

export default():void=>{
	console.log("******* The OS Module **********");
	//console.info(os);
	//console.log(os.totalmem());
	//console.log(os.hostname());
	////console.log(os.networkInterfaces());
	////console.log(os.cpus());
	//console.log(os.type());
	//console.log(os.arch());

	console.log('\n\n************* The Path Module **********');
	//Normalization
	console.log(`normalization : ${path.normalize('/test/test1//2slashes/1slash/tab/..')}`);

	//Join
	console.log(`joint path : ${path.join('/test', 'test1', '2slashes/1slash', 'tab', '..')}`);

	//Resolve
	console.log(`resolve : ${path.resolve('index.js')}`);

	//extName
	console.log(`ext name : ${path.extname('main.js')}`);

	//The net module
	console.log('\n\n************* The net Module *************');
	//Server
	const bufObj:Buffer = Buffer.alloc(256);
	const server:net.Server = net.createServer(function(connection:net.Socket):void{
		console.log("********** Server ***********");
		console.log('client connected');

		connection.on('end', function():void{
			console.log('client disconnected');
		});

		fs.open('myread.txt', 'r+', (err: NodeJS.ErrnoException, fd:number):void=>{
			if(err) return console.log(err.stack);

			let readerStream:fs.ReadStream = fs.createReadStream('myread.txt');

			readerStream.setEncoding('utf8');

			readerStream.on("data", (chunk: Buffer)=>{
				bufObj.write(chunk.toString());
			});

			readerStream.on("error", (err: Error)=>{
				console.log(err.stack);
			});

			readerStream.on('end', ():void=>{
				connection.write(bufObj.toString('utf8'));
			});

			fs.close(fd, (err:NodeJS.ErrnoException):void=>{
				if(err) return console.error(err.stack);
				console.log("data stored in bufObj successfully");
			});
		});

		connection.on('error', function(error:Error):void{//Instead of using try and catch blocks for events we could just use the error event and log to our console any error that was catched
			console.log(error.stack);
		});

		connection.pipe(connection);
	});

	server.listen(8080, function():void{
		console.log('server is listening');
	});

	//Client
	const client = net.connect({port: 8080}, function(){
		console.log("\n\n********** client ***********");
		console.log('connected to server!');
	});

	client.on('data', function(data: Buffer):void{
		console.log(data.toString());
		fs.open('helloWorld.txt', 'w+', (err:NodeJS.ErrnoException, fd:number)=>{
			if(err) return console.log(err.stack);

			//Write to the file 
			fs.write(fd, data, (err:NodeJS.ErrnoException, written:number, buf:Buffer)=>{
				if(err) return console.log(err.stack);
				console.log("file has been written successfully");
			});

			fs.close(fd, (err:NodeJS.ErrnoException):void=>{
				if(err) return console.error(err.stack);
				console.log("file closed successfully");
			});
		});
		client.end();
	});

	client.on('end', function():void{
		console.log('disconnected from server');
	});


	//NodeJS dns module
	console.log("\n\n*********** NodeJS dns module *************");
	dns.lookup('www.google.com', 4, (err:NodeJS.ErrnoException, address:string, family: number):void=>{
		if(err) return console.log(err.stack);

		console.log(`reverse for ${address}: ${family}`);
		dns.reverse(address, function(err:NodeJS.ErrnoException, hostnames:string[]):void{
			if(err) return console.log(err.stack);

			console.log(`reverse for ${address}: ${JSON.stringify(hostnames)}`);
		});
	});

	//Domain module
	console.log("\n\n************ Domain module **************");
	const emitter1:EventEmitter = new EventEmitter();

	//Create a domain
	const domain1:domain.Domain = domain.create();

	domain1.on('error', function(err:NodeJS.ErrnoException):void{
		console.log(`domain1 handled this error (${err.message})`);
	});

	//Explicit binding
	domain1.add(emitter1);

	emitter1.on("error", function(err:NodeJS.ErrnoException):void{
		console.log(`listener handled this error ${err.message}`);
	});

	emitter1.emit('error', new Error("To be handled by listener"));
	emitter1.removeAllListeners('error');
	emitter1.emit('error', new Error('To be handled by domain1'));

	let domain2: domain.Domain = domain.create();

	domain2.on('error', function(err){
		console.log(`domain2 handled this error ${err.message}`);
	});

	//Implicit binding
	domain2.run(function():void{
		let emitter2:EventEmitter = new EventEmitter();
		emitter2.emit("error", new Error('To be handled by domain2'));
	});
	//domain1.remove(emitter1);
	//emitter1.emit("error", new Error((`Converted to exception, system will crash!`)));
};