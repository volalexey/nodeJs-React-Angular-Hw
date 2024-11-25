const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const errorHandler = require('../utils/errorHandler');
const key = require('../config/KEY');

module.exports.login = async (req, res) => {
    try{
        const user = await User.findOne({where: {email: req.body.email}});

        if(user){
            const isPasswordValid = bcrypt.compareSync(req.body.password, user.password);

            if(isPasswordValid){
                const token = jwt.sign({
                    email: user.email,
                    userId: user.id
                }, key.jwt, { expiresIn: 60 * 60 * 2 });

                res.status(200).json({
                    token: `Bearer ${token}`
                });
            }
            else {
                res.status(401).json({
                    message: 'Incorrect data'
                })
            }
        }
        else{
            res.status(404).json({
                message: 'User not found'
            });
        }
    }
    catch(e){
        errorHandler(res, e, 500);
    }
}

module.exports.register = async (req, res) => {
    try {
        const existingUser = await User.findOne({ where: { email: req.body.email } });

        if(existingUser) {
            res.status(409).json({
                message: 'User is already registered'
            })
        }
        else{
            const salt = bcrypt.genSaltSync(10);
            const hashPassword = bcrypt.hashSync(req.body.password, salt);

            const newUser = await User.create({
                email: req.body.email,
                password: hashPassword
            });

            res.status(201).json(newUser);
        }
    }
    catch(e) {
        errorHandler(res, e, 500);
    }
}