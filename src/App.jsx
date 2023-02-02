import GlobalStyle from "./styles/global";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import SobreMim from "./components/Sobre";
import Portifolio from "./components/Portifolio";
import Skills from "./components/Skills";
import Conato from "./components/Contato";
import Footer from "./components/Footer";




function App() {

  return (
    <div>
      
        <GlobalStyle/>
        <Navbar/>
        <Home/>
        <SobreMim/>
        <Portifolio/>
        <Skills/>
        <Conato/>
        <Footer/>
      
    </div>
  )
}

export default App
