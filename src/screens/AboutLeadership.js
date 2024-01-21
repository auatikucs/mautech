import vc from '../assets/vc.jpg'
import mau_pic_footer from '../assets/mau_pic_footer.jpg';
import proChancellor from '../assets/proChancellor.jpeg';
import Registrar from '../assets/Registrar.jpeg';
import dvc_Academics from '../assets/dvc_Academics.jpeg';
import dvc_Admin from '../assets/dvc_Admin.jpeg';
import bursar from '../assets/bur.jpeg';
import avatar from '../assets/avatar.png';
import Oba from '../assets/chancellor.jpg';
import { useEffect, useState } from 'react';
import VcAbout from '../components/VcAbout';

const AboutLeadership = () => {
    const[isLeadershipData, setLeadershipData] = useState([]);
    // const[setLoading, isLoading] = true;
    useEffect(()=>{
        window.scrollTo({
            top:0,
            behavior: 'smooth',
          })
          fetch('https://mau-web-server.fly.dev/admin/get-about-leadership')
          .then(res=>{
            return res.json()
          })
          .then(data=>{
            // isLoading(false)
            setLeadershipData(data.result)
            console.log(data.result)
          })
    },[])
    return ( 
        <div style={{marginTop:110}} className='About-Leadership-Container'>
           <div className='Mau-Leadership-Container-Head' styles={{ backgroundImage:`url(${mau_pic_footer})` }} >
               <div className='Header-Banner-Leadership'></div>
               <div><span className='AboutLeadership-Title'>MAU Leadership</span></div>
               {/* <p>The University administrative structure is composed of the Council, Senate, Management and other Committees. </p> */}

           </div>
           <div className='Chancellor-Container'>
              {isLeadershipData && isLeadershipData.map((chancellorData)=>(
                <div>
                <center> <div><img className='Chancellor-pic' src={chancellorData.chancellor.image} alt="" srcset="" width='500px' height='300px' /><br></br>
                <span>{chancellorData.chancellor.name}</span><br></br>
                <span>JP. Paramount Ruler/Ekporikpo of Obot</span><br></br>
                <span>Chancellor, Modibbo Adama University</span><br></br>
                </div></center>
                <div></div>
            </div>
              ))}
              
           </div>
           <span className='AboutLeadership-Title'>Governing Council</span>
           <div className='Pro-Chancellor-Container' >
               
               <div>
                   <p>The Governing Council is the highest policy making body in the University.  It has the power to make laws for the general administration of the University and its finances.  
                       The Pro-Chancellor and Chairman of Council, and some members are appointed by the Federal Government based on their merit and their experience in public and private sectors, 
                       while some are elected from within the University community i.e. from Senate, Congregation and Convocation.  The Vice Chancellor who is the Chief Executive Office of the University 
                       is appointed by the Federal Government.</p>
                       <span className='Council-Members-Title'>Council Members</span>
                 </div>     
                    <div className='Governing_Council_New'>
                        {isLeadershipData && isLeadershipData.map((proChancellorData)=>(
                            <div className='Pro-Chancellor-Img-Holder'>
               
                            <img src={proChancellorData.proChancellor.image} alt="" srcset="" height='350px' width='300px'/><br></br>
                                <span>{proChancellorData.proChancellor.name}</span><br></br>
                                <span>Pro Chancellor and Chairman</span>
                        </div>
                        ))}
                      
                        <div className='Council_Members_List_container'>
                           <table>
                               <tr>
                                   <td>Alh. Bashir Mohammed Dalhatu </td>
                                   <td>Pro-Chancellor & Chairman</td>
                               </tr>
                               <tr>
                                   <td>Prof Abdullahi Liman Tukur </td>
                                   <td>Vice Chancellor</td>
                               </tr>
                               <tr>
                                   <td>Prof Muhammad Inuwa Jaafaru </td>
                                   <td>DVC Administration</td>
                               </tr>
                               <tr>
                                   <td>Prof Muhammad Musa Malgwi </td>
                                   <td>DVC Academics</td>
                               </tr>
                               <tr>
                                   <td>Haj. Halima Mohammed Bala </td>
                                   <td>Registrar & Secretary to Council</td>
                               </tr>
                               <tr>
                                   <td>Ali Ibrahim Dogarai </td>
                                   <td>External Member</td>
                               </tr>
                               <tr>
                                   <td>Abubakar Umar Dogondaji </td>
                                   <td>External Member</td>
                               </tr>
                               <tr>
                                   <td>Hon. Diogo John Ngukpen </td>
                                   <td>External Member</td>
                               </tr>
                               <tr>
                                   <td>Hon. Paul U. Ezeobi </td>
                                   <td>External Member</td>
                               </tr>
                               <tr>
                                   <td>Mr. Kalu Kalu Obasi  </td>
                                   <td>Rep. Federal Ministry of Education</td>
                               </tr>
                               <tr>
                                   <td>Prof. Kalep Bulus Filli </td>
                                   <td>Rep. Senate on Council</td>
                               </tr>
                               <tr>
                                   <td>Prof. (Mrs.) Margaret Samuel Nadro  </td>
                                   <td>Rep. Senate on Council</td>
                               </tr>
                               <tr>
                                   <td>Prof. Danjuma Jibasen  </td>
                                   <td>Rep. Senate on Council</td>
                               </tr>
                               <tr>
                                   <td>Prof. Abdullahi Muhammad Saddiq</td>
                                   <td>Rep. Senate on Council</td>
                               </tr>
                               <tr>
                                   <td>Engr. Abdullahi Madu Yami (PhD)  </td>
                                   <td>Rep. Congregation on Council</td>
                               </tr>
                               
                               <tr>
                                   <td>Ahmed Baba Lawan   </td>
                                   <td>Rep. Congregation on Council</td>
                               </tr>
                           </table>
                           </div>
                       </div>
                
              
              
           
           </div>
           
          
           <div><h1 className='AboutLeadership-Title'>Principal Officers</h1></div>
           <div >
             
           <VcAbout/>
               
          
           
          
        </div>
        <div className='Management-Senate-Content'>
               {/* <h1 className='AboutLeadership-Title'>University Senate </h1> */}
               <p>Senate has the supreme authority on all academic matters of the University.  It is composed of the Vice-Chancellor, as Chairman, the Deputy Vice-Chancellors, Deans of Schools, all Professors, the University Librarian, Representative of Schools Boards and those appointed by the Vice-Chancellor in accordance with the University law.  </p>

           </div>
           <div className='Management-Senate-Content'>
               {/* <h1 className='AboutLeadership-Title'>University Management</h1> */}
               <p>The University Management is composed of all principal Officers (Vice Chancellor, Deputy Vice Chancellor Admin, Deputy Vice Chancellor Academics, Registrar, Bursar and Librarian), deans and directors.</p>

           </div>
        </div>
     );
}
 
export default AboutLeadership;