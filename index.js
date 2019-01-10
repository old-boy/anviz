const express = require('express');
const exphbs  = require('express-handlebars');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const juery = require('jquery');

const db = require('./config/key').mongoURI;

const app = express();
const port = 3000;

mongoose.connect(db,{ useNewUrlParser: true }).then( () => console.log('DB Successful！')).catch((err) => console.log(err));

//中间件
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');
app.set('views', __dirname + '/views');
app.use(bodyParser.urlencoded({extended:false}))  
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public'))); //从 public 中获取静态文件



//router
app.get('/',(req,res) => {
    const title = '这里可以传参';
    res.render('index',{
        title:title
    })
});
app.get('/about',(req,res) => {
    res.render('about')
});


app.listen(port,() => {
    console.log(`Server started on ${port}`)
});

