"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrafficVoilationManagement = void 0;
const fs = __importStar(require("fs"));
const path_1 = require("path");
class TrafficVoilationManagement {
    loadVoilations(inputFile) {
        const data = fs.readFileSync((0, path_1.join)(__dirname, inputFile), 'utf-8');
        const textByLine = data.toString().split('\n');
        console.log(textByLine);
        return textByLine;
    }
    sortDate(allVoilations) {
        allVoilations.forEach((aVoilation) => {
            const year = aVoilation.slice(0, 3);
            this.storeViolationByYear(year, aVoilation);
        });
    }
    storeViolationByYear(voilationYear, voilation) {
        fs.access(`../TrafficVoilationsFiles/${voilationYear}`, (exist) => {
            if (exist) {
                fs.writeFileSync(`../TrafficVoilationsFiles/${voilationYear}.txt`, voilation);
            }
            else {
                fs.appendFileSync(`../TrafficVoilationsFiles/${voilationYear}.txt`, voilation);
            }
        });
    }
}
exports.TrafficVoilationManagement = TrafficVoilationManagement;
//# sourceMappingURL=traffic_voilations.js.map