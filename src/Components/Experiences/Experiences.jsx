import React, {useRef} from 'react'
import './Experiences.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Experiences = () => {

   const slider =useRef(); 
   let tx = 0;

   const slideForward = () => {
   if (tx > -50){
    tx -= 25;
   }
   slider.current.style.transform = `translateX(${tx}%)`
   }
   const slideBackward = () => {
    if (tx < 0){
        tx += 25;
       }
       slider.current.style.transform = `translateX(${tx}%)`
   }

  return (
    <div className='experiences'>
      <img src={next_icon} alt="" className='next-btn' onClick=
      {slideForward} />
      <img src={back_icon} alt="" className='back-btn' onClick=
      {slideBackward} />
      <div className="slider">
        <ul ref={slider}>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_1} alt="" />
                        <div>
                            <h3>Sanjeevani Shrivastava</h3>
                            <span>Television actor</span>
                        </div>
                    </div>
                    <p>Sudarshan Kriya has helped me not only to build my immunity, fitness and overall health but also to keep calm and powerful over the ups and downs in my profession.I am glad when young participants join in to learn Sudarshan Kriya.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_2} alt="" />
                        <div>
                            <h3>Aman Khare</h3>
                            <span>Cricketer</span>
                        </div>
                    </div>
                    <p>I have been doing Sudarshan Kriya for many years.My family does it too. It has been helping all of us. For me, the breathing technique has been a beautiful discovery. With its regular practice, I can manage my daily life stress and anxiety much more effectively.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_3} alt="" />
                        <div>
                            <h3>Neetu Shrivastava</h3>
                            <span>Designer</span>
                        </div>
                    </div>
                    <p>Sudarshan Kriya has helped me not only to build my immunity, fitness and overall health but also to keep calm and powerful over the ups and downs in my profession.I am glad when young participants join in to learn Sudarshan Kriya.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_4} alt="" />
                        <div>
                            <h3>Shiv</h3>
                            <span>Yoga Teacher</span>
                        </div>
                    </div>
                    <p>Sudarshan Kriya has helped me not only to build my immunity, fitness and overall health but also to keep calm and powerful over the ups and downs in my profession.I am glad when young participants join in to learn Sudarshan Kriya.</p>
                </div>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Experiences
