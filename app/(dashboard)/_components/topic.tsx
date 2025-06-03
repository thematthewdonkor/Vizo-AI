"use client";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Stars } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

//Type
interface Suggestion {
  topic: string;
}

// Demo data
const suggestions: Suggestion[] = [
  { topic: "Romantic" },
  { topic: "Fun fact" },
  { topic: "Comedy" },
  { topic: "Motivation" },
];

interface TopicProps {
  handleChange: (field: string, topic: Suggestion) => void;
}

export const Topic = ({ handleChange }: TopicProps) => {
  const [selected, setSelected] = useState<Suggestion>({ topic: "" });

  return (
    <div className=" flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <p className="text-white text-md font-[--font-inter-regular]">
          Video Title
        </p>
        <Input
          onChange={(event) =>
            handleChange("title", { topic: event.target.value })
          }
          placeholder="Enter video title"
          className="
              border-[1px] 
              border-stone-800 
              focus-visible:border-[1px] 
              focus-visible:border-stone-800 
              focus-visible:ring-0
              text-white 
              font-[--font-inter-regular]
              placeholder:text-xs 
              placeholder:font-[--font-thin]
              "
        />
      </div>
      <Tabs defaultValue="video_topic" className="w-full">
        <p className="text-white text-md font-[--font-inter-regular] ">
          Video Topic
        </p>
        <TabsList className="grid  grid-cols-2 bg-stone-900">
          <TabsTrigger
            value="your_topic"
            className="text-white font-[--font-inter-regular] text-sm font-normal data-[state=active]:bg-stone-800"
          >
            Enter topic
          </TabsTrigger>
          <TabsTrigger
            value="suggestions"
            className="text-white font-[--font-inter-regular] text-sm font-normal data-[state=active]:bg-stone-800"
          >
            Suggestions
          </TabsTrigger>
        </TabsList>
        <TabsContent value="your_topic" className="text-white">
          <div className="space-y-1">
            <Textarea
              onChange={(event) =>
                handleChange("topic", { topic: event?.target.value })
              }
              placeholder="Enter your own topic"
              className="
              border-[1px] 
              border-stone-800 
              focus-visible:border-[1px] 
              focus-visible:border-stone-800 
              focus-visible:ring-0
              text-white 
              text-sm
              placeholder:text-xs 
              font-[--font-inter-regular]
              placeholder:font-[--font-thin]
              "
            />
          </div>
        </TabsContent>
        <TabsContent value="suggestions">
          <div className="flex flex-wrap gap-2">
            {suggestions.map((suggestion) => (
              <Button
                key={suggestion.topic}
                className={`bg-stone-900 hover:bg-stone-950 text-sm font-[--font-inter-thin] w-20 ${
                  suggestion.topic === selected.topic ? "bg-red-500" : ""
                }`}
                onClick={() => {
                  setSelected(suggestion);
                  handleChange("topic", suggestion);
                }}
              >
                {suggestion.topic}
              </Button>
            ))}
          </div>
        </TabsContent>
      </Tabs>
      <Button
        size="sm"
        className="
              bg-white 
              text-black
              text-sm
              hover:bg-white
              hover:text-black
              md:w-32
              font-[--font-inter-regular]
           "
      >
        <Stars size={24} strokeWidth={1} />
        Generate scripts
      </Button>
    </div>
  );
};
