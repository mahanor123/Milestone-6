// const express = require('express');
import express from 'express';
const mongoose = require('mongoose');
const app = express();
app.use(express.json());
app.set('view engine','pug');

const New = require('./models/new');

mongoose.connect('mongodb://127.0.0.1:27017',()=>console.log("connected"));

app.get('/',(req,res) =>{

res.send('Hello world!!');
});

app.get('/new',(req,res)=>{
    // console.log('hai');
    New.find()
    //     {}, (err, items) => {
    //     if(err) {
    //         res.send(err)
    //         console.log("Error", err)
    //     }
    //     res.send(items);
    //     console.log("Items", items)
    // })
    // .exec((err, items) => {
    //     console.log("Items", items)
    // })
    .then((post)=>{
        console.log(post);
        if(!post)res.status(404).json({post: "not found!"});
        // res.json(post);
        // res.render('index',{title: 'New website', name: `${post.title}`,id: post._id,time: post.time});
        res.render('index',{post: post});
    }).catch((error) => {
        console.log("Error", error)
    })
});

app.post('/upload',(req,res)=>{
    console.log(req.body)
    const {title,url} = req.body;
    console.log(title, url)
    const news = new New({
        title : title,
        url : url
    });
    news.save().then(item => {
        res.send(item);
    })
    // res.send(req.body)
});


// PORT = 3042;
app.listen(3042, () => console.log(`Listening on port 3042`));