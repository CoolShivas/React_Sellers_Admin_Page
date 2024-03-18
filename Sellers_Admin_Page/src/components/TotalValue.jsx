import { useContext } from "react";
import { AuthContext } from "../store/AuthContext";

const TotalValue = () => {

    const { inputValue } = useContext(AuthContext)

    const calculateTotal = () => {
        return inputValue.reduce((acc, curr) => acc + parseFloat(curr.sellingPrice), 0);
    };

    return <>
        <h2> Total Value :- Rs {calculateTotal()} /-</h2>
    </>
}

export default TotalValue;