import { Button, Card, CardActions, CardContent, CardMedia, imageListClasses, Typography } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router';
import styled from 'styled-components'

const StyledNews=styled.div`
width: 25%;
height: 80%;
background-color:white;
margin:20px;
cursor: pointer;
/* box-shadow:0 8px 20px 0 rgba( 31, 38, 135, 0.37 ); */
flex-shrink: 0;
img{
    width: 100%;
   
}
@media only screen 
and (max-width : 1060px){
   width:100%;
   margin:0px;
   margin-top:20px;
}
`;
export default function UniNews({image,heading='',body='',link=''}) {
  const navigate=useNavigate()
    return (
     <StyledNews
     onClick={()=>{
     navigate(link)
     }}
     className='indi-news'>
         <Card sx={{
             width:'100%',
             minHeight:'100%',
             maxHeight:'100%'
         }}>
      <CardMedia
        height='150'
        component="img"
        image={image?image:'https://res.cloudinary.com/nutscoders/image/upload/v1647580347/newss_yni3zt.jpg'}
        alt="News"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {heading}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {body} 
        </Typography>
      </CardContent>
    </Card>

        </StyledNews>
    )
}
