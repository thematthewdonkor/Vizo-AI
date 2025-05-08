import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Content = ({ className }: { className: string }) => {
  return (
    <div className={cn("md:max-width-screen-xl mt-10 max-h-50", className)}>
      <div className="bg-[url(/images/background.png)] bg-cover max-h-50 h-full w-full bg-fixed bg-no-repeat rounded-lg">
        <div className="grid flex-col gap-2 items-center md:px-12 ">
          <h1 className="md:text-3xl text-xl font-bold text-balance md:max-w-3xs text-white text-center md:text-left">
            AI YouTube Short Video Generator
          </h1>
          <p className="md:flex md:text-md text-sm text-white/60 max-w-[260] text-center md:text-left">
            AI that generates scripts, images, and voice overs in seconds.
          </p>
          <Link href="#" className="md:justify-self-end justify-self-center">
            <Button
              variant="ghost"
              className="cursor-pointer md:flex text-white text-sm hover:bg-transparent hover:text-white border-1 border-white rounded-md mb-10 "
            >
              Watch Tutorials
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Content;
