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
    <nav className="bg-white py-4 shadow-md fixed top-0 left-0 right-0 z-50">
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

        <div className="hidden md:flex items-center space-x-4">
          <Link href="/">
            <span className="text-gray-600 hover:text-gray-800">Home</span>
          </Link>
          <Link href="/about">
            <span className="text-gray-600 hover:text-gray-800">About Us</span>
          </Link>
          <Link href="/gallery">
            <span className="text-gray-600 hover:text-gray-800">Gallery</span>
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
