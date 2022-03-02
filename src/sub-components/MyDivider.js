import React from 'react'
import styled from 'styled-components'

const StyledDivider=styled.div`
min-height: 50vh;
background-color: white;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
.divide{
    min-height:40vh;
    width: 1px;
    background-color:#D07348;
}
`;
export default function MyDivider() {
    return (
        <StyledDivider>
            <div className='divide'></div>
        </StyledDivider>
    )
}
