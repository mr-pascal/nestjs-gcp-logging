"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const logging_service_1 = require("./logging.service");
const severity_1 = require("./severity");
const logMessage = 'my message';
const logSpy = jest.spyOn(console, 'log');
describe('LoggingService', () => {
    let service;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [logging_service_1.LoggingService],
        }).compile();
        service = module.get(logging_service_1.LoggingService);
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
    describe('log', () => {
        const severity = severity_1.Severity.INFO;
        it(`Should log with ${severity} severity`, () => {
            service.log(logMessage);
            expect(logSpy).toHaveBeenLastCalledWith(`{"severity":"${severity}","message":"${logMessage}"}`);
        });
    });
    describe('error', () => {
        const severity = severity_1.Severity.ERROR;
        it(`Should log with ${severity} severity`, () => {
            service.error(logMessage);
            expect(logSpy).toHaveBeenLastCalledWith(`{"severity":"${severity}","message":"${logMessage}"}`);
        });
    });
    describe('warn', () => {
        const severity = severity_1.Severity.WARNING;
        it(`Should log with ${severity} severity`, () => {
            service.warn(logMessage);
            expect(logSpy).toHaveBeenLastCalledWith(`{"severity":"${severity}","message":"${logMessage}"}`);
        });
    });
    describe('debug', () => {
        const severity = severity_1.Severity.DEBUG;
        it(`Should log with ${severity} severity`, () => {
            service.debug(logMessage);
            expect(logSpy).toHaveBeenLastCalledWith(`{"severity":"${severity}","message":"${logMessage}"}`);
        });
    });
    describe('verbose', () => {
        const severity = severity_1.Severity.INFO;
        it(`Should log with ${severity} severity`, () => {
            service.verbose(logMessage);
            expect(logSpy).toHaveBeenLastCalledWith(`{"severity":"${severity}","message":"${logMessage}"}`);
        });
    });
});
describe(`LoggingService with GCP_ERROR_REPORTING=true`, () => {
    let service;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [logging_service_1.LoggingService,
                {
                    provide: 'LoggingServiceParams',
                    useValue: { gcpErrorReporting: true },
                },
            ],
        }).compile();
        service = module.get(logging_service_1.LoggingService);
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
    describe('error', () => {
        const severity = severity_1.Severity.ERROR;
        it(`Should log with ${severity} severity and stack trace in message`, () => {
            service.error(logMessage);
            const expectedLog = expect.stringContaining(`{"severity":"${severity}","message":"Error: ${logMessage}\\n    at LoggingService.error`);
            expect(logSpy).toHaveBeenLastCalledWith(expectedLog);
        });
    });
});
//# sourceMappingURL=logging.service.spec.js.map