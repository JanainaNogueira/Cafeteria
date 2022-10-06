import Style from './boxOrder.module.css'

function boxOrder(){
    return(
        <div className={Style.table}>
            <div className={Style.client}>
                <h2>Mesa 10</h2>
                <p>22h40</p>
            </div>
            <div className={Style.orders}>
                <div className={Style.order}>
                    <p>Pedido 1</p>
                    <p className={Style.price}>R$10,00</p>
                </div>
                <div className={Style.order}>
                    <p>Pedido 2</p>
                    <p className={Style.price}>R$10,00</p>
                </div>
                <div className={Style.order}>
                    <p>Pedido 3</p>
                    <p className={Style.price}>R$10,00</p>
                </div>
                <div className={Style.order}>
                    <p>Pedido 4</p>
                    <p className={Style.price}>R$10,00</p>
                </div>
                <div className={Style.order}>
                    <p>Mocachino com canela e pimenta e papricqa</p>
                    <p className={Style.price}>R$10,00</p>
                </div>
                <div className={Style.order}>
                    <p>Mocachino com canela</p>
                    <p className={Style.price}>R$150,00</p>
                </div>
                <div className={Style.order}>
                    <p>Mocachino com canela</p>
                    <p className={Style.price}>R$10,00</p>
                </div>
                <div className={Style.order}>
                    <p>Pedido 8</p>
                    <p className={Style.price}>R$10,00</p>
                </div>
                <div className={Style.order}>
                    <p>Pedido 9</p>
                    <p className={Style.price}>R$10,00</p>
                </div>
                <div className={Style.order}>
                    <p>Pedido 10</p>
                    <p className={Style.price}>R$10,00</p>
                </div>
                <div className={Style.order}>
                    <p>Pedido 11</p>
                    <p className={Style.price}>R$10,00</p>
                </div>
            </div>
            <div className={Style.finalOrder}>
                <p>Total: 30,00</p>
                <button>Editar</button>
            </div>
        </div>
    )
}

export default boxOrder