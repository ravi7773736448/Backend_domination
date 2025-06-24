const express = require('express');
const app = express();

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended : true}))

app.get("/",function(req,res){
  res.render("index");

})


app.get("/check", function(req,res){
    res.send("working");
    console.log(req.query);
})
app.listen(3000, () => {
  console.log("server is running at http://localhost:3000");
});
