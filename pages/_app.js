// Configuration
// Next.js uses the App component to initialize pages
// (js will be rendered on every page)
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
