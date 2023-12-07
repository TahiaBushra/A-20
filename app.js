"use strict"

// // for of loop (Object)

// const museum = {
//     name: "Bangladesh Museum",
//     buildIn: 1980,
//     location: "Dhaka",
// };

// // There are 3 ways we can use---for of loop---on objects:

// // 1. Object.keys()
// const keys = Object.keys(museum);
// for (const key of keys) {
//     console.log(key);
// };

// //2.Object.values()
// const values = Object.values(museum);
// for (const value of values) {
//     console.log(value);
// };

// // 3.Object.entries()
// const entries = Object.entries(museum);
// for (const [key, value] of entries) {
//     // console.log(entry);
//     console.log(`${key} : ${value}`);
// };

// // Data Structure : 1. Array    2. Object    3. Set    4. Map

// // Set : There are 3 ways to use set . Set always shows unique result which is it eleminates duplicate number.

// 1st Way
// const mySet = new Set();
// mySet.add(15);
// mySet.add(50);
// mySet.add(17);
// mySet.add(15);
// console.log(mySet);

// 2nd Way
// const mySet = new Set([10, 15, 23, 15, 87]);
// console.log(mySet);

// 3rd Way
// const myNum = [2, 5, 9, 4, 2, 5, 7, 3, 1];
// const mySet = new Set(myNum);
// mySet.delete(5); //Delete a number from Set
// // mySet.clear(); //To delete full Set
// console.log(mySet);

// for (const set of mySet) {
//     console.log(set);
// };

// Example-1 : Have to creat a Set in which people with both (boat and umbrella) will be included
// const peopleWithBoat = new Set(["Tahia", "Tamzid", "Tahsin", "Tanima"]);
// const peopleWithUmbrella = new Set(["Tahia", "Tamzid", "Tahmid", "Tayeba"]);

// function findPeopleWithBoth(setBoat, setUmbrella) {
//     const peopleWithBoth = new Set();
//     for (const person of setBoat) {
//         if (setUmbrella.has(person)) {
//             peopleWithBoth.add(person);
//         }
//     }
//     return peopleWithBoth;
// };
// console.log(findPeopleWithBoth(peopleWithBoat, peopleWithUmbrella));

// Example-2 : Have to creat a set which will show the people with only umbrella
// const peopleWithBoat = new Set(["Tahia", "Tamzid", "Tahsin", "Tanima"]);
// const peopleWithUmbrella = new Set(["Tahia", "Tamzid", "Tahmid", "Tayeba"]);

// function findPeopleWithOnlyUmbrella(setBoat, setUmbrella) {
//     const peopleWithOnlyUmbrella = new Set();
//     for (const person of setUmbrella) {
//         if (!setBoat.has(person)) {
//             peopleWithOnlyUmbrella.add(person)
//         }
//     }
//     return peopleWithOnlyUmbrella;
// };
// console.log(findPeopleWithOnlyUmbrella(peopleWithBoat, peopleWithUmbrella));

// Example-3 : Have to creat a set which will show the people with only boat
// const peopleWithBoat = new Set(["Tahia", "Tamzid", "Tahsin", "Tanima"]);
// const peopleWithUmbrella = new Set(["Tahia", "Tamzid", "Tahmid", "Tayeba"]);

// function findPeopleWithOnlyBoat(setBoat, setUmbrella) {
//     const peopleWithOnlyBoat = new Set();
//     for (const person of setBoat) {
//         if (!setUmbrella.has(person)) {
//             peopleWithOnlyBoat.add(person)
//         }
//     }
//     return peopleWithOnlyBoat;
// };
// console.log(findPeopleWithOnlyBoat(peopleWithBoat, peopleWithUmbrella));

// Map

// Example-1
// const myMap = new Map([
//     ["name", "Mimi"],
//     ["rool", 20],
//     [24, "temp"],
//     [true, "it'sRaining"],
// ]);
// myMap.set("subject", "Math");     //To add properties in myMap
// myMap.delete("rool");    //To delete properties from myMap
// // myMap.clear();   //To delete the whole myMap data structure
// console.log(myMap);

// for (const [key, value] of myMap) { console.log(`${key} : ${value}`); };

// Example-2
// const animal = new Map()
// const addAnimals = (species) => {
//     if (animal.has(species)) {
//         let count = animal.get(species);
//         animal.set(species, count + 1)
//     } else {
//         animal.set(species, 1);
//     }
// };
// addAnimals("Tiger");
// addAnimals("Tiger");
// addAnimals("Monkey");
// addAnimals("Elephent");
// addAnimals("Koyala");
// addAnimals("Snake");
// addAnimals("Lepard");
// addAnimals("Rhino");
// addAnimals("Zebra");
// addAnimals("Giraffe");
// addAnimals("Hippo");

// console.log(animal);

// const removeAnimals = (species) => {
//     if (animal.has(species)) {
//         let count = animal.get(species);
//         animal.set(species, count - 1)
//     } else {
//         console.log(`${species} is not available`);
//     }
// };
// removeAnimals("Lion");

// String
// const str = "Assalamualaikum Everyone";
// console.log(str.length);
// console.log(str[5]);
// console.log(str.charAt(7));
// console.log(str.at(-3));
// console.log(str.toLowerCase());
// console.log(str.toUpperCase());
// console.log(str.replace("Everyone", "Everybody"));
// console.log(str.replace(" ", "-"));
// const splittedStr = str.split(" ");
// console.log(splittedStr);
// console.log(str.trim());
// console.log(str.trimEnd());