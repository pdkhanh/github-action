const express = require("express");
const app = express();
app.get("/", (req, res) => {
    res.json({ message: "Version 24" });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});