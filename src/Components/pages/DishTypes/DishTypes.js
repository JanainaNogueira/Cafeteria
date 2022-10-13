import {Link} from 'react-router-dom'
import Header from '../../Layouts/Header/Header'
import Style from './DishTypes.module.css'

function TypeOrders(){
    return(
        <div className={Style.container}>
            <Header/>
            <main className={Style.types}>
                <button className={Style.types_buttons}>Quentes</button>
                <button className={Style.types_buttons}>Frios</button>
                <button className={Style.types_buttons}>Aconpanhamentos</button>
            </main>
            <div className={Style.buttons}>
                <Link to='/home' className={Style.link_button} >Cancelar</Link>
                <button>Ver pedido</button>
            </div>
        </div>
    )
}

export default TypeOrders