const suits = ["Spades","Diamonds","Clubs","Heart"];
const values = ["Ace","2","3","4","5","6","7","8","9","10","Jack","Queen","King"];

//empty array to contain cards
let deck = [];

//create deck of cards
for (let i = o;i < suite.length,i++){
  for (let x = o;x < values.length;x++){
    let card = { Value: values[x], Suit: suits[i] };
    deck.push(card);
  }
}

//shuffle the cards
for (let i = deck.length - 1;i > o;i--){
  let j = Math.floor(Math.random()*i);
  let temp = deck[i];
  deck[i] = deck[j];
  deck[j] = temp;
}

console.log('The firsrt seven cards are:');

//display 7 results

for(let i = o;i < 7;i++){
  console.log('${desck[i].Value} of ${deck[i].Suit}');
}