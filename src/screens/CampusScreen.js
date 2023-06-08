import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import MyVideo from '../components/MyVideo';
import CampusCard from '../sub-components/CampusCard';
import Dean from '../assets/domy.jpeg'
import sport from '../assets/sport.jpg'
import hostel from '../assets/hostel.jpg'
import SUG from '../assets/student_union_banner.jpg'
import './Campus.css';


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
            margin-top:10px;
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
    flex-direction:column;
    flex:1;
    .mainDeanCont{
     display:flex;
     flex-direction: column;
     margin-top: 0px;
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
          justify-content: flex-start;
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
`;
export default function CampusScreen() {
    const[campusData, setcampusData] = useState([]);
    const[isloading, setLoading] = useState(true)
    useEffect(()=>{
        window.scrollTo({
            top:0,
            behavior: 'smooth',
          })
          fetch('https://mau-web-server.fly.dev/admin/get-campus-life')
          .then(res=>{
            return res.json()
          })
          .then(data=>{
            setLoading(false);
            setcampusData(data.message);
            // console.log(data.message);
          })
    },[])
    return (
        <StyledContainer>
        <MyVideo title='Campus Life'
        content='The critical irreducible element is therefore learning whether in a 
        formal or in an informal way. Consequently, whenever learning takes place, 
        education has equally taken place.'
        // source='https://youtu.be/wu4fF4D-JMo'
        source='https://res.cloudinary.com/nutscoders/video/upload/v1657108281/WhatsApp_Video_2022-07-04_at_9.43.53_PM_lohmle.mp4'
        />


        <div className='Campus-Life-Container'>
            {campusData && campusData.map((deanInfo)=>(
                <div className='Dean-container'>
                <div className='Dean-image-container'>
                    {/* <img src={deanInfo.dean.image} alt='' width='100%' height='300px'/><br></br> */}
                    <img src={Dean} alt='' width='100%' height='300px'/><br></br>
                    {/* <span>{deanInfo.dean.name}</span><br></br>
                    <span>{deanInfo.dean.rank}</span> */}
                      <span>Dean Name</span><br></br>
                    <span>Dean Student Affairs Division</span>
                </div>
                <div className='Dean-welcome-message-container'>
                    <p> There is no doubt, whatsoever, that student unionism is desirable in the University. 
                  What the authorities expect, however, is mature and responsible leadership from members
                   of the student union executive, as they are a critical link between the students and the 
                   authorities. Towards this end, and in order to have responsible and visionary student 
                   leadership, the authorities have put in place a number of quality control measures for 
                   those who are aspiring to be student leaders. One of these measures is that such students 
                   must have made a minimum cumulative grade point average (CGPA) of 3.5. The authorities have 
                   always consciously </p>
                </div>
            </div>
            ))}
            <div>
                <div>
                    <h2>Student Activities</h2>
                </div>
                <div className='Student-activities-card-container'>
                    <div className='Student-card'>
                        <div><img src={SUG} alt='' width='100%' height='300px'/></div>
                        <div><h4>Student Union Government</h4></div>
                        <div><p>There is no doubt, whatsoever, that student unionism is desirable in the University. 
                  What the authorities expect, however, is mature and responsible leadership from members
                   of the student union executive, as they are a critical link between the students and the 
                   authorities.</p></div>
                    </div>
                    <div className='Student-card'>
                        <div><img src={hostel} alt='' width='100%' height='300px'/></div>
                        <div><h4>Accomodation</h4></div>
                        <div><p>One of the most important services delivered by the Student Affairs Department is arranging and providing not only acceptable but affordable accommodation. This is a duty of an outstanding importance especially to the first students who, in most cases, are complete ‘strangers’ in the environment.</p></div>
                    </div>
                    <div className='Student-card'>
                        <div><img src={sport} alt='' width='100%' height='300px'/></div>
                        <div><h4>Sport & Fitness</h4></div>
                        <div><p>Our programs at MAU Yola are designed to offer you with information and guidance so that you can reach your full health potential. We provide a number of services to assist you in reaching your fitness goals and maintaining a healthy lifestyle. We have highly qualified fitness professionals on hand to help you achieve your health objectives.</p></div>
                    </div>

                </div>
            </div>

        </div>
        </StyledContainer>
    )
}
