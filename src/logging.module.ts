import {Global, Module} from '@nestjs/common';
import {LoggerParams} from './loggerParams';
import {LoggingService} from './logging.service';

@Global()
@Module({})
/**
 * LoggingModule
 */
export class LoggingModule {
  public static register(
      params: LoggerParams,
  ) {
    const loggingProvider = {
      provide: LoggingService,
      useFactory: async (): Promise<LoggingService> =>
        LoggingService.load(params),
    };

    return {
      module: LoggingModule,
      providers: [loggingProvider],
      exports: [loggingProvider],
    };
  }
}
