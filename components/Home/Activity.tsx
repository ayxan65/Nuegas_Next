import React from "react";
import Image from "next/image";
import DropDown from "../../Utils/DropDown";
import Task from "../../public/Activity/task.svg";
import graph from "../../public/Activity/Graph.svg";
import point from "../../public/Activity/point.svg";

const Activity = () => {
  return (
    <div className="h-[32vh] mt-4 lg:h-[30vh] lg:w-10/12 bg-active bg-grey   rounded-xl">
      <div className="p-5">
        <div className=" flex justify-between ">
          <div className="font-semibold text-xl">Activity</div>
          <div>
            <div>
              <DropDown />
            </div>
          </div>
        </div>
        <div>
          {" "}
          <Image className="m-auto mt-7" alt="graph" src={graph}></Image>
          {/* <Image
            alt="task"
            className=" ml-[12.5vw] mb-[20vh]
             lg:mb-[10vw] lg:ml-[9.4vw]"
            src={Task}
          ></Image>
          <Image
            alt="point"
            src={point}
            className=" ml-[18vw] mb-[22vh] 
            lg:mb-[10vw] lg:ml-[11.2vw]"
          ></Image> */}
        </div>
      </div>
    </div>
  );
};

export default Activity;
