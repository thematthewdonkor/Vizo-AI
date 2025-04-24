import {
  LayoutDashboard,
  SquarePlus,
  LibraryBig,
  Users,
  Settings,
} from "lucide-react";
import { useContext } from "react";
import { SidebarContext } from "./sidebar";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

const routes = [
  {
    icon: LayoutDashboard,
    label: "Home",
    path: "/dashboard",
  },
  {
    icon: SquarePlus,
    label: "Create Video",
    path: "/create-video",
  },
  {
    icon: LibraryBig,
    label: "Explore",
    path: "/explore",
  },
  {
    icon: Users,
    label: "Billing",
    path: "/billing",
  },

  {
    icon: Settings,
    label: "Settings",
    path: "/settings",
  },
];

export const SidebarRoutes = () => {
  const expanded = useContext(SidebarContext);

  return (
    <>
      <div className="md:mt-8 px-4 flex flex-col gap-2">
        {routes.map((route) => (
          <Link
            key={route.label}
            href={route.path}
            className={`flex items-center gap-2 py-4 `}
          >
            <route.icon className="text-white h-5 w-5" />
            {expanded && (
              <span className=" text-white text-sm">{route.label}</span>
            )}
          </Link>
        ))}
      </div>
      {expanded && <Separator className="w-72 bg-white/5 mt-6" />}
    </>
  );
};
