import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@/lib/mongodb';
import Expense from '@/models/Expense';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await dbConnect();

  if (req.method === 'DELETE') {
    const { id } = req.body;

    try {
      await Expense.findByIdAndDelete(id);
      res.status(200).json({ message: 'Despesa excluída com sucesso!' });
    } catch (error) {
      res.status(500).json({ error: 'Erro ao excluir a despesa' });
    }
  } else {
    res.status(405).json({ message: 'Método não permitido' });
  }
}
