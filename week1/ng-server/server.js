var express = require('express')
var app = express()
var restRouter = require("./routes/rest")
var indexRouter = require("./routes/index")
var mongoose = require("mongoose");
var path = require("path");

mongoose.connect("mongodb://user:user123@ds143461.mlab.com:43461/leetcode");

// respond with "hello world" when a GET request is made to the homepage
app.use(express.static(path.join(__dirname, '../public')));
app.use("/", indexRouter);
app.use("/api/v1", restRouter);

if (!module.parent) { // add this judgment
    // 监听3000端口
    app.listen(3000, () => {
        console.log('listen on 3000')
    })
}