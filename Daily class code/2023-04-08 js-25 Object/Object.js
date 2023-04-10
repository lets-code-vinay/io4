// Create Object using Object.create method

//1. first method to create object ---------
const newObj = Object.create(null);

newObj.name = "Raju";
// output  newObj {}
console.log("object new", newObj);

//2. 2nd method to create object --
const car = {
  name: "Audi", // static method to push a property in the object
  color: "red",
  speed: "15mpl",
};

//3. push new property in the object
// objectName.propertyName = 'value of the property'  //dynamic method ---

car.modal = "new Modal"; // dynamic method to push a property in the object
car.speed1 = "10mpl";

// console.log("this is a empty object", car);

//4. 3rd method to create a object

//5. using a predefine object to create a object -------
const thirdObj = Object.create(car);
console.log(thirdObj);

//6. delete a property from the object by using delete method --------
delete car.name;
delete car.speed1;
console.log("deleted object", car);

// const arr = [10, 20, 30, 40];
// // arr.shift(0); // delete from fron side

// arr.pop();
// // arr.delete(3);
// console.log(arr);

const obj = Object.create(null);

obj.name = "test name";

obj.secondVal = "2";

console.log(obj);

delete obj.name;

// how to create a empty array
// const newArr = [];

// const newArr1 = new Array();

// console.log("newArr", newArr, "newArr1", newArr1);

// create a empty object
const objNew = Object.create(null);
console.log(objNew); // empty  object ----

//7. Freeze a object --
// method  Object.freeze()

const freezeObj = {
  name: "test",
  value: "4",
};

freezeObj.test = "test1";

// Object.freeze(freezeObj);

freezeObj.newVal = "newVal";

delete freezeObj.name;

console.log("freezObj", freezeObj);

// to check an object that it is freeze or not ------
//8. method Object.isFrozen(objectName)

console.log(Object.isFrozen(freezeObj)); // 1st method to check a object is freeze or not

//9. to check an object is extensible or not ----
// method  Object.isExtensible()

console.log(Object.isExtensible(freezeObj)); // 2nd method to check a object is extensible or not

const newCar = {
  name: "Audi", // static method to push a property in the object
  color: "red",
  speed: "15mpl",
};

// const emptyObj = {};
// emptyObj.name = "newName";
// console.log(emptyObj);
//10. to check a property is exist in the object or not ---
// method  Object.hasOwn(objectName, 'property name')

// console.log("exist property", Object.hasOwn(newCar, "name"));
// console.log("exist property", Object.hasOwn(emptyObj, "name"));

// 11. method to change the property value in the object

newCar.name = "newCarName";
console.log("newCar", newCar);
