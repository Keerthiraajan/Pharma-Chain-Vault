import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ReasercherDashboard from "./ReasercherDashboard";

const Dashboard = () => {

  const navigate = useNavigate();

  useEffect(() => {

    fetch("http://localhost:5000/api/auth/check-session", {
      credentials: "include"
    })
    .then(res => res.json())
    .then(data => {

      if (!data.user) {
        navigate("/notfound", { state: { code: 401 } });
        setChecking(false);
        console.log ( "No user is logged in, session check failed." );
        return;
      }

      setChecking(false);

    })
    .catch(() => {
      navigate("/notfound", { state: { code: 401 } });
    });

  }, []);


  const [checking, setChecking] = useState(true);
  const [role, setRole] = useState( data.user ? data.user.role : null );

  
  if (checking) {
    return <div>Checking session...</div>;
  }

  if (role === "researcher") {
    return <ReasercherDashboard />;
  } else {
    return <CompanyDashboard />;
  }
};

export default Dashboard;