import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Header } from "./components/layout/header";
import "./App.css";
import { Footer } from "./components/layout/footer";

function App() {
  return (
    <BrowserRouter>

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      
      <Footer />

    </BrowserRouter>
  );
}

export default App
