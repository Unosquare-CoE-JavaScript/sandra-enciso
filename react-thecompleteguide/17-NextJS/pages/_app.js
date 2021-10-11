/* This is a special file, this is kind of your route component */
import Layout from '../components/layout/Layout';
import '../styles/globals.css'

/* This special component acts as the root component NextJS will render 
It receives props and uses object de-structuring here. Component prop and page prop, this props are passed aauptmatically by NextJS
Component is a prop that holds the actual page content that should be rendered, and pageProps are specific props our pages might be getting*/
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
