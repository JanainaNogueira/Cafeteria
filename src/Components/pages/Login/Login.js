import Style from './Login.module.css'
import LinkButton from '../../LinkButtonForm'
import LinkText from '../../LinkText'

function Login(){
    return(
        <main className={Style.main_register}>
            <h2 className={Style.title}>Login</h2>
            <form className={Style.form_register}>
                <div>
                    <p>Matricula</p>
                    <input type='text' placeholder="Digite sua matricula"/>
                </div>
                <div>
                    <p>Senha</p>
                    <input type='password' placeholder="Digite sua senha"/>
                    <LinkText to='/switchpassword' text='Esqueci a senha.'/>
                </div>
            </form>
            <LinkButton  to='/home' text='Login'/>
            <LinkText to='/register' text='Não possui cadastro.Clique aqui.'/>
        </main>
    )
}

export default Login