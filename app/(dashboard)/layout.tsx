import { Navbar } from "./_components/navbar";
import { Sidebar } from "./_components/sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full relative">
      <div className="hidden md:flex md:flex-col md:h-full w-72 z-80 md:fixed md:inset-y-0 bg-slate-900 border-r border-gray-500">
        <Sidebar />
        <Sidebar />
        <Sidebar />
        <Sidebar />
        <Sidebar />
        <Sidebar />
        <Sidebar />
        <Sidebar />
        <Sidebar />
        <Sidebar />
        <Sidebar />
        <Sidebar />
        <Sidebar />
        <Sidebar />
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
