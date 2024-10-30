import Link from 'next/link';
import Image from 'next/image'; // Para adicionar a logo
import logo from '@/public/logo.png'; // Certifique-se de que sua logo esteja no diretório /public

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo e Nome IGfinancial */}
        <div className="flex items-center space-x-3">
          <Image 
            src={logo} 
            alt="Logo IGfinancial" 
            width={40} 
            height={40} 
            className="rounded-full"
          />
          <h1 className="text-2xl font-bold text-gray-800">
            <Link href="/">IGfinancial</Link>
          </h1>
        </div>

        {/* Links de Navegação */}
        <div className="flex space-x-4">
          <Link href="/login">
            <span className="text-gray-600 hover:text-gray-900 cursor-pointer">
              Login
            </span>
          </Link>
          <Link href="/register">
            <span className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition cursor-pointer">
              Registrar
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
