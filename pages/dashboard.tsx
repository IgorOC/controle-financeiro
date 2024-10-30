import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import jsPDF from 'jspdf';
import * as XLSX from 'xlsx';
import Sidebar from '@/components/Sidebar';
import AddExpenseForm from '@/components/AddExpenseForm';
import ExpenseTable from '@/components/ExpenseTable';

interface Expense {
  _id: string;
  valor: number;
  descricao: string;
  data: string;
}

const Dashboard = () => {
  const router = useRouter();
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchExpenses();
  }, []);

  const fetchExpenses = async () => {
    const res = await fetch('/api/expenses/list?userId=12345');
    const data: Expense[] = await res.json();
    setExpenses(data);
    setLoading(false);
  };

  const calculateTotal = () => {
    return expenses.reduce((total, expense) => total + expense.valor, 0);
  };

  const exportToPDF = () => {
    const doc = new jsPDF();
    doc.text('Relatório de Despesas', 10, 10);
    expenses.forEach((expense, index) => {
      doc.text(
        `${index + 1}. Descrição: ${expense.descricao}, Valor: R$${expense.valor}, Data: ${new Date(expense.data).toLocaleDateString()}`,
        10,
        20 + (index * 10)
      );
    });
    doc.save('relatorio_despesas.pdf');
  };

  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(expenses.map(expense => ({
      Descrição: expense.descricao,
      Valor: expense.valor,
      Data: new Date(expense.data).toLocaleDateString(),
    })));
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Despesas');
    XLSX.writeFile(workbook, 'relatorio_despesas.xlsx');
  };

  const handleAddExpense = async (valor: string, descricao: string, data: string) => {
    const res = await fetch('/api/expenses/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userId: '12345',
        valor,
        descricao,
        data,
      }),
    });

    if (res.ok) {
      const newExpenseData = await res.json();
      setExpenses([...expenses, newExpenseData]);
    }
  };

  const handleDelete = async (id: string) => {
    const res = await fetch('/api/expenses/delete', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    });

    if (res.ok) {
      const updatedExpenses = expenses.filter(expense => expense._id !== id);
      setExpenses(updatedExpenses);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    router.push('/');
  };

  if (loading) return <p>Carregando...</p>;

  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <main className="flex-1 bg-gray-50 p-8">
        <h1 className="text-3xl font-bold mb-6">Controle Financeiro</h1>

        {/* Formulário para adicionar nova despesa */}
        <AddExpenseForm onAddExpense={handleAddExpense} />

        {/* Botões para exportar relatórios */}
        <div className="flex justify-between max-w-lg mx-auto mb-6">
          <button
            onClick={exportToPDF}
            className="bg-green-500 text-white p-2 rounded hover:bg-green-600 transition"
          >
            Exportar para PDF
          </button>
          <button
            onClick={exportToExcel}
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
          >
            Exportar para Excel
          </button>
        </div>

        {/* Tabela de despesas */}
        <ExpenseTable expenses={expenses} onDelete={handleDelete} calculateTotal={calculateTotal} />
      </main>
    </div>
  );
};

export default Dashboard;
