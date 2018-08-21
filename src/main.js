// import 'whatwg-fetch'
// import axios from 'axios';

import fetchIntercept from './util/fetch-interpect';
// import axiosIntercept from './util/axios-interpect';
// import jqueryIntercept from './util/jquery-interpect';

// var $ = require('jquery');
const url = 'http://www.liuweibo.cn:7654/api/life';
const unregister = fetchIntercept.register({
  request: function (url, config) {
    // Modify the url or config here
    console.log('request')
    return [url, config];
  },

  requestError: function (error) {
    // Called when an error occurred during another 'request' interceptor call
    return Promise.reject(error);
  },

  response: function (response) {
    // Modify the response object
    console.log('response')
    return response;
  },

  responseError: function (error) {
    // Handle an fetch error
    return Promise.reject(error);
  }
});

// Call fetch to see your interceptors in action.

const reqData = async () => {
  let data = await fetch('http://www.liuweibo.cn:7654/api/life')
  let json = await  data.json();
  return json;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([1,2,3])
    }, 3000);
  });
}
reqData().then(res=>{
  console.log(res)
})
// console.log($("h1"))
/*$('h1').text('Hello World');
const myAjax = ()=>{
  return new Promise((resolve, reject) => {
    $.ajax({
      url,
      success:(res)=>{
        resolve(res)
      },
    })

  });
}
myAjax().then(res=>{
  console.log('请求完成')
})
myAjax().then(res=>{
  console.log('请求完成')
})*/
// Unregister your interceptor
unregister();

