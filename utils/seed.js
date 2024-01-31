const mongoose = require('mongoose');
const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { getRandomThoughts: generateThoughts } = require('./seedData');
const { firstNames, lastNames } = require('./names');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  // Delete the collections if they exist
  let thoughtCheck = await connection.db.listCollections({ name: 'thoughts' }).toArray();
  if (thoughtCheck.length) {
    await connection.dropCollection('thoughts');
  }

  let userCheck = await connection.db.listCollections({ name: 'users' }).toArray();
  if (userCheck.length) {
    await connection.dropCollection('users');
  }

  var savedUsers = [];
  var savedThoughts = [];

  for (let i = 0; i < 20; i++) {

    const first = firstNames[Math.floor(Math.random() * firstNames.length)];
    const last = lastNames[Math.floor(Math.random() * lastNames.length)];
    let userId = new mongoose.Types.ObjectId();
    let user = new User({
        _id: userId,
        first,
        last,
        age: Math.floor((Math.random() * 80) + 18)
      })
    let thoughts = generateThoughts(Math.floor((Math.random() * 3) + 1), userId)

    for await (const thoughtRaw of thoughts){
      let thought = new Thought(thoughtRaw);
      await thought.save();
      user.thoughts.push(thought);
      savedThoughts.push(thought.toJSON());
    };
    
    await user.save();
    savedUsers.push(user.toJSON());
  }

  // await User.collection.insertMany(users);
  // await Thought.collection.insertMany(thoughts);

  console.table(savedUsers);
  console.table(savedThoughts);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
