import { PanelLeftClose } from "lucide-react";
import { SidebarRoutes } from "./sidebar-routes";
import { Button } from "@/components/ui/button";
import { Logo } from "./logo";
import { Separator } from "@/components/ui/separator";

export const Sidebar = () => {
  return (
    <>
      <div className="h-16 px-4 flex items-center justify-between">
        <Logo />
        <Button size="icon" className="cursor-pointer">
          <PanelLeftClose className="h-6 w-6" />
        </Button>
      </div>
      <Separator className="w-72 bg-white/5" />
      <SidebarRoutes />
    </>
  );
};
