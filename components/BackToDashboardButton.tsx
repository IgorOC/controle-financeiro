// components/BackToDashboardButton.tsx

import { useRouter } from 'next/router';

const BackToDashboardButton = () => {
  const router = useRouter();

  const handleBackToDashboard = () => {
    router.push('/dashboard');
  };

  return (
    <button
      onClick={handleBackToDashboard}
      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
    >
      Voltar ao Dashboard
    </button>
  );
};

export default BackToDashboardButton;
