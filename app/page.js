import Image from "next/image";
import Landing from "./_components/Landing";
import Capabilities from "./_components/Capabilities";
import Scale from "./_components/Scale";
import Industries from "./_components/Industries";

export default function Home() {
  return (
    <div className="relative z-10">
      <Landing />
      <Capabilities />
      <Scale/>
      <Industries />
    </div>
  );
}
