import React, { useState, useEffect, useRef } from 'react';
import './DataConsentWithdrawalForm.css';

export default function DataConsentWithdrawalForm() {
  // --- Form States ---
  // Section 1
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [category, setCategory] = useState('');
  const [matricNo, setMatricNo] = useState('');
  const [dateOfRequest, setDateOfRequest] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [org, setOrg] = useState('Modibbo Adama University');

  // Section 2
  const [reasons, setReasons] = useState({
    no_longer_necessary: false,
    inaccurate_data: false,
    objection: false,
    change_of_mind: false,
    marketing: false,
    other: false,
  });
  const [purpose, setPurpose] = useState('');
  const [scope, setScope] = useState({
    web: false,
    sm: false,
    print: false,
    img: false,
    news: false,
    mkt: false,
    share: false,
    cookies: false,
    all_other: false,
  });

  // Section 3
  const [sigName, setSigName] = useState('');
  const [sigDate, setSigDate] = useState('');
  const [finalConfirm, setFinalConfirm] = useState(false);

  // Success / Submission State
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionRef, setSubmissionRef] = useState('');

  // --- Validation Error States ---
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  // --- Canvas Signature Setup ---
  const canvasRef = useRef(null);
  const [isCanvasEmpty, setIsCanvasEmpty] = useState(true);
  const drawingRef = useRef(false);
  const lastPosRef = useRef({ x: 0, y: 0 });

  // Initialize dates and canvas
  useEffect(() => {
    // Default request & signature dates to today's date
    const today = new Date().toISOString().split('T')[0];
    setDateOfRequest(today);
    setSigDate(today);

    // Initial canvas setup
    initCanvas();

    // Resize listener for canvas responsiveness
    window.addEventListener('resize', initCanvas);
    return () => window.removeEventListener('resize', initCanvas);
  }, []);

  const initCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.parentNode.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = 130;  // Fixed heights as in CSS style

    const ctx = canvas.getContext('2d');
    ctx.strokeStyle = '#0b5e39'; // MAU green
    ctx.lineWidth = 2.5;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
  };

  // --- Drawing Handlers ---
  const getCoordinates = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();

    // Touch vs Mouse check
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;

    // Apply scale factor in case style width is different from canvas pixels
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;

    return {
      x: (clientX - rect.left) * scaleX,
      y: (clientY - rect.top) * scaleY
    };
  };

  const handleStartDrawing = (e) => {
    e.preventDefault();
    drawingRef.current = true;
    const pos = getCoordinates(e);
    lastPosRef.current = pos;

    const ctx = canvasRef.current.getContext('2d');
    ctx.beginPath();
    ctx.moveTo(pos.x, pos.y);
    setIsCanvasEmpty(false);
  };

  const handleDrawing = (e) => {
    if (!drawingRef.current) return;
    e.preventDefault();
    const pos = getCoordinates(e);
    const ctx = canvasRef.current.getContext('2d');

    ctx.beginPath();
    ctx.moveTo(lastPosRef.current.x, lastPosRef.current.y);
    ctx.lineTo(pos.x, pos.y);
    ctx.stroke();

    lastPosRef.current = pos;
  };

  const handleStopDrawing = () => {
    drawingRef.current = false;
  };

  const handleClearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setIsCanvasEmpty(true);
    if (errors.signature) {
      setErrors((prev) => ({ ...prev, signature: false }));
    }
  };

  // --- Event & Interaction Handlers ---
  const toggleReason = (key) => {
    setReasons((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const toggleScope = (key) => {
    setScope((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  // Determine if all scope checkboxes are currently checked
  const isAllScopeChecked = Object.values(scope).every(val => val);

  const toggleSelectAllScope = () => {
    const targetState = !isAllScopeChecked;
    const updated = {};
    Object.keys(scope).forEach((key) => {
      updated[key] = targetState;
    });
    setScope(updated);
  };

  // --- Dynamic Steps Complete Indicators ---
  // Section 1: Your Details Validity
  const isSection1Complete = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return (
      firstName.trim() !== '' &&
      lastName.trim() !== '' &&
      category !== '' &&
      dateOfRequest !== '' &&
      emailPattern.test(email) &&
      phone.trim() !== '' &&
      address.trim() !== '' &&
      org.trim() !== ''
    );
  };

  // Section 2: Reason & Scope Validity
  const isSection2Complete = () => {
    const hasAnyReason = Object.values(reasons).some(val => val);
    const hasAnyScope = Object.values(scope).some(val => val);
    return hasAnyReason && purpose.trim() !== '' && hasAnyScope;
  };

  // Section 3: Declaration Validity
  const isSection3Complete = () => {
    return (
      sigName.trim() !== '' &&
      sigDate !== '' &&
      !isCanvasEmpty &&
      finalConfirm
    );
  };

  // --- Form Validation ---
  const validateForm = () => {
    const newErrors = {};

    if (!firstName.trim()) newErrors.firstName = true;
    if (!lastName.trim()) newErrors.lastName = true;
    if (!category) newErrors.category = true;
    if (!dateOfRequest) newErrors.dateOfRequest = true;

    // Email Pattern check
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailPattern.test(email)) {
      newErrors.email = true;
    }

    if (!phone.trim()) newErrors.phone = true;
    if (!address.trim()) newErrors.address = true;
    if (!org.trim()) newErrors.org = true;

    // Section 2
    const hasAnyReason = Object.values(reasons).some(val => val);
    if (!hasAnyReason) newErrors.reasons = true;
    if (!purpose.trim()) newErrors.purpose = true;

    const hasAnyScope = Object.values(scope).some(val => val);
    if (!hasAnyScope) newErrors.scope = true;

    // Section 3
    if (!sigName.trim()) newErrors.sigName = true;
    if (!sigDate) newErrors.sigDate = true;
    if (isCanvasEmpty) newErrors.signature = true;
    if (!finalConfirm) newErrors.finalConfirm = true;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Mark everything as touched
    const allTouched = {};
    ['firstName', 'lastName', 'category', 'dateOfRequest', 'email', 'phone', 'address', 'org', 'purpose', 'sigName', 'sigDate'].forEach(field => {
      allTouched[field] = true;
    });
    setTouched(allTouched);

    const isValid = validateForm();
    if (isValid) {
      // Create random distinct references
      const randomId = Math.floor(1000 + Math.random() * 9000);
      const today = new Date();
      const year = today.getFullYear();
      const month = String(today.getMonth() + 1).padStart(2, '0');
      setSubmissionRef(`MAU/DPO/WD/${year}/${month}/${randomId}`);
      setIsSubmitted(true);

      // Scroll top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Scroll to the first error element
      setTimeout(() => {
        const firstErrorEl = document.querySelector('.has-error');
        if (firstErrorEl) {
          firstErrorEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 100);
    }
  };

  const handleReset = () => {
    // Clear all inputs
    setFirstName('');
    setLastName('');
    setCategory('');
    setMatricNo('');
    const today = new Date().toISOString().split('T')[0];
    setDateOfRequest(today);
    setEmail('');
    setPhone('');
    setAddress('');
    setOrg('Modibbo Adama University');

    setReasons({
      no_longer_necessary: false,
      inaccurate_data: false,
      objection: false,
      change_of_mind: false,
      marketing: false,
      other: false,
    });
    setPurpose('');
    setScope({
      web: false,
      sm: false,
      print: false,
      img: false,
      news: false,
      mkt: false,
      share: false,
      cookies: false,
      all_other: false,
    });

    setSigName('');
    setSigDate(today);
    setFinalConfirm(false);
    setIsSubmitted(false);
    setSubmissionRef('');
    setErrors({});
    setTouched({});
    setIsCanvasEmpty(true);

    // Give react time to re-render form, then re-init canvas
    setTimeout(initCanvas, 100);
  };

  // Utility to determine if a field has an error message
  const fieldClass = (fieldId, extraClass = '') => {
    const hasErr = errors[fieldId] && (touched[fieldId] || Object.keys(errors).length > 0);
    return `f ${hasErr ? 'has-error' : ''} ${extraClass}`.trim();
  };

  return (
    <div className="form-wrapper">
      <div className="bar"></div>
      
      {/* Alert Header Banner */}
      <div className="alert" id="important-alert">
        <div className="ai">
          <span style={{ fontSize: '19px', flexShrink: 0 }}>⚠️</span>
          <div>
            <strong>Important:</strong> Withdrawing consent does not affect the lawfulness of processing carried out before your withdrawal. Certain data may still be retained where MAU has a <strong>legal obligation</strong> or <strong>legitimate interest</strong> to do so. For queries, contact the DPO at <a href="mailto:dpo@mau.edu.ng">dpo@mau.edu.ng</a> before submitting.
          </div>
        </div>
      </div>

      {/* Progress Wizard Header */}
      <div className="pw">
        <div className="pi">
          <div className={`stp ${isSection1Complete() ? 'completed' : 'a'}`} id="p1">
            <div className="sn">{isSection1Complete() ? '✓' : '1'}</div>
            <span className="sl_">Your Details</span>
          </div>
          <div className={`stp ${isSection2Complete() ? 'completed' : (isSection1Complete() ? 'a' : '')}`} id="p2">
            <div className="sn">{isSection2Complete() ? '✓' : '2'}</div>
            <span className="sl_">Reason &amp; Scope</span>
          </div>
          <div className={`stp ${isSection3Complete() ? 'completed' : (isSection2Complete() ? 'a' : '')}`} id="p3">
            <div className="sn">{isSection3Complete() ? '✓' : '3'}</div>
            <span className="sl_">Declaration</span>
          </div>
        </div>
      </div>

      <div className="body">
        {/* Law Regulations Box */}
        <div className="notice">
          ℹ️ <strong>Your right to withdraw:</strong> Under <strong>Section 24 of the Nigeria Data Protection Act (NDPA) 2023</strong>, you may withdraw consent at any time. Your request will be acknowledged within <strong>72 hours</strong> and actioned within <strong>30 days</strong>. See also our <a href="#" onClick={(e) => e.preventDefault()}>Privacy Policy</a> and <a href="#" onClick={(e) => e.preventDefault()}>Cookie Policy</a>.
        </div>

        {!isSubmitted ? (
          <form id="form" onSubmit={handleSubmit} noValidate>
            
            {/* SECTION 1 — Data Subject Details */}
            <div className="fs">
              <div className="fsh">
                <div className="fsi">👤</div>
                <div>
                  <h2>Section 1 — Data Subject Details</h2>
                  <p>Your personal information as the individual making this withdrawal request</p>
                </div>
              </div>
              <div className="fb">
                <div className="fr">
                  <div className={fieldClass('firstName')}>
                    <label>First Name <span className="r">*</span></label>
                    <input 
                      type="text" 
                      id="fn" 
                      placeholder="First name" 
                      value={firstName} 
                      onChange={(e) => {
                        setFirstName(e.target.value);
                        if (errors.firstName) setErrors(prev => ({ ...prev, firstName: false }));
                      }}
                      onBlur={() => setTouched(prev => ({ ...prev, firstName: true }))}
                    />
                    <span className="em">Required</span>
                  </div>
                  <div className={fieldClass('lastName')}>
                    <label>Last Name <span className="r">*</span></label>
                    <input 
                      type="text" 
                      id="ln" 
                      placeholder="Last name" 
                      value={lastName} 
                      onChange={(e) => {
                        setLastName(e.target.value);
                        if (errors.lastName) setErrors(prev => ({ ...prev, lastName: false }));
                      }}
                      onBlur={() => setTouched(prev => ({ ...prev, lastName: true }))}
                    />
                    <span className="em">Required</span>
                  </div>
                </div>

                <div className="fr t">
                  <div className={fieldClass('category')}>
                    <label>Category <span className="r">*</span></label>
                    <select 
                      id="cat" 
                      value={category} 
                      onChange={(e) => {
                        setCategory(e.target.value);
                        if (errors.category) setErrors(prev => ({ ...prev, category: false }));
                      }}
                      onBlur={() => setTouched(prev => ({ ...prev, category: true }))}
                    >
                      <option value="">— Select —</option>
                      <option value="Current Student">Current Student</option>
                      <option value="Former Student / Alumni">Former Student / Alumni</option>
                      <option value="Current Staff">Current Staff</option>
                      <option value="Former Staff">Former Staff</option>
                      <option value="Applicant">Applicant</option>
                      <option value="Parent / Guardian">Parent / Guardian</option>
                      <option value="Research Participant">Research Participant</option>
                      <option value="Website Visitor">Website Visitor</option>
                      <option value="Other">Other</option>
                    </select>
                    <span className="em">Required</span>
                  </div>
                  <div className="f">
                    <label>Matric / Staff No.</label>
                    <input 
                      type="text" 
                      id="ref_" 
                      placeholder="If applicable" 
                      value={matricNo} 
                      onChange={(e) => setMatricNo(e.target.value)}
                    />
                  </div>
                  <div className={fieldClass('dateOfRequest')}>
                    <label>Date of Request <span className="r">*</span></label>
                    <input 
                      type="date" 
                      id="dor" 
                      value={dateOfRequest} 
                      onChange={(e) => {
                        setDateOfRequest(e.target.value);
                        if (errors.dateOfRequest) setErrors(prev => ({ ...prev, dateOfRequest: false }));
                      }}
                      onBlur={() => setTouched(prev => ({ ...prev, dateOfRequest: true }))}
                    />
                    <span className="em">Required</span>
                  </div>
                </div>

                <div className="fr">
                  <div className={fieldClass('email')}>
                    <label>Email Address <span className="r">*</span></label>
                    <input 
                      type="email" 
                      id="em_" 
                      placeholder="your@email.com" 
                      value={email} 
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (errors.email) setErrors(prev => ({ ...prev, email: false }));
                      }}
                      onBlur={() => setTouched(prev => ({ ...prev, email: true }))}
                    />
                    <span className="em">Valid email required</span>
                  </div>
                  <div className={fieldClass('phone')}>
                    <label>Phone Number <span className="r">*</span></label>
                    <input 
                      type="tel" 
                      id="ph" 
                      placeholder="+234 801 234 5678" 
                      value={phone} 
                      onChange={(e) => {
                        setPhone(e.target.value);
                        if (errors.phone) setErrors(prev => ({ ...prev, phone: false }));
                      }}
                      onBlur={() => setTouched(prev => ({ ...prev, phone: true }))}
                    />
                    <span className="em">Required</span>
                  </div>
                </div>

                <div className="fr">
                  <div className={fieldClass('address')}>
                    <label>Postal / Home Address <span className="r">*</span></label>
                    <textarea 
                      id="addr" 
                      rows="2" 
                      placeholder="Street address, city, state..." 
                      value={address} 
                      onChange={(e) => {
                        setAddress(e.target.value);
                        if (errors.address) setErrors(prev => ({ ...prev, address: false }));
                      }}
                      onBlur={() => setTouched(prev => ({ ...prev, address: true }))}
                    ></textarea>
                    <span className="em">Required</span>
                  </div>
                  <div className={fieldClass('org')}>
                    <label>Institution / Organization <span className="r">*</span></label>
                    <input 
                      type="text" 
                      id="org" 
                      placeholder="e.g. Modibbo Adama University" 
                      value={org} 
                      onChange={(e) => {
                        setOrg(e.target.value);
                        if (errors.org) setErrors(prev => ({ ...prev, org: false }));
                      }}
                      onBlur={() => setTouched(prev => ({ ...prev, org: true }))}
                    />
                    <span className="em">Required</span>
                  </div>
                </div>
              </div>
            </div>

            {/* SECTION 2 — Reason for Withdrawal & Scope */}
            <div className="fs">
              <div className="fsh yw">
                <div className="fsi">📝</div>
                <div>
                  <h2>Section 2 — Reason for Withdrawal &amp; Scope</h2>
                  <p>Tell us why you are withdrawing consent and which processing activities to stop</p>
                </div>
              </div>
              <div className="fb">
                <p style={{ fontSize: '13.5px', color: 'var(--ts)', marginBottom: '12px' }}>
                  <strong>Why are you withdrawing consent?</strong> Select all that apply:
                </p>
                
                <div className="rg">
                  <div 
                    className={`rc_ ${reasons.no_longer_necessary ? 'selected' : ''}`} 
                    onClick={() => toggleReason('no_longer_necessary')}
                  >
                    <input 
                      type="checkbox" 
                      name="rsn" 
                      value="no_longer_necessary" 
                      checked={reasons.no_longer_necessary} 
                      onChange={() => {}}
                    />
                    <div className="rt_">
                      <svg viewBox="0 0 14 14"><polyline points="2,7 5.5,11 12,3"/></svg>
                    </div>
                    <div className="rtxt">
                      <h4>No Longer Necessary</h4>
                      <p>The original purpose for which consent was given no longer applies.</p>
                    </div>
                  </div>

                  <div 
                    className={`rc_ ${reasons.inaccurate_data ? 'selected' : ''}`} 
                    onClick={() => toggleReason('inaccurate_data')}
                  >
                    <input 
                      type="checkbox" 
                      name="rsn" 
                      value="inaccurate_data" 
                      checked={reasons.inaccurate_data} 
                      onChange={() => {}}
                    />
                    <div className="rt_">
                      <svg viewBox="0 0 14 14"><polyline points="2,7 5.5,11 12,3"/></svg>
                    </div>
                    <div className="rtxt">
                      <h4>Inaccurate Data</h4>
                      <p>MAU holds personal data about me that is incorrect or out of date.</p>
                    </div>
                  </div>

                  <div 
                    className={`rc_ ${reasons.objection ? 'selected' : ''}`} 
                    onClick={() => toggleReason('objection')}
                  >
                    <input 
                      type="checkbox" 
                      name="rsn" 
                      value="objection" 
                      checked={reasons.objection} 
                      onChange={() => {}}
                    />
                    <div className="rt_">
                      <svg viewBox="0 0 14 14"><polyline points="2,7 5.5,11 12,3"/></svg>
                    </div>
                    <div className="rtxt">
                      <h4>Objection / Suspected Misuse</h4>
                      <p>I believe my data is being processed in a manner I did not consent to.</p>
                    </div>
                  </div>

                  <div 
                    className={`rc_ ${reasons.change_of_mind ? 'selected' : ''}`} 
                    onClick={() => toggleReason('change_of_mind')}
                  >
                    <input 
                      type="checkbox" 
                      name="rsn" 
                      value="change_of_mind" 
                      checked={reasons.change_of_mind} 
                      onChange={() => {}}
                    />
                    <div className="rt_">
                      <svg viewBox="0 0 14 14"><polyline points="2,7 5.5,11 12,3"/></svg>
                    </div>
                    <div className="rtxt">
                      <h4>Change of Mind</h4>
                      <p>I wish to withdraw consent I previously provided, for any reason.</p>
                    </div>
                  </div>

                  <div 
                    className={`rc_ ${reasons.marketing ? 'selected' : ''}`} 
                    onClick={() => toggleReason('marketing')}
                  >
                    <input 
                      type="checkbox" 
                      name="rsn" 
                      value="marketing" 
                      checked={reasons.marketing} 
                      onChange={() => {}}
                    />
                    <div className="rt_">
                      <svg viewBox="0 0 14 14"><polyline points="2,7 5.5,11 12,3"/></svg>
                    </div>
                    <div className="rtxt">
                      <h4>Unsubscribe / Marketing</h4>
                      <p>I no longer wish to receive newsletters, announcements, or promotional content.</p>
                    </div>
                  </div>

                  <div 
                    className={`rc_ ${reasons.other ? 'selected' : ''}`} 
                    onClick={() => toggleReason('other')}
                  >
                    <input 
                      type="checkbox" 
                      name="rsn" 
                      value="other" 
                      checked={reasons.other} 
                      onChange={() => {}}
                    />
                    <div className="rt_">
                      <svg viewBox="0 0 14 14"><polyline points="2,7 5.5,11 12,3"/></svg>
                    </div>
                    <div className="rtxt">
                      <h4>Other Reason</h4>
                      <p>Please describe your reason in the additional details field below.</p>
                    </div>
                  </div>
                </div>

                {errors.reasons && (
                  <p style={{ color: 'var(--err)', fontSize: '12px', marginTop: '-15px', marginBottom: '20px', fontWeight: '500' }}>
                    * Please select at least one reason for withdrawing.
                  </p>
                )}

                <div className="fr s" style={{ marginBottom: '20px' }}>
                  <div className={fieldClass('purpose')}>
                    <label>Purpose / Legitimate Interest Being Withdrawn <span className="r">*</span></label>
                    <textarea 
                      id="purp" 
                      rows="4" 
                      placeholder="Describe the specific processing activity you are withdrawing consent for..." 
                      value={purpose}
                      onChange={(e) => {
                        setPurpose(e.target.value);
                        if (errors.purpose) setErrors(prev => ({ ...prev, purpose: false }));
                      }}
                      onBlur={() => setTouched(prev => ({ ...prev, purpose: true }))}
                    ></textarea>
                    <span className="em">Please describe the processing purpose you are withdrawing</span>
                  </div>
                </div>

                <p style={{ fontSize: '12px', fontWeight: '700', color: 'var(--tm)', textTransform: 'uppercase', letterSpacing: '.05em', marginBottom: '8px' }}>
                  Which processing activities should stop?
                </p>

                <div className="ct">
                  <div className="cth">
                    <span>Processing Activity</span>
                    <span>Withdraw</span>
                  </div>
                  
                  <div className="sar" onClick={toggleSelectAllScope}>
                    <label className={`ck ${isAllScopeChecked ? 'selected' : ''}`}>
                      <input 
                        type="checkbox" 
                        id="sacb" 
                        checked={isAllScopeChecked} 
                        onChange={() => {}}
                      />
                      <svg viewBox="0 0 14 14"><polyline points="2,7 5.5,11 12,3"/></svg>
                    </label>
                    <span>Select / Deselect All</span>
                  </div>

                  <div className="ctg">Publications &amp; Media</div>
                  
                  <div className="ctr">
                    <div className="ctl">Use of my name or data on the <strong>MAU official website</strong></div>
                    <div className="ctc">
                      <label className={`ck scb ${scope.web ? 'selected' : ''}`} onClick={() => toggleScope('web')}>
                        <input type="checkbox" name="sc" value="web" checked={scope.web} onChange={() => {}} />
                        <svg viewBox="0 0 14 14"><polyline points="2,7 5.5,11 12,3"/></svg>
                      </label>
                    </div>
                  </div>

                  <div className="ctr">
                    <div className="ctl">Use of my name or data on <strong>MAU official social media</strong> platforms</div>
                    <div className="ctc">
                      <label className={`ck scb ${scope.sm ? 'selected' : ''}`} onClick={() => toggleScope('sm')}>
                        <input type="checkbox" name="sc" value="sm" checked={scope.sm} onChange={() => {}} />
                        <svg viewBox="0 0 14 14"><polyline points="2,7 5.5,11 12,3"/></svg>
                      </label>
                    </div>
                  </div>

                  <div className="ctr">
                    <div className="ctl">Use of my name or data in <strong>MAU newspapers or print publications</strong></div>
                    <div className="ctc">
                      <label className={`ck scb ${scope.print ? 'selected' : ''}`} onClick={() => toggleScope('print')}>
                        <input type="checkbox" name="sc" value="print" checked={scope.print} onChange={() => {}} />
                        <svg viewBox="0 0 14 14"><polyline points="2,7 5.5,11 12,3"/></svg>
                      </label>
                    </div>
                  </div>

                  <div className="ctr">
                    <div className="ctl">Use of <strong>images or videos</strong> of me in MAU activities or publications</div>
                    <div className="ctc">
                      <label className={`ck scb ${scope.img ? 'selected' : ''}`} onClick={() => toggleScope('img')}>
                        <input type="checkbox" name="sc" value="img" checked={scope.img} onChange={() => {}} />
                        <svg viewBox="0 0 14 14"><polyline points="2,7 5.5,11 12,3"/></svg>
                      </label>
                    </div>
                  </div>

                  <div className="ctg">Communications</div>

                  <div className="ctr">
                    <div className="ctl">Receipt of <strong>newsletters and announcements</strong> from MAU</div>
                    <div className="ctc">
                      <label className={`ck scb ${scope.news ? 'selected' : ''}`} onClick={() => toggleScope('news')}>
                        <input type="checkbox" name="sc" value="news" checked={scope.news} onChange={() => {}} />
                        <svg viewBox="0 0 14 14"><polyline points="2,7 5.5,11 12,3"/></svg>
                      </label>
                    </div>
                  </div>

                  <div className="ctr">
                    <div className="ctl">Receipt of <strong>marketing or promotional materials</strong> from MAU or its partners</div>
                    <div className="ctc">
                      <label className={`ck scb ${scope.mkt ? 'selected' : ''}`} onClick={() => toggleScope('mkt')}>
                        <input type="checkbox" name="sc" value="mkt" checked={scope.mkt} onChange={() => {}} />
                        <svg viewBox="0 0 14 14"><polyline points="2,7 5.5,11 12,3"/></svg>
                      </label>
                    </div>
                  </div>

                  <div className="ctg">Data Sharing &amp; Digital</div>

                  <div className="ctr">
                    <div className="ctl"><strong>Sharing of my personal data</strong> with authorised MAU third-party partners or service providers</div>
                    <div className="ctc">
                      <label className={`ck scb ${scope.share ? 'selected' : ''}`} onClick={() => toggleScope('share')}>
                        <input type="checkbox" name="sc" value="share" checked={scope.share} onChange={() => {}} />
                        <svg viewBox="0 0 14 14"><polyline points="2,7 5.5,11 12,3"/></svg>
                      </label>
                    </div>
                  </div>

                  <div className="ctr">
                    <div className="ctl">Use of <strong>non-essential cookies and analytics trackers</strong> on the MAU website linked to my profile</div>
                    <div className="ctc">
                      <label className={`ck scb ${scope.cookies ? 'selected' : ''}`} onClick={() => toggleScope('cookies')}>
                        <input type="checkbox" name="sc" value="cookies" checked={scope.cookies} onChange={() => {}} />
                        <svg viewBox="0 0 14 14"><polyline points="2,7 5.5,11 12,3"/></svg>
                      </label>
                    </div>
                  </div>

                  <div className="ctr">
                    <div className="ctl"><strong>All other processing</strong> of my personal data not covered by a legal obligation or legitimate interest</div>
                    <div className="ctc">
                      <label className={`ck scb ${scope.all_other ? 'selected' : ''}`} onClick={() => toggleScope('all_other')}>
                        <input type="checkbox" name="sc" value="all_other" checked={scope.all_other} onChange={() => {}} />
                        <svg viewBox="0 0 14 14"><polyline points="2,7 5.5,11 12,3"/></svg>
                      </label>
                    </div>
                  </div>
                </div>

                {errors.scope && (
                  <p style={{ color: 'var(--err)', fontSize: '12px', marginTop: '10px', fontWeight: '500' }}>
                    * Please select at least one processing activity to stop.
                  </p>
                )}
              </div>
            </div>

            {/* SECTION 3 — Declaration & Signature */}
            <div className="fs">
              <div className="fsh">
                <div className="fsi">✍️</div>
                <div>
                  <h2>Section 3 — Declaration &amp; Signature</h2>
                  <p>Read and sign to formally authorise this withdrawal request</p>
                </div>
              </div>
              <div className="fb">
                <div className="db">
                  <p>I, <strong id="dn">{sigName ? sigName : 'the undersigned data subject'}</strong>, hereby formally withdraw the consent I previously granted to <strong>Modibbo Adama University (MAU)</strong> to process my personal data as described in this form.</p>
                  <p>My consent to process my data for the purpose(s) stated above is no longer given. I understand that this withdrawal does not affect the lawfulness of processing that was carried out before this request, and that MAU may retain certain data where required by law or legitimate interest.</p>
                  <p>I confirm that all information provided in this form is accurate and that I am the data subject named herein, or an authorised representative acting on their behalf.</p>
                </div>

                <div className="sigb">
                  <div className="sigh">
                    <span className="sigbdg">Data Subject</span>
                    <h3>Signature of Data Subject or Authorised Representative</h3>
                  </div>
                  
                  <div className="fr">
                    <div className={fieldClass('sigName')}>
                      <label>Full Name <span className="r">*</span></label>
                      <input 
                        type="text" 
                        id="sn" 
                        placeholder="Print full legal name" 
                        value={sigName}
                        onChange={(e) => {
                          setSigName(e.target.value);
                          if (errors.sigName) setErrors(prev => ({ ...prev, sigName: false }));
                        }}
                        onBlur={() => setTouched(prev => ({ ...prev, sigName: true }))}
                      />
                      <span className="em">Required</span>
                    </div>
                    <div className={fieldClass('sigDate')}>
                      <label>Date <span className="r">*</span></label>
                      <input 
                        type="date" 
                        id="sd" 
                        value={sigDate}
                        onChange={(e) => {
                          setSigDate(e.target.value);
                          if (errors.sigDate) setErrors(prev => ({ ...prev, sigDate: false }));
                        }}
                        onBlur={() => setTouched(prev => ({ ...prev, sigDate: true }))}
                      />
                      <span className="em">Required</span>
                    </div>
                  </div>

                  <div className={`f ${errors.signature ? 'has-error' : ''}`} style={{ marginTop: '4px' }}>
                    <label>Draw Insert / Signature <span className="r">*</span></label>
                    <div className="sigw" id="sw">
                      <canvas 
                        id="sc" 
                        ref={canvasRef}
                        onMouseDown={handleStartDrawing}
                        onMouseMove={handleDrawing}
                        onMouseUp={handleStopDrawing}
                        onMouseLeave={handleStopDrawing}
                        onTouchStart={handleStartDrawing}
                        onTouchMove={handleDrawing}
                        onTouchEnd={handleStopDrawing}
                      ></canvas>
                      {isCanvasEmpty && (
                        <div className="sigph" id="sp">✎ Sign here using mouse or touchscreen</div>
                      )}
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <button type="button" className="sigcl" onClick={handleClearCanvas}>✕ Clear</button>
                      {errors.signature && (
                        <span style={{ color: 'var(--err)', fontSize: '12px', fontWeight: '500' }}>* Draw signature is required</span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Timeline Status */}
                <div className="tl">
                  <h4>🕐 What happens after you submit?</h4>
                  <div className="tls">
                    <div className="tli">
                      <div className="tln">1</div>
                      <div className="tll">Request received</div>
                      <div className="tld">Immediate</div>
                    </div>
                    <div className="tli">
                      <div className="tln">2</div>
                      <div className="tll">Identity verified by DPO</div>
                      <div className="tld">Within 72 hrs</div>
                    </div>
                    <div className="tli">
                      <div className="tln">3</div>
                      <div className="tll">Acknowledgement sent</div>
                      <div className="tld">Within 72 hrs</div>
                    </div>
                    <div className="tli">
                      <div className="tln">4</div>
                      <div className="tll">Processing ceased</div>
                      <div className="tld">Within 30 days</div>
                    </div>
                    <div className="tli">
                      <div className="tln">5</div>
                      <div className="tll">Confirmation sent</div>
                      <div className="tld">Within 30 days</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Formal Consent Action Banner */}
            <div className="sa">
              <div className={`sc ${errors.finalConfirm ? 'text-red-600 font-medium' : ''}`} onClick={() => setFinalConfirm(!finalConfirm)}>
                <label className={`ck ${finalConfirm ? 'selected' : ''}`} id="cc" style={{ marginTop: '2px' }}>
                  <input 
                    type="checkbox" 
                    id="fc" 
                    checked={finalConfirm} 
                    onChange={() => {}}
                  />
                  <svg viewBox="0 0 14 14"><polyline points="2,7 5.5,11 12,3"/></svg>
                </label>
                <label style={{ cursor: 'pointer' }}>
                  I confirm that I am the <strong>data subject</strong> named in this form (or an authorised representative), that the information provided is accurate, and that I understand this withdrawal will be processed in accordance with the <strong>Nigeria Data Protection Act 2023</strong>.
                </label>
              </div>

              {errors.finalConfirm && (
                <p style={{ color: 'var(--err)', fontSize: '12px', marginTop: '-15px', marginBottom: '20px', fontWeight: '500' }}>
                  * You must confirm this declaration before submitting.
                </p>
              )}

              <div className="sbs">
                <button type="submit" className="bsub">Submit Consent →</button>
                <button type="button" className="bpr" onClick={() => window.print()}>🖨️ Print Form</button>
              </div>
              <p className="sn_">
                You will receive an acknowledgement within 72 hours. If you do not hear back, contact <strong>dpo@mau.edu.ng</strong>. For unresolved matters, escalate to NDPC: <a href="mailto:complaints@ndpc.gov.ng" style={{ color: 'var(--primary)', fontWeight: '600' }}>complaints@ndpc.gov.ng</a>.
              </p>
            </div>
          </form>
        ) : (
          /* SUCCESS VIEW SCREEN */
          <div id="ss" className="py-8">
            <div className="sci">✅</div>
            <h2>Withdrawal Request Submitted</h2>
            <p>Your Data Consent Withdrawal request has been formally received by Modibbo Adama University.</p>
            <div className="ref" id="ref">{submissionRef}</div>
            <p style={{ fontSize: '12.5px', color: 'var(--tm)' }}>
              For further escalation: NDPC <a href="mailto:complaints@ndpc.gov.ng" style={{ color: '#c05621', fontWeight: '600', textDecoration: 'underline' }}>complaints@ndpc.gov.ng</a>
            </p>
            <button className="bnw mt-6" onClick={handleReset}>Submit Another</button>
          </div>
        )}
      </div>
    </div>
  );
}
