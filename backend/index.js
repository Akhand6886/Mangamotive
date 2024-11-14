const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.listen(5001, () => console.log("Backend is running on port 5001"));
