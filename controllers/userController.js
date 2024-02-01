const User = require('../models/User');
const Thought = require('../models/Thought')

module.exports = {

    // return all users
    async getUsers(req, res) {
        try {
            const users = await User.find().populate('thoughts').exec();
            res.json(users);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    //return one user
    async getSingleUser(req, res) {
        try {
            const user = await User.findOne({ _id: req.params.userId })
                .populate('thoughts')
                .select('-__v')
                .exec();

            if (!user) {
                return res.status(404).json({ message: 'No user with that ID' });
            }

            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // create a new user
    async createUser(req, res) {
        try {
            const dbUserData = await User.create(req.body);
            res.json(dbUserData);
        } catch (err) {
            res.status(500).json(err);
        }
    },


    async deleteUser(req, res) {
        try {
            var thoughts = await Thought.find({user: req.params.userId});
            for (let i = 0; i < thoughts.length; i++) {
                await Thought.findOneAndDelete({user: req.params.userId});
            }

            const user = await User.findOneAndDelete({ _id: req.params.userId });

            if (!user) {
                return res
                    .status(404)
                    .json({ message: 'No user with this id!' });
            }

            res.json({ message: 'User successfully deleted!' });
        } catch (err) {
            res.status(500).json(err);
        }
    }
};