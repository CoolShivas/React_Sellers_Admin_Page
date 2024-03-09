import { useContext } from "react";
import { AuthContext } from "../store/AuthContext";

const ErrorMsg = () => {

    const inputValueFromContext = useContext(AuthContext);

    return <>
        {/* {inputValueABC.length === 0 && <p> Nothing to display.</p>} */}
        {inputValueFromContext.length === 0 && <p> Nothing to display.</p>}
    </>
}


export default ErrorMsg;