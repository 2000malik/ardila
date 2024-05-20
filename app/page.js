// import styles from "./page.module.css";

import { About } from "./components/About";
import { Features } from "./components/Features";
import HeaderSection from "./components/HeaderSection";

export default function Home() {
  return (
    <main>
      <HeaderSection />
      <About />
      <Features />
    </main>
  );
}
