"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getTimeStamp = () => {
    return new Date().toISOString();
};
const counterTime = (startTime, endTime) => {
    return (+endTime - +startTime).toString();
};
exports.default = {
    getTimeStamp,
    counterTime,
};
//# sourceMappingURL=index.js.map