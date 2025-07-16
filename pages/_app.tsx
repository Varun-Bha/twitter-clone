import Layout from "@/components/Layout ";
import LoginModal from "@/components/modals/LoginModal";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import RegisterModal from "@/components/modals/RegisterModal";


export default function App({ Component, pageProps }: AppProps) {
  return(<>
  <RegisterModal />
  <LoginModal />
      <Layout>
        <Component {...pageProps} />
      </Layout>
  </>
  )
}
