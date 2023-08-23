import { ConsoleLogger, Inject, Injectable, LoggerService } from '@nestjs/common';
import { LoggerParams } from './loggerParams';
import { Severity } from './severity';

@Injectable()
/**
 * Service for writing logs in a GCP compatible format
 */
export class LoggingService extends ConsoleLogger implements LoggerService {
  private static params: LoggerParams;

  /**
   * Constructor
   *
   * @param {LoggerParams} params
   */
  constructor(
      @Inject('LoggingServiceParams') private params: LoggerParams = {
        gcpErrorReporting: false,
      },
  ) {
    super();
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
    if (this.params.gcpErrorReporting) {
      const composedMessage = typeof message === 'object' && !(message instanceof Error)
        ? JSON.stringify(message) : message;

      message = new Error(composedMessage).stack;
    }

    console.log(JSON.stringify({ severity: Severity.ERROR, message }));
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
