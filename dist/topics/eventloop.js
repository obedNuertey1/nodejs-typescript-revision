import fs from 'fs';
//export default ():void=>{
//	//Create an eventEmitter object instance
//	const eventEmitter = new events.EventEmitter();
//	//Create an event handler as follows
//	const connectHandler = ():void=>{
//		console.log('connection successful.');
//		//Fire the data_received event
//		eventEmitter.emit('data_received'); //3. 'data_received' event is fired
//	};
//	//Bind the connection event with the handler
//	eventEmitter.on('connection', connectHandler);//connectHandler function listens to the fired 'connection' event and executes 2.
//	//Bind the data_received event with the ananymous function
//	eventEmitter.on('data_received', ():void=>{//4. the anonymous function is fired as such
//		console.log('data received successfully.');
//	}); 
//	//Fire the connection event
//	eventEmitter.emit('connection'); //connection is fired 1.
//	console.log("Program Ended")
//};
//How node works
export default () => {
    fs.readFile('input.txt', (err, data) => {
        if (err)
            return console.error(err.stack);
        console.log(data.toString());
    });
    console.log("Program Ended");
};
//# sourceMappingURL=eventloop.js.map