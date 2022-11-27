import {Link} from 'react-router-dom'
import Header from '../../Layouts/Header/Header'
import Style from './DishTypes.module.css'

function TypeOrders(){
    return(
        <div className={Style.container}>
            <Header/>
            <main className={Style.types}>
                <Link to='/menu' className={Style.types_buttons}>Bebidas</Link>
                <Link to='/menu' className={Style.types_buttons}>Doces</Link>
                <Link to='/menu' className={Style.types_buttons}>Salgados</Link>
            </main>
            <div className={Style.buttons_link}>
                <Link to='/home' className={Style.links}>Cancelar</Link>
                <Link to='/' className={Style.links}>Ver pedido</Link>
            </div>
        </div>
    )
}

export default TypeOrders