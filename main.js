//All questions should be printed to your Browser's console using console.log()
 
console.log(`Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93. 
-Programmatically subtract the value of the first element in the array from the value in the last element of the array.
-Do not use numbers to reference the last element, find it programmatically.
ages[7] - ages[0] is not allowed!
-Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
-Use a loop to iterate through the array and calculate the average age.`)


let ages = [3, 9, 23, 64, 2, 8, 28, 93]

let minusAge = ages[ages.length - 1] - ages[0];// ages.length gives us the amount of values in the array. -1 will allow us to acess the last value since the index starts at 0 it will be off by 1
console.log(minusAge);

console.log('Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths')

ages.push(103);
let minusAgePush = ages[ages.length -1] - ages[0];
console.log(minusAgePush);

console.log(`-Use a loop to iterate through the array and calculate the average age.`)
let sumOfAges = 0;//this Variable will hold the value for the sum of the numbers
ages.forEach( (age) => {
    sumOfAges += age;
    //console.log(sumOfAges); this is where i check to see if the function works
})//the for each loops runs once for each element, each time it runs it will run the funtion "age" which adds the sum of each element as it runs through the loop
const averageOfAges = sumOfAges / ages.length; //once the loop is finished it must be divided by the length of number in the array, this is what . length is used for. this is then assigned to the variable"averageOfAges" to console log the result
console.log(averageOfAges);
    

console.log(`Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.`)
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']
console.log(names);
console.log(`Use a loop to iterate through the array and calculate the average number of letters per name.`)

let totalCharacters = 0;//this is the vaiable that will hold the value of the total characters

for(let i=0;i < names.length; i++) {
    totalCharacters += names[i].length//this loop will run once for each element and run the "totalCharacters += function, the names[i] targets the index of the arrays and the length will target the amount of characters inside each index assigning it back to the variable of 'totalCharacters'"
}
console.log(totalCharacters);

let charAverage = totalCharacters / names.length;
console.log(charAverage);
console.log(`Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.`)

let newNames = "";

for(let i = 0; i < names.length; i++) {//this loop will run through the array and grab the value or "name" each time and perform the instructions
    newNames = newNames.concat(names[i] + " ");//these set of instructions allow the variable "new name" to concat using the method .concat, it grabes each value in each index '[i]' for the names array

}
console.log(newNames);

console.log(`How do you access the last element of any array?`)
console.log(names[names.length -1]);//the index starts at 0, you have to target the length of the array and subtract by 1 to acess the last element in the index

console.log(`How do you access the first element of any array?`)
console.log(names[0]);//since arrays are '0' index that means the first value can be found using the the "0" inside the brackets

console.log(`Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.`)

let nameLengths = [];//creates a blank new array to hold the new values 
for(let i = 0; i < names.length; i++) {//loop runs to grab the value in each element
    nameLengths.push(names[i].length)//.push adds the number of each element and reassigns it to the nameLenthgs array
    console.log(nameLengths);
}


/*
For example:

let names = ["Kelly", "Sam", "Kate"];    // starting with this array
let nameLengths = [5, 3, 4];             // create a new array
*/
console.log(`Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.`)

console.log(nameLengths);
let sumOfElements = 0;//this gives us a variable where we can assign the total sum of the elements

nameLengths.forEach( (sumOfNames) => {//this will loop through each value in the array once
    sumOfElements += nameLengths.length//this will add each element as it is looped
} )
console.log(sumOfElements);


console.log(`Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').`);

let hello = (word, n) => { //word and 'n' are the arguments to the function called 'hello
    let product = "";//a variable is assigned to a blank string in order to make the argument 'word' a string.
    for(let i = 0; i < n; i++ ){//this loop will run until it reaches the number value in 'n' 
        product += word;//the product will print out a string that is passed through however many times defined by 'n'
    }
    return product;
};
console.log(hello('whatsup', 4));//fucntion hello is called with the argument string of 'whatsup' passed through 4 times

console.log(`Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.`)

let fullName = (firstName, lastName) => `${firstName} ${lastName}`;//function is called fullName, once it is called it will print the First & Last name arguments passed in it
console.log(fullName('Hector', 'Garcia'));

console.log(`Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.`)
let nums = ages//reassigning the array of 'ages' to the the array of 'nums'
console.log(nums);

function sumOfNums(numbers) { //function is called sum of numbers and has a perimeter of 'numbers' which the array of nums will be passed into it
    let sum = 0;
   for(let i = 0; i < numbers.length; i++){
    sum += numbers[i];//this loop is taking each value in the array of 'nums' and its adding to the sum varable until the total number of elements in the array is reached
   }if (sum > 100) {//conditial required by the question
        return true;
   } else {
    return false
   }
}
console.log(sumOfNums(nums));//the console logs by having the function (sumOfNums) called and the array of 'nums' is passed in as the argument to that function


console.log(`Write a function that takes an array of numbers and returns the average of all the elements in the array.`)

function averageOfNums(numbers) {//this function is called averageOfNums and has the perimeter of 'numbers' which will take in the array of 'nums'
    let sum = 0;
   for(let i = 0; i < numbers.length; i++) {//this loop will take each value of the array 'nums' and add it and assign it to the variable of sum
    sum += numbers[i];//this takes each number and adds it as the values are looped
    let average = sum / numbers.length;// the variable 'avarage' hold the total when the sum of the numbers is divided by the total number of elements in the array
    return average
   }
    
}
console.log(averageOfNums(nums));

console.log(`Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.`)
let nums1 = nums;
let nums2 = nameLengths;
console.log(nums1 , nums2);// reassigning the previous arrays so that i have 2 number arrays to use 

function averageOfBothArrs(numbers) {// this function is used to find the average of any array that is passed in by the "numbers" perimeter. both arrays will be passed through when the function of 'averageOfBoth' is called 
    let sum = 0;
    for(let i =0; i < numbers.length; i++) {
        sum += numbers[i];
        let average = sum / numbers.length;
        return average
    }//this is the function that adds the sum of the array passed into it and it return the average
}

function firstIsGrater (firstArr, secondArr) {//this function will pass in each array into the "averageOfBoth" function. it will replace the parimeter of "numbers"
    const averageFirstArr = averageOfBothArrs(firstArr);//this is where each average will be returned to once it is passed through the 'averageOfBoth" function
    const avergaeSecondArr = averageOfBothArrs(secondArr);
     if (averageFirstArr > avergaeSecondArr) {//This is where the comperison of each function will happen, the values are returned and compared. the console will log the result of the comparison
        return true;
     } else {
        return false;
     }
}

console.log(firstIsGrater(nums1, nums2));


console.log(`Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.`)

let willBuyDrink = (isHotOutside, moneyInPocket) => {//this is an anonymous function, which means it is assigned the variable of willBuyDrink
    isHotOutside && moneyInPocket > 10.50//in this comparison the function will return true if both the boolean is 'true' and the numberical value is greater than 10.50
    return true
}

console.log(willBuyDrink(true, 5.99));

console.log(`Create a function of your own that solves a problem. In comments, write what the function does and why you created it.`)
console.log(`This is a practice question from a coding challenge that i attempted on my own this week`)
console.log(`Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)`)


function onlyEvens(nums){// this is the function that is called, and the array is passed into it
    let evens = []// this is where the new array is going to be held 

    nums.forEach( n => {//this is the loop that is used to pass in each value from the array
        if(n % 2 === 0) {// if the value passed in has a mod 2 remaider of 0, then the number is even and will be pushed back into the events array
            evens.push(n)
        }
    } )

    return evens
}

console.log(onlyEvens([1, 2, 3, 4, 5, 6]))
 
