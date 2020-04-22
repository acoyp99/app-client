"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    name: String,
    position: String,
    office: String,
    salary: Number
});
exports.default = mongoose_1.model('Client', schema);
