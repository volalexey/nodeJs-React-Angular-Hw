const express = require('express');
const cors = require('cors');

const productRouter = require('./routes/Products');
const userRouter = require('./routes/User');
const reviewsRouter = require('./routes/Reviews');
const categoryRouter = require('./routes/Category');

const bodyParser = require('body-parser');

const sequelize = require('./config/database');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

(async () => {
    try{
        await sequelize.sync();
        console.log('Tables are synchronized successfully.');
    }
    catch(err){
        console.log('Table sync error:', err);
    }
})();

app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}));

app.get('/', (req, res) => {
    res.end("Hello World!!!!");
})

app.use('/user', userRouter);
app.use('/product', productRouter);
app.use('/review', reviewsRouter);
app.use('/category', categoryRouter);

app.listen(8080, () => console.log('Server started on port 8080'));