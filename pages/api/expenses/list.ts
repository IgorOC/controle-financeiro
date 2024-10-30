import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@/lib/mongodb';
import Expense from '@/models/Expense';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await dbConnect();

  if (req.method === 'GET') {
    const { userId } = req.query;

    try {
      const expenses = await Expense.find({ userId });
      res.status(200).json(expenses);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao listar as despesas' });
    }
  } else {
    res.status(405).json({ message: 'Método não permitido' });
  }
}
