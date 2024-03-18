import Image from "next/image";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation"; 
export default function Component() {
  
  const images = [
    "/images/Gallery photos/photo gallery 1.jpg",
    "/images/Gallery photos/photo gallery 2.jpg",
    "/images/Gallery photos/photo gallery 3.jpg",
    "/images/Gallery photos/photo gallery 4.jpg",
    "/images/Gallery photos/photo gallery 5.jpg",
    "/images/Gallery photos/photo gallery 6@0.5x.png",
    "/images/Gallery photos/photo gallery 7.jpg",
    "/images/Gallery photos/photo gallery 8.jpg",
    "/images/Gallery photos/photo gallery 9.jpg",
    "/images/Gallery photos/photo gallery 10.jpg",
    "/images/Gallery photos/photo gallery 11.jpg",
    "/images/Gallery photos/photo gallery 12.jpg",
    "/images/Gallery photos/photo gallery 13.jpg",
    "/images/Gallery photos/photo gallery 14.jpg",
  ];

  return (
    <>
      <Navigation /> 
      <div className="w-full py-6 space-y-4">
        <div className="container space-y-2 text-center px-4 md:px-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Hope for Tomorrow</h1>
            <p className="mx-auto max-w-3xl text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Bringing hope to those in need. Our campaign aims to make a difference in the lives of many.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 md:p-0">
          {/* Iterate over images array and render cards */}
          {images.map((imageUrl, index) => (
            <Card key={index} className="group relative rounded-lg overflow-hidden aspect-[4/3]">
              <Image
                src={imageUrl} 
                alt={`Campaign Image ${index + 1}`}
                className="object-cover object-center"
                width={400}
                height={300}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 opacity-0 transition-opacity bg-gray-900/90 dark:bg-gray-50/90 dark:opacity-90">
                <Image
                  alt={`Image ${index + 1}`}
                  className="aspect-[4/3] object-cover object-center rounded-t-lg"
                  src={imageUrl} 
                  width={100}
                  height={75}
                />
                <span className="text-xs font-medium tracking-wide uppercase">Image Title</span>
              </div>
            </Card>
          ))}
        </div>
      </div>
      <footer className="bg-[#1e293b] text-white py-8 mt-auto">
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
