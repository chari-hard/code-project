import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Header } from "./components/layout/header";
import "./App.css";
import { Footer } from "./components/layout/footer";
import { PageComprar } from "./pages/PageComprar";
import { PageLancamentos } from "./pages/PageLançamentos";

function App() {
  return (
    <BrowserRouter>

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/comprar" element={<PageComprar />} />
        <Route path="/lancamentos" element={<PageLancamentos />} />
      </Routes>
      
      <Footer />

    </BrowserRouter>
  );
}

export default App
