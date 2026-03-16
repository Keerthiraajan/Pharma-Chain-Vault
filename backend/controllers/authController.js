const db = require("../config/db");

exports.registerUser = (req, res) => {

    const { full_name, email, password, role } = req.body;

    const sql = `
        INSERT INTO users 
        (full_name, email, password_hash, role)
        VALUES (?, ?, ?, ?)
    `;

    db.query(
        sql,
        [full_name, email, password, role],
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
                id: user.id,
                full_name: user.full_name,
                email: user.email,
                role: user.role
            };

        res.json({
            message: "Login successful",
            user: {
                id: user.id,
                full_name: user.full_name,
                email: user.email,
                role: user.role
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

