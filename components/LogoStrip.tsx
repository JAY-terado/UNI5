"use client";

import React from 'react';
import Image from 'next/image';

const LogoStrip = () => {
  interface Logo {
    id: number;
    name: string;
    url: string;
  }

  const logos: Logo[] = [
    { id: 1, name: "CINE Line", url: "/patnership comp/CINELine.png" },
    { id: 2, name: "Holiday Inn", url: "/patnership comp/HolidayInn.png" },
    { id: 3, name: "PT Ecological", url: "/patnership comp/PT ecological.png" },
    { id: 4, name: "Prakriti Hospital", url: "/patnership comp/Prakriti_hospital.png" },
    { id: 5, name: "TErado", url: "/patnership comp/TErado.png" },
    { id: 6, name: "Viva Group", url: "/patnership comp/Viva_group_butterfly.png" },
    { id: 7, name: "Simpolo", url: "/patnership comp/simpolo.png" },
  ];

  return (
    <section 
      id="clients" 
      className="relative py-12 md:py-20 bg-transparent overflow-hidden"
    >
      <div className="container mx-auto px-4 mb-10">
        <p className="text-center text-[10px] md:text-xs font-800 text-brand-gray dark:text-gray-400 uppercase tracking-[0.3em]">
          Partnering with top industry experts
        </p>
      </div>
      
      <div className="relative">
        <div className="flex overflow-x-hidden" style={{ WebkitMaskImage: 'linear-gradient(to right, transparent, black 25%, black 75%, transparent)', maskImage: 'linear-gradient(to right, transparent, black 25%, black 75%, transparent)' }}>
          <div className="infinite-scroll py-4 flex items-center">
          {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
            <div key={`${logo.id}-${index}`} className="flex-shrink-0 px-8 md:px-16 flex items-center justify-center h-16 md:h-20">
              <Image 
                src={logo.url} 
                alt={logo.name} 
                width={180} 
                height={60} 
                className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300 scale-100 md:scale-110 dark:invert dark:brightness-200 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
    </section>
  );
};

export default LogoStrip;
