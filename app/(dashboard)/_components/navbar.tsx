import { UserButton } from "@clerk/nextjs";

export const Navbar = () => {
  return (
    <div className="bg-slate-800 border-b border-gray-500 h-16">
      <UserButton />
    </div>
  );
};
