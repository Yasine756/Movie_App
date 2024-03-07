import { BrowserRouter,Route,Routes } from "react-router-dom";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Movies from "./pages/Movies";


function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/signup' element={<Signup/>}/>
        <Route exact path='/' element={<Movies/>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
