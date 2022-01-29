import apiRequest from './request.js';
const HOST = 'http://www.dg.com';
const API_LIST = {
  all: { 
    method: 'POST',
    url: '/e/extend/api/type.php?bclassid=2'
  },
}

/*
  多参数合并
*/
function MyHttp(defaultParams, API_LIST) {
  let _build_url = HOST;
  let resource = {};
  for (let actionName in API_LIST) {
    let _config = API_LIST[actionName];
    resource[actionName] = (pdata) => {
      let _params_data = pdata;
      return apiRequest(_build_url + _config.url, _config.method, _params_data, {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8;Authorization;'
      });
    }
  }
  return resource;
}
const Api = new MyHttp({}, API_LIST);
export default Api;