import { Explore } from "./_components/explore";
import { Navbar } from "./_components/navbar";
import { Content } from "./_components/content";

export default function Home() {
  return (
    <div className="h-full">
      <Navbar />
      <Content />
      <Explore />
    </div>
  );
}
