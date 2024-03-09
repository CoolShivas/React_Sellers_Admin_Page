import { AuthContext } from "./store/AuthContext";
import ErrorMsg from "./components/ErrorMsg";
import AllProducts from "./components/AllProducts";
import { useReducer, useState } from "react";
import InputField from "./components/InputField";
import AppName from "./components/AppName";



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


function App() {

  // const [inputValue, setInputValue] = useState([]);
  const [inputValue, dispatchInputValue] = useReducer(inputReducer, []);


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


  return <AuthContext.Provider value={{
    inputValue,
    handlerOnAddProducts,
    handlerOnDeleteProducts,
  }}>
    <center>
      <AppName></AppName>
      <InputField
      // handlerOnAddProductsABC={handlerOnAddProducts}
      ></InputField>
      <AllProducts
      // inputValueABC={inputValue}
      // handlerOnDeleteProductsABC={handlerOnDeleteProducts}
      ></AllProducts>
      <ErrorMsg
      // inputValueABC={inputValue}
      ></ErrorMsg>
    </center>
  </AuthContext.Provider>
}

export default App;