import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';

const ReportsContainer = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  background: linear-gradient(135deg, #8B4513 0%, #DAA520 100%);
  min-height: 100vh;
  padding: 20px;
  color: #333;
  margin-top: 100px; /* Added to account for existing header */

  .container {
    max-width: 1200px;
    margin: 0 auto;
    background: rgba(255, 255, 255, 0.98);
    border-radius: 15px;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.25);
    overflow: hidden;
  }

  .main-content {
    padding: 40px;
  }

  .report-title {
    color: #8B4513;
    margin-bottom: 30px;
    text-align: center;
    font-size: 1.8rem;
    border-bottom: 2px solid #DAA520;
    padding-bottom: 10px;
  }

  .data-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 30px;
    margin-bottom: 40px;
  }

  .data-card {
    background: linear-gradient(145deg, #FFFACD, #FFF8DC);
    border: 2px solid #DAA520;
    border-radius: 15px;
    padding: 30px 25px;
    box-shadow: 0 8px 25px rgba(139, 69, 19, 0.15);
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
  }

  .data-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 5px;
    background: linear-gradient(90deg, #8B4513, #DAA520, #FFD700);
  }

  .data-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 35px rgba(139, 69, 19, 0.3);
  }

  .data-card h3 {
    color: #8B4513;
    font-size: 1.5rem;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    gap: 12px;
    font-weight: 600;
  }

  .icon {
    width: 36px;
    height: 36px;
    background: linear-gradient(45deg, #8B4513, #DAA520);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: bold;
    box-shadow: 0 2px 5px rgba(0,0,0,0.2);
  }

  .amount {
    font-size: 2.3rem;
    font-weight: 700;
    color: #8B4513;
    margin: 15px 0;
    text-shadow: 1px 1px 2px rgba(218, 165, 32, 0.3);
    letter-spacing: 0.5px;
  }

  .breakdown {
    background: rgba(139, 69, 19, 0.05);
    padding: 18px;
    border-radius: 8px;
    margin-top: 15px;
    border-left: 3px solid #DAA520;
  }

  .breakdown-item {
    display: flex;
    justify-content: space-between;
    margin: 10px 0;
    padding: 8px 0;
    border-bottom: 1px dotted #DAA520;
    font-size: 1.05rem;
  }

  .breakdown-item:last-child {
    border-bottom: none;
    font-weight: bold;
    color: #8B4513;
    font-size: 1.1rem;
  }

  .student-stats {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin-top: 20px;
  }

  .stat-item {
    background: rgba(218, 165, 32, 0.1);
    padding: 18px;
    border-radius: 8px;
    text-align: center;
    border: 1px solid #DAA520;
    transition: all 0.3s ease;
  }

  .stat-item:hover {
    background: rgba(218, 165, 32, 0.2);
    transform: scale(1.03);
  }

  .stat-number {
    font-size: 2rem;
    font-weight: bold;
    color: #8B4513;
    display: block;
    margin-bottom: 5px;
  }

  .last-updated {
    font-size: 0.95rem;
    color: #8B4513;
    margin-top: 15px;
    font-style: italic;
  }

  /* Executive Summary Styles */
  .executive-summary {
    margin-top: 50px;
  }

  .executive-summary h2 {
    color: #8B4513;
    margin-bottom: 20px;
    font-size: 2rem;
    border-bottom: 2px solid #DAA520;
    padding-bottom: 10px;
    text-align: center;
  }

  .budget-tables {
    display: grid;
    grid-template-columns: 1fr;
    gap: 30px;
    margin-bottom: 30px;
  }

  @media (min-width: 992px) {
    .budget-tables {
      grid-template-columns: 1fr 1fr;
    }
  }

  .budget-table-container h3 {
    color: #8B4513;
    margin: 20px 0 15px;
    font-size: 1.4rem;
    padding-left: 10px;
    border-left: 4px solid #DAA520;
  }

  .budget-table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 20px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  }

  .budget-table th {
    background: linear-gradient(45deg, #8B4513, #A0522D);
    color: #FFD700;
    padding: 12px 15px;
    text-align: left;
    font-weight: 600;
  }

  .budget-table td {
    padding: 10px 15px;
    border-bottom: 1px solid #eee;
  }

  .budget-table tr:nth-child(even) {
    background-color: rgba(218, 165, 32, 0.05);
  }

  .budget-table tr:hover {
    background-color: rgba(218, 165, 32, 0.1);
  }

  .table-section-header {
    background-color: rgba(218, 165, 32, 0.2) !important;
    font-weight: bold;
    color: #8B4513;
  }

  .table-section-header td {
    padding: 8px 15px;
    font-size: 0.95rem;
  }

  .subtotal {
    font-weight: 600;
    background-color: rgba(218, 165, 32, 0.1) !important;
  }

  .subtotal td {
    border-top: 1px solid #DAA520;
    border-bottom: 1px solid #DAA520 !important;
  }

  .grand-total {
    font-weight: 700;
    background: linear-gradient(45deg, rgba(139, 69, 19, 0.1), rgba(218, 165, 32, 0.2)) !important;
    color: #8B4513;
  }

  .grand-total td {
    border-top: 2px solid #8B4513;
    border-bottom: 2px solid #8B4513 !important;
    font-size: 1.05rem;
  }

  .footer {
    background: #8B4513;
    color: #FFD700;
    padding: 25px;
    text-align: center;
    font-size: 1rem;
    border-top: 3px solid #DAA520;
  }

  .back-button {
    position: absolute;
    left: 20px;
    top: 120px; /* Adjusted to account for existing header */
    color: white;
    background-color: rgba(0,0,0,0.2);
    &:hover {
      background-color: rgba(0,0,0,0.4);
    }
  }

  @media (max-width: 768px) {
    margin-top: 80px; /* Adjusted for mobile header */
    
    .report-title {
      font-size: 1.6rem;
    }
    
    .data-grid {
      grid-template-columns: 1fr;
    }
    
    .student-stats {
      grid-template-columns: 1fr;
    }
    
    .main-content {
      padding: 25px;
    }
    
    .back-button {
      top: 100px; /* Adjusted for mobile */
    }
  }

  @media (max-width: 480px) {
    margin-top: 70px; /* Further adjustment for smaller devices */
    
    .report-title {
      font-size: 1.4rem;
    }
    
    .data-card {
      padding: 25px 20px;
    }
    
    .amount {
      font-size: 2rem;
    }
    
    .back-button {
      top: 90px;
    }
  }
`;

const InstitutionalReports = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <ReportsContainer>
      <Button 
        className="back-button"
        startIcon={<ArrowBack />}
        onClick={handleBack}
      >
        Back
      </Button>
      
      <div className="container">
        <div className="main-content">
          <h2 className="report-title">Institutional Reports - 2025</h2>

          <div className="data-grid">
            <div className="data-card">
              <h3><span className="icon">₦</span>Annual Budgetary Allocation</h3>
              <div className="amount">₦12.8 Billion</div>
              <div className="breakdown">
                <div className="breakdown-item">
                  <span>Personnel Costs:</span>
                  <span>₦7,200 Million (56.3%)</span>
                </div>
                <div className="breakdown-item">
                  <span>Overhead Costs:</span>
                  <span>₦2,800 Million (21.9%)</span>
                </div>
                <div className="breakdown-item">
                  <span>Capital Expenditure:</span>
                  <span>₦2,800 Million (21.8%)</span>
                </div>
              </div>
              <div className="last-updated">Updated: May 2025</div>
            </div>

            {/* Other data cards remain the same */}
            <div className="data-card">
              <h3><span className="icon">R</span>Research Grant Revenue</h3>
              <div className="amount">₦0.9 Billion</div>
              <div className="breakdown">
                <div className="breakdown-item">
                  <span>Domestic Sources:</span>
                  <span>₦340 Million</span>
                </div>
                <div className="breakdown-item">
                  <span>International Sources:</span>
                  <span>₦550 Million</span>
                </div>
                <div className="breakdown-item">
                  <span>Total Revenue:</span>
                  <span>₦890 Million</span>
                </div>
              </div>
              <div className="last-updated">Updated: May 2025</div>
            </div>

            <div className="data-card">
              <h3><span className="icon">T</span>TETFund Allocation</h3>
              <div className="amount">₦2.4 Billion</div>
              <p style={{color: "#8B4513", marginTop: "15px", lineHeight: "1.5"}}>
                Current year allocation for academic and infrastructural development.
              </p>
              <div className="last-updated">Updated: May 2025</div>
            </div>

            <div className="data-card">
              <h3><span className="icon">E</span>Endowment Fund</h3>
              <div className="amount">₦1.6 Billion</div>
              <p style={{color: "#8B4513", marginTop: "15px", lineHeight: "1.5"}}>
                Total value of donated and invested funds.
              </p>
              <div className="last-updated">Updated: March 2025</div>
            </div>
          </div>

          {/* Rest of the content remains the same */}
          <div className="data-card">
            <h3><span className="icon">T</span>TETFund Intervention</h3>
            <table className="budget-table">
              <thead>
                <tr>
                  <th>Serial No.</th>
                  <th>Intervention</th>
                  <th>Amount Allocated (₦)</th>
                  <th>Amount Received (₦)</th>
                  <th>Outstanding Balance (₦)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Institution-Based Research</td>
                  <td>100,000,000.00</td>
                  <td>--</td>
                  <td>100,000,000.00</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Academic Research Journal</td>
                  <td>25,000,000.00</td>
                  <td>--</td>
                  <td>25,000,000.00</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Academic Manuscript into Books</td>
                  <td>25,000,000.00</td>
                  <td>--</td>
                  <td>25,000,000.00</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>TETFund Project Maintenance</td>
                  <td>180,000,000.00</td>
                  <td>--</td>
                  <td>180,000,000.00</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Conference Attendance</td>
                  <td>170,000,000.00</td>
                  <td>--</td>
                  <td>170,000,000.00</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>Career Service Centre</td>
                  <td>100,000,000.00</td>
                  <td>--</td>
                  <td>100,000,000.00</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>Entrepreneurship Centre</td>
                  <td>85,562,362.66</td>
                  <td>--</td>
                  <td>85,562,362.66</td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>TETFund Scholarship For Academic Staff</td>
                  <td>240,000,000.00</td>
                  <td>--</td>
                  <td>240,000,000.00</td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>Physical Infrastructure / Program Upgrade</td>
                  <td>1,300,000,000.00</td>
                  <td>--</td>
                  <td>1,300,000,000.00</td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>Special Zonal Intervention</td>
                  <td>300,000,000.00</td>
                  <td>--</td>
                  <td>300,000,000.00</td>
                </tr>
                <tr>
                  <td>11</td>
                  <td>ICT Support</td>
                  <td>150,000,000.00</td>
                  <td>--</td>
                  <td>150,000,000.00</td>
                </tr>
                <tr>
                  <td>12</td>
                  <td>Library Development</td>
                  <td>185,000,000.00</td>
                  <td>--</td>
                  <td>185,000,000.00</td>
                </tr>
              </tbody>
            </table>
            <div className="last-updated">Updated: May 2025</div>
          </div>

          <div className="executive-summary">
            <h2>2025 Budget Proposal</h2>
            
            <div className="budget-tables">
              {/* Revenue Table */}
              <div className="budget-table-container">
                <h3>Revenue</h3>
                <table className="budget-table">
                  <thead>
                    <tr>
                      <th>Item</th>
                      <th>Description</th>
                      <th>Amount (₦)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="table-section-header">
                      <td colSpan="3">Capital</td>
                    </tr>
                    <tr>
                      <td>1.1.1</td>
                      <td>FGN Capital Grant</td>
                      <td>1,140,738,634.00</td>
                    </tr>
                    <tr className="subtotal">
                      <td colSpan="2">Sub Total</td>
                      <td>1,140,738,634.00</td>
                    </tr>
                    
                    <tr className="table-section-header">
                      <td colSpan="3">Recurrent</td>
                    </tr>
                    <tr>
                      <td>1.2.1</td>
                      <td>FGN Personnel Grant</td>
                      <td>7,217,266,742.16</td>
                    </tr>
                    <tr>
                      <td>1.2.2</td>
                      <td>FGN Overhead Grant</td>
                      <td>163,911,278.00</td>
                    </tr>
                    <tr>
                      <td>1.2.3</td>
                      <td>Internal Development Fund</td>
                      <td>1,850,418,942.50</td>
                    </tr>
                    <tr>
                      <td>1.2.4</td>
                      <td>Dedicated Revenue</td>
                      <td>25,000,000.00</td>
                    </tr>
                    <tr className="subtotal">
                      <td colSpan="2">Sub Total</td>
                      <td>9,256,596,962.66</td>
                    </tr>
                    <tr>
                      <td>1.2.5</td>
                      <td>Opening Balance</td>
                      <td>180,690,561.50</td>
                    </tr>
                    <tr className="grand-total">
                      <td colSpan="2">Total Income</td>
                      <td>10,578,026,158.16</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Expenditure Table */}
              <div className="budget-table-container">
                <h3>Expenditure</h3>
                <table className="budget-table">
                  <thead>
                    <tr>
                      <th>Item</th>
                      <th>Description</th>
                      <th>Amount (₦)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="table-section-header">
                      <td colSpan="3">Capital</td>
                    </tr>
                    <tr>
                      <td>2.1.1</td>
                      <td>FGN Capital Expenditure</td>
                      <td>1,140,738,634.00</td>
                    </tr>
                    <tr>
                      <td>2.1.2</td>
                      <td>Internal Development</td>
                      <td>60,000,000.00</td>
                    </tr>
                    <tr className="subtotal">
                      <td colSpan="2">Total</td>
                      <td>1,200,738,634.00</td>
                    </tr>
                    
                    <tr className="table-section-header">
                      <td colSpan="3">Recurrent</td>
                    </tr>
                    <tr>
                      <td>2.2.1</td>
                      <td>Personnel</td>
                      <td>7,217,266,742.16</td>
                    </tr>
                    <tr>
                      <td>2.2.2</td>
                      <td>Dedicated Revenue</td>
                      <td>25,000,000.00</td>
                    </tr>
                    <tr>
                      <td>2.2.3</td>
                      <td>Other Charges</td>
                      <td>362,141,000.00</td>
                    </tr>
                    <tr>
                      <td>2.2.4</td>
                      <td>FGN Overhead</td>
                      <td>163,911,278.00</td>
                    </tr>
                    <tr>
                      <td>2.2.5</td>
                      <td>Common Charges</td>
                      <td>1,571,968,504.00</td>
                    </tr>
                    <tr>
                      <td>2.2.6</td>
                      <td>Revenue Remittance</td>
                      <td>37,000,000.00</td>
                    </tr>
                    <tr className="subtotal">
                      <td colSpan="2">Sub Total</td>
                      <td>9,377,287,524.16</td>
                    </tr>
                    <tr className="grand-total">
                      <td colSpan="2">Total Expenditure</td>
                      <td>10,578,026,158.16</td>
                    </tr>
                  </tbody>
                </table>
                </div>
            </div>
          </div>
        </div>
      </div>
    </ReportsContainer>
  );
};

export default InstitutionalReports;