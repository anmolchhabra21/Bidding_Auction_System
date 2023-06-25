const { authenticate } = require("passport");
const bcrypt = require("bcrypt")

const LocalStratergy = require("passport-local").Strategy;

function initialize(passport, getUserByEmail, getUserById){
    const authenticateUser = async(email, password, done)=>{
        const user = await getUserByEmail(email);
        if(user==null){
            console.log("No user with that email")
            return done(null, false, {message: "No user with that email"});
        }
        try{
            if(await bcrypt.compare(password, user.password)){
                console.log("User Send")
                return done(null, user);
            }
            else{
                console.log("Password InCorrect")
                return done(null, false, {message: "Password Incorrect"});
            }
        }catch(e){
            console.log("Pata nhi kya hua");
            return done(e);
        }
    }
    passport.use(new LocalStratergy({usernameField: 'email'}, authenticateUser));
    passport.serializeUser((user, done)=>{
        done(null, user.id);
    })
    passport.deserializeUser((id, done)=>done(null, getUserById(id)));
}

module.exports = initialize;