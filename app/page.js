import Image from "next/image";
import Landing from "./_components/Landing";
import Capabilities from "./_components/Capabilities";
import Scale from "./_components/Scale";
import Industries from "./_components/Industries";
import Sustainibility from "./_components/Sustainibility";
import Studies from "./_components/Studies";
import Rise from "./_components/Rise";
import Explore from "./_components/Explore";
import Careers from "./_components/Careers";
import Footer from "./_components/Footer";
import ScrollToTopButton from "./_components/ScrollToTopButton";

export default function Home() {
  return (
    <div className="relative z-10">
      <ScrollToTopButton />
      <Landing />
      <Capabilities />
      <Scale/>
      <Industries />
      <Sustainibility />
      <Studies />
      <Rise />
      <Explore />
      <Careers />
      <Footer />
    </div>
  );
}
