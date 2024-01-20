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
             background:`url('https://res.cloudinary.com/mustyz/raw/upload/v1684945986/o4qwirm8y8zwk64zs2em.jpeg')`,
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
                 <span className='main003Head'>Prof. Abdullahi Liman Tukur</span>
                 <p>
                 Prof. Abdullahi Liman Tukur was Born on 8th April, 1961 at Kilbawo Ward of Jada Local Government Area of Adamawa State, Professor Tukur attended Senior (now Jada 1) Primary School, Jada from 1968 to 1974. He proceeded to Government Secondary School Ganye, from 1974 to 1979. Between 1979 and 1981, Professor Tukur attended the School of General Studies, Kano. Subsequently in 1981 pursued a degree in Geography at the Bayero University Kano, where he graduated with a Bachelor of Science degree in Geography in 1984. His quest for additional qualifications fuelled by a burning desire to acquire knowledge made him proceed to the University of Maiduguri for his Master’s degree in Resources and Development in 1988 and later the University of Jos where he bagged a PhD in Environmental and Resources Planning in 1997. Professor Tukur later attended Durham University, United Kingdom, for a six months certificate course in Remote Sensing (RS) and Geographic Information System (GIS) in 1993.
                 </p>
                 <p>
                 He joined the services of the then Federal University of Technology, Yola, (now Modibbo Adama University of Technology, Yola) in 1986 as a Graduate Assistant in the Department of Geography and rose through the ranks to the position of Professor in 2009.  He has held various academic and administrative positions within and outside the university, some of which include Council Member (FUTY), from 1997 to 1999; Coordinator, Consultancy Services Unit of the University from 1995 to 1999.
                 </p>
                 <p>
                 In 2001, Professor A. L. Tukur was appointed acting Dean of the School of Environmental Sciences till 2003 and later became substantive Dean from 2012 to 2014. He was also appointed Secretary to the Adamawa State Government in 2014. The Professor served as a Member of the Adamawa State Government Transition Committee from April – June, 1999. Before his selection as the Vice Chancellor of Mautech, he was the Director Centre for Distance Learning, a post he held from 2017 to 2019. In addition, Professor Tukur had at various times served as Member/Secretary, Adamawa State University Steering Committee (February 2001-2002); Chairman, Governing Council, Adamawa State Polytechnic (2001-2004); Executive Chairman, Adamawa State Universal Basic Education Board (ADSUBEB) in January 2004. During his tenure at ADSUBEB, a remarkable achievements were recorded, with the first set of mega library and computer centres with full internet facilities provided.  His tenure also saw the erection of first storey buildings at the Basic Education level in Adamawa State. 
                 </p>
                 <p>
                 As an astute scholar, Professor Tukur has co-edited two textbooks and published several research papers in reputable national and international scientific journals. He has supervised quite a number of postgraduate Ph.D and Masters students successfully.  He is a member of several learned/professional bodies, such as the Association of Nigerian Geographers and the International Geographical Union.  In the course of his career, Professor Tukur has also attended several seminars and conferences and received several fellowships and awards within and outside the country. He was a Federal Government of Nigeria/World Bank Fellow to Durham University in 1993. International Geographical Congress Glasgow (UK), 2004; National Merit Awards recipient from both the National Parent Teachers Association (2007), and the Nigerian Civil Service Union (2005). Prof. Abdullahi Liman Tukur emerged as Vice Chancellor of the Modibbo Adama University Yola on the 10th of June 2019.
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
