const express = require('express');
const exphbs  = require('express-handlebars');

const app = express();
const port = 8000;

//中间件
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');
app.set('views', __dirname + '/views');


//router
app.get('/',(req,res) => {
    res.render('index')
});
app.get('/about',(req,res) => {
    res.render('about')
});


app.listen(port,() => {
    console.log(`Server started on ${port}`)
});

