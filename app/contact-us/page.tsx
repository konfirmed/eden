'use client';
import { useState, FormEvent } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Label from '@/components/ui/Label';
import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/Textarea';
import { FaBars, FaTimes, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const ContactPage = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<null | 'success' | 'error'>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = event.target;
    setFormState({ ...formState, [id]: value });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsLoading(true);

    try {
      const response = await fetch('/api/route', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        setSubmissionStatus('success');
        setFormState({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmissionStatus('error');
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmissionStatus('error');
    } finally {
      setIsLoading(false);
      clearSubmissionStatus();
    }
  };

  const clearSubmissionStatus = () => {
    setTimeout(() => {
      setSubmissionStatus(null);
    }, 3000);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex flex-col min-h-screen">
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

      {/* Contact Form */}<div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">Contact Us</h1>
            <p className="text-gray-500 dark:text-gray-400">
              Get in touch with us to learn more about our initiatives and how you can contribute.
            </p>
          </div>

      <div className="flex flex-col flex-grow justify-center">
        <form className="w-full max-w-md mx-auto space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your Name" value={formState.name} onChange={handleChange} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="Your Email" type="email" value={formState.email} onChange={handleChange} />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" placeholder="Subject" value={formState.subject} onChange={handleChange} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                className="min-h-[100px] border-2 border-blue-500 rounded-lg p-2"
                id="message"
                placeholder="Your Message"
                value={formState.message}
                onChange={handleChange}
              />
            </div>

            <div className="flex items-center justify-center">
              <Button className="w-full" type="submit" disabled={isLoading}>
                {isLoading ? 'Sending...' : 'Send Message'}
              </Button>
            </div>

            {submissionStatus === 'success' && (
              <div className="bg-green-100 text-green-700 p-2 rounded mt-2">
                Message sent successfully!
              </div>
            )}
            {submissionStatus === 'error' && (
              <div className="bg-red-100 text-red-700 p-2 rounded mt-2">
                Error sending message. Please try again later.
              </div>
            )}
          </div>
        </form>
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
            <a href="https://www.instagram.com/edenrestorationng?igsh=MTUwY3Y1dGFjcGl6aA==" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-white text-xl hover:text-pink-500" />
            </a>
          </div>
          <p>© 2024 EDEN. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default ContactPage;

