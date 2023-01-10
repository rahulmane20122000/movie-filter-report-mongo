"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.googleUsersModel = void 0;
const mongoose_1 = require("mongoose");
const base_schema_1 = require("../../utility/base.schema");
const googleUsersSchema = new base_schema_1.BaseSchema({
    googleId: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
});
exports.googleUsersModel = (0, mongoose_1.model)('googleUsers', googleUsersSchema);
//# sourceMappingURL=googleUsers.schema.js.map