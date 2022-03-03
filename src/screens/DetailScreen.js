import React, { useState } from 'react'
import styled from 'styled-components'

const StyledContainer=styled.div`
margin-top: 130px;
`;
export default function DetailScreen() {
    useState(()=>{
        window.scrollTo({
            top:0,
            behavior: 'smooth',
          })
    },[])
    return (
        <StyledContainer>
            <h1>List Of Departments</h1>
        </StyledContainer>
    )
}
