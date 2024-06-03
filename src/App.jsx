import { BrowserRouter, Route,  Routes } from "react-router-dom";
import Home from  './pages/Home'
import Categorias from './pages/Categorias'
export default function App() {
  return ( 

    <BrowserRouter>
      <Routes>
        <Route index  element={<Home/>}/>
        <Route path="/categorias" element={<Categorias/>} />
      </Routes>
    </BrowserRouter>
   );
}