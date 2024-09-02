import React, { useState } from "react";
import { Link } from "react-router-dom";
import about from "../../assets/images/about.jpg";
import Detail from "../detailsinfo/Detail";

const Moreabout = () => {
  const [showMore, setShowMore] = useState(false);
  console.log(showMore);

  const handleShow = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="font-poppins px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-8 lg:grid-cols-2">
        <img
          src={about} 
          alt="About us"
          className="w-full h-full max-w-md object-contain animate-moveUpDown"
        />
        <div>
          <h2 className="mb-4 text-3xl font-bold leading-none sm:text-4xl">
            <span className="mr-2">More about us</span>
            <span className="text-sky-600">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet
              quia magni asperiores aliquid dicta eaque placeat excepturi ipsam
              reprehenderit libero.
            </span>
          </h2>
          <p className="mb-4 text-gray-700">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam,
            fugiat!
          </p>
          <p className="mb-4 text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur, doloribus accusamus. Corrupti perferendis quaerat
            omnis ipsum. Aspernatur soluta quae ipsum?
          </p>
          <button 
            className="inline-block py-2 text-white bg-orange-500 hover:bg-orange-600 rounded-md" 
            onClick={handleShow}
          >
            About our company
          </button>
          {showMore && (
            <p className="mt-4 text-gray-700">
              Additional information about our company goes here. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius aspernatur quos repellendus cupiditate, dignissimos nihil.
            </p>
          )}
        </div>
        <div className="flex justify-center"></div>
      </div>
      {showMore?<Detail/>:""}
    </div>
  );
};

export default Moreabout;
