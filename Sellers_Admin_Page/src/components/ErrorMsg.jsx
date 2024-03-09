import { useContext } from "react";
import { AuthContext } from "../store/AuthContext";

const ErrorMsg = () => {

    const { inputValue } = useContext(AuthContext);

    return <>
        {/* {inputValueABC.length === 0 && <p> Nothing to display.</p>} */}
        {inputValue.length === 0 && <p> Nothing to display.</p>}
    </>
}


export default ErrorMsg;