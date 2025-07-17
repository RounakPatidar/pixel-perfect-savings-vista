import React, { useState } from 'react';
import './DigitalSavingsAccount.css';

const DigitalSavingsAccount = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="digital-savings-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="hero-left">
              <h1 className="hero-title">
                Enjoy Maximum Benefits with Digital Savings Account
                <span className="hero-icon">🌊</span>
              </h1>
              <ul className="hero-features">
                <li>100% paperless & secure</li>
                <li>Higher interest rates up to 7.50%* p.a.</li>
                <li>Exclusive offers & discounts with RuPay Debit Card</li>
                <li>Bank in 9 different languages</li>
              </ul>
              
              {/* Interest Rates Table */}
              <div className="rates-table">
                <div className="table-header">
                  <div className="table-cell">Account Balance</div>
                  <div className="table-cell">Rate of Interest(p.a)</div>
                </div>
                <div className="table-row">
                  <div className="table-cell">Up to ₹1 lakh</div>
                  <div className="table-cell">3.00%</div>
                </div>
                <div className="table-row">
                  <div className="table-cell">> ₹1 lakh to ₹5 lakhs</div>
                  <div className="table-cell">4.00%</div>
                </div>
                <div className="table-row">
                  <div className="table-cell">> ₹5 lakhs to ₹10 lakhs</div>
                  <div className="table-cell">6.00%</div>
                </div>
                <div className="table-row">
                  <div className="table-cell">> ₹10 lakhs to ₹50 lakhs</div>
                  <div className="table-cell">7.00%</div>
                </div>
                <div className="table-row">
                  <div className="table-cell">> ₹50 lakhs to ₹5 crores</div>
                  <div className="table-cell">7.25%</div>
                </div>
                <div className="table-row">
                  <div className="table-cell">>₹5 crores</div>
                  <div className="table-cell">7.50%</div>
                </div>
              </div>
            </div>

            <div className="hero-right">
              <div className="form-container">
                <h2 className="form-title">Boost your savings now!</h2>
                <form className="application-form">
                  <div className="form-group">
                    <label className="form-label">Mobile Number *</label>
                    <input 
                      type="tel" 
                      className="form-input"
                      placeholder="Enter the mobile number which is linked with your Aadhaar"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">PAN *</label>
                    <input 
                      type="text" 
                      className="form-input"
                      placeholder="Enter PAN"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Name as per PAN *</label>
                    <input 
                      type="text" 
                      className="form-input"
                      placeholder="Enter name as per PAN"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">DOB as per PAN (DD/MM/YYYY) *</label>
                    <input 
                      type="date" 
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Aadhaar Number / Virtual ID *</label>
                    <input 
                      type="text" 
                      className="form-input"
                      placeholder="Enter Aadhaar number"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Listen to Aadhaar consent audio *</label>
                    <div className="audio-group">
                      <select className="form-select">
                        <option>English</option>
                        <option>Hindi</option>
                        <option>Telugu</option>
                      </select>
                      <button type="button" className="audio-button">▶</button>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="checkbox-container">
                      <input type="checkbox" className="checkbox" />
                      <span className="checkbox-text">
                        I have read and accepted all the <span className="link">Terms and Conditions</span> including privacy policy and fees & charges
                      </span>
                    </label>
                  </div>
                  <button type="submit" className="submit-button">Continue</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-title">Key Features of our Digital Savings Account</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">💰</div>
              <h3 className="feature-title">Higher interest rates on your savings</h3>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3 className="feature-title">Open a Digital Savings Account Instantly</h3>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3 className="feature-title">Paperless and secure</h3>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3 className="feature-title">24 x 7 Access using Ujjivan Mobile Banking or Internet Banking</h3>
            </div>
          </div>
          <div className="cta-center">
            <button className="cta-button">Open Now</button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="container">
          <h2 className="section-title">Top Benefits of our Digital Savings Account</h2>
          <div className="benefits-layout">
            <div className="benefits-left">
              <div className="benefit-item">
                <div className="benefit-icon">🛍️</div>
                <p className="benefit-text">
                  Exclusive offers on shopping, travel, dining, and healthcare in collaboration with RuPay
                </p>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">📞</div>
                <p className="benefit-text">
                  Call toll-free 1800-208-2121 for 24x7 customer support in your preferred language
                </p>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">🌐</div>
                <p className="benefit-text">
                  Multi-lingual banking app in 9 languages offering bill payments, recharge and finger print login facilities
                </p>
              </div>
            </div>
            <div className="benefits-right">
              <div className="requirements-card">
                <h3 className="requirements-title">Minimal Requirements</h3>
                <div className="requirement-item">
                  <div className="requirement-icon">📄</div>
                  <span>Aadhaar Card</span>
                </div>
                <div className="requirement-item">
                  <div className="requirement-icon">🏛️</div>
                  <span>PAN Card (Physical PAN required for vKYC)</span>
                </div>
                <div className="requirement-item">
                  <div className="requirement-icon">📱</div>
                  <span>Mobile number linked with Aadhaar</span>
                </div>
                <div className="requirement-item">
                  <div className="requirement-icon">🔞</div>
                  <span>Age greater than 18</span>
                </div>
                <div className="requirement-item">
                  <div className="requirement-icon">🇮🇳</div>
                  <span>Resident of India</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Apply Section */}
      <section className="apply-section">
        <div className="container">
          <div className="apply-layout">
            <div className="apply-left">
              <div className="apply-image">
                <img src="/lovable-uploads/9d79b3cc-7931-481e-b7d7-6efdbbc12253.png" alt="Person using mobile banking" />
              </div>
            </div>
            <div className="apply-right">
              <h2 className="section-title">How to apply</h2>
              <div className="steps">
                <div className="step">
                  <div className="step-number">01</div>
                  <p className="step-text">Enter your mobile number, PAN and Aadhaar details</p>
                </div>
                <div className="step">
                  <div className="step-number">02</div>
                  <p className="step-text">Select product variant and complete initial funding</p>
                </div>
                <div className="step">
                  <div className="step-number">03</div>
                  <p className="step-text">Provide personal details</p>
                </div>
                <div className="step">
                  <div className="step-number">04</div>
                  <p className="step-text">Complete video KYC (08:00 AM To 08:00 PM)</p>
                </div>
                <div className="step">
                  <div className="step-number">05</div>
                  <p className="step-text">Digital Savings Account opened successfully and start transacting!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="eligibility-section">
        <div className="container">
          <h2 className="section-title">Who can open a Digital Savings Account?</h2>
          <div className="eligibility-grid">
            <div className="eligibility-item">
              <div className="eligibility-icon">✅</div>
              <p>You should be a resident individual of 18 years of age or above to open a Digital Savings Account.</p>
            </div>
            <div className="eligibility-item">
              <div className="eligibility-icon">✅</div>
              <p>You will need the following documents: Aadhaar Card, PAN Card and mobile number linked to your Aadhaar Card.</p>
            </div>
          </div>
          <div className="cta-center">
            <button className="cta-button">Open Now</button>
          </div>
        </div>
      </section>

      {/* Interest Rates Section */}
      <section className="interest-rates-section">
        <div className="container">
          <h2 className="section-title">Interest Rates</h2>
          <p className="section-subtitle">
            Below mentioned are the Interest Rates for Domestic as well as Non-Resident Savings Deposits (w.e.f. 19th June, 2025)
          </p>
          
          <div className="rates-table-large">
            <div className="table-header">
              <div className="table-cell">Account balance</div>
              <div className="table-cell">Rate of Interest (p.a.)</div>
            </div>
            <div className="table-row">
              <div className="table-cell">Up to ₹1 lakh</div>
              <div className="table-cell">3.00%</div>
            </div>
            <div className="table-row">
              <div className="table-cell">> ₹1 lakh to ₹5 lakhs</div>
              <div className="table-cell">4.00%</div>
            </div>
            <div className="table-row">
              <div className="table-cell">> ₹5 lakhs to ₹10 lakhs</div>
              <div className="table-cell">6.00%</div>
            </div>
            <div className="table-row">
              <div className="table-cell">> ₹10 lakhs to ₹50 lakhs</div>
              <div className="table-cell">7.00%</div>
            </div>
            <div className="table-row">
              <div className="table-cell">> ₹50 lakhs to ₹5 crores</div>
              <div className="table-cell">7.25%</div>
            </div>
            <div className="table-row">
              <div className="table-cell">> ₹5 crores</div>
              <div className="table-cell">7.50%</div>
            </div>
          </div>

          <p className="contact-info">
            Please write to customercare[at]ujjivan[dot]com to know more.
          </p>
          
          <div className="important-notes">
            <p><strong>*Important Points: No Additional Interest Rate for Senior Citizens</strong></p>
            <p><strong>*Calculation Methodology applicable for Savings Accounts:</strong></p>
          </div>
        </div>
      </section>

      {/* Savings Account Types Section */}
      <section className="account-types-section">
        <div className="container">
          <h2 className="section-title">Savings Accounts</h2>
          <p className="section-subtitle">
            Our innovative Savings Accounts are designed to help you optimize your savings, grow your wealth and achieve your long-term financial goals.
          </p>
          
          <div className="account-grid">
            <div className="account-card">
              <div className="account-image">
                <img src="/lovable-uploads/a71e5151-099f-494a-84f0-e4f0a9dc9e52.png" alt="Garima Savings Account" />
              </div>
              <div className="account-content">
                <h3 className="account-title">Garima Savings Account</h3>
                <p className="account-subtitle">Journey on with pride</p>
                <ul className="account-features">
                  <li>Flexible eligibility criteria and balance maintenance options</li>
                  <li>Minor account linked to the primary with a Standing Instruction of ₹2,000 per month</li>
                  <li>Free RuPay Classic Debit Card specially designed for women</li>
                </ul>
              </div>
            </div>

            <div className="account-card">
              <div className="account-image">
                <img src="/lovable-uploads/a71e5151-099f-494a-84f0-e4f0a9dc9e52.png" alt="Privilege Savings Account" />
              </div>
              <div className="account-content">
                <h3 className="account-title">Privilege Savings Account</h3>
                <p className="account-subtitle">Explore a world of banking privileges</p>
                <ul className="account-features">
                  <li>Monthly Average Balance – ₹25,000 & above</li>
                  <li>Unlimited free fund transfer through Internet and mobile banking</li>
                  <li>Unlimited free transactions across any bank ATM</li>
                </ul>
              </div>
            </div>

            <div className="account-card">
              <div className="account-image">
                <img src="/lovable-uploads/a71e5151-099f-494a-84f0-e4f0a9dc9e52.png" alt="Regular Savings Account" />
              </div>
              <div className="account-content">
                <h3 className="account-title">Regular Savings Account</h3>
                <p className="account-subtitle">Smaller Savings for Better Future</p>
                <ul className="account-features">
                  <li>Monthly Average Balance of ₹1,000 need to be maintained in regular savings bank account to avoid charges</li>
                  <li>RuPay Classic Debit Card</li>
                  <li>No charges for non-home branch transactions</li>
                </ul>
              </div>
            </div>

            <div className="account-card">
              <div className="account-image">
                <img src="/lovable-uploads/a71e5151-099f-494a-84f0-e4f0a9dc9e52.png" alt="Maxima Savings Account" />
              </div>
              <div className="account-content">
                <h3 className="account-title">Maxima Savings Account</h3>
                <p className="account-subtitle">Redefine your privileges</p>
                <ul className="account-features">
                  <li>Zero charges on commonly used banking services*</li>
                  <li>Enhanced POS & E-commerce limit of ₹5 lakhs</li>
                  <li>Personal Accident and Total Permanent Disability cover of up to ₹10 lakhs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="faqs-section">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="faq-list">
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
              <div key={index} className="faq-item">
                <button 
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                >
                  {faq.question}
                  <span className={`faq-icon ${openFAQ === index ? 'open' : ''}`}>
                    {openFAQ === index ? '↑' : '↓'}
                  </span>
                </button>
                {openFAQ === index && (
                  <div className="faq-answer">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DigitalSavingsAccount;