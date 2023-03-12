import React from 'react'
import styled from 'styled-components'

const StyledContainer=styled.div`
min-height:50vh;
width:100%;
background-color:white;
display:grid ;
grid-template-columns:1fr 1fr;
margin:30px;
overflow:hidden;
.ccon{
    width:100%;
    height:100%;
    background-color:white;
    padding: 20px;
    span{
        font-size:40px;
        text-align:center ;
        color:rgba(208,115,72,1);
    }
    p{
        font-size:20px;
        text-align:justify ;
        margin-right:70px;
    }
}
img{
    width:100%;
    height:100% ;
}
@media only screen 
and (min-device-width : 320px) 
and (max-device-width : 480px) {
    grid-template-columns:1fr;
    .ccon{
    width:100%;
    height:100%;
    background-color:white;
    padding: 0px;
}
`;
export default function CampusCard({begin=false,title=''}) {
  return (
    <StyledContainer>
    {
        begin?(
            <>
            <img src='https://images.unsplash.com/photo-1576495199011-eb94736d05d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dW5pdmVyc2l0eSUyMGNhbXB1c3xlbnwwfHwwfHw%3D&w=1000&q=80' alt='me'/>
            <div className='ccon'>
                <span className='cconHd'>{title}</span>
                <p>
                      One of the most important services delivered by the Student Affairs 
                          Department is arranging and providing not only acceptable but affordable 
                          accommodation. This is a duty of an outstanding importance especially to the 
                          first students who, in most cases, are complete ‘strangers’ in the environment.
                </p>
            </div>
            </>
        ):(
        <>
    <div className='ccon'>
        <span className='cconHd'>{title}</span>
        <p>
              One of the most important services delivered by the Student Affairs 
                  Department is arranging and providing not only acceptable but affordable 
                  accommodation. This is a duty of an outstanding importance especially to the 
                  first students who, in most cases, are complete ‘strangers’ in the environment.
        </p>
    </div>
    <img src='https://images.unsplash.com/photo-1576495199011-eb94736d05d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dW5pdmVyc2l0eSUyMGNhbXB1c3xlbnwwfHwwfHw%3D&w=1000&q=80' alt='me'/>
    </>
        )
    }
    
    </StyledContainer>
  )
}
