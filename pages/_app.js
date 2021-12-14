import 'react-multi-carousel/lib/styles.css';
import 'react-modal-video/css/modal-video.min.css';
import 'rc-drawer/assets/index.css';
import 'typeface-dm-sans';
import Layout from '../components/layout';
import '../styles/globals.css';

// import Layout from 'components/layout';
// import Header from 'components/header/header';

export default function CustomApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
