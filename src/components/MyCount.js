import React from 'react'
import { Fade, Zoom } from 'react-awesome-reveal';
import CountUp from 'react-countup';
import styled from 'styled-components';
import {
  SchoolOutlined, // For total students
  PersonOutlined, // For undergraduates
  EngineeringOutlined, // For postgraduates
  ApartmentOutlined, // For schools/faculties
  MenuBookOutlined, // For programs
  CorporateFareOutlined // For units
} from '@mui/icons-material';

const StyledCount = styled.div`
  min-height: 50vh;
  width: 100%;
  margin-top: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  
  .mainCount{
    height: 80%;
    width: 80%;
    margin: 20px;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    border-radius: 8px;
    
    h4{
      color: #D07348;
      text-align: center;
      margin-top: 15px;
    }
    
    .icon-container {
      background-color: #D07348;
      width: 80px;
      height: 80px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 15px;
      
      svg {
        color: white;
        font-size: 40px;
      }
    }
  }
  
  @media only screen and (max-width : 1060px){
    grid-template-columns: 1fr 1fr;
  }
  
  @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
    grid-template-columns: 1fr;
  }
`;

// Static student data
const studentStats = [
  { name: "Faculties", count: 11, icon: <ApartmentOutlined /> },
  { name: "Schools", count: 2, icon: <ApartmentOutlined /> },
  { name: "Centers", count: 2, icon: <ApartmentOutlined /> },
  { name: "Departments", count: 43, icon: <CorporateFareOutlined /> },
  { name: "Programmes", count: 130, icon: <MenuBookOutlined /> },
  { name: "Undergraduates", count: 12787, icon: <PersonOutlined /> },
  { name: "Postgraduates", count: 2476, icon: <EngineeringOutlined /> },
  { name: "Total Students", count: 15263, icon: <SchoolOutlined /> }
  
];

export default function MyCount({ stats = [] }) {
  
  return (
    <StyledCount>
      <Zoom cascade={true} triggerOnce={true}>
        {studentStats.map((stat, index) => (
          <div key={index} className='mainCount'>
            <div className='icon-container'>
              {stat.icon}
            </div>
            <CountUp 
              style={{
                color: '#D07348',
                fontSize: 40,
                fontWeight: 'bold'
              }} 
              end={stat.count} 
              duration={2.5}
            />
            <h4>{stat.name}</h4>
          </div>
        ))}
      </Zoom>
    </StyledCount>
  )
}