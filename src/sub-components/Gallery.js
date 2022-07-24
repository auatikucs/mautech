import React from 'react'
import styled from 'styled-components'

const StyledContainer=styled.div`
height:60vh;
width:100%;
background-color:transparent;
position:relative;
display:flex;
align-items:flex-end;
.galleryAlum{
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    z-index:-1;
    img{
        width:100%;
        height:100%;
    }
}
.ev{
z-index:10;
color:red;
display:flex;
flex-direction:column;
width:100%;
background-color:rgba(0,0,0,0.8);
padding:20px;
.eventName{
    font-size:30px;
    font-weight:bold;
    color:white;
}
.eventDate{
    color:white;
    font-size:20px;
}
}
`;

export default function Gallery() {
  return (
    <StyledContainer>
        <div className='galleryAlum'>
         <img src='https://www.dominican.edu/sites/default/files/styles/width_1160/public/2020-12/Alumni-Homepage-Image.jpg?itok=kJYPIwY9' alt='img'/>
        </div>


        <div className='ev'>
        <span className='eventName'>
            MAU Alumni meets with partners at abuja
        </span>
        <span className='eventDate'>
            01,May 2020
        </span>
        </div>
        
    </StyledContainer>
  )
}
