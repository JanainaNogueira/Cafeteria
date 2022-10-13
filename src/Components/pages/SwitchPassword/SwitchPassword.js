import Style from '../Login/Login.module.css'
import LinkButton from '../../LinkButtonForm'
import LinkText from '../../LinkText'

function Login(){
    return(
        <main className={Style.main_register}>
            <h2 className={Style.title}>Alterar senha</h2>
            <form className={Style.form_register}>
                <div>
                    <p>Matricula</p>
                    <input type='text' placeholder="Digite sua matricula"/>
                </div>
                <div>
                    <p>Nova senha</p>
                    <input type='password' placeholder="Digite sua nova senha"/>
                </div>
                <div>
                    <p>Nova senha</p>
                    <input type='password' placeholder="Digite sua nova senha"/>
                </div>
            </form>
            <LinkButton  to='/login' text='Confirmar'/>
            <LinkText to='/login' text='Voltar para o login'/>
        </main>
    )
}

export default Login