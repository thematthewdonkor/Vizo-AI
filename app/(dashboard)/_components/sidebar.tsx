"use client";

import { PanelLeftClose } from "lucide-react";
import { SidebarRoutes } from "./sidebar-routes";
import { Button } from "@/components/ui/button";
import { Logo } from "./logo";
import { Separator } from "@/components/ui/separator";
import { useState, createContext } from "react";
import { cn } from "@/lib/utils";

export const SidebarContext = createContext(false);

export const Sidebar = () => {
  const [expanded, setExpanded] = useState(true);

  return (
    <>
      <div className="h-16 px-4 flex items-center justify-between">
        <div
          className={cn("flex overflow-hidden", expanded ? "flex" : "hidden")}
        >
          <Logo />
        </div>

        <Button
          size="icon"
          className={cn(
            "cursor-pointer transition-all",
            expanded ? "flex" : "-ml-2"
          )}
          onClick={() => setExpanded((curr) => !curr)}
        >
          <PanelLeftClose className="h-5 w-5" />
        </Button>
      </div>
      {expanded && (
        <Separator className="bg-white/5 overflow-hidden transition-all" />
      )}

      <SidebarContext.Provider value={expanded}>
        <SidebarRoutes />
      </SidebarContext.Provider>
    </>
  );
};
