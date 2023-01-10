"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const googleUsers_schema_1 = require("./googleUsers.schema");
const getOne = (id) => googleUsers_schema_1.googleUsersModel.findOne({ googleId: id });
const add = (userData) => googleUsers_schema_1.googleUsersModel.create(Object.assign({}, userData));
exports.default = { getOne, add };
//# sourceMappingURL=googleUsers.repo.js.map