import Style from './App.module.css'
import Register from './Components/pages/Register'
import Login from './Components/pages/Login'
import Authorization from './Components/pages/authorization';

function App() {
  return (
    <div className={Style.container_App}>
      <Authorization/>
    </div>
  );
}

export default App;
