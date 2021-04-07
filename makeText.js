/** Command-line tool to generate Markov text. */


const fs= require('fs');
const axios=require('axios');
const process = require('process');
const { MarkovMachine }=require('./markov');
const argv = process.argv;

// const text = fs.readFileSync('eggs.txt','utf8')

// // const fail=fs.readFileSync("fail.txt", 'utf8')
// // console.log(fail)

// let mmm= new MarkovMachine(text)
// mmm.makeText(numWords=10)


// const argv = process.argv;
// console.log(argv)

if(argv.length >=2){
    if(argv[2] === "file"){
        console.log("file")
        console.log(`...generated text from ${argv[3]}:`)
        try{
            let file = fs.readFileSync(argv[3], 'utf8')
            let mmm= new MarkovMachine(file)
            mmm.makeText()

        } catch (e) {
            console.log("Error with file input:", e)
        }
        

    
    } else if(argv[2] ==="url") {
        console.log("url")
        console.log(`...generated text from ${argv[3]}:`)
        makeURLText(argv[3])
    }

}

async function makeURLText(url) {
    let resp;
  
    try {
      resp = await axios.get(url);
    } catch (err) {
      console.error(`Cannot read URL: ${url}: ${err}`);
      process.exit(1);
    }
    let mmm= new MarkovMachine(resp.data)
    mmm.makeText()
}

let eggs = fs.readFileSync('./eggs.txt', {encoding: 'utf8'});
console.log(eggs)
let mmm= new MarkovMachine(eggs)
mmm.makeText(numWords=25)