import { ConsoleLogger, Inject, Injectable, LoggerService } from '@nestjs/common';
import { LoggerParams } from './loggerParams';
import { Severity } from './severity';

@Injectable()
/**
 * Service for writing logs in a GCP compatible format
 */
export class LoggingService extends ConsoleLogger implements LoggerService {

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

  protected composeEntry(severity: Severity, message: any) {
    return { severity, message };
  }

  protected print(entry: object) {
    console.log(JSON.stringify(entry));
  }

  /**
   * Write an "INFO" level log
   * @param {any} message
   */
  log(message: any) {
    this.print(this.composeEntry(Severity.INFO, message));
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

    this.print(this.composeEntry(Severity.ERROR, message));
  }

  /**
   * Write a "WARNING" level log.
   * @param {any} message
   */
  warn(message: any) {
    this.print(this.composeEntry(Severity.WARNING, message));
  }

  /**
   * Write a "DEBUG" level log.
   * @param {any} message
   */
  debug(message: any) {
    this.print(this.composeEntry(Severity.DEBUG, message));
  }


  /**
   * Write a "INFO" level log.
   * @param {any} message
   */
  verbose(message: any) {
    this.print(this.composeEntry(Severity.INFO, message));
  }
}
