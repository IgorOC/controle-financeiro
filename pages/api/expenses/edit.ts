import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@/lib/mongodb';
import Expense from '@/models/Expense';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await dbConnect();

  if (req.method === 'PUT') {
    const { id, valor, descricao, data } = req.body;

    try {
      const updatedExpense = await Expense.findByIdAndUpdate(
        id,
        { valor, descricao, data: new Date(data) },
        { new: true }
      );
      res.status(200).json({ message: 'Despesa atualizada com sucesso!', updatedExpense });
    } catch (error) {
      res.status(500).json({ error: 'Erro ao editar a despesa' });
    }
  } else {
    res.status(405).json({ message: 'Método não permitido' });
  }
}
