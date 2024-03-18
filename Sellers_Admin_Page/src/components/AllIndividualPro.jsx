import { useContext } from "react";
import { AuthContext } from "../store/AuthContext";

const AllIndividualPro = (props) => {

    const { handlerOnDeleteProducts } = useContext(AuthContext);

    const handleOnDeleteProduct = () => {
        // handlerOnDeleteProducts(props.productNameABC);
        handlerOnDeleteProducts(props.productIdABC);
    }

    return <li> {props.productIdABC} - {props.sellingPriceABC} - {props.productNameABC} - {props.categoryABC} <button onClick={handleOnDeleteProduct}> Delete Product </button>
    </li>
}


export default AllIndividualPro;