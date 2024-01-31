const { firstNames, lastNames } = require('./names')

const seedThoughts = [
    'Did I turn off the stove?',
    "What's the meaning of life?",
    'Need more coffee.',
    'I miss summer.',
    'Pizza for dinner?',
    'Why is time so fast?',
    'Traffic again!',
    "What's that song?",
    'Weekend plans?',
    'Is it Friday yet?',
    'New year, new me?',
    'Is this a dream?',
    'Why am I here?',
    'Rainy days suck.'
];

const getRandomArrayItem = (array) => array[Math.floor(Math.random() * array.length)];

// const getRandomFirstName = () => {
//     // getRandomArrayItem(firstNames);
//     firstNames[Math.floor(Math.random() * firstNames.length)]
// };

// const getRandomLastName = () => {
//     getRandomArrayItem(lastNames);
// };

const getRandomThoughts = (int) => {
    let results = [];
    for (let i = 0; i < int; i++) {
        results.push({ idea: getRandomArrayItem(seedThoughts) });
    } return results;
};

module.exports = { getRandomFirstName, getRandomLastName, getRandomThoughts };