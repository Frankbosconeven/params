const express = require("express");
const postRouter = require("./routes/posts.route");

const app = express();

app.get("/", (req, res)=>{
    res.status(200).send("My server is ready");
});

app.get("/", (req, res) =>{
    req.status(200).send("welcome to my server");
});

app.use("/posts", postRouter);

app.listen(4000, () =>{
    console.log("server listening on https://localhost:4000");
});