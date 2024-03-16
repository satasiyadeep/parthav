const express=require("express")
const app=express()
const path=require("path")
const hbs=require("hbs")
const collection=require("./src/mongodb")



app.use(express.static("public"))
app.use(express.json())

app.set("view engine","hbs")
const templatePath=path.join(__dirname,'views');
const partialPath=path.join(__dirname,'views/partials');
app.set("views",templatePath)
hbs.registerPartials(partialPath);

app.use(express.urlencoded({extended:false}))
app.use(express.static('public'));
app.get("/",(req,res)=>{
  res.render("index");
})

app.get("/login",(req,res)=>{
  res.render("login")
})
app.get("/book",(req,res)=>{
  
  res.render("book")
  
})
app.get("/index",(req,res)=>{
  res.render("index")
})
app.get("/about",(req,res)=>{
  res.render("about")
})
app.get("/Register",(req,res)=>{
  res.render("Register")
})


app.post("/Register",async (req,res)=>{
  const data={

    fullname:req.body.name,
    email:req.body.email,
    username:req.body.username,
    password:req.body.pass,
    
  }

  try {
    // Compare passwords using strict equality (===)
    if (req.body.pass === req.body.repeatpass) {
      await collection.insertMany(data); // Use insertOne instead of insertMany for a single document
      res.render("book");
      // Assuming collection is properly defined
    } else {
      res.send("Passwords do not match");      
    }
  } catch (error) {
    console.error(error);
    res.send("Error occurred while processing your request");
  }
});
app.post("/login",async (req,res)=>{
    
  try{
    const check=await collection.findOne({email:req.body.email,password:req.body.pass});
    if(check){
      res.render("book")
    }
    else{
      res.send("wrong password")
    }
 }catch{
  res.send(" wrong detail ")
 }


})

app.listen(4000,()=>{
  console.log("port connected");
})  
 
    