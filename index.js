const inquirer = require ('inquirer');
const fs = require('fs');
const generateTeam = require('./src/page-template.js');

const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');


const newStaff = [];

const questions = async () =>{
    const answers = await inquirer
    .prompt([
        {
            type:'input',
            message:'What is your name?',
            name: 'name',
        },
        {
            type:'input',
            message:'What is your ID number?',
            name: 'id',
        },
        {
            type:'input',
            message:'What is your email?',
            name: 'email',
        },
        {
            type:'list',
            message:'What is your role?',
            name: 'role',
            choices:['Engineer', 'Intern', 'Manager'],
        },
    ])

    if(answers.role === 'Manager'){
        const mAnswer = await inquirer
        .prompt([
            {
                type:'input',
                message:'What is your office number?',
                name: 'officeNumber',
            },
        ])
        const newManager = new Manager(
            answers.name,
            answers.id,
            answers.email,
            mAnswer.officeNumber
        );
        newStaff.push(newManager);
    }
    else if(answers.role === 'Engineer'){
        const gitAnswer = await inquirer
        .prompt([
            {
                type:'input',
                message:'What is your github?',
                name: 'github',
            }
        ])
        const newEngineer = new Engineer(
            answers.name,
            answers.id,
            answers.email,
            gitAnswer.github
        );
        newStaff.push(newEngineer);
    }
    else if(answers.role === 'Intern'){
        const sAnswer = await inquirer
        .prompt([
            {
                type:'input',
                message:'What school did you attend?',
                name: 'school',
            }
        ])
        const newIntern = new Intern(
            answers.name,
            answers.id,
            answers.email,
            sAnswer.school
        );
        newStaff.push(newIntern);
    }
};

async function prompt(){
    await questions()

    const addStaff = await inquirer
    .prompt([
        {
            name: 'addStaff',
            type: 'list',
            choices: ['Add new staff', 'Create Team'],
            message: 'What would you like to do?'
        }
    ])

    if(addStaff.addStaff === 'Add new staff')
    {
        return prompt()
    }
    return createTeam();
}

questions();

function createTeam(){
    console.log ('New Staff', newStaff)
    fs.writeFileSync('./dist/index.html',
        generateTeam(newStaff),
        'utf-9'
    );
}


