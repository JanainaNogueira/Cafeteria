import Style from './Login.module.css'

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
                </div>
            </form>
            <button className={Style.form_button}>Login</button>
            <p className={Style.form_link}>Não possui cadastro.Clique aqui.</p>
        </main>
    )
}

export default Login