import news_pic1 from '../assets/news_pic1.jpeg';
import mau_cover from '../assets/mau_cover.jpg';
import newsbackground from '../assets/newsbackground.jpg';
import fmc from '../assets/fmc.jpeg';
import matric from '../assets/matric.jpeg';
import  './Detail_News.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
const All_News = () => {
const [allNews,setAllNews]=useState([])
const navigate=useNavigate()
    useEffect(()=>{
        fetch(`https://new-modibbo-adama.herokuapp.com/admin/get-home-event`)
        .then(res=>{
            res.json()
            .then(data=>{
              setAllNews(data.message[0]['newsEvents'])
              console.log(data.message[0]['newsEvents'])
            })
        })
        window.scrollTo({
            top:0,
            behavior: 'smooth',
          })
    },[])
    return ( 
        <div>
            <div className='News_Background_Container' styles={{ backgroundImage:`url(${newsbackground})` }}>
                    <div className='hype'>
                        <span className='Background_Header_News_Title'>News</span><br></br>
                        <p className='Whats-happening'>What is happening at Modibbo Adama University ?</p>
                    </div>
               
            </div>
            <div className='Other-News'>
                <div><span className='Similar-News'>All News</span></div>
                <div className='Other-News-Cards'>
                    {
                        allNews.length>0&&(
                         allNews.map((news,ind)=>(
                     <div onClick={()=>{
                        navigate(`/news/${news.evntId}`)
                     }} key={ind} className='Other-News-Cards-Content'>
                        <div className='Other-News-Cards-Img-Holder1'><img src={news.image} alt="News Image" srcset="" height='250px' width='100%' /></div>
                        <div className='Other-News-Cards-Heading'>
                        <span className='date-news'>{news.dateEntered}</span>
                        <p className='all-new-individual-title'>{news.header}</p><br />

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
 
export default All_News;