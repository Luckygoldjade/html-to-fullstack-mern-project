import React from "react";
import ProdQuantity from "./ProdQuantity";

function OneProdRow({ item, onQuantityChange }) {
    return (
        <tr>
            <td>{item.product}, {item.company}</td>
            <td>{item.price.toLocaleString('en-US',{style: 'currency',currency: 'USD', minimumFractionDigits: 2})}</td>
            <td>
                <ProdQuantity
                    item2={item}
                    onQuantityChange={onQuantityChange}
                />
            </td>    
        </tr>
    );
}

export default OneProdRow;
