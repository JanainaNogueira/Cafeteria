import {Link} from 'react-router-dom'
import Style from './Register.module.css'

function Register(){
    return(
        <main className={Style.main_register}>
            <h2 className={Style.title}>Cadastrar</h2>
            <form className={Style.form_register}>
                <div>
                    <p>Nome</p>
                    <input type='text' placeholder="Digite seu nome completo"/>
                </div>
                <div>
                    <p>Matricula</p>
                    <input type='text' placeholder="Digite sua matricula"/>
                </div>
                <div>
                    <p>Senha</p>
                    <input type='password' placeholder="Digite sua senha"/>
                </div>
            </form>
            <button className={Style.form_button}>Cadastrar</button>
            <Link to="/login" className={Style.form_link}>Já tem cadastro.Clique aqui.</Link>
        </main>
    )
}

export default Register