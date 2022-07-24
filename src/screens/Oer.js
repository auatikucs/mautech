import { Download } from '@mui/icons-material';
import React from 'react'
import styled from 'styled-components'
import DownloadImg from '../assets/oer.gif'
const StyledContainer=styled.div`
margin-top:100px;
min-height:50vh;
display:grid;
grid-template-columns:1fr 1fr;
.downLBg{
min-height:50vh;
width:100%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
}
.mainDownlo{
    padding:20px;
    min-width:100%;
    display:flex;
    flex-direction:column;
    .donHe{
     width:100%;
     text-align:center;
     height:60px;
     color:white;
     background-color:#D07348;
     font-size:40px;
     border-radius:10px;
    }
    .downFil{
        display:flex;
        flex-direction:row;
        justify-content:space-between;
        margin-top:15px;
        border-bottom:1px solid gray;
        span{
            font-size:20px;
        }
    }
}
`;
export default function Oer() {
  return (
    <StyledContainer>
        <div className='mainDownlo'>
            <span className='donHe'>Open Educational Research</span>
            <div className='downFil'>
                <span>2020 schedule school fess</span>
                <Download fill='#000000'/>
            </div>

            <div className='downFil'>
                <span>2020 schedule school fess</span>
                <Download fill='#000000'/>
            </div>


            <div className='downFil'>
                <span>2020 schedule school fess</span>
                <Download fill='#000000'/>
            </div>


          </div>
        <div className='downLBg'>
          <img src={DownloadImg} alt='img'/>
        </div>
    </StyledContainer>
  )
}
