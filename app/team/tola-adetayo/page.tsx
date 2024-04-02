import Image from 'next/image';
import { FaFacebook, FaTwitter, FaInstagram,   } from "react-icons/fa";

function TolaAdetayoProfile() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="w-full md:w-1/3">
          <Image 
            src="/images/Team members/Tola Adetayo 300x400.png"
            alt="Tola Adetayo"
            width={400}
            height={400}
            className="rounded-full"
          />
        </div>
        <div className="w-full md:w-2/3">
          <h1 className="text-3xl font-bold">Tola Adetayo</h1>
          <p className="mt-4">Tola brings over a decade of dynamic leadership in human resources management, spanning diverse industries and continents. Her extensive experience includes strategic HR planning, talent acquisition, and employee development. Her passion for harnessing human capital is evident in her commitment to empowering individuals to achieve their highest potential. With a proven track record of driving organizational success through people-centric strategies, she is a valuable asset to our board, guiding our organization towards greater impact and sustainability.</p>
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

export default TolaAdetayoProfile;
