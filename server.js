//Import express
const exp = require('constants');
let express = require('express');

//Initialize the app
let app = express();

app.use(express.urlencoded({extended: true}));

let router = require('./routes');
app.use('/',router);

//Launch app to listen to specified port
app.listen(8000, function() {
    console.log('Runnings on port 8000');
})