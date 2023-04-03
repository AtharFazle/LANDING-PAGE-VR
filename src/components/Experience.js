import React from 'react';


import Img1 from '../assets/img/exp-img1.png'
import Img2 from '../assets/img/exp-img2.png'


const Experience = () => {
  return <section className='mb-12 lg:mb-24'>
    <div className='container mx-auto'>
      <div className='flex flex-col min-h-[480px] lg:space-x-20 lg:flex-row'>
        <div className='flex-1 flex space-x-6 items-center lg:space-x-12'>
          {/* image */}
          <div className='self-start'data-aos="fade-down"data-aos-offset="400">
            <img src={Img1}/>
          </div>
          <div className='self-end'data-aos="fade-up">
            <img src={Img2}/>
          </div>
        </div>
        {/* text */}
        <div className='flex-1 flex flex-col items-start justify-center mt-6 lg:mt-0' data-aos="fade-left"data-aos-offset="400">
          <h2 className='text-3x1 font-bold mb-6'>New Experience In Playing Games</h2>
          <p className='font-secondary mb-6'>non consectetur a erat nam at lectus urna duis convallis convallis tellus id interdum velit laoreet id donec ultrices tincidunt arcu non sodales neque sodales ut etiam sit amet nisl</p>
          <button className='btn'>Get It Now</button>
        </div>
      </div>
    </div>
    </section>
};

export default Experience;
