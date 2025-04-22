import {
  LayoutDashboard,
  SquarePlus,
  LibraryBig,
  Users,
  Settings,
} from "lucide-react";

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
  return (
    <>
      <div className="md:mt-8 px-4 flex flex-col gap-2">
        {routes.map((route) => (
          <Link
            key={route.label}
            href={route.path}
            className={`flex items-center gap-2 py-4 text-white `}
          >
            <route.icon className="text-white h-5 w-5" />
            {route.label}
          </Link>
        ))}
      </div>
      <Separator className="w-72 bg-white/5 mt-6" />
    </>
  );
};
