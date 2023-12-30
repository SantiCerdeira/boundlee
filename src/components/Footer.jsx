import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#151269] pt-20 pb-10 px-4">
      <div className=" w-9/12 mx-auto">
        <div className="container mx-auto flex items-center justify-center">
          <div className="w-full">
            <img src="./logo-white-final.png" alt="Boundlee Logo" className="w-1/3 mx-auto" />
          </div>
          {/* <div className="w-2/3 flex justify-center gap-10">
            <ul className="text-white">
              <li className="mb-2">Item 1</li>
              <li className="mb-2">Item 2</li>
              <li className="mb-2">Item 3</li>
            </ul>
            <ul className="text-white">
              <li className="mb-2">Item 4</li>
              <li className="mb-2">Item 5</li>
              <li className="mb-2">Item 6</li>
            </ul>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
