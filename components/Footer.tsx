const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-6 mt-12">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Controle Financeiro. Todos os direitos reservados.</p>
          <div className="mt-4">
            <a href="/contato" className="text-blue-400 hover:text-blue-600">
              Contato
            </a>
            <span className="mx-4">|</span>
            <a href="/sobre-nos" className="text-blue-400 hover:text-blue-600">
              Sobre Nós
            </a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  