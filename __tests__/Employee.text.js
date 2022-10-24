const Employee = require('../lib/Employee');

test('create employee object', () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe('object');
});

test('set employee name', () => {
    const name = 'Dave'
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
});

test('set id', () => {
    const test = '1'
    const employee = new Employee('Dave', test);
    expect(employee.id).toBe(test);
});

test('set email', () => {
    const test = 'dave@gmail.com'
    const employee = new Employee('Dave', 1, test);
    expect(employee.email).toBe(test);
});

test('get name', () => {
    const test = 'Dave'
    const employee = new Employee(test);
    expect(employee.getName()).toBe(test);
});

test('get id', () => {
    const test = '1'
    const employee = new Employee('Dave', test);
    expect(employee.getId()).toBe(test);
});

test('get email', () => {
    const test = 'dave@gmail.com'
    const employee = new Employee('Dave', 1, test);
    expect(employee.getEmail()).toBe(test);
});

test('getRole', () => {
    const test = 'Employee'
    const employee = new Employee('Dave', 1, 'dave@gmail.com');
    expect(employee.getRole()).toBe(test);
});