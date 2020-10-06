import AOS from 'aos';
import { useEffect } from 'react';
import Layout from '../components/Layout';


const Anime = () => {
  useEffect(() => {
  AOS.init({
    
  })
  },[]);

  return(
    <Layout>
    <div data-aos='fade-up'>
      Animation
    </div>
    <div className='grids'>
      <div data-aos="zoom-in-down" data-aos-duration="7000" className='boxes bg-purple-500'>Box 1</div>
      <div data-aos="flip-up" data-aos-duration="9000" className='boxes bg-pink-500'>Box 2</div>
      <div  data-aos="fade-up" className='boxes bg-red-400'>Box 3</div>
      <div  data-aos="fade-right" className='boxes bg-orange-500'>Box 4</div>
      <div  data-aos="fade-left" className='boxes bg-yellow-500'>Box 5</div>
      <div  data-aos="flip-left" className='boxes bg-green-500'>Box 6</div>
      <div  data-aos="fade-up-right" className='boxes bg-teal-500'>Box 7</div>
      <div  data-aos="fade-up-left" className='boxes bg-blue-500'>Box 8</div>
      <div  data-aos="zoom-out" className='boxes bg-orange-500'>Box 9</div>
      <div  data-aos="fade-up"  data-aos-duration="4000" className='boxes bg-green-500'>Box 10</div>
      <div  data-aos="fade-down" data-aos-easing="linear"
     data-aos-duration="4500" className='boxes bg-pink-500'>Box 11</div>
 
      <style jsx>{`
      .boxes {
        margin: 20px;
        margin-top: 150px;
        overflow: hidden;
        height: 200px;
        max-height: 35hv;
        box-shadow: 0px 12px 18px -6px rgba(0, 0, 0, 0.3);
      }

      .grids {
        max-width: 50%;
        margin: 0 auto;
      }
    `}</style>
    </div>
    </Layout>
  )
};


export default Anime;