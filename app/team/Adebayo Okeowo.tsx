import { Avatar } from "@/components/ui/avatar";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function AdebayoOkeowo() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center space-y-3 p-4 text-center">
      <div className="flex items-center space-x-4">
        <Avatar className="w-20 h-20" />
        <div className="space-y-1.5">
          <h1 className="text-3xl font-bold">Adebayo Okeowo</h1>
        </div>
      </div>
      <div className="mx-auto prose prose-gray max-w-none w-full lg:prose-xl dark:prose-invert">
        <p>
        I am attaching images from the event as well as a picture of one of the board members and his profile is below:
Dr. Adebayo Okeowo is a human rights lawyer with over a decade’s experience working on socio-economic rights, environmental justice and international criminal accountability. His current focus is on exploring, through research and practice, the intersection between human rights and technology. He currently works as the Associate Director of Programs at WITNESS – a global human rights organization. Dr. Okeowo holds a PhD in International Law from the University of Pretoria, South Africa.
        </p>
      </div>
      <div className="grid gap-4">
        <Link
          className="inline-flex items-center space-x-2 text-sm font-medium transition-colors text-gray-900 hover:underline dark:text-gray-100 dark:hover:underline"
          href="#"
        >
          
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
