const passport = require("passport");
const { Strategy } = require("passport-shraga");


let users = [];

passport.serializeUser((user, cb) => { 
    console.log(user);   
    cb(null, user.id);
});

passport.deserializeUser((id, cb) => {
    var user = users.filter(user => user.id === id).length > 0 ? users.filter(user => user.id === id)[0] : {};
    console.log("seriaa", user);
    user = {
        id: "8430239", // Optional - Change to your Id
        mador: 85, // Toval - is 85
        role: "Commander"
    };
    cb(null, user);
});


const configurePassport = () => {
    passport.use(new Strategy({shragaURL: "http://13.79.7.3", callbackURL: "http://localhost:3300/auth/callback"}, (profile, done) => {
        console.log("my profile " + profile);
        // let length = users.filter(user => user.id === id).length;
        // if (length === 0)
            users.push(profile);
        done(null, profile);
    }))
}
module.exports = configurePassport