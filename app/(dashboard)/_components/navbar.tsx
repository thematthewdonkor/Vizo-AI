import { UserButton } from "@clerk/nextjs";
import { SearchPage } from "./search";
import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MobileNavbar } from "./mobile-navbar";
import { Separator } from "@/components/ui/separator";

export const Navbar = () => {
  return (
    <div
      className="
 
    relative
     "
    >
      <div className="flex items-center h-16 px-4 md:px-12">
        <div className="flex-1">
          <SearchPage />
        </div>

        <div className="hidden md:flex items-center md:justify-between sm:gap-4  xl:gap-20">
          <Button size="icon">
            <Bell className="text-white h-5 w-5" />
          </Button>
          <UserButton />
        </div>
        {/* Mobile navigation */}
        <MobileNavbar />
      </div>
      <Separator className="w-72 bg-white/5" />
    </div>
  );
};
