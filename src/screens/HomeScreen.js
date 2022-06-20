import styled from 'styled-components'
import Carousel from 'react-material-ui-carousel'
import MyCarouselContent from '../components/MyCarouselContent';
import { Button, Divider, List, Skeleton } from '@mui/material';
import VideoIcon from '@mui/icons-material/VideoCallOutlined'
import MyNews from '../sub-components/MyNews';
import UniNews from '../sub-components/UniNews';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import OnlineLinks from '../components/OnlineLinks';
import MyCount from '../components/MyCount';
import MyDivider from '../sub-components/MyDivider';
import CancelOutlined from '@mui/icons-material/CancelOutlined';
import Explore from '../components/Explore';
import Modal from '@mui/material/Modal';
import { useEffect, useState } from 'react';
import Chat from '../components/Chat';
const MyContainer = styled.div`
min-height: 150vh;
min-width: 100%;
background-color:white;
margin-top: 130px;
overflow-x: hidden;
transition: all 1s;
.vc-message{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    width: 100%;
    min-height: 70vh;
    .message{
        width: 95%;
        height: 100%;
        background-color:#ececec;
        border-radius: 10px;
        margin:auto;
        display: flex;
        grid-column: 1/4;
        .the-vc{
            width: 40%;
            height: 100%;
            .vcImage{
            height: 100%;
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            
            
            }
            img{
                width:90%;
                height:80%;
                
            }
            h4{
                margin: 0px;
                text-align: center;
                color:white;
                border-bottom: 1px solid #D07348;
                background-color: rgba(0,0,0,0.5);
            }
        }

        .the-msg{
            width: 60%;
            height: 100%;
            
            p{
                text-align: justify;
                font-size: 18px;
                margin-right: 10px;
            }
        }
    }
    .news{
        width: 100%;
        height: 100%;
        background-color:white;
        display:flex;
        flex-direction: column;
        /* align-items: center;
        margin-bottom: 40px; */
        grid-column: 4/6;
        h3{
            color:#D07348;
            text-align:center;
            

        }
    }
}

.uni-news{
    height: 60vh;
    width: 100%;
   flex-direction: row;
    display: flex;
    margin-bottom: 20px;
    position: relative;
    .indUpdates{
        width: 50%;
        min-height: 200px;
        background-color: transparent;
        display: flex;
        flex-direction: column;
        padding: 10px;
        .mainIndUp{
         display: flex;
         flex-direction: row;
         width: 90%;
         height: 100px;
         border-bottom: 1px solid lightgray;
         margin-bottom: 10px;
         img{
             width: 100px;
             height: 100px;
         }
         .mainIdCon{
         display: flex;
         flex-direction: column;
         justify-content: flex-start;
         align-items: flex-start;
         h4{
             line-height: 14px;
         }
         p{
             line-height: 1px;
         }
         }
        }
    }
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
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                img{
                height: 80%;
                width: 90%;

              
                }
                h4{
                    margin-top: 20px;
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
  .myDivider{
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      margin-top: 20px;
      h2{
          width: 20%;
      }
  }
`;

export default function HomeScreen() {
    const [openModel, setModal] = useState(false)
    const [isLoading, setLoading] = useState(true)
    const [homeData, setHomeData] = useState([])
    useEffect(() => {
        fetch('https://new-modibbo-adama.herokuapp.com/admin/get-home-event')
            .then(res => {
                res.json()
                    .then(data => {
                        setLoading(false)
                        if (data.success) {
                            setHomeData(data.message)

                        }

                    })
            })
    }, [])

    return (
        <MyContainer>
             {
                    isLoading && (
                        <Skeleton animation="wave" style={{
                            width: '100%',
                            height: '70vh'
                        }} variant="rectangular" />
                    )
                }
            <Carousel  autoPlay stopAutoPlayOnHover>
                {
                    !isLoading && (
                        homeData.length > 0 &&
                        homeData[0].mainEvents.map((dat, ind)=>(
                            <MyCarouselContent key={ind}
                                subheading={dat.subHeader}
                                heading={dat.header}
                                body={dat.description}
                                image={dat.image}
                             />
                        ))
                    )
                }
            </Carousel>


            <Button onClick={() => {
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
    <h2 style={{
        margin: 10,
        textAlign:'center',
        width:'50%'
    }}>Welcome Message by Vice Chancellor</h2>
            <div className='vc-message'>
                <div className='message'>
                    <div className='the-vc'>
                        {
                            !isLoading&&
                            homeData.length > 0&&(
                                <>
                        <div style={{
                            background:`url(${homeData[0].vc.image})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            backgroundSize: 'cover'
                        }} className='vcImage'>
                       <h4>
                           {homeData[0].vc.name}
                       </h4>
                        </div>
                        {/* <img src={homeData[0].vc.image} /> */}
                     
                                </>
                            )

                        }
                        
                    </div>

                    <div className='the-msg'>
                        <p>
                          {
                              !isLoading&&
                              homeData.length > 0?homeData[0].vc.description:''
                          }  
                        </p>

                    </div>
                </div>

                <div className='news'>
                    <h3>Upcoming/Ongoing School Events</h3>
                    <List>
                        {
                            !isLoading&&
                            homeData.length > 0&&(
                                homeData[0].programs.map((prg,ind)=>(
                                    <MyNews
                                    key={ind}
                                    news={prg.description}/>
                                ))
                            )
                        }
                    <p>View All Events</p>
                    </List>
                </div>
            </div>
            
            <div className='myDivider'>
            <h2 style={{
    color: '#D07348',
    textAlign: 'center'
     }}>News & Updates</h2>
            <Divider style={{ backgroundColor: '#D07348',width:'80%',height:5 }} />
            </div>
            
            <div className='uni-news'>
                {
                    !isLoading&&
                    homeData.length > 0&&(
                        homeData[0].newsEvents.map((nws,ind)=>(
                            <UniNews
                            key={ind}
                            image={nws.image}
                            heading={nws.header}
                            body={nws.description}
                        />
                        ))
                    )
                }
                
              <div className='indUpdates'>
                  {
                     !isLoading&&
                     homeData.length > 0&&(
                         homeData[0].newsEvents.map((nws,ind)=>(
                            <div className='mainIndUp'>
                            <img alt='im' src={nws.image}/>
                            <div className='mainIdCon'>
                                <h4>
                                {nws.header}
                                </h4>
                                <p>
                                15, April 2022
                                </p>
                            </div>
                          </div>
                         ))
                     )  
                  }
              
              </div>

            </div>
            <Divider style={{ backgroundColor: '#D07348', marginBottom: 20 }} />
            <OnlineLinks />
            <Divider  sx={{
    "&::before, &::after": {
      borderColor: "#D07348",
    },
  }}     style={{
            marginTop:20
            }}><h2 style={{color:'#D07348'}}>
            EXPLORE OUR MAJOR  PROGRAMS    
             </h2></Divider>
             <Explore />
            <MyCount />
           
            
            <Modal
                open={openModel}
                onClose={() => {
                    setModal(false)
                }}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <div style={
                    {
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0,0,0,0.5)',
                        display: 'flex',
                        flexDirection: 'column'
                    }
                }>
                    <CancelOutlined onClick={() => {
                        setModal(false)
                    }} style={{
                        height: 30,
                        width: 30,
                        marginLeft: 'auto',
                        marginTop: 20,
                        color: 'white',
                        marginRight: 30,
                        cursor: 'pointer'

                    }} />
                    <video style={{
                        width: '80%',
                        height: '60vh',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        marginTop: 10
                    }} controls>
                        <source src='https://res.cloudinary.com/nutscoders/video/upload/v1646231311/mau-vid_gmyivp.mp4' type="video/mp4" />
                    </video>
                </div>
            </Modal>
            <Chat/>
        </MyContainer>
    )
}





