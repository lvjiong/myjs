let headers=$request.headers;
//console.log('lvjiong888888888888888888888888888888888888');
//console.log(headers);
//headers['User-Agent']='Mozilla/5.0 (iPhone; CPU iPhone OS 15_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 SP-engine/2.60.0 main/1.0 baiduboxapp/13.22.5.12 (Baidu; P2 15.6) NABar/1.0 themeUA=Theme/default';
headers['User-Agent']='Mozilla/5.0 (iPhone; CPU iPhone OS 16_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 SearchCraft/3.9.0 (Baidu; P2 16.3)';
//console.log('lvjiong999999999999999999999999999999999999');
//console.log(headers);
$done({headers});