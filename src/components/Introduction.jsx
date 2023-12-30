import React from 'react';

const Introduction = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10 bg-[#151269] ">
      <div className='w-11/12 lg:w-9/12 mx-auto'>
        <p className="text-center w-10/12 lg:w-8/12 mx-auto text-xl text-white font-medium">Craft personalized surveys in minutes, embed them seamlessly on your website, and let the power of real-time client feedback drive your real estate success. Transform the way you do business with our user-friendly tool.</p>
        <img className="mt-4 mx-auto rounded-xl" src="./dashboard.png" alt="Boundlee dashboard" />
        <div className="relative w-full my-20">
            <h3 className='text-center text-4xl font-semibold text-white mb-4'>Get Boundlee</h3>
          <div className="flex items-center justify-between w-8/12 mx-auto py-0 bg-white rounded-full">
            <input type="text" className="w-full py-4 pl-4 rounded-l-full"  placeholder="Enter your email" />
            <button className="px-6 py-4 bg-blue-700 text-white font-bold rounded-r-full">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
