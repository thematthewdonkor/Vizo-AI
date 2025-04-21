import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SidebarRoutes } from "./sidebar-routes";
import { UserButton } from "@clerk/nextjs";

export const MobileNavbar = () => {
  return (
    <div className="md:hidden z-50 bg-accent-foreground ">
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="text-white bg-transparent hover:bg-transparent hover:text-white z-90"
          >
            {/* TODO: Increase the icon size later */}
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent className="bg-accent-foreground">
          <div className="px-4 py-2">
            <UserButton />
          </div>
          <SidebarRoutes />
        </SheetContent>
      </Sheet>
    </div>
  );
};
