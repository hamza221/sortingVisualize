import React from "react";

export default function MainContainer(props) {
  return (
    <div className=" lg:col-span-8 lg:col-start-3   col-span-full  mt-14 xl:mt-20 rounded-2xl h-auto bg-white  md:aspect-video aspect-square relative  ">
      {props.children}
    </div>
  );
}
