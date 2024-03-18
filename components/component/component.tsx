import { Button } from "@/components/ui/button";
import { CardContent, Card } from "@/components/ui/card";
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Navigation from "@/components/Navigation"; 

export function Component() {
  return (
    <div key="1" className="bg-white">
      <Navigation /> 
      <header
        className="bg-cover bg-center h-[600px] text-white"
        style={{
          backgroundImage: "url('/hero image.png')",
        }}
      >
        <div className="container mx-auto px-6 py-24">
          <h1 className="text-5xl font-bold mb-4">We Help You</h1>
          <h2 className="text-3xl font-bold mb-8">SAVE THE CHILDRENS.</h2>
          <p className="mb-8 text-lg font-bold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt  .
          </p>
          <div className="flex space-x-4">
            <Button className="bg-red-600">Partner With Us</Button>
            <Button className="bg-transparent border border-white">Contact Us</Button>
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
              src="/give.jpg"
              width={600}
            />
          </div>
          <div className="order-2 md:order-1">
            <Card className="w-full p-4"> 
              <CardContent>
                <h3 className="text-2xl font-bold mb-4">Enriching Lives</h3>
                <p className="mb-4">
                  Enriching lives is at the core of our mission. We strive to make a positive impact by providing
                  essential support and resources to those in need, fostering growth and empowerment in communities
                  worldwide.
                </p>
                <p className="mb-4">Join us in our journey to create a brighter future for all.</p>
                <Button className="bg-red-600">Enrich Lives</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section className="w-full py-6 md:py-12 bg-gray-300">
        <div className="container flex flex-col items-center gap-4 px-4 text-center md:grid md:px-6 md:gap-10 lg:grid-cols-2 lg:justify-between xl:gap-16">
          <div className="order-2 md:order-1">
            <Image
              alt="Image"
              className="aspect-video overflow-hidden rounded-xl object-cover object-center"
              height="338"
              src="/trust.jpg"
              width="600"
            />
          </div>
          <div className="order-1 md:order-2">
            <div className="flex flex-col justify-center space-y-4">
              <p className="text-sm font-semibold tracking-wide uppercase text-gray-500 dark:text-gray-400">
                Trusted by developers
              </p>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                The definitive guide to modern web development. The platform for rapid progress. Let your team focus on
                shipping features instead of managing infrastructure with automated CI/CD, built-in testing, and integrated
                collaboration.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="order-1 md:order-2">
            <Card className="w-full p-4"> 
              <CardContent>
                <h3 className="text-2xl font-bold mb-4">Empowerment</h3>
                <p className="mb-4">
                  Enriching lives is at the core of our mission. We strive to make a positive impact by providing
                  essential support and resources to those in need, fostering growth and empowerment in communities
                  worldwide.
                </p>
                <p className="mb-4">Join us in our journey to create a brighter future for all.</p>
                <Button className="bg-red-600">Empower Young Minds</Button>
              </CardContent>
            </Card>
          </div>
          <div className="order-1 md:order-2">
            <Image
              alt="Enriching Lives Image"
              className="aspect-[3/2] object-cover rounded-lg"
              height={400}
              src="/originals/empowerment.jpg"
              width={600}
            />
          </div>
        </div>
      </section>

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
    </div>
  )
}
