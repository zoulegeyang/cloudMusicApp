export const baseUrl = 'http://192.168.44.139:3000/'
export function parseParams(params) {
    let url='';
    if (params) {
        let paramsArray = [];
        //拼接参数
        Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]))
        url += '?' + paramsArray.join('&')
       
    }
    return url;
}