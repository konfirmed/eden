import Image from 'next/image';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

function TopeObasaProfile() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="w-full md:w-1/3">
          <Image 
            src="/images/Team members/Tope Obasa 300x400.png"
            alt="Tope Obasa"
            width={400}
            height={400}
            className="rounded-full"
          />
        </div>
        <div className="w-full md:w-2/3">
          <h1 className="text-3xl font-bold">Tope Obasa</h1>
          <p className="mt-4">Adetope brings a profound commitment to supporting at-risk youth, coupled with over 10 years of experience working with children and teenagers, and more than five years of expertise in diverse administrative roles. Her enthusiasm for empowering young people shines through in her advocacy and direct involvement in programs designed to offer guidance and resources to those in need. With robust organizational and management skills, she is well-equipped to be a substantial asset to the board, leading initiatives that have a positive impact on the lives of youth in our community.</p>
          <div className="flex mt-4 space-x-4">
            <a href="https://www.facebook.com/tola-adetayo" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-xl hover:text-blue-500" />
            </a>
            <a href="https://www.twitter.com/tola-adetayo" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-xl hover:text-blue-400" />
            </a>
            {/* Add other social media icons similarly */}
          </div>
       </div>
     </div>
   </div>
  );
}

export default TopeObasaProfile;
