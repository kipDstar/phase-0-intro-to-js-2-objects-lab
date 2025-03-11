// Write your solution in this file!
const employee = {
    name: 'Sam',
    streetAddress: '11 Broadway'
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = { ...employee };
    newEmployee[key] = value;
    return newEmployee;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee.name = 'Sam';
    employee["streetAddress"] = '12 Broadway';
    return employee;
}
function deleteFromEmployeeByKey(employee, name) {
    const newEmployee = { ...employee };
    delete newEmployee[name];
    return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, name) {
    delete employee[name];
    return employee;
}