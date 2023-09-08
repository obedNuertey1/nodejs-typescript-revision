import { readFileSync, readFile } from "fs";
export default ():void=>{
	//Blocking Code example
	/*
	let data:Buffer = readFileSync('input.txt');
	
	try{
		console.log(data.toString());
		console.log("Program Ended");
	}catch(err){console.error(err.stack)}
	*/

	//Non-Blocking Code Example
	readFile('input.txt', (err:NodeJS.ErrnoException, data:Buffer):void=>{
		if(err) return console.error(err.stack);
		console.log(data.toString());
	});

	console.log("Program Ended");
};