// pages/team/jane-doe.tsx

import { Avatar } from "@/components/ui/avatar";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function DerekIbeagha() {
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
        Derek is a renowned senior economist in the Central Bank of Nigeria's Research Department, where he has demonstrated remarkable intelligence in the fields of economic development and research. Notably, Derek is a World Bank Scholar. His pursuit of an academic degree in Sustainable International Development reflects his commitment to have a positive impact on communities around the world. 
Derek, who is well-known for his ability to implement change and think strategically, is committed to creating learning settings that are both extremely productive and inspiring for young minds. His guiding principles are to actively involve young people, to maximise their potential, and to foster their creativity, curiosity, and sense of belonging. He has a strong commitment to sustainable world advancement, community development, and education.
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
