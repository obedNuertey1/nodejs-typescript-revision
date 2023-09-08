import { readFile } from "fs";
export default () => {
    //Blocking Code example
    /*
    let data:Buffer = readFileSync('input.txt');
    
    try{
        console.log(data.toString());
        console.log("Program Ended");
    }catch(err){console.error(err.stack)}
    */
    //Non-Blocking Code Example
    readFile('input.txt', (err, data) => {
        if (err)
            return console.error(err.stack);
        console.log(data.toString());
    });
    console.log("Program Ended");
};
//# sourceMappingURL=callbackConcepts.js.map