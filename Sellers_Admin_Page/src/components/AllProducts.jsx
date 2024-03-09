import { AuthContext } from "../store/AuthContext";
import { useContext } from "react";
import AllIndividualPro from "./AllIndividualPro";

const AllProducts = ({ handlerOnDeleteProductsABC }) => {

    const inputValueFromContext = useContext(AuthContext);

    return <>
        <h2> Products :- </h2>
        <ul className="ulTag">
            {inputValueFromContext.map((arr) => {
                return <AllIndividualPro
                    key={arr.productId}
                    productIdABC={arr.productId}
                    sellingPriceABC={arr.sellingPrice}
                    productNameABC={arr.productName}
                    categoryABC={arr.category}
                    handlerOnDeleteProductsXYZ={handlerOnDeleteProductsABC}
                ></AllIndividualPro>
            })}

        </ul>
    </>
}

export default AllProducts;