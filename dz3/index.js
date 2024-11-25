const express = require('express');

const authRouter = require('./routes/auth');
const productRouter = require('./routes/product');

//parse data from post-requests
const bodyParser = require('body-parser');

//logging information from requests
const morgan = require('morgan');

//using db
// const {Sequelize} = require('sequelize');
const sequelize = require('./config/database');

//add passport
const passport = require('passport');

const app = express();
//add passport using
app.use(passport.initialize());
require('./middleware/passport')(passport);

//parse data from post-requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//logging information from requests
app.use(morgan('dev'));

//connecting database!!!
// const sequelize = new Sequelize('nodeJsMSSQLTest', 'sa'/*username*/, '12345'/*password*/, {
//     host: 'localhost',
//     dialect: 'mssql',
//     dialectOptions: {
//         // authentication: {
//         //     type: 'ntlm',//windows auth
//         //     options:{
//         //         domain: ''
//         //     }
//         // },
//         options: {
//             encrypt: true,//connector codding, true for Azure
//             trusted: true,//trust certificate
//         }
//     },
// });
//try to connect to db
// (async () => {
//     try{
//         await sequelize.authenticate();
//         console.log("Successfully authenticated!");
//     }
//     catch(e){
//         console.log(e);
//     }
// })();

//table sync
(async () => {
    try {
        await sequelize.sync();
        console.log('Tables are synchronized successfully.');
    } catch (error) {
        console.error('Table sync error:', error);
    }
})();

//connecting routes
app.use('/auth', authRouter);
app.use('/product', productRouter);

//test
app.get('/', (req, res) => {
    res.end("Hello)!!!!!");
})

app.listen(8080, () => console.log('Server started on port 8080'));