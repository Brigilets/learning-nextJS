// The ONLY place to import GLOBAL STYLE
// this component allows us to store common state across all components
import "../styles/global.css";
import { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
