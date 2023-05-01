const question = [
    {
        type: 'input',
        message: 'please input your letters',
        name: 'name',
    },
    {
        tpye:' input',
        message: 'please input a color name',
        name : 'textColor',
    },
    {
        type: 'list',
        message: 'please select a shape',
        choices: [
            'circle',
            'triangle',
            'oval',
            'square',
            'rectanlge',
        ],
    },
    {
        type: 'input',
        message: 'please choose a color',
        name: 'logoColor',
    },
];

exports.question = question;