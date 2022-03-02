import { Button, Typography } from '@mui/material';
import React from 'react'
import styled from 'styled-components'

const StyledCont=styled.div`
width: 80%;
height: 350px;
background-color:#f9f9f9;
border-radius: 10px;
box-shadow: 0px 0px 10px rgba(0,0,0,0.5);
position: relative;
img{
    height: 60%;
    width: 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    filter: sepia(0.6);
}
h3{
position: absolute;
color:white;
top:0;
margin-top:30%;
margin-left: 20px;
font-weight: bolder;
font-size: 40px;
text-align: justify;
margin-right: 20px;

}
p{
    text-align: justify;
    margin-left: 20px;
    margin-right: 20px;
}
@media only screen 
and (min-device-width : 320px) 
and (max-device-width : 480px) {
    width: 95%;
    margin-bottom: 20px;
    margin-left: auto;
    margin-right: auto;
    
}
`;
export default function MyCard({header='',content='',image}) {
    return (
        <StyledCont>
          <img src={image}/>
          <h3>{header}</h3>
          <p>
          {content}
          </p>
          <Button style={{
              width:'80%',
              marginLeft:20,
              borderRadius:50,
              backgroundColor:'#D07348'
          }} variant='contained'>Click To Explore</Button>
        </StyledCont>
    )
}
