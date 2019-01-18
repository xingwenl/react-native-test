export function requestSuccessFunc (requestObj) {
  // 拦截发送成功请求
  console.log(requestObj)
  return requestObj;
}

export function requestFailFunc (requestError) {
  // 拦截发送失败： 断网、
  return Promise.reject(requestError);
}

export function responseSuccessFunc (responseObj){
  console.log(responseObj)
  return Promise.resolve(responseObj.data);
}
export function responseFailFunc (responseError){
  // 响应失败
  return Promise.reject(responseError);
}
