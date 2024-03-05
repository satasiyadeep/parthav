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
 

app.get("/",(req,res)=>{
  res.render("book");
})

app.get("/register",(req,res)=>{
  res.render("register");
})

app.listen(4000,()=>{
  console.log("port connected");
})  
 
    