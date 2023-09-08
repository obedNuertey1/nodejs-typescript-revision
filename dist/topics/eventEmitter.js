import events from 'events';
import { listenerCount } from 'node:events';
export default () => {
    const eventEmitter = new events.EventEmitter();
    //listener #1
    const listner1 = () => {
        console.log('listner1 executed.');
    };
    //listner #2
    const listner2 = () => {
        console.log('listner2 executed.');
    };
    //Bind the connection event with the listner1 function
    eventEmitter.addListener('connection', listner1);
    //Bind the connection event with the listner2 function
    eventEmitter.on('connection', listner2);
    let eventListeners = listenerCount(eventEmitter, 'connection');
    console.log(`${eventListeners} Listner(s) listening to connection event`);
    //Fire the connection event
    eventEmitter.emit('connection');
    //Remove the binding of listner1 function
    eventEmitter.removeListener('connection', listner1);
    console.log("Listner1 will not listen now.");
    //Fire the connection event
    eventEmitter.emit('connection');
    eventListeners = listenerCount(eventEmitter, 'connection');
    console.log(`${eventListeners} Listner(s) listening to connection event`);
    console.log("Program Ended.");
};
//# sourceMappingURL=eventEmitter.js.map