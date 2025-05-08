import { Button } from "@/components/ui/button";

export const Captions = () => {
  return (
    <div className="space-y-1">
      <p className="text-white font-[--font-inter-regular]">Video Caption</p>
      <div className="flex gap-2 flex-wrap">
        <Button className="text-sm text-shadow-lg text-yellow-600 font-[--font-inter-extrabold bg-stone-900 hover:bg-stone-900 w-20">
          Youtube
        </Button>

        <Button className="text-sm text-shadow-lg text-white font-[--font-inter-extrabold bg-stone-900 hover:bg-stone-900  w-20">
          Supreme
        </Button>

        <Button className="text-sm text-shadow-lg text-green-600 font-[--font-inter-extrabold bg-stone-900 hover:bg-stone-900  w-15">
          NEON
        </Button>

        <Button className="text-sm text-shadow-lg text-pink-600 font-[--font-inter-extrabold bg-stone-900 hover:bg-stone-900  w-20">
          GLITCH
        </Button>

        <Button className="text-sm text-shadow-lg text-red-600 font-[--font-inter-extrabold bg-stone-900 hover:bg-stone-900  w-15">
          Fire
        </Button>

        <Button className="text-sm text-shadow-lg text-sky-600 font-[--font-inter-extrabold bg-stone-900 hover:bg-stone-900  w-25">
          Futuristic
        </Button>
      </div>
    </div>
  );
};
