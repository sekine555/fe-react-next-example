import { AppProps } from "next/app";
import "@/styles/globals.css";

function ExampleApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default ExampleApp;
