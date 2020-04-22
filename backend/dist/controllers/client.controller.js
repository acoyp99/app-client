"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = __importDefault(require("../models/client"));
async function getClients(req, res) {
    const clients = await client_1.default.find();
    return res.json(clients);
}
exports.getClients = getClients;
async function getClient(req, res) {
    const { id } = req.params;
    const client = await client_1.default.findById(id);
    return res.json(client);
}
exports.getClient = getClient;
async function createClient(req, res) {
    const { name, office, position, salary } = req.body;
    const newClient = {
        name: name,
        office: office,
        position: position,
        salary: salary
    };
    const client = new client_1.default(newClient);
    await client.save();
    return res.json({
        message: 'Client succesfully saved', client
    });
}
exports.createClient = createClient;
async function deleteClient(req, res) {
    const { id } = req.params;
    const client = await client_1.default.findByIdAndRemove(id);
    return res.json({
        message: 'Client deleted', client
    });
}
exports.deleteClient = deleteClient;
async function updateClient(req, res) {
    const { id } = req.params;
    const { name, office, position, salary } = req.body;
    const updatedclient = await client_1.default.findByIdAndUpdate(id, {
        name: name,
        office: office,
        position: position,
        salary: salary
    }, { new: true });
    return res.json({
        message: 'Client updated', updatedclient
    });
}
exports.updateClient = updateClient;
