import React, { useEffect } from 'react'
import styled from 'styled-components'
import MyVideo from '../components/MyVideo';
import CampusCard from '../sub-components/CampusCard';

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
`;
export default function CampusScreen() {
    useEffect(()=>{
        window.scrollTo({
            top:0,
            behavior: 'smooth',
          })
    },[])
    return (
        <StyledContainer>
        <MyVideo title='Campus Life'
        content='The critical irreducible element is therefore learning whether in a 
        formal or in an informal way. Consequently, whenever learning takes place, 
        education has equally taken place.'
        source='https://res.cloudinary.com/nutscoders/video/upload/v1657108281/WhatsApp_Video_2022-07-04_at_9.43.53_PM_lohmle.mp4'
        />
        <div className='mainDean'>
                    <div className='mainDeanCont'>
                        <div className='deanPersonal'>
                       
                         
                           <div style={{
                     background:`url('https://media.gettyimages.com/photos/american-singer-actor-and-comedian-dean-martin-circa-1960-picture-id153078983?s=612x612')`,
                     backgroundRepeat:'no-repeat',
                     backgroundSize:'cover',
                     backgroundPosition:'center'
                     
                 }} className='myDean'>
                         <div className='myDeanCont'>
                         <h2>Meeeeeeee</h2>
                         <h4>Dean Meee</h4>
                         </div>
                           </div>
                          
                         
                            
                        </div>
                        <div className='deanWelcome'>
                            {/* <h3 style={{color:'black'}}>About {triger[0].facultyName}</h3> */}
                            <p> 
                            The critical irreducible element is therefore learning whether in a formal 
          or in an informal way. Consequently, whenever learning takes place, education
           has equally taken place.
In reality, there is no watertight division between formal education and the informal 
aspects of education. Sometimes, we find that even within formal education settings there
 are informal aspects. Those who pursue the informal aspects along with the formal become 
 complete products while those who are strictly 
concerned only with what is written out in the curricula end up as defective products.
                            </p>
                        </div>
                    </div>
                </div>
        {/* <div className='campusImage'>
         <div className='campusHead'>
        <div className='welcomeDean'>
        <h1>Welcome Message</h1>
          <p>
          The critical irreducible element is therefore learning whether in a formal 
          or in an informal way. Consequently, whenever learning takes place, education
           has equally taken place.
In reality, there is no watertight division between formal education and the informal 
aspects of education. Sometimes, we find that even within formal education settings there
 are informal aspects. Those who pursue the informal aspects along with the formal become 
 complete products while those who are strictly 
concerned only with what is written out in the curricula end up as defective products.
          </p>
        </div>
          
         </div>
        </div> */}
          {/* <div className='campusDetails'>
              <h1>THERE’S MORE TO LIFE THAN CLASS.</h1>
              <p>You’re not just choosing a school — you’re choosing a home. 
                  On MAU's beautiful campus you’ll find a diverse, welcoming community 
                  of students and faculty, plus opportunities to learn, 
                  lead, explore and give back, not to mention have fun.</p>
            <div className='moreCampusDetails'>
              <div>
                  <h3>Hostel Accomodation</h3>
                  <p>
                  One of the most important services delivered by the Student Affairs 
                  Department is arranging and providing not only acceptable but affordable 
                  accommodation. This is a duty of an outstanding importance especially to the 
                  first students who, in most cases, are complete ‘strangers’ in the environment.
                  </p>
              </div>


              <div>
                  <h3>Students’ Associations</h3>
                  <p>
                  One of the ways of helping students to appreciate the advantages of living and 
                  working together in society is to encourage them to associate with themselves and thus 
                  form associations. These associations are of many varieties and background. Some are based 
                  on communities, local governments or on states of origin. Others are of cultural, 
                  religious and social origins, going beyond consanguine and ancestral boundaries.
                  </p>
              </div>

              <div>
                  <h3>Medical Center</h3>
                  <p>
                  The Medical Centre was established to take care of the health needs of 
                  the staff, students and the close relatives of the staff. It is also one of the
                   avenues through which the University carries out a much needed 
                  community service to the rural population around the University.
                  </p>
              </div>


              <div>
                  <h3>The Student Union Government (SUG)</h3>
                  <p>
                  There is no doubt, whatsoever, that student unionism is desirable in the University. 
                  What the authorities expect, however, is mature and responsible leadership from members
                   of the student union executive, as they are a critical link between the students and the 
                   authorities. Towards this end, and in order to have responsible and visionary student 
                   leadership, the authorities have put in place a number of quality control measures for 
                   those who are aspiring to be student leaders. One of these measures is that such students 
                   must have made a minimum cumulative grade point average (CGPA) of 3.5. The authorities have 
                   always consciously 
                  encouraged students to join the body, and have always insisted on good quality leadership.
                  </p>
              </div>
            </div>
          </div> */}
          <h1>THERE’S MORE TO LIFE THAN CLASS.</h1>
        <CampusCard title='Accomodation' begin={true}/>
        <CampusCard title='Sports And Fitness'/>
        <CampusCard title='Students Union' begin={true}/>
        </StyledContainer>
    )
}
