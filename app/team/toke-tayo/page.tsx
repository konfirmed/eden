import Image from 'next/image';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

function TokeTayoProfile() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="w-full md:w-1/3">
          <Image 
            src="/images/Team members/Toke Tayo 300x400.png"
            alt="Tope Tayo"
            width={400}
            height={400}
            className="rounded-full"
          />
        </div>
        <div className="w-full md:w-2/3">
          <h1 className="text-3xl font-bold">Toke Tayo</h1>
          <p className="mt-4">Toke Tayo, a dynamic architect and entrepreneur, enhances our board with over 12 years of architectural practice. Specializing in residential design and project management, Toke oversees multimillion-dollar construction projects, showcasing exceptional design and budget management. Beyond architecture, her passion for product design, painting, pottery, and creative self-development adds a unique dimension to her leadership. As the founder of Ajala Traveler, she merges a love for travel with innovative design, securing multiple patents and showcasing her entrepreneurial flair.
Toke&apos;s commitment to self-development and diverse creative skills makes her invaluable to our board. Her global perspective, coupled with strategic acumen, ensures our organization is guided towards impactful initiatives that empower those in need. As a young female leader, Toke Tayo embodies resilience, creativity, and a relentless drive for positive change, enriching lives through visionary leadership.</p>
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

export default TokeTayoProfile;
