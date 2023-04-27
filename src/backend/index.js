require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')

const APP_PORT = process.env.APP_PORT || 8000;

// define app 
const app = express();
app.use( bodyParser.urlencoded({ extended: false }) );
app.use(bodyParser.json());
app.use(cors());

app.use(express.static('public'));

// Routes
// this returns top level routes
app.use(require('./api/plaid/routes')); 



// this returns routes under a sub
// http://localhost:5000/api/create-plaid-customer
//app.use("./api", require('/routes'))

const server = app.listen(APP_PORT, function () {
    console.log('Server listening on port ' + APP_PORT);
});