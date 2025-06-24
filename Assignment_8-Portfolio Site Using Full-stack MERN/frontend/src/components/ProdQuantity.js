import React, { useState } from "react";
import { MdArrowDownward } from "react-icons/md";
import { MdArrowUpward } from "react-icons/md";

function ProdQuantity({ item2, onQuantityChange }) {
    const [cnt1, setCnt1] = useState(0);

    const incCnt1 = () => {
        if (cnt1 < 10) {
            const newQuantity = cnt1 + 1;
            setCnt1(newQuantity);
            onQuantityChange(item2.price, newQuantity);
        }
    };

    const decCnt1 = () => {
        if (cnt1 > 0) {
            const newQuantity = cnt1 - 1;
            setCnt1(newQuantity);
            onQuantityChange(item2.price, newQuantity);
        }
    };

    return (
        <div className="cntrlcnt1">
            <i><MdArrowDownward onClick={decCnt1} /></i>
            {cnt1}
            <i><MdArrowUpward onClick={incCnt1} /></i>
        </div>
    );
}

export default ProdQuantity;
