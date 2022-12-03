import { IUser } from '@shared/lib/types';
import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { User } from "../db/models/user.schema";

const googleClientId = process.env.GOOGLE_CLIENT_ID as string,
  googleClientSecret = process.env.GOOGLE_CLIENT_SECRET as string;

passport.serializeUser((user, done) => {
  console.log("serialize user called", user);
  return done(null, user);
});

passport.deserializeUser((user: IUser, done) => {
  console.log("deserialize user id ::", user);
  User.findOne({ email: user.email }).then((user) => {
    return done(null, user);
  }).catch(error => {
    done(error, undefined)
  })
});

passport.use(
  new GoogleStrategy(
    {
      clientID: googleClientId,
      clientSecret: googleClientSecret,
      callbackURL: `${process.env.URL_BASE}/auth/google/redirect`,
      scope: ["profile", "email"],
      passReqToCallback   : true
    },
    async (accessToken, refreshToken,params, profile, done) => {
      console.log("HHHHHHOLAAAAAAAAAAAA");
      console.log(JSON.stringify(profile));
      const {
        _json: { email, name },
      } = profile;
      const user = await User.findOne({ email });
      if (user) {
        return done(null, user);
      }
      // If user not exist for first time, we create him
      else {
        const thereAreUsers = await User.find();
        if (thereAreUsers.length) {
          done(new Error("Unauthorized user"), undefined);
        } else {
          new User({
            name,
            email,
            level: 'admin'
          })
            .save()
            .then((user) => {
              console.log("Saved user id :: ", user.id);
              return done(null, user);
            })
            .catch((error) => {
              return done(error, undefined);
            });
        }
      }
    }
  )
);
