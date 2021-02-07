import CustomError from "./custom-error";

export default class NotFoundError extends CustomError {
  statusCode = 404;
  constructor(private url: string) {
    super(`Route not found: ${url}`);
    Object.setPrototypeOf(this, NotFoundError.prototype);
  }

  serializeErrors() {
    return [{ message: `Route not found: ${this.url}` }];
  }
}
