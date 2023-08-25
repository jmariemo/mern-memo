// import Profile model
const { Profile } = require('../models');
// import sign token function from auth
const { signToken } = require('../utils/auth');
  
module.exports = {
    // pulling a contact through the profile by first name or last name
    async getContact({ user = null, params }, res) {
        const foundUser = await User.findOne({
            $or: [{ _id: user ? user.id : params.id }, { username: params.username }],
        });

        if (!foundUser) {
            return res.status(400).json({ message: 'Cannot find a user with this id!'});
        }

        res.json(foundUser);
    },
    // create an event, sign a token, and send it back to (client/src/components/SignUpForm.js)
    async createContact({ body }, res ) {
        const user = await User.create(body);

        if (!user) {
            return res.status (400). json({ message: 'Something went wrong!'});
        }
        const token = signToken(user);
        res.json({ token, user });
    },
    // login the user, sign a token, send it back (to client/src/components/LoginForm.js)
    // {body} is destructured req.body

    async login({ body }, rest ) {
        const user = await User.findOne({ $or: [{ username: body.username }, { email: body.email }] });
        if (!user) {
            return res.status(400). json({ message: "Can't find this contact" });
        }

        const correctPW = await user.isCorrectPassword(body.password);

        if (!correctPW) {
            return res.status(400).json({ message: "Wrong Password!"});
        }
        const token = signToken(user);
        res.json({ token, user });
    },

    //save a contact to a profile's `savedContacts` field by adding it to the set 
    // user comes from `req.user` created in the auth middleware function

    async saveContact({ user, body }, rest) {
        console.log(user);
        try {
          const updatedProfile = await User.findOneAndUpdate(
            { _id: user._id },
            { $addToSet: { savedBooks: body } },
            { new: true, runValidators: true }
          );
          return res.json(updatedProfile);
        } catch (err) {
            console.log(err);
            return res.status(400).json(err);
        }
    },
};
