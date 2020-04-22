"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var schema = new mongoose_1.Schema({
    name: String,
    position: String,
    office: String,
    salary: Number
});
exports["default"] = mongoose_1.model('Client', schema);
