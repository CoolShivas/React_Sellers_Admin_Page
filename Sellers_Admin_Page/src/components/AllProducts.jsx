import AllIndividualPro from "./AllIndividualPro";

const AllProducts = ({ inputValueABC, handlerOnDeleteProductsABC }) => {
    return <>
        <h2> Products :- </h2>
        <ul className="ulTag">
            {inputValueABC.map((arr) => {
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