import React from "react";

export default function Button(props) {
  return <button disabled={props.active} onClick={props.onClick} className="bg-blue-500 hover:bg-blue-700 rounded-sm text-white md:px-5 md:py-2 col-span-1 "  >{props.children}</button>;
}
