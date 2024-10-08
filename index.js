// Write your solution in this file!
let employee = {
    name: 'John Doe',
    streetAddress: '5th Street'
}

function updateEmployeeWithKeyAndValue(object, key, value) {
    let newObject = {...object};
    newObject[key] = value;
    return newObject;
}

updateEmployeeWithKeyAndValue(employee, "name", "Jane Doe");

function destructivelyUpdateEmployeeWithKeyAndValue(object, key, value) {
    object[key] = value;
    return object;
}

destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAddress", "10th Street");

function deleteFromEmployeeByKey(object, key) {
    let newObject = {...object};
    delete newObject[key];
    return newObject;
}

deleteFromEmployeeByKey(employee, "streetAddress");

function destructivelyDeleteFromEmployeeByKey(object, key) {
    delete object[key];
    return object;
}

destructivelyDeleteFromEmployeeByKey(employee, "streetAddress");