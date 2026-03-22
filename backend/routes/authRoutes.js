const express = require("express");
const router = express.Router();

const authController = require("../controllers/authController");

router.post("/register", authController.registerUser);
router.post("/login", authController.loginUser);
router.post("/logout", authController.logoutUser);
router.post("/verify-user-res-wor", authController.verifyUserResWorking);
router.post("/verify-user-company", authController.verifyUserCompany);


router.get('/check-session', (req, res) => {
    console.log("Session Data:", req.session);         // full session object
    console.log("User in session:", req.session.user); // just the user part

    if (req.session.user) {
        res.json({ 
            message: "Session EXISTS", 
            user: req.session.user ,
            loggedIn: true  
        });
    } else {
        res.json({ 
            message: "No session found" 
        });
    }
});




module.exports = router;
