class ErrorResponse extends Error {
  constructor(status, message) {
    super(message);
    this.status = status;
    this.message = message;
    Object.setPrototypeOf(this, new.target.prototype);
  }

  static badRequest(msg) {
    return new ErrorResponse(400, msg);
  }

  static notFound(msg = "Not found") {
    return new ErrorResponse(404, msg);
  }

  static internalError(msg) {
    return new ErrorResponse(500, msg);
  }

  static unauthorized(msg) {
    return new ErrorResponse(401, msg);
  }
}

export default ErrorResponse;
