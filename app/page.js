// import styles from "./page.module.css";

import { About } from "./components/About";
import { AppDownload } from "./components/AppDownload";
import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import HeaderSection from "./components/HeaderSection";
import { Opportunities } from "./components/Opportunities";
import Testimonies from "./components/Testimony";

export default function Home() {
  return (
    <main>
      <HeaderSection />
      <About />
      <Features />
      <Opportunities/>
      <Testimonies/>
      <AppDownload/>
      <Footer/>
    </main>
  );
}
