import React, { useState } from "react";
// import { GiCoffeeCup } from "react-icons/gi";
import { MdArrowDownward } from "react-icons/md";
import { MdArrowUpward } from "react-icons/md";

function CountUp() {
    const [cnt1, setCount] = useState(0);
    console.log(cnt1);
    const increment = () => {setCount(cnt1 + 1); console.log(cnt1);}
  return (
    <div>
      <span>{cnt1}</span>
      <MdArrowUpward onClick={increment} />
    </div>
  );
}
export default CountUp;
