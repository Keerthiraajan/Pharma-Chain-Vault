const db = require("../config/db");

exports.createResearcherProfile = (req, res) => {

    const {
        user_id,
        affiliation_type,
        research_domain,
        institution_name,
        institution_email,
        degree_program,
        institution_regno,
        organization_name,
        work_email,
        designation,
        years_of_experience,
        portfolio_link
    } = req.body;

    const sql = `
    INSERT INTO researcher_profiles (
        user_id,
        affiliation_type,
        research_domain,
        institution_name,
        institution_email,
        degree_program,
        institution_regno,
        organization_name,
        work_email,
        designation,
        years_of_experience,
        portfolio_link
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    db.query(sql,
        [
            user_id,
            affiliation_type,
            research_domain,
            institution_name,
            institution_email,
            degree_program,
            institution_regno,
            organization_name,
            work_email,
            designation,
            years_of_experience,
            portfolio_link
        ],
        (err, result) => {

            if (err) return res.status(500).json(err);

            res.json({
                message: "Researcher profile created"
            });

        });

};