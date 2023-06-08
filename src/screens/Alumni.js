import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import MyVideo from '../components/MyVideo';
import CampusCard from '../sub-components/CampusCard';
import Gallery from '../sub-components/Gallery';

const StyledContainer=styled.div`
width: 100%;
margin-top: 110px;
min-height: 100vh;
.campusImage{
    height: 90vh;
    width: 100%;
    background:url('https://res.cloudinary.com/nutscoders/image/upload/v1646557952/IMG_9585_mpdo2q.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    .campusHead{
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        background-color: rgba(208,115,72,0.4);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;
        
        .welcomeDean{
            margin-left: auto;
            width: 40%;
            background-color: rgba(0,0,0,0.5);
            margin-right: 30px;
            border-radius: 20px;
            
        }
        p{
            text-align: justify;
            margin-left: auto;
            margin-right: auto;
            width: 90%;
            color: white;
           

        }
        h1{
            text-align: center;
            color: white;
            font-weight: bolder;
            font-size: 40px;
            text-transform: uppercase;
        }
    }
}
.campusDetails{
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    h1{
        text-align: center;
        color: rgba(208,115,72,1);
    }
    p{
        width: 90%;
        text-align: justify;
        margin-left: auto;
        margin-right: auto;
    }
    .moreCampusDetails{
            width: 100%;
            display: grid;
            grid-template-columns: 1fr 1fr;
            h3{
                text-align: center;
            }
        }
}
@media only screen 
and (min-device-width : 320px) 
and (max-device-width : 480px) {
    margin-top: 100px; 
    
    .campusImage{
    .campusHead{
        position:relative;
        justify-content: flex-start;
        align-items: flex-start;
        
        .welcomeDean{
            margin-right: auto;
            width: 90%;
            margin-top:50%;
            p{
            text-align: justify;
            margin-left: auto;
            margin-right: auto;
            width: 90%;
            color: white;
           

        }
        h1{
            text-align: center;
            color: white;
            font-weight: bolder;
            font-size: 18px;
            text-transform: uppercase;
        }
        }
        
    }
}

}

.campusDetails{
    width: 90%;
    display: flex;
    flex-direction: column;
   
    .moreCampusDetails{
            /* width: 100%;
            display: grid; */
            grid-template-columns: 1fr;
            h3{
                text-align: center;
            }
        }
}
.mainDean{
    display: flex;
    background-color:transparent;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    flex:2;
    .mainDeanCont{
     display:flex;
     flex-direction: row;
     margin-top: 20px;
     width: 100%;
     background-color: transparent;
     min-height: 50vh;
     .deanPersonal{
      width:450px;
      background-color: transparent;
      display: flex;
      flex-direction: column;
      align-items: center;
      .myDean{
          height: 450px;
          width: 425px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          .myDeanCont{
          height: 100px;
          width: 100%;
          background-color: rgba(0,0,0,0.7);
          h2,h4{
              color: white;
              text-align: center;
          }
          }
      }
     }
     .deanWelcome{
      flex: 1;
      min-height: 100%;
      background-color:transparent;
      p{
          text-align: justify;
          margin-right: 20px;
          margin-left: 20px;
      }
      h3{
          text-align: center;
      }
     }
    }

    }

    h1{
            text-align: center;
            color: rgba(208,115,72,1);
            font-weight: bolder;
            font-size: 40px;
            text-transform: uppercase;
        }
.galleryAlumni{
    padding:20px;
    display:grid;
    grid-template-columns:1fr 1fr;
    grid-gap:20px;
}
`;
export default function Alumni() {
    const[isAlumni, setAlumni] = useState([]);
    const[isLoading, setLoading] = useState(true);
    useEffect(()=>{
        window.scrollTo({
            top:0,
            behavior: 'smooth',
          })
          fetch('https://mau-web-server.fly.dev/admin/get-alumni')
          .then(res=>{
            return res.json()
          })
          .then(
            data=>{
                setAlumni(data.message);
                setLoading(false)
                console.log(data.message)
            }
          )
    },[])
    return (
        <StyledContainer>
        <MyVideo title='MAU Alumni'
        content='The critical irreducible element is therefore learning whether in a 
        formal or in an informal way. Consequently, whenever learning takes place, 
        education has equally taken place.'
        source='https://res.cloudinary.com/nutscoders/video/upload/v1657108281/WhatsApp_Video_2022-07-04_at_9.43.53_PM_lohmle.mp4'
        />
        <div className='mainDean'>
                    <div className='mainDeanCont'>
                        <div className='deanPersonal'>
                       
                         
                           <div style={{
                     background:`url('https://radiologyseminars.co.uk/wp-content/uploads/2021/11/avatar-male.jpg')`,
                     backgroundRepeat:'no-repeat',
                     backgroundSize:'cover',
                     backgroundPosition:'center'
                     
                 }} className='myDean'>
                         <div className='myDeanCont'>
                         <h2>Dr. Adamu Alkali</h2>
                         <h4>Coordinator, Alumni</h4>
                         </div>
                           </div>
                          
                         
                            
                        </div>
                        <div className='deanWelcome'>
                            {/* <h3 style={{color:'black'}}>About {triger[0].facultyName}</h3> */}
                            <p> 
                            If you are a graduate of MAU we want to stay in touch with you! We are keen to foster a vibrant and active alumni community and need your participation to achieve that. The MAU Alumni Association is one that spans many countries. There are currently over 15,000 graduates who reside in over 17 countries worldwide. Whether you are interested in meeting other graduates in your part of the world, joining or setting up a local chapter or just staying in contact with the University, we are here to help you! We invite your contributions towards strengthening our Association and moving the Modibbo Adama University, Yola forward as Nigeria's best University.
                            </p>
                        </div>
                    </div>
                </div>
      
          
        <div className='galleryAlumni'>
        <Gallery/>
        <Gallery/>
        <Gallery/>
        <Gallery/>
        </div>
        </StyledContainer>
    )
}
