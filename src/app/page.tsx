import Image from "next/image";
import styles from "./page.module.css";
import Astro from "./Astro";

export default function Home() {
  return (
    <main className={styles.main}>
      <Astro />
    </main>
  );
}
