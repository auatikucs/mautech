import  './AboutMau.css';
import mau_cover from '../assets/mau_cover.jpg';
import vision1 from '../assets/vision1.png';
import philosophy1 from '../assets/philosophy1.png';
import mission4 from '../assets/mission4.png';
import values1 from '../assets/values1.png';
import student_pic from '../assets/mubarak.jpg';
import MyVideo from '../components/MyVideo';
import SUG from '../assets/SUG.jpeg';
import { useEffect } from 'react';
const AboutMau = () => {
    useEffect(()=>{
        window.scrollTo({
            top:0,
            behavior: 'smooth',
          })
    },[])
    return ( 
        <div>
        <div className="AboutMau-Container">
        <MyVideo title='About MAU' content='To be a centre of academic excellence, innovation and community development' source='https://res.cloudinary.com/nutscoders/video/upload/v1656936967/bgViiii_dx81hl.mp4'/>
            <div className='About-History-Container' styles={{ backgroundImage:`url(${mau_cover})` }}>
                <div className='H2-Container'>
                    <h2>BRIEF HISTORY OF MODIBBO ADAMA UNIVERSITY YOLA</h2>
                </div>
                <div>
                    <p>
                    The University is located at Sangere, a Village in Girei Local Government Area of Adamawa State, and some 10km from Jimeta.

                    In 1980 the Federal Government in response to the nationally acclaimed need for skilled, innovative and technologically oriented high-level manpower required to develop and nurture a technology based economy and society established seven new Universities of Technology.  Federal University of Technology, Yola, along with those of Abeokuta, Akure, Bauchi, Makurdi, Minna and Owerri, came into being in 1981.  This University admitted its first batch of students (214 numbers) in the 1982/83 academic session.  The Current population of regular undergraduates is 14600.

                    The University had barely taken off when the succeeding Military Government abolished four of the seven new Universities of Technology and merged them with older Universities in October, 1984.  Federal University of Technology, Yola was merged with University of Maiduguri and became known as Modibbo Adama College of the University of Maiduguri.  Four years later, on 1st January 1988 the University was granted its former name and full autonomy as the Federal University of Technology, Yola.  A substantive Vice-Chancellor was therefore appointed to run the affairs of the University.

                    {/* The University from inception has run the School system of Administration with two Schools, the School of Science and Technology Education and the School of Management Sciences.  Presently, the University has six Schools, namely, the School of Agriculture and Agricultural Technology, Engineering and Engineering Technology, Environmental Sciences, Management and Information Technology, Pure and Applied Sciences and Technology and Science Education.The then President, Dr. Goodluck Ebele Jonathan, GCFR, approved the change of name of the University from: Federal University of Technology, Yola (FUT,Yola) To Modibbo Adama University of Technology, Yola (MAUTECH,Yola), supposedly named after Modibbo Adama Ibn Hassan(1809-1847), a great scholar, an erudite educationist, an outstanding leader and the founder of the Fombina Kingdom (The Present Adamawa Emirate). As the first ruler and founder of the Emirate, Modibbo Adama Ibn Hassan was one of the disciples and flag bearers of Sheikh Usman Ibn Fodio of the Sokoto Caliphate. The new name took effect from 1st October, 2011. Subsequently,  President Muhammadu Buhari assented to the Modibbo Adama University Yola establishment bill on the 6th of January 2021. */} 
                    <strong>  Read more{'>>>'}</strong>

                    </p>
                </div>
            </div>
            {/* <div className='University-Objectives-Container'> */}
                {/* <div className='University-Objectiver-Container-Head'>
                   <div className='Header-Banner'></div> <h1>Vision, Mission, Philosophy & Core Values</h1>
                </div>
                <div>
                    <span className='Objective-Title'>Vision</span>
                    <p>To be a centre of academic excellence, innovation and community development</p>
                </div>
                <div>
                    <span className='Objective-Title'>Mission</span>
                    <p>To set the path for knowledge by providing educational and entrepreneurial services for sustainable growth and development</p>
                </div>
                <div>
                    <span className='Objective-Title'>Philosophy</span>
                    <p>The philosophy of Modibbo Adama University, Yola is to recognise the worth and dignity of academic pursuit by respecting all cultural affiliations and diversity of staff and students, by helping students reach their potentials within standard timeframes and by a committed to community service to address gaps that hinder development and sustainability.

                    </p>
                </div>
                <div>
                    <div>
                    <span className='Objective-Title'>Core Values</span>
                    </div>
                   <div className='Core-Values-Items'> 
                    <div>
                        <span className='Sub-Objective-Title'>Integrity</span><br></br>
                        <span>maintaining the highest ethical standards in teaching, research, public engagement and service.</span>
                    </div>
                    <div>
                        <span className='Sub-Objective-Title'>Innovation</span><br></br>
                        <span>encouraging, considering and supporting development of ideas by fostering individual ingenuity and creativity.</span>
                    </div>
                    <div>
                        <span className='Sub-Objective-Title'>Excellence</span><br></br>
                        <span> pursuit of outstanding performance, abhorring mediocrity and promoting excellence in research, teaching and service through a merit-based recruitment and nurturing of staff and students.</span>
                    </div>
                    <div>
                        <span className='Sub-Objective-Title'>Colloboration</span><br></br>
                        <span> working toward common goals with other institutions, organizations and communities while valuing teamwork, participation and diversity of ideas and perspectives.</span>
                    </div>
                    </div>
                </div> */}
            {/* </div>
             */}
        <div className='New-Objective-Container'>
            <div className='Vision-Mission-Container-New'>
                <div className='vision-border'>
                   <center><img className='' src={vision1} alt="" srcset="" height='150px' width='200px'/></center> <br></br>
                    {/* <span className='Objective-Title'>Vision</span> */}
                    <p>To be a centre of academic excellence, innovation and community development</p>
                </div>
                <div className='mission-border'>  
                 <center> <img className='' src={mission4} alt="" srcset="" height='120px' width='180px'/><br></br>
                    <span className='Objective-Title'>Mission</span></center>
                    <p>To set the path for knowledge by providing educational and entrepreneurial services for sustainable growth and development</p>
                </div>
            </div>
            <div className='Philosophy-Container-New'>
                <div>
                <center><img className='' src={philosophy1} alt="" srcset="" height='150px' width='200px'/><br></br>
                    <span className='Objective-Title'>Philosophy</span></center>
                    <p className='philo-cont'>The philosophy of Modibbo Adama University, Yola is to recognise the worth and dignity of academic pursuit by respecting all cultural affiliations and diversity of staff and students, by helping students reach their potentials within standard timeframes and by a committed to community service to address gaps that hinder development and sustainability.

                    </p>
                </div>
            </div>
            <div className='Objective-Container-New'>
                <div>
                     <center><img className='' src={values1} alt="" srcset="" height='150px' width='200px'/></center>
                    <center><div>
                    <span className='Objective-Title'>Core Values</span>
                    </div></center>
                   <div className='Core-Values-Items'> 
                    <div>
                        <span className='Sub-Objective-Title'>Integrity</span><br></br>
                        <span>➡maintaining the highest ethical standards in teaching, research, public engagement and service.</span>
                    </div>
                    <div>
                        <span className='Sub-Objective-Title'>Innovation</span><br></br>
                        <span>➡encouraging, considering and supporting development of ideas by fostering individual ingenuity and creativity.</span>
                    </div>
                    <div>
                        <span className='Sub-Objective-Title'>Excellence</span><br></br>
                        <span>➡pursuit of outstanding performance, abhorring mediocrity and promoting excellence in research, teaching and service through a merit-based recruitment and nurturing of staff and students.</span>
                    </div>
                    <div>
                        <span className='Sub-Objective-Title'>Colloboration</span><br></br>
                        <span>➡working toward common goals with other institutions, organizations and communities while valuing teamwork, participation and diversity of ideas and perspectives.</span>
                    </div>
                    </div>
                </div> 
            </div>
             </div>
             <h2>TESTIMONIALS</h2>
             <div className='Student-Info'> 
                    <div className='Student-Display-Photo'>
                    <img className='Student-Pic' src={SUG} alt="" srcset="" height='200px' width='200px'/>
                    </div>
                    <div className='Student-Content'>
                        {/* <span className='Qoute'>"</span><br></br> */}
                        <span>Moddibo Adama University is one of the leading citadels across west Africa. It has passed through turmoils of times and seasons to appear today in its immaculate repute socially, morally and academically. 
M.A.U has had interesting transitions within the cause of its historic evolutions and has been able to shape and produce leading entrepreneurs, leaders and veterans in the scientific administrative sphere.
With its hitherto wide range of staff banks that are reckoned to International standards and decorum full, it is indeed a Citadel to start your journey of success to life.  </span>
                            <p><strong>John Jerry Dickson</strong></p>
                    </div>
             </div>
             <div className='Alumni-Info'> 
                    <div className='Alumni-Display-Photo'>
                    <img className='Student-Pic' src={student_pic} alt="" srcset="" height='200px' width='200px'/>
                    </div>
                    <div className='Alumni-Content'>
                        {/* <span className='Qoute'>"</span><br></br> */}
                        <span>I graduated from Computer Science department in Modibbo Adama University, Yola. The training and experience I had in MAU has contributed to my success in my IT career. </span>
                            <p><strong>Mubarak Ibrahim</strong></p>
                    </div>
             </div>
        </div>
        </div>
     );
}
 
export default AboutMau;