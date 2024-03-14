import TotalValue from "./components/TotalValue";
import ProductHeading from "./components/ProductHeading";
import AuthContextProvider from "./store/AuthContext";
import ErrorMsg from "./components/ErrorMsg";
import AllProducts from "./components/AllProducts";
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

      <TotalValue></TotalValue>


      <ErrorMsg
      // inputValueABC={inputValue}
      ></ErrorMsg>


    </center>
  </AuthContextProvider>
}

export default App;