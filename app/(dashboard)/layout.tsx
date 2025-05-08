import { Navbar } from "./_components/navbar";
import { Sidebar } from "./_components/sidebar";
import Content from "./_components/content";
import { cn } from "@/lib/utils";
// import { Separator } from "@/components/ui/separator";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="
    bg-accent-foreground 
    min-h-screen 
    relative"
    >
      {/* <Separator className="w-72 bg-white/5" orientation="vertical" /> */}
      <div
        className={cn(
          "hidden w-72 md:flex flex-col h-full z-80 fixed inset-y-0 border-r border-r-white/5"
        )}
      >
        <Sidebar />
      </div>
      <main className="md:pl-72 h-full">
        <Navbar />
        <Content className="md:px-4 lg:px-12 px-8" />
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
