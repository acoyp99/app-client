"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
async function startConn() {
    await mongoose_1.connect('mongodb://169.48.255.194:32513/clientsdb', {
        useNewUrlParser: true,
        useFindAndModify: false
    });
    console.log('Database is connected');
}
exports.startConn = startConn;
