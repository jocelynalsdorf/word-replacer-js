describe('replacer', function() {
  it("remove's a choosen word from a given sentence and replaces it with another word", function() {
    expect(replacer("that is a sentence", "is", "it")).to.equal("that it a sentence");
  });

  it("replaces the given word regardless of the sentences' capitalization", function() {
    expect(replacer("That sentence", "that", "the")).to.equal("the sentence");
  });

  it("replaces the given word regardless of the user's word's capitalization", function() {
    expect(replacer("that sentence", "That", "the")).to.equal("the sentence");
  });

});
