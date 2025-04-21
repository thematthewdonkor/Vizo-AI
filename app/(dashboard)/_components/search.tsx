import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export const SearchPage = () => {
  return (
    <div
      className="
    bg-black
      relative
      w-full
      max-w-md
      flex
      items-center
      rounded-sm
      shadow
      flex-1
    "
    >
      <Search className="ml-4 h-5 w-5 text-white/90" />
      <Input
        type="search"
        placeholder="Search for anything..."
        className="
        h-10 
        w-full 
        border-none
        text-white  
        placeholder:text-white/70"
      />
    </div>
  );
};
