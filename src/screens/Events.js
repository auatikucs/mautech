import React from 'react'
import styled from 'styled-components'
const StyledContainer=styled.div`
min-height: 70vh;
width: 100%;
background-color:white;
margin-top: 155px;
padding: 20px;
.eveHead{
    height: 50px;
    width:60%;
    background-color: rgba(160, 50, 50, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    h2{
        color: rgba(160, 50, 50, 1);
    }
}
p{
    width: 80%;
    text-align: justify;
}
.eveDonl{
    display: flex;
    width: 50%;
    justify-content: center;
    align-items: center;
    p{
        width: 50%;
    }
    span{
        font-weight: bold;
    }
}
`;
export default function Events() {
    return (
        <StyledContainer>
           <div className='eveHead'>
               <h2>Registration to commence on 23rd, May 2022</h2>
            </div> 
            <p>
               The Registration for new student both UTME and DE will commence 
               this week student are therefore advise to follow all procedures 
               and do their registration themselves to avoid being defraud 
            </p>
            <div className='eveDonl'>
                <p>Registration Procedures</p>
                <span>Click To Download</span>
            </div>
            <div className='eveDonl'>
                <p>Schedule of Fees</p>
                <span>Click To Download</span>
            </div>
        </StyledContainer>
    )
}
