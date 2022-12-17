import {ConsoleLogger, Inject, Injectable, LoggerService} from '@nestjs/common';
import {LoggerParams} from './loggerParams';
import {Severity} from './severity';

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
      @Inject('LoggingServiceParams') params: LoggerParams = {
        GCP_ERROR_REPORTING: false,
      },
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
  log(message: any) {
    console.log(JSON.stringify({severity: Severity.INFO, message: message}));
  }

  /**
   * Write an "error" level log.
   * @param {any} message
   */
  error(message: any) {
    if (LoggingService.params.GCP_ERROR_REPORTING) {
      // Wrapping the message in a Error stack makes the Error Reporter recognize it.
      message = Error(message).stack;
    }
    console.log(JSON.stringify({severity: Severity.ERROR, message: message}));
  }

  /**
   * Write a "WARNING" level log.
   * @param {any} message
   */
  warn(message: any) {
    console.log(JSON.stringify({severity: Severity.WARNING, message: message}));
  }

  /**
   * Write a "DEBUG" level log.
   * @param {any} message
   */
  debug(message: any) {
    console.log(JSON.stringify({severity: Severity.DEBUG, message: message}));
  }


  /**
   * Write a "INFO" level log.
   * @param {any} message
   */
  verbose(message: any) {
    console.log(JSON.stringify({severity: Severity.INFO, message: message}));
  }
}
