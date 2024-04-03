import Image from 'next/image';

function DerekIbeaghaProfile() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="w-full md:w-1/3">
          <Image 
            src="/images/Team members/Derek Ibeagha 300x400.png"
            alt="Derek Ibeagha"
            width={400}
            height={400}
            className="rounded-full"
          />
        </div>
        <div className="w-full md:w-2/3">
          <h1 className="text-3xl font-bold">Derek Ibeagha</h1>
          <p className="mt-4">Derek is a renowned senior economist in the Central Bank of Nigeria&apos;s Research Department, where he has demonstrated remarkable intelligence in the fields of economic development and research. Notably, Derek is a World Bank Scholar. His pursuit of an academic degree in Sustainable International Development reflects his commitment to have a positive impact on communities around the world. 
Derek, who is well-known for his ability to implement change and think strategically, is committed to creating learning settings that are both extremely productive and inspiring for young minds. His guiding principles are to actively involve young people, to maximise their potential, and to foster their creativity, curiosity, and sense of belonging. He has a strong commitment to sustainable world advancement, community development, and education.</p>
       </div>
     </div>
   </div>
  );
}

export default DerekIbeaghaProfile;
