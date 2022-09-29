// enums are hold set of named values we used them as varaibles in our code like we do const name=value; the name variable is held at enum kind object

enum STATUS {
  PENDING,
  SUCCESS,
  ERROR,
}

function isSuccess(status: STATUS) {
  return status == STATUS.SUCCESS;
}
isSuccess(STATUS.PENDING);
