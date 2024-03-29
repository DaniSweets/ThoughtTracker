const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    first: String,
    last: String,
    age: Number,
    thoughts: [{
      type: Schema.Types.ObjectId,
      ref: 'Thought'
    }],
  },
  {

    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);


userSchema
  .virtual('fullName')
  .get(function () {
    return `${this.first} ${this.last}`;
  })
  .set(function (v) {
    const first = v.split(' ')[0];
    const last = v.split(' ')[1];
    this.set({ first, last });
  });

const User = model('User', userSchema);

module.exports = User;
