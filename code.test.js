const fs = require('fs');
const assert = require('assert');

eval(fs.readFileSync('code.js')+'');

var test1_cycles = [
    [0,1,0,1,0],
    [1,0,0,0,1],
    [0,0,0,1,0],
    [0,1,0,0,1],
    [1,1,0,0,0]
];

var test2_cycles = [
    [0,0,0,0,0],
    [0,0,1,0,1],
    [1,1,0,0,0],
    [0,1,1,0,0],
    [0,0,0,1,0]
]

var test3_cycles = [
    [0,0,0,0,1],
    [0,0,0,1,0],
    [0,1,0,0,0],
    [0,0,1,0,0],
    [1,0,1,0,0]
]

var test4_cycles = [
    [0,1,1],
    [1,0,0],
    [0,0,0]
]

var test5_cycles = [
    [0,1,1,1],
    [1,0,1,0],
    [1,1,0,0],
    [1,0,0,0]
];

var test6_cycles = [
    [0,1,1],
    [1,0,1],
    [0,0,0]
]

var test7_cycles = [
    [0,1,0],
    [0,0,1],
    [1,0,0]
]

var test1_nocycles = [
    [0,1,1],
    [0,0,1],
    [0,0,0]
]

var test2_nocycles = [
    [0,1,1,0,0],
    [0,0,0,0,1],
    [0,0,0,1,0],
    [0,0,0,0,0],
    [0,0,0,1,0]
]

var test3_nocycles = [
    [0,1,0,0],
    [0,0,1,0],
    [0,0,0,0],
    [0,0,1,0]
]

var test4_nocycles = [
    [0,1,0,0],
    [0,0,1,0],
    [0,0,0,0],
    [1,0,0,0]
];

assert(JSON.stringify(hasCycle(test1_cycles)) == JSON.stringify(true)) 
assert(JSON.stringify(hasCycle(test2_cycles)) == JSON.stringify(true)) 
assert(JSON.stringify(hasCycle(test3_cycles)) == JSON.stringify(true)) 
assert(JSON.stringify(hasCycle(test4_cycles)) == JSON.stringify(true)) 
assert(JSON.stringify(hasCycle(test5_cycles)) == JSON.stringify(true)) 
assert(JSON.stringify(hasCycle(test6_cycles)) == JSON.stringify(true))
assert(JSON.stringify(hasCycle(test7_cycles)) == JSON.stringify(true))

assert(JSON.stringify(hasCycle(test1_nocycles)) == JSON.stringify(false)) 
assert(JSON.stringify(hasCycle(test2_nocycles)) == JSON.stringify(false)) 
assert(JSON.stringify(hasCycle(test3_nocycles)) == JSON.stringify(false)) 
assert(JSON.stringify(hasCycle(test4_nocycles)) == JSON.stringify(false)) 
