'use client';
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button"; 
import { FaFacebook, FaTwitter, FaInstagram, FaBars, FaTimes } from "react-icons/fa";
import { Card, CardContent } from "@/components/ui/card"; 

export default function About() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div key="1" className="bg-white">
        {/* Desktop Navigation */}
        <nav className="bg-white py-4 shadow-md sticky top-0 z-10">
          <div className="container mx-auto px-4 flex justify-between items-center">
            <div className="hidden md:flex items-center space-x-4 flex-grow">
              <Link href="/" className="text-gray-600 hover:text-gray-800">
                <Image src="/eden new.png" alt="Eden Logo" height={100} width={100} />
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <Link href="/" className="text-gray-600 hover:text-gray-800">
                Home
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-gray-800">
                About Us
              </Link>
              <Link href="/gallery" className="text-gray-600 hover:text-gray-800">
                Gallery
              </Link>
              <Link href="#">
                <Button className="bg-blue-500 hover:bg-blue-700 text-white">Volunteer</Button>
              </Link>
            </div>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <nav className="bg-white py-4 shadow-md sticky top-0 z-10">
            <div className="container mx-auto px-4 flex justify-between items-center">
              <Link href="/" className="text-gray-600 hover:text-gray-800">
                <Image src="/eden new.png" alt="Eden Logo" height={100} width={100} />
              </Link>
              <button onClick={toggleMenu} className="md:hidden text-3xl text-gray-600 focus:outline-none">
                {isMenuOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </nav>
          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="bg-white py-4 shadow-md">
              <div className="container mx-auto px-4 flex flex-col items-center">
                <Link href="/" className="text-gray-600 hover:text-gray-800">
                  Home
                </Link>
                <Link href="/about" className="text-gray-600 hover:text-gray-800">
                  About Us
                </Link>
                <Link href="/gallery" className="text-gray-600 hover:text-gray-800">
                  Gallery
                </Link>
                <Link href="#">
                  <Button className="bg-blue-500 hover:bg-blue-700 text-white">Volunteer</Button>
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Content Sections */}
        <section className="bg-[#f1f5f9] text-center py-16" style={{ backgroundImage: "url('/about us header.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <h1 className="text-4xl font-bold text-[#1e293b]">About Us</h1>
          <p className="text-[#64748b] mt-2">Helping / About us</p>
        </section>
        {/* Remaining Content */}
        <section className="container mx-auto px-4 py-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-[#1e293b]"></h2>
            <p className="text-lg text-[#64748b]">
              EDEN Foundation is a non-governmental organization committed to enriching, developing, and empowering the needy in society. Our foundation was founded on the belief that everyone deserves access to basic necessities and the opportunity to thrive independently.
            </p>
            <p className="text-[#64748b]">
              EDEN Foundation was established under the guidance of a divine calling, as inspired by biblical principles that emphasize the importance of compassion and caring for those in need. The foundation is driven by the belief that love should be demonstrated through both words and actions.
            </p>
            <div className="flex justify-center space-x-4">
              <Link href="/contact-us">
                <Button className="bg-[#e27227c7] text-white">CONTACT EDEN</Button>
              </Link>
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
                profileUrl="/team/tola-adetayo"
              />
              <TeamMemberCard
                name="Derek Ibeagha"
                imageUrl="/images/Team members/Derek Ibeagha 300x400.png"
                profileUrl="/team/derek-ibeagha"
              />
              <TeamMemberCard
                name="Toke Tayo"
                imageUrl="/images/Team members/Toke Tayo 300x400.png"
                profileUrl="/team/toke-tayo"
              />
              <TeamMemberCard
                name="Adebayo Okeowo"
                imageUrl="/images/Team members/Adebayo Okeowo 300x400.png"
                profileUrl="/team/adebayo-okeowo"  
              />
              <TeamMemberCard
                name="Tope Obasa"
                imageUrl="/images/Team members/Tope Obasa 300x400.png"
                profileUrl="/team/tope-obasa" 
              />
            </div>
          </div>
        </section>
      </div>
      {/* Footer Section */}
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
          </div>
          <p>© 2024 EDEN. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

function TeamMemberCard({ name, imageUrl, profileUrl }: { name: string, imageUrl: string, profileUrl: string }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={profileUrl} passHref>
      <Card className="bg-white p-6">
        <div className="relative">
          <Image src={imageUrl} alt={name} width={400} height={300} className="object-cover rounded-t-lg" />
          <div className="absolute inset-0 bg-black opacity-50 rounded-t-lg"></div>
          <div className={`absolute inset-0 flex items-center justify-center text-white transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <span className="text-sm">See more</span>
          </div>
        </div>
        <CardContent>
          <p className="text-[#64748b] mt-2">{name}</p>
        </CardContent>
      </Card>
    </Link>
  );
}
