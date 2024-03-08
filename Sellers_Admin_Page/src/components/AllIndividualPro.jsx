const AllIndividualPro = (props) => {

    const handleOnDeleteProduct = () => {
        props.handlerOnDeleteProductsXYZ(props.productNameABC);
    }

    return <li> {props.productIdABC} - {props.sellingPriceABC} - {props.productNameABC} - {props.categoryABC} <button onClick={handleOnDeleteProduct}> Delete Product </button>
    </li>
}


export default AllIndividualPro;