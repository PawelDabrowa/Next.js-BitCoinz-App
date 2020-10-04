import Head from 'next/Head';
import Navbar from './Navbar';

const Layout = (props) => (
  <>
    <Head>
      <title>Bitcoin</title>
    </Head>
    <Navbar/>
    {props.children}
  </>
);

export default Layout