import { useState } from 'react';
import { Eye, EyeOff, Shield, Lock, CheckCircle2 } from 'lucide-react';
import { Link , useNavigate } from 'react-router-dom';
import { ThreeDot } from 'react-loading-indicators';
import '../CSS/LoginComp.css';

const Login = () => {
  
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const[ error , setError] = useState('');
  const [loading, setLoading] = useState(false);

  const isvalid = email !== '' && password !== '';

  const handleSubmit = async (e) => {
  e.preventDefault();

  setError('');
  setLoading(true);

  try {

    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    });

    const data = await response.json();

    if (!response.ok) {
      setError(data.message || "Login failed");
      setLoading(false);
      return;
    }

    // store logged user
    localStorage.setItem("user", JSON.stringify(data.user));

    setLoading(false);

    // redirect
    navigate('/dashboard');

  } catch (error) {

    console.error(error);
    setError("Server error");
    setLoading(false);

  }
};

  return (
    <div className="page-wrapper">
      <div className="split-container">
        {/* Left Section */}
        <div className="left-panel">
          <div className="left-content">
            <div className="logo">
              <Shield size={22} />
              <span>Pharma-Chain Vault</span>
            </div>

            <h1>Secure Pharma Collaboration</h1>
            <p>
              A unified blockchain workspace for researchers, pharmaceutical companies,
              and regulators to collaborate with trust and compliance.
            </p>

            <ul className="points">
              <li><CheckCircle2 size={16} /> Tamper-proof data integrity</li>
              <li><CheckCircle2 size={16} /> Enterprise-grade encryption</li>
              <li><CheckCircle2 size={16} /> Regulatory-ready audit trails</li>
            </ul>
          </div>
        </div>

        {/* Right Section */}
        <div className="right-panel">
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="header-text" >
              <h2>Sign in</h2>
              <p>Access your secure workspace</p>
            </div>

         {error && (
          <div className="error-box">
            {error}
          </div>
        )}

            <div className="field">
              <label>Email address</label>
              <input
                type="email"
                placeholder="user@organization.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="field">
              <label>Password</label>
              <div className="password-input-wrapper">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button" 
                  className="eye-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <button
            className="submit-btn"
            type="submit"
            disabled={!isvalid || loading}
          >
            {loading ? (
               <ThreeDot
              height="20"
              width="40"
              radius="9"
              color="#ffffff"
              ariaLabel="three-dots-loading"
            />
            ) : (
              'Sign in'
            )}
          </button>

            <div className="auth-footer">
              <span>Don’t have an account?</span>
              <Link to="/register" className='reg-link' >Sign up</Link>
            </div>

            <div className="security-footer">
              <Lock size={12} />
              <span>AES-256 secured session</span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
