// Write your solution in this file!
const employee = {
    name: 'Kitty',
    streetAddress: 'Yellow Brick Road'
}
function updateEmployeeWithKeyAndValue(emp, key, value){
    emp = {...employee};
    emp[key] = value;
    return emp; 
}
function destructivelyUpdateEmployeeWithKeyAndValue(emp, key, value){
    emp[key] = value
    return emp;
}
function deleteFromEmployeeByKey(emp, key){
    emp = {...employee};
    delete emp[key];
    return emp;
}
function destructivelyDeleteFromEmployeeByKey(emp, key){
    delete emp[key];
    return emp;
}