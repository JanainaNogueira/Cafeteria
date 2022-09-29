import Style from './Login.module.css'

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
            <button className={Style.form_button}>Autorizar</button>
            <p className={Style.form_link}>Não quer autorizar.Clique aqui.</p>
        </main>
    )
}

export default Authorization