import Image from "next/image";
import logo from "../../public/assets/logo-prescripto.svg";
import { Button } from "@heroui/react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex items-center container mx-auto justify-between pt-3 p-2">
      <Link href={"/"}>
        <Image src={logo} alt="logo" width={170} height={70} />
      </Link>

      <div className="md:block hidden">
        <ul className="flex font-semibold gap-5 text-sm">
          <Link href={"/"}>
            <li>Home</li>
          </Link>
          <Link href={"/all-doctors"}>
            <li>All Doctors</li>
          </Link>
          <Link href={"/about"}>
            <li>ABOUT</li>
          </Link>
          <Link href={"/contact"}>
            <li>Contact</li>
          </Link>
        </ul>
      </div>

      <Link href={"/register"}>
        <Button>Create account</Button>
      </Link>
    </div>
  );
};

export default Navbar;
