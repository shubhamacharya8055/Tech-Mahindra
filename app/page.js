import Image from "next/image";
import Landing from "./_components/Landing";
import Capabilities from "./_components/Capabilities";

export default function Home() {
  return (
    <div className="relative z-10">
      <Landing />
      <Capabilities />
    </div>
  );
}
