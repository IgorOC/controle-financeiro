import React from 'react';
import BackToDashboardButton from '@/components/BackToDashboardButton';

const SobreNos = () => {
  return (
    <div className="container mx-auto p-8 bg-gray-100 min-h-screen">
      <BackToDashboardButton />

      <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">Sobre Nós</h1>
      
      {/* Seção de Introdução */}
      <section className="mb-12 text-center">
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Nosso projeto foi criado para ajudar as pessoas a entenderem e controlarem suas finanças. Com uma ferramenta intuitiva e acessível, nossos usuários conseguem planejar e alcançar suas metas financeiras.
        </p>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-2xl font-semibold text-blue-600 mb-4">Missão</h3>
          <p className="text-gray-700">Facilitar a gestão financeira de nossos usuários para uma vida mais equilibrada e consciente.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-2xl font-semibold text-blue-600 mb-4">Visão</h3>
          <p className="text-gray-700">Ser a principal ferramenta de controle financeiro no Brasil, inspirando pessoas a cuidarem de seu futuro financeiro.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-2xl font-semibold text-blue-600 mb-4">Valores</h3>
          <p className="text-gray-700">Transparência, segurança e compromisso com o desenvolvimento financeiro dos nossos usuários.</p>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-blue-500 mb-6 text-center">Depoimentos</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-gray-700">"Essa ferramenta mudou a minha vida. Agora consigo organizar meus gastos e economizar para o futuro!"</p>
            <p className="mt-4 font-semibold text-right text-blue-600">- Carla Santos</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-gray-700">"Muito fácil de usar e essencial para quem quer ter controle financeiro."</p>
            <p className="mt-4 font-semibold text-right text-blue-600">- Pedro Lima</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SobreNos;
