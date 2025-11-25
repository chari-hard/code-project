import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { PageComprar } from "./pages/PageComprar";
import {Header} from "./components/layout/header";
import "./App.css";

function App() {
  return (
    <BrowserRouter>

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/comprar" element={<PageComprar />} />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
