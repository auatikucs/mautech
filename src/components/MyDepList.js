import React from 'react'
import styled from 'styled-components'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button } from '@mui/material';

const StyledContainer=styled.div`
width: 90%;
margin-bottom: 30px;
background-color: white;
margin-left: auto;
margin-right: auto;
border-radius: 10px;
.cardBtns{
    display: flex;
    justify-content: space-around;
    margin-bottom: 10px;
    margin-top: 20px;
}

`;
export default function MyDepList({title,content,requirements,list=[]}) {
    return (
        <StyledContainer>
             <h4>{title}</h4>
             <p>
             {content}
             </p>
        <Accordion style={{
            width:'80%',
            marginLeft:'auto',
            marginRight:'auto'
        }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h4>Admission Requirements</h4>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            {requirements}
          </p>
         {
             list.map(reqLi=>(
                 <li key={reqLi}>{reqLi}</li>
             ))
         }
        </AccordionDetails>
      </Accordion>
    
     <div className='cardBtns'>
     <Button style={{
          backgroundColor:'rgba(208, 115, 72,1)'
      }} variant='contained'>Download Brochure</Button>

<Button style={{
          backgroundColor:'rgba(208, 115, 72,1)'
      }} variant='contained'>Apply Now</Button>
     </div>
        </StyledContainer>
    )
}
