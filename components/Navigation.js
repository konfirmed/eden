"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FaBars, FaTimes } from "react-icons/fa";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white py-4 shadow-md sticky top-0 z-10">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/">
          
          <Image
            src="/eden new.png"
            alt="Eden Logo"
            height={100}
            width={100}
          />
        </Link>
        
        <div className="md:hidden">
          {isMenuOpen ? (
            <FaTimes
              className="text-2xl text-gray-600 cursor-pointer"
              onClick={toggleMenu}
            />
          ) : (
            <FaBars
              className="text-2xl text-gray-600 cursor-pointer"
              onClick={toggleMenu}
            />
          )}
        </div>
        
        <div className="flex items-center space-x-4">
          <Link href="/">
            <div className="text-gray-600 hover:text-gray-800">Home</div>
          </Link>
          <Link href="/about">
            <div className="text-gray-600 hover:text-gray-800">About Us</div>
          </Link>
          <Link href="/gallery">
            <div className="text-gray-600 hover:text-gray-800">Gallery</div>
          </Link>
          <Link href="/contact-us">
            <Button className="bg-blue-500 hover:bg-blue-700 text-white">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
