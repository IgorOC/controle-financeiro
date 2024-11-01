import React, { useState } from 'react';

interface Expense {
  _id: string;
  valor: number;
  descricao: string;
  data: string;
}

interface Props {
  expenses: Expense[];
  onDelete: (id: string) => void;
  calculateTotal: () => number;
}

const ExpenseTable: React.FC<Props> = ({ expenses, onDelete, calculateTotal }) => {
  const [saldoInicial, setSaldoInicial] = useState(0); // Saldo inicial inserido pelo usuário

  const handleSaldoInicialChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSaldoInicial(Number(event.target.value));
  };

  const saldoFinal = saldoInicial - calculateTotal(); // Cálculo do saldo final

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-4xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">Despesas</h2>

      {/* Campo para inserir o saldo inicial */}
      <div className="mb-4">
        <label className="text-gray-700 font-semibold">Saldo Inicial (R$):</label>
        <input
          type="number"
          value={saldoInicial}
          onChange={handleSaldoInicialChange}
          className="border border-gray-300 rounded p-2 w-full mt-1"
          placeholder="Insira seu saldo inicial"
        />
      </div>

      {/* Tabela de despesas */}
      <table className="min-w-full bg-white">
        <thead>
          <tr className="w-full border-b border-gray-300">
            <th className="py-2 text-left px-4">Descrição</th>
            <th className="py-2 text-left px-4">Valor (R$)</th>
            <th className="py-2 text-left px-4">Data</th>
            <th className="py-2 text-center px-4">Ações</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense._id} className="border-b border-gray-200">
              <td className="py-2 px-4">{expense.descricao}</td>
              <td className="py-2 px-4">
                {expense.valor !== undefined && !isNaN(expense.valor)
                  ? `R$${expense.valor.toFixed(2)}`
                  : 'Valor inválido'}
              </td>
              <td className="py-2 px-4">{new Date(expense.data).toLocaleDateString()}</td>
              <td className="py-2 px-4 text-center">
                <button
                  onClick={() => onDelete(expense._id)}
                  className="bg-red-500 text-white p-2 rounded hover:bg-red-600 transition"
                >
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Exibição do saldo final */}
      <div className="mt-4 text-right">
        <h3 className="text-xl font-bold text-gray-700">Total de Gastos: R${calculateTotal().toFixed(2)}</h3>
        <h3 className="text-xl font-bold text-gray-700">Saldo Final: R${saldoFinal.toFixed(2)}</h3>
      </div>
    </div>
  );
};

export default ExpenseTable;
