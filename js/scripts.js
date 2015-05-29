var replacer = function(userSentence, oldWord, newWord) {
  var sentence = userSentence;
  var oldWord = oldWord;
  var newWord = newWord;

  var fixedSentence = sentence.replace(oldWord, newWord);
  return fixedSentence;
};
