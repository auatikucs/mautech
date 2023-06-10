import { Button, Card, CardActions, CardContent, CardMedia, imageListClasses, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const StyledNews=styled.div`
width: 25%;
height: 80%;
background-color:white;
margin:20px;
cursor: pointer;
border: none;
flex-shrink: 0;
img{
    width: 100%;
   
}
StyledNews: hover{
  background-color:red;
  color: white;
}
@media only screen 
and (max-width : 1060px){
   width:100%;
   margin:0px;
   margin-top:20px;
   background-color:red;
}
`;
export default function UniNews({image,heading='',body='',link='', timePosted=''}) {
  const navigate=useNavigate()
    return (
     <StyledNews
     onClick={()=>{
     navigate(link)
     }}
     className='indi-news'>
         <Card sx={{
             width:'100%',
             minHeight:300,
             maxHeight:300
         }}>
      <CardMedia
        height='150'
        component="img"
        image={image?image:'https://res.cloudinary.com/nutscoders/image/upload/v1647580347/newss_yni3zt.jpg'}
        alt="News"
      />
      <CardContent>
        <Typography gutterBottom variant="span" component="div">
         {heading}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {/* {body}  */}
        </Typography>
        <span>{timePosted}</span>
      
      </CardContent>
    </Card>

        </StyledNews>
    )
}
