"use strict";
exports.__esModule = true;
var multer_1 = require("multer");
var v4_1 = require("uuid/v4");
var path_1 = require("path");
var storage = multer_1["default"].diskStorage({
    destination: 'uploads',
    filename: function (req, file, cb) {
        cb(null, v4_1["default"]() + path_1["default"].extname(file.originalname));
    }
});
exports["default"] = multer_1["default"]({ storage: storage });
