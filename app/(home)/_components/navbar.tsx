"use client";

import Link from "next/link";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";

import { cn } from "@/lib/utils";

export const routes = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Pricing",
    href: "/pricing",
  },

  {
    label: "Explore",
    href: "/explore",
  },

  // {
  //   label: "Sign up",
  //   href: "/sign-up",
  // },
];

export const Navbar = () => {
  const { isSignedIn } = useUser();

  return (
    <div className="w-full bg-transparent p-5">
      <div className="hidden sm:flex justify-center items-center font-[--font-inter-black]">
        <div className="flex gap-4">
          {routes.map((route) => (
            <Link
              key={route.label}
              href={route.href}
              className="text-white text-md"
            >
              {route.label}
            </Link>
          ))}
        </div>

        <div className="flex">
          <Link href={`${isSignedIn ? "/dashboard" : "/sign-in"}`}>
            <Button className="text-md cursor-pointer ">Sign in</Button>
          </Link>
          <Link
            className="sm:-ml-3"
            href={`${isSignedIn ? "/dashboard" : "/sign-up"}`}
          >
            <Button className="text-md cursor-pointer">Sign up</Button>
          </Link>
        </div>
      </div>
      {/* Mobile device */}
      <div className="md:hidden ">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-transparent hover:text-white"
            >
              {/* TODO: Increase the icon size later */}
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="left"
            className="bg-accent-foreground text-white focus-visible:ring-0 focus-visible:outline-none"
          >
            <div className="flex flex-col gap-6 p-5 font-[--font-inter-black]">
              {routes.map((route) => (
                <Link
                  key={route.label}
                  href={route.href}
                  className={cn("text-md text-white")}
                >
                  {route.label}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};
