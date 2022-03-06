import styled from 'styled-components'
import Carousel from 'react-material-ui-carousel'
import MyCarouselContent from '../components/MyCarouselContent';
import { Button, Divider, List } from '@mui/material';
import VideoIcon from '@mui/icons-material/VideoCallOutlined'
import MyNews from '../sub-components/MyNews';
import UniNews from '../sub-components/UniNews';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import OnlineLinks from '../components/OnlineLinks';
import MyCount from '../components/MyCount';
import MyDivider from '../sub-components/MyDivider';
import  CancelOutlined from '@mui/icons-material/CancelOutlined';
import Explore from '../components/Explore';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
const MyContainer = styled.div`
min-height: 150vh;
min-width: 100%;
background-color:white;
margin-top: 130px;
overflow-x: hidden;

.vc-message{
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    min-height: 70vh;
    .message{
        width: 95%;
        height: 100%;
        background-color:#f9f9f9;
        border-radius: 10px;
        margin:auto;
        display: flex;
        .the-vc{
            width: 40%;
            height: 100%;
            img{
                width: 100%;
                height: 85%;
            }
            h4{
                margin: 0px;
                text-align: center;
                color:#D07348;
                border-bottom: 1px solid #D07348;
            }
        }

        .the-msg{
            width: 60%;
            height: 100%;
            h3{
                text-align: center;
            }
            p{
                text-align: justify;
                font-size: 18px;
            }
        }
    }
    .news{
        width: 100%;
        height: 100%;
        background-color:white;
        display:flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 40px;
        h3{
            color:#D07348;
            text-align:center;
            

        }
    }
}

.uni-news{
    height: 70vh;
    width: 100%;
   flex-direction: row;
    display: flex;
    overflow-x: scroll;
    margin-bottom: 20px;
    position: relative;
}

@media only screen 
and (min-device-width : 320px) 
and (max-device-width : 480px) {
    margin-top: 100px;
   
    .vc-message{
        grid-template-columns: 1fr;
        min-height: 80vh;

        .message{
            flex-direction:column;
            .the-vc{
                width: 100%;
                img{
                height: 100%;
                width: 100%;
                }
            }
            .the-msg{
            width: 100%;
            height: 100%;
            h3{
                margin-top: 100px;
            }
            p{
                text-align: justify;
                font-size: 15px;
                margin-left: 10px;
                margin-right: 10px;
            }
        }
        }
    }
}


@media only screen 
  and (min-device-width: 768px) 
  and (max-device-width: 1024px) 
  and (-webkit-min-device-pixel-ratio: 1) {
    .vc-message{
        grid-template-columns: 1fr;
        min-height: 80vh;

        .message{
            flex-direction:row;
            .the-vc{
                width: 40%;
                img{
                height: 100%;
                width: 100%;
                }
            }
            .the-msg{
            width: 60%;
            
            h3{
                margin-top: 50px;
            }
            p{
                text-align: justify;
                font-size: 25px;
                margin-left: 10px;
                margin-right: 10px;
            }
        }
        }
    }

  }
`;

export default function HomeScreen() {
    const [openModel,setModal]=useState(false)


    return (
        <MyContainer>
            <Carousel autoPlay stopAutoPlayOnHover>
                <MyCarouselContent
                    subheading='Welcome To'
                    body='Committed to producing world-class graduate for the pursuit of
       all round excellence through quality research, teaching and community service.'
                    heading='Modibbo Adama University, Yola'

                    image={require('../assets/car2.jpg')} />
                <MyCarouselContent
                    subheading='Registration'
                    heading='New Session Registrationg On-going'
                    body='Registration for 2022/2023 will commence on Monday 23rd March 2022'
                    image={require('../assets/car3.jpg')} />
                <MyCarouselContent
                    subheading='Result Approval!!!'
                    heading='Senate To Approve 2021/2022 Results'
                    body='Senate Final Meeting On Results Approval Will commence first week of 
      April 2023'
                    image={require('../assets/car4.jpg')} />
            </Carousel>


            <Button onClick={()=>{
                setModal(true)
            }} className='tour' style={{
                marginLeft: 'auto',
                marginRight: 20,
                background: 'rgba( 64, 0, 0, 0.4 )',
                borderRadius: 50,
                height: 70,
                width: 70,
                boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
                position: 'fixed',
                bottom: 0,
                right: 0,
                marginBottom: 50,
                marginRight: 50,
                zIndex: 150

            }} variant='contained' endIcon={<VideoIcon />}>TOUR</Button>

            <div className='vc-message'>
                <div className='message'>
                    <div className='the-vc'>
                        <img src={require('../assets/liman.png')} />
                        <h4>
                            Prof. Abdullahi Liman Tukur,
                            Vice Chancellor. MAU-Yola.
       </h4>
                    </div>

                    <div className='the-msg'>
                        <h3>Vc's Message</h3>
                        <p>
                            I welcome you to the Modibbo Adama University of Technology, Yola
                            (MAUTECH) formerly known as Federal University of Technology, Yola.
                            I congratulate you for selecting MAUTECH. In doing so, you have become part
                            of a tradition of excellence that is placing MAUTECH in the sport light locally,
                            regionally, nationally, and internationally. In fact, since its establishment in 1981....
       </p>

                        <Button style={{
                            marginLeft: '25%',
                            marginTop: 20,
                            backgroundColor: '#D07348',


                        }} variant='contained'>Read More</Button>
                    </div>
                </div>

                <div className='news'>
                    <h3>Upcoming/Ongoing School Events</h3>
                    <List>
                        <MyNews
                            news='Senate Final Meeting On Results Approval Will commence first week of 
          April 2023'/>

                        <MyNews
                            news='Senate Final Meeting On Results Approval Will commence first week of 
          April 2023'/>


                        <MyNews news='Registration for 2022/2023 will commence on Monday 23rd March 2022' />
                    </List>
                </div>
            </div>

            <Divider style={{ backgroundColor: '#D07348' }} />
            <h4 style={{
                color: '#D07348',
                textAlign: 'center'
            }}>News and Events</h4>
            <div className='uni-news'>
                <UniNews
                    image={require('../assets/news2.jpg')}
                    heading='ICT Training'
                    body='Our training program is aimed at developing a 
community of certified professionals, and providing 
organizations with the opportunity to ensure their staff'
                />

                <UniNews
                    image={require('../assets/news4.jpg')}
                    heading={`VC's Cup`}
                    body={`The Vice-Chancellor's Cup is our inter-departmental tournament for all staff, regardless 
of ability. A variety of sports and activities take place each `}
                />

                <UniNews
                    image={require('../assets/news3.png')}
                    heading='Medicine Approved'
                    body={` Moddibbo Adama University of Technology (MAUTECH), Yola has joined the 
list of Nigerian universities offering medicine`}
                />


                <UniNews
                    image={require('../assets/news1.jpg')}
                    heading='Admission'
                    body='2020 Undergraduate Admission on Progress '
                />

            </div>
            <Divider style={{ backgroundColor: '#D07348',marginBottom:20 }} />
            <OnlineLinks/>
            <MyCount/>
            <MyDivider/>
            <Explore/>
        <Modal
        open={openModel}
        onClose={()=>{
            setModal(false)
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
     <div style={
         {
             width:'100%',
             height:'100%',
             backgroundColor:'rgba(0,0,0,0.5)',
             display:'flex',
             flexDirection:'column'
         }
     }>
         <CancelOutlined onClick={()=>{
              setModal(false)
          }} style={{
             height:30,
             width:30,
             marginLeft:'auto',
             marginTop:20,
             color:'white',
             marginRight:30,
             cursor:'pointer'
             
         }}/>
          <video style={{
              width:'80%',
              height:'60vh',
              marginLeft:'auto',
              marginRight:'auto',
              marginTop:10
          }} controls>
         <source src='https://res.cloudinary.com/nutscoders/video/upload/v1646231311/mau-vid_gmyivp.mp4' type="video/mp4"/>
         </video>
     </div>
      </Modal>
        </MyContainer>
    )
}
