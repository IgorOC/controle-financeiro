// pages/api/register.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import argon2 from 'argon2';
import dbConnect from '@/lib/mongodb';
import User from '@/models/User';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await dbConnect();

  if (req.method === 'POST') {
    const { nome, sobrenome, email, senha, dataDeNascimento } = req.body;

    if (!nome || !sobrenome || !email || !senha || !dataDeNascimento) {
      return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
    }

    try {
      const userExists = await User.findOne({ email });
      if (userExists) {
        return res.status(400).json({ error: 'Usuário já existe' });
      }

      const hashedPassword = await argon2.hash(senha);
      console.log('Senha criptografada com sucesso');

      const newUser = new User({
        nome,
        sobrenome,
        email,
        senha: hashedPassword,
        dataDeNascimento,
      });

      await newUser.save()
        .then(() => {
          console.log('Usuário salvo no banco de dados');
          res.status(201).json({ message: 'Usuário criado com sucesso', userId: newUser._id });
        })
        .catch((error: unknown) => {
          if (error instanceof Error) {
            console.error('Erro ao salvar usuário:', error.message);
          } else {
            console.error('Erro desconhecido:', error);
          }
          res.status(500).json({ error: 'Erro ao salvar o usuário no banco de dados' });
        });

    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error('Erro ao processar requisição:', error.message);
      } else {
        console.error('Erro desconhecido:', error);
      }
      res.status(500).json({ error: 'Erro ao criar usuário' });
    }
  } else {
    res.status(405).json({ message: 'Método não permitido' });
  }
}
