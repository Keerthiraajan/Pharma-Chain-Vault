import { useState } from 'react';
import { Link , useNavigate } from 'react-router-dom';
import { Shield, Lock, CheckCircle2 , Eye , EyeOff } from 'lucide-react';
import { IconCircleCheck } from '@tabler/icons-react'; 
import { Modal, Center, Text, Button } from '@mantine/core';
import '../CSS/LoginComp.css';

const Register = () => {
 
 const navigate = useNavigate();
 const[ userData , setUserData ] = useState({
    fullname : '',
    email : '',
    role : '',
    type : '',
    password : '',
    cpassword : ''
   })
  
  const [ password , setPassword] = useState(false);
  const [opened, setOpened] = useState(false);
  const [ error , setError ] = useState('');
  const is_valid = userData.fullname !== '' && userData.email !== '' && userData.role !== '' && userData.type !== '' && userData.password !== '' && userData.cpassword !== '' ;
 

   const handleRegister = ( e ) => {

        setError('');
        e.preventDefault();
        console.log( userData );    

        if ( userData.password.length < 6 ) {
            setError('Password must be at least 6 characters long.');
            return;
        }

        else if ( userData.password != userData.cpassword) {
            setError('Passwords do not match.');
            return;
        }
        setOpened(true);

   }

  return (
    
    <div className="page-wrapper">
        <Modal
        opened={opened}
        onClose={() => { 
            setOpened(false);
            navigate('/login');
         }}
        withCloseButton={true}
        centered
        padding="lg"
        size={420}
        radius="md"
      >
        <Center style={{ flexDirection: 'column' }}>
          <IconCircleCheck size={60} color="blue" />
          <Text size="md" weight={800} mt="md">
            Account Created Successfully!
          </Text>
          <Text  align="center" mt="sm">
            Navigate to the login page to access your account.
          </Text>
         
           <Button
                component={Link}
                to="/login"
                fullWidth
                mt="sm"
                color="blue"
                onClick={() => setOpened(false)}
            >
            Login
            </Button>

        </Center>
      </Modal>
      
      <div className="split-container1">

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

        
        <div className="right-panel">
          <form className="register-form" onSubmit={ handleRegister }>

            
            <div className="header-text">
              <h2 >Create account</h2>
              <p>Register to access Pharma-Chain Vault</p>
            </div>

            {
                error && <div className="error-box">{ error }</div>
            }
            
            <div style={{ display: 'flex', gap: '16px' }}>
              <div className="field" style={{ flex: 1 }}>
                <label>Full name</label>
                <input type="text" placeholder="Your Name" required onChange={ ( e ) => { setUserData( {...userData , fullname : e.target.value } ) } } />
              </div>

              <div className="field" style={{ flex: 1 }}>
                <label>Email address</label>
                <input type="email" placeholder="user@organization.com" required  onChange={ ( e ) => { setUserData( {...userData , email : e.target.value } ) } }/>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '16px' }}>
              <div className="field" style={{ flex: 1 }}>
                <label>Role</label>
                <select
                  value={ userData.role}
                  onChange={ (e) => { setUserData( { ...userData , role : e.target.value } ) } }
                  required 
                >
                  <option value="">Select role</option>
                  <option value="researcher">Researcher</option>
                  <option value="company">Company</option>
                </select>
              </div>

              <div className="field" style={{ flex: 1 }}>
                <label>
                  { userData.role === 'researcher'
                    ? 'Research domain'
                    : userData.role === 'company'
                    ? 'Industry type'
                    : 'Type'}
                </label>

               <select
                value={userData.type}
                disabled={!userData.role}
                required
                onChange={(e) =>
                    setUserData({
                    ...userData,
                    type: e.target.value
                    })
                }
                >
                <option value="">
                    {userData.role ? 'Select type' : 'Select role first'}
                </option>

                {userData.role === 'researcher' && (
                    <>
                    <option value="Student">Student</option>
                    <option value="Working Professional">Working Professional</option>
                    <option value="Individual">Individual</option>
                    </>
                )}

                {userData.role === 'company' && (
                    <>
                    <option value="manufacturer">Manufacturer</option>
                    <option value="wholesaler">Wholesaler</option>
                    </>
                )}
                </select>
              </div>
            </div>

            
            <div style={{ display: 'flex', gap: '16px' }}>
              <div className="field" style={{ flex: 1 }}>
                <label>Password</label>
                <div className="password-input-wrapper">
                  <input type= { password ? 'text' : 'password' } placeholder="••••••" required  onChange={ ( e ) => { setUserData( {...userData , password : e.target.value } ) } } />
                  <button type="button" className="eye-toggle"  onClick={ () => { setPassword (!password ) } }> {password ? <EyeOff size={18} /> : <Eye size={18} />} </button>
                </div>
              </div>

              <div className="field" style={{ flex: 1 }}>
                <label>Confirm password</label>
                <div className="password-input-wrapper">
                  <input type= { password ? 'text' : 'password' } placeholder="••••••" required  onChange={ ( e ) => { setUserData( {...userData , cpassword : e.target.value } ) } } />
                  <button type="button" className="eye-toggle"  onClick={ () => { setPassword (!password ) } }> {password ? <EyeOff size={18} /> : <Eye size={18} />} </button>
                </div>
              </div>
            </div>

            
            <button className="submit-btn" type="submit" disabled={ !is_valid } >
              Create account
            </button>

            
            <div className="auth-footer">
              <span>Already have an account?</span>
              <Link to="/login" className="reg-link">Sign in</Link>
            </div>

            <div className="security-footer">
              <Lock size={12} />
              <span>AES-256 secured registration</span>
            </div>

          </form>
        </div>

      </div>
    </div>
  );
};

export default Register;
