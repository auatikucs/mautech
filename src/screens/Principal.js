import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Divider, List,ListItem, ListItemButton, ListItemText} from '@mui/material';
import { Facebook, LinkedIn, LocalPrintshopOutlined, Mail, Twitter } from '@mui/icons-material';
import MyList from '../sub-components/MyList';

const StyledContainer=styled.div`
margin-top: 107px;
overflow:hidden;
.mainPrinPic{
height: 80vh;
}
.princContent{
    min-height: 80vh;
    width: 100%;
    display: flex;
    flex-direction: row;
    .icons01{
        min-width: 10%;
        min-height: 100%;
        background-color:white;
        display: flex;
        flex-direction: column;
        padding: 10px;
        align-items: flex-end;
    }
    .main002{
        min-width: 90%;
        min-height: 100%;
        background-color: white;
        transform: translateY(-100px);
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        .mainFirst{
            grid-column: 1/4;
            display: flex;
            flex-direction: column;
            padding: 20px;
            .main002Head{
            color: black;
            font-size: 40px;
            font-weight: bolder;
            

        }
        .main003Head{
            color: black;
            font-size: 30px;
            
            

        }
        p{
            text-align: justify;
        }
        }
        .mainSecond{
            display: flex;
            flex-direction: column;
            color: black;
            padding: 20px;
        }
        
    }

}

@media only screen 
and (min-device-width : 320px) 
and (max-device-width : 480px) {
    .princContent{
    min-height: 80vh;
    width: 100%;
    display: flex;
    flex-direction: row;
    .icons01{
        min-width: 10%;
        min-height: 100%;
        background-color:white;
        display: flex;
        flex-direction: column;
        padding: 10px;
        align-items: flex-end;
    }
    .main002{
        min-width: 80%;
        min-height: 100%;
        background-color: white;
        transform: translateY(-100px);
        display: grid;
        grid-template-columns: 1fr 1fr;
        .mainFirst{
            grid-column: 1/3;
            display: flex;
            flex-direction: column;
            padding:5px;
            .main002Head{
            color: black;
            font-size: 30px;
            font-weight: bolder;
            

        }
        .main003Head{
            color: black;
            font-size: 20px;
            
            

        }
        p{
            text-align: justify;
            margin-right:20px;
            
        }
        }
        .mainSecond{
            display: flex;
            flex-direction: column;
            color: black;
            padding:0px;
        }
        
    }

}
}
`;
export default function Principal() {
    useEffect(()=>{
        window.scrollTo({
            top:0,
            behavior: 'smooth',
          })
    },[])
    return (
        <StyledContainer>
            <div style={{
             background:`url('https://res.cloudinary.com/diwnlud5x/image/upload/v1747905878/vc_cover_cbaafi.jpg')`,
             backgroundPosition:'top',
             backgroundRepeat:'no-repeat',
             backgroundSize:'cover',
            }} className='mainPrinPic'></div>
            <div className='princContent'>
             <div className='icons01'>
              <Twitter style={{cursor:'pointer'}}/>
              <Facebook style={{cursor:'pointer'}}/>
              <LinkedIn style={{cursor:'pointer'}}/>
              <Mail style={{cursor:'pointer'}}/>
             </div>
             <div className='main002'>
                 <div className='mainFirst'>
                 <span className='main002Head'>Vice-Chancellor</span>
                 <span className='main003Head'>PROF. Ibrahim Umar (Professor of Nematology)</span>
                 <p>
                    The Vice Chancellor, Modibbo Adama University, Yola Prof. Ibrahim Umar is a renowned Professor of Nematology, academic and administrator who has made significant contributions to the field of crop protection and education. He was born on 2nd June, 1964, in Gombi, Gombi local government area Adamawa State, Nigeria. He is happily married with children and his major hobbies are Reading, watching Television, Football and Tennis.              
                 </p>
                 <p>
                    Prof. Ibrahim Umar's educational qualifications are impressive, with a PhD in Crop Protection(Nematology) from the Federal University of Technology, Yola, (1999-2007), a Master of Science in Agric. Biology from the University of Ibadan, (1992-1995), a Postgraduate Diploma in Education from the Federal University of Technology Yola (1995-1996), a Bachelor of Science in Agriculture from the University of Maiduguri with Second class (Hons) Upper Division (1984-1989), General Certificate in Education from Mbiya G.S.S. Takum (1977-1982), Certificate in Open and Distance Learning Material Development from University of South Africa (2003), Certificate in Computer from Federal college of Education,Yola (3013) and Gombi Primary school/Karlahi Primary school where he obtained his first leaving school certificate (1971-1977). 
                 </p>
                 <p>
                    Prof. Umar's working experience spans over three decades, beginning as a Clerical Assistant at the Defunct Gongola State House of Assembly from 1982-1983. He taught at Ekamefa Community Commercial Grammar School, Ilasa, Ekiti, Ondo State, during his National Youth Service Corps (NYSC) from 1989-1990. He was also a Master Grade II at G.S.S. Mayobelwa in 1991, Assistant Lecturer and Lecturer III at the Federal College of Education, Yola from 1991-1995. Prof. Umar started his academic career with the then Federal University of Technology, Yola as Assistant Lecturer in 1995 where he rose to the rank of a Professor in the year 2013 till date. He was engaged as a sabbatical staff and visiting Lecturer in Adamawa state University, Mubi in the year 2009-2010 and 2010-2011 respectively, also worked as a visiting Lecturer, at the Taraba state University Jalingo 2013 and visiting Lecturer, at Adamawa state University, Mubi from 2016-2017.                 
                 </p>
                 <p>
                    His broader academic experiences earned him different administrative positions including Rector of Adamawa State Polytechnic Yola, from 2018-2022, which brought great transformation to the institution, Dean of the School of Agriculture and Agricultural Technology, MAUTECH Yola from 2014-2018, Pioneer Head of the Department of Crop Protection, MAUTECH Yola from 2011-2015, Postgraduate Coordinatior Department of Crop production and Horticulture, 2010-2011, 300 level coordinator Department of Crop production and Horticulture from 2010-2011, SIWES coordinator Department of Crop production and Horticulture from 1997-2005, coordinator SIWES school of Agric. from 1996-2005, School of Agric Congregation Representative to senater from 2000-2005, School of Agric Timetable officer from 2000-2005, Examination Officer department of crop production &amp; horticulture from 1995-1999.                 
                 </p>
                 <p>
                    Prof. Ibrahim Umar is a member of Membership of Committees including Associate Editor, Nigerian Journal of Tropical Agriculture 1998-date, Member adhoc committee on junior staff interview 1999, member student examination malpractice committee, Member adhoc committee on Academic staff interview 2011, Member adhoc committee on Academic staff interview 2013, Member adhoc committee on re-organization of University farm 2014, Member board of department of crop production and Horticulture from 1995-2011, Chairman board of department of crop protection, from 2011-2014, Member board of department of crop protection, 2011-date, Chairman school of Agric and Agric. Tech. Management committee 2014-2018, Chairman school of Agric and Agric. Tech. board 2014-2018, Member University management committee 2014-2018, Member University Committee of Dean’s and Directors 2014-2018, Member University junior staff Appraisal committee 2014-2018, Member expanded University security Committee 2014-2018, Chairman Adhoc committee on staff abscondment 2017-2018, Member council Adamawa State Polytechnic Yola 2018-2022, Chairman management Adamawa state Polytechnic, Yola 2018-2022 and Chairman Academic Board Adamawa state Polytechnic, Yola 2018-2022.
                 </p>
                 <p>
                    Prof. Umar has received several certificates and awards for his contributions to education and research including Gongola state undergraduate scholarship Award 1984-1989, F.C.E. Yola Postgraduate fellowship Award (Masters) 1992-1994, Adamawa state Endowment fund Award for Postgraduate Diploma in Education 1995, F.U.T. Yola Ph.D fellowship Award 2000-2007, Fellow Chartered Institute of Public Diplomacy and Management 2019, Fellow Trans African universities and Allied Institution Research Development Network 2021. Other awards to his credits including Certificate of merit by society of Agriculture Biologist university of Ibadan 1994, Best Dean Agric. MAUTECH awarded by National Association of Agricultural Students 2015, African Students Ambassador Award, Awarded by African Students for Peace and Development in Africa 2016, NADI International School Awards for outstanding Qualities in Academics and Exemplary Leadership 2017, North-East Student Peace Initiative Award 2019, Most supportive Rector Senior Staff by Senior Staff Association of Polytechnics 2020, National Association of Polytechnic Students- AN ICON OF HOPE 2021 and Arewa Youth Assembly Award 2022 among others.
                 </p>
                 <p>
                    Prof. Umar has also served as an external examiner and assessor for various federal and state higher institutions in the country, showcasing his expertise and commitment to academic excellence from 2005 till date. He has mentored many undergraduate and postgraduate students both in teaching, projects, theses and Ph.D supervision. He has attended many conferences, Consultancy/Workshop and other field of work experience within the country and abroad. He is a member of various professional associations, including Society of Nematologists, Horticultural Society of Nigeria, and Nigeria society for plant protection, Agric. Society of Nigeria, Member Board of Trustee Crop science society of Nigeria, Weed Science Society of Nigeria and Pesticidal Plants Society of Nigeria. Some of his community services are West Africa Examination Council- Agric Science Marker from 1991-1995, National Examination Council- Agric. Science Marker from 1995-2003, Joint Admission and Matriculation Board Exam Supervisor from 2000-2009, Chairman ABTI International Nursery/Primary School Yola from 2003-2018 and Chairman Famtotiral Association (NGO) from 2016-2020.
                 </p>
                 </div>

{/* 
                 <div className='mainSecond'>
                     <List>
                     <div>
<ListItemButton style={{
    color:'black'
}} component="a" href="#simple-list">
  <ListItemText primary='Vice Chancellor' />
</ListItemButton>
<Divider style={{backgroundColor:'#f9f9f9'}}/>
 </div>

 <div>
<ListItemButton style={{
    color:'black'
}} component="a" href="#simple-list">
  <ListItemText primary='DVC Admin' />
</ListItemButton>
<Divider style={{backgroundColor:'#f9f9f9'}}/>
 </div>

 <div>
<ListItemButton style={{
    color:'black'
}} component="a" href="#simple-list">
  <ListItemText primary='DVC Academics' />
</ListItemButton>
<Divider style={{backgroundColor:'#f9f9f9'}}/>
 </div>

 <div>
<ListItemButton style={{
    color:'black'
}} component="a" href="#simple-list">
  <ListItemText primary='Registrer' />
</ListItemButton>
<Divider style={{backgroundColor:'#f9f9f9'}}/>
 </div>

 <div>
<ListItemButton style={{
    color:'black'
}} component="a" href="#simple-list">
  <ListItemText primary='Bursar' />
</ListItemButton>
<Divider style={{backgroundColor:'#f9f9f9'}}/>
 </div>

 <div>
<ListItemButton style={{
    color:'black'
}} component="a" href="#simple-list">
  <ListItemText primary='Librarian' />
</ListItemButton>
<Divider style={{backgroundColor:'#f9f9f9'}}/>
 </div>
                     </List>
                 </div> */}
                
             </div>
            </div>
        </StyledContainer>
    )
}
