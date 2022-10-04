import Header from '../../Layouts/Header'
import Style from './Home.module.css'

function Home(){
    return(
        <div className={Style.container}>
            <Header/>
        </div>
    )
}

export default Home