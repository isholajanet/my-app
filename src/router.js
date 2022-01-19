"use strict";
exports.__esModule = true;
var express_1 = require("express");
var routes = (0, express_1.Router)();
routes.get('/', function (req, res) {
    return res.json({ message: 'Hello World' });
});
exports["default"] = routes;
