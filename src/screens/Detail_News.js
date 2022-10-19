import student from '../assets/student.jpg';
import news_pic1 from '../assets/news_pic1.jpeg';
import mau_cover from '../assets/mau_cover.jpg';
import { useEffect, useState } from 'react';
import { useNavigate, useParams} from 'react-router';
import { Link } from 'react-router-dom';

const DetailNews = () => {
    const {id}=useParams()
    const navigate=useNavigate()
    const [singleNews,setSingleNews]=useState(null)
    useEffect(()=>{
        fetch(`https://new-modibbo-adama.herokuapp.com/admin/get-single-news-event?eventId=${id}`)
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
        <div style={{
            marginTop:110,
            width:'80%',
            position:'relative'
            }} className='Deatail-News-Container'>

        {
        singleNews!==null&&
        (
        <div className='News-Header'>
            <div><span className='News-Title'>{singleNews.header}</span><br></br>
            <span className='News-Date'>{singleNews.dateEntered} </span></div>
            <img style={{height:'60vh'}} src={singleNews.image} alt="" srcset="" width='100%'  />
            <div className='News-Content'>
                <p>{singleNews.description}</p>
            </div>
        </div>
        )
        }
            
        <span className='AllNews' onClick={()=>{
            navigate('/allnews')
        }} to='allnews'>
         All News   
        </span>
        </div>
        
     );
}
 
export default DetailNews;