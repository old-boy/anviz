const express = require('express');
const exphbs  = require('express-handlebars');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');


const db = require('../db/config/key').mongoURI;

const app = express();
const port = 3000;


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

