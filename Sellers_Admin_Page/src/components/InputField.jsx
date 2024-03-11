import { useRef, useState, useContext } from "react";
import { AuthContext } from "../store/AuthContext";

const InputField = () => {

    const { handlerOnAddProducts } = useContext(AuthContext);

    const [valProductId, setProductId] = useState();
    const [valSellingPrice, setSellingPrice] = useState();
    const [valProductName, setProductName] = useState();


    const handleOnProductID = (event) => {
        console.log(event.target.value);
        setProductId(event.target.value);
    }

    const handleOnSellingPrice = (event) => {
        console.log(event.target.value);
        setSellingPrice(event.target.value);
    }

    const handleOnProductName = (event) => {
        console.log(event.target.value);
        setProductName(event.target.value);
    }



    const options = [
        "Default",
        "Electronics",
        "Food",
        "Skincare"
    ];

    const [valCategory, setCategory] = useState();

    const handleOnSelectCategory = (event) => {
        console.log(event.target.value);
        setCategory(event.target.value);
    }



    const handleOnFormSubmit = (event) => {
        event.preventDefault();

        handlerOnAddProducts(valProductId, valSellingPrice, valProductName, valCategory);
        setProductId('');
        setSellingPrice('');
        setProductName('');
        setCategory("Default");
        // const valueProId = valProductId.current.value;
        // const valueSellPrice = valSellingPrice.current.value;
        // const valueProName = valProductName.current.value;
        // // const valCategory = valCategory.current.value;
        // handlerOnAddProductsABC(valueProId, valueSellPrice, valueProName, valCategory);
        // valProductId.current.value = '';
        // valSellingPrice.current.value = '';
        // valProductName.current.value = '';
        // // valCategory.current.value = '';

    }

    return <div className="super_container">
        <form action="#" onSubmit={handleOnFormSubmit}>
            <div className="main_container">

                <div className="controls">
                    <label htmlFor="productId">
                        Product ID :
                    </label>
                    <input type="number" id="productId"
                        onChange={handleOnProductID}
                        value={valProductId}
                    // ref={valProductId}
                    />
                </div>

                <div className="controls">
                    <label htmlFor="sellingPrice">
                        Selling Price :
                    </label>
                    <input type="number" id="sellingPrice"
                        onChange={handleOnSellingPrice}
                        value={valSellingPrice}
                    // ref={valSellingPrice}
                    />
                </div>

                <div className="controls">
                    <label htmlFor="productName">
                        Product Name :
                    </label>
                    <input type="text" id="productName"
                        onChange={handleOnProductName}
                        value={valProductName}
                    // ref={valProductName}
                    />
                </div>

                <div className="controls">
                    <label htmlFor="category">
                        Category :
                    </label>
                    <select name="cat" id="category"
                        onChange={handleOnSelectCategory}
                        value={valCategory}
                    // ref={valCategory}
                    >
                        {options.map((choose, index) => {
                            return <option
                                key={index}
                            > {choose} </option>
                        })}
                    </select>
                </div>

                <div className="actions">
                    <button type="submit"> Add Products </button>
                </div>

            </div>
        </form>


    </div>
}

export default InputField;