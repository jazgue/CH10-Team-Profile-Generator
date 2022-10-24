const Engineer = require('../lib/Engineer');

test('create new engineer object', () => {
    const employee = new Engineer();
    expect(typeof(employee)).toBe('object');
});

test('setting up github', () => {
    const test = 'jazgue';
    const employee = new Engineer('Dave', 1, 'dave@gmail.com', test);
    expect(employee.github).toBe(test);
});

test('getRole', () => {
    const test = 'Engineer';
    const employee = new Engineer('Dave', 1, 'dave@gmail.com', test);
    expect(employee.getRole()).toBe(test);
});

test('get github', () => {
    const test = 'jazgue';
    const employee = new Engineer('Dave', 1, 'dave@gmail.com', test);
    expect(employee.getGithub()).toBe(test);
});
