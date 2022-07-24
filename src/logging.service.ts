import {ConsoleLogger, Injectable, LoggerService} from '@nestjs/common';
import {LoggerParams} from './loggerParams';

@Injectable()
/**
 * Service for writing logs in a GCP compatbile format
 */
export class LoggingService extends ConsoleLogger implements LoggerService {
  private static params: LoggerParams;

  /**
   * Constructor
   *
   * @param {LoggerParams} params
   */
  constructor(
      params: LoggerParams = {},
  ) {
    super();
    LoggingService.params = params;
  }

  /**
   * Return a new instance of the LoggingService
   * @param {LoggerParams} params
   */
  static async load(params: LoggerParams): Promise<LoggingService> {
    return new LoggingService(params);
  }

  /**
   * Write an "INFO" level log
   * @param {any} message
   */
  log(message: any, ...optionalParams: any[]) {
    console.log(JSON.stringify({severity: 'INFO', message: message}));
  }

  /**
   * Write an "error" level log.
   * @param {any} message
   */
  error(message: any, ...optionalParams: any[]) {
    console.log(JSON.stringify({severity: 'ERROR', message: message}));
  }

  /**
   * Write a "WARNING" level log.
   * @param {any} message
   */
  warn(message: any, ...optionalParams: any[]) {
    console.log(JSON.stringify({severity: 'WARNING', message: message}));
  }

  /**
   * Write a "DEBUG" level log.
   * @param {any} message
   */
  debug(message: any, ...optionalParams: any[]) {
    console.log(JSON.stringify({severity: 'DEBUG', message: message}));
  }


  /**
   * Write a "INFO" level log.
   * @param {any} message
   */
  verbose(message: any, ...optionalParams: any[]) {
    console.log(JSON.stringify({severity: 'INFO', message: message}));
  }
}
