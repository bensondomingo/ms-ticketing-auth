export default abstract class CustomError extends Error {
  abstract statusCode: number;

  constructor(message: string) {
    super(message);
    Object.setPrototypeOf(this, CustomError.prototype);
    console.log(message);
  }

  abstract serializeErrors(): { message: string; field?: string }[];
}
