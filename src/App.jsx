import { Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import Login from "./Pages/LoginPage";
import Register from "./Pages/Registration";
import Dashboard from "./Pages/Dashboard";
import VerificationPage from "./Pages/VerificationPage";
import MyFormulas from "./Pages/MyFormulas";
import UploadFormula from "./Pages/UploadFormula";
import FormulasLayout from "./Components/FormulasLayout";
import NotFound from "./Components/NotFound";
import LicenseRequest from "./Pages/LicenseRequest";


function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/verify" element={<VerificationPage />} />
      <Route path="/formulas" element={<FormulasLayout />}>
        <Route index element={<MyFormulas />} />
        <Route path="upload" element={<UploadFormula />} />
      </Route>
      <Route path = "/licenses" element = {<LicenseRequest />} />
    </Routes>
    
  );
}

export default App;
