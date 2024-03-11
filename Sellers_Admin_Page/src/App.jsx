import TotalValueHeading from "./components/TotalValueHeading";
import ProductHeading from "./components/ProductHeading";
import AuthContextProvider from "./store/AuthContext";
import ErrorMsg from "./components/ErrorMsg";
import AllProducts from "./components/AllProducts";
import { useReducer, useState } from "react";
import InputField from "./components/InputField";
import AppName from "./components/AppName";


function App() {


  return <AuthContextProvider>
    <center>
      <AppName></AppName>
      <InputField
      // handlerOnAddProductsABC={handlerOnAddProducts}
      ></InputField>

      <ProductHeading></ProductHeading>

      <AllProducts
      // inputValueABC={inputValue}
      // handlerOnDeleteProductsABC={handlerOnDeleteProducts}
      ></AllProducts>



      <ErrorMsg
      // inputValueABC={inputValue}
      ></ErrorMsg>

      {/* <TotalValueHeading></TotalValueHeading> */}

    </center>
  </AuthContextProvider>
}

export default App;