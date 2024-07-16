const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

const database = require("./config/database");

database.connect();

const PORT = 3000;
app.use(express.json());
app.use(cors());

const companyRoutes = require("./routes/companyRoutes");
const teamRoutes = require("./routes/teamRoutes");

app.use("/",companyRoutes);
app.use("/teams",teamRoutes);

app.listen(PORT,()=>{
    console.log("App is running successfully");
});

app.get("/",(req,res)=>{
    res.send(`<h1>This is my home page at Port -> ${PORT}</h1>`)
})

// npm run dev

