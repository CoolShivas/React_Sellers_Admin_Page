import { AuthContext } from "./store/AuthContext";
import ErrorMsg from "./components/ErrorMsg";
import AllProducts from "./components/AllProducts";
import { useState } from "react";
import InputField from "./components/InputField";
import AppName from "./components/AppName";


function App() {

  const [inputValue, setInputValue] = useState([]);

  const handlerOnAddProducts = (productIdRST, sellingPriceRST, productNameRST, categoryRST) => {
    console.log(`All details are ${productIdRST} - ${sellingPriceRST} - ${productNameRST} - ${categoryRST} `);

    const productDetails = [...inputValue,
    {
      productId: productIdRST,
      sellingPrice: sellingPriceRST,
      productName: productNameRST,
      category: categoryRST,
    }]
    setInputValue(productDetails);
  }

  const handlerOnDeleteProducts = (del) => {
    const deletePro = inputValue.filter((brr) => {
      return brr.productName !== del;
    })
    setInputValue(deletePro);
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