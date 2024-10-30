import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import financialTableImage from '@/public/financial-table.png'; // Suponha que este seja o caminho correto para sua imagem

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Conteúdo Principal */}
      <main className="flex-grow container mx-auto p-8 text-center">
        <h1 className="text-5xl font-bold mb-8">
          Gerencie seu <span className="text-blue-600">controle financeiro</span>
        </h1>
        <p className="text-xl text-gray-600 mb-12">
          Uma maneira simples e eficiente de organizar seus gastos e investimentos.
        </p>
        <div className="flex justify-center space-x-4 mb-12">
          <a href="/register" className="bg-blue-500 text-white px-8 py-4 text-lg rounded-lg hover:bg-blue-600 transition">
            Comece agora
          </a>
          <a href="/login" className="bg-gray-100 text-gray-800 px-8 py-4 text-lg rounded-lg hover:bg-gray-200 transition">
            Já tenho conta
          </a>
        </div>

        {/* Adicionando a imagem ilustrativa */}
        <div className="flex justify-center mt-12">
          <Image
            src={financialTableImage} // Certifique-se de que o caminho da imagem esteja correto
            alt="Ilustração da Tabela Financeira"
            width={800}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
