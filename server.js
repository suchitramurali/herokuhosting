const express=require('express')
const exp=require('express-handlebars')
var app1=express()

app1.engine('handlebars',exp({defaultLayout:'majorpage'}))
app1.set('view engine','handlebars')

app1.use(express.static('views/static'))
app1.use(express.urlencoded())

app1.post('/getdata',(req,res)=>{
    var name=req.body.getname
    var place=req.body.getplace
    var address=req.body.getaddress
    var mobile=req.body.getmobile
    var email=req.body.getemail

    console.log(name,address,place,mobile,email)
    //res.send(name)
    
})
app1.post('/login',(req,res)=>{
    var user=req.body.username
    var pass=req.body.password
    if(user=="admin"&&pass=="1243"){
        res.send(JSON.stringify({status:"success"}))
    }
    else{
        res.send(JSON.stringify({status:"failed"}))
    }
});

app1.post('/register',(req,res)=>{
    
    var uname=req.body.name;
    var adm =req.body.admm ;
    var user=req.body.username;
    var pass=req.body.password;
    //if(uname=='suchitra'&&admsno==730&&user=="admin"&&pass=="1243"){
        //res.send("success")
    //}
    // else{
        //res.send("failed")
    //}
   res.send(uname +adm +user +pass);
});


app1.get('/',(req,res)=>{
    res.render('index',{name:'TOM'})
});

app1.get('/contact',(req,res)=>{
    res.render('contact')
});

app1.get('/about',(req,res)=>{
    res.render('about')
});
app1.listen(process.env.PORT || 2000,()=>{
   console.log('web app running sucessfully')
});
