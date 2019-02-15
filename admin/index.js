const express = require("express");
const exphbs  = require('express-handlebars');
const path = require("path");
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const session = require('express-session');
const cookieParser = require('cookie-parser');
const FileStore = require('session-file-store')(session);
const flash = require("connect-flash");
const methodOverride = require('method-override');
const passport = require('passport');

const db = require('../db/config/key').mongoURI;

const app = express();
const port = 4000;
const identityKey = 'skey';

// Passport 验证策略，passport 验证依赖
require('./config/passport')(passport);

//router
const indexRouter = require('./router/index');
const loginRouter = require('./router/login');
const productRouter = require('./router/product');

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
/**session 配置 
 * secret  用来对session id相关的cookie进行签名
 * saveUninitialized   是否自动保存未初始化的会话，建议false
 * resave  是否每次都重新保存会话，建议false
 * maxAge  有效期，单位是毫秒
*/
app.use(session({
    secret: 'Bearer',
    saveUninitialized: false,
    store: new FileStore(),//本地储存 session
    resave: false,
    cookie: {
        maxAge: 10 * 1000  // 有效期，单位是毫秒
    }
}));
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());


//使用路由
app.use('/admin',loginRouter)
app.use('/index',indexRouter)
app.use('/product',productRouter)

app.listen(port,() => {
    console.log(`Server started on ${port}`)
});