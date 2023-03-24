var body = $response.body;
var regexp = /https?:\/\/[^\s]+mp3/;
body = body.match(regexp);
body = body[0];
//body = body. replace(/\"天\\/g,'"天内\\');
//console.log('lvjiong999999999999999999999999999999999999');
//console.log(body);

$done({body});