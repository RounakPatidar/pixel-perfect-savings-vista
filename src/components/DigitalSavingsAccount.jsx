import React, { useState } from 'react';
import './DigitalSavingsAccount.css';

const DigitalSavingsAccount = () => {
  const [activeTab, setActiveTab] = useState('digital-savings');
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="DigitalSavingsAccount-container">
      {/* Header Navigation */}
      <header className="DigitalSavingsAccount-header">
        <nav className="DigitalSavingsAccount-nav">
          <button 
            className={`DigitalSavingsAccount-nav-item ${activeTab === 'digital-savings' ? 'active' : ''}`}
            onClick={() => setActiveTab('digital-savings')}
          >
            Digital Savings Account
          </button>
          <button 
            className={`DigitalSavingsAccount-nav-item ${activeTab === 'features' ? 'active' : ''}`}
            onClick={() => setActiveTab('features')}
          >
            Features
          </button>
          <button 
            className={`DigitalSavingsAccount-nav-item ${activeTab === 'benefits' ? 'active' : ''}`}
            onClick={() => setActiveTab('benefits')}
          >
            Benefits
          </button>
          <button 
            className={`DigitalSavingsAccount-nav-item ${activeTab === 'how-to-apply' ? 'active' : ''}`}
            onClick={() => setActiveTab('how-to-apply')}
          >
            How to Apply
          </button>
          <button 
            className={`DigitalSavingsAccount-nav-item ${activeTab === 'savings-account' ? 'active' : ''}`}
            onClick={() => setActiveTab('savings-account')}
          >
            Savings Account
          </button>
          <button 
            className={`DigitalSavingsAccount-nav-item ${activeTab === 'eligibility' ? 'active' : ''}`}
            onClick={() => setActiveTab('eligibility')}
          >
            Eligibility
          </button>
          <button 
            className={`DigitalSavingsAccount-nav-item ${activeTab === 'interest-rates' ? 'active' : ''}`}
            onClick={() => setActiveTab('interest-rates')}
          >
            Interest Rates
          </button>
          <button 
            className={`DigitalSavingsAccount-nav-item ${activeTab === 'faqs' ? 'active' : ''}`}
            onClick={() => setActiveTab('faqs')}
          >
            FAQs
          </button>
        </nav>
      </header>

      {/* Main Content */}
      <main className="DigitalSavingsAccount-main">
        
        {/* Hero Section */}
        {activeTab === 'digital-savings' && (
          <section className="DigitalSavingsAccount-hero">
            <div className="DigitalSavingsAccount-hero-content">
              <div className="DigitalSavingsAccount-hero-left">
                <h1 className="DigitalSavingsAccount-hero-title">
                  Enjoy Maximum Benefits with Digital Savings Account
                  <span className="DigitalSavingsAccount-hero-icon">🌊</span>
                </h1>
                <ul className="DigitalSavingsAccount-hero-features">
                  <li>100% paperless & secure</li>
                  <li>Higher interest rates up to 7.50%* p.a.</li>
                  <li>Exclusive offers & discounts with RuPay Debit Card</li>
                  <li>Bank in 9 different languages</li>
                </ul>
                
                {/* Interest Rates Table */}
                <div className="DigitalSavingsAccount-rates-table">
                  <div className="DigitalSavingsAccount-table-header">
                    <div className="DigitalSavingsAccount-table-cell">Account Balance</div>
                    <div className="DigitalSavingsAccount-table-cell">Rate of Interest(p.a)</div>
                  </div>
                  <div className="DigitalSavingsAccount-table-row">
                    <div className="DigitalSavingsAccount-table-cell">Up to ₹1 lakh</div>
                    <div className="DigitalSavingsAccount-table-cell">3.00%</div>
                  </div>
                  <div className="DigitalSavingsAccount-table-row">
                    <div className="DigitalSavingsAccount-table-cell">&gt; ₹1 lakh to ₹5 lakhs</div>
                    <div className="DigitalSavingsAccount-table-cell">4.00%</div>
                  </div>
                  <div className="DigitalSavingsAccount-table-row">
                    <div className="DigitalSavingsAccount-table-cell">&gt; ₹5 lakhs to ₹10 lakhs</div>
                    <div className="DigitalSavingsAccount-table-cell">6.00%</div>
                  </div>
                  <div className="DigitalSavingsAccount-table-row">
                    <div className="DigitalSavingsAccount-table-cell">&gt; ₹10 lakhs to ₹50 lakhs</div>
                    <div className="DigitalSavingsAccount-table-cell">7.00%</div>
                  </div>
                  <div className="DigitalSavingsAccount-table-row">
                    <div className="DigitalSavingsAccount-table-cell">&gt; ₹50 lakhs to ₹5 crores</div>
                    <div className="DigitalSavingsAccount-table-cell">7.25%</div>
                  </div>
                  <div className="DigitalSavingsAccount-table-row">
                    <div className="DigitalSavingsAccount-table-cell">&gt;₹5 crores</div>
                    <div className="DigitalSavingsAccount-table-cell">7.50%</div>
                  </div>
                </div>
              </div>

              <div className="DigitalSavingsAccount-hero-right">
                <div className="DigitalSavingsAccount-form-container">
                  <h2 className="DigitalSavingsAccount-form-title">Boost your savings now!</h2>
                  <form className="DigitalSavingsAccount-form">
                    <div className="DigitalSavingsAccount-form-group">
                      <label className="DigitalSavingsAccount-form-label">Mobile Number *</label>
                      <input 
                        type="tel" 
                        className="DigitalSavingsAccount-form-input"
                        placeholder="Enter the mobile number which is linked with your Aadhaar"
                      />
                    </div>
                    <div className="DigitalSavingsAccount-form-group">
                      <label className="DigitalSavingsAccount-form-label">PAN *</label>
                      <input 
                        type="text" 
                        className="DigitalSavingsAccount-form-input"
                        placeholder="Enter PAN"
                      />
                    </div>
                    <div className="DigitalSavingsAccount-form-group">
                      <label className="DigitalSavingsAccount-form-label">Name as per PAN *</label>
                      <input 
                        type="text" 
                        className="DigitalSavingsAccount-form-input"
                        placeholder="Enter name as per PAN"
                      />
                    </div>
                    <div className="DigitalSavingsAccount-form-group">
                      <label className="DigitalSavingsAccount-form-label">DOB as per PAN (DD/MM/YYYY) *</label>
                      <input 
                        type="date" 
                        className="DigitalSavingsAccount-form-input"
                      />
                    </div>
                    <div className="DigitalSavingsAccount-form-group">
                      <label className="DigitalSavingsAccount-form-label">Aadhaar Number / Virtual ID *</label>
                      <input 
                        type="text" 
                        className="DigitalSavingsAccount-form-input"
                        placeholder="Enter Aadhaar number"
                      />
                    </div>
                    <div className="DigitalSavingsAccount-form-group">
                      <label className="DigitalSavingsAccount-form-label">Listen to Aadhaar consent audio *</label>
                      <div className="DigitalSavingsAccount-audio-group">
                        <select className="DigitalSavingsAccount-form-select">
                          <option>English</option>
                          <option>Hindi</option>
                          <option>Telugu</option>
                        </select>
                        <button type="button" className="DigitalSavingsAccount-audio-button">▶</button>
                      </div>
                    </div>
                    <div className="DigitalSavingsAccount-form-group">
                      <label className="DigitalSavingsAccount-checkbox-container">
                        <input type="checkbox" className="DigitalSavingsAccount-checkbox" />
                        <span className="DigitalSavingsAccount-checkbox-text">
                          I have read and accepted all the <span className="DigitalSavingsAccount-link">Terms and Conditions</span> including privacy policy and fees & charges
                        </span>
                      </label>
                    </div>
                    <button type="submit" className="DigitalSavingsAccount-submit-button">Continue</button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Features Section */}
        {activeTab === 'features' && (
          <section className="DigitalSavingsAccount-features">
            <div className="DigitalSavingsAccount-section-content">
              <h2 className="DigitalSavingsAccount-section-title">Key Features of our Digital Savings Account</h2>
              <div className="DigitalSavingsAccount-features-grid">
                <div className="DigitalSavingsAccount-feature-card">
                  <div className="DigitalSavingsAccount-feature-icon">💰</div>
                  <h3 className="DigitalSavingsAccount-feature-title">Higher interest rates on your savings</h3>
                </div>
                <div className="DigitalSavingsAccount-feature-card">
                  <div className="DigitalSavingsAccount-feature-icon">⚡</div>
                  <h3 className="DigitalSavingsAccount-feature-title">Open a Digital Savings Account Instantly</h3>
                </div>
                <div className="DigitalSavingsAccount-feature-card">
                  <div className="DigitalSavingsAccount-feature-icon">🔒</div>
                  <h3 className="DigitalSavingsAccount-feature-title">Paperless and secure</h3>
                </div>
                <div className="DigitalSavingsAccount-feature-card">
                  <div className="DigitalSavingsAccount-feature-icon">📱</div>
                  <h3 className="DigitalSavingsAccount-feature-title">24 x 7 Access using Ujjivan Mobile Banking or Internet Banking</h3>
                </div>
              </div>
              <div className="DigitalSavingsAccount-cta-center">
                <button className="DigitalSavingsAccount-cta-button">Open Now</button>
              </div>
            </div>
          </section>
        )}

        {/* Benefits Section */}
        {activeTab === 'benefits' && (
          <section className="DigitalSavingsAccount-benefits">
            <div className="DigitalSavingsAccount-section-content">
              <h2 className="DigitalSavingsAccount-section-title">Top Benefits of our Digital Savings Account</h2>
              <div className="DigitalSavingsAccount-benefits-layout">
                <div className="DigitalSavingsAccount-benefits-left">
                  <div className="DigitalSavingsAccount-benefit-item">
                    <div className="DigitalSavingsAccount-benefit-icon">🛍️</div>
                    <p className="DigitalSavingsAccount-benefit-text">
                      Exclusive offers on shopping, travel, dining, and healthcare in collaboration with RuPay
                    </p>
                  </div>
                  <div className="DigitalSavingsAccount-benefit-item">
                    <div className="DigitalSavingsAccount-benefit-icon">📞</div>
                    <p className="DigitalSavingsAccount-benefit-text">
                      Call toll-free 1800-208-2121 for 24x7 customer support in your preferred language
                    </p>
                  </div>
                  <div className="DigitalSavingsAccount-benefit-item">
                    <div className="DigitalSavingsAccount-benefit-icon">🌐</div>
                    <p className="DigitalSavingsAccount-benefit-text">
                      Multi-lingual banking app in 9 languages offering bill payments, recharge and finger print login facilities
                    </p>
                  </div>
                </div>
                <div className="DigitalSavingsAccount-benefits-right">
                  <div className="DigitalSavingsAccount-requirements-card">
                    <h3 className="DigitalSavingsAccount-requirements-title">Minimal Requirements</h3>
                    <div className="DigitalSavingsAccount-requirement-item">
                      <div className="DigitalSavingsAccount-requirement-icon">📄</div>
                      <span>Aadhaar Card</span>
                    </div>
                    <div className="DigitalSavingsAccount-requirement-item">
                      <div className="DigitalSavingsAccount-requirement-icon">🏛️</div>
                      <span>PAN Card (Physical PAN required for vKYC)</span>
                    </div>
                    <div className="DigitalSavingsAccount-requirement-item">
                      <div className="DigitalSavingsAccount-requirement-icon">📱</div>
                      <span>Mobile number linked with Aadhaar</span>
                    </div>
                    <div className="DigitalSavingsAccount-requirement-item">
                      <div className="DigitalSavingsAccount-requirement-icon">🔞</div>
                      <span>Age greater than 18</span>
                    </div>
                    <div className="DigitalSavingsAccount-requirement-item">
                      <div className="DigitalSavingsAccount-requirement-icon">🇮🇳</div>
                      <span>Resident of India</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* How to Apply Section */}
        {activeTab === 'how-to-apply' && (
          <section className="DigitalSavingsAccount-how-to-apply">
            <div className="DigitalSavingsAccount-section-content">
              <div className="DigitalSavingsAccount-apply-layout">
                <div className="DigitalSavingsAccount-apply-left">
                  <div className="DigitalSavingsAccount-apply-image">
                    <img src="/lovable-uploads/9d79b3cc-7931-481e-b7d7-6efdbbc12253.png" alt="Person using mobile banking" />
                  </div>
                </div>
                <div className="DigitalSavingsAccount-apply-right">
                  <h2 className="DigitalSavingsAccount-section-title">How to apply</h2>
                  <div className="DigitalSavingsAccount-steps">
                    <div className="DigitalSavingsAccount-step">
                      <div className="DigitalSavingsAccount-step-number">01</div>
                      <p className="DigitalSavingsAccount-step-text">Enter your mobile number, PAN and Aadhaar details</p>
                    </div>
                    <div className="DigitalSavingsAccount-step">
                      <div className="DigitalSavingsAccount-step-number">02</div>
                      <p className="DigitalSavingsAccount-step-text">Select product variant and complete initial funding</p>
                    </div>
                    <div className="DigitalSavingsAccount-step">
                      <div className="DigitalSavingsAccount-step-number">03</div>
                      <p className="DigitalSavingsAccount-step-text">Provide personal details</p>
                    </div>
                    <div className="DigitalSavingsAccount-step">
                      <div className="DigitalSavingsAccount-step-number">04</div>
                      <p className="DigitalSavingsAccount-step-text">Complete video KYC (08:00 AM To 08:00 PM)</p>
                    </div>
                    <div className="DigitalSavingsAccount-step">
                      <div className="DigitalSavingsAccount-step-number">05</div>
                      <p className="DigitalSavingsAccount-step-text">Digital Savings Account opened successfully and start transacting!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Eligibility Section */}
        {activeTab === 'eligibility' && (
          <section className="DigitalSavingsAccount-eligibility">
            <div className="DigitalSavingsAccount-section-content">
              <h2 className="DigitalSavingsAccount-section-title">Who can open a Digital Savings Account?</h2>
              <div className="DigitalSavingsAccount-eligibility-grid">
                <div className="DigitalSavingsAccount-eligibility-item">
                  <div className="DigitalSavingsAccount-eligibility-icon">✅</div>
                  <p>You should be a resident individual of 18 years of age or above to open a Digital Savings Account.</p>
                </div>
                <div className="DigitalSavingsAccount-eligibility-item">
                  <div className="DigitalSavingsAccount-eligibility-icon">✅</div>
                  <p>You will need the following documents: Aadhaar Card, PAN Card and mobile number linked to your Aadhaar Card.</p>
                </div>
              </div>
              <div className="DigitalSavingsAccount-cta-center">
                <button className="DigitalSavingsAccount-cta-button">Open Now</button>
              </div>
            </div>
          </section>
        )}

        {/* Interest Rates Section */}
        {activeTab === 'interest-rates' && (
          <section className="DigitalSavingsAccount-interest-rates">
            <div className="DigitalSavingsAccount-section-content">
              <h2 className="DigitalSavingsAccount-section-title">Interest Rates</h2>
              <p className="DigitalSavingsAccount-section-subtitle">
                Below mentioned are the Interest Rates for Domestic as well as Non-Resident Savings Deposits (w.e.f. 19th June, 2025)
              </p>
              
              <div className="DigitalSavingsAccount-rates-table-large">
                <div className="DigitalSavingsAccount-table-header">
                  <div className="DigitalSavingsAccount-table-cell">Account balance</div>
                  <div className="DigitalSavingsAccount-table-cell">Rate of Interest (p.a.)</div>
                </div>
                <div className="DigitalSavingsAccount-table-row">
                  <div className="DigitalSavingsAccount-table-cell">Up to ₹1 lakh</div>
                  <div className="DigitalSavingsAccount-table-cell">3.00%</div>
                </div>
                <div className="DigitalSavingsAccount-table-row">
                  <div className="DigitalSavingsAccount-table-cell">&gt; ₹1 lakh to ₹5 lakhs</div>
                  <div className="DigitalSavingsAccount-table-cell">4.00%</div>
                </div>
                <div className="DigitalSavingsAccount-table-row">
                  <div className="DigitalSavingsAccount-table-cell">&gt; ₹5 lakhs to ₹10 lakhs</div>
                  <div className="DigitalSavingsAccount-table-cell">6.00%</div>
                </div>
                <div className="DigitalSavingsAccount-table-row">
                  <div className="DigitalSavingsAccount-table-cell">&gt; ₹10 lakhs to ₹50 lakhs</div>
                  <div className="DigitalSavingsAccount-table-cell">7.00%</div>
                </div>
                <div className="DigitalSavingsAccount-table-row">
                  <div className="DigitalSavingsAccount-table-cell">&gt; ₹50 lakhs to ₹5 crores</div>
                  <div className="DigitalSavingsAccount-table-cell">7.25%</div>
                </div>
                <div className="DigitalSavingsAccount-table-row">
                  <div className="DigitalSavingsAccount-table-cell">&gt; ₹5 crores</div>
                  <div className="DigitalSavingsAccount-table-cell">7.50%</div>
                </div>
              </div>

              <p className="DigitalSavingsAccount-contact-info">
                Please write to customercare[at]ujjivan[dot]com to know more.
              </p>
              
              <div className="DigitalSavingsAccount-important-notes">
                <p><strong>*Important Points: No Additional Interest Rate for Senior Citizens</strong></p>
                <p><strong>*Calculation Methodology applicable for Savings Accounts:</strong></p>
              </div>
            </div>
          </section>
        )}

        {/* FAQs Section */}
        {activeTab === 'faqs' && (
          <section className="DigitalSavingsAccount-faqs">
            <div className="DigitalSavingsAccount-section-content">
              <h2 className="DigitalSavingsAccount-section-title">Frequently Asked Questions</h2>
              <div className="DigitalSavingsAccount-faq-list">
                {[
                  {
                    question: "What is a Savings Account?",
                    answer: "A Savings Account is a type of bank account that allows you to deposit, withdraw and save money while earning an interest on your account balances."
                  },
                  {
                    question: "What is a Digital Savings Account?",
                    answer: "A Digital Savings Account is a paperless account that can be opened entirely online without visiting a bank branch."
                  },
                  {
                    question: "Is a Digital Savings Account secure?",
                    answer: "Yes, Digital Savings Accounts are highly secure with advanced encryption and security measures."
                  },
                  {
                    question: "Who is eligible to open a Digital Savings Account with Ujjivan SFB?",
                    answer: "Indian residents aged 18 years and above with valid Aadhaar and PAN cards can open the account."
                  },
                  {
                    question: "What is the minimum amount needed to open a Digital Savings Account?",
                    answer: "The minimum amount required varies based on the account type and will be specified during the application process."
                  },
                  {
                    question: "What is the interest that I will earn on my Digital Savings Account balance?",
                    answer: "Interest rates vary based on your account balance, ranging from 3.00% to 7.50% per annum."
                  }
                ].map((faq, index) => (
                  <div key={index} className="DigitalSavingsAccount-faq-item">
                    <button 
                      className="DigitalSavingsAccount-faq-question"
                      onClick={() => toggleFAQ(index)}
                    >
                      {faq.question}
                      <span className={`DigitalSavingsAccount-faq-icon ${openFAQ === index ? 'open' : ''}`}>
                        {openFAQ === index ? '↑' : '↓'}
                      </span>
                    </button>
                    {openFAQ === index && (
                      <div className="DigitalSavingsAccount-faq-answer">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Savings Account Types Section */}
        {activeTab === 'savings-account' && (
          <section className="DigitalSavingsAccount-account-types">
            <div className="DigitalSavingsAccount-section-content">
              <h2 className="DigitalSavingsAccount-section-title">Savings Accounts</h2>
              <p className="DigitalSavingsAccount-section-subtitle">
                Our innovative Savings Accounts are designed to help you optimize your savings, grow your wealth and achieve your long-term financial goals.
              </p>
              
              <div className="DigitalSavingsAccount-account-grid">
                <div className="DigitalSavingsAccount-account-card">
                  <div className="DigitalSavingsAccount-account-image">
                    <img src="/lovable-uploads/a71e5151-099f-494a-84f0-e4f0a9dc9e52.png" alt="Garima Savings Account" />
                  </div>
                  <div className="DigitalSavingsAccount-account-content">
                    <h3 className="DigitalSavingsAccount-account-title">Garima Savings Account</h3>
                    <p className="DigitalSavingsAccount-account-subtitle">Journey on with pride</p>
                    <ul className="DigitalSavingsAccount-account-features">
                      <li>Flexible eligibility criteria and balance maintenance options</li>
                      <li>Minor account linked to the primary with a Standing Instruction of ₹2,000 per month</li>
                      <li>Free RuPay Classic Debit Card specially designed for women</li>
                    </ul>
                  </div>
                </div>

                <div className="DigitalSavingsAccount-account-card">
                  <div className="DigitalSavingsAccount-account-image">
                    <img src="/lovable-uploads/a71e5151-099f-494a-84f0-e4f0a9dc9e52.png" alt="Privilege Savings Account" />
                  </div>
                  <div className="DigitalSavingsAccount-account-content">
                    <h3 className="DigitalSavingsAccount-account-title">Privilege Savings Account</h3>
                    <p className="DigitalSavingsAccount-account-subtitle">Explore a world of banking privileges</p>
                    <ul className="DigitalSavingsAccount-account-features">
                      <li>Monthly Average Balance – ₹25,000 & above</li>
                      <li>Unlimited free fund transfer through Internet and mobile banking</li>
                      <li>Unlimited free transactions across any bank ATM</li>
                    </ul>
                  </div>
                </div>

                <div className="DigitalSavingsAccount-account-card">
                  <div className="DigitalSavingsAccount-account-image">
                    <img src="/lovable-uploads/a71e5151-099f-494a-84f0-e4f0a9dc9e52.png" alt="Regular Savings Account" />
                  </div>
                  <div className="DigitalSavingsAccount-account-content">
                    <h3 className="DigitalSavingsAccount-account-title">Regular Savings Account</h3>
                    <p className="DigitalSavingsAccount-account-subtitle">Smaller Savings for Better Future</p>
                    <ul className="DigitalSavingsAccount-account-features">
                      <li>Monthly Average Balance of ₹1,000 need to be maintained in regular savings bank account to avoid charges</li>
                      <li>RuPay Classic Debit Card</li>
                      <li>No charges for non-home branch transactions</li>
                    </ul>
                  </div>
                </div>

                <div className="DigitalSavingsAccount-account-card">
                  <div className="DigitalSavingsAccount-account-image">
                    <img src="/lovable-uploads/a71e5151-099f-494a-84f0-e4f0a9dc9e52.png" alt="Maxima Savings Account" />
                  </div>
                  <div className="DigitalSavingsAccount-account-content">
                    <h3 className="DigitalSavingsAccount-account-title">Maxima Savings Account</h3>
                    <p className="DigitalSavingsAccount-account-subtitle">Redefine your privileges</p>
                    <ul className="DigitalSavingsAccount-account-features">
                      <li>Zero charges on commonly used banking services*</li>
                      <li>Enhanced POS & E-commerce limit of ₹5 lakhs</li>
                      <li>Personal Accident and Total Permanent Disability cover of up to ₹10 lakhs</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

      </main>
    </div>
  );
};

export default DigitalSavingsAccount;