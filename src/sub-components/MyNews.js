import { Divider, ListItemButton, ListItemText } from '@mui/material'
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'

const StyledContainer=styled.div`
max-height: 50px;
width: 90%;
box-shadow: 0px 0px 2px rgba(0,0,0,0.5);
display: flex;
flex-direction: row;
margin-bottom: 15px;
margin-left:auto;
margin-right:auto;
cursor: pointer;
.date{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 10%;
    background-color:#BA6438;
    height: 50px;
    
    span{
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
const month=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
export default function MyNews({news='',id,prog,date=null}) {
    const myDate=new Date(date!=null?date:'')
    const navigate=useNavigate()
    return (
        <StyledContainer  onClick={()=>{
            navigate(`events/${id}`)
            }}>
        <div className='date'>
        <span>{date!=null?myDate.getDate():''}</span>
        <span>{date!=null?month[myDate.getMonth()]:''}</span>
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
