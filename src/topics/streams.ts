//import fs from 'node:fs';
//import zlib from 'node:zlib';
//export default ():void=>{
//	//Reading from a Stream
//	console.log("*********** Reading from a Stream **************");
//	let data:Buffer = Buffer.alloc(256);
	
//	//Create a readable stream
//	let readerStream:fs.ReadStream = fs.createReadStream('input.txt');
	
//	//Set the encoding to be utf8;
//	readerStream.setEncoding('utf8');
	
//	//Handle stream events --> data, end, and error
//	readerStream.on('data', function(chunk:string):void{
//		data.write(chunk);
//	});
	
//	readerStream.on('end', function():void{
//		console.log(data.toString());
//	});
	
//	readerStream.on('error', function(err):void{
//		console.log(err.stack);
//	});
	
//	console.log("Program Ended");

//	//Writing to a Stream
//	console.log("\n\n************ Writing to a Stream *****************");
//	let data2:Buffer = Buffer.from("Simply Easy Learning");

//	//Create a wrtable stream
//	let writerStream:fs.WriteStream = fs.createWriteStream('output.txt');

//	//Write the data to stream with encoding to be utf8
//	writerStream.write(data2.toString("utf8"), "utf8");

//	//Mark the end of file
//	writerStream.end();

//	//Handle stream events --> finish, and error
//	writerStream.on('finish', function():void{
//		console.log("Write completed.");
//	});

//	writerStream.on('error', function(err){
//		console.log(err.stack);
//	});

//	console.log("Program Ended");


//	console.log("\n\n************ Piping the Streams ***************");
//	const readerStream2:fs.ReadStream = fs.createReadStream('input.txt');

//	//create a writable stream
//	const writerStream2:fs.WriteStream = fs.createWriteStream('output.txt');
	
//	//Piple the read and write operations
//	//read input.txt and write data to output.txt
//	readerStream2.pipe(writerStream2);

//	console.log("Program Ended");

//	//Chaining the Streams and Compressing everything
//	console.log("\n\n******* Chaining the streams and Compressing everything *****");
//	//import { Zlib } from 'node:zlib'; See this in action at the top level

//	//Compress the file input.txt to input.txt.gz
//	fs.createReadStream('input.txt').pipe(zlib.createGzip()).pipe(fs.createWriteStream('input.txt.gz'));
//	console.log("File Compressed.");

//	//Decompress the file input.txt.gz to input.txt
//	fs.createReadStream('input.txt.gz').pipe(zlib.createGunzip()).pipe(fs.createWriteStream('input.txt'));

//	console.log("File Decompressed");
//};

import fs from 'node:fs';
import zlib from 'node:zlib';

export default():void=>{
	//Reading from a Stream
	console.log("******** Reading from a Stream *************");
	let data:Buffer = Buffer.alloc(256);

	//Create a readable stream
	let readerStream:fs.ReadStream = fs.createReadStream('input.txt');

	//Set the encoding to be utf8
	readerStream.setEncoding('utf8');

	//Handler stream events --> data, end, error
	readerStream.on('data', function(chunk:string):void{
		data.write(chunk);
	});

	readerStream.on("end", function():void{
		console.log(data.toString());
	});

	readerStream.on('error', function(err: Error):void{
		console.log(err.stack);
	});

	console.log("Program Ended");


	//Writing to a Stream
	console.log("\n\n*********** Writing to a Stream **************");
	let data2:Buffer = Buffer.from("Simply Easy Learning");

	//Create a writable stream
	let writerStream:fs.WriteStream = fs.createWriteStream('output.txt');

	//Write the data to stream with encoding to be utf8
	writerStream.write(data2.toString("utf8"), "utf8");

	//Mark the end of file
	writerStream.end();

	//Handle stream events --> finish, and error
	writerStream.on('finish', function():void{
		console.log("Write completed.");
	});

	writerStream.on('error', function(err: Error){
		console.log(err.stack);
	});

	console.log("Program Ended");

	console.log("\n\n************ Piping the Streams **************");
	const readerStream2:fs.ReadStream = fs.createReadStream('input.txt');

	//Create a writable stream
	const writerStream2:fs.WriteStream = fs.createWriteStream('output.txt');

	//Pipe the read and write operations
	//read input.txt and write data to output.txt
	readerStream2.pipe(writerStream2);

	console.log("Program Ended");


	//Chaining the Streams and Compressing everything
	console.log("\n\n************* Chaining the streams and Compressing everything **************");
	//import zlib from 'node:zlib'; see this in action at the top level

	//Compress the file input.txt to input.txt.gz
	fs.createReadStream('input.txt').pipe(zlib.createGzip()).pipe(fs.createWriteStream('input.txt.gz'));
	console.log("File Compressed.");


	//Decompress the file input.txt.gz to input.txt
	console.log("\n************ Decompress the file input.txt.gz to input.txt **********");
	const createReadStream:fs.ReadStream = fs.createReadStream('input.txt.gz');
	const gunzipStream:zlib.Gunzip = zlib.createGunzip();
	const writeStream:fs.WriteStream = fs.createWriteStream("input.txt");

	createReadStream.on('error', (error: Error):void=>{
		console.error(`Error reading input file: ${error.stack}`);
	}).pipe(gunzipStream).on('error', (error: Error):void=>{
		console.error(`Error decompressing: ${error.stack}`);
	}).pipe(writeStream).on('error', (error: Error)=>{
		console.log(`Error writing output file: ${error.stack}`)
	}).on('finish', ():void=>{
		console.log("File decompressed and written successfully.")
	});

	console.log("File Decompressed");
};