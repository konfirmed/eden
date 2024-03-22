// pages/team/jane-doe.tsx

import { Avatar } from "@/components/ui/avatar";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function TokeTayo() {
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
        Toke Tayo, a dynamic architect and entrepreneur, enhances our board with over 12 years of architectural practice. Specializing in residential design and project management, Toke oversees multimillion-dollar construction projects, showcasing exceptional design and budget management. Beyond architecture, her passion for product design, painting, pottery, and creative self-development adds a unique dimension to her leadership. As the founder of Ajala Traveler, she merges a love for travel with innovative design, securing multiple patents and showcasing her entrepreneurial flair.

Toke's commitment to self-development and diverse creative skills makes her invaluable to our board. Her global perspective, coupled with strategic acumen, ensures our organization is guided towards impactful initiatives that empower those in need. As a young female leader, Toke Tayo embodies resilience, creativity, and a relentless drive for positive change, enriching lives through visionary leadership.
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
