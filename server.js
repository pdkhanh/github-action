const express = require("express");
const app = express();
app.get("/", (req, res) => {
    res.json({ message: "Version 25" });
    console.log('Hello Moto')
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});