const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');

module.exports = function (passport) {
  passport.use(
    new GoogleStrategy(
      async (accessToken, refreshToken, profile, done) => {
        const newUser = {
          googleID: profile.id,
          displayname: profile.displayName,
          firstName: profile.name.givenName,
          lastName: profile.name.familyName,
          image: profile.photos[0].value,
        };

        try {
          let user = await googleuser.findOne({ googleID: profile.id });

          if (user) {
            return done(null, user);
          } else {
            user = await googleuser.create(newUser);
            return done(null, user);
          }
        } catch (err) {
          console.error(err);
          return done(err, null);
        }
      }
    )
  );

  passport.serializeUser((user, done) => {
    done(null, user); // Serialize the entire user object
  });

  passport.deserializeUser(async (user, done) => {
    try {
      // No need to find by ID, as the user object itself is stored in the session
      return done(null, user);
    } catch (err) {
      console.error(err);
      return done(err, null);
    }
  });
};