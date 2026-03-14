const db = require("../config/db");

exports.createCompanyProfile = (req, res) => {

    const {
        user_id,
        company_name,
        industry_type,
        gst_number,
        registration_id
    } = req.body;

    const sql = `
    INSERT INTO company_profiles
    (user_id, company_name, industry_type, gst_number, registration_id)
    VALUES (?, ?, ?, ?, ?)
    `;

    db.query(sql,
        [user_id, company_name, industry_type, gst_number, registration_id],
        (err, result) => {

            if (err) return res.status(500).json(err);

            res.json({
                message: "Company profile created"
            });

        });
};