import GlobalStyle from "./styles/global";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import SobreMim from "./components/Sobre";
import Portifolio from "./components/Portifolio";
import Skills from "./components/Skills";
import Conato from "./components/Contato";
import Footer from "./components/Footer";
import AuthProvider from "./contexts/width";
import Subhome from "./components/Subhome";




function App() {

  return (
    <div>
      <AuthProvider>
        <GlobalStyle/>
        <Navbar/>
        <Home/>
        <Subhome/>
        <SobreMim/>
        <Portifolio/>
        <Skills/>
        <Conato/>
        <Footer/>
      </AuthProvider>
    </div>
  )
}

export default App
