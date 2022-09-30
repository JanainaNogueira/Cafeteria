import {Link} from 'react-router-dom'
import Style from '../Login/Login.module.css'

function Authorization(){
    return(
        <main className={Style.main_register}>
            <h2 className={Style.title}>Autorização</h2>
            <form className={Style.form_register}>
                <div>
                    <p>Matricula</p>
                    <input type='text' placeholder="Digite a matricula do gerente"/>
                </div>
                <div>
                    <p>Senha</p>
                    <input type='password' placeholder="Digite a senha do gerente"/>
                </div>
            </form>
            <Link to="/home" className={Style.linkButton}><button className={Style.form_button}>Autorizar</button></Link>
            <Link to="/register" className={Style.form_link}>Não quer autorizar.Clique aqui.</Link>
        </main>
    )
}

export default Authorization