// Задача: Написати функцію, яка приймає рядок і повертає його у зворотному порядку,
//  при цьому пропускаючи всі цифри.

function reverseStringWithoutDigits(str) {
  let filteredStr = str.replace(/\d/g, '');
  let reversedStr = filteredStr.split('').reverse().join('');
  return reversedStr;
}

let input = "abc123def456";
let result = reverseStringWithoutDigits(input);
console.log(result); 

console.log(reverseStringWithoutDigits("hello5world")); 
console.log(reverseStringWithoutDigits("abc123xyz"));        
console.log(reverseStringWithoutDigits("123"));
console.log(reverseStringWithoutDigits(""));
console.log(reverseStringWithoutDigits("abcdef"));
console.log(reverseStringWithoutDigits("hello"));
console.log(reverseStringWithoutDigits("1234567890"));

module.exports = reverseStringWithoutDigits;
