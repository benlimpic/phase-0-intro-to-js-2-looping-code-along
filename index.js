// Code your solutions in this file

// for (let age = 30; age < 40; age++) {
//   console.log(`I\'m ${age} years old. Happy Birthday to me!`);
// }

// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//   for (let i = 0; i < gifts.length; i++) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//   }
//   return gifts;
// }

// wrapGifts(gifts);

const messagesArray = [];

function writeCards(array, eventName) {
  for (let i = 0; i < array.length; i++) {
    let messages = `Thank you, ${array[i]}, for the wonderful ${eventName} gift!`;
    messagesArray.push(messages);
  }
  console.table(messagesArray);
  return messagesArray;
}

writeCards(/*["Ben", "Issie", "Bob", "Daisy", "Batman", "robin", "Aquaman"], "Pizza Party"*/);

function countDown(number) {
  while (number >= 0) {
    console.log(number--);
  }
}

countDown();
