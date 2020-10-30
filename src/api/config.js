import axios from 'axios';
import qs from 'qs';
import {message} from 'antd';
import {baseUrlString,testUrl} from './server';

axios.defaults.timeout = 30000;

axios.interceptors.request.use(function (config) {
  // 请求前做点什么
   // console.log('请求',config)
  //  config.headers.Authorization = 'Bearer '+localStorage.getItem("token")
  config.headers.authorization = localStorage.getItem("token")
    return config;
  }, function (error) {
    // 对请求错误做些什么
    
    return Promise.reject(error);
  });

//   console.log('获取服务器配置',testUrl);
//   const baseUrlString=serverApi.baseUrlString;
//   const testUrl=serverApi.testUrl;


// 添加响应拦截器
axios.interceptors.response.use(function (response) {
   // console.log('添加响应拦截器');
   // console.log(response);
   if(response.data.code===2){
      //toke过期，重新登录
      // console.log('重新登录');
      // token过期 删除旧记录
      localStorage.removeItem("token");
      localStorage.removeItem("userName")
   
      //跳到登陆页面
      window.location.href = '/login';
   }
    // 对响应数据做点什么
    // loadingInstance.close();
    // let loading = document.querySelector('.loading');
    // if(loading){
    //    loading.style.display = 'none';
    // }
    return response;
  }, function (error) {
    // 对响应错误做点什么
    
    message.error('服务器连接失败！')
    return Promise.reject(error);
});


//Promise请求
export default async(url, params={},callback,type='post',isStringify=false,test=false) =>{
   return new Promise((resolve, reject) => { 
     
      let finalPath = '';
      if (type === 'get') {
         finalPath=url+'?' + qs.stringify(params);
         params = null;
      }
      else if(type ==='put'){
        // params = qs.stringify(params);
        // finalPath=url;
        if(isStringify){
         finalPath=url+'?' + qs.stringify(params);
         params = null;
        }else{
          
         finalPath=url;
        }
      }
     else{
       
        params = qs.stringify(params);
        finalPath=url;
        
     } 
    
    
		axios({
      baseURL:test === false ? baseUrlString : testUrl,
		  method: type,
		  url:finalPath,
		  data:params,
        headers:{'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
      
      'authorization':localStorage.getItem("token")
      }
		})
		.then(response => {
          //  console.log('token的值：',localStorage.getItem("token"))
           callback(response)
            // if(response.data.statusCode=='00'){
            //     callback && callback(response); 
            // }else if(response.data.statusCode=='4000' || response.data.statusCode=='4001' ||response.data.statusCode=='4002' || response.data.statusCode=='4004'){
            //     // router.push({name: 'login'});
            // }else{
            //    if(response.data.msg){
            //       // Message({
            //       //     message: response.data.msg,
            //       //     type: 'warning',
            //       //     showClose: true
            //       // });
            //       /*if(response.data.statusCode == '15009'){
            //         callback && callback(response);
            //       }*/
            //    }             
            // }         
        }, err => {          
            reject(err);
        })
        .catch((error) => {         
           reject(error)
           
        });
   });
}



