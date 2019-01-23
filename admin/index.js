const express = require("express");
const exphbs  = require('express-handlebars');
const path = require("path");
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const session = require('express-session')
const flash = require("connect-flash");
const methodOverride = require('method-override');
const passport = require('passport');

const db = require('../db/config/key').mongoURI;

const app = express();
const port = 4000;

//router
const indexRouter = require('./router/index');
const loginRouter = require('./router/login');

//connect db
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
app.use(methodOverride('_method'));
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true,
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

//使用路由
app.use('/admin',loginRouter)
app.use('/index',indexRouter)

app.listen(port,() => {
    console.log(`Server started on ${port}`)
});