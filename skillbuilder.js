// // write a function called addOne() that takes a number as input and returns a new number that's one more than the input.

// var addOne = function (num){
// return num +1
// }
// log (addOne(2))
// // write a function called doubleNum() that takes a number as input and returns the double of the number. 

// var doubleNum = function (num){
// return num * 2
// }

// log(doubleNum(2))

// // write a function called isNegative(). it should take a single, numerical input. it should output true if the number is negative, and false if the number is positive.

// var isNegative = function (num){
//  if (num >= 0){
//      return false}
//     return true
    
// }
// log(isNegative(-2))

// // modify isNegative() so that it only accepts numerical input. it should return the string, "input must be a number," if bad input has been submitted.

// var isNegative = function (num){
// if (typeof num !== 'number'){
//     return 'input must be a number'}
//     if (num >= 0){
//      return false}
//     return true
    
// }
// log(isNegative(-2))


// // write a function called isEven() that tells whether a number is even or not. 
// reset()
// var isEven= function (num){
//     if (num%2===0){
//         return true}return false
// }

// log(isEven(2))
// // write a function called isBig() that tells whether a number is greater than 10,000 or not.

// var isBig = function (num){
//     if(num>10000){return true}return false
// }
// log(isBig(10000))
// // write a function called addPeriod(). it should take as input a string, and return a copy of that string with a period on the end. 

// var addPeriod = function (inputString) {
//     var output = ''
//     output = inputString + "."
//     return output
// }
// log(addPeriod('hi'))

// // write a function called sayItTwice(). it should take as input a string ('bubble') and return that string repeated twice, with a space between ('bubble bubble').

// var sayItTwice = function (string){
//     return string + ' ' + string
// }

// log(sayItTwice('bubble'))

// // write a function called firstShallBeLast(). it should add a copy of the first element of a string to the end of the string, then return the result.

// var firstShallBeLast = function (string){
// return string + string[0]  

// }

// log(firstShallBeLast('hello'))

// // write a function called secondToLast(). it should return the second-to-last element of a string or array. 

// var secondToLast = function(input){
//     return input[input.length-2]
    
// }
// log(secondToLast('hey man'))

// // write a function called hasX(). it should take as input a string, and it should return true if the string contains the character 'x', and false if it does not.

// var hasX = function (string){
// var breakDown = string.split('')
// 	for (var i =0; i< breakDown.length; i++)
//         if(breakDown[i] === 'x')
//         {return true}
//     return false
// }

// log(hasX('heyx'))
// // write a function called hasEl(). it should take two inputs: a string and a character. it should return true if the string contains the character, and false if it does not. if you get it right, try the function on an array and a potential array element instead. does it still work?
// reset()
// var hasEl = function (string,charr){
//     for (var i =0; i<string.length; i++){
//         if(charr=== string[i]){
//             return true}}
// return false
// }
// log(hasEl('sup bro','bro'))
// // write a function called incrementEach(). it should take as input an array of numbers and return a new array that contains each number from the input array, increased by one. 
// var incrementEach = function (array){
//     var newArray = []
//     	for(var i = 0; i < array.length; i++){
//             var newNum = array[i]+1
//             newArray.push(newNum) }
//     return newArray
//     log (newArray)
// }
// log(incrementEach([1,2]))
// // write a function called doubleAll(). it should take as input an array of numbers and return a new array that contains each number from the input array, doubled. 

// var doubleAll = function (arrayNum){
//     var newArray = []
//     	for(var i = 0; i < arrayNum.length; i++){
//             var newNum = arrayNum[i]*2
//             newArray.push(newNum) }
//     return newArray
//     log (newArray) 
// }

// log(doubleAll([2,3]))
// // write a function called getFirstLetterCaps(). it should take as input a string, and it should return a capitalized version of the string's first character.

// var getFirstLetterCaps = function (string){
//     var firstLetter = string.charAt(0)
//     return firstLetter.toUpperCase()
    
// }

// log(getFirstLetterCaps('sup'))

// // write a function called capitalizeWord(). it should take as input a string, and return a copy of that string with the first character capitalized. 

// var getFirstLetterCaps = function (string){
//     var firstLetter = string.charAt(0)
    
//     var cap = firstLetter.toUpperCase()
//     var newWord = ''
//     	for(var i=1; i<string.length;i++){
//             var letter = string[i]
//             newWord= newWord + letter
//     return cap + newWord
            
    
// }

// log(getFirstLetterCaps('sup'))


// // write a function called capitalizeAllWords(). it should take as input an array of strings, and it should return a new array where all the words have been capitalized. HINT: use your capitalizeWord() function from above. 

// var capitalizeAllWords = function(arrayString) {
//     var emptyArray = []
//     for (var i= 0; i<arrayString.length; i++){
//     var words= arrayString[i]
//     emptyArray.push(words.toUpperCase())


//     }
 
//     return emptyArray
// }

// log(capitalizeAllWords(['hey','baby']))

// write a function called arrayToString(). it should take as input an array, and it should concatenate all of the array's elements into one big string, and then return that string. 

// var arrayToString = function (inputArray){
//     var emptyString = '' 
//     for (var i= 0; i<inputArray.length; i++){
//     var words= inputArray[i]
//     emptyString += words
    
//     }
//     return emptyString
// }

// console.log(arrayToString(['hey','dude','man']))

// write a function called shortiesOnly(). taking as input an array of strings, it should return a new array containing only those strings with fewer than four characters. 

var shortiesOnly = function (inputArray){
var emptyString = []
    for (var i= 0; i<inputArray.length; i++){
    var word= inputArray[i]
    if(word.length<4){
        emptyString.push(word)
    }
   

} return emptyString
}

console.log(shortiesOnly(['man','bro','dude']))
// write a function called reverseIt(). it should take as input a string or array (remember that we can often treat them the same way), and it should return a reversed version of that input. 
 
var reverseIt = function (inputArray){

var newArray = []
for(var i=inputArray-1;i>=0;i--){
    var stuff = inputArray[i]
    newArray.push(stuff)}
    return newArray}

console.log(reverseIt('again'))


// write a function called getValue(). it should take two inputs: an object and a key. it should return the corresponding value for that key within the object. keep in mind that this should be a one-line function. no more than two. 

// write a function called getAllValues(). it should take as input an object, and it should return the values of all the keys in the object. 

// write a function called addProp(). It should take three inputs: an object, a property name, and a value. It should return the original object, plus a new key-value pair corresponding to the input.

// write a new version of addProp() that only takes two inputs: an object, and a second object containing a single key-value pair. this key-value pair should take the place of the second and third inputs in the above problem. e.g.:

    // var usrObj = {name: 'linus odoyle', age:10, email:'odoylerules@yahoo.com'}

    // var newObj = addProp(usrObj,{hometown:'new orleans'})
    // newObj should look like this: 
    // {name: 'linus odoyle', age:10, email:'odoylerules@yahoo.com',hometown:'new orleans'}
    // if i run:
        // var newObj = addProp(newObj,{hobby:'bullying'})
        // then newObj should contain even more data:
        // {name: 'linus odoyle', age:10, email:'odoylerules@yahoo.com', hometown:'new orleans', hobby:'bullying'}

// write a function called getKeys(). it should take as input an object, and it should return the names of all the keys (properties) of the object.

// write a function called addPropAll(). it should take three inputs: an array of objects, a property name, and a value. it should return a new array of objects, where each object has been supplemented with the key-value pair from the input. 

// modify addPropAll() in the same way that you modified addProp above. it should take two inptus, an array of objects and a single object containing a single key-value pair. it should return a new array of objects, where each object has been supplemented with the key-value pair from the input.

// write a function called logValues() that takes two inputs: an array of objects, and a property name. for each object in the array, it should log the value stored under the given property name within that object. 

// write a function called getSpecificValues() that takes two inputs: an array of objects, and a property name. it should return an array containing the value stored under that property name for each object. for example, getSpecificValues(booksArray,'author') should return an array containing the author of every book object in the array. 