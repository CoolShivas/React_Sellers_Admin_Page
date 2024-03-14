import { useEffect, useReducer } from "react";
import { createContext } from "react";


export const AuthContext = createContext({
    inputValue: [],
    handlerOnAddProducts: () => { },
    handlerOnDeleteProducts: () => { },
});



const getDataOnRefreshPage = () => {
    let list = localStorage.getItem('details');
    if (list) {
        return JSON.parse(localStorage.getItem('details'));
    }
}

const inputReducer = (currState, action) => {

    let newProductList = currState;
    if (action.type === "ADD_PRO") {
        newProductList = [...currState,
        {
            productId: action.payload.productIdRST,
            sellingPrice: action.payload.sellingPriceRST,
            productName: action.payload.productNameRST,
            category: action.payload.categoryRST,
        }]
    }
    else if (action.type === "DELETE_PRO") {
        newProductList = currState.filter((brr) => {
            return brr.productName !== action.payload.del;
        })
    }
    return newProductList;

}





const AuthContextProvider = ({ children }) => {

    const [inputValue, dispatchInputValue] = useReducer(inputReducer, getDataOnRefreshPage());

    useEffect(() => {
        localStorage.setItem('details', JSON.stringify(inputValue))
    }, [inputValue])


    const handlerOnAddProducts = (productIdRST, sellingPriceRST, productNameRST, categoryRST) => {
        console.log(`All details are ${productIdRST} - ${sellingPriceRST} - ${productNameRST} - ${categoryRST} `);

        const productDetails = {
            type: "ADD_PRO",
            payload: {
                productIdRST, sellingPriceRST, productNameRST, categoryRST,
            }
        }
        dispatchInputValue(productDetails);
    }

    const handlerOnDeleteProducts = (del) => {

        const deletePro = {
            type: "DELETE_PRO",
            payload: { del }
        }
        dispatchInputValue(deletePro);
    }

    return <AuthContext.Provider value={
        {
            inputValue,
            handlerOnAddProducts,
            handlerOnDeleteProducts,
        }
    }>
        {children}
    </AuthContext.Provider>
}

export default AuthContextProvider;