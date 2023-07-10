// require express
const express=require('express');


// port
const port=8000;

//require the mongoose
const mongoose = require('mongoose');



const devRoute = require('./routes');

// create the app
const app = express();

// connect my app to mongodb database
mongoose.connect("mongodb://127.0.0.1:27017/Developer", {useNewUrlParser : true, 
useUnifiedTopology : true})
.then(function() {
    console.log("MongoDB is connected!")

}).catch((err)=>{
    console.log(err);
})

//middleware
app.use(express.json());

app.use("/", devRoute);


// listening to port
app.listen(port,(err)=>{
    if(err)
    {
        console.log("error");
    }else{
        console.log("server running successfully");
    }
})
{

}
