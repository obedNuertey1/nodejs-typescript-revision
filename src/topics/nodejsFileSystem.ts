import fs from 'fs';

export default():void=>{
	//let bufObj:Buffer = Buffer.alloc(256);
	//let bufObj2:Buffer = Buffer.alloc(256);
	////Asynchonous read
	//fs.readFile('input.txt', function(err: NodeJS.ErrnoException, data:Buffer):void{
	//	if(err) return console.error(err.stack);

	//	bufObj = Buffer.concat([bufObj, data]);
	//	//console.log(`Asynchronous read: ${data.toString()}`);
	//	console.log(`Asynchronous read: ${bufObj.toString('utf8')}`);
	//})
	////Synchronous read
	

	//let data:Buffer = fs.readFileSync('input.txt');
	//data.copy(bufObj2);
	//console.log(`Synchronous read: ${bufObj2.toString()}`);

	//console.log("Program Ended");

	////Asynchronous - Opening File
	//console.log("\n\n********* Asynchronous - Opening File ************");
	//fs.open('input.txt', 'r+', (err:NodeJS.ErrnoException, fd:number)=>{
	//	console.log("\n\n********* Asynchronous - Opening File ************");
	//	if(err) return console.error(err.stack);
	//	console.log("File opened successfully!");
	//});

	////Check file type
	//console.log("\n\n ****** Check file type *******");
	//fs.stat('input.txt', function(err: NodeJS.ErrnoException, stats:fs.Stats):void{
	//	console.log("\n\n ****** Check file type *******");
	//	if(err) return console.error(err.stack);
	//	console.log(stats);
	//	console.log("Got gile info successfully");

	//	//check file type
	//	console.log(`isFile ? ${stats.isFile()}`);
	//	console.log(`isDirectory ? ${stats.isDirectory()}`);
	//});


	////Writing a file
	//console.log("\n\n *********** Writing a File ************");
	//const bufObj3:Buffer = Buffer.from("Simply Easy Learning!");
	//console.log("Going to write into existing file");
	//fs.writeFile("input.txt", bufObj3.toString("utf8"), function(err: NodeJS.ErrnoException){
	//	console.log("\n\n *********** Writing a File ************");
	//	if(err) return console.error(err.stack);

	//	console.log("Asynchronous read: " + data.toString());
	//})


	////Reading a File
	//console.log("\n\n ************ Reading a File ***********");
	//const bufObj4:Buffer = Buffer.alloc(1024);

	//console.log("Going to open an existing file");
	//fs.open("input.txt", "r+", function(err: NodeJS.ErrnoException, fd:number){
	//	console.log("\n\n ************ Reading a File ***********");
	//	if(err) return console.error(err.stack);

	//	console.log("File opened successfully!");
	//	console.log("Going to read the file");

	//	fs.read(fd, bufObj4, 0, bufObj4.byteLength, 0, function(err: NodeJS.ErrnoException, bytes:number):void{
	//		if(err) return console.log(err.stack);

	//		console.log(`${bytes} bytes read`);

	//		//Print only read bytes to avoid junk.
	//		if(bytes > 0){
	//			console.log(bufObj4.slice(0, bytes).toString());
	//		}
	//	})
	//});

	////closing a file
	//console.log("\n\n ********* Closing a File *************");
	//let bufObj5:Buffer = Buffer.alloc(1024);
	//fs.open('input.txt', 'r+', function(err: NodeJS.ErrnoException, fd:number){
	//	console.log("\n\n ********* Closing a File *************");
	//	if(err) return console.error(err.stack);

	//	console.log("File opened successfully");
	//	console.log("Going to read the file");

	//	fs.read(fd, bufObj5, 0, bufObj.byteLength, 0, function(err: NodeJS.ErrnoException, bytes:number, bytesRead:Buffer):void{
	//		if(err) console.error(err.stack);

	//		if(bytes > 0) {
	//			console.log(bufObj5.slice(0, bytes).toString());
	//		}
	//		console.log(`Actuall bytes ${bytesRead.toString()}`);

	//		fs.close(fd, function(err: NodeJS.ErrnoException):void{
	//			if(err) return console.error(err.stack);

	//			console.log("File close successfully.");
	//		});
	//	});
	//})


	////Truncate a file
	//console.log("\n\n*********** Truncate a File ************");
	//let bufObj6:Buffer = Buffer.alloc(1024);

	//console.log("Going to open an existing file");
	//fs.open('input.txt', 'r+', function(err: NodeJS.ErrnoException, fd:number):void{
	//	console.log("\n\n*********** Truncate a File ************");
	//	if(err) return console.log(err.stack);

	//	console.log("File opened successfully!");
	//	console.log("Going to truncate the file after 10 bytes");

	//	//Truncate the opened file.
	//	fs.ftruncate(fd, 10, function(err: NodeJS.ErrnoException):void{
	//		if(err) return console.error(err.stack);

	//		console.log("File truncate successfully.");
	//		console.log("Going to read the same file");

	//		fs.read(fd, bufObj6, 0, bufObj6.byteLength, 0, function(err:NodeJS.ErrnoException, bytes:number):void{
	//			if(err) return console.error(err.stack);

	//			//Print only read bytes to avoid junk.
	//			if(bytes > 0){
	//				console.log(bufObj6.slice(0, bytes).toString("utf8"));
	//			}

	//			//Close the opened file.
	//			fs.close(fd, function(err:NodeJS.ErrnoException):void{
	//				if(err) return console.error(err.stack);

	//				console.log("File closed successfully.");
	//			});
	//		});
	//	});
	//});


	////Delete a File
	//console.log("\n\n ************ Delete a File *************");
	//console.log("Going to delete an existing file");
	//fs.unlink('input.txt', function(err:NodeJS.ErrnoException):void{
	//	console.log("\n\n ************ Delete a File *************");
	//	if(err) console.error(err.stack);
	//	console.log("File deleted successfully!");
	//});

	//Creating a Directory
	console.log("\n\n*********** Creating a Directory ***************");
	console.log("Going to create a directory /tmp/test");
	fs.mkdir(`./tmp`, function(err:NodeJS.ErrnoException):void{
		if(err) return console.error(err.stack);
		fs.mkdir(`./tmp/test`, function(err:NodeJS.ErrnoException):void{
			if(err) return console.log(err.stack);
			console.log("Directory created successfully");
		});
	});


	//Read a Directory
	console.log("\n\n******** Read a Directory ************");
	console.log("Going to read directory /tmp");
	fs.readdir('./tmp/test', (err:NodeJS.ErrnoException, files: string[]):void=>{
		if(err) return console.error(err.stack);
		files.forEach((file)=>{
			console.log(file);
		});
	});

	//Remove Directory with fs.rm(path, {recursive: boolean}, callback)
	console.log("\n\n*********** Remove Directory *********");
	fs.rm("./tmp", {recursive: true}, function(err:NodeJS.ErrnoException):void{
		if(err) return console.error(err);
		console.log("Going to read directory /tmp");

		fs.readdir("./tmp/test", (err:NodeJS.ErrnoException, files: string[]):void=>{
			if(err) return console.error(err.stack);
			files.forEach((file)=>{
				console.log(file);
			});
		});
	});
};