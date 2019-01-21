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
const port = 5000;


//router
const homeRouter = require('./router/home');
const productRouter = require('./router/product');
const aboutRouter = require('./router/about');
const solutionRouter = require('./router/solution');
const supportRouter = require('./router/support');
const partnerRouter = require('./router/partner');
const whereToBuyRouter = require('./router/whereToBuy');
const industryRouter = require('./router/industry');
const newsRouter = require('./router/news');
const loginRouter = require('./router/login');

// Passport Config
require('./config/passport')(passport);

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

// 配置全局变量
app.use((req,res,next) => {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.user = req.user || null;
  next();
});



app.use(homeRouter)
app.use('/product',productRouter)
app.use('/about',aboutRouter)
app.use('/solution',solutionRouter)
app.use('/support',supportRouter)
app.use('/partner',partnerRouter)
app.use('/wheretobuy',whereToBuyRouter)
app.use('/industry',industryRouter)
app.use('/news',newsRouter)
app.use('/admin',loginRouter)

app.listen(port,() => {
    console.log(`Server started on ${port}`)
});

