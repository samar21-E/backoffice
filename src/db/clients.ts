import mongoose from 'mongoose';

const ClientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String },
  address: { type: String }
}, { timestamps: true });

export const ClientModel = mongoose.model('Client', ClientSchema);

export const getAllClients = () => ClientModel.find();

export const getClientByEmail = (email: string) => 
  ClientModel.findOne({ email });

export const getClientById = (id: string) => 
  ClientModel.findById(id);

export const createClient = (data: Record<string, any>) =>
  new ClientModel(data).save().then(client => client.toObject());

export const deleteClientById = (id: string) =>
  ClientModel.findByIdAndDelete(id);

export const updateClientById = (id: string, data: Record<string, any>) =>
  ClientModel.findByIdAndUpdate(id, data, { new: true });