"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router_1 = require("./router");
var App = /** @class */ (function () {
    function App() {
        this.server = (0, express_1["default"])();
        this.middlewares();
        this.routes();
    }
    App.prototype.middlewares = function () {
        this.server.use(express_1["default"].json());
    };
    App.prototype.routes = function () {
        this.server.use(router_1["default"]);
    };
    return App;
}());
exports["default"] = new App().server;
