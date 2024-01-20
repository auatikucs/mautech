import { useNavigate } from 'react-router-dom';
import hostel from '../assets/hostel.jpg'

const HomeNews = ({image,heading='',body='',link='', timePosted=''}) => {
    const navigate = useNavigate();
    return (  
        <>
        {/* <div>
            <h2>NEWS</h2>
        </div> */}
      
            <div  onClick={()=>{
     navigate(link)
     }}>
                <img src={image} alt="" width='100%' height='300px'/><br></br>
                <span style={{textAlign:'justify', textJustify: 'distribute', wordSpacing: '-2px'}}>{heading}</span>
                <span>{timePosted}</span>
            </div>
            {/* <div>
                <img src={hostel} alt="" width='100%' height='300px'/><br></br>
                <span>Thank You AUN for the Numerous Opportunities Given Me for Self-Development – Ms. Grace Nwabunwanne Ofili, Valedictorian, Class of 2023</span>
            </div>
            <div>
                <img src={hostel} alt="" width='100%' height='300px'/><br></br>
                <span>Thank You AUN for the Numerous Opportunities Given Me for Self-Development – Ms. Grace Nwabunwanne Ofili, Valedictorian, Class of 2023</span>
            </div> */}
            
            {/* <div className='SeeAllNews'>
                <span>SEE ALL NEWS</span>
            </div> */}
      
        </>
    );
}
 
export default HomeNews;