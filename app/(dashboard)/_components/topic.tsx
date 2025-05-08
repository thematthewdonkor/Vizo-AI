import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Stars } from "lucide-react";
import { Input } from "@/components/ui/input";

// Demo data
const suggestions = [
  { title: "Romantic" },
  { title: "Fun fact" },
  { title: "Comedy" },
  { title: "Motivation" },
];

export const Topic = () => {
  return (
    <div className=" flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <p className="text-white text-sm font-[--font-inter-regular]">
          Video Title
        </p>
        <Input
          placeholder="Enter video title"
          className="
              border-[1px] 
              border-stone-800 
              focus-visible:border-[1px] 
              focus-visible:border-stone-800 
              focus-visible:ring-0
              text-white 
              placeholder:text-xs 
              placeholder:font-[--font-thin]
              "
        />
      </div>
      <Tabs defaultValue="video_topic">
        <p className="text-white text-sm font-[--font-inter-regular] ">
          Video Topic
        </p>
        <TabsList className="grid w-full grid-cols-2 bg-stone-900">
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
            <Input
              id="name"
              placeholder="Enter your own topic"
              className="
              border-[1px] 
              border-stone-800 
              focus-visible:border-[1px] 
              focus-visible:border-stone-800 
              focus-visible:ring-0
              text-white 
              placeholder:text-xs 
              placeholder:font-[--font-thin]
              "
            />
          </div>
        </TabsContent>
        <TabsContent value="suggestions">
          <div className="flex flex-wrap gap-2">
            {suggestions.map((suggestion) => (
              <Button
                key={suggestion.title}
                className="bg-stone-900 hover:bg-stone-900 text-xs font-[--font-inter-thin] w-20"
              >
                {suggestion.title}
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
              text-xs
              hover:bg-white
              hover:text-black
              md:w-30
              font-[--font-inter-regular]
           "
      >
        <Stars size={24} strokeWidth={1} />
        Generate scripts
      </Button>
    </div>
  );
};
