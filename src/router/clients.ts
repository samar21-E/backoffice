import express from 'express';
import {GetAllClients, GetClientById, CreateClient} from '../controllers/clients';


export default (router: express.Router)=> {
   router.get('/', GetAllClients);        
   router.get('/:id', GetClientById);     
   router.post('/', CreateClient); 

};