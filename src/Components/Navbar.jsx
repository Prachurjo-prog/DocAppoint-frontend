"use client";

import Image from "next/image";
import logo from "../../public/assets/logo-prescripto.svg";
import { Avatar, Button } from "@heroui/react";
import Link from "next/link";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { CustomTrigger } from "./Dropdown";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { data: session } = authClient.useSession();
  const user = session?.user;
  console.log(user);

  return (
    <div className="sticky top-0 z-50 container mx-auto border-b-2">
      <div className="flex items-center justify-between  px-4 py-4">
        {/* Logo */}
        <Link href={"/"}>
          <Image src={logo} alt="logo" width={170} height={70} />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:block">
          <ul className="flex font-semibold gap-6 text-sm items-center">
            <Link href={"/"}>
              <li className="hover:text-[#5F6FFF] cursor-pointer">Home</li>
            </Link>

            <Link href={"/all-doctors"}>
              <li className="hover:text-[#5F6FFF] cursor-pointer">
                All Doctors
              </li>
            </Link>

            <Link href={"/about-us"}>
              <li className="hover:text-[#5F6FFF] cursor-pointer">ABOUT</li>
            </Link>

            <Link href={"/contact"}>
              <li className="hover:text-[#5F6FFF] cursor-pointer">Contact</li>
            </Link>

            <Link href={"/admin-panel"}>
              <Button variant="outline" className="text-xs font-medium">
                Admin Panel
              </Button>
            </Link>
          </ul>
        </div>

        {/* Desktop Button */}
        <ul>
          {user ? (
            // <li>
            //   <Avatar>
            //     <Avatar.Image alt="John Doe" src={user.image} />
            //     <Avatar.Fallback>JD</Avatar.Fallback>
            //   </Avatar>
            // </li>
            <CustomTrigger user={user}/>
          ) : (
            <Link href={"/register"} onClick={() => setIsOpen(false)}>
              <Button className="bg-[#5F6FFF] text-white w-full">
                Create Account
              </Button>
            </Link>
          )}
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <ul className="flex flex-col gap-5 p-5 font-medium">
            <Link href={"/"} onClick={() => setIsOpen(false)}>
              <li className="hover:text-[#5F6FFF]">Home</li>
            </Link>

            <Link href={"/all-doctors"} onClick={() => setIsOpen(false)}>
              <li className="hover:text-[#5F6FFF]">All Doctors</li>
            </Link>

            <Link href={"/about-us"} onClick={() => setIsOpen(false)}>
              <li className="hover:text-[#5F6FFF]">About</li>
            </Link>

            <Link href={"/contact"} onClick={() => setIsOpen(false)}>
              <li className="hover:text-[#5F6FFF]">Contact</li>
            </Link>

            <Link href={"/admin-panel"} onClick={() => setIsOpen(false)}>
              <Button variant="bordered" className="w-full">
                Admin Panel
              </Button>
            </Link>

            {user ? (
              <>
                <Link href={"/profile"} onClick={() => setIsOpen(false)}>
                  <Button className="bg-[#5F6FFF] text-white w-full">
                    Log out
                  </Button>
                </Link>
              </>
            ) : (
              <Link href={"/register"} onClick={() => setIsOpen(false)}>
                <Button className="bg-[#5F6FFF] text-white w-full">
                  Create Account
                </Button>
              </Link>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
