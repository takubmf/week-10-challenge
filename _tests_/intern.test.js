const Intern = require('../lib/Intern');

test('creates an Intern object', () => {
    const intern = new Intern('Derrick', 90, 'takubmf@gmail', 'UCR');
    
    expect(intern.school) .toEqual(expect.any(String));
});

test('gets employee school', () => {
    const intern = new Intern('Derrick', 90, 'takubmf@gmail', 'UCR');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('gets role of employee', () => {
    const intern = new Intern('Derrick', 90, 'takubmf@gmail.com', 'UCR');

    expect(intern.getRole()).toEqual("Intern");
}); 