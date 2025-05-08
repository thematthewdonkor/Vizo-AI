import React from "react";
import Image from "next/image";

const videostyles = [
  { image: "/images/realistic.jpg", text: "Realistic" },
  { image: "/images/mysterious.jpg", text: "Cinematic" },
  { image: "/images/walk.jpg", text: "anime" },
  { image: "/images/cartoon.png", text: "cartoon" },
];

export const ImageStyle = () => {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-white font-[--font-inter-regular]">Video Style</h2>
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
        {videostyles.map((videostyle) => (
          <div key={videostyle.text} className="relative">
            <Image
              src={videostyle.image}
              alt={videostyle.text}
              width={100}
              height={100}
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
            <p className="absolute bottom-4 left-4 text-white text-xs font-[--font-inter-thin]">
              {videostyle.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
