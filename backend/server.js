const express = require("express");
const session = require('express-session');
require('dotenv').config();
const cors = require("cors");

const app = express();

app.use(cors({
    origin: 'http://localhost:5173',  
    credentials: true                 
}));


const authRoutes = require("./routes/authRoutes");
const companyRoutes = require("./routes/companyRoutes");
const researcherRoutes = require("./routes/researcherRoutes");



app.use(express.json());

app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false,
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24  // 24 hours
    }
}));


app.use("/api/auth", authRoutes);
app.use("/api/company", companyRoutes);
app.use("/api/researcher", researcherRoutes);



app.get("/", (req, res) => {
    res.send("Backend Server Running");
});


/* ---------------- SERVER ---------------- */

app.listen(5000, () => {
    console.log("Server running on port 5000");
});