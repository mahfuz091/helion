"use client";
import Image from "next/image";
// import "./page.module.css";
import Banner from "@/Components/Banner/Banner";
import Blog from "@/Components/Blog/Blog";
import OurVault from "@/Components/OurVault/OurVault";
import OurProducts from "@/Components/OurProducts/OurProducts";
import LeaderBoard from "@/Components/LeaderBoard/LeaderBoard";
import dynamic from "next/dynamic";

const MyComponent = dynamic(() => import("../Components/Main/Main.jsx"), {
  ssr: false,
});

export default function Home() {
  console.log(typeof window);
  // return (
  //   <main>
  //     <Banner />
  //     <Blog />
  //     <OurVault />
  //     <LeaderBoard />
  //     <OurProducts />
  //     {/* <MyComponent /> */}
  //   </main>
  // );
  return <MyComponent />;
}
