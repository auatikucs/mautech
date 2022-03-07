import { Button } from '@mui/material';
import React, { useEffect } from 'react'
import styled from 'styled-components'

const StyledContainer=styled.div`
width: 85%;
height: 200px;
margin-right: auto;
margin-left: auto;
margin-bottom: 20px;
margin-top: 10;
background-color: #f9f9f9;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border-radius: 20px;
box-shadow: 0px 0px 10px rgba(0,0,0,0.5);
position: relative;
h4{
    color: black;
}
h1{
    position: absolute;  
    text-align: center;
    font-size: 150px;
     opacity: 0.2;
}
`;
export default function MyPortalCard({title='',link=''}) {
    return (
        <StyledContainer>
            <h1>{title.split('')[0]}</h1>
            <h4>{title} Portal</h4>
            <Button style={{
                width:'50%',
                backgroundColor:'rgba(208,115,72,1)'
            }} variant='contained'>Click</Button>
         
        </StyledContainer>
    )
}
