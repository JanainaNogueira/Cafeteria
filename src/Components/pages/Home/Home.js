import { BsPlusSquare } from "react-icons/bs";
import Header from '../../Layouts/Header/Header'
import BoxOrder from '../../Layouts/boxOrder'
import Style from './Home.module.css'

function Home(){
    return(
        <div className={Style.container}>
            <Header/>
            <div className={Style.main}>
                <div className={Style.icon}>
                    <BsPlusSquare className={Style.iconPlus}/>
                </div>
                <div className={Style.tables}>
                    <BoxOrder/>
                </div>
            </div>
        </div>
    )
}

export default Home