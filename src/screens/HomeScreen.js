import styled from 'styled-components'
import Carousel from 'react-material-ui-carousel'
import MyCarouselContent from '../components/MyCarouselContent';
import { Button, Divider, List, Skeleton } from '@mui/material';
import VideoIcon from '@mui/icons-material/VideoCallOutlined'
import {PlayArrow} from '@mui/icons-material'
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
import Vc from '../assets/mau_pic_footer.jpg'
import Cal from '../assets/cal3.png';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
const MyContainer = styled.div`
min-height: 150vh;
min-width: 100%;
background-color:white;
margin-top: 110px;
overflow-x: hidden;
transition: all 1s;
.vc-message{
    display: grid;
    grid-template-columns: 1fr;
    width: 100%;
    min-height: 70vh;
    overflow: hidden;
    .message{
        width: 100%;
        min-height: 80vh;
        background:url(${Vc});
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        margin:auto;
        display: flex;
       
        .the-vc{
            width: 50%;
            min-height:50vh;
            margin: auto;
            .vcImage{
            min-height:70vh;
            width: 85%;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            align-items: center;
            margin: auto;
            margin-top: 20px;
            margin-bottom: 20px;
            background-color: rgba(0,0,0,1);
            
            
            }
            img{
                width:90%;
                height:70%;
                
            }
            h4{
                margin: 0px;
                text-align: center;
                color:white;
                border-bottom: 1px solid #D07348;
                background-color: rgba(0,0,0,0.5);
                width: 70%;
            }
        }

        .the-msg{
            width: 50%;
            height: 100%;
            padding: 10px;
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:center;
            p{
                text-align: justify;
                font-size: 20px;
                margin-right:20px;
                
            
            }
        }
    }
    .news{
        width: 100%;
        min-height:30vh;
        background-color:white;
        display:grid;
        grid-template-columns: 1fr 1fr;
        /* align-items: center;
        margin-bottom: 40px; */
        
        h3{
            color:#D07348;
            text-align:center;
            

        }
    }
}

.uni-news{
    min-height: 60vh;
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
         padding: 10px;
         img{
             width: 100px;
             height: 100px;
             margin-right: 20px;
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
and (max-width : 1060px){
    margin-top: 100px;
   .myDivider{
    .evDiv{
        width:100%;
    }
   }
    .vc-message{
    min-height:60vh;
    .message{
       flex-direction:column;
       min-height:70vh;
       max-height:400vh;
        .the-vc{
            width: 100%;
            min-height: 70vh;
            margin: auto;
            .vcImage{
            width: 100%;
            }
            img{
                width:100%;
                height:50vh;
                
            }
            h4{
               
                width: 80%;
            }
        }

        .the-msg{
            width: 100%;
            height: 100%;
            p{
                text-align: justify;
                font-size: 16px;
                margin-right:20px;
                
            
            }
        }
    }
    .news{
        width: 100%;
        min-height:100px;
        display:grid;
        grid-template-columns: 1fr;
        max-height:50vh;
       img{
        display:none;
       }
        /* align-items: center;
        margin-bottom: 40px; */
        
        h3{
            color:#D07348;
            text-align:center;
            

        }
        .linkEv{
            margin-left:30px;
        }
    }
}

.uni-news{
    width: 90%;
   flex-direction:column;
    display: grid;
    grid-template-columns:1fr 1fr;
    grid-gap:10px;
    margin-bottom: 20px;
    position: relative;
    margin-left:auto;
    margin-right:auto;
    .indUpdates{
        width: 100%;
        grid-column:1/3;
        min-height: 200px;
        background-color: transparent;
        display: flex;
        flex-direction: column;
        padding:0px;
        .mainIndUp{
         display: flex;
         flex-direction: row;
         width: 95%;
         min-height: 100px;
         border-bottom: 1px solid lightgray;
         margin-bottom: 10px;
         padding: 0px;
         img{
             width: 100px;
             height: 100px;
             margin-right: 20px;
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
}
@media only screen 
and (min-device-width : 320px) 
and (max-device-width : 480px) {
    .vc-message{
    min-height:60vh;
    .message{
     display:flex;
       flex-direction:column;
       min-height:50vh;
        .the-vc{
            width: 100%;
            max-height:10vh;
            margin: auto;
            display:flex;
           flex-direction:column;
           min-height:50vh;
            .vcImage{
            width: 100%;
            min-height:50vh;
            max-height:50vh;
            margin-top:5px;
            margin-bottom:5px;
            }
           
            h4{
               
                width: 100%;
            }
        }

        .the-msg{
            width: 100%;
            margin-top:0px;
            
            p{
                text-align: justify;
                font-size: 14px;
                margin-right:20px;
                
            
            }
        }
    }
    .news{
        width: 100%;
        min-height:100px;
        display:grid;
        grid-template-columns: 1fr;
        max-height:50vh;
       img{
        display:none;
       }
        /* align-items: center;
        margin-bottom: 40px; */
        
        h3{
            color:#D07348;
            text-align:center;
            

        }
        .linkEv{
            margin-left:30px;
        }
    }
}
}  

`;
/* 
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
`; */

export default function HomeScreen() {
    const [openModel, setModal] = useState(false)
    const [isLoading, setLoading] = useState(true)
    const [homeData, setHomeData] = useState([])
    const [stats,setStats]=useState([])
    const navigate=useNavigate()

    useEffect(() => {
        window.scrollTo({
            top:0,
            behavior: 'smooth',
          })
        fetch('https://mau-web-server.fly.dev/admin/get-home-event')
            .then(res => {
                res.json()
                    .then(data => {
                        setLoading(false)
                        if (data.success) {
                            setHomeData(data.message)

                        }
                      //Fetch stat
                      fetch('https://mau-web-server.fly.dev/admin/get-statistics')
                      .then(res => {
                          res.json()
                              .then(data => {
                                  console.log(data.result,"+=+=+=+=+=+")
                                  setStats(data.result)
                              })
                      })

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

             <div onClick={() => {
                setModal(true)
            }} style={{
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
              zIndex: 150,
              display:'flex',
              flexDirection:'column',
              justifyContent:'center',
              alignItems:'center',
              cursor:'pointer'
             }} className='tour'>
             <PlayArrow style={{
                 fontSize:35,
                 color:'white'
             }}/>
            
             </div>
    <h2 style={{
        margin: 10,
        textAlign:'center',
        width:'100%'
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
                            backgroundSize: 'contain'
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
                    <img src={require('../assets/cal3.png')} alt='cal'/>
                    <List>
                    <h3>Upcoming/Ongoing School Events</h3>
                    
                        {
                            !isLoading&&
                            homeData.length > 0&&(
                                homeData[0].programs.slice(0,7).map((prg,ind)=>(
                                    <MyNews
                                    key={ind}
                                    news={prg.description}
                                    id={prg.evntId}
                                    date={prg.dayOfEvent}
                                    
                                    />
                                ))
                            )
                        }
                    <p className='linkEv'>
                        <Link to='allevents'>View All Events</Link>
                    </p>
                    </List>
                </div>
            </div>
            
            <div className='myDivider'>
            <h2 style={{
    color: '#D07348',
    textAlign: 'center'
     }}>News & Updates</h2>
            <Divider className='evDiv' style={{ backgroundColor: '#D07348',width:'100%',height:5 }} />
            </div>
            
            <div className='uni-news'>
                {
                    !isLoading&&
                    homeData.length > 0&&(
                        homeData[0].newsEvents.slice(0,2).map((nws,ind)=>(
                            <UniNews
                            key={ind}
                            image={nws.image}
                            heading={nws.header}
                            body={nws.description}
                            link={`news/${nws.evntId}`}
                           
                        />
                        ))
                    )
                }
                
              <div className='indUpdates'>
                  {
                     !isLoading&&
                     homeData.length > 0&&(
                         homeData[0].newsEvents.slice(2,6).map((nws,ind)=>(
                            <div className='mainIndUp'>
                            <img alt='im' src={nws.image}/>
                            <div className='mainIdCon'>
                                <h4>
                                {nws.header}
                                </h4>
                                <p>
                               {nws.dateEntered}
                                </p>
                            </div>
                          </div>
                         ))
                     )  
                  }
                   <p>
                        <Link to='allnews'>View All News</Link>
                    </p>
              
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
            <MyCount stats={stats}/>
           
            
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





