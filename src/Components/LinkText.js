import { Link } from "react-router-dom";
import Style from "./LinkText.module.css"

function LinkText({to,text}){
    return(
        <Link to={to} className={Style.form_link}>
            {text}
        </Link>
    )
}

export default LinkText