import React from 'react'
import styled from 'styled-components'

const StyledContainer=styled.div`
margin-top: 130px;
min-height: 50vh;
width: 100%;
background-color: white;
`;
export default function DepartmentScreen() {
    return (
        <StyledContainer>
            <h1>Departments</h1>
        </StyledContainer>
    )
}
