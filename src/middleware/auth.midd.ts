import {Strategy as LocalStrategy} from 'passport-local'
import passport from 'passport';
import User from "../models/schemas/user.schema";
import GoogleStrategy from "passport-google-oauth20";


passport.serializeUser(function (user: any, cb) {
    process.nextTick(function () {
        cb(null, {id: user?._id, username: user.userName});
    });
});

passport.deserializeUser(function (user:any, cb) {
    process.nextTick(function () {
        return cb(null, user);
    });
});


passport.use(new LocalStrategy(async function verify(username, password, cb) {
        let user = await User.findOne({
        userName: username,
        password: password,
    })
    console.log(user)
    if (!user) {
        return cb(null, false, {message: 'Incorrect username or password'})
    }
    return cb(null, user)
}))
passport.use(new GoogleStrategy({
        clientID:'1000540683005-tjm9r6p168epfarobrl7g659qae8h0i6.apps.googleusercontent.com',
        clientSecret: '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',
        callbackURL: "http://localhost:8000/google/callback",
        passReqToCallback: true
    },
    async function(request,accessToken, refreshToken, profile, done) {
        try{
            let user = await User.findOne({
                google_id: profile.id
            })
            if (!user) {
                let data = {
                    username: profile.displayName,
                    google_id: profile.id
                }
                let user = new User(data);
                await user.save()

            }
            return done(null, user)
        }catch (e) {
            return done(null, false)
        }
    }
));


export default passport;