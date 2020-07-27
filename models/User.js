const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
const { Schema } = mongoose; // line 2 and line 3 is equal; line 3 is used as deconstruct

const userSchema = new Schema({
  googleId: String
});

mongoose.model('users', userSchema);
