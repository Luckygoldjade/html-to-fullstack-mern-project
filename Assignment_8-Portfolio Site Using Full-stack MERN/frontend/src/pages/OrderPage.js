import React, { useState } from "react";
import OneProdRow from "../components/OneProdRow.jsx";
const { products } = require('../data/products');

function OrderPage() {
    const [totalPrice, setTotalPrice] = useState(0);

    const handleQuantityChange = (price, quantity) => {
        const updatedTotalPrice = price * quantity;
        setTotalPrice(updatedTotalPrice);
    };

    return (
        <>
            <h2>Order Page</h2>
            <article>
                <h3>Order Pet Products Here</h3>
                <p>Select One Product. Click on up and down arrows for quantities, 0 to 10 items to buy</p>
                <table id="orderTable">
                    <caption>Order Table</caption>
                    <thead>
                        <tr>
                            {/* top row names for columns */}
                            <th>Item, company</th>
                            <th>Price</th>
                            <th>Choose Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* One row of products from OneProdRow.js. index is key */}
                        {products.map((currentProduct, index) => (
                            <OneProdRow
                                item={currentProduct}
                                key={index}
                                onQuantityChange={handleQuantityChange}
                            />
                        ))}
                    </tbody>
                    <tfoot></tfoot>
                </table>
                <p>Total Price: {totalPrice.toLocaleString('en-US',{style: 'currency',currency: 'USD', minimumFractionDigits: 2})}</p>
            </article>
        </>
    );
}

export default OrderPage;
