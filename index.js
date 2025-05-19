const express = require("express");
const app=express();
const port=8080;
const path=require("path");
const Chat= require("./models/chat.js")
const mongoose=require("mongoose");
const methodOverride=require("method-override");


app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));


main().then(()=>{
    console.log("connection is successful");
}).catch(err=>console.log(err));

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}


app.get("/",(req,res)=>
{
    res.send("root is working");
});

// Index Route
app.get("/chats",async (req,res)=>{
    let chats = await Chat.find();
    // console.log(chats);
    res.render("index.ejs", {chats});
});

// Create New Chat
app.get("/chats/new", (req, res)=>{
    res.render("new.ejs")
});

// Create route
app.post("/chats", (req, res)=>{
    let {from, msg, to} =req.body;
    let newChat=new Chat({
        from:from,
        msg:msg,
        to:to,
        created_at: new Date(),
    });
    newChat.save()
    .then((res)=>{
        console.log("Chat was Saved.");
    })
    .catch((err)=>{
        console.log(err);
    });
    res.redirect("/chats");
});

// Edit route
app.get("/chats/:id/edit", async (req, res)=>{
    let {id}=req.params;
    let chat= await Chat.findById(id);
    res.render("edit.ejs", {chat});
});

// Update Route
app.put("/chats/:id", async (req, res)=>{
    let {id}=req.params;
    let {msg: newMsg}=req.body;
    let updatedChat= await Chat.findByIdAndUpdate(
        id,
        {msg: newMsg},
        {runValidaters: true, new: true}
    );
    console.log(updatedChat);
    res.redirect("/chats");
});

// Destroy route
app.delete("/chats/:id", async (req, res)=>{
    let {id}=req.params;
    let deletedChat= await Chat.findByIdAndDelete(id);
    console.log(deletedChat);
    res.redirect("/chats");
})

app.listen(port,()=>{
    console.log("Server is listening on port 8080");
});