const mymodule=require('./custommodule')
var x=710;
var y=7;
var z=mymodule.adnum(x,y)
console.log(z);
var q=mymodule.subnum(x,y)
console.log(q);
var w=mymodule.mulnum(x,y)
console.log(w);
var r=mymodule.divnum(x,y)
console.log(r);