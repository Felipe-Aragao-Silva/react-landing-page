// Barra de navegação fixa no topo da página

import './styles.css'; // Importa o arquivo de estilos específico para a barra de navegação, garantindo que os estilos sejam aplicados apenas a esta seção e não afetem outros componentes da página
import Button from '../Button/Button'; // Importa o componente de botão reutilizável para ações como "Login" e "Começar agora/cadastro"


// Função para exibir uma mensagem de alerta quando o botão de login é clicado
function showMessage() {
  alert('Realizar login'); // Exibe um alerta quando o botão é clicado
}

// Componente de barra de navegação fixa no topo da página, com logo, links de navegação e botões de ação para login e cadastro
function Navbar() {
  return (
    <nav className="navbar"> {/* Elemento de navegação com classe "navbar" para estilização */}
        <div className="container"> {/* Container para centralizar o conteúdo da barra de navegação */}
            <a href="#" className="logo">LipexTrack</a> {/* Logo da plataforma, com link para a página inicial e classe "logo" para estilização */}

            <ul className="list-menu"> {/* Lista de itens de menu, com classe "list-menu" para estilização */}
                <li><a className="link" href="#sobre">Sobre</a></li>
                <li><a className="link" href="#funcionalidades">Funcionalidades</a></li>
                <li><a className="link" href="#equipe">Equipe</a></li>
                <li><a className="link" href="#contato">Contato</a></li>
            </ul>

            <div> {/* Container para os botões de ação, como "Login" e "Começar agora/cadastro" */}
              <Button border={false} filled={false} label="Login" onClick={showMessage} /> {/* Botão de login, sem borda e sem preenchimento, que chama a função showMessage ao ser clicado */}
              <Button border={true} filled={true} label="Começar agora" onClick={() => {}} /> {/* Botão de chamada para ação, com borda e preenchimento, que atualmente não tem funcionalidade ao ser clicado */}
            </div>
        </div>
    </nav>
  );
}

export default Navbar; // Barra de navegação fixa no topo da página, com logo, links de navegação e botões de ação para login e cadastro