import {Link} from 'react-router-dom'
import { HiOutlineUserCircle, HiOutlineLogout, HiX } from "react-icons/hi";
import { useState } from 'react';
import Style from './Header.module.css'
import Styled from '../../ModalTab.module.css'

function Header(){
    const [showPerfil,setShowPerfil] = useState(false)
    return(
        <>
        {showPerfil?
            (
            <div className={Styled.modal}>
                <div className={Styled.modal__main}>
                    <div className={Styled.box_profile_image}>
                        <div>
                        </div>
                    </div>
                    <div className={Styled.box_perfil}>
                    <div className={Styled.arrow}>
                        <button onClick={()=>{
                            setShowPerfil(false)
                        }}>
                            <HiX className={Styled.iconModalArrow}/>
                        </button>
                    </div>
                    <div className={Styled.box_info}>
                        <p>Nome: Saimon Medronha Terra</p>
                        <p>Matricula: 20220001</p>
                        <p>E-mail: example@gmail.com</p>
                        <p>Expediente: 08h00 - 15h00</p>
                    </div>
                    </div>
                </div>
            </div>
            ):
            (<></>)
        }
        <header className={Style.header}>
            <button className={Style.iconLink} onClick={()=>{
                setShowPerfil(true)
            }}>
                <HiOutlineUserCircle className={Style.iconHeader}/>
            </button>
            <h1 className={Style.nameShop}>Coffee</h1>
            <Link to="/login" className={Style.iconLink}><HiOutlineLogout className={Style.iconHeader}/></Link>
        </header>
        </>
    )
}

export default Header