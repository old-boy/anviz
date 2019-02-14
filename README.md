# anviz
重构 anviz 网站。页面使用 bootstrap + Handlebars.js + SCSS布局，数据库采用 mongoDB + express，node.js 搭建的环境，替代原 php 环境。

### 初始化项目
npm init /
npm install express --save /
npm install -g nodemon /
npm i express-handlebars

### package.json 修改 scripts ，方便使用 nodemon 自动更新
"scripts": {
    "server": "node index.js",
    "start": "nodemon index.js"
 }
 ### 配置 handlebars
handlebars 结构，根据官方文档提示，基本结构为：
.
.
├── app.js
├── node_modules
│   ├── express
│   ├── handlebars
│   ├── hbs
│   ├── less-middleware
│   ├── nodemon
│   └── request
├── package.json
├── public
│   ├── images
│   ├── javascripts
│   │   └── app.js
│   ├── lib
│   │   ├── font
│   │   ├── js
│   │   └── stylesheets
│   └── stylesheets
│       ├── style.css
│       └── style.less
├── routes
│   ├── github.js
│   └── index.js
└── views
    ├── index.hbs
    ├── orgs.hbs
    └── partials
      ├── footer.hbs
      └── header.hbs

2 directories, 3 files

模板后缀为 handlebars


 ### 启动服务
 npm run start

### 网站共分三大模块
#### 1.网站
#### 2.网站admin
#### 3.后台
#### 4.共用一个数据库

