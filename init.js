const mongoose=require("mongoose");
const Chat= require("./models/chat.js")

main().then(()=>{
    console.log("connection is successful");
}).catch(err=>console.log(err));

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}


let allChats= [
    {
        from: "neha",
        to: "priya",
        msg: "Send me the notes",
        created_at: new Date()
    },
    {
        from: "swan",
        to: "lanfear",
        msg: "Lets define what real power is",
        created_at: new Date()
    },
    {
        from: "liandrin",
        to: "morraine",
        msg: "Link your powers with me",
        created_at: new Date()
    },
    {
        from: "lan",
        to: "allana",
        msg: "I want to meat the amerlyn",
        created_at: new Date()
    },
    {
        from: "nynaeve",
        to: "rand",
        msg: "i cannot use powers like others",
        created_at: new Date()
    },
];

Chat.insertMany(allChats);