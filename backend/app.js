const express = require ( 'express' );
const mongoose = require('mongoose');
const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json())

const url = 'mongodb://127.0.0.1:27017/post_database'

mongoose.connect(url, { useNewUrlParser: true })
const db = mongoose.connection
db.once('open', _ => {
  console.log('Database connected:', url)
})
db.on('error', err => {
  console.error('connection error:', err)
})

app.use((req, res, next)=>{
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS");
  next();
});

const postroutes = require('./routes/post');
app.use("/api/posts", postroutes);

module.exports = app;
