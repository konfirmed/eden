import Image from 'next/image';
import { FaFacebook, FaTwitter, FaInstagram,   } from "react-icons/fa";

function AdebayoOkeowoProfile() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="w-full md:w-1/3">
          <Image 
            src="/images/Team members/Adebayo Okeowo 300x400.png"
            alt="Adebayo Okeowo"
            width={400}
            height={400}
            className="rounded-full"
          />
        </div>
        <div className="w-full md:w-2/3">
          <h1 className="text-3xl font-bold">Adebayo Okeowo</h1>
          <p className="mt-4">Dr. Adebayo Okeowo is a human rights lawyer with over a decade’s experience working on socio-economic rights, environmental justice and international criminal accountability. His current focus is on exploring, through research and practice, the intersection between human rights and technology. He currently works as the Associate Director of Programs at WITNESS – a global human rights organization. Dr. Okeowo holds a PhD in International Law from the University of Pretoria, South Africa.</p>
       </div>
     </div>
   </div>
  );
}

export default AdebayoOkeowoProfile;
