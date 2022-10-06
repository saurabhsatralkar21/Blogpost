const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const homeStartingContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quidem accusantium explicabo, aliquam porro sequi suscipit neque fugiat consectetur delectus sed. Maxime porro iste reprehenderit deserunt cumque qui repellendus totam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quidem accusantium explicabo, aliquam porro sequi suscipit neque fugiat consectetur delectus sed. Maxime porro iste reprehenderit deserunt cumque qui repellendus totam";
const aboutContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quidem accusantium explicabo, aliquam porro sequi suscipit neque fugiat consectetur delectus sed. Maxime porro iste reprehenderit deserunt cumque qui repellendus totam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quidem accusantium explicabo, aliquam porro sequi suscipit neque fugiat consectetur delectus sed. Maxime porro iste reprehenderit deserunt cumque qui repellendus totam";
const contactContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quidem accusantium explicabo, aliquam porro sequi suscipit neque fugiat consectetur delectus sed. Maxime porro iste reprehenderit deserunt cumque qui repellendus totam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quidem accusantium explicabo, aliquam porro sequi suscipit neque fugiat consectetur delectus sed. Maxime porro iste reprehenderit deserunt cumque qui repellendus totam";

const app = express();

app.set('view engine','ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.listen(3000, function(){
    console.log("Server started at port 3000");
});

// Display the content on home
app.get("/",function(req,res){
    res.render("home", {homeStartingContentFromHome: homeStartingContent});
});