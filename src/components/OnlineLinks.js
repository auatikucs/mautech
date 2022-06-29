import React from 'react'
import { Fade } from 'react-awesome-reveal';
import styled from 'styled-components'
import MyLinks from './MyLinks';

const StyledContainer=styled.div`
min-height: 90vh;
width: 100%;
background-color:white;
display: grid;
grid-gap: 20px;
grid-template-columns: 1fr 1fr;
padding: 20px;
.onlineLinks{
background-color:rgba(255, 197, 58, 0.3);
width: 85%;
.onlineLinsHead{
    height:100px;
    background-color: #A03232;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
  h4{
      color:white;
      text-align: center;
  }
}
img{
    width: 100%;
    height: 100%;
}
@media only screen 
and (min-device-width : 320px) 
and (max-device-width : 480px) {
    grid-template-columns: 1fr;
}
.downlaods{
    width: 85%;
    .onlineDosHead{
    height:100px;
    background-color:rgba(255, 197, 58, 1);
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center; 
    }
}
`;
export default function OnlineLinks() {
    return (
        <Fade triggerOnce>     
        <StyledContainer>
           <div className='downlaods'>
           <div className='onlineDosHead'>
                <h4>Quick  Download</h4>
                </div>
                 <MyLinks link='2021/2022 Registration Procedures Download'/>
                 <MyLinks link='Senate Approved 2021/2022 Academic Calender Download'/>
                 <MyLinks link='Registration for 2022/2023 will commence on Monday 23rd March 2022'/>
               
           </div>
            <div className='onlineLinks'>
                <div className='onlineLinsHead'>
                <h4>Quick Links to Portal </h4>
                </div>
                 <MyLinks link='Undergraduate Applications '/>
                 <MyLinks link='Post-graduate Applications '/>
                 <MyLinks link='Diploma Applications'/>
                 <MyLinks link='Distance Learning Application'/>
                 <MyLinks link='Sandwich Applications'/>
                 <MyLinks link='Student Portal(undergradute) '/>
                 <MyLinks link='Postgradute Portal '/>
                 <MyLinks link='Staff Portal'/>
            </div>
        </StyledContainer>
        </Fade>

    )
}
