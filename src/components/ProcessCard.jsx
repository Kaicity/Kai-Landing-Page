import React from 'react';
import coding from "../assets/blackExcavator.jfif";
function ProcessCard({ number, title, description, background }) {
    return (
      <div
        className="flex flex-col items-start justify-start p-8 rounded-lg shadow-lg bg-gray-300 hover:bg-gray-200 transition-colors transform hover:scale-105"
        style={{
          backgroundImage: background ? `url(${background})` : '',
          width:'25vw',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          border: '2px solid rgba(255, 255, 255, 0.5)',
          marginLeft:'11%',
        }}
      >
        <div className="text-6xl font-bold text-white opacity-80">{number}</div>
        <h3 className="text-xl font-semibold mt-4 text-white" style={{ textAlign: 'justify' }}>
          {title}
        </h3>
        <p className="text-sm text-white mt-2" style={{ textAlign: 'justify' }}>
          {description}
        </p>
      </div>
    );
  }
  

  export default function ProcessGrid() {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-10">
        <ProcessCard
          number="01"
          title="Ideas"
          description="We foster an environment where creativity thrives. Our team employs brainstorming."
          background={coding}
        />
        <ProcessCard
          number="02"
          title="Planning"
          description="Our planning process includes a thorough analysis of your current situation."
          background={coding}
        />
        <ProcessCard
          number="03"
          title="Development"
          description="We tailor our development efforts to address your unique requirements."
          background={coding}
        />
      </div>
    );
  }
  
