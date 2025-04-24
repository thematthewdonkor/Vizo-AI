import Link from "next/link";
import { Button } from "@/components/ui/button";

const Content = () => {
  return (
    <div className="md:max-width-screen-xl h-56 mt-10">
      <div className="bg-[url(/images/background.png)] bg-cover bg-fixed bg-no-repeat rounded-lg">
        <div className="grid flex-col gap-2 p-6 md:p-12 ">
          <h1 className="text-3xl font-bold text-balance md:max-w-2xs text-white">
            AI YouTube Short Video Generator
          </h1>
          <p className="text-md  text-white/60 max-w-[300]">
            AI that generates scripts, images, and voice overs in seconds.
          </p>
          <Link
            href="/"
            className="justify-self-end border-1 border-white rounded-md"
          >
            <Button
              variant="ghost"
              className="text-white text-sm hover:bg-transparent hover:text-white"
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
