const Intern = require('../lib/Intern');

test('create new intern object', () => {
    const employee = new Intern();
    expect(typeof(employee)).toBe('object');
});

test('set school with constructor', () => {
    const test = 'UCLA';
    const employee = new Intern('Dave', 1, 'dave@gmail.com', test);
    expect(employee.school).toBe(test);
});

test('getRole', () => {
    const test = 'Intern';
    const employee = new Intern('Dave', 1, 'dave@gmail.com', test);
    expect(employee.getRole()).toBe(test);
});

test('get school', () => {
    const test = 'UCLA';
    const employee = new Intern('Dave', 1, 'dave@gmail.com', test);
    expect(employee.getSchool()).toBe(test);
});