import { useEffect } from 'react';
import news_pic1 from '../assets/news_pic1.jpeg';

const DetailNews = () => {
    useEffect(()=>{
        window.scrollTo({
            top:0,
            behavior: 'smooth',
          })
    },[])
    return ( 
        <div className='Deatail-News-Container'>
            <div className='News-Header'>
                <div><span className='News-Title'>MAU Admits 7609 Students for the 2022/2023 Session </span><br></br>
                <span className='News-Date'>Wednesday, 22nd May 2022 </span></div>
                <img src={news_pic1} alt="" srcset="" width='100%' />
                <div className='News-Content'>
                    <p>The Modibbo Adama University, Yola, has admitted 3,141 students for the 2020/2021 academic session.

                    Vice Chancellor of the University, Prof Abdullahi Tukur, who disclosed this on Saturday, said the number falls short of the 4,755 new students that the University has capacity for.

                    “The university has a total capacity of admitting 4,755 undergraduate applicants for the 2020/2021 academic year. At the end of the admission process, a total of 3,141 applicants were offered admission,” the VC said.

                    This was in his address at the 2020/2021 matriculation ceremony at the main campus of the university in Girei.

                    Breaking down the numbers of students admitted for the different academic programmes, the VC said the registered undergraduate fresh students are 2,341 which comprises 913 direct entry students, 154 sandwich students and 150 Distance Learning students.

                    “The undergraduate registered fresh students comprise 1,631 male and 710 female,” the VC added.

                    He announced that the University had received approval for the introduction of Medicine and Surgery in addition to reinstated degree programmes of Accounting, Business Administration, Banking and Finance, Economics, as well as Library and Information Science.

                    “I am certain we will be welcoming new students into such programmes by the next academic year,” he said.</p>
                </div>
            </div>
            <div className='Other-News'>
                
            </div>
        </div>
        
     );
}
 
export default DetailNews;