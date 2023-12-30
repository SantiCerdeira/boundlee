
import React from 'react';


const Benefits = () => {
    // const { triggered } = useScroll({
    //     threshold: 0.5, // Trigger after the user has scrolled 50% of the component
    //   });

    return (
        <div className="flex bg-[#151269] py-20">
            <div className="flex-1 flex flex-col lg:flex-row flex-wrap justify-center items-center w-full lg:w-9/12 mx-auto">
                <div className="flex items-center  w-11/12 lg:w-4/12 mx-3 my-5 bg-gradient-to-tr from-blue-800 to-blue-950 p-10 rounded border-2 border-white transform transition-transform duration-200 hover:scale-105">
                    <div className="flex text-4xl items-center justify-center w-12 h-12 bg-gray-200 rounded-full mr-4 text-blue-800" >
                        <ion-icon name="add-circle-outline"></ion-icon>
                    </div>
                    <p className="mt-2 text-lg text-white font-bold inline">Create your own customized surveys</p>
                </div>
                <div className="flex items-center w-11/12 lg:w-4/12 mx-3 my-5 bg-gradient-to-tr from-blue-800 to-blue-950 p-10 rounded border-2 border-white transform transition-transform duration-200 hover:scale-105">
                    <div className="flex text-4xl items-center justify-center w-12 h-12 bg-gray-200 rounded-full mr-4 text-blue-800" >
                        <ion-icon name="archive-outline"></ion-icon>
                    </div>
                    <p className="mt-2 text-lg text-white font-bold inline">Embed surveys easily in your website</p>
                </div>
                 <div className="flex items-center w-11/12 lg:w-4/12 mx-3 my-5 bg-gradient-to-tr from-blue-800 to-blue-950 p-10 rounded border-2 border-white transform transition-transform duration-200 hover:scale-105">
                    <div className="flex text-4xl items-center justify-center w-12 h-12 bg-gray-200 rounded-full mr-4 text-blue-800" >
                        <ion-icon name="chatbubbles-outline"></ion-icon>
                    </div>
                    <p className="mt-2 text-lg text-start text-white font-bold inline">Get feedback in real time</p>
                </div>
                 <div className="flex items-center w-11/12 lg:w-4/12 mx-3 my-5 bg-gradient-to-tr from-blue-800 to-blue-950 p-10 rounded border-2 border-white transform transition-transform duration-200 hover:scale-105">
                    <div className="flex text-4xl items-center justify-center w-12 h-12 bg-gray-200 rounded-full mr-4 text-blue-800" >
                        <ion-icon name="people-circle-outline"></ion-icon>
                    </div>
                    <p className="mt-2 text-lg text-white font-bold inline">Improve your client relationship</p>
                </div>
                 <div className="flex items-center w-11/12 lg:w-4/12 mx-3 my-5 bg-gradient-to-tr from-blue-800 to-blue-950 p-10 rounded border-2 border-white transform transition-transform duration-200 hover:scale-105">
                    <div className="flex text-4xl items-center justify-center w-12 h-12 bg-gray-200 rounded-full mr-4 text-blue-800" >
                        <ion-icon name="cash-outline"></ion-icon>
                    </div>
                    <p className="mt-2 text-lg text-start text-white font-bold inline">Grow your business & make more money</p>
                </div>
                {/* <div className="flex items-center justify-center w-6/12 mx-auto my-5">
                    <div className="flex items-center justify-center w-12 h-12 bg-gray-200 rounded-full mr-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6 text-gray-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                            />
                        </svg>
                    </div>
                    <p className="mt-2 text-lg text-white font-bold inline">Effortless User Experience</p>
                </div> */}
            </div>
        </div>
    );
};

export default Benefits;
