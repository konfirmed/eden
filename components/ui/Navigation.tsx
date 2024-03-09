import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navigation() {
    return (
      <nav className="bg-white py-4 shadow-md sticky top-0 z-10">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <img src="/eden.jpg" alt="Eden Logo" className="h-8" />
          <div className="flex items-center space-x-4">
            <Link className="text-gray-600 hover:text-gray-800" href="/">
              Home
            </Link>
            <Link className="text-gray-600 hover:text-gray-800" href="/about">
              About Us
            </Link>
            <Link className="text-gray-600 hover:text-gray-800" href="/gallery">
              Gallery
            </Link>
            <Link href="/contact-us">
              <Button className="bg-blue-500 hover:bg-blue-700 text-white">Contact Us</Button>
            </Link>
          </div>
        </div>
      </nav>
    );
  }  