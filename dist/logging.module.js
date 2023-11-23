"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var LoggingModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggingModule = void 0;
const common_1 = require("@nestjs/common");
const logging_service_1 = require("./logging.service");
let LoggingModule = LoggingModule_1 = class LoggingModule {
    static forRoot(params) {
        const provider = { provide: 'LoggingServiceParams', useValue: params };
        return {
            module: LoggingModule_1,
            providers: [provider, logging_service_1.LoggingService],
            exports: [logging_service_1.LoggingService],
        };
    }
};
LoggingModule = LoggingModule_1 = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({})
], LoggingModule);
exports.LoggingModule = LoggingModule;
//# sourceMappingURL=logging.module.js.map