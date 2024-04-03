'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { FaBars, FaTimes, FaFacebook, FaTwitter, FaInstagram,   } from 'react-icons/fa';

const GalleryItem = ({ imageUrl }: { imageUrl: string }) => (
  <div className="relative rounded-lg overflow-hidden aspect-[4/3]">
    <Image
      src={imageUrl}
      alt="Gallery Image"
      className="object-cover object-center"
      width={400}
      height={300}
    />
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 opacity-0 transition-opacity bg-gray-900/90 dark:bg-gray-50/90 dark:opacity-90">
      <Image
        src={imageUrl}
        alt="Gallery Image"
        className="aspect-[4/3] object-cover object-center rounded-t-lg"
        width={100}
        height={75}
      />
      <span className="text-xs font-medium tracking-wide uppercase">Image Title</span>
    </div>
  </div>
);

export default function Gallery() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
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

      <div className="w-full py-6 space-y-4">
        <div className="container space-y-2 text-center px-4 md:px-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Hope for Tomorrow</h1>
            <p className="mx-auto max-w-3xl text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Bringing hope to those in need. Our campaign aims to make a difference in the lives of many.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Replace the placeholders with your actual gallery items */}
          <GalleryItem imageUrl="/images/Gallery photos/photo gallery 1.jpg" />
          <GalleryItem imageUrl="/images/Gallery photos/photo gallery 2.jpg" />
          <GalleryItem imageUrl="/images/Gallery photos/photo gallery 3.jpg" />
          <GalleryItem imageUrl="/images/Gallery photos/photo gallery 4.jpg" />
          <GalleryItem imageUrl="/images/Gallery photos/photo gallery 5.jpg" />
          <GalleryItem imageUrl="/images/Gallery photos/photo gallery 6@0.5x.png" />
          <GalleryItem imageUrl="/images/Gallery photos/photo gallery 7.jpg" />
          <GalleryItem imageUrl="/images/Gallery photos/photo gallery 8.jpg" />
          <GalleryItem imageUrl="/images/Gallery photos/photo gallery 9.jpg" />
          <GalleryItem imageUrl="/images/Gallery photos/photo gallery 10.jpg" />
          <GalleryItem imageUrl="/images/Gallery photos/photo gallery 11.jpg" />
          <GalleryItem imageUrl="/images/Gallery photos/photo gallery 12.jpg" />
          <GalleryItem imageUrl="/images/Gallery photos/photo gallery 13.jpg" />
          <GalleryItem imageUrl="/images/Gallery photos/photo gallery 14.jpg" />
        </div>
      </div>

      {/* Footer */}
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
              
          </div>
          <p>© 2024 EDEN. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
