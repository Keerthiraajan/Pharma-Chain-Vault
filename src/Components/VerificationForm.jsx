  import  { useState } from 'react';
  import { Shield, CheckCircle2 } from 'lucide-react';
  import { Modal, Text, Button, Group , PinInput } from '@mantine/core';
  import { useDisclosure } from '@mantine/hooks';
  import '../CSS/LoginComp.css';

  const VerificationForm = () => {

    const user = JSON.parse(localStorage.getItem("user"));
    console.log("User from localStorage: ", user);

    const [userRole] = useState(user?.role );      // 'researcher' | 'company'
    const [researcherType] = useState(user?.type);  // 'student' | 'working' | 'individual'
    const [opened, { open, close }] = useDisclosure(false);
  


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

    const handlesubmit = async(e) => {
      
      e.preventDefault();
      console.log("Form Data: ", formData);
      
      if ( userRole === 'RESEARCHER' && researcherType === 'Working Professional' ) {

        try {

          const reponse = await fetch( "http://localhost:5000/api/auth/verify-user-res-wor" , {
            method : "POST",
            credentials : 'include',
            headers : {
              "Content-Type" : "application/json"
            },
            body : JSON.stringify({
              state: formData.state,
              city: formData.city,
              organization_name: formData.organizationName,
              designation: formData.designation,
              work_email: formData.officialEmail,
              years_of_experience: formData.yearsOfExperience
            })
          });

          if (reponse.ok) {
            console.log("Verification successful");
          }
        }

        catch (error) {
          console.error("Verification error: ", error);
        }
      }

      else if (userRole === 'COMPANY') {

          try {

            const response = await fetch("http://localhost:5000/api/auth/verify-user-company", {
              method: "POST",
              credentials: "include",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                state: formData.state,
                city: formData.city,
                company_name: formData.companyName,
                industry_type: formData.industryType,
                gst_number: formData.gstNumber,
                registration_id: formData.registrationId
              })
            });

          } catch (error) {
            console.error("Company verification error: ", error);
          }
      }
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
                  <input type="text" value= {user?.full_name} disabled />
                  </div>

                  <div className="field1">
                  <label>Personal Email</label>
                  <input type="text"  value = {user?.email} disabled/>
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

              {userRole === 'RESEARCHER' && researcherType === 'Working Professional' && (
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
                      </div>
                  </div>
                  
                  <div className="field">
                    <label>Years of Experience</label>
                    <input type="number" placeholder="Your YOP" min={1} value={formData.yearsOfExperience} onChange={handleChange} name="yearsOfExperience"/>
                  </div>
                </>
              )}

              {userRole === 'RESEARCHER' && researcherType === 'Individual' && (
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

              {userRole === 'COMPANY' && (
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


      </div>
    );
  };

  export default VerificationForm;
