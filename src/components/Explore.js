import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router';
import styled from 'styled-components'
import MyCard from '../sub-components/MyCard';
const imgUrl=require('../assets/news1.jpg')
const imgUrl2=require('../assets/und.jpg')
const StyledExplore=styled.div`
min-height: 80vh;
background-color: white;
width: 100%;
margin-top: 20px;
display: flex;
flex-direction: row;
.indHolder{
    min-width: 50%;
    max-width: 50%;
    min-height: 100%;
    background: url(${imgUrl2});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    display: grid;
    grid-template-columns: 1fr 1fr;
    .holderLinks{
    min-height: 50%;
    transition: all 1s;
    width: 100%;
    background-color: rgba(0,0,0,0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid white;
    cursor: pointer;
    h4{
        color:white;
        
    }
    }
    .holderLinks:hover{
        background-color: rgba(160, 50, 50,0.8);
    }
}
.mainHolder{
    min-width: 50%;
    max-width: 50%;
    min-height: 100%;
    background: linear-gradient(rgba(160, 50, 50, 0.5),rgba(160, 50, 50, 0.5)),url(${imgUrl});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1{
    text-align: center;
    color:white;
  
}
p{
    color: white;
    text-align: justify;
    margin-left: 20px;
    margin-right: 20px;
}
}
@media only screen 
and (max-width : 1060px){
  flex-direction:column;
  min-height:60vh;
  .indHolder{
    min-width:95%;
    max-width:95%;
    min-height:30vh;
    margin-left:auto;
    margin-right:auto;
  }
  h1{
    margin-right: 10px;
    margin-left: 10px;
    font-size: 40px;
  }
  .mainHolder{
    min-width:95%;
    max-width:95%;
    min-height:50vh;
    margin-left:auto;
    margin-right:auto;
  grid-template-columns: 1fr;
  padding: 0px;
  }
}

`;
export default function Explore() {
  const navigate=useNavigate()
    return (
        <StyledExplore>
            <div className='mainHolder'>
                <h1>Programmes</h1>
                <p>
                Modibbo Adama University, Yola, Virtually runs all programmes ranging 
                from Undergraduate Programs, 
                Post Graduate, Diploma, Distance Learning and Sandwich programmes 
                </p>
            </div>

            <div className='indHolder'>
              <div onClick={()=>{
                navigate('admission/undergraduate')
              }} className='holderLinks'>
                <h4>Undergraduate 
               Programmes</h4>
              </div>

              <div onClick={()=>{
                navigate('admission/postgraduate')
              }} className='holderLinks'>
                <h4>Post Graduate Programmes</h4>
              </div>

              <div className='holderLinks'>
                <h4>Distance Learning Programmes</h4>
              </div>

              <div onClick={()=>{
                navigate('/admissions')
              }} className='holderLinks'>
                <h4>Others</h4>
              </div>
            </div>
        </StyledExplore>
    )
}
