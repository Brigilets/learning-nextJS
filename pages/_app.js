// The ONLY place to import GLOBAL STYLE
// this component allows us to store common state across all components
import "../styles/global.css";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
