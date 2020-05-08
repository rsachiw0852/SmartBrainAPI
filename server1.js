const express=require('express');
const bodyParser=require('body-parser');

const app=express();
app.use(bodyParser.json());
app.get('/',(req,res)=>{
    res.send("/index.html")
    //res.send("Hii I am server1.")
});
app.post('/',(req,res)=>{
    console.log(req.body);
    console.dir(app.locals.title);
    res.send('./index.html');
})
app.listen(1111,()=>{
console.log('App is running on Port 1111.');
})