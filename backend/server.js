const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data.js");

const app = express();
dotenv.config();


app.get("/", (req, res) => {
    res.send("API is working");
});


app.get("/api/chat", (req, res) => {
    res.send(chats);
});


app.get("/api/chat/:id", (req, res) => {
    const singleChat = chats.find((chat) => chat._id === req.params.id);
    res.send(singleChat);
})

const PORT = process.env.PORT

app.listen(5000, () => {
    console.log(`Server is started at ${PORT}`);
})