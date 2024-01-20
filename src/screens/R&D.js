import styled from "styled-components";
import { Link } from "react-router-dom";
import pic from '../assets/student_union_banner.jpg';
import { MessageOutlined, PhoneCallback, PhoneCallbackOutlined } from "@mui/icons-material";
import { useEffect, useState } from "react";
const RandD = () => {

    const MyContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4,1fr);
    margin-top: 120px;
    margin-bottom:50px;
    padding: 15px;
    background-color:whitesmoke;
    grid-gap: 20px;
    
    .RandD-container{
        border: 1px solid #ddd;
        padding: 15px;
        background-color: white;
        border-radius-bottom: 8px solid maroon;
       span{
        font-weight: lighter;
       } 
    }
    h3{
        color: maroon;
    }
   .Link-to-rd{
    margin-left: 70%;
   }

   @media only screen 
   and (min-device-width : 320px) 
   and (max-device-width : 480px){
    MyContainer{
        display: grid;
        grid-template-columns: repeat(1,1fr);
        margin-top: 120px;
    }
   }

    `
   const[isRandD, setIsRandD] = useState([]);
   const[isLoading, setLoading] = useState(true);

   useEffect(()=>(
        fetch('')
        .then(res=>{
            return res.json()
        })
        .then(data=>{
            setLoading(false);
            setIsRandD(data.data)
        })
   ),[])

    return ( 
        <MyContainer>
        <div className="RandD-container">
           <div><img src={pic} alt="pic" width='100%' height='200px'/></div>
           <div><h3>The Effects of Climate change in the modern generation</h3></div>
           <div><span>The Academic caucus comprises of divisional hreadquarters for taking care of Academic</span> </div>
           <div>
            <span style={{display:'flex'}}><MessageOutlined style={{color:'maroon'}}/><span> admin@researchgroup.com </span></span><br></br>
             <span style={{display:'flex'}}><PhoneCallbackOutlined style={{color: 'maroon'}}/> <span> 08140409672</span></span>
           </div>
           <div className="Link-to-rd"><Link to='/'>VISIT SITE ></Link></div>
         </div>
         <div className="RandD-container">
           <div><img src={pic} alt="pic" width='100%' height='200px'/></div>
           <div><h3>The Effects of Climate change in the modern generation</h3></div>
           <div><span>The Academic caucus comprises of divisional hreadquarters for taking care of Academic</span> </div>
           <div>
            <span style={{display:'flex'}}><MessageOutlined/><span> admin@researchgroup.com </span></span><br></br>
             <span style={{display:'flex'}}><PhoneCallbackOutlined/> <span> 08140409672</span></span>
           </div>
           <div className="Link-to-rd"><Link to='/'>VISIT SITE ></Link></div>
         </div>
         <div className="RandD-container">
           <div><img src={pic} alt="pic" width='100%' height='200px'/></div>
           <div><h3>The Effects of Climate change in the modern generation</h3></div>
           <div><span>The Academic caucus comprises of divisional hreadquarters for taking care of Academic</span> </div>
           <div>
            <span style={{display:'flex'}}><MessageOutlined/><span> admin@researchgroup.com </span></span><br></br>
             <span style={{display:'flex'}}><PhoneCallbackOutlined/> <span> 08140409672</span></span>
           </div>
           <div className="Link-to-rd"><Link to='/'>VISIT SITE ></Link></div>
         </div>
         <div className="RandD-container">
           <div><img src={pic} alt="pic" width='100%' height='200px'/></div>
           <div><h3>The Effects of Climate change in the modern generation</h3></div>
           <div><span>The Academic caucus comprises of divisional hreadquarters for taking care of Academic</span> </div>
           <div>
            <span style={{display:'flex'}}><MessageOutlined/><span> admin@researchgroup.com </span></span><br></br>
             <span style={{display:'flex'}}><PhoneCallbackOutlined/> <span> 08140409672</span></span>
           </div>
           <div className="Link-to-rd"><Link to='/'>VISIT SITE ></Link></div>
         </div>
         {/* <div className="RandD-container-Row"
         style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gridGap: '20px'
         }}>
           <div><img src={pic} alt="pic" width='300px' height='300px'/></div>
           <div>
           <div><h3>The Effects of Climate change in the modern generation</h3></div>
           <div><span>The Academic caucus comprises of divisional hreadquarters for taking care of Academic</span> </div>
           <div>
            <span style={{display:'flex'}}><MessageOutlined/><span> admin@researchgroup.com </span></span><br></br>
             <span style={{display:'flex'}}><PhoneCallbackOutlined/> <span> 08140409672</span></span>
           </div>
           <div className="Link-to-rd"><Link to='/'>VISIT SITE ></Link></div>
           </div>
         </div> */}
         
        
        </MyContainer>
       
     );
}
 
export default RandD;