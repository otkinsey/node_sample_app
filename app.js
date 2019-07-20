const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');

const app = express();

app.engine('handlebars', handlebars({defaultLayout: 'base'}));
app.set('view engine', 'handlebars');

app.use(express.static(__dirname+'/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

var routes = require('./appRoutes/appIndex');
app.use('/', routes);

app.use((req, res)=>{
    res.status(404);
    res.render('404');
});

app.listen(3000, ()=>{
    console.log('listening on port: 3000');
})