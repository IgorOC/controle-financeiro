import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  nome: string;
  sobrenome: string;
  email: string;
  senha: string;
  dataDeNascimento: Date;
}

const userSchema = new Schema<IUser>({
  nome: { type: String, required: true },
  sobrenome: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  senha: { type: String, required: true },
  dataDeNascimento: { type: Date, required: true },
});

const User = mongoose.models.User || mongoose.model<IUser>('User', userSchema);

export default User;
