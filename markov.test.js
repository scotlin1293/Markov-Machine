const { MarkovMachine } = require("./markov")

describe("MarkovMachine constructor", function () {
    //test that the constructor is functioning properly by making the proper this.words and this.makeChains()
    let mm;
    let a;
    beforeEach(function(){
        mm = new MarkovMachine("the cat in the hat");
        a = class A {}
    })

    test('that mm is in instance of the MarkovMachine', function(){
        expect(mm).toBeInstanceOf(MarkovMachine)
        expect(mm).not.toBeInstanceOf(a)
    })

    test('create this.words from text', function () {
      let mmWords = mm.words;
      expect(mmWords).toContain("cat");
      expect(mmWords).not.toContain("hi");
      expect(mmWords).toBeInstanceOf(Array)
      expect(mmWords).toEqual(["the", "cat", "in", "the", "hat"]);
    });
  
    test('create chains from this.makeChains()', function () {
      let mmChain = mm.makeChains()
      expect(mmChain).toBeInstanceOf(Object)
      expect(mmChain).toEqual({"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]});
    });
  
  });

describe("MarkovMachine makeText method", function () {
    //test that the constructor is functioning properly by making the proper this.words and this.makeChains()
    let mm;
    beforeEach(function(){
        mm = new MarkovMachine("the cat in the hat");
    })

    test('create a new string from the test that was passed in', function () {
        let mmText = mm.makeText()
        expect(mmText).toEqual(expect.any(String))
        let mmWords = mm.words;
        let firstWord=mmText.split(' ')[0]
        expect(mmWords).toContain(firstWord)
        
      });



   
  
});