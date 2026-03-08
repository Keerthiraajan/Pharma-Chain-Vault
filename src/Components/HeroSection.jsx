import '../CSS/HeroSection.css';
import dashboardImage from '../assets/sample.png';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-inner">

        
        <div className="hero-text">
          <h1>
            Secure Collaboration
            for Pharmaceutical Innovation
          </h1>

          <p className="hero-subtitle">
            Designed for researchers and pharmaceutical companies
          </p>

          <p className="hero-description">
            A secure platform that enables researchers, pharmaceutical companies,
            and authorities to collaborate with clarity, control, and trust.
          </p>

          {/* ACTIONS */}
          <div className="hero-actions">
            <button className="b1">Get Started</button>
            <button className="b2">Explore Platform</button>
          </div>

          {/* PROOF CHIPS */}
          <div className="hero-badges">
            <span>Blockchain Verified</span>
            <span>Regulatory Ready</span>
            <span>Audit Trail Enabled</span>
          </div>

          {/* TRUST */}
          <div className="hero-trust">
            <div>
              <label>BUILT FOR</label>
              <p>Researchers · Pharma Companies · Regulators</p>
            </div>

            <div>
              <label>COMPLIANCE</label>
              <p>Immutable audit logs with full traceability</p>
            </div>

            <div>
              <label>ACCESS CONTROL</label>
              <p>Role-based permissions at every stage</p>
            </div>
          </div>
        </div>

        {/* ================= RIGHT ================= */}
        <div className="hero-visual">
          <img src={dashboardImage} alt="Dashboard preview" />
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
