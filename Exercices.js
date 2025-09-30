
/*
1. JavaScript Functions
1.1 filterProperties(propNames,obj)
    Receives a string array in propNames and an object in obj. 
    Returns a new object with the properties from obj whose names are present in propNames. 
    If propNames contains names that do not exist in obj, those properties are not added to the returned object.
    {
        Example:
            const props = ['b', 'd', 'g', 'a']
            const o = {a: 1, b: 'Thor', c: [1,2,3], d: {x: 10}, e: 2, f: 'Captain America'}
            console.log(filterProperties(props, o))
            ---
            {a: 1, b: 'Thor', d: {x: 10}}
            ---
    }
*/

/*
    .reduce() :
        array.reduce((accumulator, currentValue, currentIndex, array) => { //return new accumulator value\\ }, initialValue);
        - accumulator → stores the running result as you go through the array.
        - currentValue → the current element of the array.
        - currentIndex → the index of the current element (optional).
        - array → the whole array being reduced (optional).
        - initialValue → the starting value of the accumulator (if not specified, is '0').
*/

const props = ['b', 'd', 'g', 'a']
const obj = {a: 1, b: 'Thor', c: [1,2,3], d: {x: 10}, e: 2, f: 'halo'}

function filterProperties(propNames, obj)
{
    /*
    let result = {};
    for (let prop of propNames) {
        if (prop in obj) {
            result[prop] = obj[prop]
        }
    }
    return result
    */

    return propNames.reduce((acc, curr) => {
        if (curr in obj) {
            acc[curr] = obj[curr]
        }
        return acc
    }, {})
}

console.log(filterProperties(props, obj))

/*
1.2 filterPropertiesN(propNames,objs)
    Receives a string array in propNames and an object array in objs.
    Returns a new object array with objects produced by applying the filterProperties function with propNames to each object in objs.
    {NOTE: In this implementation, the usage of any cycle instruction (for/while) or the Array.forEach method reduces the grade by 50%.}
    {
        Example:
            const props = ['b', 'd', 'g', 'a']
            const objs = [
                {a: 1, b: 'Thor', c: [1,2,3], d: {x: 10}, e: 2, f: 'Captain America'},
                {b: 'Hulk', a: [1,2,3], d: {x: 10}, e: 2, g: false}, 
                {x: 'Vision', y: false}
            ]
            console.log(filterPropertiesN(props, objs))
            ---
            [
            {a: 1, b: 'Thor', d: {x: 10}},
            {b: 'Hulk', a: [1,2,3], d: {x: 10}, g: false}, 
            { }
            ]
            ---
    }
*/

/*
    .push() :
        array.push(element1, element2, ... , elementN);
        - element → The element to add at the end of the array.
*/

const propss = ['b', 'd', 'g', 'a']
const objs = [
                {a: 1, b: 'Thor', c: [1,2,3], d: {x: 10}, e: 2, f: 'Captain America'},
                {b: 'Hulk', a: [1,2,3], d: {x: 10}, e: 2, g: false}, 
                {x: 'Vision', y: false}
            ]

function filterPropertiesN(propNames, objs)
{
    /*
    return objs.reduce((acc, obj) => {
        acc.push(filterProperties(propNames, obj));
        return acc;
    }, [])
    */

    return objs.map(obj, filterProperties(propNames, obj))
}

console.log(filterPropertiesN(propss, objs))

/*
2. Console Customization
2.1 Override console.log
    Write a JavaScript function that overrides the default console.log behavior so that every message logged to the console 
    is automatically prefixed with the current date and time.
    {Note: You can use Date() to get a string with the current date and time in the default format.}
    {
        Example:
            console.log("Hello, world!");
        Output:
            Mon Sep 15 2025 19:42:37 GMT+0000 (Coordinated Universal Time) - Hello, world!
    }
*/

const originalLog = console.log

console.log = function (value) {
    const date = Date();
    originalLog(date + ' - ' + value);
}

console.log("Hello World!")

/*
3. Modularity and Testing
3.1 ECMAScript Module
Include the two functions from Exercise 1 in an ECMAScript module so that they can be imported and reused.
Create a separate module containing example code that imports this module and demonstrates how to call the functions.
*/



/*
3.2 Unit Tests with Mocha
Write a set of unit tests for the functions from Exercise 1 using the Mocha testing framework.
The tests should verify that each function behaves correctly with various inputs, including edge cases.
*/



/*
4. Asynchronous Programming – Promises
4.1 File System with Promises
Using the Node.js promises API for file access, write a program that reads the contents of file liga.json, 
which contains information about the current standings of the first league in JSON format, 
and then creates file liga10goals.json with the teams that have scored more than 10 goals.
*/

import fs from 'node:fs/promises'

const readPromise = fs.readFile("liga.json")
const parsed = JSON.parse(readPromise)
console.log(parsed)

readPromise
    .then(data => fs.writeFile("file2.txt", data.toString()))
    .then(()=>console.log("WRITE DONE"))
    .catch(error => console.log("ERROR", error))

function processData(error, data){
    if(error) return console.log(error)
    console.log(data.toString())
}


const inString = JSON.stringify(parsed)

/*
4.2 Fetch API
Using the fetch function, write a program that makes an HTTP request to obtain information about animated movies and saves the names of all the movies in a JSON file. To get the list of movies, make an HTTP request to: https://api.sampleapis.com/movies/animation
Note: You should use the functions JSON.parse and JSON.stringify when reading from or writing to JSON files.
*/


