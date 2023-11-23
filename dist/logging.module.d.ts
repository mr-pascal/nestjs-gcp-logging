import { DynamicModule } from '@nestjs/common';
import { LoggerParams } from './loggerParams';
export declare class LoggingModule {
    static forRoot(params: LoggerParams): DynamicModule;
}
