import { Global, Module } from '@nestjs/common';
import { LoggerParams } from './loggerParams';
import { LoggingService } from './logging.service';

@Global()
@Module({})
/**
 * LoggingModule
 */
export class LoggingModule {
  public static forRoot(params: LoggerParams) {
    const provider = { provide: 'LoggingServiceParams', useValue: params };

    return {
      module: LoggingModule,
      providers: [provider, LoggingService],
      export: [LoggingService],
    }
  }
}
