import { Divider, ListItemButton, ListItemText } from '@mui/material'
import React from 'react'
import styled from 'styled-components'

const StyledContainer=styled.div`
min-height: 70px;
width: 90%;
box-shadow: 0px 0px 2px rgba(0,0,0,0.5);
display: flex;
flex-direction: row;
margin-bottom: 10px;
.date{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 20%;
    background-color:#BA6438;
    h2{
        line-height:3px;
        color: white;
    }
}
.main{
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px;
}
`;
export default function MyNews({news=''}) {
    return (
        <StyledContainer>
        <div className='date'>
        <h2>01</h2>
        <h2>MAY</h2>
        </div> 
        <div className='main'>
         <p>
         {news}
         </p>
        </div>
{/* <ListItemButton style={{
    color:'#D07348'
}} component="a" href="#simple-list">
  <ListItemText primary={news} />
</ListItemButton>
<Divider style={{backgroundColor:'#D07348'}}/> */}
        </StyledContainer>
    )
}
