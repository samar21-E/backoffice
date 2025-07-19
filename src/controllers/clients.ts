import express from 'express';
import { getAllClients, getClientById, createClient } from '../db/clients';

export const GetAllClients = async (_req: express.Request, res: express.Response) => {
  try {
    const clients = await getAllClients();
    res.status(200).json(clients);
  } catch (error) {
    console.log(error);
        return res.sendStatus(400);
  }
};

export const GetClientById = async (req: express.Request, res: express.Response) => {
  const { id } = req.params;

  try {
    const client = await getClientById(id);
    if (!client) {
      return res.sendStatus(400);
    }
    res.status(200).json(client);
  } catch (error) {
    console.log(error);
        return res.sendStatus(400);
  }
};

export const CreateClient = async (req: express.Request, res: express.Response) => {
  const { name, email, phone, address } = req.body;

  if (!name || !email) {
    return res.sendStatus(400);
  }

  try {
    const client = await createClient({ name, email, phone, address });
    res.status(201).json(client);
  } catch (error) {
    console.log(error);
        return res.sendStatus(400);
  }
};