import { Button } from "@mui/material";
import { useEffect } from "react";
import { Link } from "react-router-dom";

import student from '../assets/student.jpg';
const Main = () => {
    useEffect(()=>{
        window.scrollTo({
            top:0,
            behavior: 'smooth',
          })
    },[])
    return ( 
        
        <div style={{marginTop:110}} className="Main-Container">
            <div className="Main-Display-Image" styles={{ backgroundImage:`url(${student})` ,opacity:0.2}}>
               <h1>Undergraduate Programmes</h1>
               <p>
                   Commited to producing world class graduate through quality <br></br>research
                   and development in a glance 
               </p>
            </div>
           
            <h2>Programmes Offered</h2>
            <div className="Search-Input">
                <div>Course finder helps you find several courses</div>
                <input 
                type="search" 
                name="" 
                id=""
               placeholder='Search for course' />
            </div>
            <div className='Cart-Container-Programs'>
                <div>
                    <h1>A</h1>
                    <div className='Link-Wrapper'>
                    <div> <Link to='/'>Animal Science </Link></div>
                    <div> <Link to='/'>Architecture </Link></div>
                    <div> <Link to='/'>Agric Economic and Extension</Link></div>
                    <div> <Link to='/'>Animal Husbandary</Link></div>
                    <div> <Link to='/'>Accounting </Link></div>
                    <div> <Link to='/'>Animal range management </Link></div>
                    </div>
                </div>
                <div>
                    <h1>B</h1>
                    <div className='Link-Wrapper'>
                    <div> <Link to='/'>Animal Science </Link></div>
                    <div> <Link to='/'>Architecture </Link></div>
                    <div> <Link to='/'>Agric Economic and Extension</Link></div>
                    <div> <Link to='/'>Animal Husbandary</Link></div>
                    <div> <Link to='/'>Accounting </Link></div>
                    <div> <Link to='/'>Animal range management </Link></div>
                    </div>
                </div>
                <div>
                    <h1>C</h1>
                    <div className='Link-Wrapper'>
                    <div> <Link to='/'>Animal Science </Link></div>
                    <div> <Link to='/'>Architecture </Link></div>
                    <div> <Link to='/'>Agric Economic and Extension</Link></div>
                    <div> <Link to='/'>Animal Husbandary</Link></div>
                    <div> <Link to='/'>Accounting </Link></div>
                    <div> <Link to='/'>Animal range management </Link></div>
                    </div>
                </div>
               
            </div>
            <h4 className='Expand-Row'>More....</h4>
            <div className='Apply_section'>
                <h1>How to Apply</h1>
                <div>
                    <span>Interested candidates can apply through UTME and DE obtainable from JAMB Portal. Thereafter you can register and upload your document to MAU.</span>
                </div>
                <p>A minimun of 5 credits at O level in relevant subjects which must 
                    include English language and mathematics for UTME and a minimum Point 
                    From UTME scores as can be fixed by the University Admission Comittee 
                    from time to time. Post jamb screening is carried out for students seeking 
                    admission into the department as additional requirement by the University.
                    Those Applying throug Direct Entry (DE) should possess at least a lower credit in their 
                    'A' Levels or Diploma Programmes or HND Programme in related and relevant fields. This
                    is addition to possession of 5 credits at their 'O' Levels 
                </p>
                <div>
                    <span>Fees Structure for all Undergraduate Programs <strong>Download</strong></span>
                </div>
            </div>
            <div><center>
            <Button href='https://mautech_postutme.admissions.cloud/' variant='contained' style={{
                backgroundColor:'#ba6438',
                margin:20
            }}>Click To Apply</Button>    
            </center></div>
        </div>
     );
}
 
export default Main;