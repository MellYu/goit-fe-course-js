const findLongestWord = function (string) {
  // твой код
  const text = string.split(" ");
  let longestWord = '0';
  for (let i = 0; i < text.length; i += 1) {
    if (longestWord.length <= text[i].length) {
     longestWord = text[i];
    }
  }
  return longestWord;
};
/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

console.log(findLongestWord("Google do a roll")); // 'Google'

console.log(findLongestWord("May the force be with you")); // 'force'
