// const { firstNames, lastNames } = require('./names')

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


const getRandomThoughts = (int, userId) => {
    let results = [];
    for (let i = 0; i < int; i++) {
        results.push({
            user: userId,
            idea: (seedThoughts[Math.floor(Math.random() * seedThoughts.length)]),
            createdAt: generateRandomDate()
        });
    } return results;
};

const generateRandomDate = () => {
    return new Date(
        2000, 1, 1).getTime() +
        Math.random() * (new Date().getTime() - new Date(2000, 1, 1).getTime());
}

module.exports = { getRandomThoughts };