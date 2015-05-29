var replacer = function(userSentence, oldWord, newWord) {
  var sentence = userSentence.toLowerCase();
  var userOldWord = oldWord.toLowerCase();
  var userNewWord = newWord;

  var fixedSentence = sentence.replace(userOldWord, newWord);
  return fixedSentence;
};
