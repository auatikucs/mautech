
import  './DataBreachNotificationForm.css';
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from 'react';
import { 
  Shield, 
  Clock, 
  AlertTriangle, 
  Info, 
  Layers, 
  PenTool, 
  Trash2, 
  CheckSquare, 
  Printer, 
  PlusCircle, 
  Mail, 
  FileText, 
  User, 
  Calendar, 
  Gauge, 
  ChevronRight,
  Bookmark
} from 'lucide-react';

const INITIAL_STATE = {
  dd: '',
  dt: '',
  dof: '',
  dot: '',
  ongoing: '',
  bt: '',
  bdesc: '',
  cats: [],
  nsubs: '',
  nrecs: '',
  rv: '',
  sn: '',
  st: '',
  sd: '',
  fc: false,
};

export default function DataBreachNotificationForm() {
  const [formData, setFormData] = useState(INITIAL_STATE);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [hasDrawn, setHasDrawn] = useState(false);
  const [showErrors, setShowErrors] = useState(false);
  const [refNumber, setRefNumber] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [historicBreaches, setHistoricBreaches] = useState([]);
  const [showRegister, setShowRegister] = useState(false);
  
  const canvasRef = useRef(null);
  const isDrawingRef = useRef(false);
  const lastPosRef = useRef({ x: 0, y: 0 });

  // Fetch current registry from the Express server
  const fetchBreaches = async () => {
    try {
      const res = await fetch('/api/breaches');
      if (res.ok) {
        const data = await res.json();
        setHistoricBreaches(data);
      }
    } catch (err) {
      console.error('Error fetching breach registry database:', err);
    }
  };

  // Initialize form with today's date for signature and retrieve current records
  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    setFormData(prev => ({ ...prev, sd: today }));
    fetchBreaches();
  }, [submitted]);

  // Set up Canvas signature drawing size & resolution
  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
        ctx.lineWidth = 2.5;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.strokeStyle = '#1e3a8a'; // Deep blue signature ink
      }
    }
  }, [submitted, showRegister]);

  // Quick resize handler to maintain signature pad responsive dimensions
  const handleResize = () => {
    if (canvasRef.current && !hasDrawn) {
      const canvas = canvasRef.current;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
        ctx.lineWidth = 2.5;
        ctx.lineCap = 'round';
        ctx.strokeStyle = '#1e3a8a';
      }
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [hasDrawn]);

  // Coordinate math translated for desktop mouse
  const getMousePos = (e) => {
    if (!canvasRef.current) return { x: 0, y: 0 };
    const rect = canvasRef.current.getBoundingClientRect();
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
  };

  // Coordinate math translated for mobile touchscreen devices
  const getTouchPos = (e) => {
    if (!canvasRef.current || e.touches.length === 0) return { x: 0, y: 0 };
    const rect = canvasRef.current.getBoundingClientRect();
    return {
      x: e.touches[0].clientX - rect.left,
      y: e.touches[0].clientY - rect.top
    };
  };

  // Signature start event
  const startDrawing = (x, y) => {
    isDrawingRef.current = true;
    lastPosRef.current = { x, y };
    setHasDrawn(true);
  };

  // Signature move/draw event
  const drawLine = (x, y) => {
    if (!isDrawingRef.current || !canvasRef.current) return;
    const ctx = canvasRef.current.getContext('2d');
    if (!ctx) return;

    ctx.beginPath();
    ctx.moveTo(lastPosRef.current.x, lastPosRef.current.y);
    ctx.lineTo(x, y);
    ctx.stroke();
    lastPosRef.current = { x, y };
  };

  // Signature stop event
  const stopDrawing = () => {
    isDrawingRef.current = false;
  };

  // Clear signature canvas
  const clr = () => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
      setHasDrawn(false);
    }
  };

  const setRisk = (risk) => {
    setFormData(prev => ({ ...prev, rv: risk }));
    if (errors['rv']) {
      setErrors(prev => {
        const copy = { ...prev };
        delete copy.rv;
        return copy;
      });
    }
  };

  // Checkbox categories handler
  const handleCategoryToggle = (catValue) => {
    setFormData(prev => {
      const activeCats = prev.cats.includes(catValue)
        ? prev.cats.filter(c => c !== catValue)
        : [...prev.cats, catValue];
      return { ...prev, cats: activeCats };
    });
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
    if (errors[id]) {
      setErrors(prev => {
        const copy = { ...prev };
        delete copy[id];
        return copy;
      });
    }
  };

  // Form submit validation and handler with server integration
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setSubmitError('');
    
    // Check fields
    const newErrors = {};
    const requiredKeys = [
      'dd', 'dt', 'dof', 'ongoing', 'bt', 'bdesc', 'nsubs', 'nrecs', 'rv', 'sn', 'st', 'sd'
    ];

    requiredKeys.forEach(key => {
      if (!formData[key]) {
        newErrors[key] = true;
      }
    });

    if (!formData.fc) {
      newErrors['fc'] = true;
    }

    if (!hasDrawn) {
      newErrors['signature'] = true;
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setShowErrors(true);
      // Scroll to first error
      const firstErrorEl = document.querySelector('.em');
      if (firstErrorEl) {
        firstErrorEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      } else {
        window.scrollTo({ top: 300, behavior: 'smooth' });
      }
      return;
    }

    setSubmitting(true);

    try {
      // Export signature as primary authorization credential
      let signatureBase64 = '';
      if (canvasRef.current && hasDrawn) {
        signatureBase64 = canvasRef.current.toDataURL('image/png');
      }

      const response = await fetch('/api/submit-breach', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          signature: signatureBase64,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Server rejected regulatory notification processing');
      }

      setRefNumber(result.referenceNumber);
      setSubmitted(true);
      setShowErrors(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err) {
      console.error('Compliance API error:', err);
      setSubmitError(err.message || 'An error occurred while connecting to the NDPA compliance backend.');
    } finally {
      setSubmitting(false);
    }
  };

  // Reset/Reset to starting state
  const rst = () => {
    setFormData({
      ...INITIAL_STATE,
      sd: new Date().toISOString().split('T')[0],
    });
    setErrors({});
    setSubmitted(false);
    setHasDrawn(false);
    setShowErrors(false);
    setRefNumber('');
    setSubmitError('');
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8">
    

      {/* Urgent 72-Hour Banner */}
      {!submitted && !showRegister && (
        <div className="bg-[#fefce8] border-x border-[#fef08a] p-5 md:p-6 flex gap-4 urgent animate-fade-in" id="urgent-banner">
          <div className="flex items-start gap-3.5 ui">
            <span className="text-2xl leading-none select-none text-amber-600 shrink-0">⚠️</span>
            <div className="text-sm text-slate-700 leading-relaxed">
              <strong className="text-slate-900 font-semibold border-b border-amber-300">72-Hour Reporting Obligation:</strong> This report must be submitted within <strong className="text-slate-900">72 hours</strong> of becoming aware of the breach. Or notify the Data Protection Officer via email <a href="mailto:Dpo@mau.edu.ng" className="text-[#075e3c] hover:underline font-semibold underline-offset-4">Dpo@mau.edu.ng</a> without undue delay after becoming aware of the breach.
            </div>
          </div>
        </div>
      )}

      {/* Main Container Content */}
      <div className="bg-white rounded-b-xl border border-slate-200 p-6 md:p-8 shadow-md body font-sans">
        {showRegister ? (
          /* DPO Interactive Database Registry Audit View Panel */
          <div className="space-y-6 animate-fade-in">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-4 border-b border-slate-200 gap-4">
              <div>
                <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                  🛡️ MAU Registry Audit Database
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  NDPA 2023 Compliant Ledger showing all reported breaches logged in /data/breaches.json
                </p>
              </div>
              <button 
                type="button"
                onClick={fetchBreaches}
                className="text-xs py-2 px-4 bg-[#075e3c]/10 text-[#075e3c] font-bold rounded-lg border border-[#075e3c]/20 hover:bg-[#075e3c]/20 transition-all cursor-pointer flex items-center gap-1.5 shadow-sm"
              >
                🔄 Refresh Logs
              </button>
            </div>

            {historicBreaches.length === 0 ? (
              <div className="py-16 text-center border-2 border-dashed border-slate-200 rounded-xl space-y-3.5 bg-slate-50/50">
                <Info className="h-10 w-10 text-slate-300 mx-auto" />
                <p className="text-sm font-semibold text-slate-500">No reported data breach logs recorded in backend ledger</p>
                <p className="text-xs text-slate-400">Complete and submit the statutory form to log the university's first incident.</p>
              </div>
            ) : (
              <div className="space-y-5">
                {historicBreaches.map((b) => (
                  <div key={b.referenceNumber} className="border border-slate-200 hover:border-slate-300 rounded-xl bg-slate-50/20 overflow-hidden shadow-sm transition-all hover:bg-slate-50/50">
                    {/* Header bar */}
                    <div className="px-4 py-3.5 bg-slate-100 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3">
                      <div className="flex items-center gap-2.5">
                        <span className="font-mono text-[11px] font-bold text-slate-700 bg-white border border-slate-250 px-2.5 py-1 rounded shadow-sm flex items-center gap-1.5">
                          🛡️ {b.referenceNumber}
                        </span>
                        <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${
                          b.rv === 'high' ? 'bg-red-50 text-red-700 border-red-200' :
                          b.rv === 'medium' ? 'bg-amber-50 text-amber-700 border-amber-200' :
                          'bg-emerald-50 text-emerald-700 border-emerald-200'
                        }`}>
                          {b.rv} Risk
                        </span>
                      </div>
                      <span className="text-[10px] text-slate-400 font-medium font-mono">Logged: {new Date(b.submittedAt).toLocaleString()}</span>
                    </div>

                    {/* Content segment */}
                    <div className="p-4 space-y-4 text-xs text-slate-600">
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 bg-white p-3.5 rounded-lg border border-slate-150 shadow-inner">
                        <div>
                          <span className="block text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-0.5">Breach Type</span>
                          <span className="semibold text-slate-700 text-sm font-medium">{b.bt}</span>
                        </div>
                        <div>
                          <span className="block text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-0.5">Discovered timeframe</span>
                          <span className="semibold text-slate-700 text-sm font-medium">{b.dd} at {b.dt}</span>
                        </div>
                        <div>
                          <span className="block text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-0.5">Status & Impact Scope</span>
                          <span className="semibold text-slate-700 text-sm font-medium">{b.nsubs} subjects ({b.nrecs} records)</span>
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <span className="block text-[10px] text-slate-400 font-bold uppercase tracking-wider">Factual Occurrence Description</span>
                        <p className="bg-white p-3.5 rounded-lg border border-slate-150 leading-relaxed font-mono text-[11.5px] text-slate-700 whitespace-pre-wrap max-h-48 overflow-y-auto w-full">
                          {b.bdesc}
                        </p>
                      </div>

                      {b.cats && b.cats.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 items-center">
                          <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider mr-1.5">Affected Categories:</span>
                          {b.cats.map((c) => (
                            <span key={c} className="bg-slate-200 border border-slate-300 text-slate-700 text-[10px] font-bold px-2 py-0.5 rounded capitalize">
                              {c}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Signatory detail */}
                      <div className="flex items-center justify-between pt-3 border-t border-slate-200">
                        <div className="flex items-center gap-2.5">
                          <div className="h-8 w-8 rounded-full bg-[#075e3c]/10 text-[#075e3c] flex items-center justify-center font-bold text-xs shadow-inner flex-shrink-0">
                            👤
                          </div>
                          <div>
                            <span className="block font-bold text-slate-700 text-xs">{b.sn}</span>
                            <span className="block text-[10px] text-slate-400 font-medium">{b.st}</span>
                          </div>
                        </div>

                        {b.signature && (
                          <div className="flex flex-col items-end gap-1">
                            <span className="text-[9px] text-slate-400 font-bold uppercase tracking-widest leading-none">Cert Validated Signature</span>
                            <img src={b.signature} alt="DPO Signature Authentication" className="h-8 max-w-[145px] object-contain bg-white rounded border border-slate-250 p-1 shadow-sm" referrerPolicy="no-referrer" />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : !submitted ? (
          <>
            <div className="bg-sky-50 border border-sky-100 rounded-lg p-4 mb-8 flex gap-3 text-sky-800 text-sm notice" id="notice-info">
              <Info className="h-5 w-5 shrink-0 text-sky-600 mt-0.5" />
              <div>
                Where complete information is not yet available, submit what is known now and supplement with additional facts as they become available. Delayed reporting is an offence under the <strong className="font-semibold">NDPA 2023</strong>.
              </div>
            </div>

            <form id="form" onSubmit={handleFormSubmit} noValidate className="space-y-8">
              
              {/* Section 1 - Timeframe */}
              <div className="border border-slate-200 rounded-xl p-5 md:p-6 bg-slate-50/50 fs" id="sec-1">
                <div className="flex items-start gap-4 pb-4 border-b border-slate-200 mb-6 fsh">
                  <div className="h-10 w-10 bg-[#075e3c]/10 text-[#075e3c] rounded-lg flex items-center justify-center font-bold text-lg fsi shrink-0">
                    📅
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-slate-800">Section 1 — Date &amp; Time of Discovery and Occurrence</h2>
                    <p className="text-xs text-slate-500 mt-0.5">When the breach was identified and the timeframe during which it occurred</p>
                  </div>
                </div>

                <div className="space-y-4 fb">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 fr">
                    <div className="flex flex-col gap-1.5 f">
                      <label className="text-sm font-semibold text-slate-700 flex items-center gap-1">
                        Date Breach First Discovered <span className="text-red-500 r">*</span>
                      </label>
                      <input 
                        type="date" 
                        id="dd" 
                        value={formData.dd} 
                        onChange={handleChange}
                        className={`w-full px-3.5 py-2 rounded-lg border bg-white focus:outline-none focus:ring-2 focus:ring-[#075e3c]/30 focus:border-[#075e3c] transition-all text-sm ${
                          showErrors && errors.dd ? 'border-red-400 bg-red-50/10' : 'border-slate-300'
                        }`}
                      />
                      {showErrors && errors.dd && <span className="text-xs text-red-500 font-medium em">Date of discovery is required</span>}
                    </div>

                    <div className="flex flex-col gap-1.5 f">
                      <label className="text-sm font-semibold text-slate-700 flex items-center gap-1">
                        Time of Discovery <span className="text-red-500 r">*</span>
                      </label>
                      <input 
                        type="time" 
                        id="dt" 
                        value={formData.dt} 
                        onChange={handleChange}
                        className={`w-full px-3.5 py-2 rounded-lg border bg-white focus:outline-none focus:ring-2 focus:ring-[#075e3c]/30 focus:border-[#075e3c] transition-all text-sm ${
                          showErrors && errors.dt ? 'border-red-400 bg-red-50/10' : 'border-slate-300'
                        }`}
                      />
                      {showErrors && errors.dt && <span className="text-xs text-red-500 font-medium em">Time of discovery is required</span>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 fr">
                    <div className="flex flex-col gap-1.5 f">
                      <label className="text-sm font-semibold text-slate-700 flex items-center gap-1">
                        Date / Time Breach Occurred — From <span className="text-red-500 r">*</span>
                      </label>
                      <input 
                        type="datetime-local" 
                        id="dof" 
                        value={formData.dof} 
                        onChange={handleChange}
                        className={`w-full px-3.5 py-2 rounded-lg border bg-white focus:outline-none focus:ring-2 focus:ring-[#075e3c]/30 focus:border-[#075e3c] transition-all text-sm ${
                          showErrors && errors.dof ? 'border-red-400 bg-red-50/10' : 'border-slate-300'
                        }`}
                      />
                      {showErrors && errors.dof && <span className="text-xs text-red-500 font-medium em">Occurrence starting datetime is required</span>}
                    </div>

                    <div className="flex flex-col gap-1.5 f">
                      <label className="text-sm font-semibold text-slate-700">
                        Date / Time Breach Occurred — To
                      </label>
                      <input 
                        type="datetime-local" 
                        id="dot" 
                        value={formData.dot} 
                        onChange={handleChange}
                        className="w-full px-3.5 py-2 rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#075e3c]/30 focus:border-[#075e3c] transition-all text-sm"
                      />
                      <span className="text-[11px] text-slate-400 font-medium mt-0.5">Leave blank if still ongoing</span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5 fr s">
                    <div className="flex flex-col gap-1.5 f w-full">
                      <label className="text-sm font-semibold text-slate-700 flex items-center gap-1">
                        Is the Breach Still Ongoing? <span className="text-red-500 r">*</span>
                      </label>
                      <select 
                        id="ongoing" 
                        value={formData.ongoing} 
                        onChange={handleChange}
                        className={`w-full px-3.5 py-2 rounded-lg border bg-white focus:outline-none focus:ring-2 focus:ring-[#075e3c]/30 focus:border-[#075e3c] transition-all text-sm ${
                          showErrors && errors.ongoing ? 'border-red-400 bg-red-50/10' : 'border-slate-300'
                        }`}
                      >
                        <option value="">— Select —</option>
                        <option value="Yes — breach is ongoing">Yes — breach is ongoing</option>
                        <option value="No — breach has been contained">No — breach has been contained</option>
                        <option value="Unknown — still under investigation">Unknown — still under investigation</option>
                      </select>
                      {showErrors && errors.ongoing && <span className="text-xs text-red-500 font-medium em font-mono">Selecting status is required</span>}
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 2 - Incident details */}
              <div className="border border-slate-200 rounded-xl p-5 md:p-6 bg-slate-50/50 fs" id="sec-2">
                <div className="flex items-start gap-4 pb-4 border-b border-slate-200 mb-6 fsh">
                  <div className="h-10 w-10 bg-[#075e3c]/10 text-[#075e3c] rounded-lg flex items-center justify-center font-bold text-lg fsi shrink-0">
                    🔍
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-slate-800">Nature of the Personal-Data Breach</h2>
                    <p className="text-xs text-slate-500 mt-0.5">Type, description, and categories of data affected</p>
                  </div>
                </div>

                <div className="space-y-5 fb">
                  <div className="flex flex-col gap-1.5 fr s">
                    <div className="flex flex-col gap-1.5 f w-full">
                      <label className="text-sm font-semibold text-slate-700 flex items-center gap-1">
                        Breach Type <span className="text-red-500 r">*</span>
                      </label>
                      <select 
                        id="bt" 
                        value={formData.bt} 
                        onChange={handleChange}
                        className={`w-full px-3.5 py-2 rounded-lg border bg-white focus:outline-none focus:ring-2 focus:ring-[#075e3c]/30 focus:border-[#075e3c] transition-all text-sm ${
                          showErrors && errors.bt ? 'border-red-400 bg-red-50/10' : 'border-slate-300'
                        }`}
                      >
                        <option value="">— Select breach type —</option>
                        <option value="Unauthorised Access / Hacking">Unauthorised Access / Hacking</option>
                        <option value="Ransomware / Malware Attack">Ransomware / Malware Attack</option>
                        <option value="Phishing / Social Engineering">Phishing / Social Engineering</option>
                        <option value="Accidental Disclosure to Wrong Recipient">Accidental Disclosure to Wrong Recipient</option>
                        <option value="Lost or Stolen Device / Paper Records">Lost or Stolen Device / Paper Records</option>
                        <option value="Insider Threat / Malicious Employee">Insider Threat / Malicious Employee</option>
                        <option value="System Misconfiguration / Exposed Database">System Misconfiguration / Exposed Database</option>
                        <option value="Third-Party / Supplier Breach">Third-Party / Supplier Breach</option>
                        <option value="Physical Theft / Break-in">Physical Theft / Break-in</option>
                        <option value="Other">Other</option>
                      </select>
                      {showErrors && errors.bt && <span className="text-xs text-red-500 font-medium em">Please select a primary breach classification</span>}
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5 fr s">
                    <div className="flex flex-col gap-1.5 f w-full">
                      <label className="text-sm font-semibold text-slate-700 flex items-center gap-1">
                        Brief Factual Description of How the Breach Happened <span className="text-red-500 r">*</span>
                      </label>
                      <textarea 
                        id="bdesc" 
                        rows={4} 
                        value={formData.bdesc} 
                        onChange={handleChange}
                        placeholder="Describe factually what happened — e.g. an unauthorised party gained access to..."
                        className={`w-full px-3.5 py-2 rounded-lg border bg-white focus:outline-none focus:ring-2 focus:ring-[#075e3c]/30 focus:border-[#075e3c] transition-all text-sm ${
                          showErrors && errors.bdesc ? 'border-red-400 bg-red-50/10' : 'border-slate-300'
                        }`}
                      />
                      {showErrors && errors.bdesc && <span className="text-xs text-red-500 font-medium em">Factual details of the occurrence are required</span>}
                    </div>
                  </div>

                  {/* Categories checkboxes */}
                  <div>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">
                      Categories of Personal Data Affected (tick all that apply)
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3" id="cats">
                      {[
                        { val: 'identity', label: '🪪 Identity' },
                        { val: 'contact', label: '📞 Contact' },
                        { val: 'financial', label: '💳 Financial' },
                        { val: 'health', label: '🏥 Health' },
                        { val: 'biometric', label: '👆 Biometric' },
                        { val: 'childrens', label: '👧 Children\'s Data' },
                        { val: 'criminal', label: '⚖️ Criminal-Offence Data' },
                        { val: 'academic', label: '🎓 Academic Records' },
                        { val: 'other', label: '… Other' },
                      ].map((catItem) => {
                        const isChecked = formData.cats.includes(catItem.val);
                        return (
                          <label 
                            key={catItem.val} 
                            style={{ cursor: 'pointer' }}
                            className={`flex items-center gap-3 font-semibold text-sm cursor-pointer p-3 border rounded-lg transition-all catcard ${
                              isChecked 
                                ? 'border-[#075e3c] bg-[#e6f4ea] text-[#075e3c] shadow-sm font-semibold' 
                                : 'border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100'
                            }`}
                          >
                            <input 
                              type="checkbox" 
                              name="cat" 
                              value={catItem.val} 
                              checked={isChecked}
                              onChange={() => handleCategoryToggle(catItem.val)}
                              className="accent-[#075e3c] rounded border-slate-300 text-[#075e3c] focus:ring-[#075e3c]"
                            />
                            {catItem.label}
                          </label>
                        );
                      })}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 fr">
                    <div className="flex flex-col gap-1.5 f">
                      <label className="text-sm font-semibold text-slate-700 flex items-center gap-1">
                        Approximate Number of Data Subjects Affected <span className="text-red-500 r">*</span>
                      </label>
                      <input 
                        type="number" 
                        id="nsubs" 
                        min="0" 
                        value={formData.nsubs} 
                        onChange={handleChange}
                        placeholder="e.g. 500"
                        className={`w-full px-3.5 py-2 rounded-lg border bg-white focus:outline-none focus:ring-2 focus:ring-[#075e3c]/30 focus:border-[#075e3c] transition-all text-sm ${
                          showErrors && errors.nsubs ? 'border-red-400 bg-red-50/10' : 'border-slate-300'
                        }`}
                      />
                      {showErrors && errors.nsubs && <span className="text-xs text-red-500 font-medium em">Approximate count of subjects is required</span>}
                    </div>

                    <div className="flex flex-col gap-1.5 f">
                      <label className="text-sm font-semibold text-slate-700 flex items-center gap-1">
                        Approximate Number of Records Affected <span className="text-red-500 r">*</span>
                      </label>
                      <input 
                        type="number" 
                        id="nrecs" 
                        min="0" 
                        value={formData.nrecs} 
                        onChange={handleChange}
                        placeholder="e.g. 1200"
                        className={`w-full px-3.5 py-2 rounded-lg border bg-white focus:outline-none focus:ring-2 focus:ring-[#075e3c]/30 focus:border-[#075e3c] transition-all text-sm ${
                          showErrors && errors.nrecs ? 'border-red-400 bg-red-50/10' : 'border-slate-300'
                        }`}
                      />
                      {showErrors && errors.nrecs && <span className="text-xs text-red-500 font-medium em">Approximate records affected count specifies scope</span>}
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 3 - Risk Evaluation */}
              <div className="border border-slate-200 rounded-xl p-5 md:p-6 bg-slate-50/50 fs" id="sec-3">
                <div className="flex items-start gap-4 pb-4 border-b border-slate-200 mb-6 fsh">
                  <div className="h-10 w-10 bg-[#075e3c]/10 text-[#075e3c] rounded-lg flex items-center justify-center font-bold text-lg fsi shrink-0">
                    ⚠️
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-slate-800">Risk Level Determined</h2>
                    <p className="text-xs text-slate-500 mt-0.5">Please tick the risk level — required</p>
                  </div>
                </div>

                <div className="fb">
                  {/* Hidden input to mimic HTML requirement exactly */}
                  <input type="hidden" id="rv" value={formData.rv} />
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 riskrow">
                    {/* Low Risk Button */}
                    <button 
                      type="button" 
                      id="rl"
                      onClick={() => setRisk('low')}
                      className={`flex flex-col items-start p-5 rounded-xl border text-left transition-all relative overflow-hidden rb outline-none text-slate-700 ${
                        formData.rv === 'low' 
                          ? 'border-emerald-600 bg-emerald-50/80 ring-2 ring-emerald-500/20' 
                          : 'border-slate-200 bg-white hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-2 font-bold text-base">
                        <span className="ri select-none">🟢</span>
                        <span className="rl_ font-semibold text-slate-800">Low Risk</span>
                      </div>
                      <span className="text-xs text-slate-500 leading-relaxed rd pointer-events-none">
                        Minimal impact. Data encrypted or low sensitivity. Unlikely to cause harm to data subjects without further action.
                      </span>
                    </button>

                    {/* Medium Risk Button */}
                    <button 
                      type="button" 
                      id="rm"
                      onClick={() => setRisk('medium')}
                      className={`flex flex-col items-start p-5 rounded-xl border text-left transition-all relative overflow-hidden rb outline-none text-slate-700 ${
                        formData.rv === 'medium' 
                          ? 'border-amber-500 bg-amber-50/80 ring-2 ring-amber-500/20' 
                          : 'border-slate-200 bg-white hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-2 font-bold text-base">
                        <span className="ri select-none">🟡</span>
                        <span className="rl_ font-semibold text-slate-800">Medium Risk</span>
                      </div>
                      <span className="text-xs text-slate-500 leading-relaxed rd pointer-events-none">
                        Moderate impact. Some sensitive data exposed. Limited harm likely but mitigation required.
                      </span>
                    </button>

                    {/* High Risk Button */}
                    <button 
                      type="button" 
                      id="rh"
                      onClick={() => setRisk('high')}
                      className={`flex flex-col items-start p-5 rounded-xl border text-left transition-all relative overflow-hidden rb outline-none text-slate-700 ${
                        formData.rv === 'high' 
                          ? 'border-red-500 bg-red-50/80 ring-2 ring-red-500/20' 
                          : 'border-slate-200 bg-white hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-2 font-bold text-base">
                        <span className="ri select-none">🔴</span>
                        <span className="rl_ font-semibold text-[#8b1c1c]">High Risk</span>
                      </div>
                      <span className="text-xs text-slate-500 leading-relaxed rd pointer-events-none">
                        Significant impact. Special-category or financial data exposed. Real, immediate risk of harm to data subjects.
                      </span>
                    </button>
                  </div>

                  {showErrors && errors.rv && (
                    <div id="rerr" className="text-xs text-red-500 font-medium em mt-3 flex items-center gap-1">
                      <AlertTriangle className="h-4 w-4" /> Please select a risk level for the breach.
                    </div>
                  )}
                </div>
              </div>

              {/* Section 4 - Signature & Decl */}
              <div className="border border-slate-200 rounded-xl p-5 md:p-6 bg-slate-50/50 fs" id="sec-4">
                <div className="flex items-start gap-4 pb-4 border-b border-slate-200 mb-6 fsh">
                  <div className="h-10 w-10 bg-[#075e3c]/10 text-[#075e3c] rounded-lg flex items-center justify-center font-bold text-lg fsi shrink-0">
                    ✍️
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-slate-800">Declaration &amp; Signature</h2>
                    <p className="text-xs text-slate-500 mt-0.5">The undersigned confirms the accuracy of this notification under NDPA 2023</p>
                  </div>
                </div>

                <div className="space-y-6 fb">
                  {/* Custom framed paper alert statement */}
                  <div className="bg-amber-50/40 border-l-4 border-[#c39b34] rounded-r-lg p-5 text-xs text-slate-600 space-y-3 leading-relaxed db shadow-inner">
                    <p>
                      I, <strong id="dn" className="text-slate-800 font-semibold">{formData.sn ? formData.sn : 'the undersigned'}</strong>, hereby confirm that the information provided in this notification is <strong className="text-slate-800">true and complete</strong> to the best of my knowledge and belief.
                    </p>
                    <p>
                      I confirm that this notification has been submitted within <strong className="text-slate-800">72 hours</strong> of my awareness of the breach. Where complete information was not available within this period, this report contains all facts currently known and will be supplemented as additional information becomes available.
                    </p>
                    <p>
                      I understand that providing false or misleading information to the NDPC constitutes an offence under the <strong className="text-slate-800">NDPA 2023</strong> and may attract regulatory sanctions, administrative penalties, or criminal liability.
                    </p>
                  </div>

                  {/* Signatory Fields */}
                  <div className="border border-slate-250 bg-white rounded-xl p-5 md:p-6 relative space-y-4 sigb shadow-sm">
                    <div className="flex justify-between items-center pb-3 border-b border-slate-100 sigh">
                      <h3 className="text-sm font-bold text-slate-800">Signature of Notifying Officer</h3>
                      <span className="px-2.5 py-1 bg-[#075e3c]/10 text-[#075e3c] text-[10px] font-bold uppercase tracking-wider rounded-md sigbdg">
                        Authorised Signatory
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 fr">
                      <div className="flex flex-col gap-1.5 f">
                        <label className="text-xs font-semibold text-slate-600 flex items-center gap-1">
                          Full Name <span className="text-red-500 r">*</span>
                        </label>
                        <input 
                          type="text" 
                          id="sn" 
                          value={formData.sn}
                          onChange={handleChange}
                          placeholder="Print full legal name"
                          className={`w-full px-3.5 py-2 rounded-lg border bg-slate-50/20 focus:outline-none focus:ring-2 focus:ring-[#075e3c]/30 focus:border-[#075e3c] transition-all text-sm ${
                            showErrors && errors.sn ? 'border-red-400 bg-red-50/10' : 'border-slate-200'
                          }`}
                        />
                        {showErrors && errors.sn && <span className="text-xs text-red-500 font-medium em">Full legal name of signee is required</span>}
                      </div>

                      <div className="flex flex-col gap-1.5 f">
                        <label className="text-xs font-semibold text-slate-600 flex items-center gap-1">
                          Title / Designation <span className="text-red-500 r">*</span>
                        </label>
                        <input 
                          type="text" 
                          id="st" 
                          value={formData.st}
                          onChange={handleChange}
                          placeholder="e.g. Vice Chancellor / Registrar / DPO"
                          className={`w-full px-3.5 py-2 rounded-lg border bg-slate-50/20 focus:outline-none focus:ring-2 focus:ring-[#075e3c]/30 focus:border-[#075e3c] transition-all text-sm ${
                            showErrors && errors.st ? 'border-red-400 bg-red-50/10' : 'border-slate-200'
                          }`}
                        />
                        {showErrors && errors.st && <span className="text-xs text-red-500 font-medium em">Title or designation is required</span>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 fr">
                      <div className="flex flex-col gap-1.5 f w-full">
                        <label className="text-xs font-semibold text-slate-600 flex items-center gap-1">
                          Date <span className="text-red-500 r">*</span>
                        </label>
                        <input 
                          type="date" 
                          id="sd" 
                          value={formData.sd}
                          onChange={handleChange}
                          className={`w-full px-3.5 py-2 rounded-lg border bg-slate-50/20 focus:outline-none focus:ring-2 focus:ring-[#075e3c]/30 focus:border-[#075e3c] transition-all text-sm ${
                            showErrors && errors.sd ? 'border-red-400 bg-red-50/10' : 'border-slate-200'
                          }`}
                        />
                        {showErrors && errors.sd && <span className="text-xs text-red-500 font-medium em">Declaration date is required</span>}
                      </div>
                    </div>

                    {/* Canvas Draw Sig */}
                    <div className="flex flex-col gap-1.5 f mt-3">
                      <label className="text-xs font-semibold text-slate-600 flex items-center gap-1">
                        Draw/Insert Signature Below <span className="text-red-500 r">*</span>
                      </label>
                      <div 
                        id="sw" 
                        className={`relative h-36 bg-slate-50 border rounded-lg overflow-hidden transition-all sigw ${
                          showErrors && errors.signature ? 'border-red-400 ring-1 ring-red-200' : 'border-slate-200'
                        }`}
                      >
                        {/* Interactive Signature Canvas Element */}
                        <canvas 
                          id="sc"
                          ref={canvasRef}
                          onMouseDown={(e) => {
                            const pos = getMousePos(e);
                            startDrawing(pos.x, pos.y);
                          }}
                          onMouseMove={(e) => {
                            const pos = getMousePos(e);
                            drawLine(pos.x, pos.y);
                          }}
                          onMouseUp={stopDrawing}
                          onMouseLeave={stopDrawing}
                          
                          onTouchStart={(e) => {
                            const pos = getTouchPos(e);
                            startDrawing(pos.x, pos.y);
                          }}
                          onTouchMove={(e) => {
                            const pos = getTouchPos(e);
                            drawLine(pos.x, pos.y);
                          }}
                          onTouchEnd={stopDrawing}
                        />

                        {/* Text placeholder overlay */}
                        {!hasDrawn && (
                          <div 
                            id="sp" 
                            className="absolute inset-0 flex items-center justify-center text-xs text-slate-400 gap-1.5 pointer-events-none select-none font-medium sigph"
                          >
                            <PenTool className="h-4 w-4 text-slate-300" />
                            <span>Sign here using finger, stylus, or mouse pointer</span>
                          </div>
                        )}
                      </div>

                      <div className="flex justify-between items-center mt-1">
                        <div>
                          {showErrors && errors.signature && (
                            <span className="text-xs text-red-500 font-medium em">Please sign on the signature pad to confirm validation</span>
                          )}
                        </div>
                        <button 
                          type="button" 
                          onClick={clr}
                          className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-red-600 transition-colors py-1 px-3 border border-slate-200 hover:border-red-200 rounded-md bg-white font-medium sigcl"
                        >
                          <Trash2 className="h-3.5 w-3.5" /> Clear Pad
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Submit Affirmation Bar */}
              <div className="border border-slate-200 bg-emerald-50/10 p-5 rounded-xl space-y-6 sa">
                <div className="flex items-start gap-3.5 sc">
                  <label 
                    id="cc" 
                    className={`flex items-center justify-center shrink-0 w-6 h-6 border rounded-md cursor-pointer transition-all ck ${
                      formData.fc 
                        ? 'bg-[#075e3c] border-[#075e3c]' 
                        : showErrors && errors.fc ? 'border-red-400 bg-red-50/10' : 'border-slate-300 bg-white'
                    }`}
                  >
                    <input 
                      type="checkbox" 
                      id="fc" 
                      checked={formData.fc}
                      onChange={(e) => {
                        setFormData(prev => ({ ...prev, fc: e.target.checked }));
                        if (errors.fc) {
                          setErrors(prev => {
                            const copy = { ...prev };
                            delete copy.fc;
                            return copy;
                          });
                        }
                      }}
                      className="hidden"
                    />
                    <svg className="w-4 h-4 text-white transition-opacity" fill="none" viewBox="0 0 14 14" stroke="currentColor" strokeWidth={3}>
                      <polyline points="2,7 5.5,11 12,3" />
                    </svg>
                  </label>
                  <label htmlFor="fc" className="text-xs text-slate-600 leading-relaxed cursor-pointer select-none">
                    I confirm that I am an <strong className="text-slate-800 font-semibold">authorised officer</strong>, that all information in this notification is accurate and complete to the best of my knowledge, and that this submission is made in compliance with the <strong className="text-slate-800 font-semibold">NDPA 2023</strong>.
                  </label>
                </div>
                
                {showErrors && errors.fc && (
                  <div className="text-xs text-red-500 font-medium em">Please tick the declaration box to verify reporting authorization</div>
                )}

                {submitError && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800 text-xs font-semibold flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 shrink-0 text-red-600" /> {submitError}
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-3 pt-2 sbs">
                  <button 
                    type="submit" 
                    disabled={submitting}
                    className="flex-1 py-3 px-6 bg-[#075e3c] hover:bg-[#05492e] disabled:bg-slate-350 disabled:text-slate-500 disabled:cursor-not-allowed text-white text-sm font-semibold rounded-lg shadow-sm transition-all text-center flex items-center justify-center gap-2 cursor-pointer bsub font-bold"
                  >
                    {submitting ? (
                      <span className="flex items-center gap-2 justify-center">
                        <span className="animate-spin h-4 w-4 border-2 border-white/30 border-t-white rounded-full"></span>
                        Registering Submission...
                      </span>
                    ) : '🚨 Submit Breach Notification →'}
                  </button>
                  <button 
                    type="button" 
                    onClick={() => window.print()}
                    className="py-3 px-5 border border-slate-300 hover:bg-slate-50 text-slate-700 text-sm font-medium rounded-lg shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer bpr"
                  >
                    <Printer className="h-4 w-4" /> Print Form
                  </button>
                </div>

                <p className="text-[11px] text-slate-400 leading-relaxed text-center pt-2 border-t border-slate-100 sn_">
                  After submitting, also notify the DPO at <strong className="text-slate-600">Dpo@mau.edu.ng</strong> without undue delay. For queries contact the NDPC at <a href="mailto:complaints@ndpc.gov.ng" className="text-[#075e3c] underline hover:text-[#05492e]">complaints@ndpc.gov.ng</a> · +234 903 000 0001
                </p>
              </div>

            </form>
          </>
        ) : (
          /* Receipt / Success State view screen */
          <div className="py-12 px-4 text-center space-y-6 max-w-xl mx-auto ss animate-fade-in" id="ss">
            <div className="h-16 w-16 bg-emerald-50 text-emerald-600 border border-emerald-100 rounded-full flex items-center justify-center text-3xl mx-auto sci shadow-sm select-none">
              ✅
            </div>
            
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-slate-800">Breach Notification Recorded</h2>
              <p className="text-sm text-slate-500">
                Your Data Breach Notification has been logged. You must also immediately notify the DPO at <strong className="text-slate-700">Dpo@mau.edu.ng</strong>.
              </p>
            </div>

            {/* Generated Ref Id Box */}
            <div className="py-3.5 px-6 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 text-base font-mono font-bold tracking-wider max-w-md mx-auto ref" id="ref">
              {refNumber}
            </div>

            {/* Steps table receipt card list */}
            <div className="border border-slate-150 rounded-xl bg-slate-50/50 p-6 text-left max-w-md mx-auto nxt">
              <h4 className="text-xs font-bold text-[#c39b34] uppercase tracking-widest mb-3.5 flex items-center gap-1.5 pb-2 border-b border-slate-150">
                <Clock className="h-4 w-4 text-[#c39b34]" /> Mandatory Next Steps
              </h4>
              <ul className="space-y-3.5">
                {[
                  'Email notification to DPO at Dpo@mau.edu.ng immediately',
                  'Log incident in MAU internal breach register with this reference',
                  'Notify affected data subjects if not already done',
                  'Supplement this report within 7 days if facts were incomplete',
                  'Implement Corrective Action Plan (CAP)',
                ].map((step, index) => (
                  <li key={index} className="flex gap-2.5 items-start text-xs text-slate-600 leading-normal">
                    <span className="flex h-5 w-5 rounded-full bg-[#075e3c]/15 text-[#075e3c] font-bold text-[10px] items-center justify-center shrink-0">
                      {index + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 flex flex-col gap-3 min-w-[200px] max-w-xs mx-auto">
              <button 
                onClick={rst}
                className="py-2.5 px-5 bg-[#075e3c] hover:bg-[#05492e] text-white text-xs font-semibold rounded-lg shadow-sm transition-all text-center flex items-center justify-center gap-1.5 cursor-pointer bnw"
              >
                <PlusCircle className="h-4 w-4" /> File Another Notification
              </button>
              <button 
                onClick={() => window.print()}
                className="py-2.5 px-5 border border-slate-200 bg-white hover:bg-slate-50 text-slate-600 text-xs font-medium rounded-lg shadow-sm transition-all text-center flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Printer className="h-4 w-4" /> Print Submission Receipt
              </button>
            </div>
          </div>
        )}
      </div>

    </div>
  );
}