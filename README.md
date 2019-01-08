# anviz
重构 anviz 网站。页面使用 bootstrap + Handlebars.js + SCSS布局，数据库采用 mongoDB + express，node.js 搭建的环境，替代原 php 环境。

# 初始化项目
npm init
npm install express --save
npm install -g nodemon

# package.json 修改 scripts ，方便使用 nodemon 自动更新
"scripts": {
    "server": "node index.js",
    "start": "nodemon index.js"
 }
 
 # 启动服务
 npm run start
