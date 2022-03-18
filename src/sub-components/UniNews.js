import { Button, Card, CardActions, CardContent, CardMedia, imageListClasses, Typography } from '@mui/material';
import React from 'react'
import styled from 'styled-components'

const StyledNews=styled.div`
width: 30%;
height: 90%;
background-color:white;
margin:20px;
box-shadow:0 8px 20px 0 rgba( 31, 38, 135, 0.37 );
flex-shrink: 0;
img{
    width: 100%;
   
}
@media only screen 
and (min-device-width : 320px) 
and (max-device-width : 480px) {
    width:90%;
}
@media only screen 
  and (min-device-width: 768px) 
  and (max-device-width: 1024px) 
  and (-webkit-min-device-pixel-ratio: 1) {
    height: 70%;
  }
`;
export default function UniNews({image,heading='',body=''}) {
    return (
     <StyledNews className='indi-news'>
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
      <CardActions>
        <Button style={{backgroundColor:'#D07348'}} variant='contained' size="small">Read More</Button>
      </CardActions>
    </Card>

        </StyledNews>
    )
}
