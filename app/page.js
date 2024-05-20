// import styles from "./page.module.css";

import { About } from "./components/About";
import { Features } from "./components/Features";
import HeaderSection from "./components/HeaderSection";
import { Opportunities } from "./components/Opportunities";

export default function Home() {
  return (
    <main>
      <HeaderSection />
      <About />
      <Features />
      <Opportunities/>
    </main>
  );
}
