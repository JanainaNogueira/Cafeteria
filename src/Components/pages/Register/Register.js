import Style from './Register.module.css'
import LinkButton from '../../LinkButtonForm'
import LinkText from '../../LinkText'

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
                <div className={Style.inputTimeEmployee}>
                    <div>
                    <p>Entrada</p>
                    <input type='time'/>
                    </div>
                    <div>
                    <p>Saída</p>
                    <input type='time'/>
                    </div>
                </div>
                <div>
                    <p>Email</p>
                    <input type='email' placeholder="Digite seu email"/>
                </div>
                <div>
                    <p>Senha</p>
                    <input type='password' placeholder="Digite sua senha"/>
                </div>
            </form>
            <LinkButton  to='/authorization' text='Cadastrar'/>
            <LinkText to='/login' text='Já tem cadastro.Clique aqui.'/>
        </main>
    )
}

export default Register