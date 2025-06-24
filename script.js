const express = require('express');
const app = express();

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended : true}))


app.get("/",function(req,res){
  res.render("index")

})
app.post("/create",function(req,res){
 
  res.send("workings propely and you are properly")
  console.log(req.body);
})
app.listen(3000, () => {
  console.log("server is running at http://localhost:3000");
});
