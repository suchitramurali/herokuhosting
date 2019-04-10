const express=require('express');
const exbs=require('express-handlebars')
var app=express();

app.engine('handlebars',exbs());
app.set('view engine','handlebars');






app.get('/',(req,res)=>{
    res.send("how are you");
});

app.get('/home',(req,res)=>{
    res.send("<h1>welcome</h1>")
});

app.get('/tab',(req,res)=>{
    res.send('[{"name":"jerry","age:32},{"name":"tom","age":32}]');
});


app.listen(3000);

