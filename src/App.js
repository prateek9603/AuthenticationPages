import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import{BrowserRouter,Routes,Route} from "react-router-dom"
import Login from "./components/common/Login.js"
import Register from "./components/common/Register.js"

function App() {
  return (
    
        <BrowserRouter>
          <Routes >
            <Route path="/" Component={Login}> </Route>
            <Route path="/register" Component={Register}> </Route>
          </Routes>
        </BrowserRouter>

        // <Login />
        // <Register />
  );
}

export default App;
