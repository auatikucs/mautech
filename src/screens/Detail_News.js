import student from '../assets/student.jpg';
import news_pic1 from '../assets/news_pic1.jpeg';
import mau_cover from '../assets/mau_cover.jpg';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { formatDate } from '../components/FormatDate';
import UniNews from '../sub-components/UniNews';
import { CalendarMonthOutlined, CalendarTodayOutlined } from '@mui/icons-material';

const DetailNews = () => {
    const {id}=useParams()
    const navigate=useNavigate()
    const [singleNews,setSingleNews]=useState(null)
    useEffect(()=>{
        fetch(`https://mau-web-server.fly.dev/admin/get-single-news-event?eventId=${id}`)
        .then(res=>{
            res.json()
            .then(data=>{
            setSingleNews(data.result)
            })
        })
        window.scrollTo({
            top:0,
            behavior: 'smooth',
          })
    },[])
    return ( 
        <div className='Deatail-News-Container'>
           
        {
        singleNews!==null&&
        (
        <div className='News-Header'>
           
            <div><h2 className='News-Title4'>{singleNews.header}</h2><br></br>
            <span style={{display:'flex'}}><CalendarTodayOutlined style={{paddingRight:10}}/> {(singleNews.dateEntered.slice(0,10))} </span>
            </div>
            
            <img style={{height:'40vh'}} src={singleNews.image} alt="" srcset="" width='100%'  />
            <div className='News-Content'>
                <p>{singleNews.description}</p>
            </div>
        </div>
        )
        }
            
        <div>
        <div><span className='SeeAllNews'><Link to='/allnews'>VIEW ALL NEWS ></Link></span></div> 
        </div>
       
        </div>
        
     );
}
 
export default DetailNews;