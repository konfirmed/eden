'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { CardContent, Card } from "@/components/ui/card"
import { FaBars, FaTimes, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { ReactNode } from 'react';


// Placeholder CardContentWrapper component
const CardContentWrapper = ({ children }: { children: ReactNode }) => {
  return <div className="p-6">{children}</div>;
};


export function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div key="1" className="bg-white">
      {/* Desktop Navigation */}
      <nav className="bg-white py-4 shadow-md sticky top-0 z-10">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="hidden md:flex items-center space-x-4 flex-grow">
            <Link className="text-gray-600 hover:text-gray-800" href="/">
              <Image src="/eden new.png" alt="Eden Logo" height={100} width={100} />
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link className="text-gray-600 hover:text-gray-800" href="/">
              Home
            </Link>
            <Link className="text-gray-600 hover:text-gray-800" href="/about">
              About Us
            </Link>
            <Link className="text-gray-600 hover:text-gray-800" href="/gallery">
              Gallery
            </Link>
            <Link href="/contact-us">
              <Button className="bg-blue-500 hover:bg-blue-700 text-white">Contact Us</Button>
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
              <Link href="/contact-us">
                <Button className="bg-blue-500 hover:bg-blue-700 text-white">Contact Us</Button>
              </Link>
            </div>
          </div>
        )}
      </div>

      <header
        className="bg-cover bg-center h-[600px] text-white"
        style={{
          backgroundImage: "url('/hero image.png')",
        }}
      >
        <div className="container mx-auto px-6 py-24">
          <h1 className="text-5xl font-bold mb-4">We Help You</h1>
          <h2 className="text-3xl font-bold mb-8">SAVE THE CHILDREN.</h2>
          <p className="mb-8 text-lg font-bold">
            
          </p>
          <div className="flex space-x-4">
          <Link href="/contact-us">
       <Button className="bg-[#e27227c7] text-white">CONTACT EDEN</Button>
       </Link>
          </div>
        </div>
      </header>

      <section className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="order-1 md:order-2">
            <Image
              alt="Enriching Lives Image"
              className="aspect-[3/2] object-cover rounded-lg"
              height={400}
              src="/enrichment.png"
              width={600}
            />
          </div>
          <div className="order-2 md:order-1">
          <Card className="w-full p-4"> 
              <CardContent>
                <h3 className="text-2xl font-bold mb-4">Enrichment Program</h3>
                <p className="mb-4">
                Enhancing Lives Through Nourishment and Support
At EDEN Foundation, our Enrichment program is designed to provide vital support and nourishment to individuals and families in need. Through our Food Assistance Program, we strive to enrich the lives of the less privileged by offering essential dry goods, non-perishable items, and eventually perishable items to ensure their nutritional needs are met. Our ultimate goal is to provide consistent and reliable assistance to promote sustained well-being.
                </p>
                <p className="mb-4">Join us in our journey to create a brighter future for all.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      <section className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="order-1 md:order-2">
            <Card className="w-full p-4"> 
              <CardContent>
                <h3 className="text-2xl font-bold mb-4">Empowerment Program</h3>
                <p className="mb-4">
                Equipping Individuals for Success and Self-Sufficiency
At EDEN Foundation, empowerment lies at the heart of our mission. Our Empowerment Program aims to equip individuals with the necessary tools and skills to enhance their employability and overall well-being. Following our initial outreach efforts, we offer Skills Training and Development programs that provide training in basic skill acquisition. By arming individuals with the knowledge and resources they need to succeed, we empower them to take control of their futures and realize their full potential.
                </p>
                <p className="mb-4">Join us in our journey to create a brighter future for all.</p>
              </CardContent>
            </Card>
          </div>
          <div className="order-1 md:order-2">
            <Image
              alt="Enriching Lives Image"
              className="aspect-[3/2] object-cover rounded-lg"
              height={400}
              src="/empowerment.png"
              width={600}
            />
          </div>
        </div>
      </section>

      {/* <section className="bg-orange-500 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Help Today Because Tomorrow you may be Needs someone help</h2>
          <Button className="bg-transparent border border-white">Watch Video</Button>
        </div>
      </section> */}

<footer className="bg-[#1e293b] text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center items-center space-x-4 mb-4">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-white text-xl hover:text-blue-500" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-white text-xl hover:text-blue-400" />
            </a>
            <a href="https://www.instagram.com/edenrestorationng?igsh=MTUwY3Y1dGFjcGl6aA==
" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-white text-xl hover:text-pink-500" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-white text-xl hover:text-blue-700" />
            </a>
          </div>
          <p>© 2024 EDEN. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
