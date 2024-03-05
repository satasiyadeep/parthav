const mongoose=require("mongoose")

mongoose.connect("mongodb://localhost:27017/loginsignuptutorial")
.then(()=>{
  console.log("mongodb connected");
})
.catch(()=>{
  console.log("fail to connect")
})

