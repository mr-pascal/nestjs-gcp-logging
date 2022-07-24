import { ConsoleLogger, Injectable, LoggerService } from '@nestjs/common';

@Injectable()
export class LoggingService extends ConsoleLogger implements LoggerService {

  private static hell;

  constructor(
    hell: any = {}
    ) {
      super();
      console.log('init', hell);
      LoggingService.hell = hell;
  }

  static async load(hell: any): Promise<LoggingService> {
    return new LoggingService(hell);
  }

  log(message: any, ...optionalParams: any[]) {
    console.log('hello');
      console.log(JSON.stringify({ severity: 'INFO', message: message }));
  }

  /**
   * Write an "error" level log.
   */
  error(message: any, ...optionalParams: any[]) {
      console.log('hellO');
      console.log(LoggingService.hell);
      console.log(JSON.stringify({ severity: 'ERROR', message: message }));
  }

  /**
   * Write a "warn" level log.
   */
  warn(message: any, ...optionalParams: any[]) {
      console.log(JSON.stringify({ severity: 'WARNING', message: message }));
  }

  /**
   * Write a "debug" level log.
   */
  debug(message: any, ...optionalParams: any[]) {
      console.log(JSON.stringify({ severity: 'DEBUG', message: message }));
  }


  /**
   * Write a "verbose" level log.
   */
  verbose(message: any, ...optionalParams: any[]) {
      console.log(JSON.stringify({ severity: 'INFO', message: message }));
  }
}
