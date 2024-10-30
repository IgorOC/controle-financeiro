import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@/lib/mongodb';
import Expense from '@/models/Expense';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await dbConnect();

  if (req.method === 'POST') {
    const { userId, valor, descricao, data } = req.body;

    try {
      const newExpense = new Expense({
        userId,
        valor,
        descricao,
        data: new Date(data),
      });

      await newExpense.save();
      res.status(201).json({ message: 'Despesa adicionada com sucesso!' });
    } catch (error) {
      res.status(500).json({ error: 'Erro ao adicionar a despesa' });
    }
  } else {
    res.status(405).json({ message: 'Método não permitido' });
  }
}
