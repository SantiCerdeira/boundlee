
import React from 'react';
import EmailForm from './Input';

const IntroSection = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-[#151269] py-10">
      {/* Top Menu */}
      <diwv className="flex items-center justify-between w-full xl:w-9/12 mx-auto px-4 py-2">
        <div className="flex items-center">
          
          {/* Logo */}
          <img src="./logo-white-final.png" alt="Boundlee Logo" className="w-2/6 md:w-2/6 lg:w-2/6 xl:w-1/6 mr-2" />
        </div>
      </diwv>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-center justify-center text-start my-20 lg:my-40 w-11/12 xl:w-9/12 mx-auto ">
        {/* Left Side */}
        <div className="md:w-8/12 px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">Maximize Earnings <br className='hidden lg:inline'/> and Client Relationships with valuable feedback</h1>
          <p className="mb-4 text-white text-xl">Seamlessly gather client feedback, enhance relationships, and elevate your real estate game effortlessly</p>
          <div className="relative w-full">
           <EmailForm />
          </div>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 ">
          <div className=''>
            <img src="./man.png" alt="Real estate agent" className="relative top-0 w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
