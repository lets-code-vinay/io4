// Math is a library of javascript
console.log("Math.abs() ---> provide the absolute values(non-negative)");

console.log(`1. -->  Math.abs(50)`, Math.abs(50));
console.log(`2. -->  Math.abs(-50)`, Math.abs(-50));
console.log(`3. -->  Math.abs(-0)`, Math.abs(-0));

// power
console.log("Math.pow() ---> provide the exponential values(number^power)");
// 10^2 --> 10*10 == 100
// 10^4 --> Math.pow(10, 4)
console.log(`4. --> 10^2 --  Math.pow(10, 2)`, Math.pow(10, 2));
console.log(`5. --> 10^6 --  Math.pow(10, 6)`, Math.pow(10, 6));
console.log(`6. --> 84^6 --  Math.pow(87, 6)`, Math.pow(87, 6));

// square root
console.log("Math.sqrt() ---> provide the square-root values");
console.log(`7. --> 121 square-root --  Math.sqrt(121)`, Math.sqrt(121));
console.log(`8. --> 625 square-root --  Math.sqrt(625)`, Math.sqrt(625));
console.log(`9. --> 1331 square-root --  Math.sqrt(1331)`, Math.sqrt(1331));

// round off -- 45.26554 ==45,
// 46.89 == 47
console.log(`10. --> 48.89 --  Math.round(48.89)`, Math.round(48.89));
console.log(`11. --> 48.189 --  Math.round(48.189)`, Math.round(48.189));
console.log(`12. --> 48.5 --  Math.round(48.5)`, Math.round(48.5));

// ceil/floor
console.log(`13. --> 48.89 --  Math.ceil(48.89)`, Math.ceil(48.89));
console.log(`14. --> 48.89 --  Math.floor(48.89)`, Math.floor(48.89));
console.log(`15. --> 48.5 --  Math.ceil(48.5)`, Math.ceil(48.5)); // 49
console.log(`16. --> 48.5 --  Math.floor(48.5)`, Math.floor(48.5)); // 48
console.log(`17.`, Math.floor(59.9) > Math.ceil(59.9)); // false

//Math.trunc() // Truncate
console.log(`18. --> 47.5 --  Math.trunc(47.5)`, Math.trunc(47.5)); // 47
console.log(`19. --> 98.99 --  Math.trunc(98.99)`, Math.trunc(98.99)); // 98
console.log(`20. --> 78.002 --  Math.trunc(78.002)`, Math.trunc(78.002)); // 78

//Math.min()
console.log(
  `21. -->  Math.min(78,002,89,100, 10, -9,85)`,
  Math.min(78, 002, 89, 100, 10, -9, 85)
); // -9

//Math.max()
console.log(
  `22. -->  Math.max(78,002,89,100, 10, -9,85)`,
  Math.max(78, 002, 89, 100, 10, -9, 85)
); // 100

// Math.random()
console.log(`23. -->  Math.random()`, Math.random()); // 100
console.log(`24. --> round--  Math.random()`, Math.round(Math.random() * 100));
console.log(`25. --> trunc--  Math.random()`, Math.trunc(Math.random() * 100));

// toFixed
console.log(`26. -->  Math.random()`, (Math.random() * 100).toFixed(2)); // 100
console.log(`27. -->  Math.random()`, (457874.568454).toFixed(4)); // 100
