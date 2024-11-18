import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "@/screens/Home.tsx";
import Characters from "@/screens/Characters.tsx";

const RouteApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/characters' element={<Characters/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default RouteApp;