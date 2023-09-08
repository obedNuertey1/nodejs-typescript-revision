//import EventEmitter from 'events';

//class DataBuffer extends EventEmitter{
//	private bufferSize:number;
//	private buffer:Buffer;
//	private charset:string;
//	private newData:Buffer;
	
//	constructor(bufferSize:number, charset:string){
//		super();
//		this.bufferSize = 0;
//		this.buffer = Buffer.alloc(bufferSize);
//		this.charset = charset;
//	}

//	public addData(data:string|number[]):this{//returning the this handle for method chaining
//		this.newData = Buffer.from(data);

//		this.buffer = Buffer.concat([this.buffer, this.newData]);
//		this.bufferSize = this.bufferSize + this.buffer.byteLength;
//		this.emit('dataAdded', data);
//		return this;
//	}

//	public processBuffer():this{//returning the this handle for method chaining
//		let i:number = this.bufferSize;
//		setInterval(()=>{
//			if(i > 0){
//				this.buffer = this.buffer.slice(0, this.buffer.byteLength - 2);
//				this.emit('dataProcessed', this.buffer);
//				i--;
//			}

//		}, 1000);
//		return this;
//	};

//};

//export default DataBuffer;

//const buffer = new DataBuffer(8, "utf8");

//buffer.on('dataAdded', (data:string):void=>{
//	console.log(`Data added to buffer: ${data}`);
//}).on('dataProcessed', (data:Buffer):void=>{
//	console.log(`Data processed from buffer: ${data.toString()}`);
//}).addData("Hello this is it")
//.addData(" yes this is it")
//.addData(" Okay let's go")
//.addData(" let's do this")
//.processBuffer();


import EventEmitter from "events";

class DataBuffer extends EventEmitter{
	private bufferSize:number;
	private buffer:Buffer;
	private charset:string;
	private newData:Buffer;

	constructor(bufferSize:number, charset:string){
		super();
		this.bufferSize = 0;
		this.buffer = Buffer.alloc(bufferSize);
		this.charset = charset;
	}

	public addData(data:string|number[]):this{//returning the this handle for method chaining
		this.newData = Buffer.from(data);
		this.buffer = Buffer.concat([this.buffer, this.newData]);
		this.bufferSize = this.bufferSize + this.buffer.byteLength;
		this.emit('dataAdded', data);
		return this;
	};

	public processBuffer():this{//returning the this handle for method chaining
		let i:number = this.bufferSize;
		setInterval(()=>{
			if(i>0){
				this.buffer = this.buffer.slice(0, this.buffer.byteLength - 2);
				this.emit('dataProcessed', this.buffer);
				i--;
			}
		},1000);
		return this;
	};
};

export default DataBuffer;