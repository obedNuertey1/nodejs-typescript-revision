
export default ():void=>{
	//Creating Buffers
	//Method1
	let buf:Buffer = Buffer.alloc(10);
	console.log(buf);

	//Method2
	let buf2:Buffer = Buffer.from([10, 20, 30, 40, 50]);
	console.log(buf2);

	//Method 3
	let buf1:Buffer = Buffer.from("Simply Easy Learning", "utf8");
	console.log(buf1);


	//Writing to Buffers
	const bufObj:Buffer = Buffer.alloc(256);
	console.log(bufObj);
	let len:number = bufObj.write("Simply Easy Learning");

	console.log("Octets written : "+len);
	console.log(bufObj);


	//Reading from buffers
	console.log("\n\n**** READING FROM BUFFERS ***********")
	const bufObj2:Buffer = Buffer.alloc(26);
	for(let i = 0; i < 26; i++){
		bufObj2[i] = i + 97;
	}

	let strObj:string = bufObj2.toString('ascii');
	console.log(strObj);
	strObj = bufObj2.toString('ascii', 0, 5);
	console.log(strObj);
	strObj = bufObj2.toString('utf8',0, 5);
	console.log(strObj);
	strObj = bufObj2.toString(undefined, 0, 5);
	console.log(strObj);

	//Convert buffer to JSON
	console.log("\n\n********* CONVERT BUFFER TO JSON **************");
	const bufObj3:Buffer = Buffer.from("Simply Easy Learning");
	interface Ijson{
		type: "Buffer";
		data: number[];
	}

	let json:Ijson = bufObj3.toJSON();
	console.log(json);


	//Concatenate buffers
	//console.log("\n\n*********** Concatenate Buffer ****************");
	//let buffer1:Buffer = Buffer.from("TutorialsPoint");
	//let buffer2:Buffer = Buffer.from("Simply Easy Learning");
	//let buffer3:Buffer = Buffer.concat([buffer1, buffer2]);
	//console.log(`Buffer3 content: ${buffer3.toString("utf8")}`);



	////Compare Buffers
	//console.log("\n\n*********** Compare Buffers*****************");
	//let buffer1:Buffer = Buffer.from('ABC');
	//let buffer2:Buffer = Buffer.from("ABCD");
	//let result:number = buffer1.compare(buffer2);
	//if(result < 0){
	//	console.log(`${buffer1} comes before ${buffer2}`);
	//}else if(result == 0){
	//	console.log(`${buffer1} is same as ${buffer2}`);
	//}else{
	//	console.log(`${buffer1} comes after ${buffer2}`);
	//}


	////Copy Buffer
	//console.log("\n\n************ Copy Buffer ***************");
	//const buffer1:Buffer = Buffer.from('ABC');

	//let buffer2:Buffer = Buffer.alloc(3);
	//buffer1.copy(buffer2);
	//console.log(`buffer2 content: ${buffer2.toString('utf8')}`);


	//Slice Buffer
	//console.log("\n\n************** Slice Buffer ****************");
	//let buffer1:Buffer = Buffer.from("TutorialsPoint");

	//let buffer2:Buffer = buffer1.slice(0, 9);
	//console.log(`buffer2 content: ${buffer2.toString()}`);



	//Buffer Length
	console.log("\n\n*************8 Buffer Length *****************");
	let buffer1:Buffer = Buffer.from("TutorialsPoint");
	//length of the buffer
	console.log(`buffer length: ${buffer1.byteLength}`);
	
	//Buffer class methods
	let isBuffEncoding:boolean = Buffer.isEncoding("utf8");
	console.log(`isBuffEncoding is ${isBuffEncoding}`);

	let isBuffObj:boolean = Buffer.isBuffer(buffer1);
	console.log(`isBuffObj is ${isBuffObj}`);
};