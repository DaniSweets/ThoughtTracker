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

const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

const getRandomName = () => {
    `${getRandomArrItem(firstNames)} ${getRandomArrItem(lastNames)}`
};

const getRandomThoughts = (int) => {
    let results = [];
    for (let i = 0; i < int; i++) {
      results.push({idea: getRandomArrItem(seedThoughts)});
    } return results;
};

module.exports = { getRandomName, getRandomThoughts };