"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useAuth } from "@clerk/nextjs";

export const Content = () => {
  const { isSignedIn } = useAuth();

  return (
    <div className="flex items-center flex-col">
      <div className="mt-10">
        <Image src="/images/vizo.png" alt="Vizo image" width={80} height={80} />
      </div>

      <div className="flex flex-col items-center space-y-2 mt-6 w-72 md:w-2xl gap-4">
        <h1 className="text-5xl md:text-6xl text-center font-bold text-white">
          AI YouTube Short Video Generator
        </h1>
        <p className="text-[16px] md:text-2xl text-white">
          🤖 AI generates scripts, images, and voice overs in seconds.⚡ Create,
          edit, and publish engaging shorts with ease!
        </p>
        {/* TODO: check if user is login => dashboard page or sign up page */}
        <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <Button className="rounded-full p-5 md:p-8  text-[16px] md:text-2xl text-center font-bold bg-white hover:bg-white text-black">
            Get Started
          </Button>
        </Link>
      </div>
    </div>
  );
};
