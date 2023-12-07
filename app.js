"use strict"

// for of loop (Object)

const museum = {
    name: "Bangladesh Museum",
    buildIn: 1980,
    location: "Dhaka",
};

// There are 3 ways we can use---for of loop---on objects:

// 1. Object.keys()                                            
const keys = Object.keys(museum);
for (const key of keys) {
    console.log(key);
};

//2.Object.values()
const values = Object.values(museum);
for (const value of values) {
    console.log(value);
};

// 3.Object.entries()
const entries = Object.entries(museum);
for (const [key, value] of entries) {
    // console.log(entry);
    console.log(`${key} : ${value}`);
} 