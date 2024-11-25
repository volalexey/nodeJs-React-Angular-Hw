const express = require('express')
const exphbs = require('express-handlebars');

const mainRouter = require("./routes/indexRouter");
const aboutRouter = require("./routes/aboutRouter");
const groupsRouter = require("./routes/groupsRouter");
const studentsRouter = require("./routes/studentsRouter");

const path = require('path');

const app = express();

const hbs = exphbs.create({
    extname: 'hbs',
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'views', 'layouts'),
    partialsDir: path.join(__dirname, 'views', 'layouts', 'partials')
});

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use('/', mainRouter);
app.use('/about', aboutRouter);
app.use('/groups', groupsRouter);
app.use('/students', studentsRouter);

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});