const mongoose=require("mongoose")

mongoose.connect("mongodb://localhost:27017/loginsignuptutorial")
.then(()=>{
  console.log("mongodb connected");
})
.catch(()=>{
  console.log("fail to connect")
})

const LoginSchema=new mongoose.Schema({
  fullname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
 
  
})

const collection=new mongoose.model("collection1",LoginSchema)

module.exports=collection
