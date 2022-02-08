import React from "react";

import Button from "./Components/Button";
import Canva from "./Components/Canva";
import MainContainer from "./Components/MainContainer";

function App() {
  const [array, setArr] = React.useState([]);
  const [n, setN] = React.useState(30);
  const [algo, setAlgo] = React.useState("Bubble");
  const [coloredOne, setColoredOne] = React.useState();
  const [coloredTwo, setColoredTwo] = React.useState();
  const [active, setActive] = React.useState(false);
  const [sortedd, setSorted] = React.useState([]);

  const delay = () => {
    switch (algo) {
      case "Bubble":
        if(n<50){
          return 150
        }
        else if(n<100){
          return (80); 
        }
        else if(n<200){
          return 70
        }
        else if(n<=500){
          return 5
        }
        break;
      case "Selection":
        if(n<50){
          return 150
        }
        else if(n<100){
          return (80); 
        }
        else if(n<200){
          return 70
        }
        else if(n<=500){
          return 5
        }
        break;
      case "Merge":
        if(n<50){
          return 150
        }
        else if(n<100){
          return (90); 
        }
        else if(n<200){
          return 70
        }
        else if(n<=500){
          return 15
        }
        break;
      case "Quick":
        if(n<50){
          return 90
        }
        else if(n<100){
          return (90); 
        }
        else if(n<200){
          return 70
        }
        else if(n<=500){
          return 15
        }
        break;
    }
  };

  async function merge(arr, l, m, r) {
    var n1 = m - l + 1;
    var n2 = r - m;

    var L = new Array(n1);
    var R = new Array(n2);

    for (let i = 0; i < n1; i++) L[i] = arr[l + i];
    for (let j = 0; j < n2; j++) R[j] = arr[m + 1 + j];

    var i = 0;

    var j = 0;

    let k = l;

    while (i < n1 && j < n2) {
      if (L[i] <= R[j]) {
        setColoredOne(k);
        await sleep(3);
        arr[k] = L[i];
        i++;
      } else {
        setColoredOne(k);
        await sleep(3);
        arr[k] = R[j];
        j++;
      }
      k++;
    }

    while (i < n1) {
      arr[k] = L[i];
      setColoredOne(k);
      await sleep(3);
      i++;
      k++;
    }

    while (j < n2) {
      arr[k] = R[j];
      setColoredOne(k);
      await sleep(3);
      j++;
      k++;
    }
    await sleep(delay());
    setArr(arr);
  }

  async function mergeSort(arr, l, r) {
    if (l >= r) {
      return;
    }
    var m = l + parseInt((r - l) / 2);

    await mergeSort(arr, l, m);
    await mergeSort(arr, m + 1, r);
    await merge(arr, l, m, r);
    setColoredOne(-2);
    setColoredTwo(-2);
  }

  async function swap(arr, xp, yp) {
    var temp = arr[xp];
    arr[xp] = arr[yp];
    arr[yp] = temp;
    await sleep(3);

    setArr(arr);
  }
  const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };
  async function bubble() {
    let arr = [...array];
    setActive(true);
    var i, j;
    for (i = 0; i < arr.length - 1; i++) {
      let swapped = false;
      for (j = 0; j < arr.length - i - 1; j++) {
        setColoredOne(j);
        setColoredTwo(j + 1);
        if (arr[j] > arr[j + 1]) {
          swapped = true;
          swap(arr, j, j + 1);
        }
        await sleep(delay());
      }
      if (!swapped) {
        break;
      }
    }
    setColoredOne(-2);
    setColoredTwo(-2);
    setActive(false);
  }
  async function selection() {
    let arr = [...array];
    setActive(true);
    var i, j, min;
    for (i = 0; i < arr.length - 1; i++) {
      min = i;
      setColoredOne(i);
      for (j = i + 1; j < arr.length; j++) {
        setColoredTwo(j);
        await sleep(delay());
        if (arr[j] < arr[min]) {
          min = j;
        }
      }

      swap(arr, i, min);
    }
    setColoredOne(-2);
    setColoredTwo(-2);
    setActive(false);
  }
  async function partition(arrr, low, high) {
    let pivot = arrr[high];

    setColoredTwo(high);

    let i = low - 1;

    for (let j = low; j <= high - 1; j++) {
      
      setColoredOne(j);
      await sleep(delay())
      if (arrr[j] < pivot) {
        i++;
        await swap(arrr, i, j);
      }
    }
    await swap(arrr, i + 1, high);
    sortedd.push(i + 1);
    await sleep(3);

    return i + 1;
  }

  async function quickSort(arrr, low, high) {
    if (low < high) {
      setActive(true);

      let pi = await partition(arrr, low, high);

      quickSort(arrr, low, pi - 1);
      quickSort(arrr, pi + 1, high);
    } else {
      setActive(false);
      setColoredOne(-2);
      setColoredTwo(-2);
    }
  }

  async function Start() {
    switch (algo) {
      case "Bubble":
        bubble();

        break;
      case "Selection":
        selection();

        break;
      case "Merge":
        setActive(true);
        await mergeSort([...array], 0, array.length - 1);

        setActive(false);
        break;
      case "Quick":
        setActive(true);
        await quickSort([...array], 0, array.length - 1);
        setActive(false);
        break;
      default:
        break;
    }
  }
  const handleChange = (e) => {
    let tmp = [];
    setSorted([]);
    setN(e.target.value);
    for (let i = 0; i < n; i++) {
      tmp.push(Math.floor(Math.random() * 200));
    }

    setArr(tmp);
  };
  const newArray = () => {
    console.log(active);
    if (!active) {
      setSorted([]);
      let tmp = [];
      console.log("asba");
      for (let i = 0; i < n; i++) {
        tmp.push(Math.floor(Math.random() * 200));
      }

      setArr(tmp);
    }
  };
  return (
    <div className=" bg-gray-300 grid grid-cols-12   content-center justify-center  ">
      <MainContainer>
        <div className="absolute top-2 right-3 grid gap-1 grid-cols-4">
          <Button onClick={Start} active={active}>
            start
          </Button>
          <input
            onChange={handleChange}
            type="range"
            min="10"
            max="500"
          ></input>
          <Button onClick={newArray} className="col-start-3">
            New Array
          </Button>
          <select
            onChange={(e) => {
              setAlgo(e.target.value);
            }}
            className="appearance-none  bg-blue-500 text-white pl-4 pr-2 py-2 rounded hover:bg-blue-700"
          >
            <option value="Bubble">Bubble</option>
            <option value="Selection">Selection</option>
            <option value="Merge">Merge</option>
            <option value="Quick">Quick</option>
          </select>
        </div>

        <Canva
          sorted={sortedd}
          data={array}
          coloredOne={coloredOne}
          coloredTwo={coloredTwo}
        ></Canva>
      </MainContainer>
    </div>
  );
}

export default App;
