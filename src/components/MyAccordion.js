import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
export default function MyAccordion({title,qualification,topic}) {
    return (
        <Accordion style={{
            minWidth:'80%',
            maxWidth:'80%'
        }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h4>{title}</h4>
        </AccordionSummary>
        <AccordionDetails>
        <h4>{qualification}</h4>
          <p>
          {topic}
          </p>
        </AccordionDetails>
      </Accordion>
    )
}
