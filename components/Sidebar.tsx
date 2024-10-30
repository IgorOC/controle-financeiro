import React from 'react';
import { useRouter } from 'next/router';

const Sidebar = () => {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('token');
    router.push('/');
  };

  return (
    <div className="bg-gray-800 w-16 hover:w-64 transition-all duration-300 ease-in-out h-screen p-4 flex flex-col justify-between">
      {/* Ícones de navegação */}
      <div className="flex flex-col space-y-4">
        {/* Dashboard */}
        <div onClick={() => router.push('/dashboard')} className="group flex items-center space-x-4 cursor-pointer">
          <div className="text-white">
            <i className="fas fa-home"></i>
          </div>
          <span className="text-white hidden group-hover:inline-block">Dashboard</span>
        </div>

        {/* Investimentos */}
        <div onClick={() => router.push('/investimentos')} className="group flex items-center space-x-4 cursor-pointer">
          <div className="text-white">
            <i className="fas fa-chart-line"></i>
          </div>
          <span className="text-white hidden group-hover:inline-block">Investimentos</span>
        </div>

        {/* Sobre Nós */}
        <div onClick={() => router.push('/sobre-nos')} className="group flex items-center space-x-4 cursor-pointer">
          <div className="text-white">
            <i className="fas fa-file-alt"></i>
          </div>
          <span className="text-white hidden group-hover:inline-block">Sobre Nós</span>
        </div>

        {/* Contato */}
        <div onClick={() => router.push('/contato')} className="group flex items-center space-x-4 cursor-pointer">
          <div className="text-white">
            <i className="fas fa-phone-alt"></i>
          </div>
          <span className="text-white hidden group-hover:inline-block">Contato</span>
        </div>
      </div>

      {/* Botão de Logout */}
      <div className="group flex items-center space-x-4 cursor-pointer" onClick={handleLogout}>
        <div className="text-white">
          <i className="fas fa-sign-out-alt"></i>
        </div>
        <span className="text-white hidden group-hover:inline-block">Sair</span>
      </div>
    </div>
  );
};

export default Sidebar;
