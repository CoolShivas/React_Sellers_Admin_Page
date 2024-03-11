import { useState } from "react";

const TotalValueHeading = () => {

    const [totalAmount, setTotalAmount] = useState(0);

    const calculateTotalAmount = () => {
        const total = products.reduce((acc, product) => acc + parseFloat(product.sellingPrice), 0);
        setTotalAmount(total);
    };

    return <h3> Total Value Worth of Products : Rs. {totalAmount} /- </h3>
}

export default TotalValueHeading;