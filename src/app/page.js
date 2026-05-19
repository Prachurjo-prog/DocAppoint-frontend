import HeroSection from "@/Components/Banner";
import DocSpeciality from "@/Components/DocSpeciality";

import Promotion from "@/Components/Promotion";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <DocSpeciality />

      <Promotion />
    </div>
  );
}
