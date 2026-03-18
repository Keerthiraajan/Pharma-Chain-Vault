import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ReasercherDashboard from "./ReasercherDashboard";
//import CompanyDashboard from "./CompanyDashboard";

const Dashboard = () => {

  const navigate = useNavigate();

  const [checking, setChecking] = useState(true);
  const [role, setRole] = useState(null);

  useEffect(() => {

    fetch("http://localhost:5000/api/auth/check-session", {
      credentials: "include"
    })
    .then(res => res.json())
    .then(data => {

      if (!data.user) {
        navigate("/notfound", { state: { code: 401 } });
        setChecking(false);
        console.log("No user is logged in, session check failed.");
        return;
      }

      setRole(data.user.role); // ✅ set role here
      setChecking(false);

    })
    .catch(() => {
      navigate("/notfound", { state: { code: 401 } });
    });

  }, [navigate]);

  if (checking) {
    return <div>Checking session...</div>;
  }

  if (role === "RESEARCHER") {
    return <ReasercherDashboard />;
  } 

};

export default Dashboard;