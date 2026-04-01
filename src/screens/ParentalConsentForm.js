import  './ParentalConsentForm.css';
import React, { useState, useRef, useEffect } from 'react';



const ParentalConsentForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [refNo, setRefNo] = useState('MAU/PCF/—');
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);

  // Initialize Canvas for Signature
  useEffect(() => {
    if (!submitted) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      
      // Scaling for high DPI displays
      const ratio = window.devicePixelRatio || 1;
      canvas.width = canvas.offsetWidth * ratio;
      canvas.height = canvas.offsetHeight * ratio;
      ctx.scale(ratio, ratio);

      ctx.lineWidth = 2;
      ctx.lineCap = 'round';
      ctx.strokeStyle = '#000';
    }
  }, [submitted]);

  const startDrawing = (e) => {
    const { offsetX, offsetY } = getCoordinates(e);
    const ctx = canvasRef.current.getContext('2d');
    ctx.beginPath();
    ctx.moveTo(offsetX, offsetY);
    setIsDrawing(true);
    // Hide placeholder text when drawing starts
    document.getElementById('sp').style.display = 'none';
  };

  const draw = (e) => {
    if (!isDrawing) return;
    const { offsetX, offsetY } = getCoordinates(e);
    const ctx = canvasRef.current.getContext('2d');
    ctx.lineTo(offsetX, offsetY);
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const getCoordinates = (e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    if (e.touches) {
      return {
        offsetX: e.touches[0].clientX - rect.left,
        offsetY: e.touches[0].clientY - rect.top
      };
    }
    return {
      offsetX: e.nativeEvent.offsetX,
      offsetY: e.nativeEvent.offsetY
    };
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    document.getElementById('sp').style.display = 'block';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call
    const randomRef = `MAU/PCF/${Math.floor(1000 + Math.random() * 9000)}`;
    setRefNo(randomRef);
    setSubmitted(true);
    window.scrollTo(0, 0);
  };

  if (submitted) {
    return (
      <div className="body">
        <div id="ss" style={{ display: 'block', textAlign: 'center' }}>
          <div className="sci">✅</div>
          <h2>Consent Submitted</h2>
          <p>Thank you. The Parental Consent for your child/ward has been received by Modibbo Adama University.</p>
          <div className="ref">{refNo}</div>
          <p style={{ fontSize: '12.5px', color: '#777' }}>
            To withdraw or amend consent, contact <a href="mailto:dpo@mau.edu.ng" style={{ color: '#00796b' }}>dpo@mau.edu.ng</a>
          </p>
          <button className="bnw" onClick={() => setSubmitted(false)}>Submit Another</button>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="pw">
        <div className="pi">
          <div className="stp a" id="p1"><div className="sn">1</div><span className="sl_">Child / Ward Info</span></div>
          <div className="stp" id="p2"><div class="sn">2</div><span className="sl_">Guardian Details</span></div>
          <div className="stp" id="p3"><div class="sn">3</div><span className="sl_">Consent Choices</span></div>
          <div className="stp" id="p4"><div class="sn">4</div><span className="sl_">Declaration &amp; Sign</span></div>
        </div>
      </div>

      <div className="body">
        <div className="rg">
          <div className="rc"><span className="ri">🔍</span><div><h4>Right to Access &amp; Correct</h4><p>You may request to see or correct any data held about your child at any time.</p></div></div>
          <div className="rc"><span className="ri">↩️</span><div><h4>Right to Withdraw Consent</h4><p>You may withdraw any item of consent at any time by contacting the DPO.</p></div></div>
          <div className="rc"><span className="ri">🛡️</span><div><h4>Right to Object &amp; Claim</h4><p>You may object to misuse and claim compensation for any breach under the NDPA.</p></div></div>
          <div className="rc"><span className="ri">📋</span><div><h4>Data Used in Child's Interest</h4><p>All data will be used to support the child and comply with applicable data-sharing law.</p></div></div>
        </div>

        <form id="form" onSubmit={handleSubmit}>
          {/* Section 1 */}
          <div className="fs">
            <div className="fsh"><div className="fsi">👶</div><div><h2>Section 1 — Child / Ward Information</h2><p>Personal details of the child or ward whose data is being processed</p></div></div>
            <div className="fb">
              <div className="fr">
                <div className="f"><label>First Name <span className="r">*</span></label><input type="text" id="cfn" placeholder="First name" required /><span className="em">Required</span></div>
                <div className="f"><label>Last Name <span className="r">*</span></label><input type="text" id="cln" placeholder="Last name" required /><span className="em">Required</span></div>
              </div>
              <div className="fr t">
                <div className="f"><label>Date of Birth <span className="r">*</span></label><input type="date" id="cdob" required /><span className="em">Required</span></div>
                <div className="f">
                  <label>Gender</label>
                  <select id="cgen">
                    <option value="">— Select —</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Prefer not to say</option>
                  </select>
                </div>
                <div className="f"><label>ID No.</label><input type="text" id="cid" placeholder="Admission / Student No." /></div>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="fs">
            <div className="fsh"><div className="fsi">👤</div><div><h2>Section 2 — Parent / Legal Guardian Details</h2><p>Information about the person providing consent on behalf of the child</p></div></div>
            <div className="fb">
              <div className="fr">
                <div className="f"><label>Full Name <span className="r">*</span></label><input type="text" id="gn" placeholder="Full name" required /><span className="em">Required</span></div>
                <div className="f">
                  <label>Relationship to Child <span className="r">*</span></label>
                  <select id="gr" required>
                    <option value="">— Select —</option>
                    <option>Father</option>
                    <option>Mother</option>
                    <option>Legal Guardian</option>
                    <option>Grandparent</option>
                    <option>Other</option>
                  </select>
                  <span className="em">Required</span>
                </div>
              </div>
              <div className="fr">
                <div className="f"><label>Email Address</label><input type="email" id="ge" placeholder="guardian@example.com" /></div>
                <div className="f"><label>Phone Number</label><input type="tel" id="gp" placeholder="+234 801 234 5678" /></div>
              </div>
              <div className="fr s">
                <div className="f"><label>Postal / Home Address</label><textarea id="ga" rows="2" placeholder="Street address, city, state..."></textarea></div>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div className="fs">
            <div className="fsh yw"><div className="fsi">✅</div><div><h2>Section 3 — Consent Choices</h2><p>Tick all items you agree to.</p></div></div>
            <div className="fb">
              <div className="ct">
                <div className="cth"><span>Consent Item</span><span>I Agree</span></div>
                {[
                  { id: 'web', label: "Including my child's/ward's name on the MAU official website" },
                  { id: 'sm', label: "Including my child's/ward's name on MAU official social media" },
                  { id: 'news', label: "Including my child's/ward's name in MAU official newspapers" },
                  { id: 'pubs', label: "Including my child's/ward's name in other MAU publications" },
                  { id: 'img', label: "Presenting images or videos of my child/ward" },
                  { id: 'comp', label: "Allowing my child/ward to use MAU computer systems" },
                  { id: 'share', label: "Data sharing with relevant MAU departments" },
                ].map((item) => (
                  <div className="ctr" key={item.id}>
                    <div className="ctl">{item.label}</div>
                    <div className="ctc">
                      <label className="ck">
                        <input type="checkbox" name="cs" value={item.id} />
                        <svg viewBox="0 0 14 14"><polyline points="2,7 5.5,11 12,3"/></svg>
                      </label>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Section 4 */}
          <div className="fs">
            <div className="fsh"><div className="fsi">✍️</div><div><h2>Section 4 — Declaration &amp; Signature</h2></div></div>
            <div className="fb">
              <div className="sigb">
                <div className="fr">
                  <div className="f"><label>Full Name <span className="r">*</span></label><input type="text" id="sn" placeholder="Print full legal name" required /></div>
                  <div className="f"><label>Date Signed <span className="r">*</span></label><input type="date" id="sd" required /></div>
                </div>
                <div className="f" style={{ marginTop: '4px' }}>
                  <label>Draw Signature Below <span className="r">*</span></label>
                  <div className="sigw" id="sw" style={{ position: 'relative', border: '1px solid #ccc', height: '150px' }}>
                    <canvas 
                      ref={canvasRef}
                      onMouseDown={startDrawing}
                      onMouseMove={draw}
                      onMouseUp={stopDrawing}
                      onMouseLeave={stopDrawing}
                      onTouchStart={startDrawing}
                      onTouchMove={draw}
                      onTouchEnd={stopDrawing}
                      style={{ width: '100%', height: '100%', cursor: 'crosshair' }}
                    />
                    <div className="sigph" id="sp" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', pointerEvents: 'none', color: '#aaa' }}>
                      ✎ Sign here using mouse or touchscreen
                    </div>
                  </div>
                  <button type="button" className="sigcl" onClick={clearCanvas}>✕ Clear</button>
                </div>
              </div>
            </div>
          </div>

          <div className="sa">
            <div className="sc">
              <label className="ck">
                <input type="checkbox" id="fc" required />
                <svg viewBox="0 0 14 14"><polyline points="2,7 5.5,11 12,3"/></svg>
              </label>
              <label htmlFor="fc">I confirm that I am the <strong>parent or legal guardian</strong>...</label>
            </div>
            <div className="sbs">
              <button type="submit" className="bsub">Submit Consent →</button>
              <button type="button" className="bpr" onClick={() => window.print()}>🖨️ Print Form</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ParentalConsentForm;