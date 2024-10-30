import type { NextApiRequest, NextApiResponse } from 'next';
import argon2 from 'argon2';
import jwt from 'jsonwebtoken';
import dbConnect from '@/lib/mongodb';
import User from '@/models/User';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await dbConnect();

  if (req.method === 'POST') {
    const { email, senha } = req.body;

    if (!email || !senha) {
      return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ error: 'Usuário não encontrado' });
    }

    // Verifica a senha com argon2
    const isPasswordValid = await argon2.verify(user.senha, senha);

    if (!isPasswordValid) {
      return res.status(400).json({ error: 'Senha inválida' });
    }

    // Gera o token JWT
    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET as string,
      { expiresIn: '1h' }
    );

    res.status(200).json({ token });
  } else {
    res.status(405).json({ message: 'Método não permitido' });
  }
}
