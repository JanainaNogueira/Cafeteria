import Style from '../Login/Login.module.css'
import LinkButton from '../../LinkButtonForm'
import LinkText from '../../LinkText'

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
            <LinkButton  to='/home' text='Autorizar'/>
            <LinkText to='/register' text='Não quer autorizar.Clique aqui.'/>
        </main>
    )
}

export default Authorization