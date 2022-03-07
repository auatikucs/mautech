import React, { useEffect } from 'react'
import styled from 'styled-components'
import MyPortalCard from '../sub-components/MyPortalCard';

const StyledContainer=styled.div`
margin-top: 130px;
width: 80%;
margin-left: auto;
margin-right: auto;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
padding:20px;

@media only screen 
and (min-device-width : 320px) 
and (max-device-width : 480px) {
    margin-top: 120px;
    width: 90%;
    grid-template-columns: 1fr;
    padding: 0px;
}
`;

export default function PortalsScreen() {
    useEffect(()=>{
        window.scrollTo({
            top:0,
            behavior: 'smooth',
          })
    },[])
    return (
        <StyledContainer>
            <MyPortalCard title='Undergraduate'/>
            <MyPortalCard title='Postgraduate'/>
            <MyPortalCard title='Consultancy'/>
            <MyPortalCard title='Sandwitch'/>
        </StyledContainer>
    )
}
