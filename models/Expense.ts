import mongoose, { Schema, Document } from 'mongoose';

export interface IExpense extends Document {
  userId: string; // Associado ao usuário
  valor: number;
  descricao: string;
  data: Date;
}

const expenseSchema = new Schema<IExpense>({
  userId: { type: String, required: true },
  valor: { type: Number, required: true },
  descricao: { type: String, required: true },
  data: { type: Date, required: true },
});

const Expense = mongoose.models.Expense || mongoose.model<IExpense>('Expense', expenseSchema);

export default Expense;
