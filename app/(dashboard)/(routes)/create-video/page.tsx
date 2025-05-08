"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

import { Topic } from "../../_components/topic";
import { Voice } from "../../_components/voice";
import { Captions } from "../../_components/captions";
import { ImageStyle } from "../../_components/image-style";

const CreateVideo = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="md:px-4 lg:px-12 px-8 mt-6">
      {!showForm ? (
        <div className="flex flex-col gap-2">
          <h2 className="text-white text-md font-[--font-inter-bold]">
            My videos
          </h2>
          <div
            className="flex flex-col items-center border-2 border-dashed 
            border-white/10 rounded-lg gap-2 md:p-10 p-4
            "
          >
            <p className="text-white/40 text-xs mb-2 font-[--font-inter-thin]">
              Create your first ai generated YouTube short in just seconds
            </p>
            <Button
              onClick={() => setShowForm(true)}
              className="bg-[#1E1E1E] py-2 px-6 text-sm font-[--font-inter-regular]"
            >
              +Create New Video
            </Button>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3">
          {/* Form */}
          <div className="col-span-2 space-y-4">
            {/* Video topic & Scripts */}
            <Topic />
            {/* {Video Image style } */}
            <ImageStyle />
            {/* Voice  */}
            <Voice />
            {/* Captions */}
            <Captions />
          </div>
          {/* Preview */}
          <div>
            <h2 className="text-white">Video preview</h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateVideo;
