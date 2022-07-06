import React from 'react'
import styled from 'styled-components'

const StyledContainer=styled.div`
min-width: 100%;
height: 80vh;
background-color: white;
position: relative;
video{
  position:absolute;
  right:0;
  bottom: 0;
  width:100% ;
  height:100%;
  object-fit:cover ;

  
  z-index: 20px;

  

}
.vidContent{
position: absolute;
z-index: 30px;
bottom: 0;
width: 100%;
height: 200px;
background:linear-gradient(to bottom,rgba(0,0,0,0.02),rgba(0,0,0,0.05),rgba(0,0,0,0.7),rgba(0,0,0,0.8));
display: flex;
flex-direction: column;
justify-content: flex-end;
padding: 20px;
span{
    color: white;
    width: 50%;
    :first-child{
    font-weight: bold;
    font-size: 60px;
    }
    :nth-child(2){
        font-size: 20px;
        text-align: justify;
    }
}
}
`;
export default function MyVideo({title='',content='',source=''}) {
    return (
        <StyledContainer>
           <video autoPlay muted loop>
                        <source src={source} type="video/mp4" />
            </video>
            <div className='vidContent'>
                <span>{title}</span>
                <span>
                {content} 
                </span>
            </div>
        </StyledContainer>
    )
}
