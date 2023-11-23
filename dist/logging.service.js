"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggingService = void 0;
const common_1 = require("@nestjs/common");
const severity_1 = require("./severity");
let LoggingService = class LoggingService extends common_1.ConsoleLogger {
    constructor(params = {
        gcpErrorReporting: false,
    }) {
        super();
        this.params = params;
    }
    composeEntry(severity, message) {
        return { severity, message };
    }
    print(entry) {
        console.log(JSON.stringify(entry));
    }
    log(message) {
        this.print(this.composeEntry(severity_1.Severity.INFO, message));
    }
    error(message) {
        if (this.params.gcpErrorReporting) {
            const composedMessage = typeof message === 'object' && !(message instanceof Error)
                ? JSON.stringify(message) : message;
            message = new Error(composedMessage).stack;
        }
        this.print(this.composeEntry(severity_1.Severity.ERROR, message));
    }
    warn(message) {
        this.print(this.composeEntry(severity_1.Severity.WARNING, message));
    }
    debug(message) {
        this.print(this.composeEntry(severity_1.Severity.DEBUG, message));
    }
    verbose(message) {
        this.print(this.composeEntry(severity_1.Severity.INFO, message));
    }
};
LoggingService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('LoggingServiceParams')),
    __metadata("design:paramtypes", [Object])
], LoggingService);
exports.LoggingService = LoggingService;
//# sourceMappingURL=logging.service.js.map