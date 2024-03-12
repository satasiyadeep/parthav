const express=require("express")
const app=express()
const path=require("path")
const hbs=require("hbs")
const collection=require("./src/mongodb")

app.use(express.static("public"))
app.use(express.json())

app.set("view engine","hbs")
const templatePath=path.join(__dirname,'views');
app.set("views",templatePath)

app.use(express.urlencoded({extended:false}))
app.use(express.static('public'));
app.get("/",(req,res)=>{
  res.render("index");
})

app.get("/login.hbs",(req,res)=>{
  res.render("login")
})
app.get("/index.hbs",(req,res)=>{
  res.render("index")
})


app.listen(4000,()=>{
  console.log("port connected");
})  
 
    