import Hero from "@/components/homepage/Hero";
import Image from "next/image";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <div>
      {/* <div><Toaster/></div> */}
      <Hero></Hero>
    </div>
  );
}
