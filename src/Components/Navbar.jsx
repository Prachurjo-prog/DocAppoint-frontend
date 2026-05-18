import Image from "next/image";
import logo from "../../public/assets/logo-prescripto.svg";
import { Button } from "@heroui/react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex items-center container mx-auto justify-between pt-5 p-2 border-b-2 sticky z-50 top-0">
      <Link href={"/"}>
        <Image src={logo} alt="logo" width={170} height={70} />
      </Link>

      <div className="md:block hidden">
        <ul className="flex font-semibold gap-5 text-sm">
          <Link href={"/"}>
            <li className="hover:text-[#5F6FFF]">Home</li>
          </Link>
          <Link href={"/all-doctors"}>
            <li className="hover:text-[#5F6FFF]">All Doctors</li>
          </Link>
          <Link href={"/about-us"}>
            <li className="hover:text-[#5F6FFF]">ABOUT</li>
          </Link>
          <Link href={"/contact"}>
            <li className="hover:text-[#5F6FFF]">Contact</li>
          </Link>
        </ul>
      </div>

      <Link href={"/register"}>
        <Button className="bg-[#5F6FFF]">Create account</Button>
      </Link>
    </div>
  );
};

export default Navbar;
