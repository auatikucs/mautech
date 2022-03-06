import { Button } from '@mui/material';
import { createTheme,ThemeProvider } from '@mui/material/styles';
import React, { useState } from 'react'
import { useEffect } from 'react';
import styled from 'styled-components'
const imageUrl=require('../assets/mau.png')

const StyledContainer=styled.div`
.principals{
    width: 100%;
    min-height: 100vh;
    .selectPrincipal{
        display: flex;
        width: 80%;
        margin-left: auto;
        margin-right: auto;
        justify-content: space-around;
        margin-top: 20px;
       
    }
    .prinDetails{
        position: relative;
        .princImage{
            position: absolute;
            width: 50%;
            margin-left: 40px;
            min-height: 60vh;
            margin-top: 20px;
            box-shadow:0px 0px 10px rgba(0,0,0,0.5);
            border-radius: 20px;
            z-index: 1;
            background-repeat: no-repeat;
            background-position: top;
            background-size: cover;
            background-color: white;
            
          
         
        }
        .princProfile{
            position: absolute;
            width: 50%;
            margin-right: 40px;
            min-height: 60vh;
            background-color: white;
            box-shadow:0px 0px 10px rgba(0,0,0,0.5);
            border-radius: 20px;
            right: 0;
            z-index: 0;
            margin-top: 50px;
            p{
            width: 80%;
            text-align: justify;
            margin-left: auto;
            margin-right: 20px;
        }
        }


    }
}



min-height: 80vh;
width: 100%;
background-color:white;
margin-top: 130px;
display: flex;
flex-direction: column;
.mainAbout{
width: 100%;
min-height: 60vh;
background:rgba(208, 115, 72,0.8);
padding: 20px;
background-position: center;
background-repeat: no-repeat;
background-size: contain;
h1{
text-align: center;
color: white;
text-transform: uppercase;
}
p{
    width: 90%;
    text-align: justify;
    margin-left: auto;
    margin-right: auto;
    color: white;
}
.aboutWriteUp{
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    background-color: rgba(0,0,0,0.5);
    border-radius: 20px;

}

}

@media only screen 
and (min-device-width : 320px) 
and (max-device-width : 480px) {
    margin-top: 100px;



    .principals{
    width: 100%;
    min-height: 100vh;
    .selectPrincipal{
        display: flex;
        width: 95%;
      
       
    }
    .prinDetails{
        position: relative;
        .princImage{
            position: relative;
            width: 95%;
            background-position-y:0px;
            min-height: 60vh;
            margin-left:auto;
            margin-right: auto;
            z-index: 1;
            background-repeat: no-repeat;
           
            
          
         
        }
        .princProfile{
            position: relative;
            width: 95%;
            margin-right:auto;
            margin-left: auto;
            min-height: 60vh;
          
           
            margin-top: 20px;
            p{
            width: 95%;
            text-align: justify;
            margin-left: auto;
            margin-right: auto;
        }
        }


    }
}



    .mainAbout{
     width: 100%;
     padding: 0px;
     margin-top: 20px;
     background-position: top;
     .aboutWriteUp{
         width: 95%;
     }
    }
}
`;
export default function AboutScreen() {

    useEffect(()=>{
        window.scrollTo({
            top:0,
            behavior: 'smooth',
          })
    },[])
  const [currentIndex,setCurrent]=useState(0)
  const myData=[
      {
          name:'Prof. ABDULLAHI LIMAN TUKUR',
          image:`https://res.cloudinary.com/nutscoders/image/upload/v1646496506/VC-removebg-preview_zshkhs.png`,
          history:` Prof. Abdullahi Liman Tukur was Born on 8th April, 
          1961 at Kilbawo Ward of Jada Local Government Area of Adamawa State, 
          Professor Tukur attended Senior (now Jada 1) Primary School, Jada from 1968 to 1974. 
          He proceeded to Government Secondary School Ganye, from 1974 to 1979. Between 1979 and 
          1981, Professor Tukur attended the School of General Studies, Kano. Subsequently in 1981 
          pursued a degree in Geography at the Bayero University Kano, where he graduated with
           a Bachelor of Science degree in Geography in 1984. His quest for additional qualifications 
           fuelled by a burning desire to acquire knowledge made him proceed to the University of
            Maiduguri for his Master’s degree in Resources and Development in 1988 and later the 
            University of Jos where he bagged a PhD in Environmental and Resources Planning in 1997. 
            Professor Tukur later attended Durham University, United Kingdom, for a six months certificate
           course in Remote Sensing (RS) and Geographic Information System (GIS) in 1993.`,
          resource:``
      },
      {
        name:'Prof M. Inuwa Ja’afaru',
        image:`https://res.cloudinary.com/nutscoders/image/upload/v1646496218/DVC_ADMIN-removebg-preview_z63x0a.png`,
        history:`Prof Muhammad Inuwa Ja'afaru was born on 17th March, 1965 in Jalingo Local
         Government Area of Taraba State. He joined the services of the then Federal University of 
         Technology Yola (FUTY) on 15th April 1994 as an Assistant Lecturer with the Department of 
         Microbiology and rose through the ranks to become a Professor of Environmental Microbiology 
         in 2017.
        Prof Ja'afaru had his early education at Government Secondary School, Funtua
         between 1976 – 1981, from there he proceeded to the College of Preliminary Studies,
          Yola from 1981 –1984, His quest to further education took him to He also attended the 
          Federal College of Veterinary and Medical  Laboratory Technology NVRI Vom 1190  - 1992 
          for a Diploma in Medical Laboratory Science. Ahmadu Bello University, Zaria 1984 –1987 where 
          he obtained Bachelor of Science (B.Sc.) (Hons.) Microbiology. Between 1995 – 1997, he 
          proceeded to the University of Ibadan for Master of Science (M.Sc.) Microbiology, he later 
          returned to the same University of Ibadan 
        from 2003 – 2008 for Doctor of Philosophy (Ph.D) Microbiology.`,
        resource:``
    },
    {
        name:'dVc',
        image:`https://res.cloudinary.com/nutscoders/image/upload/v1646497111/DVC_ACAD-removebg-preview_ugwa9c.png`,
        history:`Professor Mohammed Musa Malgwi is the seventh (7th) substantive Deputy
         Vice-Chancellor (Academics) of tver he Modibbo Adama University Yola, He was elected 
         on Tuesday 17th September, 2019 by the University Senate.
        The Professor of Cytogenetic and Cytotaxonomy replaces Professor 
        Abraham Okolo whose tenure expired in August 2019.
        Professor M. M. Malgwi has put in 35years of teaching and research in 
        the University system.  He has to his credit 38 scholarly papers published in
         journals of his area of specialization within and outside the Country.  He also 
         co-authored two 
        Biology text books and has also authored two book chapters.
        The new DVC (Academics) hails from Garkida in Gombi Local Government Area of 
        Adamawa State, Nigeria.  He holds a Bachelor of Sciences (Botany) Degree from
         University of Maiduguri and M.Sc and Ph.D from Ahmadu Bello University, Zaria.
        He has served in various Committees both in MAU Yola and A.B.U. Zaria.  Professor
         Malgwi has served as Dean School of Pure and Applied Sciences twice.`,
        resource:``
    }
  ]
    const theme = createTheme({
        palette: {
          primary: {
            light: '#d07348',
            main: '#d07348',
            dark: '#d07348',
            contrastText: '#fff',
          },
          secondary: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#000',
          },
        },
      });
    return (
        <ThemeProvider theme={theme}>
        <StyledContainer>

        <div className='principals'>
         <div className='selectPrincipal'>
         <Button onClick={()=>{
             setCurrent(0)
         }} variant={currentIndex==0?'contained':'outlined'}>Vc's Profile</Button>
         <Button  onClick={()=>{
             setCurrent(1)
         }} variant={currentIndex==1?'contained':'outlined'}>DVC ADM. Profile</Button>
         <Button  onClick={()=>{
             setCurrent(2)
         }} variant={currentIndex==2?'contained':'outlined'}>DVC ACD. Profile</Button>
         </div>


         <div className='prinDetails'>
           <div style={{
               backgroundImage: "url("+`${myData[currentIndex].image}` + ")"
           }} className='princImage'>
           </div>
           <div className='princProfile'>
             <p>
            {myData[currentIndex].history}
             </p>
             <Button style={{
                 marginLeft:10,
                 marginBottom:20
             }} variant='contained'>Download CV</Button>
           </div>
         </div>
        </div>




            <div style={{
                backgroundImage:`url(${imageUrl})`
            }} className='mainAbout'>
                <div className='aboutWriteUp'>
                <h1>Brief History Of The University</h1>
              <p>
              Modibbo Adama University of Technology, Yola formally known Federal University of Technology, Yola,
              Adamawa state Nigeria was established in 1981 by the Federal Government of Nigeria to provide
               the much needed technologically skilled manpower for the nation. It is one of the Federal
                Universities recognized by National Universities Commission (NUC) to offer Bachelor’s,
                 Master’s and Doctorate degrees in different fields of Science and Technology. 
                 The University’s first set of 108 students graduated in the 1988/89 academics session. 
                 The University was merged to University of Maiduguri in the 1984, when it became the
                  Modibbo Adama Campus (MACUM), of University of Maiduguri. However, in 1988, it 
                  was de-merged and granted full autonomy with the name reverted to Federal University 
                  of Technology, Yola. In 2011, the then President and Commander in-Chief, Dr. Goodluck 
                  Ebele Jonathan, GCFR approved the change of the University’s name to Modibbo Adama
                   University of Technology, (MAUTECH) Yola, effective from 1st October 2011.
              </p>

              <p>
              With students’ population of over twenty thousand , 
              the University runs undergraduate and postgraduate programs in
               seven schools namely: School of Agriculture and Agricultural Technology (SAAT); 
               School of Environmental Science (SES);School of Management and Information Technology
                (SMIT);School of Pure and Applied Sciences (SPAS); School of Engineering and Engineering 
                Technology (SEET);School of Technology 
              and Science Education (STSE) and School of Postgraduates Studies(SPGS).
              </p>

              <p>
              In addition to conventional full time programmes, 
              the University runs Degree programs through its Distance Learning and Centres. 
              Its Consultancy Services Unit also runs Diploma and Certificates in over twenty 
              programmes. Teaching and Research in Science and Technology have been the main thrust 
              of the University. These have been attracting to the University series of collaboration 
              and partnership with foreign Universities, Corporate bodies, Government and 
              non-Governmental Organizations. Six distinguished professors have successfully 
              steered the affairs of the University as Vice Chancellors from it s inception.


              </p>
                </div>
             
            </div>
        </StyledContainer>
        </ThemeProvider>
    )
}
