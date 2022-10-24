const Manager = require('../lib/Manager');

test('create new manager object', () => {
    const employee = new Manager();
    expect(typeof(employee)).toBe('object');
});

test('set office number', () => {
    const test = 208;
    const employee = new Manager('Dave', 1, 'dave@gmail.com', test);
    expect(employee.officeNumber).toBe(test);
});

test('getRole', () => {
    const test = 'Manager';
    const employee = new Manager('Dave', 1, 'dave@gmail.com', 208);
    expect(employee.getRole()).toBe(test);
});

test('getOfficeNumber', () => {
    const test = 208;
    const employee = new Manager('Dave', 1, 'dave@gmail.com', test);
    expect(employee.getOfficeNumber()).toBe(test);
});

