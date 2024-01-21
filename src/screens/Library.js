
import React, { useContext, useEffect, useState} from 'react'
import styled from 'styled-components'
import EmptyIcon from '@mui/icons-material/HourglassEmpty'
import librarian from '../assets/libb.jpeg'
import { Link,useNavigate, useParams} from 'react-router-dom';
import './library.css'
import reasdingPic from '../assets/edu.png'
import readingRoom from '../assets/car4.jpg'
import computerRoom from '../assets/ComputerRooms.jpg'
import photocopy from '../assets/photocopy.jpg'
import printer from '../assets/printer.jpg'


const StyledContainer=styled.div`
margin-top: 110px;
min-height: 50vh;
width: 100%;
background-color: white;
margin-bottom: 30px;
.emptyList{
    min-height: 50vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
h5{
    width: 70%;
    margin-right: auto;
    margin-left: auto;
    color: white;
    background-color:rgb(66, 186, 150);
    text-align: center;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.5);

}
.depTerms{
    width: 95%;
    margin-right: auto;
    margin-left: auto;
    margin-top: 20px;
    display: flex;
    img{
        width: 40%;  
    }
    .mainReq{
        width: 60%;
        margin-right: auto;
    margin-left: auto;
    display: flex;
    flex-direction: column;
    h4{
        text-align: center;

    }
    p{
        text-align: justify;
    }

    }
}
.hodDetails{
    display:flex;
    flex-direction: row;
    width: 95%;
    margin-right: auto;
    margin-left: auto;
    margin-top: 20px;
    min-height: 70vh;
    .hodImage{
        height: 400px;
        width: 462;
        background-color:white;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        border: 1px solid rgba(217, 217, 217, 1);
        position:relative ;
        .dirName{
        position: absolute;
        bottom:0;
        width:100%;
        min-height:70px;
        background-color:rgba(255,255,255,0.8);
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        }
        img{
            height:400px;
            width: 430px;
           
        }
        span.dirMain{
            width: 100%;
            text-align: center;
            font-weight: bold;
            font-size: 20px;
            
        }
       
    }
    .depMission{
        flex: 1;
        background-color: white;
        position: relative;
        .myBtn{
            display: flex;
            justify-content: space-around;
        }
        h4{
            width: 100%;
            text-align: center;
        }
        p{
            width: 80%;
            text-align: justify;
            margin-left: auto;
            margin-right: auto;
            
        }
       
    }

}
.depHead{
    width: 100%;
    min-height:70vh;
    display: flex;
    flex-direction: column;
    justify-content:flex-end;
    color:white;
    text-transform: uppercase;
    font-weight: bolder;
    background:linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('https://res-console.cloudinary.com/nibras/thumbnails/v1/image/upload/v1705835210/bGlicmFyeTFfbDB4Y3Ni/grid_landscape');
   background-repeat:no-repeat;
   background-size: cover;
  background-position:top;
  h2{
    background-color:rgba(0,0,0,0.6);
    margin-top:auto ;
    text-align:left ;
    margin:0px ;
    height:50px;
    padding:10px ;
   
  }
    
}




.depVisonMision{
    min-height:240px;
    width: 98%;
    margin-left: auto;
    margin-right: auto;
    background-color:rgba(226, 223, 214, 0.5);
    display: flex;
    flex-direction:row;
    margin-top: 20px;
    position: relative;
    
    .depVis{
        width: 45%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 10px;
        z-index: 100;
        h1{
            text-align: center;
            color: rgba(160, 50, 50, 1);
        }
        p{
            text-align: justify;
            margin-left: 10px;
            margin-right: 10px;
        }
    }
    .wavy{
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            background-color: transparent;
            z-index: 20;
        }
}

.depProg{
    margin-top: 20px;
}
.depStaff{
    min-height: 300px;
    width: 100%;
    display: grid;
    padding: 5px;
    grid-gap: 5px;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 20px;
    .depIndStaff{
     height:120px;
     width: 80%;
     background-color: white;
     box-shadow: 0px 0px 1px rgba(0,0,0,0.5);
     display: flex;
     flex-direction: row;
     align-items: center;
     margin-top: 20px;
     cursor: pointer;
    
     h4,p{
         text-align: center;
     }
     .stfDepCon{
         flex: 1;
         margin-left: 10px;
         display: flex;
         flex-direction: column;
         span{
             text-align: center;
         }
         .stfH{
             font-size: 20px;
             color: rgba(160, 50, 50, 1);
             font-weight: bold;
         }
     }
     img{
         width: 100px;
         height:100px;
         border-radius: 100%;
         margin-left: 5px;
     }

    }
}
.servicesMain{
    min-height:50vh;
    width:100%;
    display:grid;
    grid-template-columns:1fr 1fr 1fr;
    margin-top:30px;
    .servicesList{
        grid-column:1/2;
        background-color:white;
        min-height:100px;
        width:100%;
        padding:20px ;
        overflow:hidden ;
    }
    .servicesData{
        grid-column:2/4;
        background-color:white;
        min-height:100px;
        width:90%;
        padding:20px ;
        display:flex;
        flex-direction:column;
       /* align-items:center ; */
        span{
            text-align:center;
            font-weight:bold;
            font-size:20px;
            width:100%;
        }
      .carContServ{
        min-width:100%;
        min-height:65vh;
       img{
        min-width:100%;
        height:55vh ;
       }
      }
    }

}

@media only screen 
and (min-device-width : 320px) 
and (max-device-width : 480px) {
    margin-top: 100px;
margin-bottom: 30px;
h5{
    width: 90%;

}
.depTerms{
    width: 100%;
    flex-direction: column;
    img{
        width: 100%;  
    }
    .mainReq{
        width: 90%;
    h4{
        text-align: center;

    }
    p{
        text-align: justify;
    }

    }
}
.hodDetails{
    display: flex;
    flex-direction:column;
 
    .hodImage{
        width: 100%;
      

    }
    .depMission{
        width: 100%;
        h4{
            width: 100%;
          
        }
        p{
            width: 95%;
            
            
        }
    }

}
.depHead{
 
   h2.depHeading{
       text-align: center;
       color: white;
   }
   span.depheading{
    font-size:12px;
    color: black
   }
}

.depVisonMision{
    min-height:240px;
    width: 98%;
    margin-left: auto;
    margin-right: auto;
    background-color:rgba(226, 223, 214, 0.5);
    display: flex;
    flex-direction:column;
    margin-top: 20px;
    position: relative;
    
    .depVis{
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 10px;
        z-index: 100;
        h1{
            text-align: center;
            color: rgba(160, 50, 50, 1);
        }
        p{
            text-align: justify;
            margin-left: 10px;
            margin-right: 10px;
        }
    }
    .servicesMain{
    min-height:50vh;
    width:100%;
    display:grid;
    grid-template-columns:1fr;
    margin-top:30px;
    .servicesList{
        grid-column:1/2;
        background-color:white;
        min-height:100px;
        width:100%;
        padding:0px ;
        overflow:hidden ;
    }
    .servicesData{
        grid-column:1/2;
        background-color:white;
        min-height:100px;
        width:90%;
        padding:0px ;
        display:flex;
        flex-direction:column;
       /* align-items:center ; */
        span{
            text-align:center;
            font-weight:bold;
            font-size:20px;
            width:100%;
        }
      .carContServ{
        min-width:100%;
        min-height:65vh;
       img{
        min-width:100%;
        height:55vh ;
       }
      }
    }

}
}
}

`;

export default function Library() {
    const [department,setDep]=useState([])
    const navigate=useNavigate()
    const [loading,setLoading]=useState(false)
    const {id}=useParams()
    const loadData=(id)=>{
   
        fetch(`https://mau-web-server.fly.dev/admin/get-single-department?departmentId=${id}&activity=faculty`)
        .then(res => {
            res.json()
                .then(data => {
                  setDep(data.message)
                  setLoading(false)
                  console.log(data,"+++++++++")
                })
        }).catch(err=>{
            
        })
    }
    useEffect(()=>{
        window.scrollTo({
            top:0,
            behavior: 'smooth',
          })
         
        loadData('b9DyaAUU')
       
    },[])
    return (
        <StyledContainer>
           {
    department.length>0&&(
        <>
        <div className='depHead'>
 <h2 style={{color:'white'}} className='depHeading'>Ibrahim Babangida Library</h2>
 {/* <span>The University Library is committed to the provision of quality library and information resources and services in support of the teaching, learning, research and creative work in the university.  This is achieved through the liberalization and democratization of access to recorded knowledge in print and electronic formats as well as on the Internet with a strong drive towards library Automation.
</span> */}
</div>
<div className='hodDetails'>
    {
        department[0].hod!=null&&(
        <div className='hodImage'>
            {/* <img src={`https://res.cloudinary.com/nutscoders/image/upload/v1657102678/WhatsApp_Image_2022-07-06_at_11.17.29_AM_u6bz04.jpg`} alt='HOD'/>  */}
            <img src={librarian} alt='building' />
            <div className='dirName'>
                <span className='dirMain'>Dr. Tukur Abba</span>
                <span>LIBRARIAN</span>
                <span>librarian@mau.edu.ng</span>
            </div>
           
            
     </div>
        )
    }

 <div className='depMission'>
     <p style={{color:'black',lineHeight:'30px'}}>
     The University Library is committed to the provision of quality library and information resources and services in support of the teaching, learning, research and creative work in the university.  This is achieved through the liberalization and democratization of access to recorded knowledge in print and electronic formats as well as on the Internet with a strong drive towards library Automation.

     </p>
     {/* {
         department[0].programs.length>0&&(
            department[0].programs.map(prg=>(
                <MyDepList key={prg.name} list={prg.admissionRequirement} title={prg.name} content={prg.mission} requirements=''/>
            ))
         )
     } */}

    
   
 </div>
</div>



        </>
    )
}
{
    department.length==0&&(
        <div className='emptyList'>
            <EmptyIcon style={{
        width: 50,
        height:50
    }}/>
    <h4>loading.....</h4>
        </div>
    )
}




<div>
    <div className='Opening-hours-container'>
        <div>
        <div className='E-Resources'>
                <h1>E-Resources</h1>
                <div>
                    <Link to='/oer'><li>Open Educational Resources</li></Link>
                  <li>  Directory of Open Access Databases</li>
                    <li>Directory of Open Access journals</li>
                    <li>University Subscribed Databases</li>
                    <li>Theses and Dissertations</li>
                    <li>Newspapers and Magazines</li>

                </div>
            </div>
        </div>

        <div>
        <div className='depVis'>
    <h1>Opening Hours Semester Period</h1>
 <li>Monday – Saturday    -    8.00 a.m. – 10.00 p.m</li>
<li>Sundays   - 5.00 p.m. – 10.00 p.m.</li>
<li>Public Holidays   -    Closed</li>
</div>
        </div>

        <div>
        <div className='depVis'>
    <h1>Opening Hours Vacation Period</h1>
    <li>Monday – Saturday    -    8.00 a.m. – 06:00 p.m</li>
<li>Sundays   and public Holidays - Closed .</li>

</div> 
        </div>

    </div>
</div>

{/* Access our services new code  */}
        <div>
            <h1>Access Our Services</h1>
            <div className='Access-our-services-container'>
                <div>
                    <div><img src={readingRoom} alt='reading-rooms'/></div>
                    <div><h4>Reading Rooms</h4></div>
                    <div><span> The University libraries provide rooms for studying. 
                        Reading rooms are available to currently enrolled students at Modibbo Adama University, Yola.
                    </span></div>
                </div>

                <div>
                    <div><img src={computerRoom} alt='reading-rooms'/></div>
                    <div><h4>TRAINING CLASSES</h4></div>
                    <div><span> The Ibrahim Babangida Library has well equipped class-rooms. The library periodically arranges courses and meetings aimed at giving information about its own services.

                    </span></div>
                </div>

                <div>
                    <div><img src={photocopy} alt='reading-rooms'/></div>
                    <div><h4>LIBRARY COMPUTER TERMINALS</h4></div>
                    <div><span>  Library terminals can be used only for studying, reading and research, and their use is restricted to currently registered users in possession of Mautech University credentials. Users must login at the start of a work session.

                    </span></div>
                </div>

                <div>
                    <div><img src={printer} alt='reading-rooms'/></div>
                    <div><h4>WIRELESS ACCESS FROM WITHIN THE UNIVERSITY</h4></div>
                    <div><span> TThe Wi-Fi University network allows readers to access the internet using their own laptops or mobile devices. The service is restricted to current members of MAU and to members of other academic institutions
                    </span></div>
                </div>
                <div>
                    <div><img src={reasdingPic} alt='reading-rooms'/></div>
                    <div><h4>OFF-CAMPUS ACCESS</h4></div>
                    <div><span>  Many of the Ibrahim Babangida library databases, electronic journals, full-text articles and reference sources are available for off-campus.

                    </span></div>
                </div>

                <div>
                    <div><img src={printer} alt='reading-rooms'/></div>
                    <div><h4>REFERENCE SERVICES</h4></div>
                    <div><span> Ibrahim Babangida library provides help in finding your way around the collections, using our services optimally and learning effective research strategies..

                    </span></div>
                </div>

                <div>
                    <div><img src={photocopy} alt='reading-rooms'/></div>
                    <div><h4>​PRINTING AND PHOTOCOPYING SERVICES </h4></div>
                    <div><span>  Library has its own rules about photocopying, printing and (when possible) imaging services. Please refer to the contact person of the library.

                    </span></div>
                </div>

              
            </div>
            {/* <div className='E-Resources'>
                <h1>E-Resources</h1>
                <div>
                    <Link to='/oer'><li>Open Educational Resources</li></Link>
                  <li>  Directory of Open Access Databases</li>
                    <li>Directory of Open Access journals</li>
                    <li>University Subscribed Databases</li>
                    <li>Theses and Dissertations</li>
                    <li>Newspapers and Magazines</li>

                </div>
            </div> */}
        </div>



</StyledContainer>


    )
}


