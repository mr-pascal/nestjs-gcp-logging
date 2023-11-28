import { Severity } from './severity';

export interface LogEntry {
  message: unknown;
  severity: Severity;
}