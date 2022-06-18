import React from 'react'
import { Fade,Zoom } from 'react-awesome-reveal';
import CountUp from 'react-countup';
import styled from 'styled-components'

const StyledCount=styled.div`
min-height: 50vh;
width: 100%;
margin-top: 50px;
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
.mainCount{
    height: 80%;
    width: 80%;
    margin: 20px;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h4{
        color: #D07348;
        text-align: center;
    }
    img{
        height: 80%;
        width: 100%;

    }
}
@media only screen 
and (min-device-width : 320px) 
and (max-device-width : 480px) {
    grid-template-columns: 1fr;
}
`;
export default function MyCount() {
    return (
        <StyledCount>
           <Zoom cascade={true} triggerOnce={true}>
          <div className='mainCount'>
           <img src={require('../assets/department.png')}/>
           <CountUp style={{
               color:'#D07348',
               fontSize:55,
               
           }} end={40} />
           <h4>Schools</h4>
          </div>


          <div className='mainCount'>
           <img src={require('../assets/schools.png')}/>
           <CountUp delay={2} style={{
               color:'#D07348',
               fontSize:55,
               
           }} end={140} />
           <h4>Departments</h4>
          </div>




          <div className='mainCount'>
           <img src={require('../assets/units.png')}/>
           <CountUp delay={3}  style={{
               color:'#D07348',
               fontSize:55,
               
           }} end={200} />
           <h4>Courses</h4>
          </div>




          <div className='mainCount'>
           <img src={require('../assets/courses.png')}/>
           <CountUp delay={4}  style={{
               color:'#D07348',
               fontSize:55,
               
           }} end={20} />
           <h4>Units</h4>
          </div>
          </Zoom>
        </StyledCount>
    )
}
