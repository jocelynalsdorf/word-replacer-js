var replacer = function(userSentence, oldWord, newWord) {
  var sentence = userSentence.toLowerCase();
  var userOldWord = oldWord.toLowerCase();
  var userNewWord = newWord;

  var fixedSentence = sentence.replace(userOldWord, newWord);
  return fixedSentence;
};



$(document).ready(function(){

  $("form#string-words").submit(function(event){
      var userSentence = $("input#sentence").val();
      var oldWord = $("input#replace").val();
      var newWord = $("input#new-word").val();
      var result = replacer(userSentence, oldWord, newWord);

      $(".new-sentence").text(result);
      $("#result").show();


    event.preventDefault();
  });


});
