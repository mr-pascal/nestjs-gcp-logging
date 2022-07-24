import { Global, Module } from '@nestjs/common';
import { LoggingService } from './logging.service';

@Global()
@Module({})
export class LoggingModule {

  public static register(hell:any) {
    console.log("inside module", hell);

    const loggingProvider = {
      provide: LoggingService,
      useFactory: async (): Promise<LoggingService> => LoggingService.load(hell),
    };

    return {
      module: LoggingModule,
      providers: [loggingProvider],
      exports: [loggingProvider]
    };
  }

}
