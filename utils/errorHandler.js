class AppError extends Error(
  statusCode ,
  message  = " someThing went wrong",
  errors = [],
  stack = ""
){
  constructor(message, statusCode) {
    super(message); // Call the parent Error constructor

    this.statusCode = statusCode;
    this.status = statusCode.startsWith('4') ? 'fail' : 'error';
    this.isOperational = true; // Mark as an operational error

    Error.captureStackTrace(this, this.constructor);
  }

}