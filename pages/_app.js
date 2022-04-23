import Layout from '../components/Layout';
import '../styles/globals.css';
import 'antd/dist/antd.min.css';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
