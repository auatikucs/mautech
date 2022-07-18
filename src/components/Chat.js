import { CancelOutlined } from '@mui/icons-material';
import { TextField } from '@mui/material';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const StyledContainer=styled.div`
width: 380px;
height: 220px;
position: fixed;
bottom: 0;
right: 0;
transition:all 1s;
/* clip-path: polygon(0% 0%, 100% 0%, 100% 75%, 100% 100%, 75% 100%, 0 100%, 0% 75%); */
z-index: 250;
display: flex;
flex-direction: column;
border-top-right-radius: 10px;
border-top-left-radius: 10px;
margin-bottom: 30px;
margin-right: 30px;
justify-content: flex-start;
box-shadow:0px 0px 2px rgba(0,0,0,0.5);

img{
    width: 100px;
    height: 100px;
    transform: translateY(-70px);
    margin-left: 20px;
}
.txtCh{
   
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.chatSt{
min-height:24px;
min-width: 100%;
/* background-color:rgba(158, 58, 58, 1); */
border-top-right-radius: 10px;
border-top-left-radius: 10px;

background-color:transparent;


}
h2{
    line-height: 3px;
    text-align: center;
   

}
p{
    line-height: 3px;
    text-align: center;

}
`;
export default function Chat() {
    const [hide,setHide]=useState('chatHide')
    useEffect(()=>{
    setTimeout(() => {
     setHide('') 
    }, 5000);
    },[])
    return (
        <StyledContainer   className={hide} style={{backgroundColor:hide?'rgba(64, 0, 0, 0.8)':'white'}}>
        <div onClick={()=>{
            setHide('')
        }} className='chatSt'></div>
        
        <div className='txtCh'>
        <h2>Chat With Us</h2>
        {/* <p>How can we Help ? were here for you !</p> */}
        <TextField onClick={()=>{
            setHide('')
        }}  style={{width:'90%',marginTop:20}} label='Type Message'/>
        <CancelOutlined onClick={()=>{
            setHide('chatHide')
        }} style={{fontSize:30,cursor:'pointer',marginTop:10}}/>
        </div>
        
            
        </StyledContainer>
    )
}
