import AllProducts from "./components/AllProducts";
import { useState } from "react";
import InputField from "./components/InputField";
import AppName from "./components/AppName";


function App() {

  const listOfProducts = [
    {
      productId: 1,
      sellingPrice: 1250,
      productName: "Almond",
      category: "Food",
    }
  ];

  const [inputValue, setInputValue] = useState(listOfProducts);

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

  return <center>
    <AppName></AppName>
    <InputField handlerOnAddProductsABC={handlerOnAddProducts}></InputField>
    <AllProducts inputValueABC={inputValue}
      handlerOnDeleteProductsABC={handlerOnDeleteProducts}
    ></AllProducts>
  </center>
}

export default App;