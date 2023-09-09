export default():void=>{
	console.time("programStart");
	//__filename
	//console.log("********* __filename **********");
	//console.log(__filename);

	////__dirname
	//console.log("\n\n******** __dirname *******");
	//console.log(__dirname);

	//setTimeout(cb, ms)
	console.log("\n\n******** setTimeout(cb, ms) *********");
	function printHello():void{
		console.log("Hello, World!");
	};

	//Now call above function after 2 seconds
	let t:NodeJS.Timeout =setTimeout(printHello, 2000);


	//clearTimeout(t)
	console.log("\n\n********* clearTimeout(t) *********");
	clearTimeout(t);


	//setInterval(cb, ms)
	console.log("\n\n******* setInterval(cb, ms) *******");
	let u:NodeJS.Timeout = setInterval(printHello, 2000);
	
	//clearTimeout(t)
	clearInterval(u);
	console.assert(false, "message");;
	console.timeEnd("programStart");
	console.log(process);

};