import { Button } from "@/components/ui/button";
// Data
const voices = [
  { name: "US Sarah (Female)" },
  { name: "UK Adams (Man)" },
  { name: "IND Sharkhi (Female)" },
  { name: "GH Kofi (Man)" },
];

export const Voice = () => {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-white font-[--font-inter-regular]">Video Voice</h2>
      <div className="flex flex-wrap gap-2">
        {voices.map((voice) => (
          <div key={voice.name}>
            <Button
              size="sm"
              className="bg-stone-900 hover:bg-stone-900 text-xs font-[--font-inter-thin]"
            >
              {voice.name}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};
