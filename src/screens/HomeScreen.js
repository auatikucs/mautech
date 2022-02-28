import styled from 'styled-components'
import Carousel from 'react-material-ui-carousel'
import MyCarouselContent from '../components/MyCarouselContent';
const MyContainer=styled.div`
min-height: 150vh;
min-width: 100vw;
background-color:white;
margin-top: 130px;


@media only screen 
and (min-device-width : 320px) 
and (max-device-width : 480px) {
    margin-top: 100px;
}
`;

export default function HomeScreen() {
    
    return (
    <MyContainer>
    <Carousel autoPlay stopAutoPlayOnHover>
      <MyCarouselContent
      subheading='Welcome To'
       body='Committed to producing world-class graduate for the pursuit of
       all round excellence through quality research, teaching and community service.'
       heading='Modibbo Adama University, Yola'

       image={require('../assets/car2.JPG')}/>
      <MyCarouselContent 
      subheading='Registration'
      heading='New Session Registrationg On-going'
      body='Registration for 2022/2023 will commence on Monday 23rd March 2022'
       image={require('../assets/car3.JPG')}/>
      <MyCarouselContent
      subheading='Result Approval!!!'
      heading='Senate To Approve 2021/2022 Results'
      body='Senate Final Meeting On Results Approval Will commence first week of 
      April 2023' 
       image={require('../assets/car4.JPG')}/>
    </Carousel>
       </MyContainer>
    )
}
