// pages/team/jane-doe.tsx

import { Avatar } from "@/components/ui/avatar";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function TopeObasa() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center space-y-3 p-4 text-center">
      <div className="flex items-center space-x-4">
        <Avatar className="w-20 h-20" />
        <div className="space-y-1.5">
          <h1 className="text-3xl font-bold">Jane Doe</h1>
        </div>
      </div>
      <div className="mx-auto prose prose-gray max-w-none w-full lg:prose-xl dark:prose-invert">
        <p>
        Tola brings over a decade of dynamic leadership in human resources management, spanning diverse industries and continents. Her extensive experience includes strategic HR planning, talent acquisition, and employee development. Her passion for harnessing human capital is evident in her commitment to empowering individuals to achieve their highest potential. With a proven track record of driving organizational success through people-centric strategies, she is a valuable asset to our board, guiding our organization towards greater impact and sustainability.

        </p>
      </div>
      <div className="grid gap-4">
        <Link
          className="inline-flex items-center space-x-2 text-sm font-medium transition-colors text-gray-900 hover:underline dark:text-gray-100 dark:hover:underline"

          href="#"
        >
          <FaTwitter className="w-4 h-4" />
          <span>Twitter&apos;</span>

        </Link>
        <Link
          className="inline-flex items-center space-x-2 text-sm font-medium transition-colors text-gray-900 hover:underline dark:text-gray-100 dark:hover:underline"

          href="#"
        >
          <FaFacebook className="w-4 h-4" />
          <span>Facebook</span>
        </Link>
        <Link
          className="inline-flex items-center space-x-2 text-sm font-medium transition-colors text-gray-900 hover:underline dark:text-gray-100 dark:hover:underline"

          href="#"
        >
          <FaInstagram className="w-4 h-4" />
          <span>Instagram</span>
        </Link>
        <Link
          className="inline-flex items-center space-x-2 text-sm font-medium transition-colors text-gray-900 hover:underline dark:text-gray-100 dark:hover:underline"

          href="#"
        >
          <FaLinkedin className="w-4 h-4" />
          <span>LinkedIn</span>
        </Link>
      </div>
    </div>
  );
}
