// * Case 1

let biodata = {
    name: 'Ferdi Ferdiana',
    age: 22,
    hobbies: ['Menonton film', 'Memanah', 'Berkuda'],
    isMarried: true,
    schoolList: [
        {
            name: 'SD Negeri 1 Pagundan',
            yearIn: 2005,
            yearOut: 2011,
            major: null
        },
        {
            name: 'MTs Negeri Sindangsari',
            yearIn: 2011,
            yearOut: 2014,
            major: null
        },
        {
            name: 'SMA Negeri 2 Kuningan',
            yearIn: 20014,
            yearOut: 2017,
            major: 'Ilmu Pengetahuan Alam'
        }
    ],
    skills: [
        {
            skillName: 'HTML',
            level: 'advanced'
        },
        {
            skillName: 'CSS',
            level: 'beginner'
        },
        {
            skillName: 'Bootstrap',
            level: 'beginner'
        },
        {
            skillName: 'JavaScript',
            level: 'beginner'
        },
        {
            skillName: 'GitHub',
            level: 'beginner'
        }
    ],
    interestInCoding: true 
}

console.log(biodata);
console.log(biodata.schoolList[2]);