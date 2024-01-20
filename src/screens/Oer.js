import { Download } from '@mui/icons-material';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import DownloadImg from '../assets/oer.gif'
const StyledContainer=styled.div`
margin-top:100px;
min-height:50vh;
display:grid;
grid-template-columns:repeat(3,1fr);
.downLBg{
min-height:50vh;
width:100%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
}
.oer-title{
  background-color:whitesmoke;
  padding: 5px;
}
.mainDownlo{
    padding:20px;
    min-width:100%;
    display:flex;
    flex-direction:column;
    
    .downFil{
        display:flex;
        flex-direction:column;
        justify-content:space-between;
        margin-top:15px;
       
        border: 1px solid #ddd;
        border-radius: 7px;
       
        background-color: white;
        cursor:pointer;
        .downfil: hover{
          background-color: red;
        }
        span{
            font-size:20px;
        }
        .desc{
          font-size:12px;
          font-weight: light;
          padding: 5px;
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
    <>
      <span className='donHe'>Open Educational Research</span>
    <StyledContainer>
     
        <div className='mainDownlo'>
           
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
             <span className='oer-title'>{oer.oerName}</span>
             <span className='desc'>{oer?.description}</span>
             {/* <span className='desc'>Open Educational Resources (OER) are learning, teaching and research materials in any format and medium that reside in the public domain or are under copyright that have been released under an open license, that permit no-cost access, re-use, re-purpose, adaptation and redistribution by others.</span> */}
            <Link to={oer.oerLink} target="_blank"></Link>
           
         </div>
         
           ))}



          </div>
        {/* <div className='downLBg'>
          <img src={DownloadImg} alt='img'/>
        </div> */}
    </StyledContainer>
    </>
  )
}
