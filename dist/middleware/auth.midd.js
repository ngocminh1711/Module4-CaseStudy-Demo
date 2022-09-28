"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_local_1 = require("passport-local");
const passport_1 = __importDefault(require("passport"));
const user_schema_1 = __importDefault(require("../models/schemas/user.schema"));
const passport_google_oauth20_1 = __importDefault(require("passport-google-oauth20"));
passport_1.default.serializeUser(function (user, cb) {
    process.nextTick(function () {
        cb(null, { id: user === null || user === void 0 ? void 0 : user._id, username: user.userName });
    });
});
passport_1.default.deserializeUser(function (user, cb) {
    process.nextTick(function () {
        return cb(null, user);
    });
});
passport_1.default.use(new passport_local_1.Strategy(async function verify(username, password, cb) {
    let user = await user_schema_1.default.findOne({
        userName: username,
        password: password,
    });
    console.log(user);
    if (!user) {
        return cb(null, false, { message: 'Incorrect username or password' });
    }
    return cb(null, user);
}));
passport_1.default.use(new passport_google_oauth20_1.default({
    clientID: '1000540683005-tjm9r6p168epfarobrl7g659qae8h0i6.apps.googleusercontent.com',
    clientSecret: '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',
    callbackURL: "http://localhost:8000/google/callback",
    passReqToCallback: true
}, async function (request, accessToken, refreshToken, profile, done) {
    try {
        let user = await user_schema_1.default.findOne({
            google_id: profile.id
        });
        if (!user) {
            let data = {
                username: profile.displayName,
                google_id: profile.id
            };
            let user = new user_schema_1.default(data);
            await user.save();
        }
        return done(null, user);
    }
    catch (e) {
        return done(null, false);
    }
}));
exports.default = passport_1.default;
//# sourceMappingURL=auth.midd.js.map