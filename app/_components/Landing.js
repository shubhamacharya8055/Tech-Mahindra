import React from "react";

function Landing() {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
        <div className="flex flex-col w-fit xl:h-[300px] xl:w-[840px] gap-y-5 px-10 py-4">
            <h1 className="xl:text-8xl text-4xl xl:font-semibold font-medium text-zinc-800 tracking-tight">Scale at Speed</h1>
            <p
            className="xl:text-lg text-sm text-gray-700"
            >Our promise to help enterprises across industries transform at speed and bring agility, resilience, and efficiency to their businesses.</p>
        </div>
    {/* Black Diagonal Line */}
    <div
      className="relative h-1 xl:top-[1rem] top-[10rem] z-50 left-0 w-full bg-black transform -skew-y-[18deg]"
    >    
        <video
          className="absolute top-0 right-0 min-w-full min-h-screen object-cover object-right-top"
          autoPlay
          loop
          muted
        >
          <source src="./techm.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
    </div>
  </div>
  );
}

export default Landing;
