import React from 'react'
import styled from 'styled-components'
import { Fade,Zoom,Bounce,Reveal } from 'react-awesome-reveal';
import { useNavigate } from 'react-router';
const StyledVc=styled.div`
@keyframes scaleStroke{
    from{
        opacity: 0;
    }
    
    to{
       opacity: 1;
    }
}
height: 100vh;
width: 100%;
background-color:#f9f9f9;
display: flex;
justify-content: center;
/* align-items: center; */
overflow: hidden;
position: relative;
.myVc001{
  height: 250px;
  width: 250px;
  border-radius: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
 align-items: center;
 position: relative;
 overflow: hidden;
 cursor: pointer;
z-index: 1;
 margin-top: 30px;
 
  img{
    height: 180px;
    width: 200px;
    border-radius: 100%;
    z-index: 1;
    position: relative;
   
    
}
span{
    z-index: 2;
    font-weight: bold;
    
}
.bgv{
    position: absolute;
    bottom: 0;
    background-color:rgba(66, 133, 244, 0.08);
    height: 100px;
    width: 100%;
    border-radius: 100%;
    z-index: 0;
}
}

.others001{
  height: 200px;
  width: 200px;
  border-radius: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
 align-items: center;
 position: absolute;
 overflow: hidden;
 z-index: 1;
 opacity: 0;
 cursor: pointer;
 
  img{
    height: 130px;
    width: 120px;
    border-radius: 100%;
    z-index: 1;
    position: relative;
   
    
}
span{
    z-index: 2;
    font-weight: bold;
    
}
.bgv{
    position: absolute;
    bottom: 0;
    background-color:rgba(66, 133, 244, 0.08);
    height: 100px;
    width: 100%;
    border-radius: 100%;
    z-index: 0;
}
}
.others001.bur{
left: 0;
top: 0;
margin-left: 200px;
margin-top: 30px;
animation: scaleStroke 2s 1 forwards;
animation-delay: 2s;
}
.others001.reg{
right: 0;
top: 0;
margin-top: 30px;
margin-right: 200px;
animation: scaleStroke 2s 1 forwards;
animation-delay: 3s;
}

.others001.lib{
left: 0;
bottom: 0;
margin-bottom: 140px;
margin-left: 250px;
animation: scaleStroke 2s 1 forwards;
animation-delay: 4s;
}
.others001.dvc1{
right: 0;
bottom: 0;
margin-right: 250px;
margin-bottom: 140px;
animation: scaleStroke 2s 1 forwards;
animation-delay: 5s;
}
.others001.dvc2{
animation: scaleStroke 6s 1 forwards;
bottom: 0;
margin-bottom: 50px;
animation-delay: 7s;


}

.myVc001 .main{
/* transform: translateX(-300px); */
}

.stroke01{
width: 300px;
height: 0.01px;
border: 0.7px dashed #D07348;
position: absolute;
left: 0;
transform: rotate(20deg) translateX(300px) translateY(30px);
z-index:0;
opacity: 0;
animation: scaleStroke 2s 1 forwards;


} 

.stroke02{
width: 300px;
height: 0.01px;
border: 0.7px dashed #D07348;
position: absolute;
left: 0;
transform: rotate(-40deg) translateY(-10px) translateX(400px);
z-index: 0;
bottom: 0;
opacity: 0;
animation: scaleStroke 2s 1 forwards;

}
.stroke03{
width: 400px;
height: 0.01px;
border: 0.7px dashed #D07348;
position: absolute;
right: 0;
transform: rotate(-20deg) translateY(50px) translateX(-250px);
z-index: 0;
opacity: 0;
animation: scaleStroke 2s 1 forwards;

}

.stroke04{
width: 400px;
height: 0.01px;
border: 0.7px dashed #D07348;
position: absolute;
right: 0;
bottom: 0;
transform: rotate(35deg) translateX(-400px) translateY(-100px);
bottom: 0;
opacity: 0;
animation: scaleStroke 2s 1 forwards;
}

.stroke05{
width: 200px;
height: 0.01px;
border: 0.7px dashed #D07348;
position: absolute;
bottom: 0;
transform: rotate(90deg) translateX(-200px);
bottom: 0;
opacity: 0;
animation: scaleStroke 2s 1 forwards;
}

`;
export default function VcAbout() {
    const route=useNavigate()
    return (
        <Fade triggerOnce fraction={0.7}>
        <StyledVc>
       
        <div onClick={()=>{
        route('/pricipal/001')
        }} className='myVc001 main'>
        <img 
        src='https://res.cloudinary.com/nutscoders/image/upload/v1646496506/VC-removebg-preview_zshkhs.png' 
        alt='img'/> 
        <span>Prof. Liman Tukur</span>
        <span>Vice Chancellor</span>
        <div className='bgv'></div>
        </div>
       
      
        <div className='others001 bur'>
        <img 
        src='https://res.cloudinary.com/nutscoders/image/upload/v1646496506/VC-removebg-preview_zshkhs.png' 
        alt='img'/> 
        <span>Prof. Liman Tukur</span>
        <span>Vice Chancellor</span>
        <div className='bgv'></div>
        </div>
        
       
        <div className='others001 reg'>
        <img 
        src='https://res.cloudinary.com/nutscoders/image/upload/v1646496506/VC-removebg-preview_zshkhs.png' 
        alt='img'/> 
        <span>Prof. Liman Tukur</span>
        <span>Vice Chancellor</span>
        <div className='bgv'></div>
        </div>



        <div className='others001 lib'>
        <img 
        src='https://res.cloudinary.com/nutscoders/image/upload/v1646496506/VC-removebg-preview_zshkhs.png' 
        alt='img'/> 
        <span>Prof. Liman Tukur</span>
        <span>Vice Chancellor</span>
        <div className='bgv'></div>
        </div>



        <div className='others001 dvc1'>
        <img 
        src='https://res.cloudinary.com/nutscoders/image/upload/v1646496506/VC-removebg-preview_zshkhs.png' 
        alt='img'/> 
        <span>Prof. Liman Tukur</span>
        <span>Vice Chancellor</span>
        <div className='bgv'></div>
        </div>

        <div className='others001 dvc2'>
        <img 
        src='https://res.cloudinary.com/nutscoders/image/upload/v1646496506/VC-removebg-preview_zshkhs.png' 
        alt='img'/> 
        <span>Prof. Liman Tukur</span>
        <span>Vice Chancellor</span>
        <div className='bgv'></div>
        </div>
    

      
        <div className='stroke01'></div>
        <div className='stroke02'></div>
        <div className='stroke03'></div>
        <div className='stroke04'></div>
        <div className='stroke05'></div>
        </StyledVc>
        
        </Fade>
    )
}
