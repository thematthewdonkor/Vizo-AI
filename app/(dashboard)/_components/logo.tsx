import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/">
      <Image
        src={"/images/logo.png"}
        alt="Logo"
        width={100}
        height={100}
        className="w-full"
      />
    </Link>
  );
};
