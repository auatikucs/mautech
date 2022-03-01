import React from 'react'
import { Fade } from 'react-awesome-reveal';
import styled from 'styled-components'
import MyLinks from './MyLinks';

const StyledContainer=styled.div`
min-height: 80vh;
width: 100%;
background-color:white;
display: grid;
grid-template-columns: 1fr 1fr;
.onlineLinks{
  h4{
      color:#D07348;
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
`;
export default function OnlineLinks() {
    return (
        <Fade triggerOnce>     
        <StyledContainer>
            <img src={require('../assets/edu.png')}/>
            <div className='onlineLinks'>
                 <h4>Application/Portal Links</h4>
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
