"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1.Router();
var client_controller_1 = require("../controllers/client.controller");
var multer_1 = require("../libs/multer");
router.route('/clients')
    .post(multer_1["default"].single('image'), client_controller_1.createClient)
    .get(client_controller_1.getClients);
router.route('/clients/:id')
    .get(client_controller_1.getClient)["delete"](client_controller_1.deleteClient)
    .put(client_controller_1.updateClient);
exports["default"] = router;
