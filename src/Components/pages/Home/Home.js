import { FiPlusSquare } from "react-icons/fi";
import {Link} from "react-router-dom"
import Header from '../../Layouts/Header/Header'
import BoxOrder from '../../Layouts/boxOrder'
import Style from './Home.module.css'

function Home(){
    return(
        <div className={Style.container}>
            <Header/>
            <main className={Style.main}>
                <Link to="/dishtypes" className={Style.icon}>
                    <FiPlusSquare className={Style.iconPlus}/>
                </Link>
                <div className={Style.tables}>
                    <BoxOrder/>
                </div>
            </main>
        </div>
    )
}

export default Home