import { Button, Typography } from '@mui/material';
import React from 'react'
import styled from 'styled-components'
import { useNavigate } from "react-router-dom";


const StyledCont=styled.div`
width: 80%;
min-height: 350px;
background-color:#f9f9f9;
border-radius: 10px;
box-shadow: 0px 0px 10px rgba(0,0,0,0.5);
position: relative;
margin-bottom: 20px;
img{
    height: 50%;
    width: 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    filter: sepia(0.4);
}
h3{
position: absolute;
color:white;
top:0;
margin-top:30%;
margin-left: 20px;
font-weight: bolder;
font-size: 30px;
text-align: justify;
margin-right: 20px;
background-color: rgba(0,0,0,0.5);

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
    min-height: 400px;
    img{
        height: 40%;
    }
    
}

@media only screen 
  and (min-device-width: 768px) 
  and (max-device-width: 1024px) 
  and (-webkit-min-device-pixel-ratio: 1) {
   min-height: 500px;
   h3{
       margin-left: 0px;
   }
  }
`;
export default function MyCard({header='',content='',image,link}) {
    let navigate = useNavigate();
    return (
        <StyledCont>
          <img src={image}/>
          <h3>{header}</h3>
          <p>
          {content}
          </p>
          <Button onClick={()=>{
             navigate(`${link}`)
          }} style={{
              width:'80%',
              marginLeft:20,
              borderRadius:50,
              backgroundColor:'#D07348'
          }} variant='contained'>Click To Explore</Button>
        </StyledCont>
    )
}
