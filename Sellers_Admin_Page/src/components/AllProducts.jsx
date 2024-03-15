import { AuthContext } from "../store/AuthContext";
import { useContext } from "react";
import AllIndividualPro from "./AllIndividualPro";

const AllProducts = () => {

    const { inputValue } = useContext(AuthContext);

    return <>

        <ul className="ulTag">
            {inputValue.map((arr) => {
                return <AllIndividualPro
                    key={arr.productId}
                    productIdABC={arr.productId}
                    sellingPriceABC={arr.sellingPrice}
                    productNameABC={arr.productName}
                    categoryABC={arr.category}
                // handlerOnDeleteProductsXYZ={handlerOnDeleteProductsABC}
                ></AllIndividualPro>
            })}
        </ul>


    </>
}

export default AllProducts;