let obj1 = { name: "person 1", age: 5 };
let obj2 = { age: 5, name: "person 1" };

function areEqualObjects(obj1, obj2) {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    
    if (keys1.length !== keys2.length) {
        return false;
    }
    
    for (let key of keys1) {
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }
    
    return true;
}

const result = areEqualObjects(obj1, obj2);
console.log(`Objects are ${result ? "equal" : "not equal"}.`);
