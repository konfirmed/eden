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
        Adetope brings a profound commitment to supporting at-risk youth, coupled with over 10 years of experience working with children and teenagers, and more than five years of expertise in diverse administrative roles. Her enthusiasm for empowering young people shines through in her advocacy and direct involvement in programs designed to offer guidance and resources to those in need. With robust organizational and management skills, she is well-equipped to be a substantial asset to the board, leading initiatives that have a positive impact on the lives of youth in our community.
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
