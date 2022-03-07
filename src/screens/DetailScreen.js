import React, { useState } from 'react'
import styled from 'styled-components'
import {useParams} from 'react-router-dom'
import MyLinks from '../components/MyLinks';
const StyledContainer=styled.div`
margin-top: 130px;
padding: 20px;

.faculty-cont{
    min-height: 80vh;
    background-color: white;
    width: 100%;
    display: flex;
    flex-direction: column;

    .mainDean{
    display: flex;
    background-color:transparent;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    flex:2;
    .mainDeanCont{
     display: flex;
     flex-direction: row;
     width: 100%;
     background-color: transparent;
     .deanPersonal{
      width: 30%;
      background-color: transparent;
      display: flex;
      flex-direction: column;
      align-items: center;
      img{
          width: 250px;
          height: 250px;
          border-radius:50%;
      }
     }
     .deanWelcome{
      width: 70%;
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
    .deanStaff{
    display: flex;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    flex: 1;
    justify-content:space-evenly;
    align-items: center;
    .facultyStaff{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex-wrap: nowrap;
    }
    img{
        height: 70px;
        width: 70px;
        border-radius: 50%;
    }


    }
}
.departmentList{
    min-height: 50px;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    background-color: transparent;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
}
@media only screen 
and (min-device-width : 320px) 
and (max-device-width : 480px) {
    margin-top: 100px;
    padding: 0px;
    .departmentList{
        grid-template-columns: 1fr;
        grid-gap: 0px;
    }
    h3{
        margin-left: 0px;
        text-align: center;
    }
    .faculty-cont{
    width: 90%;
    .mainDean{
    display: flex;
    width: 90%;
    .mainDeanCont{
     flex-direction:column;
     .deanPersonal{
      width: 100%;
      background-color: transparent;
      display: flex;
      flex-direction: column;
      align-items: center;
      img{
          width: 250px;
          height: 250px;
          border-radius:50%;
      }
     }
     .deanWelcome{
      width: 100%;
      min-height: 100%;
      background-color:transparent;
      p{
          text-align: justify;
          margin-right: 20px;
          margin-left: 20px;
      }
     }
    }

    }
    .deanStaff{
    display: flex;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    flex-direction:column;
    justify-content: center;
    .facultyStaff{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex-wrap: nowrap;
        margin-bottom: 20px;
        border-bottom: 0.5px solid lightgray;
    }

    }
    }
}
`;
const myData=[
    {
        id:'002',
        facultyName:'Agriculture',
        welcomeMessage:`The School of Agriculture and Agricultural 
        Technology is one of the School of the University. It was 
        established in 1989 and became fully functional in 1990.  
        now has eight departments that award Bachelor of Technology Degree in 
        Agricultural Economics and Extension, Animal Science and Range Management, 
        Crop Production and Horticulture, Crop Protection, Fisheries, Food Science and 
        Technology, Forestry and Wildlife Management and Soil Science. In the eight academic departments, there are 84 academic staff in the following cadre.
        Professors = 14
        Associate Professors = 08
        Senior Lecturers = 23
        Others = 45`,
        welcomeHeading:'Welcome to School of Agriculture and Agricultural Technology',
        deanName:'Prof Ahmad Ahijo',
        deanImage:'https://res.cloudinary.com/nutscoders/image/upload/v1646293738/env_ur7y2b.jpg',
        staffList:[
            {
                name:'Mr. Adamu Kefas',
                position:'CTO Agric department',
                image:'https://res.cloudinary.com/nutscoders/image/upload/v1646293738/env_ur7y2b.jpg'
            },
            {
                name:'Mr. Adamu Kefas',
                position:'CTO Agric department',
                image:'https://res.cloudinary.com/nutscoders/image/upload/v1646293738/env_ur7y2b.jpg'
            },
            {
                name:'Mr. Adamu Kefas',
                position:'CTO Agric department',
                image:'https://res.cloudinary.com/nutscoders/image/upload/v1646293738/env_ur7y2b.jpg'
            },
            {
                name:'Mr. Adamu Kefas',
                position:'CTO Agric department',
                image:'https://res.cloudinary.com/nutscoders/image/upload/v1646293738/env_ur7y2b.jpg'
            }
        ],
        departmentList:['Department  of Fisheries',
        'Department  of Animal Science and Range Management',
        'Department  of Crop Production',
        'Department  of Food Science and Technology',
        'Department  of Agricultural Economics and Extension',
        'Department  of Crop Production and Horticulture',
        'Department  of Soil Science '
                     ]
    },

    {
        id:'003',
        facultyName:'Engineering',
        welcomeMessage:`The School of Engineering and Engineering Technology (SEET) was formally established in October, 1990 with an initial intake of 60 students at the 200 level.  Since then the student intake and enrolment have grown 
        rapidly with the student intake for the current session, 2014/2015 put at 
        about 1,184.The NUC Accreditation for all the programmes in the School had expired 
        by 2010 and presently, we are preparing to re- accredit our entire programme this year (2015). 
        Similarly, the Department of Chemical, Electrical and Electronics and 
        Mechanical Engineering had their COREN Accreditation expired by 2015, and are preparing to 
        re-accredited their programmes too. While Agricultural and Environmental and 
        Civil Engineering Department’s COREN Accreditation will expire by 2017. 
        `,
        welcomeHeading:'Welcome to School of Engineering and Engineering Technology',
        deanName:' Prof.  S.A. Kareem  Dean',
        deanImage:'https://res.cloudinary.com/nutscoders/image/upload/v1646293738/env_ur7y2b.jpg',
        staffList:[
            {
                name:'Mr. Adamu Kefas',
                position:'CTO Agric department',
                image:'https://res.cloudinary.com/nutscoders/image/upload/v1646293738/env_ur7y2b.jpg'
            },
            {
                name:'Mr. Adamu Kefas',
                position:'CTO Agric department',
                image:'https://res.cloudinary.com/nutscoders/image/upload/v1646293738/env_ur7y2b.jpg'
            },
            {
                name:'Mr. Adamu Kefas',
                position:'CTO Agric department',
                image:'https://res.cloudinary.com/nutscoders/image/upload/v1646293738/env_ur7y2b.jpg'
            },
            {
                name:'Mr. Adamu Kefas',
                position:'CTO Agric department',
                image:'https://res.cloudinary.com/nutscoders/image/upload/v1646293738/env_ur7y2b.jpg'
            }
        ],
        departmentList:[
        'Department of Agricultural &Env. Engineering',
        'Department of Chemical Engineering',
        'Department of Civil Engineering',
        'Department of Electrical Electronic',
        'Department of Mechanical Engineering',
                     ]
    },
    {
        id:'004',
        facultyName:'Life Science',
        welcomeMessage:`
        The formerly School of Pure and Applied Sciences (SPAS) was 
        the oldest School in the University, having been established in 
        1981 at the inception of the University.  It was then known as School of
         Sciences with four (4) departments viz: - Biological Sciences, Chemistry, 
         Mathematics/Statistics and Physics.  This arrangement existed till June 1984 when 
         the University was merged with the University of Maiduguri and
         was renamed Modibbo Adama College, Yola. In 1988, the College was 
         de-merged and subsequently regained its former status and name 
         (Federal University of Technology, Yola).  This resuled in the name of the 
         School being changed to the School of Science and Technology Education (SSTE)
          with the creation of the Department of Technology Education to now make a total of 
          five (5) departments.  The number of departments increased to six during the 1989/90 
          session when the Department of Geology originally located in the School of Environmental 
          Sciences (SES) was moved to SSTE.  The Department of Biochemistry and Microbiology were 
          created in the 1996/97 session.  Hitherto,
          they were programmes in the then Department of Biological Sciences. 
        `,
        welcomeHeading:'Welcome to School of Life Science',
        deanName:' Professor Abdullahi Wurochekke',
        deanImage:'https://res.cloudinary.com/nutscoders/image/upload/v1646293738/env_ur7y2b.jpg',
        staffList:[
            {
                name:'Mr. Adamu Kefas',
                position:'CTO Agric department',
                image:'https://res.cloudinary.com/nutscoders/image/upload/v1646293738/env_ur7y2b.jpg'
            },
            {
                name:'Mr. Adamu Kefas',
                position:'CTO Agric department',
                image:'https://res.cloudinary.com/nutscoders/image/upload/v1646293738/env_ur7y2b.jpg'
            },
            {
                name:'Mr. Adamu Kefas',
                position:'CTO Agric department',
                image:'https://res.cloudinary.com/nutscoders/image/upload/v1646293738/env_ur7y2b.jpg'
            },
            {
                name:'Mr. Adamu Kefas',
                position:'CTO Agric department',
                image:'https://res.cloudinary.com/nutscoders/image/upload/v1646293738/env_ur7y2b.jpg'
            }
        ],
        departmentList:[
        'Department of Biochemistry',
        'Department of Biotechnology',
        'Department of Biological Science',
        'Department of Science Laboratory Technology',
        'Department of Microbiology',
        'Department of Plant Science',
        'Department of Zoology'
                     ]
    },

    {
        id:'005',
        facultyName:'Physical Science',
        welcomeMessage:`
        The formerly School of Pure and Applied Sciences (SPAS) was the oldest School 
        in the University, having been established in 1981 at the inception of the University.  
        It was then known as School of Sciences with four (4) departments viz: - Biological Sciences, 
        Chemistry, Mathematics/Statistics and Physics.  This arrangement existed till June 1984 when 
        the University was merged with the University of Maiduguri and was renamed Modibbo
         Adama College, Yola. In 1988, the College was de-merged and subsequently regained 
         its former status and name (Federal University of Technology, Yola).  This resuled 
         in the name of the School being changed to the School of Science and Technology Education 
         (SSTE) with the creation of the Department of Technology Education to now make a total of 
         five (5) departments.  The number of departments increased to six during the 1989/90 
         session when the Department of Geology originally located in the School of Environmental 
         Sciences (SES) was moved to SSTE.  The Department of Biochemistry and Microbiology were created in the 1996/97 session.  
         Hitherto, they were programmes in the then Department of Biological Sciences.
        `,
        welcomeHeading:'Welcome to School of Physical Sciences',
        deanName:'Prof. B.A. Aliyu',
        deanImage:'https://res.cloudinary.com/nutscoders/image/upload/v1646293738/env_ur7y2b.jpg',
        staffList:[
            {
                name:'Mr. Adamu Kefas',
                position:'CTO Agric department',
                image:'https://res.cloudinary.com/nutscoders/image/upload/v1646293738/env_ur7y2b.jpg'
            },
            {
                name:'Mr. Adamu Kefas',
                position:'CTO Agric department',
                image:'https://res.cloudinary.com/nutscoders/image/upload/v1646293738/env_ur7y2b.jpg'
            },
            {
                name:'Mr. Adamu Kefas',
                position:'CTO Agric department',
                image:'https://res.cloudinary.com/nutscoders/image/upload/v1646293738/env_ur7y2b.jpg'
            },
            {
                name:'Mr. Adamu Kefas',
                position:'CTO Agric department',
                image:'https://res.cloudinary.com/nutscoders/image/upload/v1646293738/env_ur7y2b.jpg'
            }
        ],
        departmentList:[
        'Department of Chemistry',
        'Department of Geology',
        'Department of Computer Science',
        'Department of Geology',
        'Department of Mathematics',
        'Department of Physics',
        'Department of Statistics &Operations Research'
                     ]
    },


    {
        id:'006',
        facultyName:'Environmental Science',
        welcomeMessage:`
        The School of Environmental Sciences was established in October 1988 with Professor
         G.G.R. Thambyapillay as its first Dean.  The Department of Geography was the first to 
         take-off with six academic staff and thirty-five students. During the 1989/90 Academic
          Session the Departments of Urban and Regional Planning (URP) and Geology formally took 
          off and a year later the Department of Surveying was established. The student population 
          in the school rose to 2,100.  Subsequently, the Departments of Architecture, Industrial 
          Design and Building were established in 1997, brings the number of Departments in the School 
          to six.  At present the School has a total of 97 academic staff and 2,100 Undergraduate and 
          189 Postgraduate students.  The School plans to establish new programmes in Estate Management, 
        Quantity Surveying, Tourism and Hospitality Management, and Meteorology shortly.
        `,
        welcomeHeading:'Welcome to School of Environmental Sciences',
        deanName:'Prof. Llesami',
        deanImage:'https://res.cloudinary.com/nutscoders/image/upload/v1646293738/env_ur7y2b.jpg',
        staffList:[
            {
                name:'Mr. Adamu Kefas',
                position:'CTO Agric department',
                image:'https://res.cloudinary.com/nutscoders/image/upload/v1646293738/env_ur7y2b.jpg'
            },
            {
                name:'Mr. Adamu Kefas',
                position:'CTO Agric department',
                image:'https://res.cloudinary.com/nutscoders/image/upload/v1646293738/env_ur7y2b.jpg'
            },
            {
                name:'Mr. Adamu Kefas',
                position:'CTO Agric department',
                image:'https://res.cloudinary.com/nutscoders/image/upload/v1646293738/env_ur7y2b.jpg'
            },
            {
                name:'Mr. Adamu Kefas',
                position:'CTO Agric department',
                image:'https://res.cloudinary.com/nutscoders/image/upload/v1646293738/env_ur7y2b.jpg'
            }
        ],
        departmentList:[
        'Department of Architecture',
        'Department of Building',
        'Department of Geography',
        'Department of Industrial Design',
        'Department of Geoinformatics',
        'Department of Urban&Regional Planning'
                     ]
    },


    {
        id:'001',
        facultyName:'Management & Information Technology',
        welcomeMessage:`
        The School of Management and Information Technology was established in 
        1990 to offer undergraduate and postgraduate degrees in three main departments, 
        namely, the Department of Information Technology, the Department of Management 
        Technology and the Department of Economics and Finance. However, at the moment, the 
        School operates Department of Accountancy, Banking & Finance, Economics, Information and 
        Management Technology and Library and Information Science. The first sets of students were
         admitted in the 2000/2001 session into five programmes as follows;-
        `,
        welcomeHeading:'Welcome to School of Management and Information Technology',
        deanName:'Prof. Llesami',
        deanImage:'https://res.cloudinary.com/nutscoders/image/upload/v1646293738/env_ur7y2b.jpg',
        staffList:[
            {
                name:'Mr. Adamu Kefas',
                position:'CTO Agric department',
                image:'https://res.cloudinary.com/nutscoders/image/upload/v1646293738/env_ur7y2b.jpg'
            },
            {
                name:'Mr. Adamu Kefas',
                position:'CTO Agric department',
                image:'https://res.cloudinary.com/nutscoders/image/upload/v1646293738/env_ur7y2b.jpg'
            },
            {
                name:'Mr. Adamu Kefas',
                position:'CTO Agric department',
                image:'https://res.cloudinary.com/nutscoders/image/upload/v1646293738/env_ur7y2b.jpg'
            },
            {
                name:'Mr. Adamu Kefas',
                position:'CTO Agric department',
                image:'https://res.cloudinary.com/nutscoders/image/upload/v1646293738/env_ur7y2b.jpg'
            }
        ],
        departmentList:[
        'Department of Accountancy',
        'Department of Banking & Finance',
        'Department of Economics',
        'Department of Information Technology',
        'Department of Library & Information Science',
        'Department of Management Technology'
                     ]
    },

    {
        id:'007',
        facultyName:'Technology & Science Education',
        welcomeMessage:`
        On behalf of the School of Technology and Science Education, 
        I welcome you to the webpage of our school that has witnessed 
        unprecedented growth in programmes and manpower within the last few years.
        The vision and mission of the School is in line with the motto of Modibbo 
        Adama University of Technology (MAUTECH) which is Technology and Development.  
        In line with these the School produces highly competent teachers with the requisite 
        knowledge and skills that is propelling the school to become a centre of Excellence for 
        training of Science, Vocational and Technology Education teachers.


        `,
        welcomeHeading:'Welcome to School of Technology and Science Education',
        deanName:'Professor Christopher Ademola John, PhD',
        deanImage:'https://res.cloudinary.com/nutscoders/image/upload/v1646293738/env_ur7y2b.jpg',
        staffList:[
            {
                name:'Mohammed Tukur Aliyu ',
                position:'School Officer',
                image:'https://res.cloudinary.com/nutscoders/image/upload/v1646293738/env_ur7y2b.jpg'
            },
            {
                name:'Florence Y. Benshep',
                position:'Secretary',
                image:'https://res.cloudinary.com/nutscoders/image/upload/v1646293738/env_ur7y2b.jpg'
            },
            {
                name:'Sulyman Babatunde  ',
                position:'Admin Assistant',
                image:'https://res.cloudinary.com/nutscoders/image/upload/v1646293738/env_ur7y2b.jpg'
            },
            {
                name:' Mohammed Buba Jalo',
                position:'Asst. Executive Officer',
                image:'https://res.cloudinary.com/nutscoders/image/upload/v1646293738/env_ur7y2b.jpg'
            }
        ],
        departmentList:[
        'Department of Science Education',
        'Department of Technology Education '
                     ]
    },

    {
        id:'008',
        facultyName:'College Of Medical Science',
        welcomeMessage:`
        Although the University has been in existence since 1981, and its dream to 
        have a College of Medical Sciences has been on for some time to enable it improve 
        access to medical education to her catchment area and beyond, the zeal and efforts 
        put in place by the University and the host community in the last 3 years or so has been most 
        remarkable.
        This culminated in the University Governing council in 2018 setting-up a committee of 
        respected members of the University and the Federal Medical centre Yola under the able 
        leadership of the then Deputy Vice Chancellor (Administrative matters) Professor Shehu A. 
        Iya to carry out a feasibility study and advise the Council appropriately. The other members
         of the committee were Professor Abubakar Awwal Mohammed (Medical Director, FMC Yola), the 
         current Deputy Vice- Chancellor Administration Prof. M. Inuwa Jaafaru, Prof (Director academic
             Planning).
        `,
        welcomeHeading:'Welcome To The College Of Medical Science',
        deanName:'Professor Adamu Girei Bakari',
        deanImage:'https://res.cloudinary.com/nutscoders/image/upload/v1646293738/env_ur7y2b.jpg',
        staffList:[
            {
                name:'Mohammed Tukur Aliyu ',
                position:'School Officer',
                image:'https://res.cloudinary.com/nutscoders/image/upload/v1646293738/env_ur7y2b.jpg'
            },
            {
                name:'A. Ibrahim Ahmadu Ribadu BA(UNIMAID).',
                position:'Secretary',
                image:'https://res.cloudinary.com/nutscoders/image/upload/v1646293738/env_ur7y2b.jpg'
            },
            {
                name:'Sulyman Babatunde  ',
                position:'Admin Assistant',
                image:'https://res.cloudinary.com/nutscoders/image/upload/v1646293738/env_ur7y2b.jpg'
            },
            {
                name:' Mohammed Buba Jalo',
                position:'Asst. Executive Officer',
                image:'https://res.cloudinary.com/nutscoders/image/upload/v1646293738/env_ur7y2b.jpg'
            }
        ],
        departmentList:[
        'Department of MBBS',
    
                     ]
    },


    


    
    
]
export default function DetailScreen() {
    const {id}=useParams()
    const filteredArray=myData.filter(data=>data.id==id)
    console.log(filteredArray)
    useState(()=>{
        window.scrollTo({
            top:0,
            behavior: 'smooth',
          })
          console.log(id)
    },[])
    return (
        <StyledContainer>
            <div className='faculty-cont'>
             <div className='mainDean'>
                 <div className='mainDeanCont'>
                     <div className='deanPersonal'>
                     <h3>Faculty Of {filteredArray[0].facultyName} </h3>
                         <img src={filteredArray[0].deanImage}/>
                         <h4>{filteredArray[0].deanName}</h4>
                         <p>Dean Faculty Of {filteredArray[0].facultyName}</p>
                     </div>
                     <div className='deanWelcome'>
                         <h3>{filteredArray[0].welcomeHeading}</h3>
                         <p>{filteredArray[0].welcomeMessage}</p>
                     </div>
                 </div>
             </div>
             {/* <h3 style={{
                 textAlign:'center',
                 color:'#D07348'
             }}>Faculty Staff</h3>
             <div className='deanStaff'>
              {
                  filteredArray[0].staffList.map(staf=>(
                      <div key={staf.name} className='facultyStaff'>
                        <img src={staf.image}/>
                       <h4>{staf.name}</h4>
                       <p>{staf.position}</p>
                      </div>
                  ))
              }
             </div> */}
             <h3 style={{
                 textAlign:'center',
                 color:'#D07348'
             }}>List Of Departments</h3>
             <div className='departmentList'>
             {
                 filteredArray[0].departmentList.map(dep=>(
                     <MyLinks route={`/course/${dep}`} key={dep} link={dep}/>
                 ))
             }
             </div>
            </div>
        </StyledContainer>
    )
}









