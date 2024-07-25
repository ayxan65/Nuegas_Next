import React from "react";
import Image from "next/image";
import question from "../../public/Menu/question.svg";

const Help = () => {
  return (

      <div className="flex items-center justify-center mt-10 mx-3">
      <div className="relative bg-black rounded-lg shadow-lg p-6 text-white ">
        <div className="absolute top-[-24px] left-1/2 transform -translate-x-1/2  rounded-full p-2 shadow-lg">
          <Image
            src={question}
            alt="Question Icon"
            className="relative bottom-5"
            height={200}
            width={200}
          />
        </div>
        <h2 className="mt-12 mb-6 text-xl font-semibold text-center ">Help Center</h2>
        <p className="mt-2 mb-4 text-center font-light ">
          Having Trouble in Learning. Please contact us for more questions.
        </p>
     <div className="flex justify-center">
     <button className=" bg-white text-black font-semibold py-3 rounded-xl px-4 mt-2 shadow-lg ">
          Go To Help Center
        </button>
     </div>
      </div>
    </div>

  );
};

export default Help;
