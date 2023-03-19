import { Button } from '@mui/material';
import React from 'react'
import styled from 'styled-components'

const StyledContainer=styled.div`
margin-top:110px;
min-height:200px;
width:100%;
background-color:white;
display:grid;
grid-template-columns:1fr 1fr;
.carWrite{
  width:90%;
  margin-left:auto;
  margin-right:auto;
  padding:20px;
  display:flex;
  flex-direction:column;
  .carHe{
   font-size:40px;
   text-align:center ;
   font-weight:bold;
   color:#D07348;
  }
  .carBod{
    text-align:justify;
    margin-top:20px ;
    font-size:20px;
  }
}

.carImgCont{
  position:relative;
  width:100%;
  display:flex;
  justify-content:center;
  align-items:center;
  .carImgContCh{
    position:absolute;
    top: 0;
    left:0;
    right:0;
    bottom:0;
    background-color:red;
    clip-path: polygon(20% 0%, 100% 0, 100% 20%, 100% 41%, 100% 52%, 0 0);
    background:linear-gradient(to right,rgba(208, 115, 72, 0.4),rgba(208, 115, 72, 0.6),rgba(208, 115, 72, 0.8));
    z-index:0;
  }
  img{
    z-index:10;
    width:400px;
    height:400px;
  }
}
`;

export default function Careers() {
  return (
    <StyledContainer>
<div className='carWrite'>
  <span className='carHe'>
  Join us at MAU.
  </span>
  <span className='carBod'>
  At our institution, we are committed to providing our students with the tools and resources they need to succeed in their careers after graduation. Whether you are a recent graduate looking for your first job, or an experienced professional seeking to advance your career, we are here to support you.

  </span>
  <Button color='error' style={{backgroundColor:'#D07348',color:'white',width:'60%',marginTop:20}} variant='outlined'>View openings</Button>
</div>

<div className='carImgCont'>
  <div className='carImgContCh'>
  </div>
  <img src='https://res.cloudinary.com/nutscoders/image/upload/v1657986042/maaaa-removebg-preview_pcrbzt.png' alt='img'/>
</div>
    </StyledContainer>
  )
}
