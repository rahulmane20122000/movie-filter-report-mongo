import passport from "passport";

export const passportSession = () => {
    passport.initialize();
    passport.session();
    passport.serializeUser(function (user, cb) {
        cb(null, user);
    });
    passport.deserializeUser(function (obj: any, cb) {
        cb(null, obj);
    });
};
