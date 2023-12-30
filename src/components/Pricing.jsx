import React from 'react';

const Pricing = () => {
    return (
        <div className="flex flex-col items-center justify-center h-auto bg-[#151269] pt-28 pb-10">
            <h1 className="text-6xl font-bold mb-4 text-white">Pricing</h1>
            <p className="text-lg text-center mb-8 text-white">Choose the plan that suits your needs</p>
            <div className="flex flex-col items-center lg:flex-row lg:items-stretch justify-center w-3/4">
            <div className="bg-[#0F1056] w-11/12 my-5 lg:my-0 lg:w-1/3 lg:mx-4 rounded-lg p-8 border-2 border-white text-white lg:mt-10">
                    <h2 className="text-3xl font-bold mb-4">Basic</h2>
                    <p className="text-lg">Best for agents who have a smaller number of clients</p>
                    <p className="text-5xl font-bold text-center my-4">$24/mo</p> {/* BEGIN: Basic Pricing */}
                    <ul className=' w-9/12 mx-auto text-start list-disc'>
                        <li>Create unlimited surveys</li>
                        <li>Up to 250 survey responses per month</li>
                        <li>Basic analytics and reporting.</li>
                        <li>Email support.</li>
                    </ul>
                </div>
                <div className="bg-[#0F1056] w-11/12 my-5 lg:my-0 lg:w-1/3 lg:mx-4 rounded-lg p-8 border-2 lg:border-4 border-white text-white lg:mb-10">
                    <h2 className="text-3xl font-bold mb-4">Premium</h2>
                    <p className="text-lg">Better for agents that work with a bigger number of clients</p>
                    <p className="text-5xl font-bold text-center my-4">$49/mo</p> {/* BEGIN: Standard Pricing */}
                    <ul className=' w-9/12 mx-auto text-start list-disc'>
                        <li>Create unlimited surveys</li>
                        <li>Up to 1000 survey responses per month</li>
                        <li>Advanced customization options.</li>
                        <li>Real-time analytics and reporting.</li>
                        <li>Priority email support.</li>
                    </ul>
                </div>
                <div className="bg-[#0F1056] w-11/12 my-5 lg:my-0 lg:w-1/3 lg:mx-4 rounded-lg p-8 border-2 border-white text-white lg:mt-10">
                    <h2 className="text-3xl font-bold mb-4">Enterprise</h2>
                    <p className="text-lg">Better for agents who work for big real estate agencies</p>
                    <p className="text-5xl font-bold text-center my-4">Let's talk</p> {/* BEGIN: Premium Pricing */}
                    <ul className=' w-9/12 mx-auto text-start list-disc'>
                        <li>Create unlimited surveys</li>
                        <li>Unlimited survey responses per month</li>
                        <li>White-labeling for custom branding.</li>
                        <li>Advanced customization options.</li>
                        <li>Real-time analytics and reporting.</li>
                        <li>Phone support.</li>
                    </ul>
                </div>
            </div>
            <div className="relative w-8/12 mx-auto my-20">
            <h3 className='text-center text-4xl font-semibold text-white mb-4'>Get Boundlee</h3>
            <div className="flex items-center justify-between w-9/12 mx-auto py-0 bg-white rounded-full">
                <input type="text" className="w-full py-4 pl-4 rounded-l-full"  placeholder="Enter your email" />
                <button className="px-6 py-4 bg-blue-700 text-white font-bold rounded-r-full">Submit</button>
            </div>
            </div>
        </div>
    );
};

export default Pricing;
