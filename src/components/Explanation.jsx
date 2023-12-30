import React, { useState } from 'react';

const Explanation = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    const handleRowClick = (index) => {
        setSelectedImage(index);
    };

    return (
        <div className="flex bg-[#151269] py-10 ">
            <div className='flex w-9/12 mx-auto'>
                <div className="w-1/2">
                    {selectedImage === 0 && <img src="image1.jpg" alt="Image 1" className="w-full" />}
                    {selectedImage === 1 && <img src="image2.jpg" alt="Image 2" className="w-full" />}
                    {selectedImage === 2 && <img src="image3.jpg" alt="Image 3" className="w-full" />}
                </div>
                <div className="w-1/2">
                    <div className="flex flex-col">
                        <div className="row border-b-2 py-5" onClick={() => handleRowClick(0)}>
                            <h3 className="text-3xl font-bold text-white text-start">Survey creation</h3>
                            {/* <p>Survey creation</p> */}
                        </div>
                        <div className="row border-b-2 py-5" onClick={() => handleRowClick(1)}>
                            <h3 className="text-lg font-bold">Title 2</h3>
                            <p>Text 2</p>
                        </div>
                        <div className="row border-b-2 py-5" onClick={() => handleRowClick(2)}>
                            <h3 className="text-lg font-bold">Title 3</h3>
                            <p>Text 3</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Explanation;
