import React from "react";

export default function NanoBubbleReactor() {
  return (
    <div className="w-full min-h-screen bg-gray-100 flex flex-col items-center p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Nano Bubble Reactor Process Animation (Coming Soon)
      </h1>
      
      <p className="text-lg text-gray-700 text-center max-w-3xl mb-6">
        The Nano Bubble Reactor is designed to efficiently dissolve gases into 
        liquids using nanobubbles. These ultra-fine bubbles, smaller than 200 nm, 
        enhance gas transfer efficiency, increase reactivity, and improve processing 
        outcomes. It is widely used in water treatment, chemical reactions, and 
        advanced oxidation processes.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="shadow-lg rounded-lg overflow-hidden">
          <img 
            src="/images/nbr.webp"  // <-- Corrected path
            alt="Nano Bubble Reactor"
            width={500}
            height={500}
          />
        </div>
        <div className="shadow-lg rounded-lg overflow-hidden">
          <img 
            src="/images/Picture1.png"  // <-- Corrected path
            alt="Process Flow Diagram"
            width={500}
            height={500}
          />
        </div>
        <div className="shadow-lg rounded-lg overflow-hidden  justify-center">
  <video 
    src="/images/video.mp4"  // Ensure the file is inside /public/images/
    width="500" 
    height="300" 
    controls 
  />
</div>

        
      </div>
      
      <p className="text-lg text-gray-700 text-center max-w-3xl mt-6">
        Our team is currently working on an advanced process animation to demonstrate 
        the working of the Nano Bubble Reactor in detail. Stay tuned for updates!
      </p>
    </div>
  );
}
