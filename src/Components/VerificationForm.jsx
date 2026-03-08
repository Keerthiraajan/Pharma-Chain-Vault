  import  { useState } from 'react';
  import { Shield, CheckCircle2 } from 'lucide-react';
  import { Modal, Text, Button, Group , PinInput } from '@mantine/core';
  import { useDisclosure } from '@mantine/hooks';
  import '../CSS/LoginComp.css';

  const VerificationForm = () => {


    const [userRole] = useState('researcher');      // 'researcher' | 'company'
    const [researcherType] = useState('student');  // 'student' | 'working' | 'individual'
    const [opened, { open, close }] = useDisclosure(false);
    const [otp, setOtp] = useState('');

    const [formData, setFormData] = useState( {
      role : userRole,
      rtype : researcherType,
      state: '',
      city: '',
      institutionName: '',
      collegeEmail: '',
      degreeProgram: '',
      studentRegistrationNumber: '',
      organizationName: '',
      designation: '',  
      officialEmail: '',
      yearsOfExperience: '',
      researchDomain: '',
      portfolioLink: '',
      companyName: '',
      industryType: '',
      gstNumber: '',
      registrationId: ''
    })

    const handleChange = (e) => {
    const { name, value } = e.target;

      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    };

    const handlesubmit = (e) => {
      console.log("Submitting form");
      e.preventDefault();
      console.log("Form Data Submitted: ", formData);
    }

    const otpverify = () => {

      console.log("Verifying OTP: ", otp);
      close();
    }
    return (
      <div className="page-wrapper">
        <div className="split-container">

          
          <div className="left-panel">
            <div className="left-content">
              <div className="logo">
                <Shield size={22} />
                <span>Pharma-Chain Vault</span>
              </div>

              <h1>Account Verification</h1>
              <p>
                Final verification step to activate your secure blockchain workspace.
              </p>

              <ul className="points">
                <li><CheckCircle2 size={16} /> Identity verification</li>
                <li><CheckCircle2 size={16} /> Regulatory compliance ready</li>
                <li><CheckCircle2 size={16} /> Secure access enabled</li>
              </ul>
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className="right-panel">
            <form className="verify-form" onSubmit={handlesubmit}>

              <div className="header-text">
                <h2>Verification</h2>
                <p>Complete the final step</p>
              </div>

            
              <div className="field-row">
                  <div className="field">
                  <label>Your Name</label>
                  <input type="text" value= "Keerthi" disabled />
                  </div>

                  <div className="field1">
                  <label>Personal Email</label>
                  <input type="text"  value = "keerthi@gmail.com" disabled/>
                  </div>
              </div>

              <div className="field-row">
              <div className="field">
                  <label>State</label>
                  <input type="text" placeholder="Enter state" value={formData.state} onChange={handleChange} name="state"/>
              </div>

              <div className="field">
                  <label>City</label>
                  <input type="text" placeholder="Enter city" value={formData.city} onChange={handleChange} name="city"/>
              </div>
              </div>
      
              {userRole === 'researcher' && researcherType === 'student' && (
                <>
                  <div className="field">
                    <label>University / College Name</label>
                    <input type="text" placeholder="Institution name" value={formData.institutionName} onChange={handleChange} name="institutionName"/>
                  </div>

                  <div className="field">
                      <label>College Email-ID</label>
                      <div className="input-with-button">
                          <input
                          type="text"
                          placeholder="college@email.edu" value={formData.collegeEmail} onChange={handleChange} name='collegeEmail'
                          />
                          <button type="button" className="verify-btn" onClick={open} disabled={formData.collegeEmail === ''}>
                          Verify
                          </button>
                      </div>
                  </div>
                  
                  <div className="field-row">
                      <div className="field">
                      <label>Degree / Program</label>
                      <input type="text" placeholder="B.Tech / M.Sc / PhD" value={formData.degreeProgram} onChange={handleChange} name="degreeProgram"/>
                      </div>
                      
                      <div className="field">
                      <label>Student Registration Number :</label>
                      <input type="text" placeholder="College ID number" value={formData.studentRegistrationNumber} onChange={handleChange} name="studentRegistrationNumber"/>
                      </div>
                  </div>
                </>
              )}

              {userRole === 'researcher' && researcherType === 'working' && (
                <>
                  <div className="field">
                    <label>Organization Name</label>
                    <input type="text" placeholder="Company / Institute" value={formData.organizationName} onChange={handleChange} name="organizationName"/>
                  </div>

                  <div className="field">
                    <label>Designation</label>
                    <input type="text" placeholder="Research Scientist, Analyst..." value={formData.designation} onChange={handleChange} name="designation"/>
                  </div>

                  <div className="field">
                      <label>Official Email-ID</label>
                      <div className="input-with-button">
                          <input
                          type="text"
                          placeholder="name@organizaation.com"
                          value={formData.officialEmail}
                          onChange={handleChange}
                          name='officialEmail'
                          />
                          <button type="button" className="verify-btn"  onClick={open} disabled={formData.officialEmail === ''} >
                          Verify
                          </button>
                      </div>
                  </div>
                  
                  <div className="field">
                    <label>Years of Experience</label>
                    <input type="number" placeholder="Your YOP" min={1} value={formData.yearsOfExperience} onChange={handleChange} name="yearsOfExperience"/>
                  </div>
                </>
              )}

              {userRole === 'researcher' && researcherType === 'individual' && (
                <>
                  <div className="field">
                    <label>Research Domain</label>
                    <input type="text" placeholder="Blockchain, Pharma, AI..." value={formData.researchDomain} onChange={handleChange} name="researchDomain"/>
                  </div>

                  <div className="field">
                    <label>Portfolio / Profile Link</label>
                    <input type="url" placeholder="GitHub / Google Scholar" value={formData.portfolioLink} onChange={handleChange} name="portfolioLink"/>
                  </div>

                  <div className="field">
                    <label>Years of Experience</label>
                    <input type="number" placeholder="YOUR YOP " value={formData.yearsOfExperience} onChange={handleChange} name="yearsOfExperience"/>
                  </div>
                </>
              )}

              {userRole === 'company' && (
                <>
                  <div className="field">
                    <label>Company Name</label>
                    <input type="text" placeholder="Registered company name" value={formData.companyName} onChange={handleChange} name="companyName"/>
                  </div>

                  <div className="field">
                    <label>Industry Type</label>
                    <input type="text" placeholder="Pharma, Biotech, Supply Chain..." value={formData.industryType} onChange={handleChange} name="industryType"/>
                  </div>

                  <div className="field">
                    <label>GST No:</label>
                    <input type="text" placeholder="27ABCDxxxx" value={formData.gstNumber} onChange={handleChange} name="gstNumber"/>
                  </div>

                  <div className="field">
                    <label>Company Registration ID</label>
                    <input type="text" placeholder="CIN / Registration No." />
                  </div>
                </>
              )}

              <button className="submit-btn" type="submit">
                Verify Account
              </button>

            </form>
          </div>
        </div>

        <Modal
        opened={opened}
        onClose={close}
        title="OTP Verification"
        centered
        radius="md"
      >
        <Text size="sm" mb="xs">
          Enter OTP sent to Your Official Email Address
        </Text>

        <PinInput
          length={6}
          value={otp}
          onChange={setOtp}
          autoFocus
          inputType="numeric"
          oneTimeCode
          size="lg"
          mt="md"
        />

        <Group mt="lg" justify="right">
          <Button variant="default" onClick={close}>
            Cancel
          </Button>

          <Button
            disabled={otp.length !== 6}
            onClick={ otpverify}
          >
            Verify OTP
          </Button>
        </Group>
      </Modal>


      </div>
    );
  };

  export default VerificationForm;
