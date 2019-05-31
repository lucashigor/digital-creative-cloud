"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _express = require('express');

var _UsersController = require('./controllers/UsersController'); var _UsersController2 = _interopRequireDefault(_UsersController);

const routes = _express.Router.call(void 0, )

routes.get('/users', _UsersController2.default.index)
routes.post('/users', _UsersController2.default.store)

exports. default = routes
