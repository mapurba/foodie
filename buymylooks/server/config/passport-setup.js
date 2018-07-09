const passport = require('passport');
var GoogleStrategy = require('passport-google-oauth2').Strategy;
const keys = require('./keys');
let mongoose = require('mongoose');
const User = mongoose.model('User');
const restaurantSchema = mongoose.model('restaurantSchema');

passport.use('google',
    new GoogleStrategy({
            // options for strategy
            callbackURL: keys.google.redirestUri,
            clientID: keys.google.clientID,
            clientSecret: keys.google.clientSecret,
            passReqToCallback: true
        }, function (request, accessToken, refreshToken, profile, done) {
            // asynchronous verification, for effect...
            process.nextTick(async function () {
                // To keep the example simple, the user's Google profile is returned to
                // represent the logged-in user.  In a typical application, you would want
                // to associate the Google account with a user record in your database,
                // and return that user instead.
                const currentUser = await User.findOne({googleId: profile.id});
                if (currentUser) {
                    // already have the user -> return (login)
                    return done(null, currentUser);
                } else {
                    // register user and return
                    const newUser = await new User({email: email, googleId: profile.id}).save();
                    return done(null, newUser);
                }

            });
        }
    ));
passport.use('google-resturant',
    new GoogleStrategy({
            // options for strategy
            callbackURL: keys.google.ResturantRedirestUri,
            clientID: keys.google.ResturantCclientID,
            clientSecret: keys.google.ResturantClientSecret,
            passReqToCallback: true
        }, function (request, accessToken, refreshToken, profile, done) {
            // asynchronous verification, for effect...
            process.nextTick(async function () {
                const currentRestaurant = await restaurantSchema.findOne({googleId: profile.id});
                if (currentRestaurant) {
                    // already have the user -> return (login)
                    return done(null, currentRestaurant);
                } else {
                    // register user and return
                    const newRestaurant= await new restaurantSchema({email: profile.email, name:profile.givenName,googleId: profile.id}).save();
                    return done(null, newRestaurant);
                }
            });
        }
    ));