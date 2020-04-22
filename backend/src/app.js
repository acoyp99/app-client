"use strict";
exports.__esModule = true;
var express_1 = require("express");
var morgan_1 = require("morgan");
var path_1 = require("path");
var cors_1 = require("cors");
var app = express_1["default"]();
var index_1 = require("./routes/index");
// Settings
app.set('port', process.env.port || 8080);
// Middlewares
app.use(morgan_1["default"]('dev'));
app.use(cors_1["default"]());
app.use(express_1["default"].json());
// Routes
app.use('/api', index_1["default"]);
// This folder save photos
app.use('/uploads', express_1["default"].static(path_1["default"].resolve('uploads')));
exports["default"] = app;
