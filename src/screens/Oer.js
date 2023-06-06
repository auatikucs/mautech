import { Download } from '@mui/icons-material';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
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
  const[isOER, setIsOER] = useState([]);
  const[isLoading, setLoading] = useState(true);
  
useEffect(()=>{
  fetch('https://mau-web-server.fly.dev/admin/get-all-oer')
  .then(res=>{
   return res.json()
  })
  .then(data=>{
    setLoading(false);
    setIsOER(data.message)
    console.log(data.message);
  })
},[])

  return (
    <StyledContainer>
        <div className='mainDownlo'>
            <span className='donHe'>Open Educational Research</span>
            {isLoading && <div>Loading......</div>}
           {isOER && isOER.map((oer)=>(
             <div className='downFil' 
             onClick={() => {
              const el = document.createElement("a");
              el.setAttribute("href", `${oer.oerLink}`);
              el.setAttribute("download", "doc");
              el.setAttribute("target", "_blank");
              // console.log(el)
              el.click();
            }}>
             <span>{oer.oerName}</span>
            <Link to={oer.oerLink} target="_blank"><Download/></Link>
           
         </div>
           ))}



          </div>
        {/* <div className='downLBg'>
          <img src={DownloadImg} alt='img'/>
        </div> */}
    </StyledContainer>
  )
}
