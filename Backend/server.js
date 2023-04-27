const express = require('express');
const cors = require('cors');
const app = express();
const upload = require('./UploadMiddleware');


var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }
  

app.use(cors(corsOptions))

app.post('/uploadImage',upload.single("screen_capture"),(req,res)=>{
      console.log(req.file)
    res.send("File uploaded successfully")

})




app.listen(3001,()=>{
    console.log("Server is listening on PORT 3001");
})