const express=require('express');
const exp=require('express-handlebars');
var tem=express();

tem.engine('handlebars',exp({defaultLayout:'mainpage'}) );
tem.set('view engine','handlebars');

tem.use(express.static('views/static'))
tem.use(express.urlencoded());


tem.post('/getdata',(req,res)=>{
    var name=req.body.getname;
    var address=req.bodygetadres;
    var place=req.body.getplace;
    var mobile=req.body.getmobile;
    var email=req.body.getemail;
    //console.log(name,address,mobile,email);

 res.send(name);
    //res.send(address);
    //res.send(place);
    //res.send(mobile);
    //res.send(email);
});

tem.get('/',(req,res)=>{
    res.render('index');
});

tem.get('/contact',(req,res)=>{
    res.render('contact')
});
tem.get('/about',(req,res)=>{
    res.render('about')
});

tem.get('/gallery',(req,res)=>{
    res.render('gallery')
});
tem.listen(2000);