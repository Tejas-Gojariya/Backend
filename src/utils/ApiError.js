class ApiError extends Error {
    constructor(
        statusCode,
        message = "something went wrong",
        error = [],
        statck = ""
    ) {
        super(message);
        this.statusCode = statusCode;
        this.data = null;
        this.message = message;
        this.suceess = false;
        this.error = error;

        if (statck) {
            this.stack = statck;
        } else {
            Error.captureStackTrace(this, this.contructor);
        }
    }
}

export { ApiError };