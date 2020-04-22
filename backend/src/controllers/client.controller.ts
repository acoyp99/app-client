import {Request, Response} from 'express';
import Client from '../models/client'


export async function getClients(req: Request, res: Response): Promise<Response> {
    const clients = await Client.find();
    return res.json(clients);
}
export async function getClient(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const client = await Client.findById(id);
    return res.json(client);
}
export async function createClient(req: Request, res: Response): Promise<Response>{
    const{ name, office, position, salary} = req.body;

    const newClient = {
        name: name,
        office: office,
        position: position,
        salary: salary
    }
    const client = new Client(newClient);
    await client.save();
    return res.json({
        message: 'Client succesfully saved', client
    });
}

export async function deleteClient(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const client = await Client.findByIdAndRemove(id);

    return res.json({
        message: 'Client deleted', client
    });
}
export async function updateClient(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const{ name, office, position, salary} = req.body;
    const updatedclient = await Client.findByIdAndUpdate(id, {
        name: name,
        office: office,
        position: position,
        salary: salary
    },{new: true});
    
    return res.json({
        message: 'Client updated', updatedclient
    });
}

