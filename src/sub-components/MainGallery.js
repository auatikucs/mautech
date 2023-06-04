import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const StyledContainer=styled.div`
height:40vh;
width:100%;
background-color:transparent;
position:relative;
display:flex;
align-items:flex-end;
.galleryAlum{
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    z-index:-1;
    img{
        width:100%;
        height:100%;
    }
}
.ev{
z-index:10;
color:red;
display:flex;
flex-direction:column;
width:100%;
background-color:rgba(0,0,0,0.8);
padding:20px;
.eventName{
    font-size:20px;
    font-weight:bold;
    color:white;
}
.eventDate{
    color:white;
    font-size:14px;
}
}
`;

export default function MainGallery() {

const [isGallery, setGallery] = useState([]);
const [isLoading, setLoading] = useState(true);

useEffect(()=>{
    fetch('https://mau-web-server.fly.dev/admin/get-all-gallery')
    .then(res=>{
        return res.json();
      })
      .then(data =>{
        setLoading(false)
       
            setGallery(data.message);
          console.log(data.message)
        
      })
},[]);


  return (
    <div className='Gallery-Container'>
        <h2>Picture Gallery</h2>
        {isLoading && <div>Loading.....</div>}
        {isGallery && isGallery.map((gallery)=>(
            <div className='Inner-Gallery'>
                <div>
                <span>{gallery.header}</span>
                <img src={gallery.image} alt='' width='100%' height='300px'/>
                </div>
                
                
            </div>
        )
        )
        
        }
        
    </div>
   
    
    
  )
}
