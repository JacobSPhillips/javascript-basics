// for (let i = 1; i <= 10; i++) {
//     console.log(i)
// }

// for (let i = 0; i <= 20; i += 2) {
//     console.log(i)
// }

// for (let i = 100; i >= 0; i -= 10) {
//     console.log(i)
// }


// for (let i = 0; i < 6; i++) {
//     console.log(`outer ${i}`)
//     for (let j = 0; j < 3; j++) {
//         console.log(`       inner: ${j + 1}`)
//     }
// }

// for (let i=0; i<bigList.length() - 1; i++) {
//     for (let j=0; j<bigList[i].length() - 1; j++)
//         {
//             console.log(bigList[i][j])
//         }
// }

// let count = 0;
// while (count < 10) {
//     count++;
//     console.log(count);
// }

// const secret = "BabyHippo"
// let guess = prompt("Enter the secret code")
// while (guess !== secret) {
//     guess = prompt("Enter the secret code")
// }
// console.log("Congrats")

// let input = prompt("Say something i'm giving up on you");
// while (true) {
//     input = prompt(input);
//     if (input.toLowerCase() === "stop copying me") {
//         break;
//     }
// }
// console.log("No need to be so mean!")

// let maxNum = parseInt(prompt("Enter the max number:"));
// let tries = 0;
// const target = Math.floor(Math.random() * maxNum) + 1;
// let guess = parseInt(prompt("Guess a number: "));
// while (true) {
//     tries++
//     if (guess < target) {
//         guess = parseInt(prompt("Too Low. Guess again:"));
//     } else if (guess > target) {
//         guess = parseInt(prompt("Too high. Guess again:"));
//     }
//     else {
//         tries++;
//         break;
//     }
// }
// console.log(`Good job. That took ${tries} tries.`);

// let maxNum = parseInt(prompt("What is the max number:"));
// const target = Math.floor(Math.random() * 10) + 1;
// let guess = prompt("What is your first guess");
// let attempts = 1;

// while (parseInt(guess) !== target) {
//     if (guess === "q") break;
//     attempts++;
//     if (guess < target) {
//         guess = prompt("Too low. Guess again:");
//     } else {
//         guess = prompt("Too high. Guess again:");
//     }
// }
// console.log(`Good Job. That took ${attempts} tries.`)


// const testScores = {
//     Jacob: 80,
//     Maggie: 100,
//     Noah: 95,
//     Evelyn: 90,
//     Dad: 100,
//     Mom: 95
// }

// for (scores in testScores) {
//     console.log(`${scores}: ${testScores[scores]}`)
// }

// let total = 0
// for (let score of Object.values(testScores)) {
//     total += score;
// }
// let avg = total / Object.values(testScores).length
// console.log(avg)