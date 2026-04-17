import './App.css' // Importa o arquivo de estilos global para a aplicação, garantindo que os estilos sejam aplicados a toda a página e seus componentes
import Hero from './components/Hero/Hero' // Importa o componente de seção principal da landing page, com titulo, descrição e chamada para ação
import Navbar from './components/Navbar/Navbar' // Importa o componente de barra de navegação fixa no topo da página, com logo, links de navegação e botões de ação para login e cadastro
import Sobre from './components/Sobre/Sobre'

import Funcionalidades from './components/Funcionalidades/Funcionalidades'
import WhoWeAre from './components/WhoWeAre/WhoWeAre'

// Componente principal da aplicação, que renderiza a barra de navegação e a seção principal da landing page, garantindo que ambos os componentes sejam exibidos na página inicial.
function App() {

  return (
    <>
      <Navbar /> {/* Barra de navegação fixa no topo da página, com logo, links de navegação e botões de ação para login e cadastro */}
      <Hero /> {/* Seção principal da landing page, com titulo, descrição e chamada para ação */} 
      <Sobre/>
      <Funcionalidades/>
      <WhoWeAre/>
    </>
  )
}

export default App // Componente principal da aplicação, que renderiza a barra de navegação e a seção principal da landing page, garantindo que ambos os componentes sejam exibidos na página inicial.