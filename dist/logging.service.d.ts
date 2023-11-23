import { ConsoleLogger, LoggerService } from '@nestjs/common';
import { LoggerParams } from './loggerParams';
import { Severity } from './severity';
export declare class LoggingService extends ConsoleLogger implements LoggerService {
    private params;
    constructor(params?: LoggerParams);
    protected composeEntry(severity: Severity, message: any): object;
    protected print(entry: object): void;
    log(message: any): void;
    error(message: any): void;
    warn(message: any): void;
    debug(message: any): void;
    verbose(message: any): void;
}
