import { HttpError } from "@/classes/HttpError";

const isHttpError = (error: unknown): error is HttpError =>
  error instanceof HttpError;

const parseErrorMessage = (error: unknown) => {
  switch (true) {
    // http
    case isHttpError(error):
      return error.message;
    // nuxt
    // eslint-disable-next-line
    case (error as any)?.cause?.message:
      // eslint-disable-next-line
      return (error as any).cause.message;
    // runtime
    case !!(error as Error)?.message:
      return (error as Error).message;
    // string
    case typeof error === "string":
      return error;
  }
};

export { isHttpError, parseErrorMessage };
