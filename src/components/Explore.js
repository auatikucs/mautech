import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react'
import styled from 'styled-components'
import MyCard from '../sub-components/MyCard';

const StyledExplore=styled.div`
min-height: 80vh;
background-color: white;
h1{
    text-align: center;
    color: #D07348;
    font-size: 50px;
}
.mainHolder{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 100%;
    padding: 20px;
}
@media only screen 
and (min-device-width : 320px) 
and (max-device-width : 480px) {
  h1{
    margin-right: 10px;
    margin-left: 10px;
    font-size: 40px;
  }
  .mainHolder{
  grid-template-columns: 1fr;
  padding: 0px;
  }
}
`;
export default function Explore() {
    return (
        <StyledExplore>
            <h1>EXPLORE OUR 60+<br/>
MAJORS & PROGRAMS</h1>
<div className='mainHolder'>
<MyCard 
image={require('../assets/und.jpg')}
content='Explore a range of majors and minors with nearly 
limitless opportunities to launch your career.'
header='Undergradute Programs'/>

<MyCard 
image={require('../assets/post.jpg')}
content='Grow as a leader and advance in your profession with one of our graduate programs for women and men.'
header='PostGraduate Programs'/>

<MyCard 
image={require('../assets/car2.jpg')}
content='Elevate your career with adult degree-completion programs and licensure/certificate programs.'
header='Consultancy Unit'/>


</div>
        </StyledExplore>
    )
}
