'use client';
import { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Label from '@/components/ui/Label';
import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/Textarea';
import React, { FormEvent } from 'react'; 
import { db } from '@/lib/firebase'; 
import { collection, addDoc } from 'firebase/firestore';

const ContactPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  const [formState, setFormState] = useState({
  name: '',
  email: '',
  subject: '',
  message: ''
  });
  const [isLoading, setIsLoading] = useState(false); 
  const [submissionStatus, setSubmissionStatus] = useState<null | 'success' | 'error'>(null); 
  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const toggleMenu = () => {
  setIsMenuOpen(!isMenuOpen);
  };

  const handleChange = (event: { target: { id: any; value: any; }; }) => {
  setFormState({ ...formState, [event.target.id]: event.target.value });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault();


  // Send data using AJAX 
  try {
    const response = await fetch('/app/api/send-contact-email', { // Adjust if your API route is different
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState)
    });
    if (!response.ok) {
      throw new Error(`Network error: ${response.status}`); 
  }

  const responseData = await response.json(); // Try to get error details
  console.log('Response from server:', responseData); 

} catch (error) {
  console.error("Error submitting form:", error);
} 

   // Reset errors before validation
   setFormErrors({ name: '', email: '', subject: '', message: '' });

   let hasErrors = false;

   if (!formState.name) {
     setFormErrors(prevErrors => ({ ...prevErrors, name: 'Please input your name'}));
     hasErrors = true;
   }

   if (!formState.email) {
     setFormErrors(prevErrors => ({ ...prevErrors, email: 'Please input your email'}));
     hasErrors = true;
   }

   // Email Validation
   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // A simple email regex
   if (!emailRegex.test(formState.email)) {
     setFormErrors(prevErrors => ({ ...prevErrors, email: 'Please enter a valid email address' }));
     hasErrors = true;
   }

   if (!formState.subject) {
     setFormErrors(prevErrors => ({ ...prevErrors, subject: 'Please input a subject'}));
     hasErrors = true;
   }

   if (!formState.message) {
     setFormErrors(prevErrors => ({ ...prevErrors, message: 'Please input your message'}));
     hasErrors = true;
   }

   if (hasErrors) {
     return; // Stop submission if there are errors
   }

  setIsLoading(true);

  try {
    const docRef = await addDoc(collection(db, "messages"), formState);
    console.log("Document written with ID: ", docRef.id);
    setFormState({ name: '', email: '', subject: '', message: '' });
    setSubmissionStatus('success'); 
    clearSubmissionStatus(); 
  } catch (error) {
   console.error("Error adding document: ", error);
    setSubmissionStatus('error'); 
    clearSubmissionStatus(); 
  } finally {
   setIsLoading(false);
  }
  };

  const clearSubmissionStatus = () => {
   setTimeout(() => {
    setSubmissionStatus(null);
   }, 3000); 
  };

  return (
  <div className="flex flex-col min-h-screen">
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
   <nav className="bg-white py-4 shadow-md sticky top-0 z-10">
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
   
   <div className="flex-grow px-4 py-8">
    <form className="w-full max-w-md mx-auto space-y-6" onSubmit={handleSubmit}>
     <div className="space-y-2 text-center">
      <h1 className="text-3xl font-bold">Contact Us</h1>
      <p className="text-gray-500 dark:text-gray-400">
       Get in touch with us to learn more about our initiatives and how you can contribute.
      </p>
     </div>
     <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
       <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input id="name" placeholder="Your Name" value={formState.name} onChange={handleChange} />
          {formErrors.name && <div className="text-red-500">{formErrors.name}</div>}
       </div>
       <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" placeholder="Your Email" type="email" value={formState.email} onChange={handleChange} />
          {formErrors.email && <div className="text-red-500">{formErrors.email}</div>}
       </div>
      </div>
      <div className="space-y-2">
       <Label htmlFor="subject">Subject</Label>
       <Input id="subject" placeholder="Subject" value={formState.subject} onChange={handleChange} />
        {formErrors.subject && <div className="text-red-500">{formErrors.subject}</div>}
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
        {formErrors.message && <div className="text-red-500">{formErrors.message}</div>}
      </div>

      {/* Loading + Submit Button */}
          <div className="flex items-center justify-center"> 
            <Button className="w-full" type="submit" disabled={isLoading}>
              {isLoading ? <span className="loading-spinner mr-2"></span> : null} 
              {isLoading ? 'Sending...' : 'Send Message'}
            </Button>
          </div> 

          {/* Success Message (Conditional) */}
          {submissionStatus === 'success' && (
            <div className="bg-green-100 text-green-700 p-2 rounded mt-2">
              Message sent successfully!
            </div>
          )}
     </div>
    </form>
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
 );
};

export default ContactPage; 