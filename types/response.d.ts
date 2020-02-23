declare namespace CommonResponse {
  interface SuccessResponse {
    errNo: 0;
    errStr: 'success';
    data?: any;
  }
  interface FailResponse {
    errNo: 1;
    errStr: string;
  }
}
