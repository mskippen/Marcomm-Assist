class CustomError extends Error {
  constructor(detailsArray, message) {
    super(detailsArray, message);
    this.message = message;
    this.details = detailsArray;
  }
}

module.exports = CustomError;
