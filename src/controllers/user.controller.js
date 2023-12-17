"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletetUser = exports.putUser = exports.postUser = exports.getUsers = exports.getUser = void 0;
const error_handle_1 = require("../utils/error.handle");
const getUser = (req, res) => {
    try {
    }
    catch (e) {
        (0, error_handle_1.handleHttp)(res, "ERROR_GET_USER");
    }
};
exports.getUser = getUser;
const getUsers = (req, res) => {
    try {
    }
    catch (e) {
        (0, error_handle_1.handleHttp)(res, "ERROR_GET_USERS");
    }
};
exports.getUsers = getUsers;
const postUser = ({ body }, res) => {
    try {
        res.send({ body });
    }
    catch (e) {
        (0, error_handle_1.handleHttp)(res, "ERROR_POST_USER");
    }
};
exports.postUser = postUser;
const putUser = ({ body }, res) => {
    try {
        res.send({ body });
    }
    catch (e) {
        (0, error_handle_1.handleHttp)(res, "ERROR_PUT_GETUSER");
    }
};
exports.putUser = putUser;
const deletetUser = ({ body }, res) => {
    try {
        res.send({ body });
    }
    catch (e) {
        (0, error_handle_1.handleHttp)(res, "ERROR_DELETE_USER");
    }
};
exports.deletetUser = deletetUser;
