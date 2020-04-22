"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const client_controller_1 = require("../controllers/client.controller");
const multer_1 = __importDefault(require("../libs/multer"));
router.route('/clients')
    .post(multer_1.default.single('image'), client_controller_1.createClient)
    .get(client_controller_1.getClients);
router.route('/clients/:id')
    .get(client_controller_1.getClient)
    .delete(client_controller_1.deleteClient)
    .put(client_controller_1.updateClient);
exports.default = router;
