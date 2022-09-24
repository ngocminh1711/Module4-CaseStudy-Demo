import {Strategy as LocalStrategy} from 'passport-local'
import passport from 'passport';
import User from "../models/schemas/user.schema";
import crypto from 'crypto'


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



export default passport;