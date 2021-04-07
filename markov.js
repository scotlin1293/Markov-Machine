/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    const wordObj={};

    //for each word make an array of the words following that word
    for(let word of this.words){
      let followArray=[];
      for(let i=0; i < this.words.length; i++){
        //if the word shows up more than once, make sure to get the word followinf each instance
        if(this.words[i]===word){
          followArray.push(this.words[i+1]);
        }
      }

      //replace undefined with null
      for(let i=0; i <followArray.length; i++){
        if(followArray[i]===undefined){
          followArray[i]=null;
        }
      }

      wordObj[word]=followArray;
     
    }

    

    return wordObj;

  }
    

    
    // TODO
  


  /** return random text from chains */

  makeText(numWords = 100) {
    // TODO

    //pick a random starting word from this.words
    let startWord = this.words[Math.floor(Math.random() * this.words.length)];
    let chains=this.makeChains();

    

    let sentence = startWord;
    let newStartWord;
    let nextWord;

    for(let i=1; i < numWords; i++){
      if(i===1){
        nextWord= chains[startWord][Math.floor(Math.random() * chains[startWord].length)];
        if (!nextWord) {
          //if null
          break;
        }
        sentence=sentence.concat(" ", nextWord);
        newStartWord=nextWord;
      } else {

        nextWord=chains[newStartWord][Math.floor(Math.random() * chains[newStartWord].length)];
        if(!nextWord){
          //if null
          break;
        }
        sentence=sentence.concat(" ", nextWord);
        newStartWord=nextWord;

      }
      
      
    }

    
    console.log(sentence);
    return sentence;
   


  }
}


module.exports={MarkovMachine};



