import './Admission.css';
import Student_Gown from '../assets/matric.jpeg';
import { ArrowForwardOutlined, ArrowRight } from '@mui/icons-material';
import { useEffect, useState } from 'react';
const Admission = () => {
    const [programs,setAllPrograms]=useState([])
    const loadData=()=>{
        fetch(`https://new-modibbo-adama.herokuapp.com/admin/get-all-programs`)
        .then(res => {
            res.json()
                .then(data => {
                 console.log(data)

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
                        <span className='Admission_Header_Title'>Modibbo Adama University Admissions</span><br></br>
                        <p className='Admission-Note'>Whatever your calling, we’ll prepare you to make a difference in the lives of others through work, service and leadership.</p>
                    </div>
               
            </div>
            <div>
                
                <div className='Admission-Cards'>
             {
                programs.length>0&&(
                    programs.map((program,ind)=>(
                        <div key={ind} className='Admission-Cards-Content'>
                
                        <div className='Admission-Cards-Heading'>
                                <span className='Admission-individual-title'>{}</span><br />
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
                    ))
                )
             }


               

                    

                 
                 
                
                   
                   
                </div>
              
            </div>
        </div>
     );
}
 
export default Admission;