import './Admission.css';
import Student_Gown from '../assets/portal.png';
import { ArrowForwardOutlined, ArrowRight } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Portals = () => {
    const [programs,setAllPrograms]=useState([])
    const navigate=useNavigate()
    const loadData=()=>{
        fetch(`https://mau-web-server.fly.dev/admin/get-all-portals-with-pagination?page=1&limit=10`)
        .then(res => {
            res.json()
                .then(data => {
                 setAllPrograms(data.result)
                })
        }).catch(err=>{
            
        })
    }
    useEffect(()=>{
        loadData()
        window.scrollTo({
            top:0,
            behavior: 'smooth',
          })
    },[])
    return ( 
        <div>
            <div className='Admission_Background_Container' styles={{ backgroundImage:`url(${Student_Gown})` }}>
                    <div className='hype'>
                        <span className='Admission_Header_Title'>Modibbo Adama University Portals</span><br></br>
                        <p className='Admission-Note'>Access below portals for registrations, admissions and so on.</p>
                    </div>
               
            </div>
            <div>
                
                <div className='Admission-Cards'>
             {
                programs.length>0&&(
                    programs.map((program,ind)=>{
                    return(
                        <div onClick={()=>{
    
                            window.location=`${program.portalLinkValue}`
                            navigate(`/admission/${program.portalLinkValue}`)
                        }} key={ind} className='Admission-Cards-Content'>
                
                        <div className='Admission-Cards-Heading'>
                                <span className='Admission-individual-title'>{program.portalName}</span><br />
                                <div style={{
                                    display:'flex',
                                    justifyContent:'space-between',
                                    alignItems:'center'
                                }}>
                                <p>Get started</p>
                                <ArrowForwardOutlined/>
                                </div>
                                
                               </div>
                            </div>
                    )
                    })
                )
             }


               

                    

                 
                 
                
                   
                   
                </div>
              
            </div>
        </div>
     );
}
 
export default Portals;