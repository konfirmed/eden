import Image from "next/image";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Card, CardContent } from "@/components/ui/card";
import { Navigation } from "@/components/ui/Navigation";

export default function Component() {
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
          {Array.from({ length: 8 }, (_, index) => (
            <Card key={index} className="group relative rounded-lg overflow-hidden aspect-[4/3]">
              <Image
                src="/placeholder.svg"
                alt={`Campaign Image ${index + 1}`}
                className="object-cover object-center"
                width={400}
                height={300}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 opacity-0 transition-opacity bg-gray-900/90 group-hover:opacity-90 dark:bg-gray-50/90 dark:opacity-90">
                <img
                  alt={`Image ${index + 1}`}
                  className="aspect-[4/3] object-cover object-center rounded-t-lg"
                  src="/placeholder.svg"
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


