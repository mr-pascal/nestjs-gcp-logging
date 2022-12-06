import {Test, TestingModule} from '@nestjs/testing';
import {LoggingService} from './logging.service';
import {Severity} from './severity';

const logMessage = 'my message';
const logSpy = jest.spyOn(console, 'log');

describe('LoggingService', () => {
  let service: LoggingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LoggingService],
    }).compile();

    service = module.get<LoggingService>(LoggingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('log', () => {
    const severity = Severity.INFO;
    it(`Should log with ${severity} severity`, () => {
      service.log(logMessage);
      expect(logSpy).toHaveBeenLastCalledWith(`{"severity":"${severity}","message":"${logMessage}"}`);
    });
  });

  describe('error', () => {
    const severity = Severity.ERROR;
    it(`Should log with ${severity} severity`, () => {
      service.error(logMessage);
      expect(logSpy).toHaveBeenLastCalledWith(`{"severity":"${severity}","message":"${logMessage}"}`);
    });
  });

  describe('warn', () => {
    const severity = Severity.WARNING;
    it(`Should log with ${severity} severity`, () => {
      service.warn(logMessage);
      expect(logSpy).toHaveBeenLastCalledWith(`{"severity":"${severity}","message":"${logMessage}"}`);
    });
  });

  describe('debug', () => {
    const severity = Severity.DEBUG;
    it(`Should log with ${severity} severity`, () => {
      service.debug(logMessage);
      expect(logSpy).toHaveBeenLastCalledWith(`{"severity":"${severity}","message":"${logMessage}"}`);
    });
  });

  describe('verbose', () => {
    const severity = Severity.INFO;
    it(`Should log with ${severity} severity`, () => {
      service.verbose(logMessage);
      expect(logSpy).toHaveBeenLastCalledWith(`{"severity":"${severity}","message":"${logMessage}"}`);
    });
  });
});


describe(`LoggingService with GCP_ERROR_REPORTING=true`, () => {
  let service: LoggingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LoggingService,
        {
          provide: 'LoggingServiceParams', // this can be a symbol or a string
          useValue: {GCP_ERROR_REPORTING: true},
        },
      ],
    }).compile();

    service = module.get<LoggingService>(LoggingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('error', () => {
    const severity = Severity.ERROR;
    it(`Should log with ${severity} severity and stack trace in message`, () => {
      service.error(logMessage);
      // No need for checking the WHOLE stackstrace
      const expectedLog = expect.stringContaining(`{"severity":"${severity}","message":"Error: ${logMessage}\\n    at LoggingService.error`);

      expect(logSpy).toHaveBeenLastCalledWith(expectedLog);
    });
  });
});


