import Image from "next/image";
import styles from "./page.module.css";
import Banner from "@/Components/Banner/Banner";
import Blog from "@/Components/Blog/Blog";
import OurVault from "@/Components/OurVault/OurVault";
import OurProducts from "@/Components/OurProducts/OurProducts";
import LeaderBoard from "@/Components/LeaderBoard/LeaderBoard";

export default function Home() {
  return (
    <main>
      <Banner />
      <Blog />
      <OurVault />
      <LeaderBoard />
      <OurProducts />
    </main>
  );
}
