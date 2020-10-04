import Layout from '../components/Layout';

const About = () => (
  <Layout>
  <div className='container md:flex rounded-lg align-center p-24 justify-center'>
      <img
        className='ms:pb-8 md:h-60 md:w-60 mx-auto md:mx-0 md:mr-6'
        src='https://picsum.photos/200/300'
      />
      <div className='text-center mt-16 md:text-left'>
        <h2 className='text-lg'>Pawel Dabrowa</h2>
        <div className='text-green-500'>Web Developer</div>
        <div className='text-gray-600'>d@browa.co.uk</div>
        <button className="mt-4 btn btn-green">Read More</button>
      </div>
    </div>
 </Layout>
 );
 
 export default About