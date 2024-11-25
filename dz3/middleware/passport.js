const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;

const User = require("../models/User");
const keys = require("../config/KEY");

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: keys.jwt
}

module.exports = passport => {
    passport.use(
        new JwtStrategy(options, async (payLoad, done) => {
            try {
                const user = await User.findByPk(payLoad.userId);
                if (user) {
                    done(null, user);
                } else {
                    done(null, false);
                }
            } catch (err) {
                console.log(err);
                done(err, false);
            }
        })
    )
}