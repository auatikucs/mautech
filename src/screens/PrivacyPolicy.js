import React from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <div className="body">
      {/* Metadata Table */}
      <table className="meta-table">
        <tbody>
          <tr><td>Code</td><td>MAU_DP_003_DP_Website_Privacy</td></tr>
          <tr><td>Version</td><td>1.0</td></tr>
          <tr><td>Date of Version</td><td>February 20, 2025</td></tr>
          <tr><td>Created by</td><td>GUUT Technologies Limited</td></tr>
          <tr><td>Approved by</td><td>Vice Chancellor</td></tr>
          <tr><td>Confidentiality Level</td><td>High</td></tr>
        </tbody>
      </table>

      {/* Table of Contents */}
      <div className="toc-container">
        <h4>📋 Contents</h4>
        <ul>
          <li><a href="#s1">1. Purpose</a></li>
          <li><a href="#s2">2. Using MAU Website</a></li>
          <li><a href="#s3">3. Submitting a Question</a></li>
          <li><a href="#s4">4. Requesting a Product / Service</a></li>
          <li><a href="#s5">5. Receiving Newsletters</a></li>
          <li><a href="#s6">6. Downloading a Document</a></li>
          <li><a href="#s7">7. Submitting a Review</a></li>
          <li><a href="#s8">8. Rights of the Data Subject</a></li>
          <li><a href="#s9">9. Stakeholder Complaints</a></li>
          <li><a href="#s10">10. Policy Updates</a></li>
        </ul>
      </div>

      {/* Section 1 */}
      <div id="s1" className="policy-sec">
        <div className="sh"><div className="si">🎯</div><div><h2>1. Purpose</h2></div></div>
        <div className="sb">
          <p>This policy outlines what stakeholder data <strong>Modibbo Adama University (MAU)</strong> collects when they visit the University website. MAU acts as a controller when collecting the data, thus MAU should provide information regarding how and why the data is used and the rights that MAU has over those data.</p>
          <p>MAU acts as the data controller in respect of all information collected via this website. This notice explains how and why your data is collected and used, the legal basis for processing, and the rights you hold over your personal information under the <strong>Nigeria Data Protection Act (NDPA) 2023</strong>.</p>
        </div>
      </div>

      {/* Section 2 */}
      <div id="s2" className="policy-sec">
        <div className="sh"><div className="si">🌐</div><div><h2>2. Using the MAU Website</h2></div></div>
        <div className="sb">
          <p>When you browse the MAU website, you may encounter cookies that help the University manage the website efficiently and improve your experience. Some cookies are strictly essential to the operation of the website; these do not require your consent.</p>
          <p>For all non-essential cookies, MAU will request your <strong>explicit consent</strong> before placing them on your device.</p>
          <table className="content-table">
            <thead>
              <tr><th>Cookie Name</th><th>Purpose</th><th>Additional Information</th></tr>
            </thead>
            <tbody>
              <tr><td>MAU_Session</td><td>Website Functionality</td><td>Strictly Necessary</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Section 3 */}
      <div id="s3" className="policy-sec">
        <div className="sh"><div className="si">❓</div><div><h2>3. Submitting a Question</h2></div></div>
        <div className="sb">
          <p>When you submit an enquiry through the MAU website, the following personal information will be collected: your <strong>name</strong>, <strong>phone number</strong>, and <strong>email address</strong>.</p>
          <p>This information is used solely to respond to your question and to provide further information about the University's programmes.</p>
        </div>
      </div>

      {/* Section 4 */}
      <div id="s4" className="policy-sec">
        <div className="sh"><div className="si">🛒</div><div><h2>4. Requesting a Product or Service</h2></div></div>
        <div className="sb">
          <p>When you make a service request (e.g., application forms, transcripts), the following details will be required: your <strong>name, address, phone number, email address</strong>, and relevant <strong>payment card details</strong>.</p>
        </div>
      </div>

      {/* Section 5 */}
      <div id="s5" className="policy-sec">
        <div className="sh"><div className="si">📧</div><div><h2>5. Receiving Newsletters</h2></div></div>
        <div className="sb">
          <p>When subscribing to newsletters, your <strong>name and email address</strong> will be required. You may withdraw your consent and unsubscribe at any time by clicking the link in any email.</p>
        </div>
      </div>

      {/* Section 8 */}
      <div id="s8" className="policy-sec">
        <div className="sh"><div className="si">⚖️</div><div><h2>8. Rights of the Data Subject</h2></div></div>
        <div className="sb">
          <p>Under the <strong>Nigeria Data Protection Act (NDPA) 2023</strong>, you have the following rights:</p>
          <ul className="policy-list">
            <li><strong>Right to Access:</strong> Request a copy of all personal data MAU holds about you.</li>
            <li><strong>Right to Rectification:</strong> Request correction of inaccurate data.</li>
            <li><strong>Right to Data Portability:</strong> Request a portable copy of your information.</li>
            <li><strong>Right to Withdraw Consent:</strong> Withdraw consent at any time without penalty.</li>
          </ul>
        </div>
      </div>

      {/* Section 9 */}
      <div id="s9" className="policy-sec">
        <div className="sh"><div className="si">💬</div><div><h2>9. Stakeholder Complaints</h2></div></div>
        <div className="sb">
          <p>If you have any concern, contact the University's Data Protection Officer directly:</p>
          <div className="contact-box">
            <strong>Data Protection Officer</strong><br/>
            Modibbo Adama University · Yola · Nigeria<br/>
            Email: <a href="mailto:dpo@mau.edu.ng">dpo@mau.edu.ng</a>
          </div>
        </div>
      </div>

      <div id="s10" className="policy-sec">
        <div className="sh"><div className="si">🔄</div><div><h2>10. Updates</h2></div></div>
        <div className="sb">
          <p>MAU periodically reviews this policy. Updates will be reflected by the version number and effective date at the top of this document.</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;