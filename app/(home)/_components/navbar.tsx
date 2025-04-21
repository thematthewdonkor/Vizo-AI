"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

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

  {
    label: "Sign up",
    href: "/sign-up",
  },
];

export const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className="w-full bg-transparent p-5 ">
      <div className="hidden md:flex md:justify-center md:gap-20 ">
        {routes.map((route) => (
          <Link
            key={route.label}
            href={route.href}
            className={cn(
              "text-sm text-center",
              pathname === route.href ? "text-white font-bold" : "text-white"
            )}
          >
            {route.label}
          </Link>
        ))}
      </div>

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
          <SheetContent side="left">
            <div className="flex flex-col gap-6 p-5">
              {routes.map((route) => (
                <Link
                  key={route.label}
                  href={route.href}
                  className={cn("text-sm")}
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
