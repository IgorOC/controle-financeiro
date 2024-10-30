import React from 'react';
import BackToDashboardButton from '@/components/BackToDashboardButton';

const Investimentos = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Botão para voltar ao dashboard */}
        <BackToDashboardButton />

        {/* Introdução */}
        <section className="mb-12">
          <h1 className="text-4xl font-bold text-center mb-4 text-blue-600">Guia Completo de Investimentos</h1>
          <p className="text-lg text-gray-700 text-center">
            Explore o mundo dos investimentos e descubra maneiras de fazer seu dinheiro crescer. Aqui você encontra informações sobre os principais tipos de investimentos e dicas valiosas para começar.
          </p>
        </section>

        {/* Conteúdo da página */}
        {/* Tipos de Investimento */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-blue-500">Tipos de Investimento</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Renda Fixa */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-green-600">Renda Fixa</h3>
              <p className="text-gray-700">
                Investimentos de baixo risco, como CDBs, LCIs, e Tesouro Direto. Ideais para quem busca segurança e previsibilidade nos rendimentos.
              </p>
            </div>
            
            {/* Renda Variável */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-red-600">Renda Variável</h3>
              <p className="text-gray-700">
                Inclui ações e ETFs, que possuem maior volatilidade, mas também potencial para retornos mais altos. Indicado para investidores com perfil arrojado.
              </p>
            </div>

            {/* Fundos Imobiliários */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-yellow-600">Fundos Imobiliários</h3>
              <p className="text-gray-700">
                Investimentos que permitem ao investidor participar do mercado imobiliário de forma indireta, através de cotas de fundos que investem em imóveis.
              </p>
            </div>

            {/* Criptomoedas */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-purple-600">Criptomoedas</h3>
              <p className="text-gray-700">
                Ativos digitais descentralizados, como Bitcoin e Ethereum, que têm atraído muitos investidores em busca de inovação e potencial de valorização.
              </p>
            </div>
          </div>
        </section>

        {/* Dicas para Iniciantes */}
        <section>
          <h2 className="text-3xl font-semibold mb-6 text-blue-500">Dicas para Iniciantes</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-4">
            <li>Estabeleça um objetivo financeiro claro antes de investir.</li>
            <li>Diversifique seus investimentos para reduzir riscos.</li>
            <li>Invista apenas o que você está disposto a deixar aplicado por um período.</li>
            <li>Pesquise e compreenda os tipos de investimento antes de decidir.</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Investimentos;
