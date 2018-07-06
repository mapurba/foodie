const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys');
let mongoose = require('mongoose');
const User = mongoose.model('restaurantSchema');

passport.use(
    new GoogleStrategy({
        // options for strategy
        callbackURL: keys.google.redirestUri,
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret
    }, async (accessToken, refreshToken, profile, done) => {
        const email = profile.emails[0].value;

        // check if user already exists
        const currentUser = await User.findOne({googleId: profile.id});
        if (currentUser) {
            // already have the user -> return (login)
            return done(null, currentUser);
        } else {
            // register user and return
            const newUser = await new User({email: email, name: profile.displayName, admin: true, googleId: profile.id}).save();
            return done(null, newUser);
        }
    }
));