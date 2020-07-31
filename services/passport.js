const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users')

passport.serializeUser((user, done) => {
	done(null, user.id);
});

passport.deserializeUser((id, done) => {
	User.findById(id)
			.then(user => {
				done(null, user);
			});
});
console.log("what is the clientId: ", keys.googleClientID);
console.log("what is the Process Env", process.env);
passport.use(
	new GoogleStrategy(
	{
		clientID: keys.googleClientID,
		clientSecret: keys.googleClientSecret,
		callbackURL: '/auth/google/callback'
	}, (accessToken, refreshToken, profile, done) => {
		User.findOne({ googleId: profile.id })
			.then((existingUser) => {
				if (existingUser){
					//already have a record with the given profile
					done(null, existingUser);
				} else {
					// make a new record
					new User({ googleId: profile.id })
						.save() //save to the database;
						.then(user => done(null, user));
				}
			})
		// console.log('accessToken', accessToken);
		// console.log('refresh Token', refreshToken);
		// console.log('profile', profile);
	})
); // create a new google strategy; callback function as second parameter
