import React from 'react'
import styled from 'styled-components'
import { Slide } from "react-awesome-reveal";
const CarouselContainer=styled.div`
height:80vh;
min-width:100%;
max-width: 100%;
background-color:transparent;
.color-code{
position: absolute;
top: 0px;
right: 0px;
left: 0px;
bottom: 0px;
display: flex;
flex-direction: column;
justify-content: flex-end;
background: linear-gradient(to right,rgba(64,0,0,0.1),rgba(64,0,0,0.3),rgba(64,0,0,0.5),rgba(64,0,0,0.7));
.latex{
    height: 65px;
    width: 100%;
    background-color:rgba(0,0,0,0.4);
    display: flex;
    flex-direction: row;
    align-items: center;
    h2{
        width: 10%;
        background-color: black;
        color: white;
        height: 100%;
    }
    p{
    height: 100%;
    width: 80%;
    margin-left: 10px;
    color: white;
    }

}
}
img{
width: 100%;
height: 80vh;
object-fit: cover;

}
.car-write{
    position: absolute;
    z-index: 100;
    bottom: 0px;
    margin-bottom: 50px;
    margin-left: 50px;
    width: 70%;

    h4{
        color: white;
        font-size: 45px;
        span{
            font-weight: 100;
        }
       
    }
    p{
        color: white;
        font-size: 20px;
        text-align: justify;
        margin-right: 30px;
        width: 70%;
        
    }
}


@media only screen 
and (min-device-width : 320px) 
and (max-device-width : 480px) {
    height:50vh;
    img{
width: 100%;
height: 50vh;
object-fit: cover;

}
.car-write{
    width: 100%;
    margin-left: 20px;
    margin-bottom: 10px;
    h4{
        color: white;
        font-size: 25px;
        span{
            font-weight: 100;
        }
       
    }
    p{
        color: white;
        font-size: 18px;
        text-align: justify;
        margin-right: 20px;
        width: 90%;
        
    }
}
}
`;
export default function MyCarouselContent({image,heading='',subheading='',body=''}) {
    return (
        <CarouselContainer>
        <div className='color-code'>
            <div className='latex'>
                <h2>Bulleting:</h2>
                <p>Modibbo Adama University is Set to 
                    comission the new College of Medical Science at the end of the session</p>
            </div>
        </div>
        {image?  <img  src={image}/>:null}
       <div className='car-write'>
       <Slide cascade={true} triggerOnce={true} delay={500}>
       <h4><span>{subheading}</span><br/>{heading}</h4>
       <p>
        {body}
        </p>
       </Slide>
       
       
       </div>
        </CarouselContainer>
    )
}
