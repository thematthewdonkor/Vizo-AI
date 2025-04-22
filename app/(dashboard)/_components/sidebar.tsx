"use client";

import { PanelLeftClose } from "lucide-react";
import { SidebarRoutes } from "./sidebar-routes";
import { Button } from "@/components/ui/button";
import { Logo } from "./logo";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";

// const SidebarContext = createContext();

export const Sidebar = () => {
  const [expanded, setExpanded] = useState(true);

  return (
    <>
      <div className="h-16 px-4 flex items-center justify-between">
        <div
          className={`overflow-hidden transition-all ${
            expanded ? "flex" : "hidden"
          }`}
        >
          <Logo />
        </div>
        <Button
          size="icon"
          className="cursor-pointer"
          onClick={() => setExpanded((curr) => !curr)}
        >
          <PanelLeftClose className="h-6 w-6" />
        </Button>
      </div>
      <Separator
        className={` bg-white/5 overflow-hidden transition-all ${
          expanded ? "w-72" : "w-0"
        }`}
      />
      <SidebarRoutes />
    </>
  );
};
