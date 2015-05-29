describe('replacer', function() {
  it("remove's a choosen word from a given sentence and replaces it with another word", function() {
    expect(replacer("that is a sentence", "is", "it")).to.equal("that it a sentence");
  });

  
});
