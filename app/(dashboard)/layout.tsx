import { Navbar } from "./_components/navbar";
import { Sidebar } from "./_components/sidebar";
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
        className="
      hidden 
      md:flex 
      flex-col 
      h-full 
      w-72 
      z-80 
      fixed 
      inset-y-0 
      border-r
      border-r-white/5
     "
      >
        <Sidebar />
      </div>
      <main className="md:pl-72">
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
