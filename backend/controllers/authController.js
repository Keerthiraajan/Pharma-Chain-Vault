const db = require("../config/db");

exports.registerUser = (req, res) => {

    const { full_name, email, password, role,type } = req.body;

    const sql = `
        INSERT INTO users 
        (full_name, email, password_hash, role, type)
        VALUES (?, ?, ?, ?,?)
    `;

    db.query(
        sql,
        [full_name, email, password, role,type],
        (err, result) => {

            if (err) {
                return res.status(500).json(err);
            }

            res.json({
                message: "User registered",
                userId: result.insertId
            });

        }
    );
};



exports.loginUser = (req, res) => {

    const { email, password } = req.body;

    const sql = "SELECT * FROM users WHERE email = ?";

    db.query(sql, [email], (err, results) => {

        if (err) {
            return res.status(500).json(err);
        }

        // user not found
        if (results.length === 0) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        const user = results[0];

        // check password
        if (user.password_hash !== password) {
            return res.status(401).json({
                message: "Invalid password"
            });
        }

            req.session.user = {
                id: user.user_id,
                full_name: user.full_name,
                email: user.email,
                role: user.role,
                type:user.type
            };

        res.json({
            message: "Login successful",
            user: {
                id: user.user_id,
                full_name: user.full_name,
                email: user.email,
                role: user.role,
                type:user.type
            }
        });

        console.log("User logged in:", req.session.user);
    });
};

exports.logoutUser = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ message: "Logout failed" });
    }

    res.clearCookie("connect.sid"); // session cookie
    res.json({ message: "Logged out successfully" });
  });
};



exports.verifyUserResWorking = (req, res) => {


    const user_id = req.session.user ? req.session.user.id : null;
    console.log("User ID from session:", user_id);
    console.log(req.body);

    const { state , city , organization_name, designation, work_email , years_of_experience} = req.body;

    const sql = 'INSERT INTO researcher_profiles (user_id, state, city,organization_name, designation, work_email, years_of_experience) VALUES (?, ?, ?, ?, ?, ?, ?)';

    db.query(sql, [user_id, state, city, organization_name,  designation, work_email, years_of_experience], (err, result) => {

        if (err) {
            console.error("Error inserting researcher profile:", err);
            return res.status(500).json({ message: "Failed to save researcher profile" });
        }

        res.json({ message: "Researcher profile saved successfully" });

    });

    const sql2 = 'UPDATE users SET status = ? WHERE user_id = ?';

    db.query(sql2, ['verified', user_id], (err) => { 

        if (err) {
            console.error("Error updating user status:", err);
            return res.status(500).json({ message: "Failed to update user status" });
        }
        console.log("User status updated to verified");

    });
};