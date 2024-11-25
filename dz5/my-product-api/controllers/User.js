const User = require('../models/User');

module.exports.getByUsername = async (req, res) => {
    try {
        const user = await User.findOne({where: {username: req.params.username}});
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: error.message
        });
    }
}

module.exports.login = async (req, res) => {
    try{
        const user = await User.findOne({where: {email: req.body.email}});

        if(user){
            const isPasswordValid = req.body.password === user.password;

            if(isPasswordValid){
                res.status(200).json({user});
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
        res.status(500).json({
            status: 'error',
            message: e.message
        });
    }
}

module.exports.register = async (req, res) => {
    try {
        const existingUserEmail = await User.findOne({ where: { email: req.body.email } });
        const existingUserUsername = await User.findOne({ where: { username: req.body.username } });

        if(existingUserEmail && existingUserUsername) {
            res.status(409).json({
                message: 'User is already registered'
            })
        }
        else{
            const user = await User.create({
                email: req.body.email,
                password: req.body.password,
                username: req.body.username,
                isAdmin: req.body.isAdmin,
                sendMessages: req.body.sendMessages
            });

            res.status(201).json({user});
        }
    }
    catch(e){
        res.status(500).json({
            status: 'error',
            message: e.message
        });
    }
}