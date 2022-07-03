import vc from '../assets/vc.jpg'
import proChancellor from '../assets/proChancellor.jpeg';
import Registrar from '../assets/Registrar.jpeg';
import dvc_Academics from '../assets/dvc_Academics.jpeg';
import dvc_Admin from '../assets/dvc_Admin.jpeg';
import avatar from '../assets/avatar.png';
import { useEffect } from 'react';
import VcAbout from '../components/VcAbout';


const AboutLeadership = () => {
    useEffect(()=>{
        window.scrollTo({
            top:0,
            behavior: 'smooth',
          })
    },[])
    return ( 
        <div className='About-Leadership-Container'>
            {/* <div className='About-Leadership-Display_page'styles={{ backgroundImage:`url(${mau_pic_footer})` }} >
                <h1>Modibbo Adama University Leadership</h1>
            </div> */}
           <div>
               <h2 className='AboutLeadership-Title'>Modibbo Adama University Leadership</h2>
               <p>The University administrative structure is composed of the Council, Senate, Management and other Committees. </p>

           </div>
           <h2 className='AboutLeadership-Title'>Governing Council</h2>
           <div className='Pro-Chancellor-Container' >
               
               <div><p>The Governing Council is the highest policy making body in the University.  It has the power to make laws for the general administration of the University and its finances.  The Pro-Chancellor and Chairman of Council, and some members are appointed by the Federal Government based on their merit and their experience in public and private sectors, while some are elected from within the University community i.e. from Senate, Congregation and Convocation.  The Vice Chancellor who is the Chief Executive Office of the University is appointed by the Federal Government.</p></div>
               <div className='Pro-Chancellor-Img-Holder'>
               
               <img src={proChancellor} alt="" srcset="" height='250px' width='250px'/>
               <span>Alh, Bashir Mohammed Dalhatu</span><br></br>
               <span>Pro Chancellor and Chairman</span>
           </div>
           
           </div>
           <div>
               <h1 className='AboutLeadership-Title'>University Senate </h1>
               <p>Senate has the supreme authority on all academic matters of the University.  It is composed of the Vice-Chancellor, as Chairman, the Deputy Vice-Chancellors, Deans of Schools, all Professors, the University Librarian, Representative of Schools Boards and those appointed by the Vice-Chancellor in accordance with the University law.  The functions of Senate, among others, are as provided in 3.1 of this handbook.</p>

           </div>
           <div>
               <h1 className='AboutLeadership-Title'>University Management</h1>
               <p>The University Management is composed of all principal Officers (Vice Chancellor, Deputy Vice Chancellor Admin, Deputy Vice Chancellor Academics, Registrar, Bursar and Librarian), deans and directors.</p>

           </div>
           <div><h1 className='AboutLeadership-Title'>Principal Officers</h1></div>
           <div className='Principal-Officers-container'>
              
               <div className='Principal-Officers-Card'>
                   <div>
                       <div><img src={vc} alt="" srcset="" height='200px' width='200px'/></div>
                       <div>
                           <h5>Prof Abdullahi Liman Tukur</h5>
                           <span>Vice Chancellor </span><br></br>
                           
                       </div>
                   </div>
               </div>
               <div className='Principal-Officers-Card'>
                   <div>
                       <div><img src={dvc_Academics} alt="" srcset="" height='200px' width='200px'/></div>
                       <div>
                           <h5>Prof Muhammad Inuwa Jaafaru </h5>
                           <span>Deputy Vice Chancellor Admin </span><br></br>
                          
                       </div>
                   </div>
               </div>
               <div className='Principal-Officers-Card'>
                   <div>
                       <div><img src={dvc_Admin} alt="" srcset="" height='200px' width='200px'/></div>
                       <div>
                           <h5>Prof Muhammad Musa Malgwi</h5>
                           <span>Deputy Vice Chancellor Academics </span><br></br>
                           
                       </div>
                   </div>
               </div>
               <div className='Principal-Officers-Card'>
                   <div>
                       <div><img src={Registrar} alt="" srcset="" height='200px' width='200px'/></div>
                       <div>
                           <h5>Hajiya Halima Muhammad Bala</h5>
                           <span>Registrar </span><br></br>
                           
                       </div>
                   </div>
               </div>
               <div className='Principal-Officers-Card'>
                   <div>
                       <div><img src={avatar} alt="bursar image" srcset="" height='200px' width='200px'/></div>
                       <div>
                           <h5>Alhaji Ismaila Umar</h5>
                           <span>Bursar </span><br></br>
                           
                       </div>
                   </div>
               </div>
               <div className='Principal-Officers-Card'>
                   <div>
                       <div><img src={avatar} alt="" srcset="" height='200px' width='200px'/></div>
                       <div>
                           <h5>Dr. Tukur Abba</h5>
                           <span>Librarian </span><br></br>
                           
                       </div>
                   </div>
               </div>
           </div>
           <div>
               <h2 className='AboutLeadership-Title'>Governing Council Member</h2>
               <div>
                   <ul>
                       <li>Alh. Bashir Mohammed Dalhatu (Pro-Chancellor & Chairman)</li>
                       <li>Prof. Abdullahi Liman Tukur (Vice Chancellor)</li>
                       <li>Prof. Mohammed Inuwa Ja’afaru (DVC Administration)</li>
                       <li>Prof. Mohammed Musa Malgwi (DVC Academic)</li>
                       <li>Ali Ibrahim Dogarai (External Member)</li>
                       <li>Abubakar Umar Dogondaji (External Member)</li>
                       <li>Hon. Diogo John Ngukpen (External Member)</li>
                       <li>Hon. Paul U. Ezeobi (External Member)</li>
                       <li>Mr. Kalu Kalu Obasi (Rep. Federal Ministry of Education)</li>
                       <li>Prof. Kalep Bulus Filli (Rep. Senate on Council)</li>
                       <li>Prof. (Mrs.) Margaret Samuel Nadro (Rep. Senate on Council)</li>
                       <li>Prof. Danjuma Jibasen (Rep. Senate on Council)</li>
                       <li>Prof. Abdullahi Muhammad Saddiq (Rep. Senate on Council)</li>
                       <li>Engr. Abdullahi Madu Yami (PhD) (Rep. Congregation on Council)</li>
                       <li>Ahmed Baba Lawan (Rep. Congregation on Council)</li>
                       <li>Haj. Halima Mohammed Bala (Registrar & Secretary to Council)</li>

                   </ul>
               </div>
           </div>
           <div>
            <h2 className='AboutLeadership-Title'>In Attendance</h2>
            <div>
                <ul>
                    <li>Dr. Tukur Abba (University Librarian)</li>
                    <li>Mr. Mamman W. Malgwi (Bursar)</li>
                    <li>Prof. Hammandikko G. Mu’azu (Ag. Director, Academic Planning)</li>
                    <li>Bldr. Suleiman J. Ibrahim (Director, Works & Maintenance)</li>
                    <li>Arc, John C. A. Shallangwa (Director, Physical Planning)</li>
                </ul>
            </div>
           </div>
           <div>
            <h2 className='AboutLeadership-Title'>Secretariat</h2>
            <div>
                <ul>
                    <li>Dr. Mustafa U. Migawa (Deputy Registrar)</li>
                    <li>Aliyu A. Waziri (Principal Executive Officer)</li>
                   
                </ul>
            </div>
           </div>


<VcAbout/>
        </div>
     );
}
 
export default AboutLeadership;