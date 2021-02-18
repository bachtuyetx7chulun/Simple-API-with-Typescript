"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const configs_1 = require("./configs");
const server_1 = __importDefault(require("./server"));
server_1.default.listen(configs_1.PORT, () => {
    console.log(`Server is running on port ${configs_1.PORT}`);
});
//# sourceMappingURL=index.js.map