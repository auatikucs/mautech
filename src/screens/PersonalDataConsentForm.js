import  './PersonalDataConsentForm.css';
import React, { useState, useRef, useEffect } from 'react';


const PersonalDataConsentForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [refNo, setRefNo] = useState('MAU/DCF/—');
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  
  // State for checkboxes to handle "Select All" logic
  const [consents, setConsents] = useState({
    contact: false, address: false, name_pub: false, photos: false,
    reviews: false, newsletters: false, programmes: false,
    comms_share: false, research: false, third_party: false, downloads: false
  });

  // Setup Canvas context on mount
  useEffect(() => {
    if (!submitted) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      ctx.lineWidth = 2;
      ctx.lineCap = 'round';
      ctx.strokeStyle = '#000';
    }
  }, [submitted]);

  // --- Signature Logic ---
  const startDrawing = (e) => {
    const { offsetX, offsetY } = getCoords(e);
    const ctx = canvasRef.current.getContext('2d');
    ctx.beginPath();
    ctx.moveTo(offsetX, offsetY);
    setIsDrawing(true);
    document.getElementById('sp').style.display = 'none';
  };

  const draw = (e) => {
    if (!isDrawing) return;
    const { offsetX, offsetY } = getCoords(e);
    const ctx = canvasRef.current.getContext('2d');
    ctx.lineTo(offsetX, offsetY);
    ctx.stroke();
  };

  const getCoords = (e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    if (e.touches) return { offsetX: e.touches[0].clientX - rect.left, offsetY: e.touches[0].clientY - rect.top };
    return { offsetX: e.nativeEvent.offsetX, offsetY: e.nativeEvent.offsetY };
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
    document.getElementById('sp').style.display = 'block';
  };

  // --- Checkbox Logic ---
  const handleCheck = (e) => {
    const { name, checked } = e.target;
    setConsents(prev => ({ ...prev, [name]: checked }));
  };

  const selectAll = (e) => {
    const isChecked = e.target.checked;
    const updated = {};
    Object.keys(consents).forEach(key => updated[key] = isChecked);
    setConsents(updated);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate generation of Reference Number
    setRefNo(`MAU/DCF/${Math.random().toString(36).substr(2, 6).toUpperCase()}`);
    setSubmitted(true);
    window.scrollTo(0, 0);
  };

  if (submitted) {
    return (
      <div className="body">
        <div id="ss" style={{ display: 'block' }}>
          <div className="sci">✅</div>
          <h2>Consent Recorded</h2>
          <p>Thank you. Your Personal Data Consent has been received by Modibbo Adama University.</p>
          <div className="ref">{refNo}</div>
          <button className="bnw" onClick={() => setSubmitted(false)}>Submit Another</button>
        </div>
      </div>
    );
  }

  return (
    <div className="body">
      <div className="notice">
        ℹ️ You may withdraw consent at any time using our <a href="#withdrawal">Consent Withdrawal Form</a>. 
        Read our <a href="#privacy">Privacy Policy</a> for full details.
      </div>

      <div className="rg">
        <div className="rc"><span className="ri">🔍</span><div><h4>Right to Access</h4><p>Request a copy of all personal data held about you.</p></div></div>
        <div className="rc"><span className="ri">✎</span><div><h4>Right to Rectification</h4><p>Request correction of inaccurate data.</p></div></div>
        <div className="rc"><span className="ri">🚫</span><div><h4>Right to Erasure</h4><p>Request deletion of unnecessary data.</p></div></div>
        <div className="rc"><span className="ri">↩️</span><div><h4>Right to Withdraw</h4><p>Withdraw consent at any time without penalty.</p></div></div>
        <div className="rc"><span className="ri">🛡️</span><div><h4>Right to Object</h4><p>Object to processing based on interest.</p></div></div>
        <div className="rc"><span className="ri">📋</span><div><h4>Right to Portability</h4><p>Receive a machine-readable export of data.</p></div></div>
      </div>

      <form id="form" onSubmit={handleSubmit}>
        <div className="fs">
          <div className="fsh"><div className="fsi">👤</div><div><h2>Section 1 — Your Personal Details</h2><p>Identifying the data subject</p></div></div>
          <div className="fb">
            <div className="fr">
              <div className="f"><label>First Name <span className="r">*</span></label><input type="text" required placeholder="First name"/><span className="em">Required</span></div>
              <div className="f"><label>Last Name <span className="r">*</span></label><input type="text" required placeholder="Last name"/><span className="em">Required</span></div>
            </div>
            <div className="fr t">
              <div className="f">
                <label>User Category <span className="r">*</span></label>
                <select required>
                  <option value="">— Select —</option>
                  <option>Prospective Student</option>
                  <option>Current Student</option>
                  <option>Alumni</option>
                  {/* ... other options */}
                </select>
              </div>
              <div className="f"><label>Date of Birth <span className="r">*</span></label><input type="date" required/></div>
              <div className="f"><label>Email Address <span className="r">*</span></label><input type="email" required placeholder="your@email.com"/></div>
            </div>
          </div>
        </div>

        {/* Section 2 - Notice */}
        <div className="fs">
          <div className="fsh"><div className="fsi">📊</div><div><h2>Section 2 — Usage Transparency</h2></div></div>
          <div className="fb">
            <div className="dug">
              <div className="du"><h4>🏫 Academic Administration</h4><p>Records, admissions, and results.</p></div>
              <div className="du"><h4>📱 Communications</h4><p>News and updates via SMS/Email.</p></div>
            </div>
          </div>
        </div>

        {/* Section 3 - Checkboxes */}
        <div className="fs">
          <div className="fsh yw"><div className="fsi">✅</div><div><h2>Section 3 — Consent Choices</h2><p>Tick items you agree to.</p></div></div>
          <div className="fb">
            <div className="ct">
              <div className="sar">
                <label className="ck">
                  <input type="checkbox" onChange={selectAll} />
                  <svg viewBox="0 0 14 14"><polyline points="2,7 5.5,11 12,3"/></svg>
                </label>
                <span>Select / Deselect All Optional Items</span>
              </div>
              
              <div className="ctg">A — Personal Identification</div>
              <ConsentItem label="Collect name, email, and phone" name="contact" checked={consents.contact} onChange={handleCheck} />
              <ConsentItem label="Retain postal address and nationality" name="address" checked={consents.address} onChange={handleCheck} />
              
              <div className="ctg">B — Publications</div>
              <ConsentItem label="Publish name on official website" name="name_pub" checked={consents.name_pub} onChange={handleCheck} />
              <ConsentItem label="Use photographs or videos" name="photos" checked={consents.photos} onChange={handleCheck} />
            </div>
          </div>
        </div>

        {/* Section 4 - Signature */}
        <div className="fs">
          <div className="fsh"><div className="fsi">✍️</div><div><h2>Section 4 — Signature</h2></div></div>
          <div className="fb">
            <div className="sigb">
              <div className="fr">
                <div className="f"><label>Full Name <span className="r">*</span></label><input type="text" required /></div>
                <div className="f"><label>Date Signed <span className="r">*</span></label><input type="date" required /></div>
              </div>
              <div className="f" style={{marginTop:'10px'}}>
                <label>Draw Signature <span className="r">*</span></label>
                <div className="sigw">
                  <canvas 
                    ref={canvasRef} 
                    onMouseDown={startDrawing} onMouseMove={draw} onMouseUp={() => setIsDrawing(false)}
                    onTouchStart={startDrawing} onTouchMove={draw} onTouchEnd={() => setIsDrawing(false)}
                  />
                  <div className="sigph" id="sp">✎ Sign here</div>
                </div>
                <button type="button" className="sigcl" onClick={clearCanvas}>✕ Clear</button>
              </div>
            </div>
          </div>
        </div>

        <div className="sa">
          <div className="sc">
            <label className="ck">
              <input type="checkbox" required />
              <svg viewBox="0 0 14 14"><polyline points="2,7 5.5,11 12,3"/></svg>
            </label>
            <label>I confirm I am at least 18 years of age and info is accurate.</label>
          </div>
          <div className="sbs">
            <button type="submit" className="bsub">Submit Consent →</button>
            <button type="button" className="bpr" onClick={() => window.print()}>🖨️ Print Form</button>
          </div>
        </div>
      </form>
    </div>
  );
};

// Helper Component for Checkbox Rows
const ConsentItem = ({ label, name, checked, onChange }) => (
  <div className="ctr">
    <div className="ctl" dangerouslySetInnerHTML={{ __html: label }}></div>
    <div className="ctc">
      <label className="ck ccb">
        <input type="checkbox" name={name} checked={checked} onChange={onChange} />
        <svg viewBox="0 0 14 14"><polyline points="2,7 5.5,11 12,3"/></svg>
      </label>
    </div>
  </div>
);

export default PersonalDataConsentForm;