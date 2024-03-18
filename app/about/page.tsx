
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation"; 

export default function About() {
  return (
    <>
      <Navigation /> 
      <div key="1" className="bg-white">
        <section className="bg-[#f1f5f9] text-center py-16">
          <h1 className="text-4xl font-bold text-[#1e293b]">About Us</h1>
          <p className="text-[#64748b] mt-2">Helping / About us</p>
        </section>
        <section className="container mx-auto px-4 py-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-[#1e293b]">About Us</h2>
            <p className="text-lg text-[#64748b]">
              EDEN Foundation is a non-governmental organization committed to enriching, developing, and empowering the needy in society. Our foundation was founded on the belief that everyone deserves access to basic necessities and the opportunity to thrive independently.
            </p>
            <p className="text-[#64748b]">
              EDEN Foundation was established under the guidance of a divine calling, as inspired by biblical principles that emphasize the importance of compassion and caring for those in need. The foundation is driven by the belief that love should be demonstrated through both words and actions.
            </p>
            <div className="flex justify-center space-x-4">
              <Button className="bg-[#ef4444] text-white">CONTACT EDEN</Button>
              <Button className="bg-[#f97316] text-white">Volunteer</Button>
            </div>
          </div>
        </section>
        <section className="container mx-auto px-4 py-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-[#1e293b]">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
              <TeamMemberCard
                name="Tola Adetayo"
                imageUrl="/images/Team members/Tola Adetayo 300x400.png"
                bio="Adetope brings a profound commitment to supporting at-risk youth, coupled with over 10 years of experience working with children and teenagers, and more than five years of expertise in diverse administrative roles. "
              />
              <TeamMemberCard
                name="Derek Ibeagha"
                imageUrl="/images/Team members/Derek  Ibeagha 300x400.png"
                bio="Derek is a renowned senior economist in the Central Bank of Nigeria's Research Department, where he has demonstrated remarkable intelligence in the fields of economic development and research.."
              />
              <TeamMemberCard
                name="Toke Tayo"
                imageUrl="/images/Team members/Toke Tayo 300x400.png"
                bio="Toke Tayo, a dynamic architect and entrepreneur, enhances our board with over 12 years of architectural practice."
              />
              <TeamMemberCard
                name="Adebayo Okeowo"
                imageUrl="/images/Team members/Adebayo Okeowo 300x400.png"
                bio="Duis ate iure dolor in rerehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
              />
              <TeamMemberCard
                name="Tope Obasa"
                imageUrl="/images/Team members/Tope Obasa 300x400.png"
                bio="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              />
            </div>
          </div>
        </section>
      </div>
      <footer className="bg-[#1e293b] text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center items-center space-x-4 mb-4">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-white text-xl hover:text-blue-500" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-white text-xl hover:text-blue-400" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-white text-xl hover:text-pink-500" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-white text-xl hover:text-blue-700" />
            </a>
          </div>
          <p>© 2024 EDEN. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

function TeamMemberCard({ name, imageUrl, bio }: { name: string, imageUrl: string, bio: string }) {
  return (
    <Card className="bg-white p-6">
      <div className="relative">
        <Image src={imageUrl} alt={name} width={400} height={300} className="object-cover rounded-t-lg" />
        <div className="absolute inset-0 bg-black opacity-50 rounded-t-lg"></div>
        <div className="absolute inset-0 flex items-center justify-center text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
          <p>{bio}</p>
        </div>
      </div>
      <CardContent>
        <p className="text-[#64748b] mt-2">{name}</p>
      </CardContent>
    </Card>
  );
}
