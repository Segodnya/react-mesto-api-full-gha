module.exports.DEFAULT_SUCCESS_CODE = 200;
module.exports.SUCCESS_CREATED_CODE = 201;
module.exports.INCORRECT_DATA_ERROR_CODE = 400;
module.exports.FORBIDDEN_ERROR_CODE = 403;
module.exports.NOT_FOUND_ERROR_CODE = 404;
module.exports.DEFAULT_ERROR_CODE = 500;
const { JWT_SECRET } = process.env;
module.exports.JWT_SECRET;
module.exports.URL_REGEXP =
  /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/;
