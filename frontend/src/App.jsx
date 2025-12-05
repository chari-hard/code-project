import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Header } from "./components/layout/header";
import { Footer } from "./components/layout/footer";
import { PageComprar } from "./pages/PageComprar";
import { PageLancamentos } from "./pages/PageLançamentos";
import { PageLogin } from "./pages/PageLogin";
import { PageInverno } from "./pages/PageInverno";
import { Cadastro } from "./pages/PageCadastro";
import { EmblaCarousel } from "./components/carrossel";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <Home />
            <Footer />
          </>
        }
        />

        <Route path="/comprar" element={
          <>
            <Header />
            <PageComprar />
            <Footer />
          </>
        }
        />

        <Route path="/lancamentos" element={
          <>
            <Header />
            <PageLancamentos />
            <Footer />
          </>
        }
        />
        <Route path="/cadastro" element={
          <>
            <Header />
            <Cadastro />
            <Footer />
          </>
        }
        />

        <Route path="/colecao-inverno" element={
          <>
            <Header />
            <PageInverno />
            <Footer />
          </>
        }
        />

       
        <Route path="/login" element={
          <PageLogin />
        }
        />


        {/* Página que NÃO terá Header nem Footer */}
      </Routes>
    </BrowserRouter>


  );
}

export default App;