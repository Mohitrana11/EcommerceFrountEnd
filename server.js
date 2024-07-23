const express = require('express')
const path = require('path');
const app= express();
require('dotenv').config()
const port = process.env.PORT;


//Mongo file: 
const collection = require('./Scripts/mongodb');
app.use(express.json());
app.use(express.urlencoded({extended:false}));

// File paths

const publicFolder = path.join(__dirname,'public');
const signFolder = path.join(__dirname,'SignUp');
const pagesFolder = path.join(__dirname,'page');
const pages2Folder = path.join(__dirname,'Page2');
const saleFolder = path.join(__dirname,'saleBox');

// For Connect CSS: 
app.use('/Styles',express.static('Styles'));
app.use('/images',express.static('images'));
app.use('/Scripts',express.static('Scripts'))
app.use('/Pages',express.static('Pages'))
app.use('/Pages2',express.static('Pages2'))
app.use('/saleBox',express.static('saleBox'));
app.use('/SignUp',express.static('SignUp'));


app.get('',(req,resp)=>{
    resp.sendFile(`${publicFolder}/index.html`);
})


const viewPath =  path.join(__dirname,'views');

app.set('view engine','hbs');
// app.use(express.static())
app.get('/login',(req,resp)=>{
    resp.render('login');
})
app.get('/signup',(req,resp)=>{
    resp.render('signup');
})

app.post('/SingData',async (req,resp)=>{
    const data={
        name:req.body.name,
        password:req    .body.password
    }
    await collection.insertMany([data]);
    resp.render('index');
})

//Login Side
app.post('/login',async (req,resp)=>{
    try{
        const check=await collection.findOne({name:req.body.name});
        if(check.password===req.body.password){
            resp.render('index');
        }else{
            resp.send('wrong Pass word! ');
        }
    }catch(e){
        resp.send('wrong password!');
    }
    resp.render('index');
})

app.get('Pages/page1',(req,resp)=>{
    resp.sendFile(`${pagesFolder}\page1.html`);
})
app.use((req,resp)=>{
    resp.status(404);
    resp.send(`<h3>Error 404: Resource not found</h3>`)
})
app.listen(port,()=>{
    console.log(`working on post number: ${port}`)
})


// smohitsinghrana369
// Yebrkv5QuCDeJfcF

// mongodb+srv://mohitsinghrana369:<password>@cluster0.cqyazfm.mongodb.net/?retryWrite=true&w=majority&appName=Cluster0
// USERNAME=mohitsinghrana369
// USERID=ebrkv5QuCDeJfcF