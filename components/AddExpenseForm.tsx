import { useState } from 'react';

interface Props {
  onAddExpense: (valor: string, descricao: string, data: string) => void;
}

const AddExpenseForm: React.FC<Props> = ({ onAddExpense }) => {
  const [newExpense, setNewExpense] = useState({ valor: '', descricao: '', data: '' });

  const handleSubmit = () => {
    onAddExpense(newExpense.valor, newExpense.descricao, newExpense.data);
    setNewExpense({ valor: '', descricao: '', data: '' });
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mb-6 max-w-lg mx-auto">
      <h2 className="text-xl font-semibold mb-4">Adicionar Despesa</h2>
      <div className="flex flex-col space-y-4">
        <input
          type="number"
          placeholder="Valor"
          value={newExpense.valor}
          onChange={(e) => setNewExpense({ ...newExpense, valor: e.target.value })}
          className="border border-gray-300 p-2 rounded w-full focus:border-blue-500 focus:ring focus:ring-blue-200"
        />
        <input
          type="text"
          placeholder="Descrição"
          value={newExpense.descricao}
          onChange={(e) => setNewExpense({ ...newExpense, descricao: e.target.value })}
          className="border border-gray-300 p-2 rounded w-full focus:border-blue-500 focus:ring focus:ring-blue-200"
        />
        <input
          type="date"
          value={newExpense.data}
          onChange={(e) => setNewExpense({ ...newExpense, data: e.target.value })}
          className="border border-gray-300 p-2 rounded w-full focus:border-blue-500 focus:ring focus:ring-blue-200"
        />
      </div>
      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white mt-4 p-2 rounded w-full hover:bg-blue-600 transition"
      >
        Adicionar
      </button>
    </div>
  );
};

export default AddExpenseForm;
