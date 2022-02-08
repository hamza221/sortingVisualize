import React, { useEffect, useRef, useState } from "react";
import Bar from "./Bar";

export default function Canva(props) {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const canvaRef = useRef();

  const getListSize = () => {
    const newWidth = canvaRef.current.offsetWidth;
    setWidth(newWidth);

    const newHeight = canvaRef.current.offsetHeight;
    setHeight(newHeight);
  };
  useEffect(() => {
    getListSize();
  }, []);
  window.addEventListener("resize", getListSize);
  return (
    <div className="border-2 border-gray-300 rounded-lg absolute bottom-3 w-11/12  h-5/6 " style={{left:"4%"}}>
      <div ref={canvaRef} className="w-full h-full px-4 pb-9   flex ">
        {props.data.map((elem, i) => {
          let styles = {};
          if(props.sorted.includes(i) ){
            styles = { backgroundColor: "green" };
          }
          else if  (i === props.coloredOne || i === props.coloredTwo)  {
            styles = { backgroundColor: "red" };
          }
          return (
            <Bar
            
              height={(height / 200) * elem}
              key={i}
              width={width / props.data.length}
              styles={styles}
            ></Bar>
          );
        })}
      </div>
    </div>
  );
}
