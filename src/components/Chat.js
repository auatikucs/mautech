import { CancelOutlined } from '@mui/icons-material';
import { TextField } from '@mui/material';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const StyledContainer=styled.div`
width: 380px;

height: 220px;
background-color: white;
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
img{
    width: 100px;
    height: 100px;
    transform: translateY(-70px);
    margin-left: 20px;
}
.txtCh{
    transform: translateY(-70px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.chatSt{
min-height:24px;
min-width: 100%;
background-color:rgba(158, 58, 58, 1);
border-top-right-radius: 10px;
border-top-left-radius: 10px;
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
        <StyledContainer  className={hide}>
        <div onClick={()=>{
            setHide('')
        }} className='chatSt'></div>
        <img  onClick={()=>{
            setHide('')
        }} src={require('../assets/mau.png')}/>
        <div className='txtCh'>
        <h2>Modibbo Adama University</h2>
        <p>How can we Help ? were here for you !</p>
        <TextField style={{width:'90%'}} label='Reply To MAU university'/>
        <CancelOutlined onClick={()=>{
            setHide('chatHide')
        }} style={{fontSize:30,cursor:'pointer'}}/>
        </div>
        
            
        </StyledContainer>
    )
}
