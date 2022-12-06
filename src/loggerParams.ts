
export interface LoggerParams {
    /*
        If set to `true` the message of a 'error' log will be wrapped
        in a stack trace to be recognized by GCP's Error Reporting
    */
    GCP_ERROR_REPORTING?: boolean;
}
