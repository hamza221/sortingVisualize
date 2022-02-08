import React from "react";

export default function Algo(props) {
  let array = props.arr;
  const setArr = props.setArr;
  const algo = props.algo;
  function swap(arr, xp, yp) {
    var temp = arr[xp];
    arr[xp] = arr[yp];
    arr[yp] = temp;
  }
  const bubble =(unsorted)=>{
      let arr = unsorted;
  var i, j;
  for (i = 0; i < arr.length - 1; i++) {
    for (j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        setArr(arr);
        setTimeout(() => { console.log("World!"); }, 10000);
      }
    }
  }}
  const handleClick=()=>{
      console.log(setArr)
  switch (algo) {
      case "bubble":
          bubble(array);
          break;
  
      default:
          console.log("tahche")
          break;
  }}

  return (
    <button onClick={handleClick} className="hover:text-orange-800 rounded-sm text-orange-600 px-5 py-2 col-span-1 ">
      {props.children}
    </button>
  );
}
