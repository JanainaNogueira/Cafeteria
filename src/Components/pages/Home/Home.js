import { FiPlusSquare } from "react-icons/fi";
import { useState } from "react";
import { Link } from "react-router-dom"
import Header from '../../Layouts/Header/Header'
import BoxOrder from '../../Layouts/boxOrder'
import Style from './Home.module.css'
import Styled from "../../ModalTab.module.css"


function Home(){
const [showModal, setShowModal]= useState(false);
    return(
        <div className={Styled.container}>
            {showModal?
            (
            <div className={Styled.modal}>
                <div className={Styled.containe}>
                    <div className={Styled.numberTable}>
                        <h4>Número da mesa</h4>
                    </div>
                    <div className={Styled.infoTable}>
                        <input type='text' placeholder="Digite o número da mesa"/>
                        <p>12h00</p>
                    </div>
                    <div className={Styled.buttonModal}>
                        <button className={Styled.button} onClick={()=>{
                            setShowModal(false)
                        }}
                        >
                            Voltar
                        </button>
                        <Link className={Styled.button} to='/dishtypes'>Adicionar Prato</Link>
                    </div>
                </div>
            </div>
            ):(
            <>
            </>
            )}
            <Header/>
                <main className={Style.main}>
                    <div className={Style.icon}>
                        <button onClick={()=>{
                            setShowModal(true)
                        }}>
                            <FiPlusSquare className={Style.iconPlus}/>
                        </button>
                    </div>
                    <div className={Style.tables}>
                        <BoxOrder/>
                    </div>
                </main>
        </div>
    )
}

export default Home