const express = require('express');
const app = express();
const mediaController = require('./controllers/mediaController');
const adminController = require('./controllers/adminController');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const methodOverride = require('method-override');


require('./db');

app.use(methodOverride('_method'));
app.use(cors({
    origin: 'http://localhost:3001',
    optionsSuccessStatus: 200
}))
app.use(morgan('short'));
app.use(bodyParser.urlencoded({extended: true}));


app.use('/', mediaController);
app.use('/admin', adminController);


const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on ${port}, babeeee`)
});