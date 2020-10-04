import Layout from '../components/Layout';
import Fetch from 'isomorphic-unfetch';
import Prices from '../components/Prices';
import MediaSocial from'../components/MediaSocial';
import { motion } from 'framer-motion';
import React from 'react';

const HomePage = (props) => (
 <Layout>
   <div className={'flex flex-col items-center pt-12 font-bold sm:text-1lg text-4xl'}>
   <h1>Welcome to BitCoinz</h1>
   </div>
  <motion.div initial='hidden' animate='visible' variants={{
    hidden: {
      scale: .8,
      opacity: 0
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: .4
      }
    },
  }}>
    <div className={'flex flex-col items-center pt-12 font-bold sm:text-1lg text-4xl'
     }>
      <Prices bpi={props.bpi} />
    </div>
  </motion.div>
  <MediaSocial />
 </Layout>
);

HomePage.getInitialProps = async function() {
  const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
  const data = await res.json();

  return  {
    bpi: data
  }
}

export default HomePage