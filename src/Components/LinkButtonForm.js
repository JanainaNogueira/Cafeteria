import { Link } from "react-router-dom";
import Style from "./LinkButtonForm.module.css"

function LinkButton({to, text}){
    return(
        <Link to={to} className={Style.linkButton}>
            {text}
        </Link>
    )
}
export default LinkButton