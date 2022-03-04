import { Button } from '@mui/material';
import React from 'react'
import { useParams } from 'react-router';
import styled from 'styled-components'
import EmptyIcon from '@mui/icons-material/HourglassEmpty'

const StyledContainer=styled.div`
margin-top: 130px;
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
    .hodImage{
        min-height: 400px;
        width: 30%;
        background-color:white;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        img{
            height:250px;
            width: 250px;
            border-radius: 50%;
        }
    }
    .depMission{
        width: 70%;
        background-color: #f9f9f9;
        .myBtn{
            display: flex;
            justify-content: space-around;
        }
        h4{
            width: 80%;
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
    min-height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color:white;
    text-transform: uppercase;
    font-weight: bolder;
    background:linear-gradient(to bottom,rgba(208, 115, 72,1),rgba(208, 115, 72,1),rgba(208, 115, 72, 0.5));
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
   h2{
       text-align: center;
   }
}


}
`;

const CoursesList=[
    {
        name:'Computer Science',
        hodName:'Prof. E.J Garba',
        hodImage:'https://res.cloudinary.com/nutscoders/image/upload/v1646423255/HOD_Computer_Science_apzr1l.jpg',
        vission:`The vision of the department is to produce world class computer scientists 
        that are in tune with the latest technologies and that can 
        use their skills in finding solutions to real world problems for the benefit of mankind.`,
        mission:`The mission of the B.Sc. Computer Science at Modibbo Adama University Yola 
        is to equip students and practitioners with the necessary skillsets that will allow 
        them to solve problems in Computing and beyond with 
        the overall goal of producing highly-skilled manpower for national development.`,
        aim:`This curriculum is intended to provide Computer Science undergraduate students 
        with substantial body of theoretical, practical and entrepreneurial principles and practices 
        that underpin an understanding of computational thinking and problem solving based on techniques 
        for analysing, designing, simulating and modelling computational solutions to problems.`,
        requirement:` In addition to the requirements for admission into degree programmes at the Modibbo Adama University, Yola, candidates for admission into B.Sc. Computer Science degree programme must also fulfil one of the following:
        a)	Pass at credit level in at least five O-level subjects that must include English Language, Mathematics, Physics and any two of Further Mathematics, Biology, Chemistry, Information and Communication Technology, Geography or Economics.
        b)	Candidates for direct entry into 200 level must in addition to satisfying condition (a) above, also obtain at least:
            (i) Two A-level passes or equivalent, one of which must be Mathematics.
            (ii) A Diploma in Computer Science at credit level from a recognized institution.`,
        postGraduate:'',
        resorce:'https://res.cloudinary.com/nutscoders/raw/upload/v1646423784/Department_of_Computer_Science_Curriculum_2018_BMAS_DRAFT_27_July_Update_1_ljmzsx.docx'
    },
    {
        name:'Mathematics',
        hodName:'Dr. Adamu Alkali',
        hodImage:'https://res.cloudinary.com/nutscoders/image/upload/v1646431189/Coordinator_Alumni_mk7c0r.jpg',
        vission:`The B.Sc degree programme is designed to provide the 
        students with a sound, broad and balanced foundation in mathematical
         knowledge and skills with courses 
        which are oriented towards practical development of the nation.`,
        mission:`To provide excellent training opportunities for 
        students and practitioners in Mathematics and its industrial
         applications with the overall goal of 
        producing highly-skilled manpower for national development.`,
        aim:`The aim of the B. Tech. degree programmes in the department is 
        to provide high quality training in Industrial Mathematics/Mathematics 
        with Economics and its application to the industrial sector for enhanced 
        scientific and technological development of the nation.`,
        postGraduate:'',
        resorce:'https://res.cloudinary.com/nutscoders/raw/upload/v1646431801/HandBook_Maths_2016_ke6iww.doc',
        requirement:`Candidate must obtain five O’ Level 
        (WASC/GCE/SSCE/NECO or equivalent) credit passes in English Language, Mathematics, 
        Physics and any two of Chemistry, Biology/Agricultural Science, Geography or Economics, obtained in not more than 2 sittings. U.M.E Subjects include English Language, 
        Mathematics and any two of the listed subjects. Candidates for direct entry into 200 level must in addition to satisfying condition (a)    	above, must also obtain at least:
        • Two A-level passes or equivalent one of which must include Mathematics and Physics/Economics.
        • A Diploma in Mathematics or Statistics at credit level from a recognized institution.
        
        `
    }
]
export default function DepartmentScreen() {
    const {name}=useParams()
    const filteredList=CoursesList.filter(crs=>name.toLocaleLowerCase().includes(crs.name.toLocaleLowerCase()))
    return (
        <StyledContainer>
            {
                filteredList.length>0&&(
                    <>
                    <div className='depHead'>
             <h2>Department Of {filteredList[0].name}</h2>
            </div>
            <div className='hodDetails'>
             <div className='hodImage'>
                 <img src={filteredList[0].hodImage}/>
                 <h3>{filteredList[0].hodName}</h3>
                 <p>(Head Of Department)</p>
             </div>
             <div className='depMission'>
                <div className='myBtn'>
                     <Button style={{
                         backgroundColor:'rgba(208, 115, 72,1)',
                         width:'40%',
                         borderRadius:50
                         }} variant='contained'>Apply Now!</Button>
                     <Button download={filteredList[0].name} href={filteredList[0].resorce} style={{
                         backgroundColor:'rgba(208, 115, 72,1)',
                         width:'40%',
                         borderRadius:50
                         }}  variant='contained'>Download Brochure</Button>
                 </div>
                 <h4>Department Mission</h4>
                 <p>
                   {filteredList[0].mission}
                 </p>
                 <h4>Department Vission</h4>
                 <p>{filteredList[0].vission}</p>

                 <h4>Department Aim</h4>
                 <p>{filteredList[0].aim}</p>
               
             </div>
            </div>

            <div className='depTerms'>
            <img src={require('../assets/terms.png')}/>
            <div className='mainReq'>
            <h4>Admission Requirements</h4>
            <p>
           {filteredList[0].requirement}
            </p>
            </div>
            </div>
    <h5>You Can Downlod The Brochure Above For More Details, THank you.</h5>
                    </>
                )
            }
            {
                filteredList.length==0&&(
                    <div className='emptyList'>
                        <EmptyIcon style={{
                    width: 50,
                    height:50
                }}/>
                <h4>Department Data Not Added Yet!!!</h4>
                    </div>
                )
            }
        </StyledContainer>
    )
}
