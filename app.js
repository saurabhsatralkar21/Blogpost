const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const homeStartingContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quidem accusantium explicabo, aliquam porro sequi suscipit neque fugiat consectetur delectus sed. Maxime porro iste reprehenderit deserunt cumque qui repellendus totam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quidem accusantium explicabo, aliquam porro sequi suscipit neque fugiat consectetur delectus sed. Maxime porro iste reprehenderit deserunt cumque qui repellendus totam";
const aboutContent = "About content Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quidem accusantium explicabo, aliquam porro sequi suscipit neque fugiat consectetur delectus sed. Maxime porro iste reprehenderit deserunt cumque qui repellendus totam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quidem accusantium explicabo, aliquam porro sequi suscipit neque fugiat consectetur delectus sed. Maxime porro iste reprehenderit deserunt cumque qui repellendus totam";
const contactContent = "Contact Content Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quidem accusantium explicabo, aliquam porro sequi suscipit neque fugiat consectetur delectus sed. Maxime porro iste reprehenderit deserunt cumque qui repellendus totam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quidem accusantium explicabo, aliquam porro sequi suscipit neque fugiat consectetur delectus sed. Maxime porro iste reprehenderit deserunt cumque qui repellendus totam";
const posts = [];

const app = express();

app.set('view engine','ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.listen(3000, function(){
    console.log("Server started at port 3000");
});

// Display the content on home page
app.get("/",function(req,res){
    res.render("home", {homeStartingContentFromHome: homeStartingContent, postFromHome: posts});
});

// Display the content on about page
app.get("/about",function(req,res){
    res.render("about", {aboutStartingContentfromHome: aboutContent});
});

// Display the content on contact page
app.get("/contact",function(req,res){
    res.render("contact", {contactStartingContentfromHome: contactContent});
});

// Display the content on compose page
app.get("/compose",function(req,res){
    res.render("compose");
});

// Send the values to the Home page
app.post("/compose", function(req,res){
    const postContent = {
        title: req.body.postTitleFromCompose, 
        content: req.body.postBodyFromCompose
    };
    posts.push(postContent);
    res.redirect("/");
});

app.get("/posts/:postsValue", function(req, res){
    var postUrlValue = (req.params.postsValue).toLowerCase();
    posts.forEach(function(postItem) {

        var postTitle = (postItem.title).toLowerCase(); 
    if(postTitle === postUrlValue ) {
        console.log("Match Found!");
        console.log(postTitle);
    } else { console.log("Match NOT Found!"); }
    });
});