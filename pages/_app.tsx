import "../styles/globals.css";
import type { AppProps } from "next/app";

// function MyApp({ Component, pageProps }: AppProps) {
//   return (
//       <Component {...pageProps} />

//   );
// }
// export default MyApp;
// ref: https://stackoverflow.com/a/71869550/11367370

const MyApp = ({ Component, pageProps }: any) => (
  <>
    <Component {...pageProps} />
  </>
);
export default MyApp;
