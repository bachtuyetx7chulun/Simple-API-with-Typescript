"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./utils/index"));
const app = express_1.default();
app.get('/', (req, res, next) => {
    res.json({
        timeStamp: index_1.default.getTimeStamp(),
    });
});
exports.default = app;
//# sourceMappingURL=server.js.map