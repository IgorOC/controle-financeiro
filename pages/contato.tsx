// pages/contato.tsx

import React from 'react';
import BackToDashboardButton from '@/components/BackToDashboardButton';

const Contato = () => {
  return (
    <div className="container mx-auto p-8 bg-gray-100 min-h-screen">
      <BackToDashboardButton />

      <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">Entre em Contato</h1>

      {/* Formulário de Contato */}
      <section className="max-w-lg mx-auto mb-12 bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center mb-4">Envie uma Mensagem</h2>
        <form className="space-y-4">
          <input 
            type="text" 
            placeholder="Nome" 
            className="w-full p-3 border border-gray-300 rounded focus:border-blue-500 focus:ring focus:ring-blue-200"
          />
          <input 
            type="email" 
            placeholder="Email" 
            className="w-full p-3 border border-gray-300 rounded focus:border-blue-500 focus:ring focus:ring-blue-200"
          />
          <textarea 
            placeholder="Sua mensagem" 
            rows={4} 
            className="w-full p-3 border border-gray-300 rounded focus:border-blue-500 focus:ring focus:ring-blue-200"
          />
          <button 
            type="submit" 
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
          >
            Enviar
          </button>
        </form>
      </section>

      {/* Localização e Redes Sociais */}
      <section className="text-center mb-12">
        <h2 className="text-3xl font-semibold text-blue-500 mb-6">Nossa Localização</h2>
        <p className="text-lg text-gray-700 mb-4">Estamos localizados no centro de Uberlândia, prontos para atendê-lo!</p>
        <img 
          src="https://via.placeholder.com/600x300" 
          alt="Mapa de Localização" 
          className="w-full max-w-2xl mx-auto rounded-lg shadow-md"
        />
      </section>

      {/* Redes Sociais */}
      <section className="text-center">
        <h2 className="text-3xl font-semibold text-blue-500 mb-6">Siga-nos nas Redes Sociais</h2>
        <div className="flex justify-center space-x-4">
          <a href="https://www.linkedin.com/in/igor-cordeiroo" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 text-3xl">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://www.instagram.com/_igooorrrr/" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-700 text-3xl">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.facebook.com/igor.oliver.161/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 text-3xl">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://x.com/igu1nnnn" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600 text-3xl">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contato;
