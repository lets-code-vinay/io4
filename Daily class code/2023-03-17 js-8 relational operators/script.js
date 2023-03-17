// --------------- > greater than
console.log(`1 --> ${20 > 30}`);
console.log(`2 --> ${120 > 30}`);
console.log(`3 --> ${120 > 30 > 10}`); // false
console.log(`4 --> ${10 < 30 < 120}`); // true
console.log(`5 --> ${10 < 30 < false}`); // false
console.log(`6 --> ${true > false}`); // true
console.log(`7 --> ${true > "false"}`); // False
console.log(`8 --> ${3 > "2"}`); // True
console.log(`9 --> ${true > null}`); // true
console.log(`10 --> ${true > undefined}`); // false
// greater than and equal to
console.log(`11 --> ${10 >= 10}`); //
console.log(`12 --> ${10 <= 10}`); //

console.log(`13 --> ${"A" <= "A"}`); // true
console.log(`14 --> ${"a" <= "A"}`); // false
console.log(`15 --> ${"A" <= "a"}`); // true
// ASCII codes
console.log(`16 --> ${"^" <= "a"}`); // true
console.log(`17 --> ${"ABC" <= "ab"}`); //

console.log(`-------------------Logical and , OR ------------`);

const isRaining = false; // it is raining outside.
const isCloudy = true; // it is cloudy outside

const thar = true;
const scorpio = false;
const xuv700 = true;

if (isRaining && isCloudy) {
  // false && true
  console.log(`17-- I won't go outside`);
} else {
  console.log(`17-- I will play outside`);
}

if (scorpio && thar && xuv700) {
  console.log("18. -->I will buy all");
} else {
  console.log("18. --> i wont purchase a single one");
}

// true && true -->
if (thar && isCloudy) {
  console.log("19--> i will roam outside in my SUV");
} else {
  console.log("19--> I wont go outside and enjoy my tea");
}

if (2 + 2 === "4") {
  console.log("hello");
} else {
  console.log("bye");
}

if (2 + 2 === "4" || 2 + 2 === 4) {
  // false      or      true     -- true
  // A: bye, S: bye, N:hello, NM:hello R:hello
  console.log("hello 1");
} else {
  console.log("bye 1");
}

// Thar: price; 15
// Sell price: 18
const buyPrice = Number(prompt("Enter Buy Price"));
const sellPrice = Number(prompt("Enter Selling price"));

// 1. buyPrice < sellPrice
// 2. buyPrice > sellPrice
// 3. buyPrice == sellPrice

if (buyPrice < sellPrice) {
  console.log(`Hurray!! i'm in profit of ${sellPrice - buyPrice}Lacs `);
} else if (buyPrice == sellPrice) {
  console.log(`No profit- no loss `);
} else {
  console.log(`Alas!! i'm in loss of ${buyPrice - sellPrice}Lacs `);
}
