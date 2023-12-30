import React, { useState } from 'react';

const Visuals = () => {
    const [selectedText, setSelectedText] = useState('Image 1');

    const handleTextClick = (text) => {
        setSelectedText(text);
    };

    return (
        <div className="flex flex-col items-center bg-[#151269] pt-20 pb-10">
            <div className="lg:relative w-full h-[500px] lg:h-[650px]">
                <img
                    src="./create-dashboard.png"
                    alt="Create survey dashboard"
                    className={`absolute w-3/6 rounded-xl h-auto transition-transform duration-500 ${
                    selectedText === 'Image 1' ? 'translate-x-1/2' : '-translate-x-2/3'
                    }`}
                />
                <img
                    src="./mysurveys-dashboard.png"
                    alt="My surveys dashboard"
                    className={`absolute  w-3/6 rounded-xl h-auto transition-transform duration-500 ${
                    selectedText === 'Image 2' ? 'translate-x-1/2' : '-translate-x-2/3'
                    }`}
                />
                <img
                    src="./analytics-dashboard.png"
                    alt="Analytics dashboard"
                    className={`absolute  w-3/6 rounded-xl h-auto transition-transform duration-500 ${
                    selectedText === 'Image 3' ? 'translate-x-1/2' : '-translate-x-2/3'
                    }`}
                />
                </div>
            <div className="flex justify-center lg:mt-4">
                <div
                    className={`cursor-pointer font-semibold  mx-2 transition-colors duration-500 ${
                        selectedText === 'Image 1' ? 'text-white' : 'text-gray-400'
                    }`}
                    onClick={() => handleTextClick('Image 1')}
                >
                    Create surveys
                </div>
                <div
                    className={`cursor-pointer font-semibold  mx-2 transition-colors duration-500 ${
                        selectedText === 'Image 2' ? 'text-white' : 'text-gray-400'
                    }`}
                    onClick={() => handleTextClick('Image 2')}
                >
                    Export to your website
                </div>
                <div
                    className={`cursor-pointer font-semibold mx-2 transition-colors duration-500 ${
                        selectedText === 'Image 3' ? 'text-white' : 'text-gray-400'
                    }`}
                    onClick={() => handleTextClick('Image 3')}
                >
                    See analytics
                </div>
            </div>
        </div>
    );
};

export default Visuals;
