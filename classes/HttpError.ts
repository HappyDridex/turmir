class HttpError {
  status: number;
  message: string;
  details: string;

  constructor({
    status,
    message = '',
    details = '',
  }: {
    status: number;
    message?: string;
    details?: string;
  }) {
    this.status = status;
    this.message = message;
    this.details = details;
  }
}

export { HttpError };
